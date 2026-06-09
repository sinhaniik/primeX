import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[var(--color-accent)] text-6xl font-bold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        404
      </span>
      <h1 className="text-2xl font-bold text-[var(--color-text)] mb-3 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        Page Not Found
      </h1>
      <p className="text-[var(--color-muted)] text-sm mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="motion-button bg-[var(--color-accent)] text-[var(--color-on-accent)] px-8 py-3 text-sm font-semibold hover:bg-[var(--color-accent-hover)]"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
