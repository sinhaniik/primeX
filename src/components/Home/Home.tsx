import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans flex flex-col items-center">
      
      {/* 1. Hero Section */}
      <section className="w-full bg-surface py-20 md:py-32 flex justify-center border-b border-contrast/10 mt-16 md:mt-20">
        <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-contrast mb-6 leading-tight">
              Reliable Spray Paint for Industrial, Automotive & DIY Applications.
            </h1>
            <p className="text-xl text-contrast/80 mb-10 max-w-lg">
              Fast drying, smooth finish, and consistent coverage across multiple surfaces. Built for professionals and demanding environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-primary text-white font-medium rounded-[12px] hover:bg-[#2c7179] transition-colors text-center border border-primary">
                Request a Quote
              </Link>
              <Link to="/products" className="px-8 py-4 bg-white text-contrast font-medium rounded-[12px] hover:bg-surface transition-colors text-center border border-contrast/20">
                View Products
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-full max-w-md aspect-square bg-white rounded-[20px] border border-contrast/10 shadow-sm relative overflow-hidden flex flex-col items-center justify-center p-8">
               <div className="h-64 w-32 bg-primary/10 rounded-full blur-3xl absolute opacity-60"></div>
               <div className="h-4/5 w-32 bg-surface border-2 border-contrast/10 rounded-t-3xl rounded-b-md shadow-sm relative flex flex-col items-center z-10 p-4 pt-8">
                  <div className="h-4 w-16 bg-contrast rounded mb-2"></div>
                  <div className="h-2 w-12 bg-contrast/50 rounded mb-8"></div>
                  <div className="text-xl font-bold text-contrast tracking-widest border-y border-contrast/10 py-2 w-full text-center">PRIMEX</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust / Use Case Strip */}
      <section className="w-full bg-secondary/10 py-10 flex justify-center border-b border-contrast/10">
        <div className="max-w-7xl w-full px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
          {['Automotive', 'Industrial', 'Home Use', 'DIY Projects'].map((item) => (
             <div key={item} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="font-semibold text-contrast tracking-wide">{item}</span>
             </div>
          ))}
        </div>
      </section>

      {/* 3. Product Categories Section */}
      <section className="w-full bg-surface py-20 flex justify-center">
        <div className="max-w-7xl w-full px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-contrast">Explore Our Product Range</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "General Purpose", desc: "Versatile coverage for everyday DIY and workshop repairs." },
              { title: "Automotive / Industrial", desc: "High-durability formulations for demanding environments." },
              { title: "Heat Resistant", desc: "Formulated for high-temperature items like exhaust pipes." },
              { title: "Primer", desc: "Rust preventive undercoating for maximum top-coat adhesion." },
              { title: "Clear Coat", desc: "Protective glossy sealing layer against weather and wear." }
            ].map((cat) => (
               <Link to="/products" key={cat.title} className="bg-white p-8 rounded-[12px] border border-contrast/10 hover:border-primary hover:shadow-md transition-all group flex flex-col justify-between">
                  <div>
                     <h3 className="text-xl font-bold text-contrast mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                     <p className="text-contrast/80 text-sm mb-6">{cat.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                     View Products <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
               </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose PrimeX */}
      <section className="w-full bg-white py-24 border-y border-contrast/10 flex justify-center">
        <div className="max-w-7xl w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-contrast mb-4">Why Choose PrimeX</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast Drying Formula", desc: "Reduces waiting time between coats, accelerating project completion." },
              { title: "Smooth & Even Finish", desc: "Advanced nozzle design prevents dripping and ensures professional results." },
              { title: "Strong Coverage", desc: "High pigment concentration means you use less paint for maximum opacity." },
              { title: "Easy Application", desc: "Ergonomic design and consistent spray pressure for fatigue-free work." }
            ].map((feature, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                 <div className="w-16 h-16 bg-surface border border-contrast/10 rounded-[12px] flex items-center justify-center mb-6 text-primary font-bold text-2xl">
                    0{i + 1}
                 </div>
                 <h3 className="font-bold text-contrast mb-2">{feature.title}</h3>
                 <p className="text-sm text-contrast/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Applications Section */}
      <section className="w-full bg-surface py-24 flex justify-center">
        <div className="max-w-7xl w-full px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-contrast">Real-World Applications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Car touch-up and detailing",
              "Industrial metal coating",
              "Appliance refinishing",
              "DIY furniture restoration"
            ].map((app, i) => (
              <div key={i} className="bg-white border border-contrast/10 rounded-[12px] p-6 flex flex-col justify-end h-48 md:h-64 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors"></div>
                 <h3 className="text-xl font-bold text-contrast relative z-10 bg-white inline-block px-4 py-2 border border-contrast/10 rounded-[8px] self-start shadow-sm">{app}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Product Highlight / Visual Section */}
      <section className="w-full bg-contrast py-32 flex justify-center overflow-hidden">
        <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Designed for durability, consistency, and performance.
              </h2>
           </div>
           <div className="md:w-1/2 h-64 w-full bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center backdrop-blur-sm">
              <span className="text-white/40 tracking-widest uppercase font-semibold">[ Detailed Texture Visual ]</span>
           </div>
        </div>
      </section>

      {/* 7. Call to Action (Conversion Section) */}
      <section className="w-full bg-primary py-24 flex justify-center text-center">
        <div className="max-w-3xl w-full px-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for bulk orders or dealership opportunities?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Get in touch with us for product details, pricing, and availability across our distribution network.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-primary font-bold rounded-[12px] hover:bg-surface transition-colors shadow-md border border-white">
            Request a Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;