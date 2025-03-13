import { motion } from 'framer-motion';

export function ChallengesTab({ caseStudy }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="backdrop-blur-md bg-gray-900 bg-opacity-80 rounded-2xl p-8 border border-gray-700 shadow-xl"
    >
      <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
        <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-orange-600 bg-opacity-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </span>
        Challenges We Overcame
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudy.challenges.map((challenge, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
            <h3 className="text-lg font-medium mb-2 text-white">Challenge {index + 1}</h3>
            <p className="text-gray-400">{challenge}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
