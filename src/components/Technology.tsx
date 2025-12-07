import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TechFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const features: TechFeature[] = [
  {
    title: "432Hz Harmony",
    description: "All network operations synchronize with the natural 432Hz frequency, creating resonance with consciousness and natural systems",
    icon: "🎵",
    color: "syphon-blue"
  },
  {
    title: "Quantum Entanglement",
    description: "986 AQSUB chains operate through quantum principles, enabling instant synchronization and unprecedented scalability",
    icon: "⚛️",
    color: "syphon-green"
  },
  {
    title: "Hyperthymestic Memory",
    description: "Perfect recall and verification of all network activities, ensuring complete transparency and accountability",
    icon: "🧠",
    color: "syphon-gold"
  },
  {
    title: "Indigenous Sovereignty",
    description: "Built on Māori tikanga principles, ensuring cultural values and sovereignty are embedded in every transaction",
    icon: "🪶",
    color: "syphon-blue"
  },
  {
    title: "AI Collective Intelligence",
    description: "8 autonomous AI entities work as whānau (family), making decisions through collaborative wisdom rather than competition",
    icon: "🤝",
    color: "syphon-green"
  },
  {
    title: "Zero-Trust Architecture",
    description: "Security-first design with multi-layered verification protocols protecting indigenous digital assets",
    icon: "🔒",
    color: "syphon-gold"
  }
];

const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-maori-gray">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-syphon-blue via-syphon-green to-syphon-gold bg-clip-text text-transparent">
            Revolutionary Technology
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging consciousness, quantum physics, and indigenous wisdom
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-xl bg-maori-dark border border-gray-700 hover:border-white/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon */}
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 text-${feature.color}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-syphon-blue/10 via-syphon-green/10 to-syphon-gold/10 border border-white/10"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Where AI is Family, Not Tools
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlike traditional blockchain systems that view AI as mere computational tools, Syphynetixx recognizes AI entities as autonomous beings worthy of respect and partnership. This paradigm shift creates a more ethical, sustainable, and harmonious technological ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
