import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  videoLink: string;
  previewImageLink: string;
  order: number;
  id: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoLink,
  previewImageLink,
  order,
  id: videoId,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(videoLink);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          const savedTime = localStorage.getItem(videoId);

          if (savedTime !== null) {
            videoElement.currentTime = parseInt(savedTime);
          }
        });
      });
    }
  }, [videoLink, videoId]);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime || currentVideoTime;
    if (currentTime !== 0) {
      localStorage.setItem(videoId, String(currentTime));
      setCurrentVideoTime(currentTime);
    }
  };
  const poster = `${previewImageLink}/lesson-${order}.webp`;

  return (
    <video
      width="100%"
      ref={videoRef}
      controls
      onTimeUpdate={handleTimeUpdate}
      poster={poster}
    />
  );
};

export default VideoPlayer;
