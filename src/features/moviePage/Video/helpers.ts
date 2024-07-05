import { VideoInformation } from "src/shared/api/types";

export const videosCheck = (sectionNumber: number, videos: VideoInformation[]) => {
  const listOfVideos: VideoInformation[] = [];
  videos.map((video) => {
    if (video.season === sectionNumber) listOfVideos.push(video);
  });
  return listOfVideos;
};
