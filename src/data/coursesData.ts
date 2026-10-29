import type { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'aws-cloud-computing',
    slug: 'aws-cloud-computing',
    title: 'AWS & Cloud Computing',
    category: 'Cloud',
    headline: 'Architect, Secure, and Deploy Resilient Cloud Infrastructure on Amazon Web Services',
    summary:
      'A structured, hands-on curriculum covering core AWS services, cloud architecture design, serverless computing, VPC networking, and production reliability.',
    description:
      'Gain real-world cloud competence through guided architectural labs. Learn to design multi-tier environments, configure secure networking, manage scalable compute workloads, and enforce cost-effective storage and database solutions in production-like AWS environments.',
    level: 'Beginner to Intermediate',
    deliveryMode: 'Practical Guided Lab',
    prerequisites: [
      'Basic familiarity with operating systems and networking concepts',
      'No prior cloud experience required; foundational modules start from scratch',
    ],
    whoShouldEnrol: [
      'Aspiring Cloud Engineers and Solutions Architects',
      'System Administrators moving from on-premise infrastructure to cloud',
      'Software developers looking to deploy and manage their own cloud workloads',
      'IT professionals preparing for real-world enterprise cloud roles',
    ],
    technologies: ['AWS', 'Amazon EC2', 'Amazon S3', 'Amazon VPC', 'AWS Lambda', 'Amazon RDS', 'CloudWatch', 'IAM'],
    learningOutcomes: [
      'Design fault-tolerant, scalable architectures on AWS following the Well-Architected Framework',
      'Provision and configure Virtual Private Clouds (VPC) with public/private subnets and route tables',
      'Deploy and scale compute workloads using EC2 instances, Application Load Balancers, and Auto Scaling',
      'Manage block, file, and object storage across Amazon S3, EBS, and EFS with lifecycle policies',
      'Configure relational databases with automated backups and multi-AZ failover using Amazon RDS',
      'Implement least-privilege identity and access control using AWS IAM roles, policies, and MFA',
      'Monitor application health and configure automated alarms with Amazon CloudWatch',
    ],
    practicalExercises: [
      'Configuring an AWS account with hardened IAM root controls and role-based policies',
      'Building a custom VPC with dual-tier public/private subnets, Internet Gateway, and NAT Gateway',
      'Launching an Auto Scaling Group behind an Application Load Balancer with health checks',
      'Setting up S3 bucket versioning, encryption, and static site hosting with CloudFront',
      'Provisioning a multi-AZ Amazon RDS PostgreSQL instance connected securely to backend compute',
      'Authoring and testing event-driven serverless functions with AWS Lambda and Amazon API Gateway',
    ],
    realWorldProjects: [
      {
        title: 'High-Availability Multi-Tier Web Application Infrastructure',
        description:
          'Design and provision an enterprise-grade cloud topology on AWS. Features public-facing application load balancers, private auto-scaling compute pools, a multi-AZ relational database layer, and automated CloudWatch alarms.',
        deliverables: [
          'Production-ready VPC architecture diagram and provisioning log',
          'Load-tested Auto Scaling policy demonstrating dynamic scale-out',
          'Automated database backup and failover verification report',
          'CloudWatch dashboard monitoring latency, CPU utilization, and 5xx error metrics',
        ],
      },
    ],
    syllabus: [
      {
        id: 'aws-mod-1',
        moduleNumber: 1,
        title: 'Cloud Fundamentals & AWS Global Infrastructure',
        durationEstimate: 'Week 1',
        topics: [
          'Cloud computing deployment models: Public, Private, Hybrid',
          'IaaS, PaaS, and SaaS service classifications',
          'AWS Global Infrastructure: Regions, Availability Zones, and Edge Locations',
          'Shared Responsibility Model and foundational security concepts',
          'AWS Management Console, AWS CLI setup, and SDK overview',
        ],
        practicalExercises: [
          'Setting up an AWS Free Tier account with budget alerts and billing alarms',
          'Installing and configuring AWS CLI with programmatic access keys',
        ],
        learningOutcomes: [
          'Identify suitable AWS regions based on latency, compliance, and cost',
          'Understand cloud security boundaries under the Shared Responsibility Model',
        ],
        technologies: ['AWS Management Console', 'AWS CLI', 'AWS Budgets'],
      },
      {
        id: 'aws-mod-2',
        moduleNumber: 2,
        title: 'AWS Identity and Access Management (IAM)',
        durationEstimate: 'Week 2',
        topics: [
          'IAM Users, User Groups, and Identity Providers',
          'IAM Policies: Managed policies, inline policies, and JSON policy syntax',
          'IAM Roles and temporary security credentials with AWS STS',
          'Multi-Factor Authentication (MFA) and credential rotation',
          'Least-privilege permission boundaries and IAM Access Analyzer',
        ],
        practicalExercises: [
          'Creating granular IAM policies adhering strictly to least privilege',
          'Configuring cross-account or cross-service IAM roles for EC2 instances',
        ],
        learningOutcomes: [
          'Enforce strict administrative governance without sharing root account credentials',
          'Write custom JSON policies with explicit Allow/Deny conditions',
        ],
        technologies: ['AWS IAM', 'AWS STS', 'MFA'],
      },
      {
        id: 'aws-mod-3',
        moduleNumber: 3,
        title: 'Compute Services: EC2, Elastic Load Balancing & Auto Scaling',
        durationEstimate: 'Week 3-4',
        topics: [
          'Amazon EC2 instance types, AMI selection, and purchasing options',
          'EC2 lifecycle, key pairs, and user data bootstrap scripting',
          'Elastic Network Interfaces (ENI) and Elastic IP addresses',
          'Application Load Balancer (ALB) vs Network Load Balancer (NLB)',
          'Target groups, health check routing, and SSL/TLS termination',
          'Auto Scaling Groups (ASG), dynamic scaling policies, and launch templates',
        ],
        practicalExercises: [
          'Bootstrapping a web server automatically using EC2 User Data',
          'Configuring an Application Load Balancer across two Availability Zones',
          'Simulating traffic loads to verify dynamic auto-scaling triggers',
        ],
        learningOutcomes: [
          'Deploy resilient compute workloads capable of self-healing and load distribution',
          'Configure launch templates with automated initialization scripts',
        ],
        technologies: ['Amazon EC2', 'ALB', 'Auto Scaling', 'Linux Shell'],
      },
      {
        id: 'aws-mod-4',
        moduleNumber: 4,
        title: 'Virtual Private Cloud (VPC) & Networking',
        durationEstimate: 'Week 5-6',
        topics: [
          'VPC CIDR block planning and subnet partitioning (Public vs Private)',
          'Internet Gateways, Route Tables, and default routes',
          'NAT Gateways and NAT Instances for outbound private traffic',
          'Security Groups (stateful) vs Network Access Control Lists (NACLs, stateless)',
          'VPC Peering, Transit Gateway concepts, and VPC Endpoints (PrivateLink)',
          'Amazon Route 53 DNS routing policies and domain management',
        ],
        practicalExercises: [
          'Architecting a multi-AZ VPC from scratch without using the VPC Wizard',
          'Isolating backend database instances in strict private subnets with NAT Gateway egress',
          'Configuring Route 53 weighted and failover DNS routing records',
        ],
        learningOutcomes: [
          'Construct enterprise-ready network topologies isolated from the public internet',
          'Troubleshoot network connectivity using VPC Flow Logs and reachability analyzers',
        ],
        technologies: ['Amazon VPC', 'Route 53', 'NAT Gateway', 'Security Groups'],
      },
      {
        id: 'aws-mod-5',
        moduleNumber: 5,
        title: 'Storage Services: S3, EBS, and EFS',
        durationEstimate: 'Week 7',
        topics: [
          'Amazon S3 storage classes: Standard, Intelligent-Tiering, Glacier',
          'S3 Bucket Policies, ACLs, CORS, and Block Public Access controls',
          'S3 lifecycle management, versioning, and cross-region replication',
          'Amazon Elastic Block Store (EBS) volume types, snapshots, and IOPS tuning',
          'Amazon Elastic File System (EFS) for multi-instance shared POSIX file storage',
        ],
        practicalExercises: [
          'Configuring automated S3 lifecycle transitions from Standard to Glacier Flexible Retrieval',
          'Attaching and formatting EBS volumes on running Linux EC2 instances',
          'Mounting an EFS shared filesystem across multiple EC2 instances simultaneously',
        ],
        learningOutcomes: [
          'Select the right storage solution balancing durability, latency, and cost',
          'Enforce strict encryption at rest with AWS KMS and in-transit with TLS',
        ],
        technologies: ['Amazon S3', 'Amazon EBS', 'Amazon EFS', 'AWS KMS'],
      },
      {
        id: 'aws-mod-6',
        moduleNumber: 6,
        title: 'Databases & Serverless Architecture',
        durationEstimate: 'Week 8',
        topics: [
          'Amazon RDS architecture: engines, Multi-AZ deployments, read replicas',
          'Amazon Aurora high-performance relational database concepts',
          'Amazon DynamoDB: NoSQL data modeling, partition keys, global secondary indexes',
          'Serverless computing with AWS Lambda: triggers, runtime, and concurrency',
          'Amazon API Gateway: REST APIs, integration types, and authorization',
        ],
        practicalExercises: [
          'Creating an Amazon RDS instance with automated snapshots and read replica routing',
          'Building a serverless microservice using AWS Lambda and API Gateway',
        ],
        learningOutcomes: [
          'Deploy managed relational and NoSQL databases with zero management overhead',
          'Construct modern event-driven serverless backends',
        ],
        technologies: ['Amazon RDS', 'Amazon Aurora', 'Amazon DynamoDB', 'AWS Lambda', 'API Gateway'],
      },
      {
        id: 'aws-mod-7',
        moduleNumber: 7,
        title: 'Monitoring, Security & Infrastructure Automation',
        durationEstimate: 'Week 9',
        topics: [
          'Amazon CloudWatch: Metrics, Alarms, Logs Insights, and composite alarms',
          'AWS CloudTrail for governance, compliance, and API auditing',
          'AWS Trusted Advisor and Cost Explorer for optimization',
          'Introduction to Infrastructure as Code with AWS CloudFormation templates',
        ],
        practicalExercises: [
          'Creating custom CloudWatch alarms that trigger SNS email alerts on high CPU',
          'Querying CloudTrail logs to identify unauthorized API requests',
          'Deploying a basic VPC and EC2 stack using a declarative CloudFormation template',
        ],
        learningOutcomes: [
          'Establish operational observability and audit trails across cloud workloads',
          'Understand declarative infrastructure definition and repeatable deployments',
        ],
        technologies: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS SNS', 'AWS CloudFormation'],
      },
      {
        id: 'aws-mod-8',
        moduleNumber: 8,
        title: 'Production Capstone Lab & Review',
        durationEstimate: 'Week 10',
        topics: [
          'Architecture review and Well-Architected Framework assessment',
          'Hands-on deployment of the High-Availability Multi-Tier Web Application',
          'Disaster recovery strategies: Backup & Restore, Pilot Light, Warm Standby',
          'Cost optimization review and cleanup procedures',
        ],
        practicalExercises: [
          'Executing the end-to-end multi-tier production capstone deployment',
          'Conducting a simulated AZ outage test to verify uninterrupted service',
        ],
        learningOutcomes: [
          'Deliver an audited, secure, production-grade cloud infrastructure on AWS',
          'Present a comprehensive architectural overview with cost and security justification',
        ],
        technologies: ['AWS Architecture', 'Load Balancer', 'Auto Scaling', 'RDS Multi-AZ'],
      },
    ],
    toolsAndPlatforms: ['AWS Console', 'AWS CLI', 'Linux Terminal', 'Visual Studio Code', 'Git'],
    trainerGuidanceNote:
      'All lab sessions are guided step-by-step by AWS-certified practitioners with active production experience. Students work in authentic cloud environments rather than pre-rendered simulations.',
    faqs: [
      {
        question: 'Do I need prior programming experience for the AWS course?',
        answer:
          'No prior programming expertise is required. Basic familiarity with computer systems and general networking is helpful. Fundamental concepts are introduced progressively from module one.',
      },
      {
        question: 'Will I be working on live AWS accounts?',
        answer:
          'Yes. All practical exercises are conducted inside real AWS environments using free-tier and cost-budgeted accounts with instructor guidance on cost monitoring.',
      },
      {
        question: 'Does this course prepare me for AWS certifications?',
        answer:
          'The course emphasizes practical, operational competencies aligned with the AWS Certified Solutions Architect – Associate syllabus. While real-world application is our primary focus, the topics directly cover core certification domains.',
      },
    ],
  },
  {
    id: 'devops-engineering',
    slug: 'devops-engineering',
    title: 'DevOps Engineering',
    category: 'DevOps',
    headline: 'Master GitOps, CI/CD Automation, Container Orchestration, and Cloud Infrastructure',
    summary:
      'An end-to-end practical DevOps engineering program focusing on Linux, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, and Prometheus/Grafana observability.',
    description:
      'Bridge the gap between software development and production operations. Master modern automated delivery pipelines, containerize microservices, orchestrate high-availability clusters with Kubernetes, write Infrastructure as Code with Terraform, and configure enterprise monitoring.',
    level: 'Intermediate to Advanced',
    deliveryMode: 'Practical Guided Lab',
    prerequisites: [
      'Basic command-line familiarity and general software concepts',
      'Understanding of basic web architecture or scripting is beneficial',
    ],
    whoShouldEnrol: [
      'Developers wishing to master deployment pipelines and cloud infrastructure',
      'System Administrators and QA engineers transitioning into DevOps & SRE roles',
      'Technical leads looking to establish automated CI/CD and GitOps standards',
      'Engineering graduates seeking verified hands-on operational experience',
    ],
    technologies: [
      'Linux',
      'Git',
      'GitHub',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'Prometheus',
      'Grafana',
      'AWS EKS',
    ],
    learningOutcomes: [
      'Operate Linux server environments comfortably with bash scripting and systemd management',
      'Build automated multi-stage CI/CD pipelines with GitHub Actions and Jenkins',
      'Package complex microservices into secure, minimal Docker containers',
      'Deploy and scale production workloads using Kubernetes deployments, services, ingress, and configmaps',
      'Provision cloud infrastructure deterministically using declarative Terraform code and remote state',
      'Configure Prometheus scrapers, Alertmanager rules, and rich Grafana observability dashboards',
      'Implement GitOps workflows with automated rollback and drift detection',
    ],
    practicalExercises: [
      'Writing automated Linux shell scripts for system maintenance and health auditing',
      'Creating GitHub Actions workflows with automated linting, unit testing, and Docker image builds',
      'Authoring multi-stage Dockerfiles optimizing image size and vulnerability surface',
      'Deploying a stateful web application with PostgreSQL to a Kubernetes cluster using Helm',
      'Writing Terraform modules to provision AWS networking and compute infrastructure',
      'Configuring Prometheus scraping endpoints and designing real-time Grafana monitoring boards',
    ],
    realWorldProjects: [
      {
        title: 'End-to-End Automated GitOps Deployment to Kubernetes',
        description:
          'Construct an automated delivery pipeline where every git push triggers automated validation, container packaging, security scanning, and declarative deployment to a managed Kubernetes cluster with real-time telemetry.',
        deliverables: [
          'Modular Terraform repository provisioning cloud infrastructure',
          'Production Dockerfiles with multi-stage caching and non-root users',
          'CI/CD pipeline configuration files with automated status checks',
          'Kubernetes Helm chart repository with ingress and secret management',
          'Live Grafana dashboard displaying cluster CPU, memory, and ingress latency',
        ],
      },
    ],
    syllabus: [
      {
        id: 'devops-mod-1',
        moduleNumber: 1,
        title: 'Linux Fundamentals & Shell Scripting',
        durationEstimate: 'Week 1',
        topics: [
          'Linux architecture, filesystem hierarchy standard (FHS), and file permissions',
          'User and group administration, sudo privileges, and SSH key management',
          'Process management: ps, top, kill, systemctl, and journalctl',
          'Network diagnostics: netstat, ss, curl, dig, traceroute, and ufw firewalls',
          'Bash scripting: variables, conditionals, loops, functions, and exit codes',
        ],
        practicalExercises: [
          'Hardening a Linux server, configuring SSH key authentication and firewall rules',
          'Writing an automated log-rotation and disk-alert bash script',
        ],
        learningOutcomes: [
          'Confidently navigate and administer remote production Linux servers',
          'Automate repetitive operational checks using modular bash scripts',
        ],
        technologies: ['Linux CLI', 'Bash', 'systemd', 'SSH'],
      },
      {
        id: 'devops-mod-2',
        moduleNumber: 2,
        title: 'Version Control with Git & GitHub Collaboration',
        durationEstimate: 'Week 2',
        topics: [
          'Git internals: commits, trees, blobs, and the staging environment',
          'Branching models: Trunk-Based Development vs Git Flow',
          'Merge conflicts resolution, interactive rebasing, and cherry-picking',
          'GitHub workflows: Pull Requests, code reviews, branch protection rules',
          'Git hooks and semantic versioning automation',
        ],
        practicalExercises: [
          'Simulating complex multi-branch merge conflicts and resolving them clean',
          'Setting up repository branch protection rules requiring status checks before merge',
        ],
        learningOutcomes: [
          'Maintain clean git histories and enforce strict pull-request review standards',
          'Collaborate effectively in distributed engineering teams',
        ],
        technologies: ['Git', 'GitHub', 'Markdown'],
      },
      {
        id: 'devops-mod-3',
        moduleNumber: 3,
        title: 'Containerization with Docker',
        durationEstimate: 'Week 3-4',
        topics: [
          'Container concepts vs virtual machines; Linux namespaces and cgroups',
          'Docker architecture: Engine, daemon, client, and registries',
          'Authoring Dockerfiles: instructions, layers, caching, and multi-stage builds',
          'Container networking: bridge, host, and overlay networks',
          'Docker volumes, bind mounts, and persistent storage management',
          'Multi-container applications using Docker Compose',
        ],
        practicalExercises: [
          'Converting a monolithic Node.js/Python application into optimized Docker containers',
          'Writing multi-stage Dockerfiles reducing image size from 1GB to 80MB',
          'Orchestrating a full-stack app with database and Redis cache via Docker Compose',
        ],
        learningOutcomes: [
          'Package any application into reproducible, immutable container images',
          'Eliminate "works on my machine" discrepancies across environments',
        ],
        technologies: ['Docker', 'Docker Compose', 'Docker Hub'],
      },
      {
        id: 'devops-mod-4',
        moduleNumber: 4,
        title: 'Continuous Integration & Continuous Delivery (CI/CD)',
        durationEstimate: 'Week 5-6',
        topics: [
          'CI/CD core principles: fast feedback, automated testing, continuous delivery',
          'Jenkins setup: master-agent architecture, credentials, and plugins',
          'Jenkinsfile pipeline syntax: Declarative vs Scripted pipelines',
          'GitHub Actions: workflows, events, jobs, steps, runners, and actions',
          'Automated linting, unit testing, container build, and artifact publishing',
          'Deployment strategies: Rolling updates, Blue/Green, and Canary releases',
        ],
        practicalExercises: [
          'Building a full GitHub Actions workflow running tests and pushing images to Docker Hub',
          'Configuring a Jenkins declarative pipeline with stage gates and Slack notifications',
        ],
        learningOutcomes: [
          'Design automated delivery pipelines from code commit through to container registry',
          'Incorporate quality checks and automated security scanners into build cycles',
        ],
        technologies: ['GitHub Actions', 'Jenkins', 'Docker Registry'],
      },
      {
        id: 'devops-mod-5',
        moduleNumber: 5,
        title: 'Container Orchestration with Kubernetes',
        durationEstimate: 'Week 7-8',
        topics: [
          'Kubernetes architecture: Control Plane, worker nodes, kubelet, and etcd',
          'Kubernetes primitives: Pods, ReplicaSets, Deployments, and DaemonSets',
          'Service types: ClusterIP, NodePort, LoadBalancer, and Ingress Controllers',
          'Configuring environments with ConfigMaps and Secrets',
          'Persistent Volumes (PV), Persistent Volume Claims (PVC), and StorageClasses',
          'Package management using Helm charts',
        ],
        practicalExercises: [
          'Deploying a microservices application on Kubernetes with zero downtime updates',
          'Configuring an Ingress controller with host-based and path-based routing',
          'Creating and publishing a custom Helm chart for parameterized releases',
        ],
        learningOutcomes: [
          'Manage distributed container workloads across production Kubernetes clusters',
          'Enforce declarative cluster state and automated container recovery',
        ],
        technologies: ['Kubernetes', 'kubectl', 'Helm', 'Nginx Ingress'],
      },
      {
        id: 'devops-mod-6',
        moduleNumber: 6,
        title: 'Cloud Integration & Managed Kubernetes (AWS EKS)',
        durationEstimate: 'Week 9',
        topics: [
          'Amazon Elastic Kubernetes Service (EKS) architecture and node groups',
          'Amazon Elastic Container Registry (ECR) for secure image hosting',
          'IAM Roles for Service Accounts (IRSA) for granular pod security',
          'AWS Load Balancer Controller for Kubernetes ingress automation',
        ],
        practicalExercises: [
          'Provisioning a managed EKS cluster and configuring local kubectl context',
          'Deploying an ingress resource that automatically provisions an AWS ALB',
        ],
        learningOutcomes: [
          'Integrate cloud identity with Kubernetes service accounts securely',
          'Deploy enterprise container workloads on managed hyperscaler infrastructure',
        ],
        technologies: ['AWS EKS', 'AWS ECR', 'IRSA', 'kubectl'],
      },
      {
        id: 'devops-mod-7',
        moduleNumber: 7,
        title: 'Infrastructure as Code (IaC) with Terraform',
        durationEstimate: 'Week 10',
        topics: [
          'Infrastructure as Code principles and declarative configuration',
          'Terraform core concepts: providers, resources, data sources, and variables',
          'Terraform state management: remote backend, state locking with S3 and DynamoDB',
          'Authoring reusable Terraform modules and managing multi-environment layouts',
          'Terraform plan, apply, destroy lifecycle, and drift management',
        ],
        practicalExercises: [
          'Provisioning an AWS VPC, subnets, and EC2 instances entirely using Terraform',
          'Configuring a secure S3 remote backend with DynamoDB state locking',
          'Refactoring monolithic Terraform code into reusable modules',
        ],
        learningOutcomes: [
          'Version-control physical and cloud infrastructure alongside software code',
          'Prevent configuration drift through declarative infrastructure manifests',
        ],
        technologies: ['Terraform', 'HCL', 'AWS S3', 'DynamoDB'],
      },
      {
        id: 'devops-mod-8',
        moduleNumber: 8,
        title: 'Monitoring, Observability & GitOps Capstone',
        durationEstimate: 'Week 11-12',
        topics: [
          'The Three Pillars of Observability: Metrics, Logs, and Traces',
          'Prometheus architecture: scraping, time-series database, and PromQL',
          'Grafana dashboards: panels, data source connections, and visual alerts',
          'Alertmanager: routing, deduplication, and notification webhooks',
          'GitOps principles: Git as the single source of truth and automated reconciliation',
          'Final Capstone Project implementation and peer review',
        ],
        practicalExercises: [
          'Deploying Prometheus and Grafana stack to Kubernetes using Prometheus-Operator',
          'Building custom Grafana dashboards tracking p99 request latency and error rates',
          'Connecting Alertmanager to broadcast immediate alerts to Discord/Slack',
        ],
        learningOutcomes: [
          'Implement enterprise monitoring and alerting across containerized applications',
          'Deliver an audited end-to-end GitOps continuous delivery workflow',
        ],
        technologies: ['Prometheus', 'Grafana', 'Alertmanager', 'PromQL'],
      },
    ],
    toolsAndPlatforms: ['Linux', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana'],
    trainerGuidanceNote:
      'All DevOps sessions prioritize hands-on command-line competence and production architecture. Trainers conduct live code reviews on Terraform modules and CI/CD pipeline configurations.',
    faqs: [
      {
        question: 'Is Linux experience required before starting the DevOps course?',
        answer:
          'No prior Linux mastery is required. The first two modules build complete comfort with command-line operations, shell scripting, and systems administration from foundational principles.',
      },
      {
        question: 'Will we learn both Jenkins and GitHub Actions?',
        answer:
          'Yes. Both platforms are taught thoroughly. GitHub Actions provides modern declarative cloud-native pipelines, while Jenkins ensures readiness for enterprise legacy and on-premise environments.',
      },
      {
        question: 'How much AWS knowledge is included?',
        answer:
          'The course includes dedicated modules on cloud integration, including AWS EKS, ECR, remote Terraform backends on S3, and AWS IAM role federation.',
      },
    ],
  },
  {
    id: 'agentic-ai-automation',
    slug: 'agentic-ai-automation',
    title: 'Agentic AI & AI Automation',
    category: 'AI & Automation',
    headline: 'Build Autonomous Multi-Agent Systems, RAG Pipelines, and Intelligent Automation Workflows',
    summary:
      'A cutting-edge curriculum focusing on Python, LLM API integration, autonomous agent architectures, Retrieval-Augmented Generation (RAG), vector databases, and multi-agent coordination.',
    description:
      'Move beyond simple prompt engineering. Learn to build production AI agents capable of autonomous reasoning, external tool execution, memory retention, document retrieval with RAG, and coordinated multi-agent task execution using modern frameworks.',
    level: 'Intermediate to Advanced',
    deliveryMode: 'Practical Guided Lab',
    prerequisites: [
      'Basic programming knowledge in Python or another modern language',
      'Familiarity with JSON and basic REST API concepts',
    ],
    whoShouldEnrol: [
      'Software engineers looking to integrate autonomous AI agents into real applications',
      'Automation engineers transitioning from static scripting to intelligent workflows',
      'Technical product builders aiming to leverage LLMs for proprietary knowledge systems',
      'Developers wanting to master LangChain, LangGraph, CrewAI, and vector search',
    ],
    technologies: [
      'Python',
      'Generative AI',
      'OpenAI API',
      'Gemini API',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'Vector Databases',
      'ChromaDB / Pinecone',
      'FastAPI',
    ],
    learningOutcomes: [
      'Master modern Python scripting, asynchronous execution, and API integration',
      'Implement prompt engineering, structured outputs, and function-calling protocols with LLMs',
      'Build autonomous reasoning loops using the ReAct (Reason + Act) design pattern',
      'Construct production RAG pipelines with text chunking, embeddings, and vector similarity search',
      'Orchestrate stateful multi-agent workflows with LangGraph and CrewAI',
      'Implement evaluation benchmarks, safety guardrails, and token cost controls',
      'Deploy containerized AI agent services with FastAPI and Docker',
    ],
    practicalExercises: [
      'Consuming LLM APIs with streaming responses and Pydantic structured output validation',
      'Building a custom Python tool that gives an LLM the ability to query live external APIs',
      'Constructing a local RAG system indexing internal PDFs and technical markdown documents',
      'Authoring a multi-agent workflow where specialized agents research, draft, and critique code',
      'Deploying an agentic API backend using FastAPI with asynchronous request streaming',
    ],
    realWorldProjects: [
      {
        title: 'Autonomous Research & Code-Review Agent System',
        description:
          'Design and deploy an intelligent multi-agent system that analyzes code repositories, identifies architectural vulnerabilities, queries internal documentation via RAG, and generates verified pull-request reviews with tool-assisted testing.',
        deliverables: [
          'LangGraph stateful workflow definition with human-in-the-loop review nodes',
          'Optimized vector retrieval pipeline with hybrid search and re-ranking',
          'FastAPI containerized service exposing streaming agent endpoints',
          'Evaluation test suite measuring retrieval accuracy and hallucination rates',
        ],
      },
    ],
    syllabus: [
      {
        id: 'ai-mod-1',
        moduleNumber: 1,
        title: 'Python for AI Engineers & Asynchronous Workflows',
        durationEstimate: 'Week 1',
        topics: [
          'Modern Python programming patterns: typing, dataclasses, and Pydantic',
          'Asynchronous programming with asyncio and concurrent API execution',
          'Virtual environment management with Poetry and uv',
          'Consuming REST APIs and parsing structured JSON data',
          'Error handling, retry logic with exponential backoff, and logging',
        ],
        practicalExercises: [
          'Building an async data consumer that queries external web APIs concurrently',
          'Creating Pydantic schemas validating complex nested API responses',
        ],
        learningOutcomes: [
          'Write idiomatic, type-safe Python code suitable for high-throughput AI backends',
          'Handle network latency and rate limits gracefully with asynchronous tasks',
        ],
        technologies: ['Python 3.12+', 'Pydantic', 'asyncio', 'HTTPX'],
      },
      {
        id: 'ai-mod-2',
        moduleNumber: 2,
        title: 'Generative AI Fundamentals & LLM Integration',
        durationEstimate: 'Week 2',
        topics: [
          'Large Language Model architecture: tokens, context windows, and sampling parameters',
          'Prompt engineering strategies: few-shot prompting, chain-of-thought, and system instructions',
          'Working with OpenAI, Anthropic, and Google Gemini API interfaces',
          'Enforcing structured outputs with JSON schema and tool definitions',
          'Token counting, latency measurement, and API cost estimation',
        ],
        practicalExercises: [
          'Writing structured prompt templates that reliably extract tabular entities from unstructured text',
          'Benchmarking temperature, top-p, and frequency penalty effects on output determinism',
        ],
        learningOutcomes: [
          'Interact with leading commercial and open-weight LLMs via standardized SDKs',
          'Guarantee deterministic, machine-readable JSON outputs from non-deterministic models',
        ],
        technologies: ['OpenAI SDK', 'Gemini SDK', 'Tiktoken', 'Prompt Design'],
      },
      {
        id: 'ai-mod-3',
        moduleNumber: 3,
        title: 'Tool Calling & The ReAct Agent Pattern',
        durationEstimate: 'Week 3-4',
        topics: [
          'How models execute tools: function calling specifications and execution loops',
          'The ReAct (Reasoning + Acting) loop: Thought, Action, Action Input, Observation',
          'Building custom tools: web search, database querying, and file system manipulation',
          'Agent memory: short-term buffer memory, conversational summaries, and sliding windows',
          'Handling tool execution failures and self-correcting error recovery',
        ],
        practicalExercises: [
          'Implementing a ReAct agent from scratch in pure Python without third-party frameworks',
          'Equipping an agent with calculator, weather, and database query tools to answer complex requests',
        ],
        learningOutcomes: [
          'Understand the foundational mechanics of tool-augmented AI agents',
          'Implement resilient autonomous loops that recover from failed tool executions',
        ],
        technologies: ['Python', 'Function Calling', 'JSON Schema', 'Tool Loops'],
      },
      {
        id: 'ai-mod-4',
        moduleNumber: 4,
        title: 'Retrieval-Augmented Generation (RAG) & Vector Databases',
        durationEstimate: 'Week 5-6',
        topics: [
          'The RAG architecture: overcoming knowledge cutoffs and hallucination',
          'Text chunking strategies: character-based, recursive, semantic, and markdown chunking',
          'Embedding models: vector representation, dimensions, and cosine similarity',
          'Vector databases: ChromaDB, Pinecone, and pgvector concepts',
          'Hybrid search: combining semantic vector search with BM25 keyword matching',
          'Context window management, re-ranking with Cohere, and citations',
        ],
        practicalExercises: [
          'Ingesting a repository of technical PDF documentation into a vector database',
          'Building an interactive question-answering CLI that returns verbatim source citations',
          'Comparing chunking strategies to measure retrieval accuracy',
        ],
        learningOutcomes: [
          'Construct end-to-end RAG pipelines over private corporate knowledge bases',
          'Optimize retrieval quality using hybrid search and re-ranking algorithms',
        ],
        technologies: ['Vector Databases', 'ChromaDB', 'Embeddings', 'LangChain'],
      },
      {
        id: 'ai-mod-5',
        moduleNumber: 5,
        title: 'Modern Agent Frameworks: LangChain & LangGraph',
        durationEstimate: 'Week 7-8',
        topics: [
          'LangChain core abstractions: models, prompts, output parsers, and chains',
          'LangGraph: stateful multi-actor applications modeled as directed cyclic graphs',
          'Graph nodes, edges, conditional routing, and global state machines',
          'Human-in-the-loop workflows: breakpoints, approval gates, and state updates',
          'Time travel and persistence: restoring graph state from checkpoints',
        ],
        practicalExercises: [
          'Building a multi-step document writing pipeline in LangGraph with human review gates',
          'Implementing a cyclic code-generation agent that tests and repairs its own code',
        ],
        learningOutcomes: [
          'Design reliable, stateful agent workflows with deterministic control flow',
          'Integrate human approvals seamlessly into autonomous processes',
        ],
        technologies: ['LangChain', 'LangGraph', 'StateGraph', 'Python'],
      },
      {
        id: 'ai-mod-6',
        moduleNumber: 6,
        title: 'Multi-Agent Collaboration with CrewAI & AutoGen',
        durationEstimate: 'Week 9',
        topics: [
          'Multi-agent systems: division of labor, role playing, and goal alignment',
          'CrewAI: Agents, Tasks, Tools, and Process management (sequential and hierarchical)',
          'Delegation, inter-agent messaging, and manager agent supervision',
          'Avoiding infinite loops and convergence criteria in multi-agent chatter',
        ],
        practicalExercises: [
          'Configuring a collaborative crew: Researcher Agent, Technical Writer Agent, and Editor Agent',
          'Executing an automated market intelligence analysis with delegated sub-tasks',
        ],
        learningOutcomes: [
          'Orchestrate teams of specialized autonomous agents collaborating toward common outcomes',
          'Configure role boundaries and task dependencies effectively',
        ],
        technologies: ['CrewAI', 'Multi-Agent Systems', 'Python'],
      },
      {
        id: 'ai-mod-7',
        moduleNumber: 7,
        title: 'Evaluation, Observability & Guardrails',
        durationEstimate: 'Week 10',
        topics: [
          'Evaluating LLM applications: Ragas metrics (Faithfulness, Answer Relevance, Context Precision)',
          'AI observability and tracing: monitoring latency, token usage, and execution paths',
          'Security & Safety: Prompt injection mitigation, sensitive data redaction, and guardrails',
          'Rate limiting, fallback models, and circuit breakers in production',
        ],
        practicalExercises: [
          'Configuring an automated evaluation pipeline measuring hallucination scores on 50 test questions',
          'Implementing an input guardrail detecting and rejecting prompt injection attempts',
        ],
        learningOutcomes: [
          'Quantify AI application quality with automated evaluation benchmarks',
          'Secure AI systems against adversarial prompts and data leakage',
        ],
        technologies: ['Ragas', 'Guardrails AI', 'OpenTelemetry', 'Python'],
      },
      {
        id: 'ai-mod-8',
        moduleNumber: 8,
        title: 'Production Deployment & Capstone Delivery',
        durationEstimate: 'Week 11-12',
        topics: [
          'Building production REST & SSE streaming endpoints using FastAPI',
          'Packaging AI agent workflows into lightweight Docker containers',
          'Handling long-running background tasks with Celery or Redis queues',
          'Capstone project presentation and comprehensive code review',
        ],
        practicalExercises: [
          'Containerizing the full agentic RAG application with Docker and Docker Compose',
          'Benchmarking streaming response latency under simulated client loads',
        ],
        learningOutcomes: [
          'Deploy production-ready, containerized AI agent services to cloud infrastructure',
          'Provide responsive streaming user experiences for multi-step agent reasoning',
        ],
        technologies: ['FastAPI', 'Docker', 'Redis', 'Uvicorn'],
      },
    ],
    toolsAndPlatforms: ['Python 3.12+', 'VS Code', 'Docker', 'ChromaDB', 'LangGraph', 'CrewAI', 'FastAPI', 'Git'],
    trainerGuidanceNote:
      'Sessions are led by experienced AI engineers who build production LLM systems. Students learn real software engineering discipline applied to generative models, rather than superficial prompts.',
    faqs: [
      {
        question: 'Do I need a strong background in Machine Learning and Mathematics?',
        answer:
          'No advanced calculus or linear algebra is necessary. The course focuses on applied AI engineering—utilizing foundational models, APIs, agent architectures, and vector search to construct functioning systems.',
      },
      {
        question: 'Are API credits provided during the lab sessions?',
        answer:
          'Students are guided on how to leverage free tiers, local open-weight models (via Ollama), and cost-effective cloud endpoints with built-in token usage controls.',
      },
      {
        question: 'What is the primary language used throughout the course?',
        answer:
          'The entire course is taught in Python, utilizing standard typing, modern async patterns, and production frameworks.',
      },
    ],
  },
];
