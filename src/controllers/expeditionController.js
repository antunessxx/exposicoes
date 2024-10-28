import Expedition from '../models/expeditionModel.js';

export const store = async (req, res) =>{
    try{
        const expedition = await Expedition.create(req.body);
        return res.status(201).json(expedition);
    }catch (error){
        return res.status(400).json({message: error.message});
    }
};

