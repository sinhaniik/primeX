const Products = () => {
  const categories = [
    {
       name: "General Purpose Spray Paint",
       desc: "Versatile coverage for wood, metal, plastic, and concrete. Ideal for regular DIY repairs and workshop use. Features a rapid-drying mechanism.",
       icon: "G",
       colors: ["Black", "White", "Red", "Blue", "Yellow", "Clear"]
    },
    {
       name: "Automotive / Industrial",
       desc: "High-durability formulations designed to withstand harsh weather, engine grease, and mechanical wear. UV resistant and anti-chip.",
       icon: "A",
       colors: ["Matte Black", "Metallic Silver", "Glossy White"]
    },
    {
       name: "Heat Resistant",
       desc: "Engineered for exhaust pipes, engine blocks, and industrial machinery operating at extreme temperatures (up to 600°C).",
       icon: "H",
       colors: ["High-Temp Black", "High-Temp Silver"]
    },
    {
       name: "Rust Preventive Primer",
       desc: "Industrial-grade undercoating that stops corrosion and bonds directly to the metallic surface. Provides maximum adhesion for top coats.",
       icon: "R",
       colors: ["Red Oxide", "Grey Primer"]
    },
    {
       name: "Clear Coat",
       desc: "A heavy-duty protective layer that seals in color, providing a glossy, weather-resistant finish protecting against oxidation and scratches.",
       icon: "C",
       colors: ["Glossy Clear", "Matte Clear"]
    }
  ];

  return (
    <div className="font-sans flex flex-col items-center pt-16">
      <section className="w-full bg-bg py-24 md:py-32 flex justify-center border-b border-border">
        <div className="max-w-6xl w-full mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-primary leading-[1.1]">Our Products</h1>
          <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed">Engineered solutions for every surface. High-quality, reliable formulation made in our advanced production facilities.</p>
        </div>
      </section>

      <section className="w-full bg-bg py-24 md:py-32 flex justify-center">
        <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
             <div key={i} className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-border flex flex-col justify-between hover:shadow-md transition">
                <div>
                   <div className="w-12 h-12 bg-bg rounded-xl flex items-center justify-center mb-6 text-accent border border-border font-medium text-xl shadow-sm">
                     {cat.icon}
                   </div>
                   <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-primary mb-2">{cat.name}</h3>
                   <p className="text-base text-muted leading-relaxed mb-8">{cat.desc}</p>
                </div>
                <div>
                   <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Available Colors</h4>
                   <div className="flex flex-wrap gap-2">
                     {cat.colors.map(color => (
                        <span key={color} className="px-3 py-1 bg-bg text-muted text-sm rounded-lg border border-border">
                           {color}
                        </span>
                     ))}
                   </div>
                </div>
             </div>
          ))}

          <div className="bg-accent p-6 rounded-2xl border border-accent flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3 leading-[1.1]">Need a Custom Formulation?</h3>
              <p className="text-base text-white/90 leading-relaxed mb-8 max-w-sm">We provide tailored color matching and specific structural formulations for bulk industrial orders.</p>
              <a href="/contact" className="bg-white text-accent px-6 py-3 rounded-xl font-medium hover:opacity-90 transition shadow-md">
                 Contact Sales
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
