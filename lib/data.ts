export type CategoryId = 'materialism' | 'nonreductive' | 'quantum' | 'iit' | 'panpsychism' | 'monism' | 'dualism' | 'idealism' | 'anomalous' | 'challenge';

export interface Theory {
  name: string;
  proponents: string;
  claim: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  color: string;
  description: string;
  count: string;
  theories: Theory[];
}

export const categories: Category[] = [
  {
    id: 'materialism',
    name: 'Materialism Theories',
    color: '#3b82f6',
    count: '30+ theories',
    description: 'Consciousness emerges from or is reducible to physical processes in the brain',
    theories: [
      { name: 'Eliminativism', proponents: 'Dennett, Frankish', claim: 'Consciousness is an illusion; phenomenal experience doesn\'t exist' },
      { name: 'Functionalism', proponents: 'Putnam, Block', claim: 'Mental states are functional states defined by causal roles' },
      { name: 'Global Workspace', proponents: 'Baars, Dehaene', claim: 'Consciousness = globally broadcast information in the brain' },
      { name: 'Neural Correlates', proponents: 'Crick, Koch', claim: 'Specific neural patterns are necessary and sufficient for consciousness' },
      { name: 'Predictive Processing', proponents: 'Clark, Friston', claim: 'Brain constantly predicts sensory input; consciousness is prediction error' },
      { name: 'Embodied Cognition', proponents: 'Varela, Thompson', claim: 'Consciousness requires body-environment coupling, not just brain' },
      { name: 'Higher-Order Theories', proponents: 'Rosenthal, Lau', claim: 'Consciousness = mental states that represent other mental states' },
      { name: 'Attention Schema', proponents: 'Graziano', claim: 'Consciousness is brain\'s internal model of its own attention' }
    ]
  },
  {
    id: 'nonreductive',
    name: 'Non-Reductive Physicalism',
    color: '#8b5cf6',
    count: '2 theories',
    description: 'Consciousness is physical but cannot be reduced to lower-level physics',
    theories: [
      { name: 'Strong Emergence', proponents: 'Ellis', claim: 'Top-down causation is real; higher levels constrain lower levels' },
      { name: 'Property Emergence', proponents: 'Murphy', claim: 'New causal properties genuinely arise at higher organizational levels' }
    ]
  },
  {
    id: 'quantum',
    name: 'Quantum Theories',
    color: '#06b6d4',
    count: '3 theories',
    description: 'Quantum mechanics is essential for understanding consciousness',
    theories: [
      { name: 'Orch OR', proponents: 'Penrose, Hameroff', claim: 'Quantum collapse in microtubules creates consciousness moments' },
      { name: 'Quantum Mind', proponents: 'Stapp', claim: 'Observer collapses wave function; consciousness is quantum measurement' },
      { name: 'Implicate Order', proponents: 'Bohm', claim: 'Consciousness accesses implicate order underlying explicate reality' }
    ]
  },
  {
    id: 'iit',
    name: 'Integrated Information Theory (IIT)',
    color: '#10b981',
    count: '1 theory',
    description: 'Consciousness equals integrated information (phi)',
    theories: [
      { name: 'IIT 4.0', proponents: 'Tononi, Koch', claim: 'Consciousness is intrinsic causal power; measured by phi' }
    ]
  },
  {
    id: 'panpsychism',
    name: 'Panpsychism',
    color: '#f59e0b',
    count: '3 theories',
    description: 'Consciousness or proto-consciousness is fundamental to all matter',
    theories: [
      { name: 'Micropsychism', proponents: 'Chalmers, Goff', claim: 'Fundamental particles have proto-phenomenal properties' },
      { name: 'Cosmopsychism', proponents: 'Strawson', claim: 'Universe as a whole has one consciousness; we are parts' },
      { name: 'Panprotopsychism', proponents: 'Various', claim: 'Matter has proto-phenomenal properties that combine into consciousness' }
    ]
  },
  {
    id: 'monism',
    name: 'Monisms',
    color: '#ec4899',
    count: '3 theories',
    description: 'Mental and physical are two aspects of one underlying substance',
    theories: [
      { name: 'Russellian Monism', proponents: 'Russell', claim: 'One neutral substance with mental and physical aspects' },
      { name: 'Dual-Aspect Monism', proponents: 'Atmanspacher', claim: 'Mind-matter complementarity like wave-particle duality' },
      { name: 'Reflexive Monism', proponents: 'Velmans', claim: 'Consciousness and matter mutually define each other' }
    ]
  },
  {
    id: 'dualism',
    name: 'Dualism',
    color: '#ef4444',
    count: '3 theories',
    description: 'Mind and matter are fundamentally distinct substances or properties',
    theories: [
      { name: 'Substance Dualism', proponents: 'Swinburne, Descartes', claim: 'Soul is non-physical substance that interacts with body' },
      { name: 'Property Dualism', proponents: 'Chalmers', claim: 'Mental properties are non-physical but depend on physical' },
      { name: 'Interactive Dualism', proponents: 'Popper, Eccles', claim: 'Non-physical mind causally influences physical brain' }
    ]
  },
  {
    id: 'idealism',
    name: 'Idealism',
    color: '#a855f7',
    count: '3 theories',
    description: 'Consciousness is fundamental; matter is derived from or within consciousness',
    theories: [
      { name: 'Analytic Idealism', proponents: 'Kastrup', claim: 'Reality is mental; physical world is dissociated consciousness' },
      { name: 'Conscious Realism', proponents: 'Hoffman', claim: 'Spacetime is user interface; consciousness agents are fundamental' },
      { name: 'Cosmic Consciousness', proponents: 'Vedanta, Buddhism', claim: 'Universal awareness is primary; individual minds are manifestations' }
    ]
  },
  {
    id: 'anomalous',
    name: 'Anomalous & Altered States',
    color: '#14b8a6',
    count: '3 theories',
    description: 'Consciousness extends beyond ordinary brain-based states',
    theories: [
      { name: 'Psi Phenomena', proponents: 'Radin, Tart', claim: 'Mind can extend beyond brain (telepathy, precognition)' },
      { name: 'Near-Death Experiences', proponents: 'Van Lommel', claim: 'Consciousness can persist when brain is non-functional' },
      { name: 'Psychedelic States', proponents: 'Carhart-Harris', claim: 'Psychedelics reveal fundamental consciousness structures' }
    ]
  },
  {
    id: 'challenge',
    name: 'Challenge Theories',
    color: '#64748b',
    count: '2 theories',
    description: 'Question whether we can solve the consciousness problem',
    theories: [
      { name: 'Mysterianism', proponents: 'McGinn', claim: 'Humans are cognitively closed to understanding consciousness' },
      { name: 'Hard Problem', proponents: 'Chalmers', claim: 'Explaining experience is fundamentally harder than explaining function' }
    ]
  }
];
