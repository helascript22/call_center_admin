import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddUserModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px] relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Add New User</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 text-xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-white mb-1">Full Name</label>
            <Input placeholder="Enter user name" className="bg-zinc-800 text-white" />
          </div>

          <div>
            <label className="block font-semibold text-white mb-1">Email Address</label>
            <Input placeholder="Enter email address" className="bg-zinc-800 text-white" />
          </div>

          <div>
            <label className="block font-semibold text-white mb-1">Select User Role</label>
            <select className="w-full p-2 bg-zinc-800 text-white rounded-md">
              <option>Agent</option>
              <option>Admin</option>
              <option>Supervisor</option>
            </select>
          </div>

          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Add User
          </Button>
        </div>
      </div>
    </div>
  );
}
