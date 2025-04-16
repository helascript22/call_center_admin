import { Link, useLocation } from "react-router-dom";
import { LogOut, Phone, Settings, Users, UserCircle } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div className="fixed inset-y-0 left-0 w-16 sm:w-56 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b border-zinc-800">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
          <Phone className="w-4 h-4" />
        </div>
        <span className="font-bold text-lg hidden sm:block">Sale.com</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            isActive("/") ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <UserCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Dashboard</span>
        </Link>

        <Link
          to="/user-management"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            isActive("/user-management")
              ? "bg-zinc-800 text-white"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="hidden sm:inline">User Management</span>
        </Link>
      </nav>

      {/* Bottom Settings + Logout */}
      <div className="p-4 space-y-2">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            isActive("/settings")
              ? "bg-zinc-800 text-white"
              : "text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="hidden sm:inline">Settings</span>
        </Link>

        <Link
          to="/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden sm:inline">Logout</span>
        </Link>
      </div>
    </div>
  );
}
