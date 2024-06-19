import React, { useEffect, useState } from "react";

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/videos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setVideos(data))
      .catch((error) => {
        console.error("Failed to fetch videos:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="video-list">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        videos.map((video, index) => (
          <div key={index} className="video-container">
            <iframe
              width="560"
              height="315"
              src={video.replace("watch?v=", "embed/")}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoList;
