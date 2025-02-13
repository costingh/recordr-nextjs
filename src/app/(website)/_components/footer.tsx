import Link from "next/link";
import React from "react";
import Logo from "./logo";
import Image from "next/image";

function Footer() {
	return (
		<div className="bg-[#20222c]">
			<div className="w-full flex py-10 container">
				<div className="w-[30%] flex flex-col gap-5">
					<Logo />
					<p className="mt-3 text-[17px] text-base-content/80 leading-relaxed">
						Supercharge your communication with Recordr
						<br />
						Copyright © 2025 - All rights reserved
					</p>
				</div>
				<div className="w-[70%] flex items-start justify-between">
					<div className="w-full px-4 md:w-1/2 lg:w-1/3 flex flex-col gap-[5px]">
						<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3 text-[16px] text-[#cfcfcf]">
							LINKS
						</h3>
						<Link
							href="mailto:gheorghecostin221@gmail.com"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Support
						</Link>
						<Link
							href="#pricing"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Pricing
						</Link>
						<Link
							href="/dashboard"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Dashboard
						</Link>
						<Link
							href="#"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Affiliates - Earn 30%
						</Link>
					</div>

					<div className="w-full px-4 md:w-1/2 lg:w-1/3 flex flex-col gap-[5px]">
						<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3 text-[16px] text-[#cfcfcf]">
							LEGAL
						</h3>
						<Link
							href="/privacy-policy"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Privacy Policy
						</Link>
						<Link
							href="/tos"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Terms of Service
						</Link>
					</div>

					<div className="w-full px-4 md:w-1/2 lg:w-1/3 flex flex-col gap-[5px]">
						<h3 className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3 text-[16px] text-[#cfcfcf]">
							MORE
						</h3>
						<Link
							href="#"
							className="text-[16px] link cursor-pointer transition-all hover:pl-1 font-[300] text-[#cfcfcf]"
						>
							Blog
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
