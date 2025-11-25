import express from 'express';
import authRoutes from './src/routes/authRoutes.js';
import artworkRoutes from './src/routes/artworkRoutes.js'

const app = express();
app.use(express.json());
app.use('/artworks', artworkRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Server running')
})

export default app;

