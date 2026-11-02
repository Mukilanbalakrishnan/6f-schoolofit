import type { StudentProject } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'thadam-aws-2tier-app',
    title: 'AWS 2-Tier High-Availability Cloud Application (Day 27 Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'Scalable multi-AZ architecture with EC2 compute instances behind an Application Load Balancer and an isolated Amazon RDS MySQL/PostgreSQL relational database backend with automated backups.',
    technologies: ['AWS EC2', 'Application Load Balancer', 'Auto Scaling', 'Amazon RDS', 'Amazon VPC', 'Route 53'],
    architectureSummary:
      'Public-facing Application Load Balancer dynamically routes incoming web traffic across redundant EC2 instances in private subnets, connected to a Multi-AZ Amazon RDS PostgreSQL instance with automated snapshot retention.',
    keyOutcomes: [
      'High-availability deployment across dual availability zones with zero single points of failure',
      'Automated health-checked failover with seamless traffic re-routing',
      'Database subnet isolation eliminating public internet exposure',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-aws-2tier-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-aws-3tier-app',
    title: 'AWS 3-Tier Enterprise Production Infrastructure (Day 28 Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'Production-grade 3-Tier enterprise cloud architecture featuring Bastion host jump-box access, public ALB, auto-scaling EC2 web tier, private EC2 application tier, and multi-AZ KMS-encrypted RDS.',
    technologies: ['AWS VPC', 'Amazon EC2', 'ALB', 'Bastion Host', 'Amazon RDS', 'AWS KMS', 'VPC Flow Logs'],
    architectureSummary:
      'VPC topology segmented into 6 subnets across 2 AZs (public web, private app, isolated database). Flow Logs capture traffic metrics while KMS customer managed keys ensure encryption at rest.',
    keyOutcomes: [
      'Zero-trust network architecture with hardened Security Group and NACL boundaries',
      'Bastion jump-box access with IAM session manager and SSH key rotation',
      'Demonstrated automated Multi-AZ RDS failover with sub-minute recovery time',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-aws-3tier-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-static-cicd-pipeline',
    title: 'Static Web App CI/CD & Global CDN Delivery Pipeline (Day 64 Industry Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'End-to-end automated continuous deployment pipeline: GitHub → GitHub Actions → S3 → CDN (CloudFront) → IAM → CloudWatch → SNS. Deploys optimized web assets to S3, invalidates edge caches, and monitors performance.',
    technologies: ['GitHub Actions', 'Amazon S3', 'Amazon CloudFront', 'AWS IAM', 'CloudWatch', 'Amazon SNS'],
    architectureSummary:
      'Code commits trigger GitHub Actions automated test suites and push production assets to an S3 origin bucket. CloudFront invalidation caches content globally while CloudWatch monitors 4xx/5xx metrics with SNS alerts.',
    keyOutcomes: [
      'Sub-60 second automated continuous deployment on git push to main',
      'Global edge caching achieving sub-30ms TTFB across worldwide points of presence',
      'Automated SNS incident alerts notifying Slack and DevOps engineers on elevated error rates',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-static-cicd-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-ecs-microservices-pipeline',
    title: 'Containerized Microservices CI/CD to AWS ECS (Day 65 Industry Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'Enterprise container delivery pipeline: GitHub → GitHub Actions → ECR → ECS → IAM → CloudWatch → SNS. Builds optimized Docker images, pushes to Amazon ECR, and executes zero-downtime rolling updates on Amazon ECS.',
    technologies: ['Docker', 'GitHub Actions', 'Amazon ECR', 'Amazon ECS', 'AWS Fargate', 'AWS IAM', 'CloudWatch'],
    architectureSummary:
      'GitHub Actions builds optimized multi-stage Docker images, conducts vulnerability scanning, pushes to Amazon ECR, and triggers zero-downtime rolling updates across Amazon ECS Fargate tasks.',
    keyOutcomes: [
      'Zero-downtime rolling deployments with automated rollbacks on failed health checks',
      'Multi-stage Docker builds reducing image footprint by 85%',
      'Least-privilege IAM execution roles and task definition secrets injection',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-ecs-pipeline-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-terraform-iac-pipeline',
    title: 'Terraform Multi-Environment Infrastructure Pipeline (Day 66 Industry Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'Production Infrastructure as Code pipeline using Terraform Cloud & Terragrunt with remote S3 state storage, DynamoDB distributed locking, and automated PR plan/apply.',
    technologies: ['Terraform', 'Terragrunt', 'Terraform Cloud', 'Amazon S3', 'Amazon DynamoDB', 'Checkov', 'GitHub Actions'],
    architectureSummary:
      'Modular HCL manifests structured through Terragrunt for Dev, Staging, and Production. Pull requests trigger Checkov security audits and terraform plan PR comments, with manual approvals required for apply.',
    keyOutcomes: [
      '100% reproducible multi-account AWS infrastructure provisioned in under 8 minutes',
      'Zero state drift using S3 remote backend and DynamoDB distributed state concurrency locking',
      'Checkov automated compliance scan blocking open ingress rules and unencrypted disks',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-terraform-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-eks-microservices-deployment',
    title: 'Microservices Deployment using AWS EKS with Argo CD GitOps (Day 67 Industry Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'Production Kubernetes microservices mesh deployed on AWS EKS with Helm packaging, Argo CD continuous delivery synchronization, Ingress-NGINX routing, and Prometheus/Grafana observability.',
    technologies: ['AWS EKS', 'Kubernetes', 'Helm', 'Argo CD', 'Prometheus', 'Grafana', 'Ingress-NGINX', 'K8s RBAC'],
    architectureSummary:
      'AWS EKS cluster with managed worker node groups. Applications are packaged into versioned Helm charts and managed declaratively via Argo CD GitOps repository syncing with Prometheus alert metrics.',
    keyOutcomes: [
      'Declarative GitOps deployments eliminating manual kubectl apply commands',
      'Zero-trust pod network isolation with Kubernetes NetworkPolicies and RBAC service accounts',
      'Full cluster observability dashboards with Prometheus metrics and Grafana visual alerts',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-eks-gitops-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-ai-assisted-devops-suite',
    title: 'AI-Assisted DevOps & Autonomous Operations Suite (Days 68–73 Project)',
    category: 'AI-Powered AWS DevOps',
    description:
      'Cutting-edge AI operational toolchain featuring AI-powered pipeline troubleshooting, AI-generated Terraform HCL, AI log anomaly analysis, AI Kubernetes triage, and AI ChatOps cost optimization.',
    technologies: ['Amazon Bedrock', 'Claude 3.5 Sonnet', 'Amazon Q Developer', 'LangGraph', 'ChromaDB', 'Python', 'AI ChatOps'],
    architectureSummary:
      'AI agents integrated into CI/CD pipelines and Slack/Teams. When builds fail or Kubernetes alerts trigger, the AI agent ingests logs, queries runbook RAG embeddings in ChromaDB, and recommends root-cause fixes.',
    keyOutcomes: [
      '70% reduction in Mean Time to Resolution (MTTR) for CI/CD pipeline failures',
      'AI ChatOps assistant identifying unused AWS resources and reducing cloud costs by 24%',
      'Autonomous Kubernetes pod diagnostic assistant generating kubectl remediation steps in under 10 seconds',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-aiops-suite-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-2tier-app',
    title: 'Azure 2-Tier High-Availability Cloud Application (Day 27 Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'Scalable multi-zone architecture with Azure Virtual Machine Scale Sets (VMSS) behind an Azure Load Balancer and an isolated Azure SQL Database backend with Key Vault encryption.',
    technologies: ['Azure VMs', 'Azure Load Balancer', 'VM Scale Sets', 'Azure SQL', 'Azure VNet', 'Azure DNS'],
    architectureSummary:
      'Azure Load Balancer dynamically distributes inbound traffic across redundant VMSS instances across multiple availability zones, interfacing with a geo-redundant Azure SQL database secured via Private Endpoints.',
    keyOutcomes: [
      'High-availability deployment across dual availability zones with automated health probes',
      'Elastic VM Scale Set auto-scaling triggered by dynamic CPU utilization thresholds',
      'Database subnet isolation eliminating public internet accessibility',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-2tier-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-3tier-app',
    title: 'Azure 3-Tier Enterprise Production Infrastructure (Day 28 Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'Production-grade 3-Tier enterprise cloud architecture featuring Azure Bastion jump-box access, Application Gateway with WAF, private VMSS application tier, and multi-region geo-replicated Azure SQL with NSG Flow Logs.',
    technologies: ['Azure VNet', 'Azure Bastion', 'App Gateway WAF', 'VM Scale Sets', 'Azure SQL', 'Azure Key Vault', 'NSG Flow Logs'],
    architectureSummary:
      'VNet segmented into public, application, and database subnets with NAT Gateway egress. Application Gateway WAF inspects HTTP/HTTPS traffic while Azure Key Vault protects customer managed keys (CMK).',
    keyOutcomes: [
      'Zero-trust network architecture with hardened Network Security Groups (NSGs) and Azure Bastion jump-box',
      'Application Gateway WAF protecting against OWASP Top 10 vulnerabilities with SSL termination',
      'Demonstrated automated Azure SQL failover with sub-minute Recovery Point Objective (RPO)',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-3tier-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-static-cicd',
    title: 'Static Web App CI/CD Pipeline on Azure (Day 64 Industry Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'End-to-end automated continuous deployment pipeline: Azure Repos · Azure Pipelines · Blob · CDN · Entra ID · Azure Monitor · Alerts. Deploys optimized web assets to Azure Blob Storage, invalidates edge caches, and monitors performance.',
    technologies: ['Azure Repos', 'Azure Pipelines', 'Azure Blob Storage', 'Azure CDN', 'Microsoft Entra ID', 'Azure Monitor'],
    architectureSummary:
      'Code commits trigger Azure Pipelines multi-stage YAML builds, publishing assets to Azure Blob Storage origin containers. Azure CDN distributes content globally while Azure Monitor evaluates metrics and dispatches alerts.',
    keyOutcomes: [
      'Sub-60 second automated continuous deployment on git commit merge to production branch',
      'Global edge caching achieving sub-30ms TTFB across Microsoft global points of presence',
      'Automated Azure Monitor metric alerts notifying Teams/Slack on elevated HTTP 5xx rates',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-static-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-aks-cicd',
    title: 'Containerized Microservices CI/CD to Azure AKS (Day 65 Industry Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'Enterprise container delivery pipeline: Azure Repos · Azure Pipelines · ACR · AKS · Entra ID · Azure Monitor · Alerts. Builds optimized Docker images, pushes to Azure Container Registry (ACR), and executes zero-downtime rolling updates on Azure Kubernetes Service (AKS).',
    technologies: ['Docker', 'Azure Pipelines', 'Azure ACR', 'Azure AKS', 'Microsoft Entra ID', 'Azure Monitor', 'Container Insights'],
    architectureSummary:
      'Azure Pipelines builds optimized multi-stage Docker images, conducts vulnerability scanning, pushes to Azure Container Registry (ACR), and triggers zero-downtime rolling updates across AKS worker nodes.',
    keyOutcomes: [
      'Zero-downtime rolling deployments with automated rollbacks on failed health checks',
      'Multi-stage Docker builds reducing image footprint by 85%',
      'Microsoft Entra Workload Identity integration eliminating static credentials in cluster pods',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-aks-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-terraform-pipeline',
    title: 'Terraform Multi-Environment Infrastructure Pipeline for Azure (Day 66 Industry Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'Production Infrastructure as Code pipeline using Terraform Cloud & Terragrunt with remote Azure Blob Storage state backend, distributed state lease locking, and automated PR plan/apply.',
    technologies: ['Terraform', 'Terragrunt', 'Terraform Cloud', 'Azure Blob Storage', 'Checkov', 'Azure Pipelines'],
    architectureSummary:
      'Modular HCL manifests structured through Terragrunt for Dev, Staging, and Production subscriptions. Pull requests trigger Checkov security audits and terraform plan PR comments, with manual approvals required for apply.',
    keyOutcomes: [
      '100% reproducible multi-subscription Azure infrastructure provisioned in under 8 minutes',
      'Zero state drift using Azure Blob remote backend with distributed state lease concurrency locking',
      'Checkov automated compliance scan blocking open NSG inbound rules and unencrypted disks',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-terraform-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-aks-deployment',
    title: 'Microservices Deployment using Azure AKS with Argo CD GitOps (Day 67 Industry Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'Production Kubernetes microservices mesh deployed on Azure AKS with Helm packaging, Argo CD continuous delivery synchronization, Application Gateway Ingress Controller (AGIC), and Prometheus/Grafana observability.',
    technologies: ['Azure AKS', 'Kubernetes', 'Helm', 'Argo CD', 'Prometheus', 'Grafana', 'App Gateway (AGIC)', 'Azure CNI'],
    architectureSummary:
      'Azure AKS cluster with system and user node pools and Azure CNI networking. Applications are packaged into versioned Helm charts and managed declaratively via Argo CD GitOps repository syncing with Prometheus alert metrics.',
    keyOutcomes: [
      'Declarative GitOps deployments eliminating manual kubectl apply commands',
      'Zero-trust pod network isolation with Azure CNI NetworkPolicies and Entra ID service accounts',
      'Full cluster observability dashboards with Prometheus metrics and Grafana visual alerts',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-gitops-sample',
    isPlaceholder: true,
  },
  {
    id: 'thadam-azure-aiops-suite',
    title: 'AI-Assisted DevOps & Azure AI Operations Suite (Days 68–73 Project)',
    category: 'AI-Powered Azure DevOps',
    description:
      'Cutting-edge AI operational toolchain featuring automated Azure Pipelines & Jenkins error troubleshooting, AI-generated Terraform for Azure, AI log anomaly analysis with Azure Monitor, and AI ChatOps cost optimization.',
    technologies: ['Azure AI Foundry', 'Claude 3.5 Sonnet', 'GitHub Copilot', 'LangGraph', 'ChromaDB', 'Python', 'AI ChatOps'],
    architectureSummary:
      'AI agents integrated into Azure Pipelines and Microsoft Teams. When builds fail or AKS alerts fire, the AI agent ingests logs, queries runbook RAG embeddings in ChromaDB, and recommends root-cause fixes.',
    keyOutcomes: [
      '70% reduction in Mean Time to Resolution (MTTR) for Azure CI/CD pipeline failures',
      'Teams AI ChatOps assistant querying Azure Advisor recommendations and reducing cloud spend by 26%',
      'Autonomous Kubernetes pod diagnostic assistant generating kubectl remediation steps in under 10 seconds',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/example/thadam-azure-aiops-sample',
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
];
