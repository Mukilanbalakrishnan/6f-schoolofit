import type { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'ai-powered-aws-devops',
    slug: 'ai-powered-aws-devops',
    title: 'AI-Powered AWS DevOps',
    category: 'AWS DevOps',
    headline: 'Architect Resilient AWS Cloud Infrastructure, GitOps CI/CD Pipelines & AI-Accelerated Cloud Automation',
    summary:
      'A comprehensive, practical engineering program mastering AWS cloud architecture, automated GitOps CI/CD pipelines, Terraform IaC, and AI-accelerated dev tools like Amazon Q Developer.',
    description:
      'Master the intersection of enterprise cloud computing, modern DevOps practices, and generative AI engineering. Learn to design high-availability AWS VPC topologies, orchestrate production Kubernetes workloads on AWS EKS, automate declarative CI/CD pipelines using GitHub Actions, provision immutable infrastructure with Terraform, and accelerate code reviews and security audits with AI developer tools.',
    level: 'Beginner to Intermediate',
    deliveryMode: 'Practical Guided Lab',
    prerequisites: [
      'Basic familiarity with operating systems, networking, and command-line concepts',
      'No prior AWS or AI experience required; foundational modules start from scratch',
    ],
    whoShouldEnrol: [
      'Aspiring Cloud Engineers and DevOps Professionals seeking hands-on AWS mastery',
      'System Administrators and IT Engineers transitioning to modern cloud-native architectures',
      'Software Developers looking to automate end-to-end cloud deployments with AI tools',
      'Engineering teams aiming to integrate AI assistants into enterprise DevOps pipelines',
    ],
    technologies: [
      'AWS',
      'Amazon Q Developer',
      'Amazon EC2',
      'Amazon VPC',
      'Amazon EKS',
      'AWS Lambda',
      'Amazon RDS',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'CloudWatch',
      'AWS IAM',
    ],
    learningOutcomes: [
      'Design fault-tolerant, scalable architectures on AWS following the Well-Architected Framework',
      'Provision and configure isolated Virtual Private Clouds (VPC) with public/private subnets and route tables',
      'Deploy and scale containerized applications on managed Kubernetes using AWS EKS',
      'Write modular Infrastructure as Code (IaC) using Terraform with AI-assisted prompt generation',
      'Construct automated multi-stage CI/CD pipelines using GitHub Actions and Amazon ECR',
      'Implement least-privilege identity access management using AWS IAM roles, policies, and MFA',
      'Monitor application health and configure automated alarms with Amazon CloudWatch and AI anomaly detection',
      'Leverage Amazon Q Developer for automated code reviews, vulnerability remediations, and cloud configuration',
    ],
    practicalExercises: [
      'Configuring an AWS account with hardened IAM root controls and role-based policies',
      'Building a custom VPC with dual-tier public/private subnets, Internet Gateway, and NAT Gateway',
      'Launching an Auto Scaling Group behind an Application Load Balancer with automated health checks',
      'Provisioning a managed Amazon EKS Kubernetes cluster using Terraform IaC',
      'Building a multi-stage GitHub Actions CI/CD workflow pushing Docker images to Amazon ECR',
      'Authoring event-driven serverless microservices with AWS Lambda and Amazon API Gateway',
      'Setting up CloudWatch metrics dashboards with automated anomaly alarms',
      'Using Amazon Q Developer to audit Terraform security groups and generate automated pull-request tests',
    ],
    realWorldProjects: [
      {
        title: 'Enterprise High-Availability Multi-Tier AWS Infrastructure',
        description:
          'Design and provision an enterprise-grade cloud topology on AWS featuring public-facing load balancers, private auto-scaling compute pools, a multi-AZ relational database layer, and automated CloudWatch alarms.',
        deliverables: [
          'Production-ready VPC architecture diagram and automated Terraform provisioning manifests',
          'Load-tested Auto Scaling policy demonstrating dynamic scale-out under simulated peak traffic',
          'Automated database backup and failover verification report on multi-AZ RDS',
          'CloudWatch operational dashboard monitoring latency, CPU utilization, and 5xx error metrics',
        ],
      },
      {
        title: 'AI-Accelerated GitOps CI/CD Microservices Pipeline',
        description:
          'Build an automated continuous delivery pipeline that containerizes microservices, conducts AI-powered automated vulnerability checks, and deploys declarative manifests to AWS EKS.',
        deliverables: [
          'GitHub Actions workflow pipeline with automated linting, test suites, and Docker container builds',
          'Kubernetes Helm charts configured with rolling update strategies and ingress rules',
          'AI-assisted security review logs identifying configuration drifts and container vulnerabilities',
        ],
      },
    ],
    syllabus: [
      {
        id: 'aws-dev-mod-1',
        moduleNumber: 1,
        title: 'AWS Global Infrastructure & IAM Security Governance',
        durationEstimate: 'Week 1-2',
        topics: [
          'AWS Global Infrastructure: Regions, Availability Zones, and Edge Locations',
          'Shared Responsibility Model and enterprise security foundations',
          'AWS Identity & Access Management (IAM): Users, Roles, Policies, and MFA',
          'Least-privilege permission boundaries and temporary credentials with AWS STS',
          'Introduction to AI Cloud Assistants: Amazon Q Developer CLI and console integration',
        ],
        practicalExercises: [
          'Setting up an AWS Free Tier account with budget alerts and billing alarms',
          'Configuring AWS CLI and granting granular IAM role permissions',
          'Using Amazon Q Developer to audit IAM policy syntax and security gaps',
        ],
        learningOutcomes: [
          'Identify suitable AWS regions based on latency, compliance, and cost',
          'Enforce strict administrative governance without sharing root account credentials',
        ],
        technologies: ['AWS Management Console', 'AWS CLI', 'AWS IAM', 'Amazon Q Developer'],
      },
      {
        id: 'aws-dev-mod-2',
        moduleNumber: 2,
        title: 'Virtual Private Cloud (VPC) Networking & Compute (EC2)',
        durationEstimate: 'Week 3-4',
        topics: [
          'VPC architecture: CIDR blocks, public/private subnets, and routing tables',
          'Internet Gateways, NAT Gateways, and Network ACLs vs. Security Groups',
          'Amazon EC2: Instance types, AMI selection, EBS volumes, and SSH/SSM access',
          'Application Load Balancers (ALB), Target Groups, and health checks',
          'Auto Scaling Groups (ASG) with target tracking and dynamic scaling policies',
        ],
        practicalExercises: [
          'Building a multi-tier custom VPC with redundant NAT Gateways across two AZs',
          'Deploying an Auto Scaling Group behind an Application Load Balancer with health checks',
        ],
        learningOutcomes: [
          'Architect resilient VPC network topologies isolating private database compute from the internet',
          'Configure automated horizontal compute scaling based on real-time traffic loads',
        ],
        technologies: ['Amazon VPC', 'Amazon EC2', 'ALB', 'Auto Scaling', 'EBS'],
      },
      {
        id: 'aws-dev-mod-3',
        moduleNumber: 3,
        title: 'Cloud Storage & Managed Databases (S3 & RDS)',
        durationEstimate: 'Week 5',
        topics: [
          'Amazon S3: Buckets, object versioning, storage classes, and lifecycle rules',
          'S3 bucket policies, access control lists, and CloudFront CDN distribution',
          'Amazon Relational Database Service (RDS): Multi-AZ deployment and read replicas',
          'Automated database backups, point-in-time recovery, and security group isolation',
        ],
        practicalExercises: [
          'Configuring secure S3 object storage with automated archival and encryption',
          'Provisioning a PostgreSQL RDS instance with multi-AZ failover and private subnet isolation',
        ],
        learningOutcomes: [
          'Select appropriate storage classes optimizing durability, availability, and cost',
          'Deploy production-ready relational databases with automated disaster recovery',
        ],
        technologies: ['Amazon S3', 'Amazon RDS', 'CloudFront', 'KMS'],
      },
      {
        id: 'aws-dev-mod-4',
        moduleNumber: 4,
        title: 'Docker Containers & Managed Kubernetes on AWS EKS',
        durationEstimate: 'Week 6-7',
        topics: [
          'Container fundamentals: Dockerfiles, layer caching, and multi-stage builds',
          'Amazon Elastic Container Registry (ECR): Repositories, tagging, and vulnerability scanning',
          'Amazon Elastic Kubernetes Service (EKS): Control plane, managed node groups, and kubectl',
          'Kubernetes Core Objects: Pods, Deployments, Services, ConfigMaps, and Ingress controllers',
        ],
        practicalExercises: [
          'Authoring minimal Dockerfiles and publishing images to Amazon ECR',
          'Deploying microservice deployments and service discovery on an AWS EKS cluster',
        ],
        learningOutcomes: [
          'Build secure containerized images following production container best practices',
          'Orchestrate and scale containerized applications on AWS managed Kubernetes',
        ],
        technologies: ['Docker', 'AWS EKS', 'Amazon ECR', 'Kubernetes', 'kubectl'],
      },
      {
        id: 'aws-dev-mod-5',
        moduleNumber: 5,
        title: 'Infrastructure as Code (IaC) with Terraform & AI Generation',
        durationEstimate: 'Week 8',
        topics: [
          'Terraform architecture: Providers, Resources, Variables, and Outputs',
          'Terraform state management: Remote backend on S3 with DynamoDB state locking',
          'Modular Terraform design and reusable infrastructure patterns',
          'AI-assisted Terraform generation: Using LLMs and Amazon Q for HCL authoring',
        ],
        practicalExercises: [
          'Writing modular Terraform manifests provisioning an end-to-end AWS VPC and EC2 cluster',
          'Configuring remote S3 state backends with DynamoDB state concurrency locks',
        ],
        learningOutcomes: [
          'Manage cloud infrastructure through declarative, version-controlled code',
          'Accelerate IaC development safely using AI-generated configuration templates',
        ],
        technologies: ['Terraform', 'HashiCorp HCL', 'Amazon S3', 'Amazon DynamoDB', 'Amazon Q'],
      },
      {
        id: 'aws-dev-mod-6',
        moduleNumber: 6,
        title: 'CI/CD Pipelines with GitHub Actions & AWS Integration',
        durationEstimate: 'Week 9',
        topics: [
          'Continuous Integration & Continuous Delivery (CI/CD) core principles',
          'GitHub Actions: Workflows, Jobs, Steps, Runners, and Secrets management',
          'OIDC role federation between GitHub Actions and AWS IAM (credential-less auth)',
          'Automated deployment strategies: Rolling updates, Blue/Green deployments, and Canary releases',
        ],
        practicalExercises: [
          'Configuring GitHub Actions with AWS OIDC authentication for secure automated deployments',
          'Building an automated pipeline that builds, tests, scans, and deploys to AWS EKS on pull-request merge',
        ],
        learningOutcomes: [
          'Eliminate long-lived access keys using secure OIDC identity federation',
          'Automate software release cycles from code commit to production deployment',
        ],
        technologies: ['GitHub Actions', 'AWS OIDC', 'Docker', 'Amazon EKS', 'YAML'],
      },
      {
        id: 'aws-dev-mod-7',
        moduleNumber: 7,
        title: 'Observability, CloudWatch & AI-Assisted Telemetry',
        durationEstimate: 'Week 10',
        topics: [
          'Amazon CloudWatch: Metrics collection, Log Insights queries, and composite alarms',
          'CloudWatch Anomaly Detection: Machine learning baseline thresholds for dynamic alarms',
          'AWS CloudTrail for governance, security audit trails, and API tracing',
          'AWS Systems Manager (SSM) for patch automation and fleet management',
        ],
        practicalExercises: [
          'Configuring CloudWatch custom metrics and anomaly detection alarms triggering SNS alerts',
          'Writing CloudWatch Log Insights queries to track 5xx error spikes in container logs',
        ],
        learningOutcomes: [
          'Establish 360-degree observability and proactive alerting across cloud workloads',
          'Identify and diagnose production incidents using automated log aggregation',
        ],
        technologies: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS SNS', 'AWS Systems Manager'],
      },
      {
        id: 'aws-dev-mod-8',
        moduleNumber: 8,
        title: 'Production Capstone Lab & Architectural Review',
        durationEstimate: 'Week 11-12',
        topics: [
          'AWS Well-Architected Framework: Reliability, Security, Performance, and Cost Optimization',
          'Disaster recovery planning: RPO, RTO, Backup & Restore vs. Pilot Light',
          'Deploying the verified High-Availability Multi-Tier EKS Capstone infrastructure',
          'Live architectural review and portfolio preparation',
        ],
        practicalExercises: [
          'Executing an end-to-end production capstone deployment with Terraform and GitHub Actions',
          'Simulating an availability zone failure and verifying uninterrupted traffic failover',
        ],
        learningOutcomes: [
          'Deliver an audited, secure, production-grade cloud infrastructure on AWS',
          'Present a comprehensive architectural overview with cost and security justification',
        ],
        technologies: ['AWS Architecture', 'Terraform', 'GitHub Actions', 'Amazon EKS'],
      },
    ],
    toolsAndPlatforms: ['AWS Console', 'AWS CLI', 'Amazon Q Developer', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'VS Code'],
    trainerGuidanceNote:
      'All lab sessions are conducted on live AWS accounts guided by practicing senior cloud engineers. Students build authentic production configurations rather than sandbox toys.',
    faqs: [
      {
        question: 'Do I need prior programming experience for AI-Powered AWS DevOps?',
        answer:
          'No prior programming expertise is required. Basic computer literacy and general networking fundamentals are sufficient. We teach Linux CLI, Terraform, and pipeline syntax step-by-step.',
      },
      {
        question: 'Will we work on live AWS accounts and write actual Terraform code?',
        answer:
          'Yes. Every lab is executed inside live AWS accounts using modern tools including Terraform, GitHub Actions, and Amazon EKS, with guidance on budget limits and free-tier resources.',
      },
      {
        question: 'How is AI incorporated into the AWS DevOps course?',
        answer:
          'We integrate modern AI developer tools such as Amazon Q Developer and LLM-assisted IaC generators to accelerate Infrastructure as Code authoring, automate security vulnerability reviews, and diagnose deployment errors.',
      },
    ],
  },
  {
    id: 'ai-powered-azure-devops',
    slug: 'ai-powered-azure-devops',
    title: 'AI-Powered Azure DevOps',
    category: 'Azure DevOps',
    headline: 'Enterprise Azure Cloud Platform, Azure Pipelines CI/CD & AI-Assisted Release Engineering',
    summary:
      'A thorough, practical engineering track covering Microsoft Azure cloud infrastructure, Azure DevOps Boards & Repos, multi-stage Azure Pipelines, Terraform/Bicep IaC, and GitHub Copilot.',
    description:
      'Master modern enterprise DevOps on Microsoft Azure. Learn to design scalable Azure infrastructure, configure Azure Virtual Networks and Virtual Machine Scale Sets, deploy containerized microservices on Azure Kubernetes Service (AKS), build automated CI/CD pipelines with Azure Pipelines and GitHub Actions, write declarative Infrastructure as Code using Bicep and Terraform, and supercharge development with GitHub Copilot and Azure OpenAI.',
    level: 'Beginner to Intermediate',
    deliveryMode: 'Practical Guided Lab',
    prerequisites: [
      'Basic familiarity with operating systems, command line, and general software concepts',
      'No prior Azure experience required; foundational modules start from scratch',
    ],
    whoShouldEnrol: [
      'Engineers looking to master enterprise Microsoft Azure cloud and automated release pipelines',
      'Developers and DevOps Engineers transitioning to Azure DevOps and Azure Kubernetes Service',
      'System Administrators seeking to modernize enterprise infrastructure using Terraform and Bicep',
      'IT Professionals preparing for enterprise cloud DevOps roles (AZ-104 / AZ-400 domains)',
    ],
    technologies: [
      'Microsoft Azure',
      'Azure DevOps',
      'Azure Pipelines',
      'AKS (Azure Kubernetes Service)',
      'GitHub Copilot',
      'Terraform',
      'Azure Bicep',
      'Docker',
      'Azure Monitor',
      'Azure Key Vault',
      'Microsoft Entra ID',
    ],
    learningOutcomes: [
      'Architect secure, scalable enterprise cloud infrastructure on Microsoft Azure',
      'Configure Azure Virtual Networks (VNet), subnets, Network Security Groups (NSGs), and Azure Bastion',
      'Deploy and scale containerized microservices on managed Azure Kubernetes Service (AKS)',
      'Construct automated multi-stage CI/CD pipelines with Azure Pipelines and GitHub Actions',
      'Author declarative Infrastructure as Code using Terraform and Azure Bicep with AI assistance',
      'Enforce enterprise identity and zero-trust access control with Microsoft Entra ID and Managed Identities',
      'Centralize secrets management and certificate rotation using Azure Key Vault',
      'Leverage GitHub Copilot to accelerate pipeline YAML creation, shell scripting, and automated testing',
    ],
    practicalExercises: [
      'Configuring an Azure subscription with Role-Based Access Control (RBAC) and budget governance',
      'Building a dual-tier Azure Virtual Network with NSG firewall rules and Azure Bastion',
      'Launching an Azure Virtual Machine Scale Set behind an Azure Application Gateway',
      'Provisioning a managed AKS cluster with Azure CNI networking and Azure Container Registry (ACR)',
      'Building a multi-stage Azure Pipeline with YAML linting, unit testing, and automated release gates',
      'Authoring modular Terraform and Bicep scripts provisioning Azure SQL and Storage Accounts',
      'Configuring Azure Key Vault secrets integration with AKS pods using Secrets Store CSI driver',
      'Using GitHub Copilot to generate pipeline definitions, test suites, and Terraform modules',
    ],
    realWorldProjects: [
      {
        title: 'Enterprise High-Availability Azure Multi-Tier Infrastructure',
        description:
          'Design and provision an enterprise Azure topology featuring Azure Application Gateway with WAF, private virtual machine scale sets, and Azure SQL Database with geo-redundancy.',
        deliverables: [
          'Terraform/Bicep infrastructure blueprints for enterprise Virtual Network and compute tiers',
          'Automated scale-out policy verification under synthetic load tests',
          'Azure Key Vault secrets injection architecture avoiding hardcoded credentials',
          'Azure Monitor dashboard tracking request latencies, CPU utilization, and HTTP status codes',
        ],
      },
      {
        title: 'AI-Assisted Azure DevOps & AKS Microservices Pipeline',
        description:
          'Build an end-to-end continuous delivery pipeline in Azure DevOps that builds container images, scans for security flaws using Copilot-guided checks, and releases to Azure Kubernetes Service.',
        deliverables: [
          'Multi-stage Azure Pipelines YAML with staging approval gates and rollback triggers',
          'AKS cluster deployment manifests with ingress routing and horizontal pod autoscaling',
          'GitHub Copilot prompt library tailored for rapid pipeline debugging and test automation',
        ],
      },
    ],
    syllabus: [
      {
        id: 'az-dev-mod-1',
        moduleNumber: 1,
        title: 'Azure Cloud Fundamentals & Entra ID Identity Management',
        durationEstimate: 'Week 1-2',
        topics: [
          'Azure global infrastructure: Regions, Availability Zones, and Geographies',
          'Subscriptions, Management Groups, and Resource Groups organizational hierarchy',
          'Microsoft Entra ID (formerly Azure AD): Users, Groups, and Role-Based Access Control (RBAC)',
          'Managed Identities for Azure resources eliminating credentials in source code',
          'Azure Cost Management, budgets, and Azure Policy governance',
        ],
        practicalExercises: [
          'Creating an Azure subscription structure with Resource Groups and RBAC roles',
          'Configuring System-Assigned and User-Assigned Managed Identities for secure resource access',
        ],
        learningOutcomes: [
          'Enforce least-privilege RBAC policies across Azure resource hierarchies',
          'Eliminate hardcoded credentials using Azure Managed Identities',
        ],
        technologies: ['Azure Portal', 'Azure CLI', 'Microsoft Entra ID', 'Azure Policy'],
      },
      {
        id: 'az-dev-mod-2',
        moduleNumber: 2,
        title: 'Azure Virtual Networks (VNet) & Compute (VMSS)',
        durationEstimate: 'Week 3-4',
        topics: [
          'Azure VNet architecture: Address spaces, subnets, and peering',
          'Network Security Groups (NSGs), Application Security Groups (ASGs), and route tables',
          'Azure Bastion for secure management connectivity without public IPs',
          'Virtual Machines, Virtual Machine Scale Sets (VMSS), and custom image creation',
          'Azure Application Gateway: Path routing, SSL termination, and Web Application Firewall (WAF)',
        ],
        practicalExercises: [
          'Configuring a dual-subnet VNet with strict NSG inbound/outbound rules and Azure Bastion',
          'Deploying an auto-scaling VMSS behind an Azure Application Gateway with health probes',
        ],
        learningOutcomes: [
          'Design isolated network architectures protecting production backends from public exposure',
          'Implement automated horizontal scaling to handle dynamic enterprise traffic surges',
        ],
        technologies: ['Azure VNet', 'NSG', 'Azure Bastion', 'VMSS', 'Azure Application Gateway'],
      },
      {
        id: 'az-dev-mod-3',
        moduleNumber: 3,
        title: 'Azure Storage & Managed Azure SQL Databases',
        durationEstimate: 'Week 5',
        topics: [
          'Azure Storage Accounts: Blob, File, Queue, and Table storage tiers',
          'Blob lifecycle management, immutable storage, and private endpoints',
          'Azure SQL Database: Single databases, elastic pools, and failover groups',
          'Azure Key Vault: Managing keys, secrets, and certificates with automated rotation',
        ],
        practicalExercises: [
          'Configuring private endpoint access for Azure Blob Storage disabling public internet traffic',
          'Provisioning Azure SQL with automated daily backups and geo-replication',
        ],
        learningOutcomes: [
          'Select cost-optimal Azure storage tiers and configure private network integration',
          'Deploy production databases with automated failover and secure secrets management',
        ],
        technologies: ['Azure Storage', 'Azure SQL', 'Azure Key Vault', 'Private Endpoints'],
      },
      {
        id: 'az-dev-mod-4',
        moduleNumber: 4,
        title: 'Containers & Managed Azure Kubernetes Service (AKS)',
        durationEstimate: 'Week 6-7',
        topics: [
          'Containerizing applications with Docker and multi-stage builds',
          'Azure Container Registry (ACR): Private repos, image scanning, and build tasks',
          'Azure Kubernetes Service (AKS): Cluster architecture, node pools, and Azure CNI',
          'Kubernetes deployments, cluster networking, Helm charts, and Secrets Store CSI',
        ],
        practicalExercises: [
          'Building Docker containers and securely pushing images to an Azure Container Registry',
          'Provisioning a managed AKS cluster and deploying microservices with rolling updates',
        ],
        learningOutcomes: [
          'Package enterprise services into optimized container images',
          'Orchestrate production workloads on managed Azure Kubernetes with native cloud networking',
        ],
        technologies: ['Docker', 'Azure Container Registry', 'AKS', 'Kubernetes', 'Helm'],
      },
      {
        id: 'az-dev-mod-5',
        moduleNumber: 5,
        title: 'Azure DevOps Repos, Boards & Multi-Stage Azure Pipelines',
        durationEstimate: 'Week 8',
        topics: [
          'Azure DevOps suite: Boards for agile tracking, Repos for Git branch governance',
          'Azure Pipelines architecture: YAML pipelines, Self-hosted vs. Microsoft-hosted agents',
          'Multi-stage CI/CD pipelines: Build, test, staging approval gates, and production release',
          'Service Connections: Authenticating Azure Pipelines with Azure resources using Service Principals',
        ],
        practicalExercises: [
          'Creating an end-to-end multi-stage Azure Pipeline with automated unit tests and build artifacts',
          'Configuring manual approval gates and automated rollback triggers for production stages',
        ],
        learningOutcomes: [
          'Establish automated release engineering pipelines with branch protection and test gates',
          'Configure zero-trust service connections securely connecting CI/CD to Azure environments',
        ],
        technologies: ['Azure DevOps', 'Azure Pipelines', 'Azure Repos', 'YAML'],
      },
      {
        id: 'az-dev-mod-6',
        moduleNumber: 6,
        title: 'Infrastructure as Code (IaC) with Terraform & Azure Bicep',
        durationEstimate: 'Week 9',
        topics: [
          'Azure Bicep vs. Terraform: Syntax, modules, and parameter files',
          'Terraform AzureRM provider: Declarative state management and remote backend in Azure Storage',
          'Modular IaC design: Composable blueprints for VNets, AKS, and compute clusters',
          'Integrating IaC validation and security scanning directly into Azure Pipelines',
        ],
        practicalExercises: [
          'Authoring reusable Terraform modules that provision an end-to-end Azure AKS topology',
          'Configuring an Azure Pipeline running `terraform plan` on PR and `apply` on merge',
        ],
        learningOutcomes: [
          'Deterministically provision and manage Azure resources through declarative versioned code',
          'Enforce automated linting and compliance checks before infrastructure changes apply',
        ],
        technologies: ['Terraform', 'Azure Bicep', 'Azure Storage', 'AzureRM Provider'],
      },
      {
        id: 'az-dev-mod-7',
        moduleNumber: 7,
        title: 'AI-Accelerated DevOps with GitHub Copilot & Azure OpenAI',
        durationEstimate: 'Week 10',
        topics: [
          'GitHub Copilot for DevOps: Prompt engineering for YAML pipelines and Dockerfiles',
          'Using Copilot to generate Terraform HCL and Bicep infrastructure manifests',
          'Automated error analysis: Accelerating build failure root-cause analysis with AI',
          'Integrating Azure OpenAI APIs into automated deployment verification workflows',
        ],
        practicalExercises: [
          'Using GitHub Copilot to write complete Azure Pipelines YAML definitions and shell scripts',
          'Prompting AI to diagnose Kubernetes crash-looping pods and generate remediation patches',
        ],
        learningOutcomes: [
          'Dramatically speed up DevOps configuration authoring and troubleshooting using AI',
          'Apply AI code-generation responsibly with human-in-the-loop review and automated testing',
        ],
        technologies: ['GitHub Copilot', 'Azure OpenAI', 'VS Code', 'Azure CLI'],
      },
      {
        id: 'az-dev-mod-8',
        moduleNumber: 8,
        title: 'Azure Monitor Observability & Production Capstone Lab',
        durationEstimate: 'Week 11-12',
        topics: [
          'Azure Monitor: Metrics, Activity Logs, and Log Analytics workspaces with KQL queries',
          'Application Insights: Distributed tracing, live metrics, and application performance monitoring',
          'Automated alerting rules and action groups triggering email/webhook notifications',
          'Delivering the end-to-end Enterprise Azure DevOps Capstone project',
        ],
        practicalExercises: [
          'Instrumenting an AKS microservice with Application Insights for real-time distributed tracing',
          'Executing an end-to-end production deployment across Azure Infrastructure via Azure Pipelines',
        ],
        learningOutcomes: [
          'Gain deep visibility into application performance and cloud infrastructure health',
          'Present an audited, enterprise-ready Azure DevOps implementation in your portfolio',
        ],
        technologies: ['Azure Monitor', 'Log Analytics', 'KQL', 'Application Insights', 'AKS'],
      },
    ],
    toolsAndPlatforms: ['Azure Portal', 'Azure CLI', 'Azure DevOps', 'Azure Pipelines', 'AKS', 'GitHub Copilot', 'Terraform', 'Docker', 'VS Code'],
    trainerGuidanceNote:
      'All Azure DevOps sessions emphasize authentic enterprise scenarios with live hands-on labs in Microsoft Azure subscriptions. Students write real Terraform/Bicep and manage real AKS clusters.',
    faqs: [
      {
        question: 'How does AI-Powered Azure DevOps compare with AWS DevOps?',
        answer:
          'Both teach production cloud and CI/CD principles, but Azure DevOps focuses on the Microsoft Azure ecosystem, Azure DevOps Services (Repos, Pipelines, Boards), Azure Kubernetes Service (AKS), and integration with GitHub Copilot.',
      },
      {
        question: 'Will we learn both Terraform and Azure Bicep?',
        answer:
          'Yes. We cover Terraform as the industry-standard multi-cloud IaC tool, and Azure Bicep as Microsoft’s native first-class declarative templating language.',
      },
      {
        question: 'Does this course prepare me for Microsoft Azure certifications?',
        answer:
          'Yes. The curriculum directly addresses the core competencies and skills measured in Microsoft AZ-104 (Azure Administrator) and AZ-400 (DevOps Engineer Expert) certification domains.',
      },
    ],
  },
  {
    id: 'ai-powered-aiops',
    slug: 'ai-powered-aiops',
    title: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    category: 'AIOps',
    headline: 'Machine Learning Observability, Automated Root-Cause Analysis & Self-Healing Cloud Systems',
    summary:
      'A pioneering engineering program mastering telemetry ingestion with OpenTelemetry, Prometheus & Grafana, ML anomaly detection, LLM incident response bots, and self-healing cloud operations.',
    description:
      'Transform traditional IT and DevOps operations into an autonomous, proactive system using Artificial Intelligence. Learn to collect distributed telemetry with OpenTelemetry and Prometheus, train machine learning models for metric anomaly detection, automate root-cause analysis (RCA) using LLM reasoning loops, correlate multi-service alerts, and deploy autonomous self-healing remediation agents built with Python and LangGraph.',
    level: 'Intermediate to Advanced',
    deliveryMode: 'Practical Guided Lab',
    prerequisites: [
      'Basic familiarity with Python programming and Linux command-line operations',
      'Understanding of basic cloud, networking, or container concepts is beneficial',
    ],
    whoShouldEnrol: [
      'DevOps Engineers, SREs, and Cloud Architects wanting to automate incident operations with AI',
      'System Administrators and IT Operations leads seeking predictive monitoring and automated alerting',
      'Software Engineers interested in building autonomous LLM agents for production maintenance',
      'Tech leaders modernizing traditional NOC (Network Operations Center) workflows with AIOps',
    ],
    technologies: [
      'AIOps',
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'Python',
      'LangGraph',
      'Elasticsearch / OpenSearch',
      'Vector Databases',
      'Docker',
      'Kubernetes',
      'Slack Bot APIs',
    ],
    learningOutcomes: [
      'Understand the AIOps maturity model: from reactive alerting to proactive self-healing automation',
      'Instrument microservices with OpenTelemetry for unified metrics, logs, and distributed traces',
      'Deploy enterprise Prometheus and Grafana stacks with dynamic alerting and PromQL dashboards',
      'Train and deploy machine learning models for time-series metric anomaly detection (Isolation Forests, Prophet)',
      'Automate intelligent alert deduplication and correlation across high-volume microservice clusters',
      'Build autonomous incident diagnostic agents using LangGraph, RAG, and LLM tool calling',
      'Implement closed-loop automated remediation: self-healing pod restarts, auto-scaling, and rollback execution',
      'Integrate interactive Slack/Teams chatbot incident responders with human-in-the-loop approvals',
    ],
    practicalExercises: [
      'Instrumenting a multi-tier microservices application with OpenTelemetry auto-instrumentation',
      'Building Grafana dashboards monitoring golden signals (latency, traffic, errors, saturation)',
      'Writing Python scripts using scikit-learn and Prophet to detect anomalies in CPU and memory metrics',
      'Configuring an alert correlation engine that condenses 100+ noisy alerts into a single actionable incident',
      'Constructing an autonomous incident triage bot with LangGraph querying Prometheus and Kubernetes APIs',
      'Building a self-healing Kubernetes operator that detects deadlocked pods and executes automated rollbacks',
      'Deploying an interactive Slack Bot for live incident triage with LLM-generated incident summaries',
    ],
    realWorldProjects: [
      {
        title: 'Autonomous AIOps Incident Detection & Diagnostic Engine',
        description:
          'Design and build an intelligent observability platform that ingests real-time telemetry from microservices, detects anomalies using machine learning, and produces automated LLM diagnostic post-mortems.',
        deliverables: [
          'OpenTelemetry collector pipeline routing telemetry to Prometheus and OpenSearch',
          'Machine-learning anomaly detection model trained on synthetic production traffic patterns',
          'LangGraph multi-agent diagnostic workflow generating root-cause analysis (RCA) reports',
          'Interactive Grafana dashboard visualizing live anomaly scores and telemetry traces',
        ],
      },
      {
        title: 'Closed-Loop Self-Healing Cloud Operations System',
        description:
          'Build an automated remediation system where an autonomous AIOps agent responds to alerts, verifies service health, executes corrective actions (e.g. restart, traffic rerouting), and confirms recovery.',
        deliverables: [
          'Python remediation engine with safety guardrails and human-in-the-loop review overrides',
          'Slack/Teams webhook integration providing interactive one-click incident remediation buttons',
          'Comprehensive audit log recording every automated action, timing, and recovery outcome',
        ],
      },
    ],
    syllabus: [
      {
        id: 'aiops-mod-1',
        moduleNumber: 1,
        title: 'AIOps Foundations & Modern Telemetry Architecture',
        durationEstimate: 'Week 1-2',
        topics: [
          'Evolution of IT operations: From manual NOC monitoring to DevOps, SRE, and AIOps',
          'The Three Pillars of Observability: Metrics, Distributed Logs, and Traces',
          'OpenTelemetry (OTel) architecture: SDKs, APIs, and the OpenTelemetry Collector',
          'Unified telemetry pipelines: Ingesting, filtering, and transforming high-throughput data',
        ],
        practicalExercises: [
          'Instrumenting a sample Python/Node.js microservice with OpenTelemetry libraries',
          'Deploying and configuring an OpenTelemetry Collector routing traces and metrics to storage backends',
        ],
        learningOutcomes: [
          'Understand how AIOps reduces Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR)',
          'Collect standardized telemetry across heterogeneous multi-cloud environments',
        ],
        technologies: ['OpenTelemetry', 'Python', 'OTel Collector', 'Docker'],
      },
      {
        id: 'aiops-mod-2',
        moduleNumber: 2,
        title: 'Enterprise Metrics, Logs & Dashboards (Prometheus & Grafana)',
        durationEstimate: 'Week 3-4',
        topics: [
          'Prometheus: Time-series database architecture, scraping targets, and TSDB storage',
          'PromQL: Advanced querying, aggregations, rate calculation, and quantile functions',
          'Grafana: Data sources, dynamic templating, alerts, and enterprise dashboard visualization',
          'Centralized log aggregation with Loki and OpenSearch',
        ],
        practicalExercises: [
          'Deploying Prometheus and Grafana on Kubernetes to monitor cluster health and applications',
          'Creating production Grafana dashboards tracking SRE Golden Signals (Latency, Traffic, Errors, Saturation)',
        ],
        learningOutcomes: [
          'Master PromQL queries to surface subtle operational bottlenecks in production',
          'Design actionable visual dashboards that clearly convey system reliability',
        ],
        technologies: ['Prometheus', 'Grafana', 'PromQL', 'Loki', 'Kubernetes'],
      },
      {
        id: 'aiops-mod-3',
        moduleNumber: 3,
        title: 'Machine Learning for Anomaly Detection in Time-Series Data',
        durationEstimate: 'Week 5-6',
        topics: [
          'Why static thresholds fail: Alert fatigue, dynamic seasonality, and false alarms',
          'Unsupervised anomaly detection: Isolation Forests, One-Class SVM, and DBSCAN',
          'Forecasting and seasonality modeling using Meta Prophet and ARIMA',
          'Evaluating model performance: Precision, recall, and false alarm mitigation in production',
        ],
        practicalExercises: [
          'Building a Python ML pipeline that trains on baseline metric data and flags statistical outliers',
          'Deploying a live inference service that scores real-time Prometheus metrics for anomaly likelihood',
        ],
        learningOutcomes: [
          'Replace noisy static alert thresholds with dynamic, intelligent anomaly detection algorithms',
          'Identify impending performance degradation before users experience service outages',
        ],
        technologies: ['Python', 'scikit-learn', 'Prophet', 'Pandas', 'NumPy'],
      },
      {
        id: 'aiops-mod-4',
        moduleNumber: 4,
        title: 'Intelligent Alert Correlation & Noise Reduction',
        durationEstimate: 'Week 7',
        topics: [
          'The alert storm challenge: Cascading microservice failures and alert fatigue',
          'Topological correlation: Mapping alerts to infrastructure dependency graphs',
          'Temporal and semantic grouping: Grouping related alerts occurring within dynamic time windows',
          'Open-source alert correlation engines: Alertmanager routing, Keep, and custom Python correlators',
        ],
        practicalExercises: [
          'Configuring Alertmanager deduplication rules and alert inhibition policies',
          'Building a Python correlation service that consolidates 50+ service alerts into 1 root incident',
        ],
        learningOutcomes: [
          'Reduce operational alert noise by up to 80%, allowing engineers to focus on root causes',
          'Map system failure cascades accurately across complex distributed architectures',
        ],
        technologies: ['Alertmanager', 'Python', 'NetworkX', 'Grafana OnCall'],
      },
      {
        id: 'aiops-mod-5',
        moduleNumber: 5,
        title: 'LLM-Powered Root-Cause Analysis (RCA) & Triage Agents',
        durationEstimate: 'Week 8-9',
        topics: [
          'Leveraging Large Language Models for automated incident triage and diagnosis',
          'Retrieval-Augmented Generation (RAG) over runbooks, architectural docs, and post-mortems',
          'Agentic reasoning loops with LangGraph: Querying live telemetry, inspecting logs, and synthesizing findings',
          'Structured RCA output generation using Pydantic JSON schemas',
        ],
        practicalExercises: [
          'Constructing a LangGraph agent that accepts an alert, queries Prometheus metrics, fetches pod logs, and generates an RCA report',
          'Indexing engineering runbooks into a vector database (ChromaDB) to empower the agent with operational knowledge',
        ],
        learningOutcomes: [
          'Build autonomous reasoning agents capable of troubleshooting complex distributed system failures',
          'Deliver standardized, high-quality incident summaries within seconds of an alert firing',
        ],
        technologies: ['LangGraph', 'Python', 'OpenAI/Gemini API', 'ChromaDB', 'Pydantic'],
      },
      {
        id: 'aiops-mod-6',
        moduleNumber: 6,
        title: 'ChatOps & Interactive Incident Response Bots',
        durationEstimate: 'Week 10',
        topics: [
          'ChatOps principles: Bringing operational tooling into team collaboration channels',
          'Slack and Microsoft Teams bot APIs: Webhooks, Block Kit interactive cards, and commands',
          'Human-in-the-loop review: Providing engineers with one-click approval buttons for automated fixes',
          'Security boundaries, audit logging, and authorization in ChatOps bots',
        ],
        practicalExercises: [
          'Building a Slack incident responder bot that broadcasts incident summaries with triage action buttons',
          'Enabling engineers to query system status and execute diagnostic commands directly from chat',
        ],
        learningOutcomes: [
          'Streamline communication during high-severity production incidents',
          'Empower on-call engineers with interactive, contextual automation inside Slack/Teams',
        ],
        technologies: ['Slack Bolt API', 'Python', 'FastAPI', 'Webhooks'],
      },
      {
        id: 'aiops-mod-7',
        moduleNumber: 7,
        title: 'Closed-Loop Automated Remediation & Self-Healing Systems',
        durationEstimate: 'Week 11',
        topics: [
          'Self-healing infrastructure: Design patterns, circuit breakers, and automated recovery loops',
          'Automated remediation actions: Pod restarts, scaling adjustments, DNS rerouting, and canary rollbacks',
          'Safety guardrails: Flapping detection, execution rate limits, and automated emergency stops',
          'Validating system health post-remediation to confirm successful incident recovery',
        ],
        practicalExercises: [
          'Authoring an automated Kubernetes remediation engine that detects stalled pods and executes safe restarts',
          'Implementing automated rollbacks when post-deployment canary error rates exceed thresholds',
        ],
        learningOutcomes: [
          'Build resilient, self-healing cloud platforms that recover autonomously from routine failures',
          'Enforce strict safeguards preventing automated actions from causing cascading damage',
        ],
        technologies: ['Kubernetes API', 'Python', 'Prometheus Alertmanager', 'Docker'],
      },
      {
        id: 'aiops-mod-8',
        moduleNumber: 8,
        title: 'Predictive Capacity Planning & Production Capstone Lab',
        durationEstimate: 'Week 12',
        topics: [
          'Predictive resource forecasting: Projecting CPU, memory, and disk exhaustion weeks in advance',
          'FinOps optimization: Using ML to identify over-provisioned idle cloud resources and recommend rightsizing',
          'Executing the end-to-end Autonomous AIOps Capstone platform deployment',
          'Live project presentation, architectural review, and portfolio publishing',
        ],
        practicalExercises: [
          'Building a resource exhaustion forecasting model on long-term cloud telemetry data',
          'Deploying and demonstrating the end-to-end Autonomous AIOps Incident Detection & Self-Healing platform',
        ],
        learningOutcomes: [
          'Forecast infrastructure capacity requirements and optimize enterprise cloud expenditure',
          'Deliver an audited, verified AIOps capstone project with public code repository and architecture documentation',
        ],
        technologies: ['Python', 'AIOps Architecture', 'OpenTelemetry', 'Prometheus', 'Grafana', 'LangGraph'],
      },
    ],
    toolsAndPlatforms: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Python', 'LangGraph', 'Docker', 'Kubernetes', 'ChromaDB', 'Slack API'],
    trainerGuidanceNote:
      'AIOps labs pair authentic production telemetry with real AI frameworks. Students build functional machine learning anomaly detectors and autonomous agent triage bots running on live systems.',
    faqs: [
      {
        question: 'What is the difference between DevOps, SRE, and AIOps?',
        answer:
          'DevOps focuses on automating code delivery (CI/CD) and infrastructure (IaC). SRE focuses on production reliability standards (SLIs, SLOs). AIOps applies Machine Learning and AI agents directly to telemetry data to automate anomaly detection, root-cause analysis, and self-healing operations.',
      },
      {
        question: 'Do I need machine learning expertise before starting AIOps?',
        answer:
          'No prior machine learning background is required. We teach practical, applied time-series anomaly detection and modern LLM agent orchestration from step-by-step principles using accessible Python libraries.',
      },
      {
        question: 'Will we build real self-healing automations?',
        answer:
          'Yes. You will build and deploy working systems that detect real metric anomalies, invoke LangGraph diagnostic workflows, post interactive incident cards to Slack, and safely execute remediation commands against live Kubernetes workloads.',
      },
    ],
  },
];
