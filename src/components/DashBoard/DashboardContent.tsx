import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface User {
    id: number;
    name: string;
    email: string;
    role: 'Employer' | 'Student';
    dateOfJoining: string;
}


interface Stat {
    name: string;
    value: number;
  }

const stats: Stat[] = [
  { name: 'Total Users', value: 1234 },
  { name: 'Total Students', value: 890 },
  { name: 'Total Employers', value: 344 },
];

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', dateOfJoining: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Employer', dateOfJoining: '2023-06-21' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', dateOfJoining: '2023-12-05' },
];

const DashboardContent = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <motion.div key={stat.name} className="bg-white p-6 rounded-lg shadow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h3 className="text-lg font-semibold text-gray-600">{stat.name}</h3>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </motion.div>
      ))}
    </div>
    <div className="bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold p-4 border-b">All Users</h3>
            <ul className="divide-y">
                {users.map((user) => (
                    <li key={user.id} className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-avatar.jpg" alt={`${user.name}'s avatar`} />
                                <AvatarFallback>{user.name.split(' ').map(word => word[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                <p className="text-xs text-gray-500">Joined on {user.dateOfJoining}</p>
                            </div>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${user.role === 'Employer' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                            {user.role}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
  </div>
);

export default DashboardContent;
