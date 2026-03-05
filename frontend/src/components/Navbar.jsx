import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          TASK MANAGEMENT
        </h1>
        <Link
          to="/create"
          className="flex items-center gap-2 bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
        >
          <PlusIcon className="size-5" />
          New Task
        </Link>

      </div>
    </header>
  );
};

export default Navbar;