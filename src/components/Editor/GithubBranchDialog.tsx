import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Loader2, LucideToggleLeft } from "lucide-react"
import { useToast } from "@/components/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

interface GithubBranchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void
  onSubmit: (value: { name?: string } | null) => Promise<string>;
}

const GithubBranchDialog: React.FC<GithubBranchDialogProps> = ({ open, onSubmit, onOpenChange }) => {
  const [changeType, setChangeType] = React.useState("FEATURE")
  const [title, setTitle] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let prName = '';
    try {
      if (title) {
        prName = `${changeType}/${title
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join('-')}`;
        setIsSubmitting(true);

        const apiResponse = await onSubmit({ name: prName });
        if (apiResponse === 'success') {
          setTitle(''); // Reset title
          setChangeType("FEATURE")
          toast({
            title: "New branch created",
            description: `Branch ${prName} created successfully`,
          })
          onOpenChange(false);
        } else {
          console.error('An error occurred while creating the branch. response: ', apiResponse);
          toast({
            variant: "destructive",
            title: "Something went wrong.",
            description: "An error occurred while creating the branch",
            action: <ToastAction altText="Try again" onClick={handleSubmit}>Try again</ToastAction>,
          })
        }
    
      } else {
        toast({
          variant: "destructive",
          description: "You need to provide a title for the branch",
        })
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: err.message,
        action: <ToastAction altText="Try again" onClick={handleSubmit}>Try again</ToastAction>,
            })
    } finally {
      setIsSubmitting(false);
      
      
    }

  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create new branch</DialogTitle>
            <DialogDescription className="text-base">
              A branch is a collection of changes to be merged into the main content repository. Make a note of the branch name, you will need it to create a pull request (a proposal to merge your changes into the main content repository).
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="change-type">Change Type</Label>
              <ToggleGroup
                type="single"
                value={changeType}
                onValueChange={(value:string) => value && setChangeType(value)}
                className="justify-start"
              >
                <ToggleGroupItem value="FEATURE" aria-label="Feature change type">
                  FEATURE
                </ToggleGroupItem>
                <ToggleGroupItem value="BUGFIX" aria-label="Bugfix change type">
                  BUGFIX
                </ToggleGroupItem>
                <ToggleGroupItem value="SUPPORT" aria-label="Support change type">
                  SUPPORT
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Brief description of the change"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              CANCEL
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'SUBMIT'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export { GithubBranchDialog };