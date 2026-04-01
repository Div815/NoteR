import express from 'express';
const router = express.Router();
import {getNotes, updateNode,createNote,deleteNote} from '../controllers/notesController.js'

router.get('/',getNotes)
router.post('/',createNote)
router.put('/:id',updateNode)
router.delete('/:id',deleteNote)

export default router;