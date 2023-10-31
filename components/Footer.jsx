import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Link from 'next/link';
function Footer() {
	return (
		<>
			<div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-3 mt-10">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Sound<span className="orange_gradient">ProofAI</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							SoundProofAI App
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Futures & Options
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<Link href="/about-us">
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
                        </Link>
						<Link href='upload-audio'>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Upload Audio
						</li>
                        </Link>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contact</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <div className="flex">
                        <FaEnvelope className="text-2xl cursor-pointer"/> 
                        <span className="ml-2">krishthakrar018@gmail.com</span>
                        </div>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <div className="flex">
                        <FaPhone className="text-2xl cursor-pointer"/> 
                        <span className="ml-2">+91 8080713213</span>
                        </div>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5">
				<h1 className=" text-gray-800 font-semibold">
					© 2023-2024 All rights reserved
				</h1>
			</div>
		</>
	);
}

export default Footer;