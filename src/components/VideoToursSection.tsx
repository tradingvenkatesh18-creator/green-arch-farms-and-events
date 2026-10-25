import React, { useState, useRef } from 'react';
import { FARM_VIDEOS, MediaItem } from '../mediaData';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, Compass, ChevronRight } from 'lucide-react';

interface VideoToursSectionProps {
  onOpenVideoModal?: (video: MediaItem) => void;
}

export default function VideoToursSection({ onOpenVideoModal }: VideoToursSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<MediaItem>(FARM_VIDEOS[13]); // Default to stunning landscape sunset deck video (vid-14)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredVideos = selectedCategory === 'all'
    ? FARM_VIDEOS
    : selectedCategory === 'rooms'
    ? FARM_VIDEOS.filter(v => v.category === 'rooms')
    : selectedCategory === 'deck'
    ? FARM_VIDEOS.filter(v => v.category === 'deck')
    : selectedCategory === 'lawns'
    ? FARM_VIDEOS.filter(v => v.category === 'lawns')
    : FARM_VIDEOS;

  const handleSelectVideo = (video: MediaItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '0:05';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="videos" className="py-20 md:py-32 bg-[#0D1510] text-[#FAF7F2] relative overflow-hidden border-t border-[#E5A952]/20">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5A952]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1B3D2B]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5A952]/40 bg-[#15221B]/90 text-[#F3C77C] text-[10px] font-sans font-bold uppercase tracking-[0.25em] mb-4 glow-amber-sm">
            <Film className="w-3.5 h-3.5 text-[#E5A952]" />
            <span>20 Walkthrough Video Tours</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#FAF7F2]">
            Experience Greenarch in Motion
          </h2>
          <p className="text-[#EDE5D8]/75 text-xs sm:text-sm mt-3 leading-relaxed font-light max-w-xl">
            Watch real unedited walkthroughs across our 5-acre estate, 9 BHK suites, suspended tree bridge, covered wooden dining deck, and illuminated nighttime grounds.
          </p>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All 20 Videos' },
              { id: 'deck', label: 'Tree Bridge & Decks (6)' },
              { id: 'rooms', label: '9 BHK Suites & Halls (10)' },
              { id: 'lawns', label: 'Garden & Night Walkways (4)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 border cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#E5A952] border-[#E5A952] text-[#122E21] shadow-[0_0_20px_rgba(229,169,82,0.4)]'
                    : 'bg-[#15221B]/70 border-[#E5A952]/20 text-[#EDE5D8]/70 hover:border-[#E5A952] hover:text-[#FAF7F2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED PLAYER + PLAYLIST LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Video Player (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#E5A952]/40 bg-[#000] shadow-[0_0_50px_rgba(229,169,82,0.25)] group">
              <video
                ref={videoRef}
                src={activeVideo.url}
                poster={activeVideo.thumbUrl}
                playsInline
                loop
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain bg-black cursor-pointer"
                onClick={togglePlay}
              />

              {/* Center Big Play Button Overlay when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity group-hover:bg-black/30"
                >
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#E5A952] text-[#122E21] flex items-center justify-center shadow-[0_0_35px_rgba(229,169,82,0.8)] transform group-hover:scale-110 transition-transform">
                    <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-[#E5A952] text-[#122E21] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 rounded-full bg-[#15221B]/80 border border-[#E5A952]/40 text-[#FAF7F2] flex items-center justify-center hover:bg-[#E5A952] hover:text-[#122E21] transition-colors cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-[10px] font-mono text-[#F3C77C] bg-[#122E21]/80 px-2.5 py-1 rounded border border-[#E5A952]/30">
                    {formatDuration(activeVideo.duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-[9px] font-sans font-bold uppercase tracking-widest text-[#E5A952] bg-[#122E21]/80 px-3 py-1 rounded-full border border-[#E5A952]/30">
                    {activeVideo.category.toUpperCase()}
                  </span>

                  {onOpenVideoModal && (
                    <button
                      onClick={() => onOpenVideoModal(activeVideo)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#15221B] border border-[#E5A952]/40 text-[#FAF7F2] text-[10px] font-sans font-bold uppercase tracking-wider hover:bg-[#E5A952] hover:text-[#122E21] transition-all cursor-pointer"
                      title="Fullscreen Modal"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Video Details Card */}
            <div className="p-6 rounded-2xl bg-[#15221B] border border-[#E5A952]/30 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5A952] animate-pulse" />
                <span className="text-[9px] uppercase font-bold text-[#E5A952] tracking-widest font-sans">
                  Now Playing Walkthrough Tour
                </span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#FAF7F2]">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-[#EDE5D8]/75 leading-relaxed font-light">
                {activeVideo.alt}
              </p>
            </div>
          </div>

          {/* Video Playlist Grid (5 Cols, Scrollable) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5A952]/20">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F3C77C]">
                Select Video Tour ({filteredVideos.length})
              </span>
              <span className="text-[9px] text-[#EDE5D8]/50 uppercase font-mono">
                Click any clip to play
              </span>
            </div>

            <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#E5A952]/40 scrollbar-track-transparent">
              {filteredVideos.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={`flex items-center gap-3.5 p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E3326] border-[#E5A952] shadow-[0_0_20px_rgba(229,169,82,0.3)]'
                        : 'bg-[#15221B]/80 border-[#E5A952]/20 hover:border-[#E5A952]/60 hover:bg-[#15221B]'
                    }`}
                  >
                    {/* Thumbnail with Play Icon & Duration */}
                    <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-xl overflow-hidden bg-black shrink-0 border border-[#E5A952]/30">
                      <img
                        src={video.thumbUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          isSelected ? 'bg-[#E5A952] text-[#122E21]' : 'bg-black/60 text-white'
                        }`}>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 text-[8px] font-mono bg-black/80 text-white px-1.5 py-0.5 rounded">
                        {formatDuration(video.duration)}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[8.5px] uppercase font-bold text-[#E5A952] tracking-wider block font-sans">
                        {video.category === 'deck' ? 'Tree Deck & Bridge' : video.category === 'rooms' ? '9 BHK Suite' : 'Gardens & Lawns'}
                      </span>
                      <h4 className={`text-xs font-serif font-medium truncate mt-0.5 ${
                        isSelected ? 'text-[#FAF7F2]' : 'text-[#FAF7F2]/90'
                      }`}>
                        {video.title}
                      </h4>
                      <p className="text-[10px] text-[#EDE5D8]/60 line-clamp-1 mt-0.5 font-light">
                        {video.alt}
                      </p>
                    </div>

                    {/* Active indicator */}
                    <div className="pr-1">
                      {isSelected ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E5A952] animate-ping" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#EDE5D8]/40" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
