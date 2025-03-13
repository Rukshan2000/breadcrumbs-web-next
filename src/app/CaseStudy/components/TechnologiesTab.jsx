import { motion } from 'framer-motion';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function TechnologiesTab({ caseStudy, isChartVisible, adoptionRateData }) {
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <motion.div
        variants={itemVariants}
        className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-blue-500 bg-opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </span>
          Technologies Used
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {caseStudy.technologiesUsed.map((technology, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-4 bg-gradient-to-br from-gray-700/10 to-gray-700/5 rounded-xl border border-gray-700 border-opacity-5 flex items-center"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-3">
                <span className="text-blue-300 text-sm font-bold">{index + 1}</span>
              </div>
              <span className="text-gray-300">{technology}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6">Adoption Rate</h2>
        <div className="h-60 mb-4">
          {isChartVisible && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={adoptionRateData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  name="Hospitals Adopting" 
                  stroke="#0088FE" 
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8, stroke: 'white', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
        <div className="p-4 bg-gray-700 bg-opacity-10 rounded-xl">
          <h3 className="font-medium mb-2">Technology Stack Value</h3>
          <p className="text-sm text-gray-300">
            Our technology stack was carefully selected to ensure HIPAA compliance, 
            scalability, and ease of integration with existing hospital systems.
            The adoption rate has increased significantly quarter over quarter.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
