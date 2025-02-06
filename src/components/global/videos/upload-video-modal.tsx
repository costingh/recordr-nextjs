"use client";
import React from "react";
import Modal from "../modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadIcon } from "lucide-react";
import { useUpload } from "@/hooks/useUpload";

const UploadVideoModal = () => {
	const { videoFile, handleFileChange, uploadVideo, isPending, userId } =
		useUpload();

	return (
		<Modal
			title="Upload a Video"
			description="Select a video file to upload and share with your team or audience."
			trigger={
				<Button className="bg-[#9D9D9D] flex items-center gap-2">
					<UploadIcon size={20} />{" "}
					<span className="flex items-center gap-2">Upload</span>
				</Button>
			}
		>
			<div className="flex flex-col gap-4">
				<Input
					type="file"
					accept="video/*"
					onChange={handleFileChange}
					className="file-input bg-transparent border-2 rounded-md p-2"
				/>
				{videoFile && (
					<p className="text-sm text-gray-500">
						Selected file: {videoFile.name}
					</p>
				)}
				<Button
					className="bg-blue-500 text-white"
					onClick={uploadVideo}
					disabled={!videoFile || isPending}
				>
					{isPending ? "Uploading..." : "Upload"}
				</Button>
			</div>
		</Modal>
	);
};

export default UploadVideoModal;
