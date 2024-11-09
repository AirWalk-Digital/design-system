"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[492],{"./src/components/Editor/GithubBranchDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>GithubBranchDialog});var react=__webpack_require__("./node_modules/react/index.js"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),dialog=__webpack_require__("./src/components/ui/dialog.tsx"),input=__webpack_require__("./src/components/ui/input.tsx"),label=__webpack_require__("./src/components/ui/label.tsx"),dist=__webpack_require__("./node_modules/@radix-ui/react-toggle-group/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts"),react_toggle_dist=__webpack_require__("./node_modules/@radix-ui/react-toggle/dist/index.mjs");const toggleVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-2 min-w-9",sm:"h-8 px-1.5 min-w-8",lg:"h-10 px-2.5 min-w-10"}},defaultVariants:{variant:"default",size:"default"}}),Toggle=react.forwardRef((({className,variant,size,...props},ref)=>react.createElement(react_toggle_dist.b,{ref,className:(0,utils.cn)(toggleVariants({variant,size,className})),...props})));Toggle.displayName=react_toggle_dist.b.displayName,Toggle.__docgenInfo={description:"",methods:[]};const ToggleGroupContext=react.createContext({size:"default",variant:"default"}),ToggleGroup=react.forwardRef((({className,variant,size,children,...props},ref)=>react.createElement(dist.bL,{ref,className:(0,utils.cn)("flex items-center justify-center gap-1",className),...props},react.createElement(ToggleGroupContext.Provider,{value:{variant,size}},children))));ToggleGroup.displayName=dist.bL.displayName;const ToggleGroupItem=react.forwardRef((({className,children,variant,size,...props},ref)=>{const context=react.useContext(ToggleGroupContext);return react.createElement(dist.q7,{ref,className:(0,utils.cn)(toggleVariants({variant:context.variant||variant,size:context.size||size}),className),...props},children)}));ToggleGroupItem.displayName=dist.q7.displayName,ToggleGroup.__docgenInfo={description:"",methods:[]},ToggleGroupItem.__docgenInfo={description:"",methods:[]};var loader_circle=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/loader-circle.js"),use_toast=__webpack_require__("./src/components/hooks/use-toast.tsx"),ui_toast=__webpack_require__("./src/components/ui/toast.tsx");const GithubBranchDialog=({open,onSubmit,onOpenChange})=>{const[changeType,setChangeType]=react.useState("FEATURE"),[title,setTitle]=react.useState(""),[isSubmitting,setIsSubmitting]=react.useState(!1),{toast}=(0,use_toast.dj)(),handleSubmit=async e=>{e.preventDefault();let prName="";try{title?(prName=`${changeType}/${title.split(" ").map((word=>word.charAt(0).toUpperCase()+word.slice(1))).join("-")}`,setIsSubmitting(!0),await onSubmit({name:prName}),setTitle(""),setChangeType("FEATURE"),toast({title:"New branch created",description:`Branch ${prName} created successfully`}),onOpenChange(!1)):toast({variant:"destructive",description:"You need to provide a title for the branch"})}catch(err){toast({variant:"destructive",title:"Something went wrong.",description:err.message,action:react.createElement(ui_toast.Qg,{altText:"Try again",onClick:handleSubmit},"Try again")})}finally{setIsSubmitting(!1)}};return react.createElement(dialog.lG,{open,onOpenChange},react.createElement(dialog.Cf,{className:"sm:max-w-[425px]"},react.createElement("form",{onSubmit:handleSubmit},react.createElement(dialog.c7,null,react.createElement(dialog.L3,null,"Create new branch"),react.createElement(dialog.rr,{className:"text-base"},"A branch is a collection of changes to be merged into the main content repository. Make a note of the branch name, you will need it to create a pull request (a proposal to merge your changes into the main content repository).")),react.createElement("div",{className:"grid gap-4 py-4"},react.createElement("div",{className:"grid gap-2"},react.createElement(label.J,{htmlFor:"change-type"},"Change Type"),react.createElement(ToggleGroup,{type:"single",value:changeType,onValueChange:value=>value&&setChangeType(value),className:"justify-start"},react.createElement(ToggleGroupItem,{value:"FEATURE","aria-label":"Feature change type"},"FEATURE"),react.createElement(ToggleGroupItem,{value:"BUGFIX","aria-label":"Bugfix change type"},"BUGFIX"),react.createElement(ToggleGroupItem,{value:"SUPPORT","aria-label":"Support change type"},"SUPPORT"))),react.createElement("div",{className:"grid gap-2"},react.createElement(label.J,{htmlFor:"title"},"Title"),react.createElement(input.p,{id:"title",value:title,onChange:e=>setTitle(e.target.value),placeholder:"Brief description of the change",className:"col-span-3"}))),react.createElement(dialog.Es,null,react.createElement(ui_button.$,{type:"button",variant:"ghost",onClick:()=>onOpenChange(!1)},"CANCEL"),react.createElement(ui_button.$,{type:"submit",disabled:isSubmitting},isSubmitting?react.createElement(react.Fragment,null,react.createElement(loader_circle.A,{className:"mr-2 h-4 w-4 animate-spin"}),"Submitting..."):"SUBMIT")))))};GithubBranchDialog.__docgenInfo={description:"",methods:[],displayName:"GithubBranchDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: { name?: string } | null) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"{ name?: string } | null",elements:[{name:"signature",type:"object",raw:"{ name?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!1}}]}},{name:"null"}]},name:"value"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}}},"./src/components/hooks/use-toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dj:()=>useToast});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let count=0;const toastTimeouts=new Map,addToRemoveQueue=toastId=>{if(toastTimeouts.has(toastId))return;const timeout=setTimeout((()=>{toastTimeouts.delete(toastId),dispatch({type:"REMOVE_TOAST",toastId})}),1e6);toastTimeouts.set(toastId,timeout)},reducer=(state,action)=>{switch(action.type){case"ADD_TOAST":return{...state,toasts:[action.toast,...state.toasts].slice(0,1)};case"UPDATE_TOAST":return{...state,toasts:state.toasts.map((t=>t.id===action.toast.id?{...t,...action.toast}:t))};case"DISMISS_TOAST":{const{toastId}=action;return toastId?addToRemoveQueue(toastId):state.toasts.forEach((toast=>{addToRemoveQueue(toast.id)})),{...state,toasts:state.toasts.map((t=>t.id===toastId||void 0===toastId?{...t,open:!1}:t))}}case"REMOVE_TOAST":return void 0===action.toastId?{...state,toasts:[]}:{...state,toasts:state.toasts.filter((t=>t.id!==action.toastId))}}},listeners=[];let memoryState={toasts:[]};function dispatch(action){memoryState=reducer(memoryState,action),listeners.forEach((listener=>{listener(memoryState)}))}function toast({...props}){const id=function genId(){return count=(count+1)%Number.MAX_SAFE_INTEGER,count.toString()}(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:id});return dispatch({type:"ADD_TOAST",toast:{...props,id,open:!0,onOpenChange:open=>{open||dismiss()}}}),{id,dismiss,update:props=>dispatch({type:"UPDATE_TOAST",toast:{...props,id}})}}function useToast(){const[state,setState]=react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(listeners.push(setState),()=>{const index=listeners.indexOf(setState);index>-1&&listeners.splice(index,1)})),[state]),{...state,toast,dismiss:toastId=>dispatch({type:"DISMISS_TOAST",toastId})}}},"./src/components/ui/dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cf:()=>DialogContent,Es:()=>DialogFooter,L3:()=>DialogTitle,c7:()=>DialogHeader,lG:()=>Dialog,rr:()=>DialogDescription,zM:()=>DialogTrigger});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/x.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");const Dialog=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.bL,DialogTrigger=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.l9,DialogPortal=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.ZL,DialogOverlay=(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.bm,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.hJ,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",className),...props}))));DialogOverlay.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.hJ.displayName;const DialogContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,children,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogPortal,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogOverlay,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.UC,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",className),...props},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,{className:"h-4 w-4"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"sr-only"},"Close"))))));DialogContent.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.UC.displayName;const DialogHeader=({className,...props})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 text-center sm:text-left",className),...props});DialogHeader.displayName="DialogHeader";const DialogFooter=({className,...props})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",className),...props});DialogFooter.displayName="DialogFooter";const DialogTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.hE,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg font-semibold leading-none tracking-tight",className),...props})));DialogTitle.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.hE.displayName;const DialogDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground",className),...props})));DialogDescription.displayName=_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY.displayName,DialogOverlay.__docgenInfo={description:"",methods:[]},DialogContent.__docgenInfo={description:"",methods:[]},DialogHeader.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"},DialogFooter.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"},DialogTitle.__docgenInfo={description:"",methods:[]},DialogDescription.__docgenInfo={description:"",methods:[]}},"./src/components/ui/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.b,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(labelVariants(),className),...props})));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_2__.b.displayName,Label.__docgenInfo={description:"",methods:[]}},"./src/components/ui/toast.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qg:()=>ToastAction,Sb:()=>ToastTitle,US:()=>ToastViewport,aD:()=>ToastDescription,eC:()=>ToastClose,tE:()=>ToastProvider,y8:()=>Toast});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-toast/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/x.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");const ToastProvider=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.Kq,ToastViewport=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.LM,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",className),...props})));ToastViewport.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.LM.displayName;const toastVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Toast=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,variant,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.bL,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(toastVariants({variant}),className),...props})));Toast.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.bL.displayName;const ToastAction=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.rc,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",className),...props})));ToastAction.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.rc.displayName;const ToastClose=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.bm,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",className),"toast-close":"",...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-4 w-4"}))));ToastClose.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.bm.displayName;const ToastTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.hE,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm font-semibold [&+div]:text-xs",className),...props})));ToastTitle.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.hE.displayName;const ToastDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.VY,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm opacity-90",className),...props})));ToastDescription.displayName=_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_1__.VY.displayName,ToastViewport.__docgenInfo={description:"",methods:[]},Toast.__docgenInfo={description:"",methods:[]},ToastTitle.__docgenInfo={description:"",methods:[]},ToastDescription.__docgenInfo={description:"",methods:[]},ToastClose.__docgenInfo={description:"",methods:[]},ToastAction.__docgenInfo={description:"",methods:[]}}}]);