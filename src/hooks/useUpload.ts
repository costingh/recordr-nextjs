import { useState } from "react";
import { useQueryData } from "./useQueryData";
import { useMutationData } from "./useMutationData";
import axios from "axios";
import { getUserProfile } from "@/actions/user";
import { toast } from "sonner"; // Import toast for notifications

export const useUpload = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null);

    const { data } = useQueryData(["user-profile"], getUserProfile);

    const { data: user } = data as {
        data: { id: string; image: string };
    };

    const resetFile = () => setVideoFile(null);

    const { isPending, mutate } = useMutationData(
        ["upload-video"],
        async (file: File) => {
            if (!user.id) throw new Error("User ID is missing");

            const formData = new FormData();
            formData.append("video", file);
            formData.append("userId", user.id);

            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_SOCKET_URL}api/videos/upload-video`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                return response.data;
            } catch (error: any) {
                // Notify the user about the error
                const errorMessage =
                    error.response?.data?.message || "Error uploading video";
                toast.error(errorMessage);
                throw error; // Re-throw the error to handle it properly
            }
        },
        "uploaded-videos",
        resetFile
    );

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setVideoFile(e.target.files[0]);
        }
    };

    return {
        videoFile,
        handleFileChange,
        uploadVideo: () => mutate(videoFile),
        isPending,
        userId: user.id,
        resetFile,
    };
};
