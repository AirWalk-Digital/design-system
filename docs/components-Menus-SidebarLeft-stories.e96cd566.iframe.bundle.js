/*! For license information please see components-Menus-SidebarLeft-stories.e96cd566.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[3292],{"./src/components/Menus/SidebarLeft.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Airview:()=>Airview,CustomIcons:()=>CustomIcons,Default:()=>Default,Loading:()=>Loading,MultipleMenus:()=>MultipleMenus,NoArgs:()=>NoArgs,NoClickFunction:()=>NoClickFunction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SidebarLeft_stories});var createLucideIcon=__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js");const SquareTerminal=(0,createLucideIcon.A)("SquareTerminal",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]),Bot=(0,createLucideIcon.A)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);var book_open=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/book-open.js"),settings_2=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/settings-2.js"),life_buoy=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/life-buoy.js"),send=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/send.js"),Images=__webpack_require__("./src/components/Images/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),SidebarLeft=__webpack_require__("./src/components/Menus/SidebarLeft.tsx"),sidebar=__webpack_require__("./src/components/ui/sidebar.tsx"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const SidebarLeft_stories={title:"Menus/SidebarLeft",component:SidebarLeft.A},Template=args=>react.createElement(sidebar.GB,null,react.createElement(SidebarLeft.A,args)),Default=Template.bind({});Default.args={title:"Playground",subTitle:"Airview",menuHeading:"Main Menu",mainNav:[{label:"Playground",url:"#",icon:SquareTerminal,isActive:!0,links:[{label:"History",url:"#"},{label:"Starred",url:"#"},{label:"Settings",url:"#"}]},{label:"Models",url:"#",icon:Bot,links:[{label:"Genesis",url:"#"},{label:"Explorer",url:"#"},{label:"Quantum",url:"#"}]},{label:"Documentation",url:"#",icon:book_open.A,links:[{label:"Introduction",url:"#"},{label:"Get Started",url:"#"},{label:"Tutorials",url:"#"},{label:"Changelog",url:"#"}]},{label:"Settings",url:"#",icon:settings_2.A,links:[{label:"General",url:"#"},{label:"Team",url:"#"},{label:"Billing",url:"#"},{label:"Limits",url:"#"}]}],secondaryNav:[{label:"Support",url:"#",icon:life_buoy.A},{label:"Feedback",url:"#",icon:send.A}],onNavClick:(0,dist.fn)()};const NoClickFunction=Template.bind({});NoClickFunction.args={title:"Playground",subTitle:"Airview",menuHeading:"Main Menu",mainNav:[{label:"Playground",url:"#",icon:SquareTerminal,isActive:!0,links:[{label:"History",url:"#"},{label:"Starred",url:"#"},{label:"Settings",url:"#"}]},{label:"Models",url:"#",icon:Bot,links:[{label:"Genesis",url:"#"},{label:"Explorer",url:"#"},{label:"Quantum",url:"#"}]},{label:"Documentation",url:"#",icon:book_open.A,links:[{label:"Introduction",url:"#"},{label:"Get Started",url:"#"},{label:"Tutorials",url:"#"},{label:"Changelog",url:"#"}]},{label:"Settings",url:"#",icon:settings_2.A,links:[{label:"General",url:"#"},{label:"Team",url:"#"},{label:"Billing",url:"#"},{label:"Limits",url:"#"}]}],secondaryNav:[{label:"Support",url:"#",icon:life_buoy.A},{label:"Feedback",url:"#",icon:send.A}]};const Loading=Template.bind({});Loading.args={title:"Playground",loading:!0,subTitle:"Airview",menuHeading:"Main Menu",mainNav:void 0,secondaryNav:void 0,onNavClick:(0,dist.fn)()};const Airview=Template.bind({});Airview.args={title:"Playground",subTitle:"Airview",menuHeading:"Main Menu",mainNav:[{label:"Kubernetes",url:"/collections/solutions/solutions/kubernetes/_index.md",type:"published",links:[{label:"High Level Design",url:"/solutions/designs/high_level_design_lczbvf99/_index.md",type:"published"},{label:"Istio Ambient Mesh",url:"/solutions/designs/istio_ambient_mesh_leemxsdx/_index.md",type:"published"},{label:"AWS Landing Zone - Elastic Kubernetes Service (EKS)",url:"/solutions/designs/elastic_kubernetes_service_eks_ljwysr3d/_index.md",type:"published"}]},{label:"AI Contact Centre",url:"/collections/solutions/solutions/contact_centre/_index.md",type:"published"}]};const CustomIcons=Template.bind({});CustomIcons.args={title:"Playground",subTitle:"Airview",menuHeading:"Main Menu",mainNav:[{label:"Kubernetes",url:"/collections/solutions/solutions/kubernetes/_index.md",icon:()=>react.createElement(Images.$,{iconName:"github",type:"brands"}),type:"published",links:[{label:"High Level Design",url:"/solutions/designs/high_level_design_lczbvf99/_index.md",type:"published"},{label:"Istio Ambient Mesh",url:"/solutions/designs/istio_ambient_mesh_leemxsdx/_index.md",type:"published"},{label:"AWS Landing Zone - Elastic Kubernetes Service (EKS)",url:"/solutions/designs/elastic_kubernetes_service_eks_ljwysr3d/_index.md",type:"published"}]},{label:"AI Contact Centre",url:"/collections/solutions/solutions/contact_centre/_index.md",type:"published"}]};const MultipleMenus=Template.bind({});MultipleMenus.args={title:"Playground",subTitle:"Airview",menuHeading:"Main Menu",mainNav:[{label:"Playground",url:"#",isActive:!0,links:[{label:"History",url:"//#"},{label:"Starred",url:"#"},{label:"Settings",url:"#"}]},{label:"Models",url:"#",icon:Bot,links:[{label:"Genesis",url:"#"},{label:"Explorer",url:"#"},{label:"Quantum",url:"#"}]},{label:"Playground",url:"#",icon:SquareTerminal,isActive:!0,links:[{label:"History",url:"#"},{label:"Starred",url:"#"},{label:"Settings",url:"#"}]},{label:"Models",url:"#",icon:Bot,links:[{label:"Genesis",url:"#"},{label:"Explorer",url:"#"},{label:"Quantum",url:"#"}]}],secondaryNav:[{label:"Support",url:"#",icon:life_buoy.A},{label:"Feedback",url:"//#"}],pathName:"//#",onNavClick:(0,dist.fn)()};const NoArgs=Template.bind({});NoArgs.args={};const __namedExportsOrder=["Default","NoClickFunction","Loading","Airview","CustomIcons","MultipleMenus","NoArgs"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...Default.parameters?.docs?.source}}},NoClickFunction.parameters={...NoClickFunction.parameters,docs:{...NoClickFunction.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...NoClickFunction.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...Loading.parameters?.docs?.source}}},Airview.parameters={...Airview.parameters,docs:{...Airview.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...Airview.parameters?.docs?.source}}},CustomIcons.parameters={...CustomIcons.parameters,docs:{...CustomIcons.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...CustomIcons.parameters?.docs?.source}}},MultipleMenus.parameters={...MultipleMenus.parameters,docs:{...MultipleMenus.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...MultipleMenus.parameters?.docs?.source}}},NoArgs.parameters={...NoArgs.parameters,docs:{...NoArgs.parameters?.docs,source:{originalSource:"args => <SidebarProvider>\n    <SidebarLeft {...args} />\n  </SidebarProvider>",...NoArgs.parameters?.docs?.source}}}},"./node_modules/lucide-react/dist/esm/icons/book-open.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BookOpen});const BookOpen=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},"./node_modules/lucide-react/dist/esm/icons/life-buoy.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LifeBuoy});const LifeBuoy=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]])},"./node_modules/lucide-react/dist/esm/icons/send.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Send});const Send=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]])},"./node_modules/lucide-react/dist/esm/icons/settings-2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Settings2});const Settings2=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]])},"./src/components/Menus/SidebarLeft.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SidebarLeft});var react=__webpack_require__("./node_modules/react/index.js");const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var collapsible=__webpack_require__("./src/components/ui/collapsible.tsx"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),skeleton=__webpack_require__("./src/components/ui/skeleton.tsx"),sidebar=__webpack_require__("./src/components/ui/sidebar.tsx");function SidebarLeft({mainNav,secondaryNav,title,subTitle,pathName,menuHeading,onNavClick,loading=!1,LinkComponent,...props}){const Link=LinkComponent?props=>react.createElement(LinkComponent,props):onNavClick?({href,children,...props})=>react.createElement("button",{onClick:()=>onNavClick&&onNavClick(href),className:"flex items-center justify-start w-full text-sm text-left px-4 py-2",...props},children):props=>react.createElement("a",props);return react.createElement(sidebar.Bx,{...props,variant:"inset"},react.createElement(sidebar.Gh,null,react.createElement(sidebar.wZ,null,react.createElement(sidebar.FX,null,loading?react.createElement("div",{className:"grid flex-1 p-2 text-left text-m leading-tight"},react.createElement(skeleton.E,{className:"bg-gray-200 my-2 w-full h-7"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 my-2 h-5"})):react.createElement("div",{className:"grid flex-1 p-2 text-left text-m leading-tight"},react.createElement("span",{className:"truncate font-semibold"},title),subTitle&&react.createElement("span",{className:"truncate text-sm"},subTitle))))),loading&&react.createElement(sidebar.Yv,null,react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"}),react.createElement(skeleton.E,{className:"bg-gray-200 w-3/4 h-5"})),react.createElement(sidebar.Yv,null,mainNav&&!loading&&mainNav.map(((item,index)=>react.createElement(Menu,{key:index,subNav:item,pathName,Link}))),react.createElement(sidebar.Cn,{className:"mt-auto"},react.createElement(sidebar.rQ,null,react.createElement(sidebar.wZ,null,secondaryNav&&!loading&&secondaryNav.map((item=>react.createElement(sidebar.FX,{key:item.label},react.createElement(sidebar.Uj,{asChild:!0,size:"sm"},react.createElement(Link,{href:item.url||""},item.icon&&react.createElement(item.icon,null),react.createElement("span",null,item.label)))))))))),react.createElement(sidebar.CG,null))}function Menu({subNav,pathName,Link}){const item=subNav;let isActive=!1;return item.links&&item.links.map((link=>{link.url===pathName&&(isActive=!0)})),react.createElement(collapsible.Nt,{defaultOpen:!0,className:"group/collapsible"},react.createElement(sidebar.Cn,{className:"py-0"},react.createElement(sidebar.wZ,null,react.createElement(collapsible.Nt,{key:item.label,asChild:!0,defaultOpen:item.isActive},react.createElement(sidebar.FX,null,react.createElement(sidebar.Uj,{asChild:!0,tooltip:item.label,className:(0,clsx.A)(isActive&&"font-bold text-accent")},react.createElement(Link,{href:item.url},item.icon&&react.createElement(item.icon,null),react.createElement("span",null,item.label))),item.links?.length?react.createElement(react.Fragment,null,react.createElement(collapsible.R6,{asChild:!0},react.createElement(sidebar.e7,{className:"data-[state=open]:rotate-90"},react.createElement(ChevronRight,null),react.createElement("span",{className:"sr-only"},"Toggle"))),react.createElement(collapsible.Ke,null,react.createElement(sidebar.q9,null,item.links?.map((subItem=>react.createElement(sidebar.Fg,{key:subItem.label},react.createElement(sidebar.Cp,{asChild:!0,className:(0,clsx.A)(subItem.url===pathName&&"font-bold text-accent")},react.createElement(Link,{href:subItem.url},react.createElement("span",null,subItem.label))))))))):null)))))}SidebarLeft.__docgenInfo={description:"",methods:[],displayName:"SidebarLeft",props:{mainNav:{required:!1,tsType:{name:"Array",elements:[{name:"MenuStructure"}],raw:"MenuStructure[]"},description:""},secondaryNav:{required:!1,tsType:{name:"Array",elements:[{name:"MenuStructure"}],raw:"MenuStructure[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},pathName:{required:!1,tsType:{name:"string"},description:""},menuHeading:{required:!1,tsType:{name:"string"},description:""},onNavClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(callback: any) => void",signature:{arguments:[{type:{name:"any"},name:"callback"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},LinkComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<React.ComponentProps<'a'>>",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<'a'>",elements:[{name:"literal",value:"'a'"}]}]},description:""}}}}}]);