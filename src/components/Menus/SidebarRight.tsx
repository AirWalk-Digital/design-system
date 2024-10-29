"use client";
import React from "react";
import {
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  Check,
  PencilLine,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  FilePlus,
  Edit,
  Printer,
  Folder,
  Frame,
  LifeBuoy,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Send,
  Settings2,
  Share,
  Plus,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export type TableOfContentsItem = {
  title: string;
  url: string;
  isActive?: boolean; // Optional property for active items
  isDraft?: boolean; // Optional property for draft items
  items?: TableOfContentsItem[]; // Recursive type for nested items
};

interface SidebarRightProps extends React.ComponentProps<typeof Sidebar> {
  tableOfContents: TableOfContentsItem[];
  onAddDocument: () => void;
  onEditDocument: () => void;
  onPrintDocument: () => void;
}

export default function SidebarRight({
  tableOfContents,
  onAddDocument,
  onEditDocument,
  onPrintDocument,
  ...props
}: SidebarRightProps) {
  return (
    <Sidebar
      side="right"
      // collapsible="none"
      variant="inset"
      // className="sticky lg:flex"
      // className="sticky lg:flex top-0 max-h-screen"
      {...props}
    >
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onAddDocument}>
              <FilePlus /> <span>Add Document</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu className="flex-row space-x-1">
          <SidebarMenuItem className="w-5/12">
            <SidebarMenuButton onClick={onEditDocument}>
              <Edit /> <span>Edit</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem className="w-5/12">
            <SidebarMenuButton onClick={onPrintDocument}>
              <Printer /> <span>Print</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* <SidebarContent>
        <SidebarSeparator className="mx-0" />
      </SidebarContent> */}
      <SidebarContent className="overflow-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tableOfContents.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-xs">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={item.isActive}
                            size="sm"
                          >
                            <a
                              href={item.url}
                              className="flex justify-between items-center w-full text-xs"
                            >
                              <span>{item.title}</span>
                              {item.isDraft && (
                                <PencilLine
                                  className="ml-2 text-gray-400 !important"
                                  size={16}
                                />
                              )}{" "}
                              {/* Conditionally render the draft icon */}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New X</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarFooter>
    </Sidebar>
  );
}
