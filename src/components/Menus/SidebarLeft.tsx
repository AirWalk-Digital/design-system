"use client";
import React from "react";
import {
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
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

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import clsx from 'clsx'

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

import type { LinkItem, MenuStructure, MultiMenuStructure } from "@/lib/Types";

export type NavigationItem = {
  label: string;
  url: string;
  isActive?: boolean; // Optional property for active items
  isDraft?: boolean; // Optional property for draft items
  items?: NavigationItem[]; // Recursive type for nested items
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
};

interface SidebarLeftProps extends React.ComponentProps<typeof Sidebar> {
  mainNav: MultiMenuStructure[];
  secondaryNav: MenuStructure[];
  title: string;
  subTitle?: string;
  pathName?: string;
  menuHeading?: string;
  onSidebarMenu?: () => void;

}

export default function SidebarLeft({
  mainNav,
  secondaryNav,
  title,
  subTitle,
  pathName,
  menuHeading,
  onSidebarMenu,
  ...props
}: SidebarLeftProps) {
  return (
    <Sidebar {...props} variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" onClick={onSidebarMenu}>
              
                {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LayoutGrid className="size-6" />
                </div> */}
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{title}</span>
                 {subTitle && <span className="truncate text-xs">{subTitle}</span> }
                </div>
              
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        { mainNav && mainNav.map((item, index) => ( 
          <Menu key={index} subNav={item} pathName={pathName} />
        ))}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNav && secondaryNav.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild size="sm" >
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}


function Menu({ subNav, pathName }: { menuHeading?: string; subNav: MenuStructure, pathName?: string }) {
  const item = subNav;
  let isActive = false;
  // if a link within subNav.links equals the current pathName, set isActive to true ( this will open the collapsible )
  if (item.links) {
    item.links.map((link) => {
      if (link.url === pathName) {
        isActive = true;
      }
    });
  }
  return (
    <Collapsible defaultOpen className="group/collapsible">
    <SidebarGroup className="py-0">
      <SidebarMenu>
          <Collapsible key={item.label} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.label} className={clsx(isActive ? 'font-bold' : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',)}>
                <a href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
              {item.links?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub >
                      {item.links?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.label}>
                          <SidebarMenuSubButton asChild className={clsx(subItem.url === pathName ? 'font-bold text-sky-500' : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',)}>
                            <a href={subItem.url}>
                              <span>{subItem.label}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
</Collapsible>
  );
}