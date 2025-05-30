import React, { useState } from 'react'
import RegisterModal from './RegisterModal'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Checkbox } from "../components/ui/checkbox";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
export default function LoginModal() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex gap-2 text-black">
            <Dialog>
                <DialogTrigger asChild>
                    <button className="font-semibold cursor-pointer py-1 px-4 rounded-4xl text-black">
                        Sign In
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-3xl text-center font-bold text-[#212337]">
                            Login
                        </DialogTitle>
                    </DialogHeader>
                    {/* Sample form UI (replace with real form logic) */}
                    <form className="flex flex-col gap-3 mt-4">
                        <label className="text-[#212337]">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 border rounded"
                        />
                        <label className="text-[#212337]">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="p-2 border rounded"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-10 top-58"
                        >
                            {showPassword ? (
                                <FaEyeSlash className="text-[#A6A6A6]" />
                            ) : (
                                <FaEye className="text-[#A6A6A6]" />
                            )}
                        </span>
                        <div className="flex justify-between items-center">
                            <p className="flex items-center gap-2">
                                <Checkbox className="border-[#FF6A1A]" />
                                Remember me
                            </p>
                            <span className="border-b-2 border-gray-600">Forget Password</span>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#FF6A1A] font-semibold text-white p-2 rounded text-lg"
                        >
                            Login
                        </button>
                    </form>
                    <p>Dont you have an acount? Please <RegisterModal /></p>
                </DialogContent>
            </Dialog>
        </div>
    )
}
