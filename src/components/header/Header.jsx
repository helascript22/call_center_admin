import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900">
      <h1 className="text-xl font-bold text-white sm:text-2xl">Admin Dashboard</h1>
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
          <Input
            placeholder="Search Agent"
            className="pl-9 w-full sm:w-64 bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        <div className="flex items-center gap-3 sm:gap-6 mt-4 sm:mt-0">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-yellow-500">NJ</AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <div className="font-medium text-white">Nicole Jorgie</div>
            <div className="text-xs text-zinc-400">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
