import { useState } from "react"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function AddUserModal({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "Agent",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    const userPayload = {
      ...formData,
      isActivated: false,
      state: true,
      createdAt: new Date().toISOString(),
    }

    try {
      await axios.post("http://localhost:3001/user", userPayload)

      toast.success("User added successfully!")
      onClose()
    } catch (err) {
      console.error(err)
      toast.error("Failed to add .")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px] relative">
        <ToastContainer position="bottom-left" autoClose={3000} />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Add New User</h2>
          <button onClick={onClose} className="text-white hover:text-red-500 text-xl font-bold">
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-white mb-1">First Name</label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="bg-zinc-800 text-white"
            />
          </div>
          <div>
            <label className="block font-semibold text-white mb-1">Last Name</label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className="bg-zinc-800 text-white"
            />
          </div>
          <div>
            <label className="block font-semibold text-white mb-1">Email Address</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="bg-zinc-800 text-white"
            />
          </div>
          <div>
            <label className="block font-semibold text-white mb-1">Password</label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-zinc-800 text-white"
            />
          </div>
          <div>
            <label className="block font-semibold text-white mb-1">Select User Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 bg-zinc-800 text-white rounded-md"
            >
              <option>Agent</option>
              <option>Admin</option>
              <option>Supervisor</option>
            </select>
          </div>

          <Button onClick={handleSubmit} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Add User
          </Button>
        </div>
      </div>
    </div>
  )
}
