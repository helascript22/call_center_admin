import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Download, PenLine, Plus, Search, Tag } from "lucide-react";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

export default function UserManagement() {
  const [users] = useState([
    { email: "JetteJ@gmail.com", status: "Active", minutesUsed: 60, lastLogin: "30/03/2025", registered: "30/03/2025" },
    { email: "nimna@gmail.com", status: "Active", minutesUsed: 20, lastLogin: "30/03/2025", registered: "30/03/2025" },
    {
      email: "nimna@gmail.com",
      status: "Inactive",
      minutesUsed: 60,
      lastLogin: "30/03/2025",
      registered: "30/03/2025",
    },
    { email: "nimna@gmail.com", status: "Active", minutesUsed: 53, lastLogin: "30/03/2025", registered: "30/03/2025" },
    { email: "nimna@gmail.com", status: "Active", minutesUsed: 58, lastLogin: "30/03/2025", registered: "30/03/2025" },
    {
      email: "nimna@gmail.com",
      status: "Inactive",
      minutesUsed: 34,
      lastLogin: "30/03/2025",
      registered: "30/03/2025",
    },
    { email: "nimna@gmail.com", status: "Active", minutesUsed: 60, lastLogin: "30/03/2025", registered: "30/03/2025" },
    { email: "nimna@gmail.com", status: "Active", minutesUsed: 60, lastLogin: "30/03/2025", registered: "30/03/2025" },
    { email: "nimna@gmail.com", status: "Active", minutesUsed: 60, lastLogin: "30/03/2025", registered: "30/03/2025" },
    {
      email: "nimna@gmail.com",
      status: "Inactive",
      minutesUsed: 60,
      lastLogin: "30/03/2025",
      registered: "30/03/2025",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar />
      <div className="lg:ml-56 ml-16">
        <Header />
        <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Filter by:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent border-gray-700 text-white">
                    <Tag className="h-4 w-4" />
                    <span>Tag</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>All Tags</DropdownMenuItem>
                  <DropdownMenuItem>Admin</DropdownMenuItem>
                  <DropdownMenuItem>User</DropdownMenuItem>
                  <DropdownMenuItem>Guest</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input placeholder="Search Agent" className="pl-9 bg-transparent border-gray-700 text-white w-64 sm:w-72" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
              <Button variant="outline" className="bg-transparent border-gray-700 text-white w-full sm:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="border border-gray-800 rounded-md overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-900">
                <TableRow className="border-gray-800">
                  <TableHead className="text-white font-medium">User</TableHead>
                  <TableHead className="text-white font-medium">Status</TableHead>
                  <TableHead className="text-white font-medium">Minutes Used</TableHead>
                  <TableHead className="text-white font-medium">Last Login</TableHead>
                  <TableHead className="text-white font-medium">Registered</TableHead>
                  <TableHead className="text-white font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index} className="border-gray-800">
                    <TableCell className="text-white">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${
                          user.status === "Active"
                            ? "border-green-500 text-green-500 bg-green-500/10"
                            : "border-red-500 text-red-500 bg-red-500/10"
                        } rounded-md px-3 py-1 flex items-center gap-1.5`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                        ></span>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-white">{user.minutesUsed} min</TableCell>
                    <TableCell className="text-white">{user.lastLogin}</TableCell>
                    <TableCell className="text-white">{user.registered}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-800 bg-blue-900/30 text-blue-400 hover:bg-blue-800/50 hover:text-blue-300"
                      >
                        <PenLine className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
