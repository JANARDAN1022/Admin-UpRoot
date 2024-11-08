import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type User = {
  id: number;
  name: string;
  email: string;
  role: 'Employer' | 'Student';
  dateOfJoining: string;
};

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', dateOfJoining: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Employer', dateOfJoining: '2023-06-21' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', dateOfJoining: '2023-12-05' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Employer', dateOfJoining: '2023-09-13' },
  { id: 5, name: 'John Doe', email: 'john@example.com', role: 'Student', dateOfJoining: '2024-01-15' },
  { id: 6, name: 'Jane Smith', email: 'jane@example.com', role: 'Employer', dateOfJoining: '2023-06-21' },
  { id: 7, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', dateOfJoining: '2023-12-05' },
  { id: 8, name: 'Alice Brown', email: 'alice@example.com', role: 'Employer', dateOfJoining: '2023-09-13' },

];

export default function UsersContent() {
  return (
    <div className="bg-white rounded-lg shadow  h-full max-h-[40rem] overflow-hidden">
      <h3 className="text-lg font-semibold p-4 border-b">All Users</h3>
      <ul className="divide-y h-full overflow-auto overflow-x-hidden">
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
  );
}
