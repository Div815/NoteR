import {  PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e,id )=>{
        e.preventDefault();
        if(!window.confirm("Do you want to delete this note?")) return;
        try {
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted successfully");
            setNotes(prevNotes => prevNotes.filter(n => n._id !== id)); // Remove the deleted note from the display 
        } catch (error) {
            toast.error("Failed to delete the note");
            console.error("error in deleting ",error)
        }
    }
  return (
    <Link to={`/note/${note._id}`} className="card rounded-3xl border border-white/70 bg-white/30 backdrop-blur-lg p-6 shadow-xl  ">
    <div className='card-body text-fuchsia-950 '>
        <h3 className="card-title ">{note.title}</h3>
        <p className=" line-clamp-3 ">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4 ">
            <span className="text-sm ">{formatDate(new Date(note.createdAt))}</span>
            <div className="flex items-center gap-1">
                <PenSquareIcon className="text-primary" size={18} /> 
                <button className="btn btn-ghost btn-sm p-0" onClick ={(e)=>handleDelete(e,note._id)}>
                    <Trash2Icon className="text-red-600 transition hover:scale-110" size={18} />
                </button>

            </div>

        </div>
    </div>    
    </Link> 
  )
}

export default NoteCard