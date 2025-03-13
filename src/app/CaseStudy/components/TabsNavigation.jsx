import { motion } from 'framer-motion';

export function TabsNavigation({ activeTab, setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-12"
    >
      <div className="flex flex-wrap gap-2 md:gap-4">
        {['overview', 'features', 'challenges', 'solutions', 'technologies', 'results', 'testimonials'].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white' 
                : 'bg-gray bg-opacity-10 text-gray-white hover:bg-opacity-20'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}