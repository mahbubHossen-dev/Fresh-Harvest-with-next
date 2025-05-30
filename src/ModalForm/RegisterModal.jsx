import React, { useContext, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";

import { Checkbox } from "../components/ui/checkbox";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import LoginModal from './LoginModal';
import { AuthContext } from '../Provider/AuthProvider';


export default function RegisterModal() {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.name.value
        const email = form.email.value
        const password = form.password.value



        createUser(email, password)
            .then(result => {
                // console.log(result.user)
                setUser(result.user)
                // toast.success("Register Success")
                updateUserProfile(fullName)
                    .then(() => {
                        setUser(result.user)
                        console.log(result)
                    })
                    .catch(err => {
                        // toast.error(err.message)
                    })

            })
            .catch(err => {
                // toast.error(err.message)
                console.log(err)
            })
    }

    return (
        <div className="flex gap-2 text-black">
            <Dialog>
                <DialogTrigger asChild>
                    <button className="font-semibold cursor-pointer py-1 px-4 rounded-4xl text-black">
                        sign Up
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-3xl text-center font-bold text-[#212337]">
                            Register
                        </DialogTitle>
                    </DialogHeader>
                    {/* Sample form UI (replace with real form logic) */}

                    <form onSubmit={handleRegister} className="flex flex-col gap-3 mt-4">
                        <label className="text-[#212337]">Full Name</label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter your email"
                            className="p-2 border rounded"
                        />
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
                            className="btn btn-xs absolute right-10 bottom-50"
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
                            Register
                        </button>
                    </form>
                    <div className='flex items-center'>
                        <p>Already have an account? Please </p>
                        <LoginModal />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
