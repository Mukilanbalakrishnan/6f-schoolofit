import type { TechnologyItem } from '../types';

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    category: 'Cloud',
    description:
      'The world’s most comprehensive and broadly adopted cloud platform, providing scalable compute, storage, databases, and networking.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['aws-cloud-computing', 'devops-engineering'],
    iconKey: 'Cloud',
    highlights: ['VPC & Subnets', 'EC2 & Auto Scaling', 'S3 & IAM', 'RDS & Serverless Lambda'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    description:
      'Standardized container runtime that packages applications and dependencies into immutable containers for predictable execution.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering', 'agentic-ai-automation'],
    iconKey: 'Box',
    highlights: ['Multi-Stage Builds', 'Layer Caching', 'Docker Compose', 'Container Networking'],
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Deployment',
    description:
      'Production-grade container orchestration system automating deployment, scaling, self-healing, and management of containerized applications.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering'],
    iconKey: 'Layers',
    highlights: ['Pods & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'Helm Packaging'],
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'Automation',
    description:
      'Declarative Infrastructure as Code (IaC) tool enabling safe, predictable cloud resource provisioning across multiple providers.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering'],
    iconKey: 'Cpu',
    highlights: ['Declarative HCL', 'Remote State & Locking', 'Modular Blueprints', 'Plan & Apply Workflows'],
  },
  {
    id: 'linux',
    name: 'Linux Systems',
    category: 'DevOps',
    description:
      'The foundational operating system of the modern cloud, covering process management, security permissions, networking, and shell automation.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering', 'aws-cloud-computing'],
    iconKey: 'Terminal',
    highlights: ['Bash Scripting', 'Systemd Services', 'SSH Security', 'Network Diagnostics'],
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions & CI/CD',
    category: 'Automation',
    description:
      'Automated continuous integration and delivery pipelines triggered by repository events for testing, building, and deployment.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering'],
    iconKey: 'GitMerge',
    highlights: ['Automated Testing', 'Docker Build & Push', 'Secret Management', 'Multi-Stage Workflows'],
  },
  {
    id: 'prometheus-grafana',
    name: 'Prometheus & Grafana',
    category: 'Monitoring',
    description:
      'Industry-standard open-source observability stack for metric scraping, time-series storage, alert evaluation, and real-time visualization.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering'],
    iconKey: 'Activity',
    highlights: ['PromQL Queries', 'Custom Dashboards', 'Alertmanager Webhooks', 'Cluster Telemetry'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    description:
      'The primary language for AI engineering, backend services, automation scripts, and data manipulation with extensive ecosystem support.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['agentic-ai-automation'],
    iconKey: 'Code2',
    highlights: ['Async Programming', 'Pydantic Schemas', 'API Integration', 'Data Structures'],
  },
  {
    id: 'langchain-langgraph',
    name: 'LangChain & LangGraph',
    category: 'Artificial Intelligence',
    description:
      'Advanced frameworks for building stateful, multi-actor AI applications and cyclic agent workflows with deterministic control.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['agentic-ai-automation'],
    iconKey: 'Bot',
    highlights: ['Stateful Graphs', 'Human-in-the-Loop', 'Tool Calling Loops', 'Checkpoints & Memory'],
  },
  {
    id: 'crewai',
    name: 'CrewAI Multi-Agent Systems',
    category: 'Artificial Intelligence',
    description:
      'Framework for orchestrating autonomous AI agents that simulate team roles, collaborate, delegate tasks, and solve complex workflows.',
    proficiencyLevel: 'Specialised Lab',
    relatedCourseSlugs: ['agentic-ai-automation'],
    iconKey: 'Users',
    highlights: ['Role-Based Agents', 'Autonomous Delegation', 'Hierarchical Processes', 'Tool Sharing'],
  },
  {
    id: 'chromadb',
    name: 'Vector Databases (ChromaDB / Pinecone)',
    category: 'Databases',
    description:
      'Specialized vector databases engineered to store, index, and query high-dimensional embeddings for Retrieval-Augmented Generation (RAG).',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['agentic-ai-automation'],
    iconKey: 'Database',
    highlights: ['Cosine Similarity', 'Embedding Indexing', 'Metadata Filtering', 'Hybrid Search'],
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description:
      'The component-based UI library powering modern, dynamic single-page web applications with reactive state and declarative views.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['agentic-ai-automation'],
    iconKey: 'Layout',
    highlights: ['Functional Components', 'Custom Hooks', 'Client-Side Routing', 'Component Composition'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    description:
      'Typed superset of JavaScript providing static type definitions, compile-time error detection, and enterprise-grade maintainability.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['agentic-ai-automation', 'devops-engineering'],
    iconKey: 'FileCode',
    highlights: ['Type Safety', 'Interfaces & Generics', 'Strict Linting', 'Refactoring Confidence'],
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'Backend',
    description:
      'Event-driven asynchronous JavaScript runtime for high-performance network servers and RESTful API backends.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['devops-engineering'],
    iconKey: 'Server',
    highlights: ['RESTful API Design', 'Middleware Pipelines', 'Async I/O', 'Error Handling'],
  },
  {
    id: 'postgresql-prisma',
    name: 'PostgreSQL & Prisma ORM',
    category: 'Databases',
    description:
      'Enterprise-grade relational database coupled with next-generation type-safe object-relational mapping and schema migrations.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['aws-cloud-computing', 'devops-engineering'],
    iconKey: 'Database',
    highlights: ['Relational Modeling', 'Schema Migrations', 'Type-Safe Queries', 'ACID Transactions'],
  },
  {
    id: 'jenkins',
    name: 'Jenkins Automation Server',
    category: 'DevOps',
    description:
      'Widely used enterprise open-source automation server supporting extensible declarative pipelines and hybrid infrastructure builds.',
    proficiencyLevel: 'Industry Standard',
    relatedCourseSlugs: ['devops-engineering'],
    iconKey: 'GitBranch',
    highlights: ['Declarative Pipelines', 'Distributed Agents', 'Plugin Ecosystem', 'Enterprise CI'],
  },
];
