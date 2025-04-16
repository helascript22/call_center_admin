import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditUserModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-lg w-[90%] max-w-2xl text-white space-y-4 relative">
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <h2 className="text-xl font-semibold">User Details : {user.email}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg space-y-2">
          <div><strong>Name</strong> : {user.name}</div>
          <div><strong>Email</strong> : {user.email}</div>
          <div><strong>Registered</strong> : {user.registered}</div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Call Statictics</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800 p-3 rounded-md">
              <div>Total Calls : 100</div>
              <div>Avg Call Duration : 5m 12s</div>
            </div>
            <div className="bg-gray-800 p-3 rounded-md">
              <div>Today Used : 47</div>
              <div>Remaining Minutes : 5m 12s</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center pt-2">
          <Button className="bg-blue-600 hover:bg-blue-700 w-40">Reset Minutes</Button>
          <Button className="bg-red-600 hover:bg-red-700 w-40">Disable User</Button>
        </div>
      </div>
    </div>
  );
}
