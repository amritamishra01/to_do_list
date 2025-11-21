import { useState, useEffect } from 'react';
import api from '../api/axios';
import TaskItem from '../components/TaskItem';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  // 1. Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 2. Add Task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const res = await api.post('/tasks', { title });
      setTasks([res.data, ...tasks]); // Add to top
      setTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  // 3. Delete Task
  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // 4. Update Task
  const handleUpdate = async (id, updates) => {
    try {
      const res = await api.put(`/tasks/${id}`, updates);
      setTasks(tasks.map(t => t._id === id ? res.data : t));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="mb-6 bg-white p-4 rounded shadow">
        <div className="flex gap-2">
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border p-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
        </div>
      </form>

      {/* Task List */}
      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task._id} 
            task={task} 
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  );
};

export default Tasks;