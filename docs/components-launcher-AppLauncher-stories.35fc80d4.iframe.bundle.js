"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[126],{"./src/components/launcher/AppLauncher.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AppLauncher_stories});var react=__webpack_require__("./node_modules/react/index.js"),DynamicIcon=__webpack_require__("./src/components/images/DynamicIcon.tsx");const AppLauncher=({apps})=>react.createElement("div",{className:"bg-gray-100 p-6 rounded-lg shadow-lg"},react.createElement("h2",{className:"text-lg font-bold mb-4"},"Applications"),react.createElement("div",{className:"grid grid-cols-4 gap-4"},apps.map(((app,index)=>react.createElement("a",{key:index,href:app.link,target:"_blank",rel:"noopener noreferrer",className:"bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-gray-50 transition"},react.createElement("div",{className:"h-12 w-12 mb-2"},react.createElement(DynamicIcon.A,{style:app.style,iconName:app.icon,className:"h-full w-full"})),react.createElement("span",{className:"text-center text-sm font-medium"},app.name)))))),launcher_AppLauncher=AppLauncher;AppLauncher.__docgenInfo={description:"",methods:[],displayName:"AppLauncher"};const AppLauncher_stories={title:"Header/AppLauncher",component:launcher_AppLauncher},Default=(args=>react.createElement(launcher_AppLauncher,args)).bind({});Default.args={apps:[{name:"Mail",style:"kit",link:"https://mail.example.com",icon:"automation"},{name:"Calendar",style:"light",link:"https://calendar.example.com",icon:"calendar"}]};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <AppLauncher {...args} />",...Default.parameters?.docs?.source}}}}}]);