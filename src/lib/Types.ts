type FileType = 'published' | 'draft' | 'note';

interface LinkItem {
  label: string;
  url: string;
  type?: FileType;
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

export type { FileType, LinkItem, MenuStructure, MultiMenuStructure };