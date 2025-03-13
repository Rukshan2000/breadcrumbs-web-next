import { motion } from 'framer-motion';

export function TestimonialsTab({ caseStudy }) {
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
        <span className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-pink-500 bg-opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
            />
          </svg>
        </span>
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudy.testimonials && caseStudy.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-4 bg-gradient-to-br from-gray-700/10 to-gray-700/5 rounded-xl border border-gray-700 border-opacity-5"
          >
            <p className="text-lg text-gray-300">{testimonial.quote}</p>
            <div className="mt-4">
              <span className="font-semibold text-pink-400">{testimonial.author}</span>
              <span className="text-gray-400">, {testimonial.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
