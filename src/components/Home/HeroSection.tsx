import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { value: '7+', label: 'Product Lines' },
  { value: '3', label: 'Services' },
  { value: 'ISO', label: '9001-2015' },
];

const primeXVideo = '/AbNI%20intro.mp4';

const HeroSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
  };

  return (
    <section ref={ref} className="reveal bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="px-6 py-6 md:py-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-accent)] tracking-tight">
          AbNi Unified Engineering
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[var(--color-text)] tracking-tight">
          Precision. Performance. Engineering.
        </h2>
      </div>

      <div className="relative w-5/6 mx-auto">
        <video
          ref={videoRef}
          src={primeXVideo}
          aria-label="PrimeX spray paint introduction"
          className="w-full h-[65vh] bg-[var(--color-surface)] border border-[var(--color-border)] object-cover cursor-pointer"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onClick={togglePlayback}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
        />
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg className="h-8 w-8 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          aria-label={isMuted ? 'Turn video sound on' : 'Mute video'}
        >
          {isMuted ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5 6 9H3v6h3l5 4V5Zm5 5 5 5m0-5-5 5" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5 6 9H3v6h3l5 4V5Zm4.5 3.5a5 5 0 0 1 0 7m2.5-9.5a8 8 0 0 1 0 12" />
            </svg>
          )}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28">
        <div className="space-y-8 max-w-3xl mx-auto text-center">
          <p className="text-[var(--color-muted)] text-base leading-relaxed max-w-lg mx-auto">
            ISO 9001-2015 certified manufacturer delivering fabrication, surface coating, and high-performance spray paints for industrial and commercial applications across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="motion-button bg-[var(--color-accent)] text-[var(--color-on-accent)] px-8 py-3.5 text-sm font-semibold hover:bg-[var(--color-accent-hover)] text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="motion-button border border-[var(--color-accent-border)] text-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold hover:bg-[var(--color-accent-soft)] text-center"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 pb-20 md:pb-28 border-t border-[var(--color-border-subtle)]">
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-[var(--color-muted)] text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
