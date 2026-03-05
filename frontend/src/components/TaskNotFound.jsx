import { Link } from "react-router";

const TaskNotFound = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">
        No Tasks Found
      </h2>
      <Link to="/create" className="btn btn-primary mt-4">
        Add First Task
      </Link>
    </div>
  );
};

export default TaskNotFound;