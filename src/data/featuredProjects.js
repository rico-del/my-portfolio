export const featuredProjects = [
  {
    id: 'munch-catering',
    title: 'Munch Catering Marketplace',
    eyebrow: 'Full-stack · collaborative project',
    description:
      'A catering marketplace pairing an Expo customer and caterer experience with a FastAPI API and MongoDB-backed data.',
    techStack: ['Expo', 'React Native', 'FastAPI', 'MongoDB', 'Docker Compose', 'AWS EC2', 'GitHub Actions'],
    achievements: [
      'Supports customer and caterer accounts, discovery, quote requests, bookings, messaging, and payment initiation.',
      'Runs as a Docker Compose stack with a web frontend, API, and private MongoDB service.',
      'CI checks cover frontend and backend tests, container builds, and image scanning; deployment is manually triggered after checks pass.',
    ],
    repository: 'https://github.com/rico-del/Munch_Catering',
    gradFrom: '#eef2ff',
    gradVia: '#f8faff',
    gradTo: '#c7d2fe',
  },
  {
    id: 'golden-plate',
    title: 'Golden Plate Catering',
    eyebrow: 'Client website · full-stack delivery',
    description:
      'A responsive catering business website backed by a lightweight Node.js server and JSON persistence for customer enquiries and reviews.',
    techStack: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'Docker', 'Terraform'],
    achievements: [
      'Includes business pages, enquiry and review flows, and an owner-facing admin dashboard.',
      'Uses server-side validation, a honeypot field, and an in-memory per-IP rate limit for submissions.',
      'Includes automated checks and a container build workflow; production deployment infrastructure is documented separately in the repository.',
    ],
    repository: 'https://github.com/rico-del/Golden-Plate-Catering',
    gradFrom: '#fff3e8',
    gradVia: '#fffaf5',
    gradTo: '#f4d8bd',
  },
  {
    id: 'munch-terraform',
    title: 'Munch Terraform Infrastructure',
    eyebrow: 'Infrastructure as code',
    description:
      'A companion public repository for the Munch Catering project, focused on its infrastructure-as-code work using Terraform.',
    techStack: ['Terraform', 'HCL', 'AWS'],
    achievements: [
      'Keeps infrastructure code in a dedicated repository alongside the application project.',
      'Provides a clear example of applying infrastructure-as-code practices to a real application context.',
    ],
    repository: 'https://github.com/rico-del/Munch-Terraform-infra',
    gradFrom: '#eaf2ff',
    gradVia: '#f8fbff',
    gradTo: '#c9dcf5',
  },
];
