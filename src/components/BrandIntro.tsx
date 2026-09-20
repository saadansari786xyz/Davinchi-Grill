import React from 'react';
import { Flame, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { APP_IMAGES } from '../data/images';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface BrandIntroProps {
  onDiscoverStory: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onDiscoverStory }) => {
  return (
    <section
      id="brand-intro"
      className="py-24 sm:py-32 bg-[#0c0c0b] relative overflow-hidden border-b border-[#1f1f1d]"
      aria-label="Brand Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Imagery with Layered Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Ambience Image */}
              <div className="relative rounded-sm overflow-hidden border border-[#2a2924] shadow-2xl aspect-[4/3] group">
                <img
                  src={APP_IMAGES.diningAmbience}
                  alt="DaVinci Grill Warm Ambience and Dining Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ivory/80 font-sans">
                  <span>Intimate Dining Room</span>
                  <span className="text-champagne">Latifabad Unit 3</span>
                </div>
              </div>

              {/* Offset Accent Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#181815] border border-champagne/40 p-5 rounded-sm shadow-2xl max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#0c0c0b] border border-champagne/50 flex items-center justify-center">
                    <Flame className="w-4 h-4 text-champagne" />
                  </div>
                  <div>
                    <p className="font-display text-xs tracking-wider text-ivory uppercase">Char-Grilled</p>
                    <p className="text-[10px] text-ivory-muted">To Exact Doneness</p>
                  </div>
                </div>
                <p className="font-serif italic text-xs text-champagne-light">
                  "Every plate is shaped by bold flavors and the art of flame."
                </p>
              </div>

              {/* Decorative Subtle Corner Border */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-champagne/40 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-champagne mb-4">
              <span className="w-8 h-[1px] bg-champagne" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
                Culinary Philosophy
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.14em] font-medium text-ivory leading-tight mb-6">
              WHERE FIRE BECOMES FLAVOR
            </h2>

            <div className="space-y-4 font-sans text-ivory/80 text-base sm:text-lg leading-relaxed font-light">
              <p>
                At DaVinci Grill, every plate is shaped by bold flavors, refined technique and the art of flame. From grilled specialties to indulgent pastas, seafood, handcrafted beverages and signature creations, every dish is designed to make dining memorable.
              </p>
              <p className="text-sm sm:text-base text-ivory-muted">
                Located on Main Autobhan in Latifabad, Hyderabad, DaVinci Grill brings together premium cuts seared to precision, rich continental favorites, and an atmospheric dining space welcoming families, friends, and steak connoisseurs alike.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 pt-6 border-t border-[#1f1f1d]">
              <div className="flex items-start gap-3">
                <span className="text-champagne font-serif text-lg">01.</span>
                <div>
                  <h4 className="font-serif text-base text-ivory tracking-wide">Flame Artistry</h4>
                  <p className="text-xs text-ivory-muted mt-0.5 leading-normal">
                    Precision high-heat searing locking in succulent juices and rich caramelized crusts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-champagne font-serif text-lg">02.</span>
                <div>
                  <h4 className="font-serif text-base text-ivory tracking-wide">Gourmet Breadth</h4>
                  <p className="text-xs text-ivory-muted mt-0.5 leading-normal">
                    From 9 steak styles and sizzling fajitas to authentic Italian pastas and mocktails.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onDiscoverStory}
                id="brand-discover-story-btn"
                type="button"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-medium text-champagne hover:text-champagne-light group transition-colors focus:outline-none focus-visible:underline cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
