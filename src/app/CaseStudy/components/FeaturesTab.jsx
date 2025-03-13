import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function FeaturesTab({ caseStudy, isChartVisible, patientSatisfactionData }) {
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
          <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-red-500 bg-opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          Key Features
        </h2>
        <motion.ul
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {caseStudy.features.map((feature, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <span className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6">Feature Highlights</h2>
        
        <div className="relative h-80 mb-4">
          {isChartVisible && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={patientSatisfactionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {patientSatisfactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
        
        <div className="p-4 bg-gray-700 bg-opacity-10 rounded-xl">
          <h3 className="font-medium mb-2">Patient Satisfaction</h3>
          <p className="text-sm text-gray-300">
            Our healthcare IoT solution has achieved a 95% satisfaction rate among patients,
            with the majority reporting improved peace of mind and better health outcomes.
            The real-time monitoring capabilities have been particularly well-received.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}