import { motion } from 'framer-motion';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function OverviewTab({ caseStudy, isChartVisible, patientMonitoringData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 mb-8 border border-gray-700 border-opacity-10 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">About This Solution</h2>
          <p className="text-gray-300 mb-4">
            {caseStudy.longDescription || caseStudy.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Key Results</h2>
          <div className="grid grid-cols-2 gap-4">
            {caseStudy.results && caseStudy.results.map((result, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gradient-to-br from-gray-700/10 to-gray-700/5 rounded-xl border border-gray-700 border-opacity-5"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">
                  {result.value}
                </div>
                <div className="text-sm text-gray-400">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isChartVisible ? 1 : 0, scale: isChartVisible ? 1 : 0.95 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="backdrop-blur-md bg-gray-800 bg-opacity-5 rounded-2xl p-8 border border-gray-700 border-opacity-10 shadow-xl"
      >
        <h2 className="text-2xl font-semibold mb-6">Response Time Improvement</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={patientMonitoringData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
              <Area 
                type="monotone" 
                dataKey="previous" 
                name="Before Implementation (min)" 
                stroke="#FF8042" 
                fill="#FF8042" 
                fillOpacity={0.3} 
              />
              <Area 
                type="monotone" 
                dataKey="current" 
                name="After Implementation (min)" 
                stroke="#0088FE" 
                fill="#0088FE" 
                fillOpacity={0.3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </motion.div>
  );
}