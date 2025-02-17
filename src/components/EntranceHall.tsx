import React from 'react';
import { motion } from 'framer-motion';

const EntranceHall = () => {
  return (
    <div className="relative">
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl font-bold mb-6">Antiquities in a New Light</h1>
            <p className="text-xl leading-relaxed">
              Welcome to a space where the Society of Antiquaries' rare collections meet cutting-edge technology. 
              In this immersive gallery, centuries-old objects speak to us with renewed clarity, thanks to 3D 
              reconstructions and AI-animated scenes.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-stone-800">Interactive Experience</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Explore multi-sensory touchscreens, watch AI-generated demonstrations, or listen to vivid 
              audio stories that reveal hidden details beneath each artifact's surface. By blending digital 
              invention with scholarship, we aim to spark curiosity in visitors of every age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-semibold text-stone-800">Your Journey Begins Here</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Each exhibit has been created to inform, inspire, and invite fresh perspectives on our shared 
              heritage. As you move through these displays, pause to ponder the human stories within each piece. 
              Your exploration helps keep these histories alive.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EntranceHall;