"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[7626],{"./src/components/Menus/AppLauncher.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_AppLauncher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Menus/AppLauncher.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Header/AppLauncher",component:_AppLauncher__WEBPACK_IMPORTED_MODULE_1__.A},Default=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppLauncher__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Default.args={apps:[{name:"Mail",icon:{type:"light",name:"inbox"},link:"https://mail.example.com"},{name:"Calendar",icon:{type:"light",name:"calendar"},link:"https://calendar.example.com"},{name:"Microsoft 365",icon:{type:"light",name:"browser"}},{name:"OneDrive",icon:{type:"light",name:"browser"}},{name:"Admin",icon:{type:"light",name:"browser"}},{name:"Forms",icon:{type:"light",name:"browser"}},{name:"Power Automate",icon:{type:"light",name:"browser"}},{name:"SharePoint",icon:{type:"light",name:"browser"}},{name:"Dropbox for Business",icon:{type:"light",name:"browser"}},{name:"Atlassian Cloud",icon:{url:"/logos/atlassiancloud.png"}},{name:"Amazon Web Services (AWS)",icon:{url:"/logos/dropbox.png"}}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <AppLauncher {...args} />",...Default.parameters?.docs?.source}}}},"./src/components/Images/DynamicIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/index.mjs"),_awesome_me_kit_ff3b5aaa16_icons_classic_light__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/classic/light.mjs");const DynamicIcon=({type="solid",iconName="cloud",size="lg",className})=>{const iconPrefix=(type=>{switch(type){case"solid":default:return"fas";case"regular":return"far";case"light":return"fal";case"duotone":return"fad";case"kit":return"fak";case"brands":return"fab"}})(type),faIcon=((prefix,name)=>{const icon=_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS[prefix]?.[name];return icon||(_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal&&_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal["circle-exclamation"]?_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal["circle-exclamation"]:_awesome_me_kit_ff3b5aaa16_icons_classic_light__WEBPACK_IMPORTED_MODULE_3__.faCircleExclamation)})(iconPrefix,iconName);return faIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:faIcon,size,className,style:{height:"1rem",width:"1rem"}}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:["fas","spinner"],spin:!0,size,className,style:{height:"1rem",width:"1rem"}})},__WEBPACK_DEFAULT_EXPORT__=DynamicIcon;DynamicIcon.__docgenInfo={description:"",methods:[],displayName:"DynamicIcon",props:{type:{required:!1,tsType:{name:"union",raw:"| 'solid'\n| 'regular'\n| 'light'\n| 'duotone'\n| 'kit'\n| 'brands'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'light'"},{name:"literal",value:"'duotone'"},{name:"literal",value:"'kit'"},{name:"literal",value:"'brands'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cloud'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"| '2xs'\n| 'xs'\n| 'sm'\n| 'lg'\n| 'xl'\n| '2xl'\n| '1x'\n| '2x'\n| '3x'\n| '4x'\n| '5x'\n| '6x'\n| '7x'\n| '8x'\n| '9x'\n| '10x'",elements:[{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'1x'"},{name:"literal",value:"'2x'"},{name:"literal",value:"'3x'"},{name:"literal",value:"'4x'"},{name:"literal",value:"'5x'"},{name:"literal",value:"'6x'"},{name:"literal",value:"'7x'"},{name:"literal",value:"'8x'"},{name:"literal",value:"'9x'"},{name:"literal",value:"'10x'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Menus/AppLauncher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Images_DynamicIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Images/DynamicIcon.tsx");const AppLauncher=({apps,isVisible=!0})=>{const appGridRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,isVisible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"fixed inset-0 bg-background/80 dark:bg-background backdrop-blur-sm z-10"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:appGridRef,className:"bg-background w-full max-w-3xl mx-auto mt-16 rounded-lg shadow-lg overflow-hidden"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid grid-cols-5 gap-4 p-4 bg-background"},apps.map(((app,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:"flex flex-col items-center text-center"},app.icon.url?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-12 h-12 mb-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:app.icon.url,className:"h-full w-full"})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-12 h-12 mb-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Images_DynamicIcon__WEBPACK_IMPORTED_MODULE_1__.A,{type:app.icon.type,iconName:app.icon.name,className:"h-full w-full"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-xs"},app.name))))))))},__WEBPACK_DEFAULT_EXPORT__=AppLauncher;AppLauncher.__docgenInfo={description:"",methods:[],displayName:"AppLauncher",props:{apps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  name: string;\n  icon: {\n    type: string;\n    name: string;\n    url: string;\n  };\n  link: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"icon",value:{name:"signature",type:"object",raw:"{\n  type: string;\n  name: string;\n  url: string;\n}",signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]},required:!0}},{key:"link",value:{name:"string",required:!0}}]}}],raw:"{\n  name: string;\n  icon: {\n    type: string;\n    name: string;\n    url: string;\n  };\n  link: string;\n}[]"},description:""},isVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}}}]);