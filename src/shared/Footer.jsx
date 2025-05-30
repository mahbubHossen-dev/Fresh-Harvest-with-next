import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
// import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-6 px-4 md:px-10 mt-28">
            <div className="flex flex-col md:flex-row justify-between max-w-[1213px] mx-auto">
                {/* Logo and App Links */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Fresh Harvests</h3>
                    <div className="pt-12">
                        <h3 className="font-medium pb-2">Download App:</h3>
                        <div className="flex space-x-4 ">

                            <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <Image width={100} height={50} src="/apple.PNG" alt="App Store" className="h-10 rounded-md" />
                            </Link>
                            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <Image width={100} height={50} src="/google.PNG" alt="Google Play" className="h-10 rounded-md" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Links 1 */}
                <div className="mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Quick Links 1</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="text-gray-600 hover:text-green-700">Home</Link></li>
                        <li><Link href="/shop" className="text-gray-600 hover:text-green-700">Shop</Link></li>
                        <li><Link href="/about" className="text-gray-600 hover:text-green-700">About us</Link></li>
                        <li><Link href="/blog" className="text-gray-600 hover:text-green-700">Blog</Link></li>
                    </ul>
                </div>

                {/* Quick Links 2 */}
                <div className="mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Quick Links 2</h4>
                    <ul className="space-y-2">
                        <li><Link href="/favorites" className="text-gray-600 hover:text-green-700">Favorites</Link></li>
                        <li><Link href="/cart" className="text-gray-600 hover:text-green-700">Cart</Link></li>
                        <li><Link href="/sign-in" className="text-gray-600 hover:text-green-700">Sign in</Link></li>
                        <li><Link href="/register" className="text-gray-600 hover:text-green-700">Register</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Contact us</h4>
                    <ul className="space-y-2">
                        <li className="text-gray-600">Phone: +123 5678 90</li>
                        <li className="text-gray-600">Email: freshharvests@gmail.com</li>
                        <li className="text-gray-600">Address: Jl. Trijung Sari, Pontianak, Indonesia</li>
                    </ul>
                    <div className="flex space-x-2 mt-2">
                        <Image width={60} height={60} src="/visa.PNG" alt="Visa" className="h-8" />
                        <Image width={50} height={80} src="/paypal.PNG" alt="PayPal" className="h-8" />
                        <Image width={60} height={60} src="/pay.PNG" alt="Apple Pay" className="h-8" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between max-w-[1213px] mx-auto">
                <div className=" text-[#212337] text-sm mt-6 font-medium">
                    <p className="font-medium">© Copyright 2024. All Rights Reserved by Banana Studio</p>
                </div>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <AiFillTwitterCircle className="text-[40px]" />
                    </Link>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-black text-[35px]" />

                    </Link>
                </div>
            </div>
        </footer>
    )
}
