import React, { useState, useEffect } from 'react';
import { ALL_FARM_MEDIA, FARM_PHOTOS, FARM_VIDEOS, MediaItem } from '../mediaData';
import SocialCards, { CardItem } from './ui/card-fan-carousel';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sparkles,
  LayoutGrid,
  Layers,
  Play,
  Film,
  Camera,
  Compass
} from 'lucide-react';

interface GallerySectionProps {
  initialActiveItem?: MediaItem | null;
  onClearInitialItem?: () => void;
}

export default function GallerySection({ initialActiveItem, onClearInitialItem }: GallerySectionProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'fan'>('grid');
  const [mediaFilter, setMediaFilter] = useState<'all' | 'photos' | 'videos'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(18);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    if (initialActiveItem) {
      const idx = ALL_FARM_MEDIA.findIndex(m => m.id === initialActiveItem.id);
      setSelectedMedia(initialActiveItem);
      setSelectedIndex(idx !== -1 ? idx : 0);
      onClearInitialItem?.();
    }
  }, [initialActiveItem, onClearInitialItem]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, selectedIndex]);

  // Base list filtered by type
  const typeFiltered = mediaFilter === 'photos'
    ? FARM_PHOTOS
    : mediaFilter === 'videos'
    ? FARM_VIDEOS
    : ALL_FARM_MEDIA;

  // Filtered by category
  const activeMediaList = categoryFilter === 'all'
    ? typeFiltered
    : typeFiltered.filter(m => m.category === categoryFilter);

  // Visible subset for grid performance
  const displayedMedia = activeMediaList.slice(0, visibleCount);
  const hasMore = visibleCount < activeMediaList.length;

  // 3D Fan Carousel cards
  const fanCards: CardItem[] = activeMediaList.slice(0, 16).map((item) => ({
    imgUrl: item.thumbUrl,
    alt: item.alt,
    category: item.type === 'video'
      ? 'Video Tour'
      : item.category === 'pool'
      ? 'Illuminated Pool'
      : item.category === 'rooms'
      ? '9 BHK Suite'
      : item.category === 'deck'
      ? 'Tree Deck'
      : item.category === 'play'
      ? 'Sports & Play'
      : 'Celebration Lawn',
    title: item.title
  }));

  const openLightbox = (item: MediaItem) => {
    const idx = ALL_FARM_MEDIA.findIndex(m => m.id === item.id);
    setSelectedMedia(item);
    setSelectedIndex(idx !== -1 ? idx : 0);
  };

  const openLightboxByIndex = (index: number) => {
    if (index >= 0 && index < activeMediaList.length) {
      openLightbox(activeMediaList[index]);
    }
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setSelectedIndex(-1);
  };

  const nextMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === -1) return;
    const nextIdx = (selectedIndex + 1) % ALL_FARM_MEDIA.length;
    setSelectedMedia(ALL_FARM_MEDIA[nextIdx]);
    setSelectedIndex(nextIdx);
  };

  const prevMedia = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === -1) return;
    const prevIdx = (selectedIndex - 1 + ALL_FARM_MEDIA.length) % ALL_FARM_MEDIA.length;
    setSelectedMedia(ALL_FARM_MEDIA[prevIdx]);
    setSelectedIndex(prevIdx);
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'pool': return 'Pool & Deck';
      case 'rooms': return '9 BHK Suites & Halls';
      case 'lawns': return 'Lawns & Pergolas';
      case 'deck': return 'Tree Bridge & Decks';
      case 'play': return 'Kids Play & Cricket';
      default: return 'Estate Feature';
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Controls Bar: Type Filters + Category Tabs + View Switcher */}
      <div className="flex flex-col gap-5 pb-2">
        {/* Row 1: Media Type & View Mode Toggles */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Photos vs Videos vs All Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F3ECE2] border border-[#E5A952]/40 rounded-full">
            <button
              onClick={() => { setMediaFilter('all'); setVisibleCount(18); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mediaFilter === 'all'
                  ? 'bg-[#122E21] text-[#FAF7F2] shadow-sm'
                  : 'text-[#122E21]/70 hover:text-[#122E21]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>All Media (75)</span>
            </button>

            <button
              onClick={() => { setMediaFilter('photos'); setVisibleCount(18); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mediaFilter === 'photos'
                  ? 'bg-[#122E21] text-[#FAF7F2] shadow-sm'
                  : 'text-[#122E21]/70 hover:text-[#122E21]'
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>Photos (55)</span>
            </button>

            <button
              onClick={() => { setMediaFilter('videos'); setVisibleCount(18); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                mediaFilter === 'videos'
                  ? 'bg-[#122E21] text-[#FAF7F2] shadow-sm'
                  : 'text-[#122E21]/70 hover:text-[#122E21]'
              }`}
            >
              <Film className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>Video Tours (20)</span>
            </button>
          </div>

          {/* View Mode Toggle: Grid vs 3D Fan */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F3ECE2] border border-[#E5A952]/40 rounded-full">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#122E21] text-[#FAF7F2] shadow-sm'
                  : 'text-[#122E21]/70 hover:text-[#122E21]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>Interactive Grid</span>
            </button>

            <button
              onClick={() => setViewMode('fan')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'fan'
                  ? 'bg-[#122E21] text-[#FAF7F2] shadow-sm'
                  : 'text-[#122E21]/70 hover:text-[#122E21]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#E5A952]" />
              <span>3D Fan Carousel</span>
            </button>
          </div>
        </div>

        {/* Row 2: Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          {[
            { id: 'all', label: 'All Categories' },
            { id: 'pool', label: 'Pool & Deck' },
            { id: 'rooms', label: '9 BHK Suites & Halls' },
            { id: 'lawns', label: 'Lawns & Pergolas' },
            { id: 'deck', label: 'Tree Bridge & Decks' },
            { id: 'play', label: 'Kids & Cricket Arena' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setCategoryFilter(cat.id); setVisibleCount(18); }}
              className={`px-4 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 border cursor-pointer ${
                categoryFilter === cat.id
                  ? 'bg-[#122E21] border-[#E5A952] text-[#FAF7F2] shadow-[0_0_15px_rgba(229,169,82,0.35)]'
                  : 'bg-[#F3ECE2]/80 border-[#122E21]/15 text-[#122E21]/80 hover:border-[#E5A952] hover:text-[#122E21] hover:bg-[#F3ECE2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. FAN CAROUSEL VIEW */}
      {viewMode === 'fan' && (
        <div className="relative py-6 bg-[#15221B]/95 rounded-3xl border border-[#E5A952]/40 p-4 sm:p-8 shadow-[0_0_40px_rgba(229,169,82,0.15)] overflow-hidden">
          <div className="text-center mb-2">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-[#F3C77C]">
              Hover &amp; Drag Interactive 3D Gallery (Top 16 Features)
            </span>
          </div>
          <SocialCards cards={fanCards} onCardClick={openLightboxByIndex} />
        </div>
      )}

      {/* 2. INTERACTIVE GRID VIEW */}
      {viewMode === 'grid' && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMedia.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative h-80 rounded-2xl overflow-hidden bg-[#F3ECE2] border border-[#E5A952]/30 cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,169,82,0.35)] hover:border-[#E5A952]"
              >
                {/* Image / Thumbnail */}
                <img
                  src={item.thumbUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Video Play Badge if Video */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#122E21]/90 backdrop-blur-md border border-[#E5A952] text-[#F3C77C] text-[9px] font-sans font-bold uppercase tracking-wider shadow-lg">
                    <Play className="w-3 h-3 fill-current text-[#E5A952]" />
                    <span>Video Tour</span>
                  </div>
                )}

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1510]/95 via-[#122E21]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] tracking-[0.25em] text-[#F3C77C] uppercase font-sans font-bold flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3 h-3 text-[#E5A952]" />
                      <span>{getCategoryLabel(item.category)}</span>
                    </span>

                    <h3 className="text-[#FAF7F2] font-serif text-2xl leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[#EDE5D8]/80 text-xs mt-1.5 font-sans font-light leading-relaxed line-clamp-2">
                      {item.alt}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A952] text-[#122E21] font-sans text-[9px] font-bold uppercase tracking-widest shadow-md">
                      {item.type === 'video' ? <Play className="w-3 h-3 fill-current" /> : <Maximize2 className="w-3 h-3" />}
                      <span>{item.type === 'video' ? 'Play Video Tour' : 'View High-Res Photo'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex flex-col items-center justify-center gap-3 pt-6">
              <button
                onClick={() => setVisibleCount(prev => prev + 18)}
                className="px-8 py-3.5 rounded-full border border-[#E5A952] bg-[#122E21] text-[#FAF7F2] font-sans text-xs font-bold uppercase tracking-[0.22em] hover:bg-[#E5A952] hover:text-[#122E21] transition-all duration-300 shadow-[0_0_20px_rgba(229,169,82,0.35)] cursor-pointer"
              >
                Load More Media ({activeMediaList.length - visibleCount} Remaining)
              </button>
              <button
                onClick={() => setVisibleCount(activeMediaList.length)}
                className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#122E21]/60 hover:text-[#E5A952] transition-colors cursor-pointer"
              >
                Show All {activeMediaList.length} Items At Once
              </button>
            </div>
          )}
        </>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL (PHOTO & VIDEO PLAYER) */}
      {selectedMedia && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#0D1510]/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in text-[#FAF7F2]"
        >
          {/* Top Bar with Title, Counter and Close Button */}
          <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between border-b border-[#E5A952]/20 z-20 bg-[#0D1510]/90 backdrop-blur-md">
            <div>
              <p className="font-sans text-[9px] tracking-[0.25em] text-[#F3C77C] uppercase font-bold flex items-center gap-2">
                <span>{selectedMedia.type === 'video' ? 'VIDEO TOUR' : 'HIGH-RES PHOTO'}</span>
                <span>•</span>
                <span>ITEM {selectedIndex + 1} OF {ALL_FARM_MEDIA.length}</span>
                <span>•</span>
                <span className="text-[#E5A952]">{getCategoryLabel(selectedMedia.category).toUpperCase()}</span>
              </p>
              <h4 className="font-serif text-xl sm:text-2xl font-medium mt-1 text-[#FAF7F2]">
                {selectedMedia.title}
              </h4>
            </div>

            <button
              onClick={closeLightbox}
              className="p-3 text-[#FAF7F2]/80 hover:text-[#FAF7F2] rounded-full border border-[#E5A952]/40 hover:bg-[#E5A952]/20 transition-all cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5 text-[#E5A952]" />
            </button>
          </div>

          {/* Center Media Display with Prev/Next Controls */}
          <div className="relative max-w-5xl w-full max-h-[72vh] flex items-center justify-center mt-14">
            <button
              onClick={prevMedia}
              className="absolute left-2 sm:left-4 z-20 p-3 text-[#FAF7F2] hover:bg-[#E5A952] hover:text-[#122E21] rounded-full border border-[#E5A952]/40 bg-[#122E21]/80 backdrop-blur-sm transition-all -translate-y-1/2 top-1/2 cursor-pointer shadow-[0_0_15px_rgba(229,169,82,0.3)]"
              title="Previous Item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {selectedMedia.type === 'video' ? (
              <video
                key={selectedMedia.id}
                src={selectedMedia.url}
                poster={selectedMedia.thumbUrl}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[70vh] rounded-xl border border-[#E5A952]/40 shadow-[0_0_50px_rgba(229,169,82,0.35)] bg-black"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-[#E5A952]/30 shadow-[0_0_50px_rgba(229,169,82,0.25)] select-none"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <button
              onClick={nextMedia}
              className="absolute right-2 sm:right-4 z-20 p-3 text-[#FAF7F2] hover:bg-[#E5A952] hover:text-[#122E21] rounded-full border border-[#E5A952]/40 bg-[#122E21]/80 backdrop-blur-sm transition-all -translate-y-1/2 top-1/2 cursor-pointer shadow-[0_0_15px_rgba(229,169,82,0.3)]"
              title="Next Item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Description Caption */}
          <div className="mt-6 text-center max-w-2xl px-4 z-20">
            <p className="text-[#EDE5D8] font-sans text-xs sm:text-sm leading-relaxed font-light">
              {selectedMedia.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
