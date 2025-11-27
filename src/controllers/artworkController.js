import { Artwork } from "../../models/Artwork.js"

export const getAllArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.find();
        if (!artworks) return res.status(404).send('Not found');
        res.json(artworks);
    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
}

export const getArtwork = async (req, res) => {
    try {
        const artwork = await Artwork.findById(req.params.id);
        if (!artwork) return res.status(404).send('Not found');
        res.json(artwork);
    } catch (error) {
        res.status(500).json({ error: error.massage })
    }
}

export const createArtwork = async (req, res) => {
    try {
        const { title, description, image_url, category } = req.body;
        const artwork = await Artwork.create({ title: title, 
            description: description, 
            image_url: image_url,
            category: category  });
        res.json(artwork);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
    
}

export const updateArtWork = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image_url, category } = req.body;
        const artwork = await Artwork.findOne({ id });


        if (!artwork) return res.status(404).json({msg: 'Artwork not found'});
        
        await artwork.findByIdAndUpdate(id, { title }, { description }, { image_url }, { category }, { new: true });
        res.status(200).json({ msg: 'Artwork updated', artwork });
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: 'Server error' })
    }

}

export const deleteArtwork = async (req, res) => {
    try {
        const { id } = req.params;
        const artwork = await Artwork.findByIdAndDelete(id);


        if (!artwork) return res.status(404).json({msg: 'Artwork not found'});
        
        await artwork.destroy();
        res.status(200).json({ msg: 'Artwork deleted', artwork });
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: 'Server error' })
    }
    
}