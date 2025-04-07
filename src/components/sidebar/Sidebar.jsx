import { Link } from "react-router-dom";
import { LogOut, Phone, Settings, Users, UserCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-16 sm:w-56 bg-zinc-900 border-r border-zinc-800">
      <div className="flex items-center gap-2 p-4 border-b border-zinc-800">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
          <Phone className="w-4 h-4" />
        </div>
        <span className="font-bold text-lg hidden sm:block">Sale.com</span>
      </div>
      <nav className="p-4 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-800 text-white"
        >
          <UserCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>
        <Link
          to="user-management"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <Users className="w-5 h-5" />
          <span className="hidden sm:inline">User Management</span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors mt-auto"
        >
          <Settings className="w-5 h-5" />
          <span className="hidden sm:inline">Settings</span>
        </Link>
        <Link
          to="#"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden sm:inline">Logout</span>
        </Link>
      </nav>
    </div>
  );
}
