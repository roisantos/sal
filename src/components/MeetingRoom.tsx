import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const antiquities = [
  {
    id: 1,
    name: "Medieval Cross",
    period: "12th Century",
    image: "https://images.unsplash.com/photo-1590013330451-3946e83e0392?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A beautifully preserved medieval cross with intricate carvings."
  },
  {
    id: 2,
    name: "Roman Amphora",
    period: "2nd Century AD",
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A classic Roman amphora used for storing wine and olive oil."
  },
  {
    id: 3,
    name: "Celtic Torc",
    period: "3rd Century BC",
    image: "https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A golden torc worn by Celtic nobility."
  }
];

const MeetingRoom = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-stone-800 mb-8">Meeting Room Collection</h1>
        <p className="text-xl text-stone-600 mb-12 max-w-3xl">
          Discover our carefully curated collection of antiquities, each piece telling its own unique story 
          of our shared past. Click on any item to explore its history in detail.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {antiquities.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => navigate(`/item/${item.id}`)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
                <p className="text-stone-500 mb-2">{item.period}</p>
                <p className="text-stone-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MeetingRoom;