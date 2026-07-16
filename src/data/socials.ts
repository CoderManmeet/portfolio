import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import type { ComponentType, SVGProps } from 'react';

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/CoderManmeet', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manmeetcodess/', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:manmeet00002006@gmail.com', icon: Mail },
];
