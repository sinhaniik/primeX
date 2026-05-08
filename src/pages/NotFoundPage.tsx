import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[#c9922a] text-6xl font-bold mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        404
      </span>
      <h1 className="text-2xl font-bold text-[#d0dce8] mb-3 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        Page Not Found
      </h1>
      <p className="text-[#7a95aa] text-sm mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#c9922a] text-[#0d1b2a] px-8 py-3 text-sm font-semibold hover:bg-[#e8b84b] transition-colors"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;