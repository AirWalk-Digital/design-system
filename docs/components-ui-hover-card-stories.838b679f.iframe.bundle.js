"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[8350],{"./src/components/ui/hover-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Instant:()=>Instant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_hover_card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/hover-card.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Base/HoverCard",component:_hover_card__WEBPACK_IMPORTED_MODULE_1__.jc,tags:["autodocs"],argTypes:{},args:{},render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hover_card__WEBPACK_IMPORTED_MODULE_1__.jc,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hover_card__WEBPACK_IMPORTED_MODULE_1__.d0,null,"Hover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hover_card__WEBPACK_IMPORTED_MODULE_1__.Et,null,"The React Framework - created and maintained by @vercel.")),parameters:{layout:"centered",docs:{description:{component:"For sighted users to preview content available behind a link."}}}},Default={},Instant={args:{openDelay:0,closeDelay:0}},__namedExportsOrder=["Default","Instant"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source},description:{story:"The default form of the hover card.",...Default.parameters?.docs?.description}}},Instant.parameters={...Instant.parameters,docs:{...Instant.parameters?.docs,source:{originalSource:"{\n  args: {\n    openDelay: 0,\n    closeDelay: 0\n  }\n}",...Instant.parameters?.docs?.source},description:{story:"Use the `openDelay` and `closeDelay` props to control the delay before the\nhover card opens and closes.",...Instant.parameters?.docs?.description}}}},"./src/components/ui/hover-card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Et:()=>HoverCardContent,d0:()=>HoverCardTrigger,jc:()=>HoverCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");const HoverCard=_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.bL,HoverCardTrigger=_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.l9,HoverCardContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,align="center",sideOffset=4,...props},ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.UC,{ref,align,sideOffset,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className),...props})));HoverCardContent.displayName=_radix_ui_react_hover_card__WEBPACK_IMPORTED_MODULE_1__.UC.displayName,HoverCardContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);