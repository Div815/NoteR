import Note from "../Model/Note.js";

export async function getNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1}); //displays the newest note first 
        res.status(200).json(notes);
    } catch (error) {
        console.error("An error occured in getNotes CONTROLLER ",error);
     res.status(500).json({message:error.message})
    }
}

export async function getNotesById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"})
            res.status(200).json(note)
    } catch (error) {
        console.error("An error occured in getNotesById CONTROLLER ",error);
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
    
    try {
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({updatedNote})
    } catch (error) {
        console.error("An error occured in updateNote CONTROLLER ",error);
        res.status(500).json({message:error.message})
    }
}

export async function  deleteNote (req,res){
    try {
        const deletedNote=await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({message:"Note deleted Succesfully", note:deletedNote})
    } catch (error) {
        console.error("An error occured in deleteNote CONTROLLER ",error);
        res.status(500).json({message:error.message})
    }
}
