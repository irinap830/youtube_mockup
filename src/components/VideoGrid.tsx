
import React from 'react';

interface Video {
  id: string | number;
  thumbnail: string;
  title: string;
  avatar: string;
  channel: string;
  views: number | string;
  timestamp: string;
}

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps): React.ReactElement {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} className="thumbnail" />
      <div className="video-info">
        <img src={video.avatar} alt={video.channel} className="avatar" />
        <div className="video-details">
          <h4>{video.title}</h4>
          <p>{video.channel}</p>
          <p>
            {video.views} • {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps): React.ReactElement {
  return (
    <main className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </main>
  );
}
