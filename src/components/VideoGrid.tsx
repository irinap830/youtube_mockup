import React, { useState } from 'react';
import type {Video} from '../App';

interface VideoCardProps {
  video: Video;
  onSelect: () => void;
}

function VideoCard({ video, onSelect }: VideoCardProps): React.ReactElement {
  const [liked, setLiked] = useState<boolean>(false);

  return (
      <div className="video-card" onClick={onSelect}>
        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
        <div className="video-info">
          <img src={video.avatar} alt={video.channel} className="avatar" />
          <div className="video-details">
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <p>
              {video.views} • {video.timestamp}
            </p>
            <button
                className="like-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
            >
              {liked ? 'Liked ❤️' : 'Like'}
            </button>
          </div>
        </div>
      </div>
  );
}

interface VideoGridProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

export default function VideoGrid({
                                    videos,
                                    onSelectVideo,
                                  }: VideoGridProps): React.ReactElement {
  return (
      <main className="video-grid">
        {videos.map((video) => (
            <VideoCard
                key={video.id}
                video={video}
                onSelect={() => onSelectVideo(video)}
            />
        ))}
      </main>
  );
}
