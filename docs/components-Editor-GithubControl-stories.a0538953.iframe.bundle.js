"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[2104],{"./node_modules/@radix-ui/react-dialog/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UC:()=>Content,VY:()=>Description,ZL:()=>Portal,bL:()=>Root,bm:()=>Close,hE:()=>Title,hJ:()=>Overlay,l9:()=>Trigger});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@radix-ui/react-focus-scope/dist/index.mjs"),_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/react-portal/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@radix-ui/react-focus-guards/dist/index.mjs"),react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react-remove-scroll/dist/es2015/Combination.js"),aria_hidden__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/aria-hidden/dist/es2015/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),[createDialogContext,createDialogScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Dialog"),[DialogProvider,useDialogContext]=createDialogContext("Dialog"),Dialog=props=>{const{__scopeDialog,children,open:openProp,defaultOpen,onOpenChange,modal=!0}=props,triggerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),contentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[open=!1,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogProvider,{scope:__scopeDialog,triggerRef,contentRef,contentId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),titleId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),descriptionId:(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.B)(),open,onOpenChange:setOpen,onOpenToggle:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),modal,children})};Dialog.displayName="Dialog";var DialogTrigger=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeDialog,...triggerProps}=props,context=useDialogContext("DialogTrigger",__scopeDialog),composedTriggerRef=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(forwardedRef,context.triggerRef);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":context.open,"aria-controls":context.contentId,"data-state":getState(context.open),...triggerProps,ref:composedTriggerRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(props.onClick,context.onOpenToggle)})}));DialogTrigger.displayName="DialogTrigger";var[PortalProvider,usePortalContext]=createDialogContext("DialogPortal",{forceMount:void 0}),DialogPortal=props=>{const{__scopeDialog,forceMount,children,container}=props,context=useDialogContext("DialogPortal",__scopeDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalProvider,{scope:__scopeDialog,forceMount,children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(child=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.C,{present:forceMount||context.open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__.Z,{asChild:!0,container,children:child})})))})};DialogPortal.displayName="DialogPortal";var DialogOverlay=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const portalContext=usePortalContext("DialogOverlay",props.__scopeDialog),{forceMount=portalContext.forceMount,...overlayProps}=props,context=useDialogContext("DialogOverlay",props.__scopeDialog);return context.modal?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.C,{present:forceMount||context.open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogOverlayImpl,{...overlayProps,ref:forwardedRef})}):null}));DialogOverlay.displayName="DialogOverlay";var DialogOverlayImpl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeDialog,...overlayProps}=props,context=useDialogContext("DialogOverlay",__scopeDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__.A,{as:_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__.DX,allowPinchZoom:!0,shards:[context.contentRef],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.div,{"data-state":getState(context.open),...overlayProps,ref:forwardedRef,style:{pointerEvents:"auto",...overlayProps.style}})})})),DialogContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const portalContext=usePortalContext("DialogContent",props.__scopeDialog),{forceMount=portalContext.forceMount,...contentProps}=props,context=useDialogContext("DialogContent",props.__scopeDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.C,{present:forceMount||context.open,children:context.modal?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentModal,{...contentProps,ref:forwardedRef}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentNonModal,{...contentProps,ref:forwardedRef})})}));DialogContent.displayName="DialogContent";var DialogContentModal=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const context=useDialogContext("DialogContent",props.__scopeDialog),contentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(forwardedRef,context.contentRef,contentRef);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const content=contentRef.current;if(content)return(0,aria_hidden__WEBPACK_IMPORTED_MODULE_12__.Eq)(content)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentImpl,{...props,ref:composedRefs,trapFocus:context.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(props.onCloseAutoFocus,(event=>{event.preventDefault(),context.triggerRef.current?.focus()})),onPointerDownOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(props.onPointerDownOutside,(event=>{const originalEvent=event.detail.originalEvent,ctrlLeftClick=0===originalEvent.button&&!0===originalEvent.ctrlKey;(2===originalEvent.button||ctrlLeftClick)&&event.preventDefault()})),onFocusOutside:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(props.onFocusOutside,(event=>event.preventDefault()))})})),DialogContentNonModal=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const context=useDialogContext("DialogContent",props.__scopeDialog),hasInteractedOutsideRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),hasPointerDownOutsideRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentImpl,{...props,ref:forwardedRef,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:event=>{props.onCloseAutoFocus?.(event),event.defaultPrevented||(hasInteractedOutsideRef.current||context.triggerRef.current?.focus(),event.preventDefault()),hasInteractedOutsideRef.current=!1,hasPointerDownOutsideRef.current=!1},onInteractOutside:event=>{props.onInteractOutside?.(event),event.defaultPrevented||(hasInteractedOutsideRef.current=!0,"pointerdown"===event.detail.originalEvent.type&&(hasPointerDownOutsideRef.current=!0));const target=event.target,targetIsTrigger=context.triggerRef.current?.contains(target);targetIsTrigger&&event.preventDefault(),"focusin"===event.detail.originalEvent.type&&hasPointerDownOutsideRef.current&&event.preventDefault()}})})),DialogContentImpl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeDialog,trapFocus,onOpenAutoFocus,onCloseAutoFocus,...contentProps}=props,context=useDialogContext("DialogContent",__scopeDialog),contentRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(forwardedRef,contentRef);return(0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__.Oh)(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__.n,{asChild:!0,loop:!0,trapped:trapFocus,onMountAutoFocus:onOpenAutoFocus,onUnmountAutoFocus:onCloseAutoFocus,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__.qW,{role:"dialog",id:context.contentId,"aria-describedby":context.descriptionId,"aria-labelledby":context.titleId,"data-state":getState(context.open),...contentProps,ref:composedRefs,onDismiss:()=>context.onOpenChange(!1)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TitleWarning,{titleId:context.titleId}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DescriptionWarning,{contentRef,descriptionId:context.descriptionId})]})]})})),DialogTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeDialog,...titleProps}=props,context=useDialogContext("DialogTitle",__scopeDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.h2,{id:context.titleId,...titleProps,ref:forwardedRef})}));DialogTitle.displayName="DialogTitle";var DialogDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeDialog,...descriptionProps}=props,context=useDialogContext("DialogDescription",__scopeDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.p,{id:context.descriptionId,...descriptionProps,ref:forwardedRef})}));DialogDescription.displayName="DialogDescription";var DialogClose=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeDialog,...closeProps}=props,context=useDialogContext("DialogClose",__scopeDialog);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.sG.button,{type:"button",...closeProps,ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.m)(props.onClick,(()=>context.onOpenChange(!1)))})}));function getState(open){return open?"open":"closed"}DialogClose.displayName="DialogClose";var[WarningProvider,useWarningContext]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.q)("DialogTitleWarning",{contentName:"DialogContent",titleName:"DialogTitle",docsSlug:"dialog"}),TitleWarning=({titleId})=>{const titleWarningContext=useWarningContext("DialogTitleWarning"),MESSAGE=`\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(titleId){document.getElementById(titleId)||console.error(MESSAGE)}}),[MESSAGE,titleId]),null},DescriptionWarning=({contentRef,descriptionId})=>{const MESSAGE=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext("DialogDescriptionWarning").contentName}}.`;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const describedById=contentRef.current?.getAttribute("aria-describedby");if(descriptionId&&describedById){document.getElementById(descriptionId)||console.warn(MESSAGE)}}),[MESSAGE,contentRef,descriptionId]),null},Root=Dialog,Trigger=DialogTrigger,Portal=DialogPortal,Overlay=DialogOverlay,Content=DialogContent,Title=DialogTitle,Description=DialogDescription,Close=DialogClose},"./src/components/Editor/GithubControl.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BadResponse:()=>BadResponse,DefaultBranch:()=>DefaultBranch,Fail:()=>Fail,LotsOfBranches:()=>LotsOfBranches,ReallyLongBranchName:()=>ReallyLongBranchName,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_GithubControl__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Editor/GithubControl.tsx"),_components_ui_toaster__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/toaster.tsx");async function dummyDelay(result){(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)();var ms;switch(await(ms=2e3,new Promise((resolve=>setTimeout(resolve,ms)))),result){case"success":return"success";case"other":return"other";default:throw new Error("An error occurred")}}const __WEBPACK_DEFAULT_EXPORT__={title:"Editor/GithubControl",component:_GithubControl__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"],parameters:{actions:{argTypesRegex:"^on.*|^handle*"},nextjs:{appDirectory:!0}},argTypes:{result:{control:{type:"radio"},options:["success","error"]}},args:{onBranchChange:()=>dummyDelay("success"),onPR:()=>dummyDelay("success"),onPublishDraft:()=>dummyDelay("success"),onSave:()=>dummyDelay("success"),onNewBranch:()=>dummyDelay("success")},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:{"--sidebar-width":"16rem",display:"flex",justifyContent:"center",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"--sidebar-width:16rem w-[--sidebar-width]"},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ui_toaster__WEBPACK_IMPORTED_MODULE_3__.l,null)))]},dummyContext={source:"github",repo:"airwalk_patterns",owner:"airwalk-digital",branch:"main",path:"providers",reference:"provider",collections:["services"]},branches=[{name:"main",commit:{sha:"53bfd8457509778140caa47b01c6476d661f1b34",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/53bfd8457509778140caa47b01c6476d661f1b34"},protected:!0},{name:"branch-1",commit:{sha:"53bfd8457509778140caa47b01c6476d661f1b34",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/53bfd8457509778140caa47b01c6476d661f1b34"},protected:!1},{name:"branch-2-and-a-very-long-name-even-longer-than-this",commit:{sha:"09a01dc4e148c35412d3a6a00a384930a41b813b",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/09a01dc4e148c35412d3a6a00a384930a41b813b"},protected:!1},{name:"branch-3",commit:{sha:"7080423b89568b0427cb781f8b753f52fbc394e0",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0"},protected:!1}],Simple={args:{defaultContext:dummyContext,context:{...dummyContext,branch:"branch-1"},branches,fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Fail={args:{defaultContext:dummyContext,context:{...dummyContext,branch:"branch-1"},branches,onNewBranch:()=>dummyDelay("error"),fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},BadResponse={args:{defaultContext:dummyContext,context:{...dummyContext,branch:"branch-1"},branches,onNewBranch:()=>dummyDelay("other"),fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},ReallyLongBranchName={args:{defaultContext:dummyContext,context:{...dummyContext,branch:"branch-with-a-very-long-name-even-longer-than-this"},branches:[{name:"branch-with-a-very-long-name-even-longer-than-this",commit:{sha:"7080423b89568b0427cb781f8b753f52fbc394e0",url:"https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0"},protected:!1},...branches],fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},LotsOfBranches={args:{defaultContext:dummyContext,context:{...dummyContext,branch:"branch-1"},branches:[...branches,...branches,...branches,...branches,...branches,...branches],fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},DefaultBranch={args:{defaultContext:dummyContext,context:{...dummyContext},branches,fetchBranches:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},__namedExportsOrder=["Simple","Fail","BadResponse","ReallyLongBranchName","LotsOfBranches","DefaultBranch"];Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultContext: dummyContext,\n    context: {\n      ...dummyContext,\n      branch: 'branch-1'\n    },\n    branches,\n    // editMode: false,\n    fetchBranches: fn()\n  }\n}",...Simple.parameters?.docs?.source}}},Fail.parameters={...Fail.parameters,docs:{...Fail.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultContext: dummyContext,\n    context: {\n      ...dummyContext,\n      branch: 'branch-1'\n    },\n    branches,\n    onNewBranch: () => dummyDelay('error'),\n    fetchBranches: fn()\n  }\n}",...Fail.parameters?.docs?.source}}},BadResponse.parameters={...BadResponse.parameters,docs:{...BadResponse.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultContext: dummyContext,\n    context: {\n      ...dummyContext,\n      branch: 'branch-1'\n    },\n    branches,\n    onNewBranch: () => dummyDelay('other'),\n    fetchBranches: fn()\n  }\n}",...BadResponse.parameters?.docs?.source}}},ReallyLongBranchName.parameters={...ReallyLongBranchName.parameters,docs:{...ReallyLongBranchName.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultContext: dummyContext,\n    context: {\n      ...dummyContext,\n      branch: 'branch-with-a-very-long-name-even-longer-than-this'\n    },\n    branches: [{\n      name: 'branch-with-a-very-long-name-even-longer-than-this',\n      commit: {\n        sha: '7080423b89568b0427cb781f8b753f52fbc394e0',\n        url: 'https://api.github.com/repos/AirWalk-Digital/airwalk_patterns/commits/7080423b89568b0427cb781f8b753f52fbc394e0'\n      },\n      protected: false\n    }, ...branches],\n    fetchBranches: fn()\n  }\n}",...ReallyLongBranchName.parameters?.docs?.source}}},LotsOfBranches.parameters={...LotsOfBranches.parameters,docs:{...LotsOfBranches.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultContext: dummyContext,\n    context: {\n      ...dummyContext,\n      branch: 'branch-1'\n    },\n    branches: [...branches, ...branches, ...branches, ...branches, ...branches, ...branches],\n    fetchBranches: fn()\n  }\n}",...LotsOfBranches.parameters?.docs?.source}}},DefaultBranch.parameters={...DefaultBranch.parameters,docs:{...DefaultBranch.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultContext: dummyContext,\n    context: {\n      ...dummyContext\n    },\n    branches,\n    fetchBranches: fn()\n  }\n}",...DefaultBranch.parameters?.docs?.source}}}},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,variant,size,asChild=!1,...props},ref)=>{const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:"button";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]}},"./src/components/ui/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");const Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,type,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",className),ref,...props})));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/components/ui/toaster.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Toaster});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/hooks/use-toast.tsx"),_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/toast.tsx");function Toaster(){const{toasts}=(0,_components_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.dj)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.tE,null,toasts.map((function({id,title,description,action,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.y8,{key:id,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-1"},title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.Sb,null,title),description&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.aD,null,description)),action,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.eC,null))})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.US,null))}Toaster.__docgenInfo={description:"",methods:[],displayName:"Toaster"}},"./src/components/ui/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bc:()=>TooltipProvider,ZI:()=>TooltipContent,k$:()=>TooltipTrigger,m_:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");const TooltipProvider=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Kq,Tooltip=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.bL,TooltipTrigger=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.l9,TooltipContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,sideOffset=4,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.ZL,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.UC,{ref,sideOffset,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props}))));TooltipContent.displayName=_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.UC.displayName,TooltipContent.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);