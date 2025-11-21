const TaskItem = ({ task, onDelete, onUpdate }) => {
  return (
    <div className="bg-white p-4 rounded shadow border border-gray-200 flex justify-between items-center mb-3">
      <div>
        <h3 className={`font-bold text-lg ${task.status === 'done' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        <p className="text-gray-600 text-sm">{task.description}</p>
        <span className={`text-xs px-2 py-1 rounded mt-2 inline-block 
          ${task.status === 'done' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {task.status}
        </span>
      </div>
      <div className="flex gap-2">
        {task.status !== 'done' && (
          <button 
            onClick={() => onUpdate(task._id, { status: 'done' })}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
          >
            Done
          </button>
        )}
        <button 
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;