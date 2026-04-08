import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile } from 'fs/promises';

const dataPath = path.join(process.cwd(), 'data', 'gallery.json');
const uploadDir = path.join(process.cwd(), 'public', 'gallery');

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function GET() {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename with better sanitization
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${Date.now()}-${sanitizedName}`;
    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);

    // Update gallery.json
    const data = fs.readFileSync(dataPath, 'utf8');
    const gallery = JSON.parse(data);
    
    const newItem = {
      img: `/gallery/${filename}`
    };
    
    gallery.push(newItem);
    fs.writeFileSync(dataPath, JSON.stringify(gallery, null, 2));

    return NextResponse.json({ success: true, item: newItem });
  } catch (error) {
    console.error('Gallery Upload API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { index } = await request.json();
    const data = fs.readFileSync(dataPath, 'utf8');
    let gallery = JSON.parse(data);
    
    const itemToDelete = gallery[index];
    
    // Optional: Delete the file from public/gallery as well
    if (itemToDelete && itemToDelete.img.startsWith('/gallery/')) {
        const filePath = path.join(process.cwd(), 'public', itemToDelete.img);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }

    gallery.splice(index, 1);
    
    fs.writeFileSync(dataPath, JSON.stringify(gallery, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
