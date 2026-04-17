import express from 'express';
const router = express.Router();
import {getNotes, updateNode,createNote,deleteNote,getNotesById} from '../controllers/notesController.js'

router.get('/',getNotes)
router.get('/:id',getNotesById)
router.post('/',createNote)
router.put('/:id',updateNode)
router.delete('/:id',deleteNote)

export default router;