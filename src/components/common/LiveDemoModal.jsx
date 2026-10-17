import React, { useState } from 'react';
import { 
  X, Check, ShoppingBag, Calendar, ArrowRight, Star, 
  MapPin, Clock, DollarSign, Filter, RefreshCw, Smartphone, Monitor
} from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';
import { formatINR } from '../../utils/formatters';

export const LiveDemoModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const [activeDevice, setActiveDevice] = useState('desktop'); // desktop | mobile

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-lg animate-fadeIn">
      <div 
        className={`relative w-full ${activeDevice === 'mobile' ? 'max-w-md' : 'max-w-5xl'} h-[92vh] bg-[#090D16] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-blue-400 uppercase">Live Interactive Demo</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Active Prototype</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-100 hidden sm:block">{project.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Device preview toggles */}
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 ${activeDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Desktop</span>
              </button>
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 ${activeDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Browser URL Bar simulator */}
        <div className="px-4 py-2 bg-slate-950/90 border-b border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <div className="flex gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block"></span>
          </div>
          <div className="flex-1 bg-slate-900 px-3 py-1 rounded border border-slate-800 truncate text-slate-300 flex items-center justify-between">
            <span>https://demo.{project.slug}.nexuscraft.dev</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 rounded border border-emerald-500/30">SSL Secured</span>
          </div>
        </div>

        {/* Demo Content Container */}
        <div className="flex-1 overflow-y-auto bg-slate-950 text-slate-100 p-4 sm:p-6">
          {project.demoType === 'restaurant' && <RestaurantInteractiveDemo />}
          {project.demoType === 'ecommerce' && <EcommerceInteractiveDemo />}
          {project.demoType === 'realestate' && <RealEstateInteractiveDemo />}
          {project.demoType === 'healthcare' && <HealthcareInteractiveDemo />}
          {project.demoType === 'saas' && <SaaSInteractiveDemo />}
          {project.demoType === 'education' && <EducationInteractiveDemo />}
          {['corporate', 'portfolio', 'hotel'].includes(project.demoType) && (
            <GenericShowcaseDemo project={project} />
          )}
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p className="text-slate-400">
            Interested in a customized website like this for your business?
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                window.location.href = `/contact?service=${encodeURIComponent(project.category)}`;
              }}
            >
              Request Quotation for Similar App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. RESTAURANT INTERACTIVE PROTOTYPE
const RestaurantInteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [cart, setCart] = useState([]);
  const [reservationBooked, setReservationBooked] = useState(false);

  const menu = [
    { id: 1, name: "Truffle Tagliolini", category: "mains", price: 680, tag: "Chef's Special", desc: "Fresh handmade pasta with black summer truffle & aged Parmigiano Reggiano." },
    { id: 2, name: "Wild Mushroom Bruschetta", category: "starters", price: 340, tag: "Vegan", desc: "Charred sourdough, roasted king oyster mushrooms, thyme, balsamic reduction." },
    { id: 3, name: "Burrata Pugliese", category: "starters", price: 420, tag: "Gluten-Free", desc: "Heirloom tomatoes, cold-pressed olive oil, basil pesto drizzle." },
    { id: 4, name: "Pan-Seared Sea Bass", category: "mains", price: 890, tag: "Gluten-Free", desc: "Saffron potato purée, braised fennel, caper lemon emulsion." },
    { id: 5, name: "Espresso Tiramisu", category: "desserts", price: 320, tag: "Classic", desc: "Mascarpone cream, Savoiardi soaked in single-origin espresso & dark rum." }
  ];

  const filtered = activeTab === 'all' ? menu : menu.filter(m => m.category === activeTab);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="space-y-6">
      {/* Mini Brand Banner */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-amber-950/40 via-stone-900 to-slate-900 p-6 border border-amber-900/30">
        <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Savoria Artisanal Bistro</span>
        <h2 className="text-2xl font-bold mt-1 text-amber-100">Handcrafted Italian Kitchen & Direct Online Table Booking</h2>
        <p className="text-xs text-slate-300 mt-2 max-w-lg">Browse our seasonal lunch and dinner selections, order directly with zero delivery markups, or reserve a table instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Menu Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
            {['all', 'starters', 'mains', 'desserts'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-3 py-1.5 rounded-lg capitalize font-medium transition-colors ${
                  activeTab === tab ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map(item => (
              <div key={item.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-100 text-sm">{item.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">{item.tag}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                  <p className="text-sm font-bold text-amber-400 mt-2">₹{item.price}</p>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors shrink-0 cursor-pointer"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Order Tray & Instant Table Reservation */}
        <div className="space-y-4">
          {/* Order Tray */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-slate-200">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>Your Order Tray ({cart.length})</span>
              </h4>
              {cart.length > 0 && (
                <button onClick={() => setCart([])} className="text-[11px] text-red-400 hover:underline">Clear</button>
              )}
            </div>

            {cart.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">No dishes added yet. Click &ldquo;+ Add&rdquo; to simulate ordering.</p>
            ) : (
              <div className="space-y-2">
                {cart.map((dish, i) => (
                  <div key={i} className="flex justify-between text-xs py-1 border-b border-slate-800/60">
                    <span className="text-slate-300">{dish.name}</span>
                    <span className="font-mono text-amber-400">₹{dish.price}</span>
                  </div>
                ))}
                <div className="pt-2 flex justify-between font-bold text-sm">
                  <span>Subtotal:</span>
                  <span className="text-amber-400">₹{total}</span>
                </div>
                <button 
                  onClick={() => alert(`Simulated Order of ₹${total} placed! In production, this dispatches via WhatsApp API or payment gateway.`)}
                  className="w-full mt-2 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
                >
                  Confirm Direct Pickup Order
                </button>
              </div>
            )}
          </div>

          {/* Table Booking */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <h4 className="font-semibold text-sm flex items-center gap-2 text-slate-200 mb-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Reserve a Table</span>
            </h4>
            {reservationBooked ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
                <p className="text-xs text-emerald-300 font-semibold">Table Reserved for Tonight at 8:00 PM!</p>
                <button 
                  onClick={() => setReservationBooked(false)}
                  className="mt-2 text-[11px] text-slate-400 underline"
                >
                  Book another
                </button>
              </div>
            ) : (
              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[11px] text-slate-400">Guests</label>
                  <select className="w-full mt-1 bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs">
                    <option>2 Persons (Intimate)</option>
                    <option>4 Persons (Dinner Table)</option>
                    <option>6+ Persons (Party)</option>
                  </select>
                </div>
                <button
                  onClick={() => setReservationBooked(true)}
                  className="w-full py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs mt-2"
                >
                  Request Table Reservation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. E-COMMERCE INTERACTIVE PROTOTYPE
const EcommerceInteractiveDemo = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartCount, setCartCount] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono text-blue-400">AURA LUXE STUDIOS</span>
          <h3 className="text-lg font-bold">Fall / Winter Minimalist Capsule</h3>
        </div>
        <button 
          onClick={() => setCartOpen(!cartOpen)}
          className="relative p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 flex items-center gap-2 text-xs"
        >
          <ShoppingBag className="w-4 h-4 text-blue-400" />
          <span>Bag ({cartCount})</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Product Images */}
        <div className="space-y-3">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 relative group">
            <img 
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80" 
              alt="Heavyweight Structured Trench"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
              100% Organic Italian Wool
            </span>
          </div>
        </div>

        {/* Product Info & Actions */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="blue">New Arrival</Badge>
            <span className="text-xs text-slate-400">SKU: AL-TR-092</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Heavyweight Structured Wool Trench</h2>
          <p className="text-xl font-mono text-blue-400">₹8,499</p>

          <p className="text-xs text-slate-300 leading-relaxed">
            Architecturally cut from heavy double-faced Italian virgin wool. Features storm flap closure, horn buttons, deep welt pockets, and a relaxed dropped-shoulder silhouette.
          </p>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">Select Size</label>
            <div className="flex gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-lg font-mono text-xs font-semibold border transition-all ${
                    selectedSize === size 
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400 shadow-sm shadow-blue-500/30' 
                      : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setCartCount(prev => prev + 1);
                setCartOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              Add Size {selectedSize} to Bag
            </button>
            <p className="text-[11px] text-slate-400 text-center">✓ Free express shipping across India & 14-day hassle-free returns</p>
          </div>

          {/* Cart Drawer Simulation */}
          {cartOpen && (
            <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 space-y-3 animate-fadeIn">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-emerald-400">✓ Free Shipping Unlocked</span>
                <span className="text-slate-400">Subtotal: ₹{8499 * cartCount}</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full"></div>
              </div>
              <button 
                onClick={() => alert('Simulated Razorpay / Stripe checkout initiated! In production, this connects to your payment credentials.')}
                className="w-full py-2 bg-slate-100 hover:bg-white text-slate-950 font-bold text-xs rounded-lg transition-colors"
              >
                Simulate Secure Checkout (₹{8499 * cartCount})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. REAL ESTATE INTERACTIVE PROTOTYPE
const RealEstateInteractiveDemo = () => {
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [beds, setBeds] = useState('all');

  const properties = [
    { id: 1, title: "The Meridian Penthouse", price: 18500000, beds: 4, sqft: 3400, loc: "Worli Sea Face", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Skyline Terrace Villa", price: 12500000, beds: 3, sqft: 2200, loc: "Bandra West", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Emerald Green Garden Home", price: 8900000, beds: 2, sqft: 1450, loc: "Koregaon Park", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" }
  ];

  const filtered = properties.filter(p => p.price <= maxPrice && (beds === 'all' || p.beds === Number(beds)));

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Budget Filter: Under {formatINR(maxPrice)}</label>
          <input 
            type="range" 
            min="5000000" 
            max="25000000" 
            step="1000000" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-48 accent-blue-500" 
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xs text-slate-400">Bedrooms:</span>
          {['all', '2', '3', '4'].map(b => (
            <button
              key={b}
              onClick={() => setBeds(b)}
              className={`px-2.5 py-1 text-xs rounded border ${beds === b ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
            >
              {b === 'all' ? 'All' : `${b} BHK`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(prop => (
          <div key={prop.id} className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 group hover:border-blue-500/40 transition-all">
            <div className="aspect-video relative overflow-hidden">
              <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-xs font-mono font-bold text-blue-400">
                {formatINR(prop.price)}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h4 className="font-semibold text-sm text-slate-100">{prop.title}</h4>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> {prop.loc}
              </p>
              <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <span>{prop.beds} Beds</span>
                <span>{prop.sqft} sq.ft</span>
                <span className="text-emerald-400 font-medium">Ready to Move</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. HEALTHCARE INTERACTIVE PROTOTYPE
const HealthcareInteractiveDemo = () => {
  const [bookedSlot, setBookedSlot] = useState(null);

  const doctors = [
    { name: "Dr. Ananya Sen", specialty: "Cardiologist", exp: "14 yrs exp", slots: ["10:30 AM", "02:15 PM", "04:45 PM"] },
    { name: "Dr. Marcus Reed", specialty: "Orthopedic Surgeon", exp: "18 yrs exp", slots: ["11:00 AM", "03:30 PM"] }
  ];

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20">
        <h3 className="font-bold text-slate-100 text-sm">PulseCare Clinical Appointment Triage</h3>
        <p className="text-xs text-slate-400 mt-1">Select an attending physician and choose an open consultation time slot.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.map((doc, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div>
              <h4 className="font-bold text-sm text-slate-100">{doc.name}</h4>
              <p className="text-xs text-blue-400 font-medium">{doc.specialty} • {doc.exp}</p>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block mb-1.5">Available Slots Today:</span>
              <div className="flex flex-wrap gap-2">
                {doc.slots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setBookedSlot(`${doc.name} at ${slot}`)}
                    className="px-2.5 py-1 text-xs rounded bg-slate-950 border border-slate-700 hover:border-blue-400 text-slate-300 transition-colors"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {bookedSlot && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
          <div className="text-xs">
            <span className="text-emerald-400 font-bold block">Appointment Confirmed!</span>
            <span className="text-slate-300">Booked with {bookedSlot}</span>
          </div>
          <button onClick={() => setBookedSlot(null)} className="text-xs text-slate-400 hover:text-white">Dismiss</button>
        </div>
      )}
    </div>
  );
};

// 5. SAAS DASHBOARD INTERACTIVE PROTOTYPE
const SaaSInteractiveDemo = () => {
  const [range, setRange] = useState('30D');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono text-cyan-400">NOVAMETRIC REALTIME TELEMETRY</span>
          <h3 className="text-base font-bold text-slate-100">Executive Revenue Cockpit</h3>
        </div>
        <div className="flex gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
          {['7D', '30D', '90D'].map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-2.5 py-1 rounded ${range === r ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Annual Recurring Revenue", val: "$1,482,900", change: "+18.4%", positive: true },
          { label: "Active Subscriptions", val: "1,248", change: "+9.2%", positive: true },
          { label: "Net Revenue Retention", val: "118%", change: "+3.1%", positive: true },
          { label: "Customer Churn Risk", val: "0.8%", change: "-0.4%", positive: true }
        ].map((metric, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] text-slate-400 block">{metric.label}</span>
            <span className="text-lg font-mono font-bold text-slate-100 block mt-1">{metric.val}</span>
            <span className="text-[10px] text-emerald-400 font-semibold">{metric.change} vs prev {range}</span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Simulated Traffic Ingestion Pipeline</h4>
        <div className="h-24 bg-slate-950 rounded-lg flex items-end gap-2 p-3 border border-slate-800/80">
          {[40, 55, 30, 80, 65, 90, 75, 100, 85, 95, 110, 125].map((h, i) => (
            <div 
              key={i} 
              style={{ height: `${(h / 130) * 100}%` }}
              className="flex-1 bg-gradient-to-t from-cyan-600 to-blue-500 rounded-t hover:opacity-80 transition-all cursor-pointer"
              title={`Metric bucket ${i + 1}: ${h * 12} events`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. EDUCATION INTERACTIVE PROTOTYPE
const EducationInteractiveDemo = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const curriculum = [
    { week: 1, title: "Modern JavaScript & React 19 Architecture", topics: ["Async/await & Event loop", "React Server Components", "Custom Hook Patterns"] },
    { week: 2, title: "PostgreSQL & Supabase Row-Level Security", topics: ["Relational Database Design", "RLS Policies & Grants", "Realtime WebSockets"] },
    { week: 3, title: "Production Cloud Deployment & CI/CD", topics: ["Netlify & Edge Functions", "Lighthouse 100/100 Auditing", "Custom Domain SSL & DNS"] }
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
        <h3 className="font-bold text-purple-200 text-sm">SkillForge Interactive Curriculum Roadmap</h3>
        <p className="text-xs text-slate-400 mt-1">Explore week-by-week live lessons and downloadable assignments.</p>
      </div>

      <div className="space-y-2">
        {curriculum.map(item => (
          <div 
            key={item.week}
            onClick={() => setActiveWeek(item.week)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeWeek === item.week 
                ? 'bg-purple-950/30 border-purple-500/50 shadow-md' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono text-purple-400 font-bold">MODULE 0{item.week}</span>
              <span className="text-slate-400">{activeWeek === item.week ? 'Expanded' : 'Click to view'}</span>
            </div>
            <h4 className="font-semibold text-slate-100 text-sm mt-1">{item.title}</h4>
            {activeWeek === item.week && (
              <div className="mt-3 pt-3 border-t border-purple-900/40 space-y-1.5 animate-fadeIn">
                {item.topics.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-purple-400" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 7. GENERIC / SHOWCASE INTERACTIVE PROTOTYPE
const GenericShowcaseDemo = ({ project }) => (
  <div className="space-y-6">
    <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 relative">
      <img src={project.desktopImage} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
        <Badge variant="blue">{project.category}</Badge>
        <h2 className="text-xl font-bold text-white mt-2">{project.title}</h2>
        <p className="text-xs text-slate-300 max-w-xl mt-1">{project.shortDescription}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
        <h4 className="font-bold text-sm text-slate-100 mb-2">Key Demonstrated Features</h4>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {project.features?.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <h4 className="font-bold text-sm text-slate-100">Live Architecture Telemetry</h4>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Performance</span>
            <span className="text-sm font-mono font-bold text-emerald-400">{project.metrics?.lighthouseSpeed || '99/100'}</span>
          </div>
          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Load Time</span>
            <span className="text-sm font-mono font-bold text-blue-400">{project.metrics?.avgLoadTime || '0.6s'}</span>
          </div>
          <div className="p-2 rounded bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Responsive</span>
            <span className="text-sm font-mono font-bold text-purple-400">100%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
