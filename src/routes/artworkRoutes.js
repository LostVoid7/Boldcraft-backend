import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getAllArtworks, getArtwork, createArtwork, updateArtWork, deleteArtwork } from '../controllers/artworkController.js';
import { upload } from '../middleware/upload.js';
import { uploadImage } from '../controllers/uploadController.js';

const router = express.Router();

router.get('/', getAllArtworks);
router.get('/:id', getArtwork);
router.post('/', authMiddleware, createArtwork);
router.put('/:id', authMiddleware, updateArtWork);
router.delete('/:id', authMiddleware, deleteArtwork);

router.post('/upload-image', authMiddleware, upload.single('image'), uploadImage);

export default router;
