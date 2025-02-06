'use server'

import { currentUser } from '@clerk/nextjs/server'
import axios from 'axios'

interface UploadVideoResponse {
    status: number;
    message?: string;
}

export const uploadVideo = async (video: File): Promise<UploadVideoResponse> => {
    try {
        const user = await currentUser();
        if (!user) {
            return { status: 404, message: "User not found" };
        }

        const formData = new FormData();
        formData.append("video", video);
        formData.append("userId", user.id);

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SOCKET_URL}/api/videos/upload-video`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.data) {
            return {
                status: 200,
                message: "Video uploaded successfully",
            };
        }
        return { status: 400, message: "Error uploading video" };
    } catch (error) {
        console.error("Error uploading video:", error);
        return { status: 400, message: "Error uploading video" };
    }
};
