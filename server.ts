import express from 'express';
import multer from 'multer';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';

const PORT = 3000;

// Ensure public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Set up multer for file upload to the public folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicDir);
  },
  filename: function (req, file, cb) {
    // Keep the original name provided by the user, or use a fieldname
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

async function startServer() {
  const app = express();

  // API Route for uploading images
  app.post('/api/upload', (req, res, next) => {
    upload.single('image')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.error('Multer error:', err);
        return res.status(400).json({ error: err.message });
      } else if (err) {
        console.error('Unknown upload error:', err);
        return res.status(500).json({ error: 'Unknown upload error' });
      }
      next();
    });
  }, (req, res) => {
    if (!req.file) {
      console.error('Upload failed: No file received');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const target = req.query.target as string;
    const filenameMap: Record<string, string> = {
      storefront: 'storefront.jpeg',
      interior: 'interior.jpeg'
    };

    let filename = req.file.filename;
    if (target && filenameMap[target]) {
      const targetName = filenameMap[target];
      fs.renameSync(
        path.join(publicDir, filename),
        path.join(publicDir, targetName)
      );
      filename = targetName;
    }

    res.json({ 
      success: true, 
      filename: filename,
      url: `/${filename}` 
    });
  });

  // API Route for listing uploaded images
  app.get('/api/images', (req, res) => {
    try {
      const files = fs.readdirSync(publicDir);
      res.json(files.filter(f => f !== '.gitkeep'));
    } catch (e) {
      res.json([]);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(express.static(publicDir));
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(publicDir));
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
