import type { StudentProject } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'ai-powered-aws-gitops',
    title: 'AI-Accelerated GitOps CI/CD Microservices Pipeline on AWS EKS',
    category: 'AI-Powered AWS DevOps',
    description:
      'A multi-tier microservices architecture with automated CI/CD using GitHub Actions, Amazon Q Developer code security analysis, Helm packaging, and declarative rollout to AWS EKS.',
    technologies: ['AWS EKS', 'Amazon Q Developer', 'Terraform', 'Docker', 'GitHub Actions', 'Helm', 'CloudWatch'],
    architectureSummary:
      'GitHub push triggers multi-stage container build and automated Amazon Q vulnerability audits, publishing to Amazon ECR. Kubernetes manifests are managed via Helm charts with automated rollback and CloudWatch anomaly telemetry.',
    keyOutcomes: [
      'Zero-downtime rolling updates verified under simulated production load',
      'Immutable container images tagged by git commit SHA with automated CVE scanning',
      'AI-assisted security reviews preventing unencrypted storage and open security groups',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/ai-aws-gitops-sample',
    isPlaceholder: true,
  },
  {
    id: 'ai-powered-azure-pipeline',
    title: 'Enterprise AI-Assisted Azure DevOps & AKS Microservices Infrastructure',
    category: 'AI-Powered Azure DevOps',
    description:
      'An enterprise Azure DevOps platform featuring multi-stage YAML pipelines, GitHub Copilot test automation, Terraform & Azure Bicep IaC, and managed Azure Kubernetes Service deployment.',
    technologies: ['Microsoft Azure', 'Azure DevOps', 'Azure Pipelines', 'AKS', 'GitHub Copilot', 'Terraform', 'Azure Bicep'],
    architectureSummary:
      'Enterprise Virtual Network with private subnets, Azure Bastion, and Azure Application Gateway with WAF. Azure Pipelines automates testing, container image building to ACR, and AKS deployment with automated release gates.',
    keyOutcomes: [
      'Multi-stage Azure Pipelines YAML with mandatory staging approval gates',
      'Zero-trust secrets injection using Azure Key Vault and Secrets Store CSI driver',
      'Copilot-generated automated integration test suites achieving 92% coverage',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/ai-azure-devops-sample',
    isPlaceholder: true,
  },
  {
    id: 'aiops-self-healing-engine',
    title: 'Autonomous AIOps Telemetry Anomaly Detection & Self-Healing Engine',
    category: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    description:
      'An intelligent observability and automated incident remediation system utilizing OpenTelemetry, Prometheus metrics, machine-learning anomaly detection, and LangGraph root-cause analysis bots.',
    technologies: ['AIOps', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Python', 'LangGraph', 'Kubernetes'],
    architectureSummary:
      'Distributed microservices instrumented with OpenTelemetry forward metrics and traces to Prometheus. Machine learning models score real-time anomalies, triggering an autonomous LangGraph agent that conducts root-cause analysis and executes Kubernetes pod rollbacks.',
    keyOutcomes: [
      '80% reduction in noisy duplicate alerts through topological alert correlation',
      'Autonomous generation of structured incident post-mortems within 15 seconds of alert firing',
      'Verified automated self-healing remediation tested against simulated memory leak failures',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/aiops-telemetry-sample',
    isPlaceholder: true,
  },
  {
    id: 'aws-resilient-multi-tier',
    title: 'Enterprise High-Availability Multi-Tier AWS Infrastructure',
    category: 'AI-Powered AWS DevOps',
    description:
      'Production-grade cloud topology designed according to the AWS Well-Architected Framework, featuring auto-scaling compute groups across multiple availability zones and managed database failover.',
    technologies: ['AWS VPC', 'Amazon EC2', 'Application Load Balancer', 'Amazon RDS', 'Amazon S3', 'CloudWatch'],
    architectureSummary:
      'Isolated VPC with dual-tier public and private subnets, dual NAT gateways for egress, ALB path-based routing, EC2 Auto Scaling, and multi-AZ RDS PostgreSQL with automated snapshot retention.',
    keyOutcomes: [
      'Simulated availability zone failure without service degradation',
      'CloudWatch alarms linked to automated email alerts for high CPU utilization',
      'Secure IAM roles eliminating hardcoded access credentials',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/aws-multi-tier-sample',
    isPlaceholder: true,
  },
];
