import { motion } from 'framer-motion';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function SolutionsTab({ caseStudy, isChartVisible, readmissionData }) {
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
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <motion.div
        variants={itemVariants}
        className="col-span-1 lg:col-span-2 backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-green-500 bg-opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Our Solutions
        </h2>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
        >
          {caseStudy.solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-gray-700/10 to-gray-700/5 rounded-xl border border-gray-700 border-opacity-5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
              <p className="text-gray-300">{solution}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6">Solution Impact</h2>
        <div className="h-60">
          {isChartVisible && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={readmissionData}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Legend />
                <Bar dataKey="before" name="Before Solution (%)" fill="#FF8042" />
                <Bar dataKey="after" name="After Solution (%)" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
        <p className="text-sm text-gray-300 mt-4">
          Readmission rates across departments have significantly decreased after implementing our IoT solution.
        </p>
      </motion.div>
    </motion.div>
  );
}