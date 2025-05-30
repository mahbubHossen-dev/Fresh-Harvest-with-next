import React, { useContext, useState } from 'react'
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
import { AuthContext } from '../Provider/AuthProvider';

export default function LoginModal() {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
            .then(result => {
                console.log(result)
                // toast.success("Login Success")

                // navigate(location.state ? `${location.state}` : '/')
            })
            .catch(err => {
                console.log(err.message)
                // toast.error(err.message)
            })
    }

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
                    <form onSubmit={handleLogin} className="flex flex-col gap-3 mt-4">
                        <label className="text-[#212337]">Email</label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 border rounded"
                        />
                        <label className="text-[#212337]">Password</label>
                        <input
                            name='password'
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
                    <div className='flex items-center'>
                        <p>Dont you have an account? Please </p>
                        <RegisterModal />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
