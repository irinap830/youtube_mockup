import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import './App.css';

interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnail: string;
  avatar: string;
}

// Mock data (replace with YouTube Data API later)
const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Learn React in 30 Minutes',
    channel: 'Code Academy',
    views: '120K views',
    timestamp: '2 days ago',
    thumbnail: 'https://placeholder.com',
    avatar: 'https://placeholder.com',
  },
  {
    id: '2',
    title: 'CSS Grid vs Flexbox Explained',
    channel: 'DesignCourse',
    views: '85K views',
    timestamp: '1 week ago',
    thumbnail: 'https://placeholder.com',
    avatar: 'https://placeholder.com',
  },
];

export default function App(): React.ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredVideos = MOCK_VIDEOS.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="main-body">
        {isSidebarOpen && <Sidebar />}
        <VideoGrid videos={filteredVideos} />
      </div>
    </div>
  );
}
