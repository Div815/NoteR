import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <header className=' bg border-b border-blue-400'>
        <div className="mx-auto max-w-6xl px-4 py-4 ">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-fuchsia-50 font-mono">NoteR</h1>
            <div className="flex items-center gap-4 ">
              <Link to={'/create'} className="btn  btn-sm border border-blue-400 hover:bg-blue-400">
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