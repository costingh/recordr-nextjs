import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CrispChat } from "./crisp-chat";
import { CheckIcon } from "@radix-ui/react-icons";
import { MoveRight } from "lucide-react";
import Footer from "./footer";
import HeroPricing from "./hero-pricing";
import FAQ from "./faq";

const HeroSection = () => {
	const TryNowButton = () => {
		return (
			<Link href="/auth/sign-up" className="block">
				<Button
					variant="outline"
					className="text-[15px] font-medium !text-[#8000ff] cursor-pointer border-[1px] border-[#8000ff] border-b bg-transparent px-3 mt-4"
				>
					<span className="hover:pr-[15px] pr-[5px] transition-all">
						Try now
					</span>
					<MoveRight className="text-inherit" size={13} />
				</Button>
			</Link>
		);
	};

	return (
		<main>
			<section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-14 px-4 pb-12 pt-8 lg:gap-16 lg:pb-24 lg:pt-14">
				<div className="text-center">
					<h1 className="mb-10 text-4xl font-extrabold tracking-tight lg:mb-12 lg:text-6xl">
						Create and share AI-powered videos to boost productivity{" "}
						<span className="relative">
							with your
							<span className="absolute bottom-2 left-1/2 flex translate-y-full -translate-x-1/2 -rotate-3 items-center gap-0.5 whitespace-nowrap text-base font-normal tracking-wide lg:text-xl">
								team and customers <span>🤨</span>
							</span>
						</span>
					</h1>
					<div className="mx-auto max-w-lg text-left">
						<p className="mb-4 text-lg font-medium leading-relaxed text-base-content lg:text-xl text-gray-0">
							AI-powered video messaging platform
						</p>
						<ul className="mb-8 space-y-1 text-lg leading-relaxed text-gray-300">
							{[
								"Record and share videos instantly",
								"Personalize outreach with tailored video messages",
								"Streamline follow-ups and close deals faster",
								"Save time with automated video summaries",
							].map((text, index) => (
								<li
									key={index}
									className="flex items-center gap-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-5 w-5 text-primary"
									>
										<path
											fillRule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clipRule="evenodd"
										/>
									</svg>
									{text}
								</li>
							))}
						</ul>
						<div className="space-y-5">
							<div className="flex flex-col items-center gap-1">
								<Button className="text-[18px] my-[15px] p-[25px] bg-[#8000ff] hover:bg-[#8000ffda] text-white">
									Start recording a video now
								</Button>
								<div className="text-base">
									Join{" "}
									<span className="font-medium text-base-content">
										12
									</span>{" "}
									startup founders & customers
								</div>
								<div className="flex -space-x-3">
									{[
										"ava1",
										"ava2",
										"ava3",
										"ava4",
										"ava5",
									].map((name, index) => (
										<img
											key={index}
											className="h-9 w-9 rounded-full border-2 border-gray-900"
											alt={name}
											src={`/images/${name}.jpg`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-2 dark:bg-neutral-800">
					<div className="group mx-auto overflow-hidden">
						<img
							alt="DataFast demo"
							className="w-full transition-transform duration-300 ease-in-out lg:scale-90 lg:opacity-80 lg:group-hover:scale-100 lg:group-hover:opacity-100"
							src="/images/demo1.png"
						/>
					</div>
				</div>
			</section>
			<section>
				<div className="flex items-center justify-center flex-col gap-4">
					<h2 className="text-4xl max-w-2xl font-bold mb-4 text-white text-center">
						Supercharge your communication with Recordr –
						effortlessly record, share, and track AI-powered video
						messages for teams and customers! 🎥✨
					</h2>
					<Image
						src="/images/demo1.png"
						alt=""
						width={400}
						height={200}
						className="max-w-[400px] w-full rounded-[15px]"
					/>
					<Link href="/auth/sign-up">
						<Button className="text-[18px] my-[15px] p-[25px] bg-[#8000ff] hover:bg-[#8000ffda] text-white">
							Try Recordr Now
						</Button>
					</Link>
				</div>
			</section>
			<div className="divider h-[100px]"></div>
			<section>
				<div id="#features" className="container px-5 h-full">
					<div className="flex gap-[30px]">
						<div className="w-[50%] flex flex-col items-start justify-center">
							<p className="text-[#8000ff] font-bold text-[18px] mb-4">
								Effortless Video Recording & AI Automation
							</p>
							<h1 className="text-gray-100 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
								Instantly record, transcribe, and summarize
								videos with AI-powered tools.
							</h1>
							<span className="text-gray-500 font-normal text-[18px]">
								Streamline communication with automated titles,
								descriptions, and summaries, plus engage your
								audience with chat-enabled video sharing.
							</span>
							<TryNowButton />
						</div>
						<div className="w-[50%]">
							<Image
								src="/images/demo1.png"
								alt=""
								width={400}
								height={400}
								className="w-full"
							/>
						</div>
					</div>

					<div className="divider h-[100px]"></div>

					<div className="flex gap-[30px]">
						<div className="w-[50%]">
							<Image
								src="/images/log-in-girl.svg"
								alt="Smart AI Video Features Alt Text"
								width={400}
								height={400}
								className="w-full"
							/>
						</div>
						<div className="w-[50%] flex flex-col items-start justify-center">
							<p className="text-[#8000ff] font-bold text-[18px] mb-4">
								Smart AI Video Features
							</p>
							<h1 className="text-gray-100 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
								Unlock the power of AI to transcribe, summarize,
								and generate video titles effortlessly.
							</h1>
							<span className="text-gray-500 font-normal text-[18px]">
								Elevate your communication with intelligent
								tools that save time, boost engagement, and
								simplify video sharing.
							</span>
							<TryNowButton />
						</div>
					</div>

					<div className="divider h-[100px]"></div>

					<div className="flex gap-[30px]">
						<div className="w-[50%] flex flex-col items-start justify-center">
							<p className="text-[#8000ff] font-bold text-[18px] mb-4">
								Seamless Integration
							</p>
							<h1 className="text-gray-100 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
								Easily integrate Recordr into your workflow or
								platform.
							</h1>
							<span className="text-gray-500 font-normal text-[18px]">
								Get started quickly with a smooth setup process,
								allowing you to record, transcribe, and share
								videos effortlessly without any technical
								barriers.
							</span>

							<TryNowButton />
						</div>
						<div className="w-[50%]">
							<Image
								src="/images/demo1.png"
								alt=""
								width={400}
								height={400}
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="divider h-[100px]"></div>
			<section className="w-full bg-[#20222c] py-[80px] px-[100px] flex flex-col items-center justify-center gap-5 relative overflow-hidden">
				<h1 className="text-white text-[42px] font-black text-center max-w-2xl leading-[38px]">
					Frustrated with time-consuming video workflows? Try Recordr
					now and simplify your process!
				</h1>
				<Link href="/auth/sign-up">
					<Button className="text-[18px] my-[15px] p-[25px] bg-[#8000ff] hover:bg-[#8000ffda] text-white">
						Try Recordr Now
					</Button>
				</Link>

				<div className="md:flex md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-6 font-medium">
					<div className="flex items-center space-x-2">
						<CheckIcon />
						<span className="text-white text-[18px]">
							Screen and camera recording
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<CheckIcon />

						<span className="text-white text-[18px]">
							Easy sharing and embedding
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<CheckIcon />
						<span className="text-white text-[18px]">
							Download and upload
						</span>
					</div>
				</div>
			</section>

			<div className="divider h-[100px]"></div>

			<HeroPricing />

			<FAQ />

			<section className="container">
				<div className="flex flex-col items-center justify-center gap-[20px]">
					<h1 className="text-white text-[42px] font-black text-center max-w-2xl leading-[38px]">
						Supercharge Your Productivity with Recordr
					</h1>
					<p className="text-gray-500 font-normal text-[18px]">
						Automate your video creation process with AI tools for
						transcription, summaries, and sharing.
					</p>
					<Link href="/auth/sign-up">
						<Button className="text-[18px] my-[15px] p-[25px] bg-[#8000ff] hover:bg-[#8000ffda] text-white">
							Try Recordr now
						</Button>
					</Link>
				</div>
			</section>

			<div className="divider h-[100px]"></div>

			<Footer />
			<CrispChat />
		</main>
	);
};

export default HeroSection;
