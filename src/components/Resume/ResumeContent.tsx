import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Resume = {
  id: number;
  name: string;
  email: string;
  role: 'Employer' | 'Student';
  dateOfJoining: string;
  dateOfUploading: string;
  resumeFileName: string;
};

const resumes: Resume[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', dateOfJoining: '2024-01-15', dateOfUploading: '2024-02-10', resumeFileName: 'John_Doe_Resume.pdf' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Employer', dateOfJoining: '2023-06-21', dateOfUploading: '2023-07-05', resumeFileName: 'Jane_Smith_CV.pdf' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', dateOfJoining: '2023-12-05', dateOfUploading: '2023-12-15', resumeFileName: 'Bob_Johnson_Resume.pdf' },
  { id: 4, name: 'John Doe', email: 'john@example.com', role: 'Student', dateOfJoining: '2024-01-15', dateOfUploading: '2024-02-10', resumeFileName: 'John_Doe_Resume.pdf' },
  { id: 5, name: 'Jane Smith', email: 'jane@example.com', role: 'Employer', dateOfJoining: '2023-06-21', dateOfUploading: '2023-07-05', resumeFileName: 'Jane_Smith_CV.pdf' },
  { id: 6, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', dateOfJoining: '2023-12-05', dateOfUploading: '2023-12-15', resumeFileName: 'Bob_Johnson_Resume.pdf' },
  { id: 7, name: 'John Doe', email: 'john@example.com', role: 'Student', dateOfJoining: '2024-01-15', dateOfUploading: '2024-02-10', resumeFileName: 'John_Doe_Resume.pdf' },
  { id: 8, name: 'Jane Smith', email: 'jane@example.com', role: 'Employer', dateOfJoining: '2023-06-21', dateOfUploading: '2023-07-05', resumeFileName: 'Jane_Smith_CV.pdf' },
  { id: 9, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', dateOfJoining: '2023-12-05', dateOfUploading: '2023-12-15', resumeFileName: 'Bob_Johnson_Resume.pdf' },

];

export default function ResumesContent() {
  return (
    <div className="bg-white rounded-lg shadow  h-full max-h-[40rem] overflow-hidden">
      <h3 className="text-lg font-semibold p-4 border-b">All Resumes</h3>
      <ul className="divide-y h-full overflow-auto overflow-x-hidden">
        {resumes.map((resume) => (
          <li key={resume.id} className="p-4  flex items-center justify-between">
            <div className="flex items-center space-x-4 ">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt={`${resume.name}'s avatar`} />
                <AvatarFallback>{resume.name.split(' ').map(word => word[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{resume.name}</p>
                <p className="text-sm text-gray-600">{resume.email}</p>
                <p className="text-xs text-gray-500">Joined on {resume.dateOfJoining}</p>
                <p className="text-xs text-gray-500">Uploaded on {resume.dateOfUploading}</p>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${resume.role === 'Employer' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
              {resume.role}
            </span>
            <a href={`#${resume.resumeFileName}`} className="text-blue-600 underline text-xs">
              {resume.resumeFileName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
