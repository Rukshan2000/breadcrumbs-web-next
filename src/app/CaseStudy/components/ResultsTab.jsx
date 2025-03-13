import { motion } from 'framer-motion';

export function ResultsTab({ caseStudy }) {
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
      className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
    >
      <h2 className="text-2xl font-semibold mb-8 flex items-center">
        <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-purple-500 bg-opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </span>
        Results & Impact
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudy.results && caseStudy.results.map((result, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-br from-gray-700/10 to-gray-700/5 rounded-xl border border-gray-700 border-opacity-5"
          >
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              {result.value}
            </div>
            <div className="text-sm text-gray-400">{result.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}