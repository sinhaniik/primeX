import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans flex flex-col items-center pt-16">
      
      {/* 1. Hero Section */}
      <section className="w-full bg-bg py-24 md:py-32 flex justify-center">
        <div className="max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 md:gap-12 items-center">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
              Reliable Spray Paint for Industrial Applications.
            </h1>
            <p className="text-base text-muted leading-relaxed">
              Fast drying, smooth finish, and consistent coverage across multiple surfaces. Built for professionals and demanding environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <Link to="/contact" className="bg-accent text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition text-center text-sm">
                Request a Quote
              </Link>
              <Link to="/products" className="border border-border px-6 py-3 rounded-xl text-primary hover:bg-black/5 dark:hover:bg-white/5 transition text-center text-sm font-medium">
                View Products
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-full max-w-md aspect-square bg-white dark:bg-[#111] rounded-2xl border border-border shadow-lg relative overflow-hidden flex flex-col items-center justify-center p-8">
               <div className="h-64 w-32 bg-accent/20 rounded-full blur-3xl absolute opacity-60"></div>
               <div className="h-4/5 w-32 bg-bg border-2 border-border rounded-t-3xl rounded-b-md shadow-sm relative flex flex-col items-center z-10 p-4 pt-8">
                  <div className="h-4 w-16 bg-primary rounded mb-2"></div>
                  <div className="h-2 w-12 bg-muted rounded mb-8"></div>
                  <div className="text-xl font-semibold text-primary tracking-tight border-y border-border py-2 w-full text-center">PRIMEX</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust / Use Case Strip */}
      <section className="w-full bg-bg py-12 flex justify-center border-y border-border">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
          {['Automotive', 'Industrial', 'Home Use', 'DIY Projects'].map((item) => (
             <div key={item} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>
                <span className="text-base font-medium text-primary tracking-tight">{item}</span>
             </div>
          ))}
        </div>
      </section>

      {/* 3. Product Categories Section */}
      <section className="w-full bg-bg py-24 md:py-32 flex justify-center">
        <div className="max-w-6xl w-full mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-3">Explore Our Categories</h2>
              <p className="text-base text-muted leading-relaxed max-w-2xl">High-performance paints engineered for specific industrial uses.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "General Purpose", desc: "Versatile coverage for everyday DIY and workshop repairs." },
                { title: "Automotive / Industrial", desc: "High-durability formulations for demanding environments." },
                { title: "Heat Resistant", desc: "Formulated for high-temperature items like exhaust pipes." },
                { title: "Primer", desc: "Rust preventive undercoating for maximum top-coat adhesion." },
                { title: "Clear Coat", desc: "Protective glossy sealing layer against weather and wear." }
              ].map((cat) => (
                 <Link to="/products" key={cat.title} className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-border hover:shadow-md transition flex flex-col justify-between min-h-[200px]">
                    <div>
                       <h3 className="text-xl font-medium text-primary mb-2 transition-colors">{cat.title}</h3>
                       <p className="text-sm text-muted leading-relaxed mb-6">{cat.desc}</p>
                    </div>
                    <span className="text-sm font-medium text-primary flex items-center gap-2 group">
                       View Products <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                 </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose PrimeX */}
      <section className="w-full bg-bg py-24 md:py-32 flex justify-center border-t border-border">
        <div className="max-w-6xl w-full mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-3">Why Choose PrimeX</h2>
              <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto">Advanced formulations designed to save time and deliver pristine finishes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Fast Drying Formula", desc: "Reduces waiting time between coats, accelerating project completion." },
                { title: "Smooth & Even Finish", desc: "Advanced nozzle design prevents dripping and ensures professional results." },
                { title: "Strong Coverage", desc: "High pigment concentration means you use less paint for maximum opacity." },
                { title: "Easy Application", desc: "Ergonomic design and consistent spray pressure for fatigue-free work." }
              ].map((feature, i) => (
                <div key={i} className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-border hover:shadow-md transition text-center flex flex-col items-center">
                   <div className="w-12 h-12 bg-bg border border-border rounded-xl flex items-center justify-center mb-6 text-accent font-medium text-xl shadow-sm">
                      0{i + 1}
                   </div>
                   <h3 className="text-xl font-medium text-primary mb-2">{feature.title}</h3>
                   <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Applications Section */}
      <section className="w-full bg-bg py-24 md:py-32 flex justify-center border-t border-border">
        <div className="max-w-6xl w-full mx-auto px-6">
           <div className="space-y-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-3">Real-World Applications</h2>
              <p className="text-base text-muted leading-relaxed max-w-2xl">Proven across dozens of intensive industries.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Car touch-up and detailing",
                "Industrial metal coating",
                "Appliance refinishing",
                "DIY furniture restoration"
              ].map((app, i) => (
                <div key={i} className="bg-white dark:bg-[#111] border border-border rounded-2xl p-6 flex flex-col justify-end h-48 md:h-64 relative overflow-hidden group hover:shadow-md transition">
                   <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <h3 className="text-xl font-medium text-primary relative z-10">{app}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="w-full bg-accent py-24 md:py-32 flex justify-center text-center">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl">
            Looking for bulk orders or dealership opportunities?
          </h2>
          <p className="text-base text-white/90 leading-relaxed mb-10 max-w-xl">
            Get in touch with us for product details, pricing, and availability across our distribution network.
          </p>
          <Link to="/contact" className="bg-white text-accent px-8 py-4 rounded-xl font-medium hover:opacity-90 transition shadow-md">
            Request a Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;