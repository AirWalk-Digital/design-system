"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[1812],{"./src/components/Layouts/FeatureGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FeatureGrid_stories});var react=__webpack_require__("./node_modules/react/index.js"),FeatureCard=__webpack_require__("./src/components/Cards/FeatureCard.tsx");const FeatureGrid=({children,cardsPerRow=3})=>{const gridTemplateColumns=`repeat(${cardsPerRow}, minmax(0, 1fr))`;return react.createElement("div",{className:"grid gap-6",style:{gridTemplateColumns}},children)},Layouts_FeatureGrid=FeatureGrid;FeatureGrid.__docgenInfo={description:"",methods:[],displayName:"FeatureGrid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cardsPerRow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};const FeatureGrid_stories={title:"Layouts/FeatureGrid",component:Layouts_FeatureGrid},Default=(args=>react.createElement(Layouts_FeatureGrid,args,args.children)).bind({});Default.args={children:react.createElement(react.Fragment,null,react.createElement(FeatureCard.d,{title:"Performance",description:"Boost your app performance",iconName:"rocket",iconStyle:"solid",color:"blue"}),react.createElement(FeatureCard.d,{title:"Security",description:"Keep your data safe",iconName:"shield-alt",iconStyle:"solid",color:"blue"}),react.createElement(FeatureCard.d,{title:"Automation",description:"Automate your processes",iconName:"robot",iconStyle:"regular",color:"green"}))};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <FeatureGrid {...args}>{args.children}</FeatureGrid>",...Default.parameters?.docs?.source}}}},"./src/components/Cards/FeatureCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>FeatureCard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Images__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Images/index.ts");const FeatureCard=({title,description,iconName,iconStyle,color})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`rounded-3xl ${{green:"bg-green-500",blue:"bg-blue-400",navy:"bg-navy-700",red:"bg-red-500",yellow:"bg-yellow-500"}[color]} p-6 flex flex-col items-center text-center`},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-12 h-12 "},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Images__WEBPACK_IMPORTED_MODULE_1__.$,{type:iconStyle,iconName,className:"w-12 h-12 text-white"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},title),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-white text-sm"},description));FeatureCard.__docgenInfo={description:"",methods:[],displayName:"FeatureCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},iconName:{required:!0,tsType:{name:"string"},description:""},iconStyle:{required:!0,tsType:{name:"union",raw:"'solid' | 'regular' | 'light' | 'duotone' | 'kit'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'light'"},{name:"literal",value:"'duotone'"},{name:"literal",value:"'kit'"}]},description:""},color:{required:!0,tsType:{name:"union",raw:"'green' | 'blue' | 'navy' | 'red' | 'yellow'",elements:[{name:"literal",value:"'green'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'navy'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:""}}}},"./src/components/Images/DynamicIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/index.mjs"),_awesome_me_kit_ff3b5aaa16_icons_classic_light__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@awesome.me/kit-ff3b5aaa16/icons/modules/classic/light.mjs");const sizePx=size=>{switch(size){case"2xs":return"6px";case"xs":return"8px";case"sm":return"12px";case"lg":default:return"24px";case"xl":return"48px";case"2xl":return"96px";case"1x":return"1rem";case"2x":return"2rem";case"3x":return"3rem";case"4x":return"4rem";case"5x":return"5rem";case"6x":return"6rem";case"7x":return"7rem";case"8x":return"8rem";case"9x":return"9rem";case"10x":return"10rem"}},DynamicIcon=({type="solid",iconName="cloud",size="lg",className})=>{const iconPrefix=(type=>{switch(type){case"solid":default:return"fas";case"regular":return"far";case"light":return"fal";case"duotone":return"fad";case"kit":return"fak";case"brands":return"fab"}})(type),faIcon=((prefix,name)=>{const icon=_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS[prefix]?.[name];return icon||(_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal&&_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal["circle-exclamation"]?_awesome_me_kit_ff3b5aaa16_icons__WEBPACK_IMPORTED_MODULE_2__.oS.fal["circle-exclamation"]:_awesome_me_kit_ff3b5aaa16_icons_classic_light__WEBPACK_IMPORTED_MODULE_3__.faCircleExclamation)})(iconPrefix,iconName);return faIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:faIcon,size,className}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.g,{icon:["fas","spinner"],spin:!0,size,className,style:{width:sizePx(size)}})},__WEBPACK_DEFAULT_EXPORT__=DynamicIcon;DynamicIcon.__docgenInfo={description:"",methods:[],displayName:"DynamicIcon",props:{type:{required:!1,tsType:{name:"union",raw:"| 'solid'\n| 'regular'\n| 'light'\n| 'duotone'\n| 'kit'\n| 'brands'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'light'"},{name:"literal",value:"'duotone'"},{name:"literal",value:"'kit'"},{name:"literal",value:"'brands'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cloud'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"| '2xs'\n| 'xs'\n| 'sm'\n| 'lg'\n| 'xl'\n| '2xl'\n| '1x'\n| '2x'\n| '3x'\n| '4x'\n| '5x'\n| '6x'\n| '7x'\n| '8x'\n| '9x'\n| '10x'",elements:[{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'1x'"},{name:"literal",value:"'2x'"},{name:"literal",value:"'3x'"},{name:"literal",value:"'4x'"},{name:"literal",value:"'5x'"},{name:"literal",value:"'6x'"},{name:"literal",value:"'7x'"},{name:"literal",value:"'8x'"},{name:"literal",value:"'9x'"},{name:"literal",value:"'10x'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Images/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_components_Images_DynamicIcon__WEBPACK_IMPORTED_MODULE_0__.A});var _components_Images_DynamicIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Images/DynamicIcon.tsx")}}]);