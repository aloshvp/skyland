import { promises as fs } from 'fs';
import path from 'path';


const BASE_DIR = path.resolve(process.cwd(), 'public', 'files');

const ALLOWED_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.svg',
  '.pdf',
  '.doc',
  '.docx'
]);

const getContentType = (extension) => {
  switch (extension) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    case '.svg':
      return 'image/svg+xml';
    case '.pdf':
      return 'application/pdf';
    case '.doc':
      return 'application/msword';
    case '.docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    default:
      return 'application/octet-stream';
  }
};

export async function GET(request, context) {
  try {

    const resolvedParams = await context.params;
    const fileSegments = resolvedParams.path || [];

    if (fileSegments.length === 0) {
      return new Response('File path missing', { status: 400 });
    }


    const requestedPath = path.resolve(BASE_DIR, ...fileSegments);


    if (!requestedPath.startsWith(BASE_DIR)) {
      return new Response('Access denied', { status: 403 });
    }

    const extension = path.extname(requestedPath).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(extension)) {
      return new Response('File type not allowed', { status: 415 });
    }


    const stat = await fs.stat(requestedPath);

    if (!stat.isFile()) {
      return new Response('Not a file', { status: 404 });
    }


    const fileBuffer = await fs.readFile(requestedPath);
    const contentType = getContentType(extension);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': stat.size.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Asset API error:', error.message);
    return new Response('File not found', { status: 404 });
  }
}
