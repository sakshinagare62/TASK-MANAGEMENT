import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskNotFound from "../components/TaskNotFound";
import api from "../lib/axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/task");
      setTasks(Array.isArray(res.data) ? res.data : []);
    } catch {
      toast.error("Failed to load tasks");
    }
  };

  
  const filteredTasks = tasks
    .filter((task) => {
      return (
        (category === "" || task.category === category) &&
        (priority === "" || task.priority === priority) &&
        (status === "" || task.status === status) && 
        task.title.toLowerCase().includes(search.toLowerCase())
      );
    })
    .sort((a, b) => {
  if (sort === "priority") {
    const priorityOrder = {
      high: 1,
      medium: 2,
      low: 3
    };

    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }

      if (sort === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br 
                from-[#0f172a]  via-[#111827] to-[#1e1b4b] text-white" >
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <input
          type="text"
          placeholder="Search tasks..."
          className="input input-bordered w-full mb-6 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
        <div className="flex flex-wrap gap-4 mb-6">
       
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-900 text-gray-300 border border-gray-700 
               rounded-xl px-4 py-2 
               hover:border-purple-500 hover:text-white 
               transition duration-200"
  >
        <option value="">All Category</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="study">Study</option>
        </select>

  
        <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="bg-gray-900 text-gray-300 border border-gray-700 
               rounded-xl px-4 py-2 
               hover:border-purple-500 hover:text-white 
               transition duration-200"
  >
    <option value="">All Priority</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>

  
      <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="bg-gray-900 text-gray-300 border border-gray-700 
               rounded-xl px-4 py-2 
               hover:border-purple-500 hover:text-white 
               transition duration-200"
  >
       <option value="">All Status</option>
       <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
      </select>

  
  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className={`rounded-xl px-4 py-2 border transition duration-200 ${
      sort
        ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/30"
        : "bg-gray-900 text-gray-300 border-gray-700 hover:border-purple-500"
    }`}
  >
    <option value="">Sort</option>
    <option value="priority">Sort by Priority</option>
    <option value="dueDate">Sort by Due Date</option>
  </select>
  
</div>
        {filteredTasks.length === 0 && <TaskNotFound />}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              setTasks={setTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;  