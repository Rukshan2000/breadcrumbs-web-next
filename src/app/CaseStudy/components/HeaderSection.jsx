import { motion } from 'framer-motion';

export function HeaderSection({ caseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <div className="inline-block px-4 py-1 bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full text-red-300 text-sm mb-4">
        Case Study #{caseStudy.caseStudyId}
      </div>
      <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-500">
        {caseStudy.title}
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
        {caseStudy.longDescription || caseStudy.description}
      </p>
    </motion.div>
  );
}