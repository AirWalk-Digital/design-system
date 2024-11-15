"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[2924],{"./src/components/Editor/GithubControl.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>GithubControl});var react=__webpack_require__("./node_modules/react/index.js"),git_branch=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/git-branch.js"),check=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js"),plus=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/plus.js"),loader_circle=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/loader-circle.js"),git_pull_request=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/git-pull-request.js"),circle_help=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/circle-help.js"),circle_alert=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/circle-alert.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts");const alertVariants=(0,dist.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),Alert=react.forwardRef((({className,variant,...props},ref)=>react.createElement("div",{ref,role:"alert",className:(0,utils.cn)(alertVariants({variant}),className),...props})));Alert.displayName="Alert";const AlertTitle=react.forwardRef((({className,...props},ref)=>react.createElement("h5",{ref,className:(0,utils.cn)("mb-1 font-medium leading-none tracking-tight",className),...props})));AlertTitle.displayName="AlertTitle";const AlertDescription=react.forwardRef((({className,...props},ref)=>react.createElement("div",{ref,className:(0,utils.cn)("text-sm [&_p]:leading-relaxed",className),...props})));AlertDescription.displayName="AlertDescription",Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"},AlertTitle.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"},AlertDescription.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};var ui_button=__webpack_require__("./src/components/ui/button.tsx"),dialog=__webpack_require__("./src/components/ui/dialog.tsx"),react_dropdown_menu_dist=__webpack_require__("./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs"),react_icons_esm=__webpack_require__("./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js");const DropdownMenu=react_dropdown_menu_dist.bL,DropdownMenuTrigger=react_dropdown_menu_dist.l9,DropdownMenuSubTrigger=(react_dropdown_menu_dist.YJ,react_dropdown_menu_dist.ZL,react_dropdown_menu_dist.Pb,react_dropdown_menu_dist.z6,react.forwardRef((({className,inset,children,...props},ref)=>react.createElement(react_dropdown_menu_dist.ZP,{ref,className:(0,utils.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",inset&&"pl-8",className),...props},children,react.createElement(react_icons_esm.vKP,{className:"ml-auto"})))));DropdownMenuSubTrigger.displayName=react_dropdown_menu_dist.ZP.displayName;const DropdownMenuSubContent=react.forwardRef((({className,...props},ref)=>react.createElement(react_dropdown_menu_dist.G5,{ref,className:(0,utils.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})));DropdownMenuSubContent.displayName=react_dropdown_menu_dist.G5.displayName;const DropdownMenuContent=react.forwardRef((({className,sideOffset=4,...props},ref)=>react.createElement(react_dropdown_menu_dist.ZL,null,react.createElement(react_dropdown_menu_dist.UC,{ref,sideOffset,className:(0,utils.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props}))));DropdownMenuContent.displayName=react_dropdown_menu_dist.UC.displayName;const DropdownMenuItem=react.forwardRef((({className,inset,...props},ref)=>react.createElement(react_dropdown_menu_dist.q7,{ref,className:(0,utils.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",inset&&"pl-8",className),...props})));DropdownMenuItem.displayName=react_dropdown_menu_dist.q7.displayName;const DropdownMenuCheckboxItem=react.forwardRef((({className,children,checked,...props},ref)=>react.createElement(react_dropdown_menu_dist.H_,{ref,className:(0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",className),checked,...props},react.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},react.createElement(react_dropdown_menu_dist.VF,null,react.createElement(react_icons_esm.Srz,{className:"h-4 w-4"}))),children)));DropdownMenuCheckboxItem.displayName=react_dropdown_menu_dist.H_.displayName;const DropdownMenuRadioItem=react.forwardRef((({className,children,...props},ref)=>react.createElement(react_dropdown_menu_dist.hN,{ref,className:(0,utils.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",className),...props},react.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},react.createElement(react_dropdown_menu_dist.VF,null,react.createElement(react_icons_esm.RiX,{className:"h-4 w-4 fill-current"}))),children)));DropdownMenuRadioItem.displayName=react_dropdown_menu_dist.hN.displayName;const DropdownMenuLabel=react.forwardRef((({className,inset,...props},ref)=>react.createElement(react_dropdown_menu_dist.JU,{ref,className:(0,utils.cn)("px-2 py-1.5 text-sm font-semibold",inset&&"pl-8",className),...props})));DropdownMenuLabel.displayName=react_dropdown_menu_dist.JU.displayName;const DropdownMenuSeparator=react.forwardRef((({className,...props},ref)=>react.createElement(react_dropdown_menu_dist.wv,{ref,className:(0,utils.cn)("-mx-1 my-1 h-px bg-muted",className),...props})));DropdownMenuSeparator.displayName=react_dropdown_menu_dist.wv.displayName;const DropdownMenuShortcut=({className,...props})=>react.createElement("span",{className:(0,utils.cn)("ml-auto text-xs tracking-widest opacity-60",className),...props});DropdownMenuShortcut.displayName="DropdownMenuShortcut",DropdownMenuContent.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}},DropdownMenuItem.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}},DropdownMenuCheckboxItem.__docgenInfo={description:"",methods:[]},DropdownMenuRadioItem.__docgenInfo={description:"",methods:[]},DropdownMenuLabel.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}},DropdownMenuSeparator.__docgenInfo={description:"",methods:[]},DropdownMenuShortcut.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuShortcut"},DropdownMenuSubContent.__docgenInfo={description:"",methods:[]},DropdownMenuSubTrigger.__docgenInfo={description:"",methods:[],props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};var hover_card=__webpack_require__("./src/components/ui/hover-card.tsx"),tooltip=__webpack_require__("./src/components/ui/tooltip.tsx"),light=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/classic/light.mjs"),solid=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/classic/solid.mjs"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),GithubBranchDialog=__webpack_require__("./src/components/Editor/GithubBranchDialog.tsx"),use_toast=__webpack_require__("./src/components/hooks/use-toast.tsx"),ui_toast=__webpack_require__("./src/components/ui/toast.tsx");function GithubControl({collection,context,branches,onBranchChange,onPR,onPublishDraft,onNewBranch,onSave}){const[selectedBranch,setSelectedBranch]=react.useState(context?.branch),[open,setOpen]=react.useState(!1),[isPublishingDraft,setIsPublishingDraft]=react.useState(!1),[isSaving,setIsSaving]=react.useState(!1),[isCreatingPR,setIsCreatingPR]=react.useState(!1),{toast}=(0,use_toast.dj)(),[favorites,setFavorites]=react.useState((()=>{const savedFavorites=localStorage.getItem("branchFavorites");return savedFavorites?JSON.parse(savedFavorites):[]})),handlePublishDraft=async context=>{if(setIsPublishingDraft(!0),onPublishDraft){const apiResult=await onPublishDraft(context);"success"===apiResult?toast({title:"Draft published",description:"Your draft has been published successfully"}):(toast({variant:"destructive",title:"Something went wrong.",description:"An error occurred while publishing the draft",action:react.createElement(ui_toast.Qg,{altText:"Try again",onClick:()=>handlePublishDraft(context)},"Try again")}),console.error("An error occurred while publishing the draft. response: ",apiResult))}setIsPublishingDraft(!1)},handleSave=async()=>{if(onSave){setIsSaving(!0);const apiResult=await onSave();"success"===apiResult?toast({title:"Changes saved",description:"Your changes have been saved successfully"}):(toast({variant:"destructive",title:"Something went wrong.",description:"An error occurred while saving the changes",action:react.createElement(ui_toast.Qg,{altText:"Try again",onClick:handleSave},"Try again")}),console.error("An error occurred while saving the changes. response: ",apiResult))}setIsSaving(!1)},handlePR=async()=>{if(setIsCreatingPR(!0),onPR){const apiResult=await onPR();"success"===apiResult?toast({title:"Pull request created",description:"Your pull request has been created successfully"}):(toast({variant:"destructive",title:"Something went wrong.",description:"An error occurred while creating the pull request",action:react.createElement(ui_toast.Qg,{altText:"Try again",onClick:handlePR},"Try again")}),console.error("An error occurred while creating the pull request. response: ",apiResult))}setIsCreatingPR(!1)},sortedBranches=[...branches].sort(((a,b)=>{const aIsFavorite=favorites.includes(a.name),bIsFavorite=favorites.includes(b.name);return aIsFavorite&&!bIsFavorite?-1:!aIsFavorite&&bIsFavorite?1:0}));return react.createElement(tooltip.Bc,null,react.createElement("div",{className:"flex w-full items-center gap-2 py-1"},react.createElement("div",{className:"flex-1 w-full truncate"},react.createElement(DropdownMenu,null,react.createElement(DropdownMenuTrigger,{asChild:!0},react.createElement(ui_button.$,{variant:"outline",className:"w-full justify-start gap-2 truncate font-normal"},react.createElement(git_branch.A,{className:"size-4"}),react.createElement("span",{className:"truncate"},selectedBranch))),react.createElement(DropdownMenuContent,{align:"start",className:"max-h-60 overflow-y-auto w-full"},sortedBranches.map((branch=>react.createElement(DropdownMenuItem,{key:branch.name,onSelect:()=>{setSelectedBranch(branch.name),onBranchChange&&onBranchChange(branch.name)}},react.createElement("div",{className:"flex w-full justify-between items-center"},react.createElement("div",{className:"flex items-center"},branch.name===collection?.base_branch&&react.createElement("span",{className:"mr-2 rounded bg-primary/20 px-1 py-0.5 text-xs"},"default"),react.createElement("span",{className:"truncate"},branch.name),branch.name===selectedBranch&&react.createElement(check.A,{className:"ml-2 size-4"})),react.createElement(ui_button.$,{variant:"ghost",size:"icon",className:"p-0",onClick:e=>{e.stopPropagation(),(branchName=>{const updatedFavorites=favorites.includes(branchName)?favorites.filter((branch=>branch!==branchName)):[...favorites,branchName];setFavorites(updatedFavorites),localStorage.setItem("branchFavorites",JSON.stringify(updatedFavorites))})(branch.name)}},favorites.includes(branch.name)?react.createElement(index_es.g,{icon:solid.faStar}):react.createElement(index_es.g,{icon:light.faStar}))))))))),react.createElement(dialog.lG,{open,onOpenChange:setOpen},react.createElement(tooltip.m_,null,react.createElement(tooltip.k$,{asChild:!0},react.createElement(dialog.zM,{asChild:!0},react.createElement(ui_button.$,{variant:"ghost",size:"icon",className:"shrink-0"},react.createElement(plus.A,{className:"size-4"}),react.createElement("span",{className:"sr-only"},"Create new branch")))),react.createElement(tooltip.ZI,null,"Create new branch")),react.createElement(GithubBranchDialog.k,{open,onOpenChange:setOpen,onSubmit:onNewBranch})),react.createElement(tooltip.m_,null,react.createElement(tooltip.k$,{asChild:!0},react.createElement(ui_button.$,{variant:"ghost",size:"icon",className:"shrink-0",onClick:()=>handlePR&&handlePR()},isCreatingPR?react.createElement(loader_circle.A,{className:"mr-2 h-4 w-4 animate-spin"}):react.createElement(git_pull_request.A,{className:"size-4"}),react.createElement("span",{className:"sr-only"},"Create pull request"))),react.createElement(tooltip.ZI,null,"Create pull request")),react.createElement(tooltip.m_,null,react.createElement(tooltip.k$,{asChild:!0},react.createElement(hover_card.jc,null,react.createElement(hover_card.d0,{asChild:!0},react.createElement(ui_button.$,{variant:"ghost",size:"icon",className:"shrink-0"},react.createElement(circle_help.A,{className:"size-4"}),react.createElement("span",{className:"sr-only"},"Branch management help"))),react.createElement(hover_card.Et,{className:"w-80",align:"end"},react.createElement("div",{className:"space-y-2"},react.createElement("h4",{className:"font-medium leading-none"},"Branch Management"),react.createElement("p",{className:"text-sm text-muted-foreground"},"Select a branch to switch your working copy. Create new branches for features or bug fixes. When ready, create a pull request to merge your changes."),react.createElement("div",{className:"mt-4 grid gap-2"},react.createElement("div",{className:"grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0"},react.createElement(git_branch.A,{className:"size-4"}),react.createElement("div",{className:"space-y-1"},react.createElement("p",{className:"text-sm font-medium leading-none"},"Switch Branch"),react.createElement("p",{className:"text-sm text-muted-foreground"},"Select a branch from the dropdown to switch your working copy"))),react.createElement("div",{className:"grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0"},react.createElement(plus.A,{className:"size-4"}),react.createElement("div",{className:"space-y-1"},react.createElement("p",{className:"text-sm font-medium leading-none"},"Create Branch"),react.createElement("p",{className:"text-sm text-muted-foreground"},"Create a new branch from your current working copy"))),react.createElement("div",{className:"grid grid-cols-[25px_1fr] items-start pb-2 last:pb-0"},react.createElement(git_pull_request.A,{className:"size-4"}),react.createElement("div",{className:"space-y-1"},react.createElement("p",{className:"text-sm font-medium leading-none"},"Pull Request"),react.createElement("p",{className:"text-sm text-muted-foreground"},"Create a pull request to merge your changes into another branch")))))))),react.createElement(tooltip.ZI,null,"Branch management help"))),react.createElement("div",{className:"flex w-full items-center gap-2 py-1 pr-3 text-xs"},react.createElement(ui_button.$,{onClick:()=>onPublishDraft&&handlePublishDraft(context),className:"bg-accent text-accent-foreground"},isPublishingDraft?react.createElement(loader_circle.A,{className:"mr-2 h-4 w-4 animate-spin"}):react.createElement(index_es.g,{icon:light.faCodePullRequestDraft}),react.createElement("span",{className:"text-xs"},"Publish Draft")),react.createElement(ui_button.$,{onClick:()=>onSave&&handleSave(),className:"bg-accent text-accent-foreground"},isSaving?react.createElement(loader_circle.A,{className:"mr-2 h-4 w-4 animate-spin"}):react.createElement(index_es.g,{icon:light.faCloudArrowUp}),react.createElement("span",{className:"text-xs"},"Save"))),context?.branch===collection?.base_branch&&react.createElement("div",{className:"flex w-full items-center gap-2 py-1 pr-3 text-xs"},react.createElement(Alert,{variant:"destructive"},react.createElement(circle_alert.A,{className:"h-4 w-4"}),react.createElement(AlertTitle,null,"Warning"),react.createElement(AlertDescription,null,"Change branch before editing."))))}GithubControl.__docgenInfo={description:"",methods:[],displayName:"GithubControl",props:{collection:{required:!1,tsType:{name:"CollectionItem"},description:""},context:{required:!1,tsType:{name:"ContentItem"},description:""},branches:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  name: string;\n  commit: {\n    sha: string;\n  };\n  protected: boolean;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"commit",value:{name:"signature",type:"object",raw:"{\n  sha: string;\n}",signature:{properties:[{key:"sha",value:{name:"string",required:!0}}]},required:!0}},{key:"protected",value:{name:"boolean",required:!0}}]}}],raw:"{\n  name: string;\n  commit: {\n    sha: string;\n  };\n  protected: boolean;\n}[]"},description:""},onPublishDraft:{required:!1,tsType:{name:"signature",type:"function",raw:"(context: ContentItem | undefined) => Promise<string>",signature:{arguments:[{type:{name:"union",raw:"ContentItem | undefined",elements:[{name:"ContentItem"},{name:"undefined"}]},name:"context"}],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""},onBranchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedValue"}],return:{name:"void"}}},description:""},onNewBranch:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: { name?: string } | null) => Promise<string>",signature:{arguments:[{type:{name:"union",raw:"{ name?: string } | null",elements:[{name:"signature",type:"object",raw:"{ name?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!1}}]}},{name:"null"}]},name:"value"}],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""},onPR:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<string>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""},onSave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<string>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""}}}},"./src/components/ui/hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Et:()=>HoverCardContent,d0:()=>HoverCardTrigger,jc:()=>HoverCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");const HoverCard=_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.bL,HoverCardTrigger=_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.l9,HoverCardContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,align="center",sideOffset=4,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.UC,{ref,align,sideOffset,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})));HoverCardContent.displayName=_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.UC.displayName,HoverCardContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}}}}]);