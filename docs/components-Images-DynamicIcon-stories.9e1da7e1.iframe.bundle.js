"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[1673],{"./src/components/Images/DynamicIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Automation:()=>Automation,DuotoneCamera:()=>DuotoneCamera,GitHub:()=>GitHub,LightCloud:()=>LightCloud,RegularClock:()=>RegularClock,SolidUser:()=>SolidUser,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_DynamicIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Images/DynamicIcon.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Images & Icons/DynamicIcon",component:_DynamicIcon__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"h-12 w-12 mb-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DynamicIcon__WEBPACK_IMPORTED_MODULE_1__.A,args)),LightCloud=Template.bind({});LightCloud.args={type:"light",iconName:"cloud",size:"10x"};const SolidUser=Template.bind({});SolidUser.args={type:"solid",iconName:"user",size:"10x"};const RegularClock=Template.bind({});RegularClock.args={type:"regular",iconName:"clock",size:"10x"};const DuotoneCamera=Template.bind({});DuotoneCamera.args={type:"duotone",iconName:"camera",size:"10x"};const Automation=Template.bind({});Automation.args={type:"kit",iconName:"automation",size:"10x"};const GitHub=Template.bind({});GitHub.args={type:"brands",iconName:"github",size:"10x"};const __namedExportsOrder=["LightCloud","SolidUser","RegularClock","DuotoneCamera","Automation","GitHub"];LightCloud.parameters={...LightCloud.parameters,docs:{...LightCloud.parameters?.docs,source:{originalSource:'args => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>',...LightCloud.parameters?.docs?.source}}},SolidUser.parameters={...SolidUser.parameters,docs:{...SolidUser.parameters?.docs,source:{originalSource:'args => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>',...SolidUser.parameters?.docs?.source}}},RegularClock.parameters={...RegularClock.parameters,docs:{...RegularClock.parameters?.docs,source:{originalSource:'args => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>',...RegularClock.parameters?.docs?.source}}},DuotoneCamera.parameters={...DuotoneCamera.parameters,docs:{...DuotoneCamera.parameters?.docs,source:{originalSource:'args => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>',...DuotoneCamera.parameters?.docs?.source}}},Automation.parameters={...Automation.parameters,docs:{...Automation.parameters?.docs,source:{originalSource:'args => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>',...Automation.parameters?.docs?.source}}},GitHub.parameters={...GitHub.parameters,docs:{...GitHub.parameters?.docs,source:{originalSource:'args => <div className="h-12 w-12 mb-2"><DynamicIcon {...args} /></div>',...GitHub.parameters?.docs?.source}}}},"./src/components/Images/DynamicIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/index.mjs"),_awesome_me_kit_ff3b5aaa16_icons_classic_light__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/classic/light.mjs");const sizePx=size=>{switch(size){case"2xs":return"6px";case"xs":return"8px";case"sm":return"12px";case"lg":default:return"24px";case"xl":return"48px";case"2xl":return"96px";case"1x":return"1rem";case"2x":return"2rem";case"3x":return"3rem";case"4x":return"4rem";case"5x":return"5rem";case"6x":return"6rem";case"7x":return"7rem";case"8x":return"8rem";case"9x":return"9rem";case"10x":return"10rem"}},DynamicIcon=({type="solid",iconName="cloud",size="lg",className})=>{const iconPrefix=(type=>{switch(type){case"solid":default:return"fas";case"regular":return"far";case"light":return"fal";case"duotone":return"fad";case"kit":return"fak";case"brands":return"fab"}})(type),faIcon=((prefix,name)=>{var _byPrefixAndName_prefix;const icon=null===(_byPrefixAndName_prefix=_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS[prefix])||void 0===_byPrefixAndName_prefix?void 0:_byPrefixAndName_prefix[name];return icon||(_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal&&_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal["circle-exclamation"]?_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal["circle-exclamation"]:_awesome_me_kit_ff3b5aaa16_icons_classic_light__WEBPACK_IMPORTED_MODULE_3__.faCircleExclamation)})(iconPrefix,iconName);return faIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:faIcon,size,className}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:["fas","spinner"],spin:!0,size,className,style:{width:sizePx(size)}})},__WEBPACK_DEFAULT_EXPORT__=DynamicIcon;DynamicIcon.__docgenInfo={description:"",methods:[],displayName:"DynamicIcon",props:{type:{required:!1,tsType:{name:"union",raw:"| 'solid'\n| 'regular'\n| 'light'\n| 'duotone'\n| 'kit'\n| 'brands'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'light'"},{name:"literal",value:"'duotone'"},{name:"literal",value:"'kit'"},{name:"literal",value:"'brands'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cloud'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"| '2xs'\n| 'xs'\n| 'sm'\n| 'lg'\n| 'xl'\n| '2xl'\n| '1x'\n| '2x'\n| '3x'\n| '4x'\n| '5x'\n| '6x'\n| '7x'\n| '8x'\n| '9x'\n| '10x'",elements:[{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'1x'"},{name:"literal",value:"'2x'"},{name:"literal",value:"'3x'"},{name:"literal",value:"'4x'"},{name:"literal",value:"'5x'"},{name:"literal",value:"'6x'"},{name:"literal",value:"'7x'"},{name:"literal",value:"'8x'"},{name:"literal",value:"'9x'"},{name:"literal",value:"'10x'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}}}]);