'use client';
import * as React from 'react';
import { useState } from 'react';
import { Check, ChevronsUpDown, HelpCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
interface DocType {
  label: string;
  value: string;
  icon?: React.ComponentType<React.ComponentProps<'svg'>> | JSX.Element;
}
import { faNotebook } from '@awesome.me/kit-ff3b5aaa16/icons/classic/light';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToast } from '@/components/hooks/use-toast';

import { dirname } from 'path';

export interface ContentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: any) => void;
  docTypes: DocType[];
  parentOptions: {
    [key: string]: {
      label: string;
      reference: string;
      icon?: React.ComponentType<React.ComponentProps<'svg'>> | JSX.Element;
    }[];
  };
}

function NewContentDialog({
  open,
  onOpenChange,
  onSubmit,
  docTypes,
  parentOptions,
}: ContentDialogProps) {
  const [title, setTitle] = useState('');
  const [docType, setDocType] = useState('');
  const [parent, setParent] = useState('None');
  const [selectedItem, setSelectedItem] = useState('');
  const [openCombobox, setOpenCombobox] = useState(false);
  const [availableParents, setAvailableParents] = useState<{ label: 'None', reference: '', icon: null }[]>([]);
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  console.log(parentOptions);

  const handleSubmit = async () => {
    if (!docType || !title) {
      toast({
        variant: 'destructive',
        description: 'Please add a title and document type as a minimum.',
      });
      return;
    }

    let frontmatter;
    if (!parent) {
      frontmatter = {
        type: docType,
        title,
      };
    } else {
      frontmatter = {
        type: docType,
        [parent.toLowerCase()]: dirname(selectedItem),
        title,
      };
    }
    setIsLoading(true);
    try {
      const data = { frontmatter, docType };
      console.log(data);
      await onSubmit(data);
      setTitle('');
      setDocType('');
      setParent('None');
      setSelectedItem('');
    } catch (err: any) {
      toast({
        variant: 'destructive',
        description: `Error: ${err.message}`,
      });
    } finally {
      setIsLoading(false);
      toast({
        description: 'Page created successfully.',
      });
    }
  };

  const handleParentChange = async (newParent: string) => {
    setIsLoading(true);
    setParent(newParent);
    setSelectedItem('');
    fetch(`/api/content/structure?collection=${newParent}`)
      .then((res) => res.json())
      .then((data) => {
        const values = data;
        console.log(values);
        setItems(
          values.sort((a: any, b: any) => {
            const labelA = a.label || '';
            const labelB = b.label || '';

            if (labelA < labelB) {
              return -1;
            }
            if (labelA > labelB) {
              return 1;
            }
            return 0;
          }),
        );
        setIsLoading(false);
      })
      .catch((err: any) => {
        toast({
          variant: 'destructive',
          description: 'Error loading parent items.',
        });
        console.error(err);
        setIsLoading(false);
      });
  };

  const handleDocTypeChange = async (x: string) => {
    setAvailableParents(parentOptions[x as string] ?? [{ label: 'None', reference: '', icon: null }]);
    setDocType(x);
  };

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Content</DialogTitle>
            <DialogDescription>
              Create a new document. Fill out the details below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Document Type</Label>
              <div className="col-span-3 grid grid-cols-3 gap-2">
                {docTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={docType === type.value ? 'default' : 'outline'}
                    className={cn(
                      'flex items-center gap-2 w-full',
                      type.value === 'note' &&
                        'bg-yellow-100 hover:bg-yellow-200 text-yellow-900',
                    )}
                    onClick={() => handleDocTypeChange(type.value)}
                  >
                    {type.icon && React.isValidElement(type.icon)
                      ? type.icon
                      : type.icon &&
                        React.createElement(
                          type.icon as React.ComponentType<
                            React.ComponentProps<'svg'>
                          >,
                        )}
                    {!type.icon && <span className="w-5" />}
                    {type.label &&
                      type.label.charAt(0).toUpperCase() + type.label.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Parent</Label>
              <div className="col-span-3 grid grid-cols-3 gap-2">
                {availableParents.map((option) => (
                  <Button
                    key={option.label}
                    variant={parent === option ? 'default' : 'outline'}
                    className="flex items-center gap-2 w-full"
                    onClick={() => handleParentChange(option.label)}
                  >
                    {option.label.charAt(0).toUpperCase() +
                      option.label.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
            {parent !== 'None' && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Select Item</Label>
                <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openCombobox}
                      className="col-span-3 justify-between w-full"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Loading...
                        </>
                      ) : selectedItem ? (
                        items.find((item) => item.value === selectedItem)?.label
                      ) : (
                        'Select item...'
                      )}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search items..." />
                      <CommandEmpty>No item found.</CommandEmpty>
                      <CommandGroup>
                        <ScrollArea className="h-72">
                          {items.map((item) => (
                            <CommandItem
                              key={item.value}
                              onSelect={() => {
                                setSelectedItem(
                                  item.value === selectedItem ? '' : item.value,
                                );
                                setOpenCombobox(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  selectedItem === item.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                              {item.label}
                            </CommandItem>
                          ))}
                        </ScrollArea>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
          <DialogFooter>
            <Tooltip>
              <TooltipTrigger asChild>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <HelpCircle className="size-4" />
                      <span className="sr-only">Document creation help</span>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80" align="end">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Create Document
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Create a new document with a type and then select the
                        content that it should be created under.
                      </p>
                      <div className="mt-4 grid gap-2">
                        <div className="grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0">
                          <FontAwesomeIcon icon={faNotebook} />
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Notes
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Use this type for informal documents. These are
                              not commited into Github and are editable live.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TooltipTrigger>
              <TooltipContent>Document creation help</TooltipContent>
            </Tooltip>
            <Button type="submit" onClick={handleSubmit}>
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}

export { NewContentDialog };
