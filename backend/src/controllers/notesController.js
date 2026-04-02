import Note from "../Model/Note.js";

export async function getNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("An error occured in getNotes CONTROLLER ",error);
     res.status(500).json({message:error.message})
    }
}

export async function  createNote (req,res){
   try {
    const {title,content } = req.body;
    const newNote = new Note({title , content});
    await newNote.save();
    res.status(201).json({message:"Note created Succesfully", note:newNote})
   } catch (error) {
    console.error("An error occured in createNote CONTROLLER ",error);
    res.status(500).json({message:error.message})
   }
}

export async function  updateNode  (req,res){
    
    res.status(200).json({message:`note updated successfully`})
}

export async function  deleteNote (req,res){
    res.status(200).json({message:`note deleted successfully`})
}