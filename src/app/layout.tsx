import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope, DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { ThemeProvider } from "@/components/theme";
import ReactQueryProvider from "@/react-query";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "sonner";
import Script from "next/script";

const manrope = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Recordr",
	description: "Share AI powered videos with your friends.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				{/* <!-- Google tag (gtag.js) --> */}
				<Script
					id="gtm-script-1"
					strategy="lazyOnload"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>

				<Script id="gtm-script-2" strategy="lazyOnload">
					{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
				</Script>
				<body className={`${manrope.className} bg-[#171717]`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						disableTransitionOnChange
					>
						<ReduxProvider>
							<ReactQueryProvider>
								{children}
								<Toaster />
							</ReactQueryProvider>
						</ReduxProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
