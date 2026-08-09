export const contact = {
  name: 'Derick Omondi',
  role: 'Junior DevOps Engineer',
  email: 'derickomondi591@gmail.com',
  github: 'https://github.com/rico-del',
  linkedin: 'https://www.linkedin.com/in/derick-omondi-254a7725b/',
  location: 'Nairobi, Kenya',
  resume: '/resume.pdf',
};

export const about = {
  summary:
    'I am building practical DevOps work around real infrastructure and application delivery. My current focus is Terraform, AWS, Docker-based deployment, IAM and SSM access patterns, and CI/CD for web and backend services.',
};

export const stats = [
  { value: 3, suffix: '', label: 'featured project repos' },
  { value: 6, suffix: '', label: 'Terraform modules' },
  { value: 3, suffix: '', label: 'deployment tiers' },
  { value: 3, suffix: '', label: 'GitHub workflow families' },
];

export const terminalLines = [
  { prompt: 'terraform', command: 'terraform plan -out=plan.tfplan' },
  { prompt: 'iam', command: 'policy-as-code · least-privilege access' },
  { prompt: 'docker', command: 'docker compose config' },
  { prompt: 'ssm', command: 'aws ssm send-command --instance-ids i-...' },
  { prompt: 'ci', command: 'trivy image --severity HIGH,CRITICAL' },
];

export const featuredProjects = [
  {
    id: 'munch',
    title: 'Munch Catering Marketplace',
    description:
      'A full-stack catering marketplace with a FastAPI backend, Expo frontend, MongoDB-backed data model, Docker Compose deployment, and AWS EC2 delivery flow.',
    accent: '#4f46e5',
    techStack: ['FastAPI', 'Expo', 'Docker Compose', 'MongoDB', 'AWS EC2', 'GitHub Actions', 'Nginx'],
    achievements: [
      'Built the backend for authentication, caterer profiles, quote requests, bookings, messaging, portfolio uploads, and payment initiation.',
      'Containerized the frontend and backend for a three-tier deployment with a web proxy, API service, and MongoDB container.',
      'Set up CI checks for frontend build and linting, backend tests, Docker validation, image scanning, and manual EC2 deployment through AWS Systems Manager.',
    ],
    liveDemo: '#',
    repository: 'https://github.com/rico-del/Munch_Catering',
gradFrom: '#eef2ff',
    gradVia: '#f8faff',
    gradTo: '#c7d2fe',
  },
  {
    id: 'terraform',
    title: 'Terraform Infrastructure',
    description:
      'A modular Terraform project for AWS networking, compute, IAM, SSM, and monitoring. It also includes policy-as-code assets for least-privilege GitHub Actions automation.',
    accent: '#2563eb',
    techStack: ['Terraform', 'AWS', 'VPC', 'IAM', 'EC2', 'SSM', 'GitHub Actions', 'Policy as Code'],
    achievements: [
      'Implemented reusable Terraform modules for networking, security groups, EC2, IAM, SSM parameters, and optional CloudWatch logging.',
      'Used AWS Systems Manager Session Manager and scoped IAM policies so access stays more controlled than public SSH.',
      'Documented policy-as-code for GitHub Actions permissions and validated the stack with Terraform fmt, validate, plan, and Checkov-based checks.',
    ],
    liveDemo: '#',
    repository: 'https://github.com/rico-del/Terraform',
    gradFrom: '#eff6ff',
    gradVia: '#f8fbff',
    gradTo: '#bfdbfe',
  },
  {
    id: 'scripts',
    title: 'WSL Backup Scripts',
    description:
      'A low-overhead, Git-backed backup and recovery workflow for WSL and project workspaces, with parallel Bash and Python implementations and SSH-based offsite mirroring.',
    accent: '#0f766e',
    techStack: ['Bash', 'Python', 'Git', 'SSH', 'Cron-free watcher', 'Lock files'],
    achievements: [
      'Built offline-to-online detection with DNS reachability checks so backups only run when the network is available.',
      'Implemented a lean sync workflow that mirrors the project tree into a local Git repo and pushes to a private remote over SSH without storing tokens.',
      'Designed safety guardrails: exclude rules for node_modules, .venv, and Terraform state, a lock file to prevent overlapping runs, and a mirror outside the source tree to avoid recursive self-backup.',
    ],
    liveDemo: '#',
    repository: 'https://github.com/rico-del/WSL-Backup-Script',
    gradFrom: '#ecfdf5',
    gradVia: '#f8fffb',
    gradTo: '#a7f3d0',
  },
];

export const pipelineStages = [
  { name: 'Commit', detail: 'Git keeps each change traceable.', icon: 'git' },
  { name: 'Build', detail: 'Docker images and web assets are built from repository content.', icon: 'docker' },
  { name: 'Test', detail: 'Frontend checks, backend tests, and image scans gate the workflow.', icon: 'github' },
  { name: 'Deploy', detail: 'Terraform defines the host environment and AWS SSM runs the deployment.', icon: 'terraform' },
  { name: 'Observe', detail: 'CloudWatch logging and runtime configuration are part of the setup.', icon: 'aws' },
];

export const toolchain = [
  { icon: 'terraform', name: 'Terraform', detail: 'Module-based AWS infrastructure for networking, compute, IAM, and SSM.' },
  { icon: 'aws', name: 'AWS', detail: 'EC2, VPC, IAM, SSM, ECR, and CloudWatch support the deployments.' },
  { icon: 'docker', name: 'Docker Compose', detail: 'Frontend, backend, and MongoDB services run together on EC2.' },
  { icon: 'github', name: 'GitHub Actions', detail: 'Checks, builds, Trivy scanning, and manual deploys are wired in.' },
  { icon: 'python', name: 'Python', detail: 'FastAPI backend logic and deployment-related automation are written in Python.' },
  { icon: 'fastapi', name: 'FastAPI', detail: 'The API layer handles auth, bookings, messaging, and payment initiation.' },
  { icon: 'git', name: 'Git', detail: 'Source control and branch-based delivery are part of the workflow.' },
  { icon: 'default', name: 'Nginx', detail: 'The web container serves the frontend and proxies API requests.' },
];

export const skills = [
  {
    category: 'Infrastructure & IaC',
    items: ['Terraform', 'AWS', 'VPC', 'IAM', 'EC2', 'SSM'],
  },
  {
    category: 'Delivery & Automation',
    items: ['GitHub Actions', 'Docker Compose', 'AWS ECR', 'Trivy', 'Terraform plan/apply'],
  },
  {
    category: 'Application Stack',
    items: ['FastAPI', 'Python', 'Expo', 'MongoDB', 'Nginx'],
  },
  {
    category: 'Security & Access',
    items: ['IAM policies', 'SSM Session Manager', 'least-privilege access', 'policy as code'],
  },
];

export const certifications = [
  {
    name: 'AWS Knowledge: Amazon EKS - Training Badge',
    issuer: 'Amazon Web Services Training and Certification',
    note: 'Training badge for Amazon EKS knowledge.',
    image: 'https://images.credly.com/images/f5efafe6-ebdc-485c-9ffa-3a05533e634b/linkedin_thumb_blob',
    url: 'https://www.credly.com/badges/11781851-b016-443f-bfdc-ef36d85dfd38/public_url',
  },
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    note: 'Networking fundamentals badge from Cisco.',
    image: 'https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/linkedin_thumb_CCNAITN__1_.png',
    url: 'https://www.credly.com/badges/ea3cd68b-b0ee-42f1-8083-8b8a330aaa6e/public_url',
  },
];

export const opsPrinciples = [
  {
    title: 'Keep access scoped',
    detail:
      'The Terraform IAM module and policy assets are written to limit access instead of granting broad admin rights.',
  },
  {
    title: 'Make deployment repeatable',
    detail:
      'Terraform and Docker Compose both help turn a manual setup into something that can be reviewed and applied consistently.',
  },
  {
    title: 'Validate before deployment',
    detail:
      'GitHub Actions and image scanning provide checkpoints before a change reaches the environment.',
  },
];
