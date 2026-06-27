import express from 'express';
import { upload, uploadImage, getImages, deleteImage } from '../Controllers/uploadController.js';

const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/images', getImages);
router.delete('/images/:filename', deleteImage);

export default router;
