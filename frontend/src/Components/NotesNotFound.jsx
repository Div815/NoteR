import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-indigo-600" />
      </div>
      <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">No notes yet</h3>
      <p className="mt-3 max-w-xs text-lg text-slate-600/90 leading-relaxed">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn mt-10 rounded-2xl bg-indigo-600 px-8 py-4 text-white font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;