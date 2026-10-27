import {
  Activity, ArrowDown, ArrowUp, AtSign, BadgeCheck, Briefcase, Check, ChevronsDown, Cloud, Copy,
  ExternalLink, Eye, FileText, FolderGit2, History, Loader,
  MapPin, Menu, MessageCircle, MonitorSmartphone, Package, Rocket, Server, Star, Terminal,
  X, Mail,
} from "lucide-react";

export const icons = {
  activity: Activity, arrowDown: ArrowDown, arrowUp: ArrowUp, atSign: AtSign, verified: BadgeCheck,
  briefcase: Briefcase, check: Check, chevronsDown: ChevronsDown, cloud: Cloud, copy: Copy,
  external: ExternalLink, eye: Eye, file: FileText, repos: FolderGit2,
  history: History, loader: Loader, pin: MapPin, menu: Menu,
  chat: MessageCircle, devices: MonitorSmartphone, pkg: Package, rocket: Rocket,
  dns: Server, star: Star, terminal: Terminal, close: X,
  mail: Mail, dataset: Activity,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, className = "size-[18px]", ...p }: { name: IconName | string; className?: string } & React.SVGProps<SVGSVGElement>) {
  const C = icons[name as IconName] ?? Activity;
  return <C className={className} aria-hidden {...p} />;
}
