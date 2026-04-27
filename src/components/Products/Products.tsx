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
    <div className="font-sans flex flex-col items-center">
      <div className="w-full bg-surface py-20 border-b border-contrast/10">
        <div className="max-w-7xl w-full px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-contrast mb-4">Our Products</h1>
          <p className="text-xl text-contrast/80 max-w-2xl mx-auto">Engineered solutions for every surface. High-quality, reliable formulation made in our advanced production facilities.</p>
        </div>
      </div>

      <div className="w-full py-20 flex justify-center">
        <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
             <div key={i} className="bg-white p-8 rounded-[12px] border border-contrast/10 shadow-sm flex flex-col justify-between">
                <div>
                   <div className="w-12 h-12 bg-surface rounded-[8px] flex items-center justify-center mb-6 text-primary border border-contrast/5 font-bold text-lg">
                     {cat.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-contrast mb-3">{cat.name}</h3>
                   <p className="text-contrast/80 text-sm leading-relaxed mb-8">{cat.desc}</p>
                </div>
                <div>
                   <h4 className="text-xs font-semibold text-contrast/50 uppercase tracking-widest mb-3">Available Colors</h4>
                   <div className="flex flex-wrap gap-2">
                     {cat.colors.map(color => (
                        <span key={color} className="px-3 py-1 bg-surface text-contrast text-xs font-medium rounded border border-contrast/5">
                           {color}
                        </span>
                     ))}
                   </div>
                </div>
             </div>
          ))}

          <div className="bg-primary p-8 rounded-[12px] border border-primary flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Formulation?</h3>
              <p className="text-white/80 text-sm mb-8 max-w-sm">We provide tailored color matching and specific structural formulations for bulk industrial orders.</p>
              <a href="/contact" className="px-6 py-3 bg-white text-primary font-medium rounded-[12px] hover:bg-surface transition-colors">
                 Contact Sales
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
