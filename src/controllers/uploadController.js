import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

import streamifier from 'streamifier';

export const uploadImage = async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ msg: 'No file uploaded.'});

        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'artworks' },
            (error, result) => {
                if (error) return res.status(500).json({ message: 'Upload failed', error });
                return res.json({ url: result.secure_url });
            }
        );

        streamifier.createReadStream(file.buffer).pipe(uploadStream);

    } catch (error) {
        res.status(500).json({ msg: 'Server error', err });
    }
}
