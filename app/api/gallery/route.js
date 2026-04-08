import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// 🛡️ SECURITY: Cloudinary Config (Server-side Only)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const GALLERY_TAG = 'darulhidaya_gallery';

export async function GET() {
  try {
    // 🛡️ Fetch directly from Cloudinary (No local database needed)
    const { resources } = await cloudinary.api.resources_by_tag(GALLERY_TAG, {
      max_results: 100,
      context: true
    });

    const items = resources.map(res => ({
      img: res.secure_url,
      public_id: res.public_id
    }));

    return NextResponse.json(items);
  } catch (error) {
    console.error('Cloudinary GET Error:', error);
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

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🛡️ Upload to Cloudinary
    return new Promise((resolve) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { 
          tags: [GALLERY_TAG],
          folder: 'darulhidaya'
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary Upload Error:', error);
            resolve(NextResponse.json({ success: false, error: error.message }, { status: 500 }));
          } else {
            resolve(NextResponse.json({ 
                success: true, 
                item: { 
                    img: result.secure_url, 
                    public_id: result.public_id 
                } 
            }));
          }
        }
      );
      uploadStream.end(buffer);
    });

  } catch (error) {
    console.error('Gallery API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { public_id } = await request.json();

    if (!public_id) {
      return NextResponse.json({ success: false, error: 'No public_id provided' }, { status: 400 });
    }

    // 🛡️ Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(public_id);
    
    if (result.result === 'ok') {
        return NextResponse.json({ success: true });
    } else {
        throw new Error('Cloudinary deletion failed');
    }

  } catch (error) {
    console.error('Cloudinary DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
