"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[2104],{"./src/components/Editor/GithubControl.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BadResponse:()=>BadResponse,DefaultBranch:()=>DefaultBranch,EditMode:()=>EditMode,Fail:()=>Fail,LotsOfBranches:()=>LotsOfBranches,ReallyLongBranchName:()=>ReallyLongBranchName,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_GithubControl__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Editor/GithubControl.tsx"),_components_ui_toaster__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/toaster.tsx");async function dummyDelay(result){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)();var ms;switch(await(ms=2e3,new Promise((resolve=>setTimeout(resolve,ms)))),result){case"success":return"success";case"other":return"other";default:throw new Error("An error occurred")}}const __WEBPACK_DEFAULT_EXPORT__={title:"Editor/GithubControl",component:_GithubControl__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"],parameters:{actions:{argTypesRegex:"^on.*|^handle*"},nextjs:{appDirectory:!0}},argTypes:{result:{control:{type:"radio"},options:["success","error"]}},args:{onBranchChange:()=>dummyDelay("success"),onPR:()=>dummyDelay("success"),onPublishDraft:()=>dummyDelay("success"),onSubmitNewBranch:()=>dummyDelay("success"),onSave:()=>dummyDelay("success"),onNewBranch:()=>dummyDelay("success")},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{"--sidebar-width":"16rem",display:"flex",justifyContent:"center",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"--sidebar-width:16rem w-[--sidebar-width]"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_toaster__WEBPACK_IMPORTED_MODULE_3__.l,null)))]},dummyCollection={source:"github",repo:"airwalk_patterns",owner:"airwalk-digital",branch:"main",base_branch:"main",path:"providers",reference:"provider",collections:["services"]},branches=[{name:"main",commit:{sha:"53bfd8457509778140caa47b01c6476d661f1b34",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/53bfd8457509778140caa47b01c6476d661f1b34"},protected:!0},{name:"branch-1",commit:{sha:"53bfd8457509778140caa47b01c6476d661f1b34",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/53bfd8457509778140caa47b01c6476d661f1b34"},protected:!1},{name:"branch-2-and-a-very-long-name-even-longer-than-this",commit:{sha:"09a01dc4e148c35412d3a6a00a384930a41b813b",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/09a01dc4e148c35412d3a6a00a384930a41b813b"},protected:!1},{name:"branch-3",commit:{sha:"7080423b89568b0427cb781f8b753f52fbc394e0",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0"},protected:!1}],Simple={args:{open:!0,collection:dummyCollection,context:{...dummyCollection,branch:"branch-1"},branches,fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Fail={args:{open:!0,collection:dummyCollection,context:{...dummyCollection,branch:"branch-1"},branches,onSubmitNewBranch:()=>dummyDelay("error"),fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},BadResponse={args:{open:!0,collection:dummyCollection,context:{...dummyCollection,branch:"branch-1"},branches,onSubmitNewBranch:()=>dummyDelay("other"),fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},ReallyLongBranchName={args:{open:!0,collection:dummyCollection,context:{...dummyCollection,branch:"branch-with-a-very-long-name-even-longer-than-this"},branches:[{name:"branch-with-a-very-long-name-even-longer-than-this",commit:{sha:"7080423b89568b0427cb781f8b753f52fbc394e0",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0"},protected:!1},...branches],fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},LotsOfBranches={args:{open:!0,collection:dummyCollection,context:{...dummyCollection,branch:"branch-1"},branches:[...branches,...branches,...branches,...branches,...branches,...branches],fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},EditMode={args:{open:!0,top:0,handleEdit:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handleRefresh:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handlePrint:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handleAddContent:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onContextUpdate:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handlePresentation:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handlePublishDraft:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),collection:dummyCollection,context:{...dummyCollection,branch:"branch-1"},branches,editMode:!0,fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handlePR:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},DefaultBranch={args:{open:!0,top:0,handleEdit:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handleRefresh:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handlePrint:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handleAdd:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),onContextUpdate:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),handlePresentation:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),collection:dummyCollection,context:{...dummyCollection},branches,editMode:!0,fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},__namedExportsOrder=["Simple","Fail","BadResponse","ReallyLongBranchName","LotsOfBranches","EditMode","DefaultBranch"];Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection,\n      branch: 'branch-1'\n    },\n    branches,\n    // editMode: false,\n    fetchBranches: fn()\n  }\n}",...Simple.parameters?.docs?.source}}},Fail.parameters={...Fail.parameters,docs:{...Fail.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection,\n      branch: 'branch-1'\n    },\n    branches,\n    onSubmitNewBranch: () => dummyDelay('error'),\n    fetchBranches: fn()\n  }\n}",...Fail.parameters?.docs?.source}}},BadResponse.parameters={...BadResponse.parameters,docs:{...BadResponse.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection,\n      branch: 'branch-1'\n    },\n    branches,\n    onSubmitNewBranch: () => dummyDelay('other'),\n    fetchBranches: fn()\n  }\n}",...BadResponse.parameters?.docs?.source}}},ReallyLongBranchName.parameters={...ReallyLongBranchName.parameters,docs:{...ReallyLongBranchName.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection,\n      branch: 'branch-with-a-very-long-name-even-longer-than-this'\n    },\n    branches: [{\n      name: 'branch-with-a-very-long-name-even-longer-than-this',\n      commit: {\n        sha: '7080423b89568b0427cb781f8b753f52fbc394e0',\n        url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0'\n      },\n      protected: false\n    }, ...branches],\n    // editMode: false,\n    fetchBranches: fn()\n  }\n}",...ReallyLongBranchName.parameters?.docs?.source}}},LotsOfBranches.parameters={...LotsOfBranches.parameters,docs:{...LotsOfBranches.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection,\n      branch: 'branch-1'\n    },\n    branches: [...branches, ...branches, ...branches, ...branches, ...branches, ...branches],\n    // editMode: false,\n    fetchBranches: fn()\n  }\n}",...LotsOfBranches.parameters?.docs?.source}}},EditMode.parameters={...EditMode.parameters,docs:{...EditMode.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    top: 0,\n    handleEdit: fn(),\n    handleRefresh: fn(),\n    handlePrint: fn(),\n    handleAddContent: fn(),\n    onContextUpdate: fn(),\n    handlePresentation: fn(),\n    handlePublishDraft: fn(),\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection,\n      branch: 'branch-1'\n    },\n    branches,\n    editMode: true,\n    fetchBranches: fn(),\n    handlePR: fn()\n  }\n}",...EditMode.parameters?.docs?.source}}},DefaultBranch.parameters={...DefaultBranch.parameters,docs:{...DefaultBranch.parameters?.docs,source:{originalSource:"{\n  args: {\n    open: true,\n    top: 0,\n    handleEdit: fn(),\n    handleRefresh: fn(),\n    handlePrint: fn(),\n    handleAdd: fn(),\n    onContextUpdate: fn(),\n    handlePresentation: fn(),\n    collection: dummyCollection,\n    context: {\n      ...dummyCollection\n    },\n    branches,\n    editMode: true,\n    fetchBranches: fn()\n  }\n}",...DefaultBranch.parameters?.docs?.source}}}},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,variant,size,asChild=!1,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:"button";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]}},"./src/components/ui/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");const Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,type,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",className),ref,...props})));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/components/ui/toaster.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Toaster});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/hooks/use-toast.tsx"),_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/toast.tsx");function Toaster(){const{toasts}=(0,_components_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.dj)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.tE,null,toasts.map((function({id,title,description,action,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.y8,{key:id,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-1"},title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.Sb,null,title),description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.aD,null,description)),action,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.eC,null))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.US,null))}Toaster.__docgenInfo={description:"",methods:[],displayName:"Toaster"}},"./src/components/ui/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bc:()=>TooltipProvider,ZI:()=>TooltipContent,k$:()=>TooltipTrigger,m_:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");const TooltipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Kq,Tooltip=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.bL,TooltipTrigger=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.l9,TooltipContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,sideOffset=4,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.ZL,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.UC,{ref,sideOffset,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props}))));TooltipContent.displayName=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.UC.displayName,TooltipContent.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);