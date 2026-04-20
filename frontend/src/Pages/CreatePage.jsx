import  { useState } from 'react'
import { Link, useNavigate} from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import api from '../lib/axios.js';
const CreatePage = () => {
  const [title , setTitle] = useState("");
  const [content , setContent]=useState("");
  const [ loading , setLoading]= useState(false);
  const navigate = useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!title){
      toast.error("Title is required");
      return 
    }
    else if(!content){
      toast.error("Content is required");
      return 
    }
    setLoading(true);
    try {
      await api.post('/notes', {
        title,
        content
      });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log("Error creating the note",error);
      toast.error("Failed to create note");
    }finally{
      setLoading(false);
    }
  }


  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-300/60">
      
      <div className=' container mx-auto p-10 '>
        <div className="max-w-2xl mx-auto  "> 
          <Link to={"/"} className="btn border bg-white/40 border-white/40 hover:bg-white/40 text-purple-900">
          <ArrowLeftIcon className="size-4" />
          Back to Notes
          </Link>

          <div className="card bg-white/40 backdrop-blur-2xl mt-3 text-purple-900">
            <div className='card-body  '>
              <h2 className='card-title text-2xl '>Create a Note </h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4 "> 
                    <label  className="label ">
                      <span className="label-text text-purple-900">Title</span>
                    </label>
                    <input type='text'
                    placeholder='Give a Title '
                    className='input  bg-white/50 border-slate-200/50'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label  className="label">
                      <span className="label-text text-purple-900">Content</span>
                    </label>
                    <textarea placeholder='Give a Content '
                    className='input bg-white/50 border-slate-200/50 h-32 '
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <button type="submit" className="btn border border-transparent text-purple-900 bg-white/20 hover:border-neutral-400 hover:bg-white/50" disabled={loading}>
                      {loading ? "Creating..." : "Create Note"}
                    </button>
                  </div>
                </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage