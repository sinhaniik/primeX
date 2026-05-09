import { useState, FormEvent } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: '',
  phone: '',
  email: '',
  interest: 'PrimeX Spray Paint',
  message: '',
};

const interestOptions = [
  'PrimeX Spray Paint',
  'Industrial Chemicals',
  'Lab Instruments',
  'Fabrication Works',
  'Coating Job Work',
  'Press Shop Work',
  'Dealership Enquiry',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData(initialFormData);
    }, 3000);
  };

  return (
    <div ref={ref} className="reveal">
      {/* Header */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight">
            Get in Touch
          </h1>
          <p className="text-[var(--color-muted)] text-base mt-4 max-w-2xl leading-relaxed">
            Product enquiries, service quotations, or dealership opportunities — we're ready to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[var(--color-bg)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Contact Details
              </h2>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-muted)] text-xs uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-[var(--color-text)] text-sm font-medium">+91 97372 23367</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-muted)] text-xs uppercase tracking-widest mb-1">Email</p>
                  <p className="text-[var(--color-text)] text-sm font-medium break-all">abni.unified.engineering@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-muted)] text-xs uppercase tracking-widest mb-1">Address</p>
                  <p className="text-[var(--color-text)] text-sm font-medium leading-relaxed">
                    C-73, Neelkanth Residency, near Tirth Villa,<br />
                    Kanjari Road, Halol, Panch Mahal,<br />
                    Vadodara – 389350
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--color-muted)] text-xs uppercase tracking-widest mb-1">Hours</p>
                  <p className="text-[var(--color-text)] text-sm font-medium">Mon – Sat, 9AM – 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Send an Enquiry
            </h2>

            {submitted ? (
              <div className="bg-[var(--color-surface)] border border-[var(--color-accent-border)] p-8 text-center">
                <div className="text-[var(--color-accent)] text-3xl mb-3">✓</div>
                <p className="text-[var(--color-text)] font-semibold mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Enquiry Sent Successfully
                </p>
                <p className="text-[var(--color-muted)] text-sm">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-[var(--color-secondary)] text-xs uppercase tracking-widest mb-2">
                    Full Name <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[rgb(var(--color-muted-rgb)/0.55)]"
                    placeholder="Your name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[var(--color-secondary)] text-xs uppercase tracking-widest mb-2">
                    Phone <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[rgb(var(--color-muted-rgb)/0.55)]"
                    placeholder="+91"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[var(--color-secondary)] text-xs uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 px-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[rgb(var(--color-muted-rgb)/0.55)]"
                    placeholder="email@company.com"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-[var(--color-secondary)] text-xs uppercase tracking-widest mb-2">
                    Interested In
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full h-11 px-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[var(--color-secondary)] text-xs uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none placeholder:text-[rgb(var(--color-muted-rgb)/0.55)]"
                    placeholder="Describe your requirement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[var(--color-accent)] text-[var(--color-on-accent)] font-semibold text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
