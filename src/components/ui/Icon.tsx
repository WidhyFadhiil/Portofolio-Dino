import {
  Activity, ArrowDown, ArrowUp, AtSign, BadgeCheck, Briefcase, Check, ChevronsDown, Cloud, Copy,
  Database, ExternalLink, Eye, FileText, FolderGit2, GitCommitHorizontal, Hash, History, Loader,
  MapPin, Menu, MessageCircle, MonitorSmartphone, Package, Rocket, Send, Server, Star, Terminal,
  TrendingDown, X, Gauge, Mail,
} from "lucide-react";

export const icons = {
  activity: Activity, arrowDown: ArrowDown, arrowUp: ArrowUp, atSign: AtSign, verified: BadgeCheck,
  briefcase: Briefcase, check: Check, chevronsDown: ChevronsDown, cloud: Cloud, copy: Copy,
  database: Database, external: ExternalLink, eye: Eye, file: FileText, repos: FolderGit2,
  commit: GitCommitHorizontal, hash: Hash, history: History, loader: Loader, pin: MapPin, menu: Menu,
  chat: MessageCircle, devices: MonitorSmartphone, pkg: Package, rocket: Rocket, send: Send,
  dns: Server, star: Star, terminal: Terminal, trending: TrendingDown, close: X, gauge: Gauge,
  mail: Mail, dataset: Activity,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, className = "size-[18px]", ...p }: { name: IconName | string; className?: string } & React.SVGProps<SVGSVGElement>) {
  const C = icons[name as IconName] ?? Activity;
  return <C className={className} aria-hidden {...p} />;
}
