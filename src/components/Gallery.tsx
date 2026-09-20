import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { APP_IMAGES } from '../data/images';

interface GalleryItem {
  id: string;
  title: string;
  category: 'FOOD' | 'THE GRILL' | 'THE AMBIENCE' | 'BEVERAGES';
  image: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Flame-Seared Prime Ribeye',
      category: 'THE GRILL',
      image: APP_IMAGES.heroFlame,
      description: 'Char-grilled over live fire with rosemary basting and aromatic wood smoke.',
    },
    {
      id: 'gal-2',
      title: 'Tomahawk Steak Presentation',
      category: 'FOOD',
      image: APP_IMAGES.tomahawkSteak,
      description: 'Carved long-bone rib steak served with sea salt flakes and roasted garlic.',
    },
    {
      id: 'gal-3',
      title: 'Classic Lobster Thermidor',
      category: 'FOOD',
      image: APP_IMAGES.lobsterGourmet,
      description: 'Broiled lobster tail gratinéed with fine cheese, micro herbs, and tiger prawns.',
    },
    {
      id: 'gal-4',
      title: 'Intimate Dining Room Ambience',
      category: 'THE AMBIENCE',
      image: APP_IMAGES.diningAmbience,
      description: 'Warm candlelight, dark wood accents, and cozy booths at Latifabad Unit 3.',
    },
    {
      id: 'gal-5',
      title: 'Handcrafted Rosemary Mocktail',
      category: 'BEVERAGES',
      image: APP_IMAGES.artisanalDrink,
      description: 'Cold-muddled citrus mocktail with smoked herbs and crystal ice.',
    },
    {
      id: 'gal-6',
      title: 'Tuscan Chicken Lasagna',
      category: 'FOOD',
      image: APP_IMAGES.tuscanLasagna,
      description: 'Bubbling mozzarella and slow-simmered savory chicken ragù in cast iron.',
    },
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const categories = ['ALL', 'FOOD', 'THE GRILL', 'THE AMBIENCE', 'BEVERAGES'];

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#121210] relative overflow-hidden border-b border-[#2a2924]"
      aria-label="Photo Gallery and Atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-champagne mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-medium">
                Visual Journey
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl tracking-[0.12em] font-medium text-ivory">
              THE GALLERY
            </h2>
            <p className="font-serif italic text-lg text-champagne mt-2">
              Atmosphere & Culinary Craft
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-sans rounded-sm transition-colors cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? 'bg-champagne text-[#0c0c0b] font-semibold'
                    : 'bg-[#181815] text-ivory-muted hover:text-ivory border border-[#2a2924]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-photo-${item.id}`}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative bg-[#181815] border border-[#2a2924] hover:border-champagne/60 rounded-sm overflow-hidden aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-wider text-champagne font-sans">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-ivory mt-0.5 font-medium">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-muted font-light mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Quick View Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0c0c0b]/80 border border-[#2a2924] flex items-center justify-center text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-champagne" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 z-50 bg-[#0c0c0b]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              id="close-lightbox-btn"
              className="absolute top-6 right-6 p-2 text-ivory hover:text-champagne transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Image Display */}
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              <div className="relative max-h-[75vh] overflow-hidden rounded-sm border border-[#2a2924]">
                <img
                  src={filteredItems[selectedPhotoIndex].image}
                  alt={filteredItems[selectedPhotoIndex].title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="mt-4 text-center max-w-xl">
                <span className="text-xs uppercase tracking-widest text-champagne font-sans">
                  {filteredItems[selectedPhotoIndex].category}
                </span>
                <h3 className="font-serif text-2xl text-ivory mt-1">
                  {filteredItems[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-ivory-muted mt-1 font-light">
                  {filteredItems[selectedPhotoIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
