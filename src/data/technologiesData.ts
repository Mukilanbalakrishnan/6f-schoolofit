import type { TechnologyItem } from '../types';

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    category: 'Cloud',
    description:
      'The world’s most comprehensive and broadly adopted cloud platform, providing scalable compute, storage, databases, and networking.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aws-devops'],
    iconKey: 'Cloud',
    highlights: ['VPC & Subnets', 'EC2 & Auto Scaling', 'S3 & IAM', 'EKS & Serverless Lambda'],
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'Cloud',
    description:
      'Enterprise cloud platform offering comprehensive computing, Azure Kubernetes Service (AKS), Virtual Networks, and integrated DevOps services.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-azure-devops'],
    iconKey: 'Cloud',
    highlights: ['Azure VNet', 'AKS Clusters', 'Virtual Machine Scale Sets', 'Microsoft Entra ID'],
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps & Pipelines',
    category: 'Automation',
    description:
      'Complete enterprise DevOps toolchain encompassing multi-stage YAML Azure Pipelines, Azure Repos, and automated release gates.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-azure-devops'],
    iconKey: 'GitMerge',
    highlights: ['Multi-Stage YAML', 'Staging Approval Gates', 'Azure Artifacts', 'Automated Release Rollbacks'],
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q Developer',
    category: 'Artificial Intelligence',
    description:
      'Generative AI assistant specifically optimized for AWS cloud architecture, code development, automated security audits, and troubleshooting.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aws-devops'],
    iconKey: 'Bot',
    highlights: ['IaC Generation', 'Vulnerability Audits', 'CLI & Console Integration', 'Automated Unit Tests'],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'Artificial Intelligence',
    description:
      'AI pair programmer that accelerates pipeline creation, script authoring, test development, and infrastructure configuration in IDEs.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-azure-devops'],
    iconKey: 'Bot',
    highlights: ['Pipeline YAML Synthesis', 'Automated Test Writing', 'Shell Script Generation', 'Context-Aware Prompts'],
  },
  {
    id: 'opentelemetry',
    name: 'OpenTelemetry (OTel)',
    category: 'Monitoring',
    description:
      'Vendor-agnostic telemetry framework for capturing distributed traces, metrics, and logs across cloud-native architectures.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aiops'],
    iconKey: 'Activity',
    highlights: ['Unified Telemetry', 'OTel Collector', 'Auto-Instrumentation', 'Distributed Tracing'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    description:
      'Standardized container runtime that packages applications and dependencies into immutable containers for predictable execution.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aws-devops', 'ai-powered-azure-devops', 'ai-powered-aiops'],
    iconKey: 'Box',
    highlights: ['Multi-Stage Builds', 'Layer Caching', 'Docker Compose', 'Container Networking'],
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes (EKS & AKS)',
    category: 'Deployment',
    description:
      'Production-grade container orchestration system automating deployment, scaling, self-healing, and management of containerized applications.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aws-devops', 'ai-powered-azure-devops', 'ai-powered-aiops'],
    iconKey: 'Layers',
    highlights: ['Pods & Deployments', 'Services & Ingress', 'Helm Packaging', 'HPA Autoscaling'],
  },
  {
    id: 'terraform',
    name: 'Terraform',
    category: 'Automation',
    description:
      'Declarative Infrastructure as Code (IaC) tool enabling safe, predictable cloud resource provisioning across multiple providers.',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aws-devops', 'ai-powered-azure-devops'],
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
    relatedCourseSlugs: ['ai-powered-aws-devops', 'ai-powered-azure-devops', 'ai-powered-aiops'],
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
    relatedCourseSlugs: ['ai-powered-aws-devops', 'ai-powered-azure-devops'],
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
    relatedCourseSlugs: ['ai-powered-aws-devops', 'ai-powered-aiops'],
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
    relatedCourseSlugs: ['ai-powered-aiops'],
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
    relatedCourseSlugs: ['ai-powered-aiops'],
    iconKey: 'Bot',
    highlights: ['Stateful Graphs', 'Human-in-the-Loop', 'Tool Calling Loops', 'Checkpoints & Memory'],
  },
  {
    id: 'chromadb',
    name: 'Vector Databases (ChromaDB / Pinecone)',
    category: 'Databases',
    description:
      'Specialized vector databases engineered to store, index, and query high-dimensional embeddings for Retrieval-Augmented Generation (RAG).',
    proficiencyLevel: 'Core Curriculum',
    relatedCourseSlugs: ['ai-powered-aiops'],
    iconKey: 'Database',
    highlights: ['Cosine Similarity', 'Embedding Indexing', 'Metadata Filtering', 'Hybrid Search'],
  },
];
