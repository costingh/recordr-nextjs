import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
	return (
		<Link
			className="flex shrink-0 items-center gap-2"
			title="Recordr homepage"
			href="/"
		>
				<Image
					width={200}
					height={35}
					alt="Recordr Logo"
					// src="/recordr-logo.svg"
					src="/images/logo.png"
					className="w-[28px]"
				/>
				<span className="text-lg font-[500]">Recordr</span>
		</Link>
	);
}

export default Logo;