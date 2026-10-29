import type { SuccessStory, VideoTestimonial } from '../types';

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Karthik Raja',
    studentInitials: 'K. R.',
    targetRole: 'Azure DevOps & Platform Engineer',
    courseCompleted: 'AI-Powered Azure DevOps',
    courseSlug: 'ai-powered-azure-devops',
    accentColor: 'blue',
    whatsappScreenshotUrl: '',
    chatTime: 'Yesterday, 8:42 PM',
    placementOffer: '🎉 Selected as Azure DevOps Engineer',
    chatSnippet:
      'Hi Sir! Happy to share that I got selected as Azure DevOps Platform Engineer at TCS! 🚀 The hands-on AKS cluster provisioning and multi-stage YAML pipelines we practiced in class was asked directly in round 2! Thank you so much team 6F!',
    background: 'Former QA Automation Engineer',
    coreAchievement: 'Orchestrating production AKS clusters on Azure with GitHub Copilot-accelerated release pipelines.',
    summary:
      'Mastered Azure Kubernetes Service provisioning, multi-stage Azure Pipelines, and Copilot AI automation. The guided hands-on labs gave me the exact depth required to manage enterprise release workloads.',
    projectCompleted: 'Automated AI-Assisted Azure DevOps & AKS Pipeline',
    keySkillsGained: ['AKS & Kubernetes', 'Azure Pipelines', 'Terraform & Bicep', 'GitHub Copilot'],
    capstoneSpecs: ['Azure AKS v1.30', 'Azure Pipelines YAML', 'GitHub Copilot'],
    isProvisionalPlaceholder: true,
  },
  {
    id: 'story-2',
    name: 'Arun Prakash',
    studentInitials: 'A. P.',
    targetRole: 'AWS Cloud & DevOps Architect',
    courseCompleted: 'AI-Powered AWS DevOps',
    courseSlug: 'ai-powered-aws-devops',
    accentColor: 'green',
    whatsappScreenshotUrl: '',
    chatTime: 'Today, 11:15 AM',
    placementOffer: '🏆 Cleared AWS Architect Final Round',
    chatSnippet:
      'Good morning sir! Cleared the final architectural round for AWS Cloud Engineer role! The interviewers were very impressed with the multi-tier VPC, Auto-Scaling & Terraform IaC capstone project. Offer letter expected this week! 🙏',
    background: 'Computer Science Graduate',
    coreAchievement: 'Architected multi-tier fault-tolerant AWS topology with Amazon Q Developer security audits and multi-AZ RDS.',
    summary:
      'Architected high-availability AWS VPC topologies with auto-scaling compute groups, Amazon Q code analysis, and multi-AZ RDS. Building live AWS infrastructure was an absolute game changer.',
    projectCompleted: 'Enterprise High-Availability Multi-Tier AWS Infrastructure',
    keySkillsGained: ['AWS VPC Architecture', 'Auto Scaling & ALB', 'Terraform IaC', 'Amazon Q Developer'],
    capstoneSpecs: ['Dual-AZ VPC', 'Auto-Scaling EC2', 'Multi-AZ RDS'],
    isProvisionalPlaceholder: true,
  },
  {
    id: 'story-3',
    name: 'Sneha Venkatesh',
    studentInitials: 'S. V.',
    targetRole: 'AIOps & Site Reliability Engineer',
    courseCompleted: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    courseSlug: 'ai-powered-aiops',
    accentColor: 'teal',
    whatsappScreenshotUrl: '',
    chatTime: 'Monday, 6:30 PM',
    placementOffer: '💼 14 LPA Package • SRE Role',
    chatSnippet:
      'Sir, finally switched to SRE & AIOps! 14 LPA package. The OpenTelemetry and LangGraph autonomous incident triage bot gave me a huge edge over other candidates. So grateful to 6F IT School!',
    background: 'Backend Python Developer',
    coreAchievement: 'Engineered autonomous incident triage and root-cause analysis agents using OpenTelemetry and LangGraph.',
    summary:
      'Moved from manual incident response to building autonomous telemetry triage agents with LangGraph and Prometheus. Deploying self-healing Kubernetes remediation bots was incredible.',
    projectCompleted: 'Autonomous AIOps Incident Detection & Triage Engine',
    keySkillsGained: ['OpenTelemetry & Prometheus', 'ML Anomaly Detection', 'LangGraph Agents', 'Self-Healing Workflows'],
    capstoneSpecs: ['OpenTelemetry TSDB', 'LangGraph Graphs', 'Kubernetes Operator'],
    isProvisionalPlaceholder: true,
  },
  {
    id: 'story-4',
    name: 'Pooja Nandakumar',
    studentInitials: 'P. N.',
    targetRole: 'Cloud DevOps Engineer',
    courseCompleted: 'AI-Powered AWS DevOps',
    courseSlug: 'ai-powered-aws-devops',
    accentColor: 'rose',
    whatsappScreenshotUrl: '',
    chatTime: 'Yesterday, 9:05 PM',
    placementOffer: '🚀 Cognizant Offer Received',
    chatSnippet:
      'Hi sir, got the offer letter from Cognizant for Cloud DevOps! The automated GitHub Actions and Docker container labs helped me answer every production scenario question with confidence! Thank you 6F team!',
    background: 'Former Systems Administrator',
    coreAchievement: 'Automated AWS infrastructure with Terraform and built GitHub Actions CI/CD with CloudWatch AI anomaly detection.',
    summary:
      'Standardized multi-environment infrastructure on AWS with Terraform and built automated GitHub Actions pipelines with AI-assisted security linting.',
    projectCompleted: 'AI-Accelerated GitOps CI/CD Microservices Pipeline',
    keySkillsGained: ['Terraform IaC', 'AWS EKS & ECR', 'GitHub Actions', 'CloudWatch Anomaly Alerts'],
    capstoneSpecs: ['Terraform IaC', 'GitHub Actions', 'Amazon EKS'],
    isProvisionalPlaceholder: true,
  },
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'video-1',
    studentNameOrCode: 'Azure DevOps Graduate Spotlight',
    courseTitle: 'AI-Powered Azure DevOps',
    batchOrYear: 'Practical Lab Batch 2026',
    duration: '3:45',
    thumbnailUrl: '',
    transcriptSnippet:
      '"The practical lab exercises were game changers. Instead of watching lectures, we spent our evenings provisioning actual Azure AKS clusters, configuring multi-stage Azure Pipelines, and utilizing GitHub Copilot for pipeline automation."',
    isPlaceholder: true,
  },
  {
    id: 'video-2',
    studentNameOrCode: 'AWS Cloud DevOps Journey',
    courseTitle: 'AI-Powered AWS DevOps',
    batchOrYear: 'Cloud Systems Cohort 2026',
    duration: '4:12',
    thumbnailUrl: '',
    transcriptSnippet:
      '"The focus on real AWS architectures gave me genuine confidence. Designing VPC subnets, Terraform modules, and Amazon Q automated security audits prepared me directly for real engineering interviews."',
    isPlaceholder: true,
  },
  {
    id: 'video-3',
    studentNameOrCode: 'AIOps Engineering Alum',
    courseTitle: 'AI-Powered AIOps (Artificial Intelligence for IT Operations)',
    batchOrYear: 'AIOps Cohort 2026',
    duration: '2:58',
    thumbnailUrl: '',
    transcriptSnippet:
      '"Building autonomous telemetry anomaly detectors and self-healing bots with LangGraph set this apart from theoretical courses. You actually connect Prometheus metrics and execute automated pod remediations."',
    isPlaceholder: true,
  },
];
