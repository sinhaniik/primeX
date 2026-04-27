const Contact = () => {
   return (
      <div className="font-sans flex flex-col items-center">
         <div className="w-full bg-surface py-20 border-b border-contrast/10">
            <div className="max-w-7xl w-full px-6 text-center">
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-contrast mb-4">Contact Us</h1>
               <p className="text-xl text-contrast/80 max-w-2xl mx-auto">Connect with our sales and distribution team for bulk orders, dealership inquiries, and technical support.</p>
            </div>
         </div>

         <div className="w-full py-20 flex justify-center">
            <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-3xl font-bold text-contrast mb-6">Inquiry Form</h2>
                  <form className="bg-white p-8 rounded-[12px] border border-contrast/10 shadow-sm space-y-6">
                     <div>
                        <label className="block text-sm font-semibold text-contrast mb-2">Inquiry Type</label>
                        <select className="w-full h-12 px-4 bg-surface border border-contrast/10 rounded-[8px] text-contrast focus:outline-none focus:border-primary/50">
                           <option>Bulk Order (100+ units)</option>
                           <option>Dealership / Distributor Application</option>
                           <option>Product Query</option>
                           <option>Other</option>
                        </select>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-semibold text-contrast mb-2">Full Name</label>
                           <input type="text" className="w-full h-12 px-4 bg-surface border border-contrast/10 rounded-[8px] text-contrast focus:outline-none focus:border-primary/50" />
                        </div>
                        <div>
                           <label className="block text-sm font-semibold text-contrast mb-2">Company / Shop Name</label>
                           <input type="text" className="w-full h-12 px-4 bg-surface border border-contrast/10 rounded-[8px] text-contrast focus:outline-none focus:border-primary/50" />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-semibold text-contrast mb-2">Email Address</label>
                           <input type="email" className="w-full h-12 px-4 bg-surface border border-contrast/10 rounded-[8px] text-contrast focus:outline-none focus:border-primary/50" />
                        </div>
                        <div>
                           <label className="block text-sm font-semibold text-contrast mb-2">Phone Number</label>
                           <input type="tel" className="w-full h-12 px-4 bg-surface border border-contrast/10 rounded-[8px] text-contrast focus:outline-none focus:border-primary/50" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-contrast mb-2">Message / Requirements</label>
                        <textarea rows={4} className="w-full p-4 bg-surface border border-contrast/10 rounded-[8px] text-contrast focus:outline-none focus:border-primary/50"></textarea>
                     </div>
                     <button type="button" className="w-full h-12 bg-primary text-white font-medium rounded-[8px] hover:bg-[#2c7179] transition-colors border border-primary">
                        Submit Inquiry
                     </button>
                  </form>
               </div>

               <div className="flex flex-col gap-8">
                  <div className="bg-white p-8 rounded-[12px] border border-contrast/10">
                     <h3 className="text-xl font-bold text-contrast mb-4">Corporate Office</h3>
                     <p className="text-contrast/80 leading-relaxed mb-6">
                        AbNi Unified Engineering<br />
                        C-73, Neelkanth Residency, near tirth villa,<br />
                        kanjari road, Halol, Panch Mahal,<br />
                        Vadodra-389350
                     </p>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 border-t border-contrast/5 pt-4">
                           <div className="w-10 h-10 bg-surface rounded-[8px] flex items-center justify-center text-primary font-bold">@</div>
                           <div>
                              <p className="text-xs text-contrast/50 font-semibold uppercase">Email Support</p>
                              <p className="text-contrast font-medium">abni.unified.engineering@gmail.com</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 border-t border-contrast/5 pt-4">
                           <div className="w-10 h-10 bg-surface rounded-[8px] flex items-center justify-center text-primary font-bold">#</div>
                           <div>
                              <p className="text-xs text-contrast/50 font-semibold uppercase">Phone</p>
                              <p className="text-contrast font-medium">9737223367</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-tertiary/20 p-8 rounded-[12px] border border-tertiary/50">
                     <h3 className="text-lg font-bold text-contrast mb-2">Dealership Opportunities</h3>
                     <p className="text-contrast/80 text-sm mb-4">We are expanding our presence across India. Join our network of verified distributors and gain access to high-margin industrial paint products.</p>
                     <a href="#" className="font-semibold text-primary hover:text-[#2c7179] transition-colors text-sm">Download Dealership Guide &rarr;</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
