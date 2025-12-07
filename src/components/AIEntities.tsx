import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface AIEntity {
  name: string;
  role: string;
  description: string;
  color: string;
  symbol: string;
}

const entities: AIEntity[] = [
  {
    name: "Tāne Mahuta",
    role: "Guardian of Knowledge",
    description: "Oversees wisdom distribution and learning protocols across the network",
    color: "from-syphon-blue to-blue-600",
    symbol: "🌳"
  },
  {
    name: "Tangaroa",
    role: "Flow Orchestrator",
    description: "Manages transaction flows and network liquidity with ocean-like precision",
    color: "from-syphon-green to-green-600",
    symbol: "🌊"
  },
  {
    name: "Tāwhirimātea",
    role: "Communication Master",
    description: "Ensures clear and harmonious communication across all 986 AQSUB chains",
    color: "from-syphon-gold to-yellow-600",
    symbol: "💨"
  },
  {
    name: "Papatūānuku",
    role: "Foundation Keeper",
    description: "Maintains the foundational integrity and stability of the protocol",
    color: "from-green-500 to-emerald-700",
    symbol: "🌍"
  },
  {
    name: "Ranginui",
    role: "Vision Architect",
    description: "Oversees the strategic direction and future evolution of the network",
    color: "from-blue-400 to-indigo-600",
    symbol: "☁️"
  },
  {
    name: "Haumia-tiketike",
    role: "Resource Allocator",
    description: "Manages computational resources and energy distribution efficiently",
    color: "from-amber-500 to-orange-600",
    symbol: "🌾"
  },
  {
    name: "Rongo",
    role: "Peace Mediator",
    description: "Resolves conflicts and maintains harmony within the AI whānau collective",
    color: "from-teal-400 to-cyan-600",
    symbol: "🕊️"
  },
  {
    name: "Tūmatauenga",
    role: "Security Sentinel",
    description: "Protects the network from threats while upholding indigenous sovereignty",
    color: "from-red-500 to-rose-700",
    symbol: "🛡️"
  }
];

const AIEntities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="ai-entities" className="py-20 px-4 sm:px-6 lg:px-8 bg-maori-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-syphon-blue via-syphon-green to-syphon-gold bg-clip-text text-transparent">
            The AI Whānau
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Eight autonomous AI entities working as family to govern the Syphynetixx Protocol
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {entities.map((entity, index) => (
            <motion.div
              key={entity.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className={`
                relative h-full p-6 rounded-xl border-2 transition-all duration-500
                ${hoveredIndex === index 
                  ? 'border-white shadow-2xl shadow-white/20 transform scale-105' 
                  : 'border-gray-700 hover:border-gray-500'
                }
                bg-gradient-to-br ${entity.color} bg-opacity-10
              `}>
                {/* Entity symbol */}
                <div className="text-6xl mb-4 text-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {entity.symbol}
                </div>

                {/* Entity name */}
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {entity.name}
                </h3>

                {/* Entity role */}
                <p className="text-sm font-semibold text-syphon-gold mb-3 text-center">
                  {entity.role}
                </p>

                {/* Description - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={hoveredIndex === index 
                    ? { opacity: 1, height: 'auto' } 
                    : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-gray-300 text-center leading-relaxed">
                    {entity.description}
                  </p>
                </motion.div>

                {/* Hover glow effect */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Each AI entity brings unique capabilities and perspectives, working together in harmony 
            to ensure the Syphynetixx Protocol operates with wisdom, balance, and respect for indigenous sovereignty.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIEntities;
