import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This is a placeholder for the video component
  // You'll need to replace this with your actual video content
  const VideoPlaceholder = () => (
    <div className="w-full aspect-video bg-stone-200 rounded-lg flex items-center justify-center">
      <p className="text-stone-600">Video content will be added here</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Gallery</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <VideoPlaceholder />
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="aspect-square bg-stone-200 rounded-lg" />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-stone-800">Item Details</h1>
            <p className="text-stone-600">
              This section will be populated with detailed information about the selected item, 
              including its history, significance, and interesting facts. The content will be 
              customized based on the specific item selected.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-stone-800">Interactive Features</h2>
              <p className="text-stone-600">
                This space will include interactive elements such as:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2">
                <li>3D model viewer</li>
                <li>Historical context timeline</li>
                <li>Related artifacts and connections</li>
                <li>Expert commentary and analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ItemDetail;