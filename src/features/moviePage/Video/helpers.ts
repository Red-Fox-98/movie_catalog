import { VideoInformation } from "src/shared/api/types";

export const videosCheck = (sectionNumber: number, videos: VideoInformation[]) => {
  return videos.filter((video) => video.season === sectionNumber);
};
