'use client';

import * as React from 'react';
import {
  AlertCircle,
  Check,
  GitBranch,
  HelpCircle,
  Plus,
  GitPullRequest,
} from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { faCodePullRequestDraft, faCloudArrowUp } from '@awesome.me/kit-ff3b5aaa16/icons/classic/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ContentItem } from '@/lib/Types';
import { GithubBranchDialog } from '@/components/Editor/GithubBranchDialog';

interface CollectionItem extends ContentItem {
  base_branch: string;
}

interface GithubControlProps {
  collection?: CollectionItem;
  context?: ContentItem;
  branches: string[];
  onPublishDraft?: (context: ContentItem | undefined) => void;
  handleNewBranchDialog?: () => void;
  onSubmitNewBranch: (value: { name?: string } | null) => Promise<void>;
  handlePR?: () => void;
  onSave?: () => void;
}

export default function GithubControl({
  collection,
  context,
  handleNewBranchDialog,
  handlePR,
  onPublishDraft,
  onSubmitNewBranch,
  onSave,
}: GithubControlProps) {
  const [selectedBranch, setSelectedBranch] = React.useState('main');
  const branches = ['main', 'develop', 'feature/auth', 'feature/ui'];
  const [open, setOpen] = React.useState(false);
  return (
    <TooltipProvider>
      <div className="flex w-full items-center gap-2 py-1">
        <div className="flex-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 truncate font-normal"
              >
                <GitBranch className="size-4" />
                {selectedBranch}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {/* className="w-[--radix-dropdown-menu-trigger-width]"> */}
              {branches.map((branch) => (
                <DropdownMenuItem
                  key={branch}
                  onSelect={() => setSelectedBranch(branch)}
                >
                  {branch === 'main' && (
                    <span className="mr-2 rounded bg-primary/20 px-1 py-0.5 text-xs">
                      default
                    </span>
                  )}
                  {branch}
                  {branch === selectedBranch && (
                    <Check className="ml-auto size-4" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  onClick={() =>
                    handleNewBranchDialog && handleNewBranchDialog()
                  }
                >
                  <Plus className="size-4" />
                  <span className="sr-only">Create new branch</span>
                </Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>Create new branch</TooltipContent>
          </Tooltip>
          <GithubBranchDialog
            open={open}
            onOpenChange={setOpen}
            onSubmit={onSubmitNewBranch}
          />
        </Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0"
              onClick={() => handlePR && handlePR()}
            >
              <GitPullRequest className="size-4" />
              <span className="sr-only">Create pull request</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Create pull request</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <HelpCircle className="size-4" />
                  <span className="sr-only">Branch management help</span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="end">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">
                    Branch Management
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Select a branch to switch your working copy. Create new
                    branches for features or bug fixes. When ready, create a
                    pull request to merge your changes.
                  </p>
                  <div className="mt-4 grid gap-2">
                    <div className="grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0">
                      <GitBranch className="size-4" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Switch Branch
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Select a branch from the dropdown to switch your
                          working copy
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0">
                      <Plus className="size-4" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Create Branch
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Create a new branch from your current working copy
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0">
                      <GitPullRequest className="size-4" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Pull Request
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Create a pull request to merge your changes into
                          another branch
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </TooltipTrigger>
          <TooltipContent>Branch management help</TooltipContent>
        </Tooltip>
        </div>
        <div className="flex w-full items-center gap-2 py-1 pr-3 text-xs">
        <Button onClick={() => onPublishDraft && onPublishDraft(context)} className='bg-accent text-accent-foreground'>
          <FontAwesomeIcon icon={faCodePullRequestDraft} /><span className='text-xs'>Publish Draft</span>
        </Button>
        <Button onClick={() => onSave && onSave()} className='bg-accent text-accent-foreground'>
        <FontAwesomeIcon icon={faCloudArrowUp} /><span className='text-xs'>Save</span>
        </Button>
      </div>
      { context?.branch === collection?.base_branch && (
      <div className="flex w-full items-center gap-2 py-1 pr-3 text-xs">
      <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Change branch before editing. You cant edit the default branch ({collection?.base_branch}).
      </AlertDescription>
    </Alert>
      </div>) }
    </TooltipProvider>
  );
}
