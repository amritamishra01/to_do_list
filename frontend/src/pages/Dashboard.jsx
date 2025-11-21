import Navbar from '../components/Navbar';
import Tasks from './Tasks';

const Dashboard = () => {
  return (
    // 1. Changed background to a subtle gradient
    // 2. Added a modern sans-serif font stack underneath
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 font-sans">
      <Navbar />
      {/* 3. Increased padding (p-8) and max-width (max-w-4xl) for more spaciousness */}
      <main className="container mx-auto p-8 max-w-4xl">
        {/* 4. Made heading larger, bolder, and a darker shade of indigo */}
        <h2 className="text-4xl font-extrabold mb-10 tracking-tight text-indigo-900">
          My Dashboard
        </h2>
        {/* We render the Tasks component here */}
        <Tasks />
      </main>
    </div>
  );
};

export default Dashboard;