import { Link, useLocation } from "react-router";
import { CalendarDays, Tag, CheckCircle, Edit2, Trash2 } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const TaskCard = ({ task, setTasks }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === `/task/${task._id}`;

  const handleDelete = async () => {
    try {
      await api.delete(`/task/${task._id}`);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Failed to delete task");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <Link
        to={`/task/${task._id}`}
        className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 p-6 border border-gray-700 text-white"
      >
        
        <div className="flex justify-between items-start mb-3">

          <p className="text-xs text-gray-400 break-all max-w-[70%]">
            {task._id}
          </p>
          <div className="flex items-center gap-3">

      <button
            className="border border-blue-400 text-blue-400 
             px-3 py-1 rounded-lg text-sm font-medium
             hover:bg-blue-400 hover:text-white 
             transition duration-200"> Edit
      </button>

  
      <button
        onClick={(e) => {
        e.preventDefault();
        setShowModal(true);
    }}
          className="border border-red-400 text-red-400 
               px-3 py-1 rounded-lg text-sm font-medium
               hover:bg-red-400 hover:text-white 
               transition duration-200"> Delete
       </button>

</div>
        </div>

        <h2 className="text-lg font-bold text-white mb-2">
          {task?.title || "No Title"}
        </h2>

        <p className="text-sm text-gray-300">
          {task?.description || "No Description"}
        </p>

        <div className="flex items-center gap-3 mt-4 flex-wrap">
          <span className="px-3 py-1 text-xs rounded-full bg-cyan-100 text-cyan-600 font-medium flex items-center gap-1">
            <Tag className="size-3" />
            {task.category}
          </span>

         
          <span
            className={`px-3 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${
              task.status === "pending"
                ? "bg-orange-100 text-orange-600"
                : task.status === "in-progress"
                ? "bg-blue-100 text-blue-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            <CheckCircle className="size-3" />
            {task.status}
          </span>

          <span
            className={`px-3 py-1 text-xs rounded-full font-medium ${
              task.priority === "high"
                ? "bg-red-100 text-red-600"
                : task.priority === "medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {task.priority}
          </span>

        </div>

        
        <div className="mt-6 flex justify-between items-center">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <CalendarDays className="size-3" />
            {task.dueDate ? formatDate(task.dueDate) : "No Date"}
          </span>

          <span className="text-xs text-gray-400 flex items-center gap-1">
            <CalendarDays className="size-3" />
            {task.createdAt ? formatDate(task.createdAt) : "No Date"}
          </span>
        </div>
      </Link>

      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box bg-gray-800 text-white">
            <h3 className="font-bold text-lg text-red-400 flex items-center gap-2">
              <Trash2 className="size-5" /> Delete Task
            </h3>
            <p className="py-4 text-gray-300">
              Are you sure you want to delete
              <span className="font-semibold text-white">
                {" "}“{task.title}”
              </span>
              ? This action cannot be undone.
            </p>
            <div className="modal-action">
              <button
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-error flex items-center gap-2"
                onClick={handleDelete}
              >
                <Trash2 className="size-4" /> Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default TaskCard;