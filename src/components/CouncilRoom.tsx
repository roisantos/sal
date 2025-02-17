import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const paintings = [
  {
    id: 4,
    name: "Portrait of a Noble Lady.",
    period: "16th Century",
    artist: "Unknown Tudor Artist",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A Tudor period portrait showcasing the fashion and status symbols of the era."
  },
  {
    id: 5,
    name: "The Scholar's Study",
    period: "17th Century",
    artist: "Dutch School",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A detailed interior scene depicting a scholar among books and antiquities."
  },
  {
    id: 6,
    name: "Landscape with Ruins",
    period: "18th Century",
    artist: "English School",
    image: "https://images.unsplash.com/photo-1578321272276-e578f28d2d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A romantic view of classical ruins in an idealized landscape."
  }
];

const CouncilRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-stone-800 mb-8">Council Room Gallery</h1>
        <p className="text-xl text-stone-600 mb-12 max-w-3xl">
          Step into our historic Council Room, where centuries of artistic mastery line the walls. 
          Each painting offers a window into the past, bringing history to life through the artist's brush.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <motion.div
              key={painting.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => navigate(`/item/${painting.id}`)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={painting.image} 
                  alt={painting.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">{painting.name}</h3>
                <p className="text-stone-500 mb-2">{painting.period}</p>
                <p className="text-stone-600 mb-2">Artist: {painting.artist}</p>
                <p className="text-stone-600">{painting.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CouncilRoom;