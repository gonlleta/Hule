export interface AdminUser {
  name: string;
  username: string;
}

export interface GalleryItem {
  id: string;
  num: string;
  title: string;
  imgSrc: string;
  bgColor: string;
  textColor: string;
  tagColor: string;
  heightClass?: string;
  offsetClass?: string;
  hoverClass?: string;
}

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  iconName: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  hasDarkBg?: boolean;
}

export interface HeroTextContent {
  topLabel: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  subtext: string;
}

export interface SiteContent {
  hero: HeroTextContent;
  gallery: GalleryItem[];
  services: ServiceItem[];
}
