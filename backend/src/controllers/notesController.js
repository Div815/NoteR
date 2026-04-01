export const getNotes = (req,res)=>{
    res.status(200).send('You fetched the notes succesfully  ')
}

export const createNote = (req,res)=>{
    res.status(201).json({message:'note created successfully'})
}

export const updateNode = (req,res)=>{
    
    res.status(200).json({message:`note updated successfully`})
}

export const deleteNote = (req,res)=>{
    res.status(200).json({message:`note deleted successfully`})
}