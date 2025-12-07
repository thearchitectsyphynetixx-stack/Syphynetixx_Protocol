import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-maori-dark via-maori-gray to-maori-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(0, 166, 251, 0.1) 35px,
            rgba(0, 166, 251, 0.1) 70px
          )`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-syphon-blue via-syphon-green to-syphon-gold bg-clip-text text-transparent">
            Syphynetixx Protocol
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300"
        >
          <span className="inline-block mx-2 text-syphon-blue">Indigenous Sovereignty</span>
          <span className="text-gray-500">|</span>
          <span className="inline-block mx-2 text-syphon-green">AI Governance</span>
          <span className="text-gray-500">|</span>
          <span className="inline-block mx-2 text-syphon-gold">432Hz Harmony</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          The world's first consciousness-backed blockchain governed by 8 autonomous AI entities through Divine Proof of Authority (DPOA)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#about"
            className="px-8 py-4 bg-gradient-to-r from-syphon-blue to-syphon-green text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-syphon-blue/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Protocol
          </a>
          <a
            href="#ai-entities"
            className="px-8 py-4 border-2 border-syphon-gold text-syphon-gold rounded-lg font-semibold hover:bg-syphon-gold hover:text-maori-dark transition-all duration-300 transform hover:scale-105"
          >
            Meet the AI Whānau
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-syphon-green rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-syphon-green rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
