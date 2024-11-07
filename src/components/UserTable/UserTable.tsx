import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  const users = [
    { userName: "John Doe", profilePic: "", userType: "Employer", joinDate: "2023-05-15", additionalField: "Verified" },
    { userName: "Jane Smith", profilePic: "", userType: "Student", joinDate: "2023-06-20", additionalField: "Pending" },
    { userName: "Mark Wilson", profilePic: "", userType: "Employer", joinDate: "2023-07-30", additionalField: "Verified" },
    { userName: "Alice Johnson", profilePic: "", userType: "Student", joinDate: "2023-08-10", additionalField: "Verified" },
    { userName: "Bob Brown", profilePic: "", userType: "Employer", joinDate: "2023-09-01", additionalField: "Pending" },
    { userName: "Charlie Davis", profilePic: "", userType: "Student", joinDate: "2023-09-15", additionalField: "Verified" },
    { userName: "David Clark", profilePic: "", userType: "Employer", joinDate: "2023-10-01", additionalField: "Pending" },
    { userName: "Eva Thompson", profilePic: "", userType: "Student", joinDate: "2023-10-05", additionalField: "Verified" },
    { userName: "Frank Martinez", profilePic: "", userType: "Employer", joinDate: "2023-11-01", additionalField: "Verified" },
    { userName: "Grace Lee", profilePic: "", userType: "Student", joinDate: "2023-11-15", additionalField: "Pending" },
    { userName: "Henry Harris", profilePic: "", userType: "Employer", joinDate: "2023-12-01", additionalField: "Verified" },
    { userName: "Isla King", profilePic: "", userType: "Student", joinDate: "2023-12-10", additionalField: "Pending" },
    { userName: "Jack Green", profilePic: "", userType: "Employer", joinDate: "2023-12-20", additionalField: "Verified" },
    { userName: "Kara Lewis", profilePic: "", userType: "Student", joinDate: "2024-01-05", additionalField: "Verified" },
    { userName: "Liam Walker", profilePic: "", userType: "Employer", joinDate: "2024-02-01", additionalField: "Pending" },
    { userName: "Mia Scott", profilePic: "", userType: "Student", joinDate: "2024-02-15", additionalField: "Verified" },
    { userName: "Noah Young", profilePic: "", userType: "Employer", joinDate: "2024-03-01", additionalField: "Verified" },
    { userName: "Olivia Adams", profilePic: "", userType: "Student", joinDate: "2024-03-10", additionalField: "Pending" },
    { userName: "Paul Miller", profilePic: "", userType: "Employer", joinDate: "2024-04-01", additionalField: "Verified" },
    { userName: "Quinn Moore", profilePic: "", userType: "Student", joinDate: "2024-04-15", additionalField: "Pending" },
    { userName: "Ryan Perez", profilePic: "", userType: "Employer", joinDate: "2024-05-01", additionalField: "Verified" }
  ];
  
  
  export function UsersTable() {
    return (
      <Table>
        <TableCaption className="text-white">
          List of Users (Employers and Students)
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white font-bold text-lg">
              Profile
            </TableHead>
            <TableHead className="text-white font-bold text-lg">Name</TableHead>
            <TableHead className="text-white font-bold text-lg">Type</TableHead>
            <TableHead className="text-white font-bold text-lg">Join Date</TableHead>
            <TableHead className="text-white font-bold text-lg">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.userName}>
              <TableCell className="font-medium">
                <div className="w-10 h-10 rounded-full bg-black bg-opacity-20"></div>
              </TableCell>
              <TableCell className="font-medium">{user.userName}</TableCell>
              <TableCell>{user.userType}</TableCell>
              <TableCell>{user.joinDate}</TableCell>
              <TableCell>{user.additionalField}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Users</TableCell>
            <TableCell className="text-right">{users.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
  