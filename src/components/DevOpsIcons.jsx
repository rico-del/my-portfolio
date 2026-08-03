import {
  Cloud,
  Container,
  GitBranch,
  Github,
  Layers3,
  Network,
  Server,
  TerminalSquare,
} from 'lucide-react';

const iconMap = {
  docker: Container,
  terraform: Network,
  git: GitBranch,
  github: Github,
  aws: Cloud,
  python: TerminalSquare,
  fastapi: Server,
  default: Layers3,
};

function DevOpsIcons({ name, size = 16 }) {
  const Icon = iconMap[name] ?? iconMap.default;
  return <Icon size={size} aria-hidden="true" />;
}

export default DevOpsIcons;
