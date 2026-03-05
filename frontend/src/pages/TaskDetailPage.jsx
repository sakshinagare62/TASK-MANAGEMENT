import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

const TaskDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    api.get(`/task/${id}`)
      .then(res => {
        const data = res.data;

        
        if (data.dueDate) {
          data.dueDate = data.dueDate.split("T")[0];
        }

        setTask(data);
      })
      .catch(() => toast.error("Failed to fetch task"));
  }, [id]);

  const handleUpdate = async () => {
    try {
      await api.put(`/task/${id}`, task);
      toast.success("Task updated");
      navigate("/");
    } catch {
      toast.error("Update failed");
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/task/${id}`);
      toast.success("Task deleted");
      navigate("/");
    } catch {
      toast.error("Delete failed");
    }
  };

  if (!task) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <Link to="/" className="btn btn-ghost mb-4">
        Back
      </Link>

      <div className="card p-6 shadow bg-base-100 space-y-4">

        
        <input
          value={task.title || ""}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
          placeholder="Title"
          className="input input-bordered w-full"
        />

        
        <textarea
          value={task.description || ""}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        />
          
        <input
          type="date"
          value={task.dueDate || ""}
          onChange={(e) =>
            setTask({ ...task, dueDate: e.target.value })
          }
          className="input input-bordered w-full"
        />

        
        <select
          value={task.category || ""}
          onChange={(e) =>
            setTask({ ...task, category: e.target.value })
          }
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
        </select>

        
        <select
          value={task.status || ""}
          onChange={(e) =>
            setTask({ ...task, status: e.target.value })
          }
          className="select select-bordered w-full"
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        
        <select
          value={task.priority || ""}
          onChange={(e) =>
            setTask({ ...task, priority: e.target.value })
          }
          className="select select-bordered w-full"
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

      
        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            className="btn btn-primary flex-1"
          >
            Update
          </button>

          <button
            onClick={handleDelete}
            className="btn btn-error flex-1"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default TaskDetailPage;