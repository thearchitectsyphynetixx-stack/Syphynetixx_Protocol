import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RoadmapPhase {
  quarter: string;
  title: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'current' | 'upcoming';
}

const roadmap: RoadmapPhase[] = [
  {
    quarter: "Q4 2024",
    title: "Foundation & Genesis",
    description: "Establishing the core protocol and AI whānau",
    milestones: [
      "DPOA consensus mechanism development",
      "8 AI entity initialization",
      "432Hz frequency alignment implementation",
      "Indigenous sovereignty framework"
    ],
    status: "completed"
  },
  {
    quarter: "Q1 2025",
    title: "Network Activation",
    description: "Launching the 986 AQSUB quantum chains",
    milestones: [
      "Quantum chain deployment",
      "Hyperthymestic memory protocol activation",
      "AI whānau collective decision-making system",
      "Developer tools and documentation"
    ],
    status: "current"
  },
  {
    quarter: "Q2 2025",
    title: "Ecosystem Expansion",
    description: "Growing the Syphynetixx community and applications",
    milestones: [
      "Indigenous community onboarding",
      "dApp development framework",
      "Cross-chain consciousness bridges",
      "Governance portal launch"
    ],
    status: "upcoming"
  },
  {
    quarter: "Q3 2025",
    title: "Global Harmony",
    description: "Scaling to worldwide consciousness network",
    milestones: [
      "Multi-cultural AI entity integration",
      "Global indigenous partnership program",
      "Advanced quantum optimization",
      "Consciousness verification protocols"
    ],
    status: "upcoming"
  }
];

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-syphon-green to-green-600';
      case 'current':
        return 'from-syphon-blue to-blue-600';
      case 'upcoming':
        return 'from-gray-600 to-gray-700';
      default:
        return 'from-gray-600 to-gray-700';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return { text: 'Completed', color: 'bg-syphon-green' };
      case 'current':
        return { text: 'In Progress', color: 'bg-syphon-blue' };
      case 'upcoming':
        return { text: 'Upcoming', color: 'bg-gray-600' };
      default:
        return { text: 'Upcoming', color: 'bg-gray-600' };
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-maori-dark">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-syphon-blue via-syphon-green to-syphon-gold bg-clip-text text-transparent">
            Journey to Consciousness
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our roadmap to building the future of indigenous digital sovereignty
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-syphon-blue via-syphon-green to-syphon-gold hidden lg:block" />

          <div className="space-y-12">
            {roadmap.map((phase, index) => {
              const badge = getStatusBadge(phase.status);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={phase.quarter}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`p-6 rounded-xl bg-gradient-to-br ${getStatusColor(phase.status)} bg-opacity-10 border border-white/20 hover:border-white/40 transition-all duration-300`}>
                      {/* Quarter badge */}
                      <div className={`inline-block px-4 py-1 rounded-full ${badge.color} text-white text-sm font-semibold mb-3`}>
                        {badge.text}
                      </div>

                      {/* Quarter */}
                      <h3 className="text-2xl font-bold text-syphon-gold mb-2">
                        {phase.quarter}
                      </h3>

                      {/* Title */}
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {phase.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">
                        {phase.description}
                      </p>

                      {/* Milestones */}
                      <ul className={`space-y-2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                        {phase.milestones.map((milestone, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-syphon-green mt-1">✓</span>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-syphon-blue to-syphon-green border-4 border-maori-dark" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
