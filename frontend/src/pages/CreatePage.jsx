import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    category: "personal",
    status: "pending",
    priority: "medium"
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/task", form);
      toast.success("Task created successfully");
      navigate("/");
    } catch {
      toast.error("Failed to create task");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/" className="btn btn-ghost mb-4">
        Back
      </Link>

      <form onSubmit={handleSubmit} className="card p-6 shadow-lg bg-base-100">

        <input
          placeholder="Title"
          className="input input-bordered mb-4"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="textarea textarea-bordered mb-4"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="date"
          className="input input-bordered mb-4"
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />

        <select
          className="select select-bordered mb-4"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
        </select>

        <select
          value={form.status}
          className="select select-bordered mb-4"
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          className="select select-bordered mb-4"
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

         <button
          type="submit"
          className="w-full border border-blue-500 text-blue-500
             font-semibold py-2.5 rounded-xl
             hover:bg-blue-500 hover:text-white
             transition duration-300">Create Task
         </button>
      </form>
    </div>
  );
};

export default CreatePage;
