'use client'
import React, { useState } from "react";

const FAQ = () => {
	const faqs = [
        {
            question: "Which plan should I choose?",
            answer: (
                <ul className="list-inside list-disc space-y-1 text-gray-300 text-[16px]">
                    <li>
                        For frequent usage and AI-powered features like summarization and title generation or if you're just starting out, go with the PRO plan.
                    </li>
                    <li>
                        For teams or businesses that need collaboration tools and advanced analytics, please choose the BUSSINESS plan or contact us to discuss your needs.
                    </li>
                </ul>
            ),
        },
        // {
        //     question: "What happens if I exceed my recording limits?",
        //     answer: (
        //         <div className="text-gray-300 text-[16px]">
        //             <p>
        //                 No worries! We'll notify you to upgrade your plan. If you don't upgrade within 7 days, access to new recordings will be paused, but you’ll retain your existing data.
        //             </p>
        //         </div>
        //     ),
        // },
        // {
        //     question: "Is there a free trial?",
        //     answer: (
        //         <p className="text-gray-300 text-[16px]">
        //             Yes! You can try Recordr free with access to limited features—no credit card required.
        //         </p>
        //     ),
        // },
        {
            question: "Is Recordr GDPR compliant?",
            answer: (
                <div className="text-gray-300 text-[16px]">
                    <p>Yes, Recordr is fully GDPR compliant.</p>
                    <p>
                        We prioritize your data privacy and security, ensuring all data is processed in line with GDPR regulations.
                    </p>
                    <p>
                        You can read more about our data policies in our{" "}
                        <a className="text-blue-500 underline" href="/tos">
                            Terms of Service
                        </a>
                        .
                    </p>
                </div>
            ),
        },
        {
            question: "Do I need technical skills to use Recordr?",
            answer: (
                <div className="text-gray-300 text-[16px]">
                    <p>
                        Not at all! Recordr is designed to be simple and intuitive. You can start recording and sharing videos in just a few clicks.
                    </p>
                    {/* <p>
                        Advanced users can take advantage of API integrations or automation features, but no coding is required.
                    </p> */}
                </div>
            ),
        },
        {
            question: "Can I collaborate with my team using Recordr?",
            answer: (
                <p className="text-gray-300 text-[16px]">
                    Absolutely! Our Premium plan includes team collaboration features, making it easy to share, edit, and manage recordings across your team.
                </p>
            ),
        },
        {
            question: "Can I migrate my existing videos?",
            answer: (
                <p className="text-gray-300 text-[16px]">
                    Yes! You can upload and manage your existing video files within Recordr to keep all your content in one place.
                </p>
            ),
        },
        {
            question: "Does Recordr support integrations?",
            answer: (
                <p className="text-gray-300 text-[16px]">
                    Not yet. But our team is working on this.
                    {/* Yes! Recordr integrates with popular platforms like Slack, Zoom, and Google Drive for seamless workflows. */}
                </p>
            ),
        },
        // {
        //     question: "Do you have an affiliate program?",
        //     answer: (
        //         <p className="text-gray-300 text-[16px]">
        //             Yes! You earn a 50% commission on referrals for up to 12 months.{" "}
        //             <a
        //                 className="text-blue-500 underline"
        //                 href="https://recordr.getrewardful.com/signup"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 Sign up here
        //             </a>
        //             .
        //         </p>
        //     ),
        // },
    ];
    

	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index: any) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faq" className="py-20">
			<div className="mx-auto max-w-2xl px-4">
				<h2 className="text-left text-gray-100 mb-10 text-3xl font-extrabold sm:text-4xl">
					FAQ
				</h2>
				<ul className="space-y-2">
					{faqs.map((faq, index) => (
						<li key={index}>
							<button
								onClick={() => toggleFAQ(index)}
								className={`relative flex w-full items-center gap-2 p-6 text-left text-base font-medium transition-all duration-200 rounded-xl text-[20px] ${
									openIndex === index
										? "bg-[#3c3e4e] text-gray-100"
										: "bg-[#20222c] text-gray-300"
								}`}
							>
								<span className="flex-1">{faq.question}</span>
								<svg
									className={`ml-auto h-5 w-5 transform transition-transform ${
										openIndex === index ? "rotate-90" : ""
									}`}
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										y="7"
										width="16"
										height="2"
										rx="1"
										className="origin-center"
									/>
									<rect
										y="7"
										width="16"
										height="2"
										rx="1"
										className="origin-center rotate-90"
									/>
								</svg>
							</button>
							<div
								className={`overflow-hidden px-4 transition-all duration-300 ${
									openIndex === index
										? "max-h-screen opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="space-y-2 py-3 leading-relaxed text-gray-700">
									{faq.answer}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default FAQ;
