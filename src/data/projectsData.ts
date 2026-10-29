import type { StudentProject } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'gitops-microservices-k8s',
    title: 'Automated GitOps Microservices Deployment on AWS EKS',
    category: 'DevOps & GitOps',
    description:
      'A multi-tier microservices architecture with automated CI/CD using GitHub Actions, Helm packaging, and declarative rollout to a managed Kubernetes cluster on AWS.',
    technologies: ['Kubernetes', 'Docker', 'AWS EKS', 'GitHub Actions', 'Helm', 'Prometheus', 'Grafana'],
    architectureSummary:
      'Git push triggers multi-stage container build and vulnerability scanning, publishing to Amazon ECR. Kubernetes manifests are managed via Helm charts with automated rollout and Prometheus telemetry.',
    keyOutcomes: [
      'Zero-downtime rolling updates verified under load',
      'Immutable container images tagged by git commit SHA',
      'Prometheus custom metrics visualized on live Grafana dashboards',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/devops-gitops-sample',
    isPlaceholder: true,
  },
  {
    id: 'aws-resilient-multi-tier',
    title: 'High-Availability Multi-Tier E-Commerce Infrastructure',
    category: 'Cloud Infrastructure',
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
  {
    id: 'agentic-ai-researcher',
    title: 'Autonomous Code-Review & Technical Research Multi-Agent System',
    category: 'Agentic AI',
    description:
      'A collaborative multi-agent architecture utilizing LangGraph and CrewAI to inspect source code repositories, cross-reference internal architectural standards using RAG, and produce detailed code audit reports.',
    technologies: ['Python', 'LangGraph', 'CrewAI', 'ChromaDB', 'FastAPI', 'OpenAI API', 'Docker'],
    architectureSummary:
      'A supervisor agent delegates parsing, vulnerability analysis, and documentation cross-referencing to specialized worker agents with memory checkpoints and vector search over security guidelines.',
    keyOutcomes: [
      'Autonomous detection of OWASP Top 10 vulnerabilities in sample pull requests',
      'Deterministic output format using Pydantic JSON schema constraints',
      'Streaming server-sent events interface for real-time thought trace display',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/agentic-researcher-sample',
    isPlaceholder: true,
  },
  {
    id: 'cloud-observability-pipeline',
    title: 'Automated Cloud Telemetry & Distributed Tracing Stack',
    category: 'DevOps & GitOps',
    description:
      'A production monitoring and distributed tracing topology for microservices, featuring Prometheus metrics collection, Grafana dashboards, Loki log aggregation, and OpenTelemetry instrumentation.',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'OpenTelemetry', 'Docker', 'AWS EC2', 'Linux'],
    architectureSummary:
      'Containerized services instrumented with OpenTelemetry send metrics and traces to a centralized collector pipeline, triggering alertmanager webhooks on SLA violations.',
    keyOutcomes: [
      'Sub-second query latencies across aggregated service log streams',
      'Custom alertmanager routing policies configured for severity tiers',
      'Interactive Grafana visual dashboards displaying p95 and p99 response times',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/cloud-telemetry-sample',
    isPlaceholder: true,
  },
];
