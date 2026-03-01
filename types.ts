
export interface PortalApp {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
  icon?: string;
}

export interface PortalFolder {
  id: string;
  name: string;
  subfolders: PortalFolder[];
  applications: PortalApp[];
}

export interface BreadcrumbItem {
  id: string;
  name: string;
}

export interface SearchResult {
  app: PortalApp;
  path: string[];
}
