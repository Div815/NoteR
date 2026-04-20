import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <header className=' bg-white/50 backdrop-blur-md border-b border-white/30 '>
        <div className="mx-auto max-w-6xl px-4 py-4 ">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-700 font-mono">NoteR</h1>
            <div className="flex items-center gap-4 ">
              <Link to={'/create'} className="btn  btn-sm  text-black  border-white/20 bg-white/60 hover:bg-white/80  ">
              <PlusIcon className='size-4 ' />
               Create Note
              </Link>
            </div>
          </div>
        </div>
    </header>
  )
}

export default NavBar