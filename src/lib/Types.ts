type FileType = 'published' | 'draft' | 'note';

interface LinkItem {
  label: string;
  url: string;
  type?: FileType;
}
interface RelatedContent {
    [key: string]: LinkItem[];
  }

interface MenuStructure {
  label: string;
  url?: string;
  isActive?: boolean;
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
  type?: FileType;
  links?: LinkItem[] | undefined;
}

interface MultiMenuStructure {
    label: string;
    menu: MenuStructure[];
  }

  interface LinkedItem {
    repo: string;
    owner: string;
    branch: string;
    path: string;
  }
  
  interface Menu {
    component: string;
    collection: string | null;
    scope?: string;
  }
  interface ContentItem {
    source: string;
    repo: string;
    owner: string;
    branch: string;
    path: string;
    reference: string;
    collections?: string[];
    menu?: Menu;
    file?: string;
    linked?: LinkedItem;
  }
  


export type { FileType, LinkItem, MenuStructure, MultiMenuStructure, RelatedContent, ContentItem, LinkedItem, Menu };