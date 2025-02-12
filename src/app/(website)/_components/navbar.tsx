import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import Logo from "./logo";

type Props = {};

const LandingPageNavBar = (props: Props) => {
	return (
		<header className="border-b border-base-content/5 bg-base-300">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between py-6 max-xl:px-4"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Logo/>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6 text-base-content"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>

				<div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
					<a
						className="link-hover link"
						title="Pricing"
						href="#pricing"
					>
						Pricing
					</a>
					<a className="link-hover link" title="FAQ" href="#faq">
						FAQ
					</a>
					<a
						className="link-hover link"
						title="Reviews"
						href="#reviews"
					>
						Reviews
					</a>
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<div className="flex flex-col">
						<Link href="/auth/sign-in">
							<Button className="text-base flex gap-x-2">
								Log in
							</Button>
						</Link>
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div className="relative z-[99999] hidden" id="mobile-menu">
				<div className="fixed inset-y-0 right-0 z-10 w-full origin-right transform overflow-y-auto bg-base-200 px-8 py-4 transition duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-neutral/10">
					<div className="flex items-center justify-between">
						<a
							className="flex shrink-0 items-center gap-2"
							title="DataFast homepage"
							href="/"
						>
							<img
								alt="DataFast logo"
								width="32"
								height="32"
								className="w-8"
								src="/_next/static/media/icon.3a869d3d.png"
							/>
							<span className="text-lg font-extrabold">
								DataFast
							</span>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5"
							aria-label="Close menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div className="mt-6 flow-root">
						<div className="mb-4 border-b border-base-content/5 py-4">
							<div className="flex flex-col items-start gap-y-4">
								<a
									className="link-hover link"
									title="Pricing"
									href="#pricing"
								>
									Pricing
								</a>
								<a
									className="link-hover link"
									title="FAQ"
									href="#faq"
								>
									FAQ
								</a>
								<a
									className="link-hover link"
									title="Reviews"
									href="#reviews"
								>
									Reviews
								</a>
							</div>
						</div>
						<div className="flex flex-col">
							<Link href="/auth/sign-in">
								<Button className="text-base flex gap-x-2">
									<User fill="#000" />
									Log in
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default LandingPageNavBar;

// <div className="flex w-full justify-between items-center">
//   <div className="text-3xl font-semibold flex items-center gap-x-3">
//     <Menu className="w-8 h-8" />
//     <Image
//       alt="logo"
//       src="/recordr-logo.svg"
//       width={40}
//       height={40}
//     />
//     Recordr
//   </div>
//   <div className="hidden gap-x-10 items-center lg:flex">
//     <Link
//       href="/"
//       className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
//     >
//       Home
//     </Link>
//     <Link href="/">Pricing</Link>
//     <Link href="/">Contact</Link>
//   </div>
//   <Link href="/auth/sign-in">
//     <Button className="text-base flex gap-x-2">
//       <User fill="#000" />
//       Login
//     </Button>
//   </Link>
// </div>
