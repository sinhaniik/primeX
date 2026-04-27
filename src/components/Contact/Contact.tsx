const Contact = () => {
   return (
      <div className="font-sans flex flex-col items-center pt-16">
         <section className="w-full bg-bg py-24 md:py-32 border-b border-border flex justify-center">
            <div className="max-w-6xl w-full mx-auto px-6 text-center space-y-6">
               <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-primary leading-[1.1]">Contact Us</h1>
               <p className="text-base text-muted max-w-2xl mx-auto leading-relaxed">Connect with our sales and distribution team for bulk orders, dealership inquiries, and technical support.</p>
            </div>
         </section>

         <section className="w-full py-24 md:py-32 flex justify-center bg-bg">
            <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Inquiry Form</h2>
                  <form className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-border hover:shadow-md transition space-y-6">
                     <div>
                        <label className="block text-sm font-medium text-primary mb-2">Inquiry Type</label>
                        <select className="w-full h-12 px-4 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:border-accent text-sm transition">
                           <option>Bulk Order (100+ units)</option>
                           <option>Dealership / Distributor Application</option>
                           <option>Product Query</option>
                           <option>Other</option>
                        </select>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-medium text-primary mb-2">Full Name</label>
                           <input type="text" className="w-full h-12 px-4 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:border-accent text-sm transition" />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-primary mb-2">Company / Shop Name</label>
                           <input type="text" className="w-full h-12 px-4 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:border-accent text-sm transition" />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                           <input type="email" className="w-full h-12 px-4 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:border-accent text-sm transition" />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                           <input type="tel" className="w-full h-12 px-4 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:border-accent text-sm transition" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-primary mb-2">Message / Requirements</label>
                        <textarea rows={4} className="w-full p-4 bg-bg border border-border rounded-xl text-primary focus:outline-none focus:border-accent text-sm transition"></textarea>
                     </div>
                     <button type="button" className="w-full h-12 bg-accent text-white font-medium rounded-xl hover:opacity-90 transition shadow-sm mt-4">
                        Submit Inquiry
                     </button>
                  </form>
               </div>

               <div className="flex flex-col gap-8 space-y-2 mt-2 md:mt-16">
                  <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-border hover:shadow-md transition">
                     <h3 className="text-xl font-medium text-primary mb-4">Corporate Office</h3>
                     <p className="text-base text-muted leading-relaxed mb-6">
                        AbNi Unified Engineering<br />
                        C-73, Neelkanth Residency, near tirth villa,<br />
                        kanjari road, Halol, Panch Mahal,<br />
                        Vadodra-389350
                     </p>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 border-t border-border pt-4">
                           <div className="w-10 h-10 bg-bg border border-border rounded-xl flex items-center justify-center text-accent font-medium shadow-sm">@</div>
                           <div>
                              <p className="text-sm font-medium text-muted">Email Support</p>
                              <p className="text-base text-primary font-medium">abni.unified.engineering@gmail.com</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 border-t border-border pt-4">
                           <div className="w-10 h-10 bg-bg border border-border rounded-xl flex items-center justify-center text-accent font-medium shadow-sm">#</div>
                           <div>
                              <p className="text-sm font-medium text-muted">Phone</p>
                              <p className="text-base text-primary font-medium">9737223367</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-border hover:shadow-md transition">
                     <h3 className="text-xl font-medium text-primary mb-2">Dealership Opportunities</h3>
                     <p className="text-base text-muted leading-relaxed mb-4">We are expanding our presence across India. Join our network of verified distributors and gain access to high-margin industrial paint products.</p>
                     <a href="#" className="text-sm font-medium text-accent hover:opacity-80 transition flex items-center gap-1">
                        Download Dealership Guide <span className="text-lg">&rarr;</span>
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Contact;
