import React from "react";
import LandingPageNavBar from "./_components/navbar";
import HeroSection from "./_components/hero-section";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="felx felx-col px-10 xl:px-0">
			<LandingPageNavBar />
			<HeroSection />
			{children}
		</div>
	);
};

export default Layout;
