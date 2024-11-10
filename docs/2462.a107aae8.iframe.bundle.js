/*! For license information please see 2462.a107aae8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[2462],{"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>useDirection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),DirectionContext=(__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0));function useDirection(localDir){const globalDir=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/@radix-ui/react-label/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.label,{...props,ref:forwardedRef,onMouseDown:event=>{event.target.closest("button, input, select, textarea")||(props.onMouseDown?.(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault())}})));Label.displayName="Label";var Root=Label},"./node_modules/@radix-ui/react-roving-focus/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q7:()=>Item,bL:()=>Root,RG:()=>createRovingFocusGroupScope});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_collection_dist=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),ENTRY_FOCUS="rovingFocusGroup.onEntryFocus",EVENT_OPTIONS={bubbles:!1,cancelable:!0},GROUP_NAME="RovingFocusGroup",[Collection,useCollection,createCollectionScope]=(0,react_collection_dist.N)(GROUP_NAME),[createRovingFocusGroupContext,createRovingFocusGroupScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}(GROUP_NAME,[createCollectionScope]),[RovingFocusProvider,useRovingFocusContext]=createRovingFocusGroupContext(GROUP_NAME),RovingFocusGroup=react.forwardRef(((props,forwardedRef)=>(0,jsx_runtime.jsx)(Collection.Provider,{scope:props.__scopeRovingFocusGroup,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:props.__scopeRovingFocusGroup,children:(0,jsx_runtime.jsx)(RovingFocusGroupImpl,{...props,ref:forwardedRef})})})));RovingFocusGroup.displayName=GROUP_NAME;var RovingFocusGroupImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,orientation,loop=!1,dir,currentTabStopId:currentTabStopIdProp,defaultCurrentTabStopId,onCurrentTabStopIdChange,onEntryFocus,preventScrollOnEntryFocus=!1,...groupProps}=props,ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref),direction=(0,react_direction_dist.jH)(dir),[currentTabStopId=null,setCurrentTabStopId]=(0,react_use_controllable_state_dist.i)({prop:currentTabStopIdProp,defaultProp:defaultCurrentTabStopId,onChange:onCurrentTabStopIdChange}),[isTabbingBackOut,setIsTabbingBackOut]=react.useState(!1),handleEntryFocus=(0,react_use_callback_ref_dist.c)(onEntryFocus),getItems=useCollection(__scopeRovingFocusGroup),isClickFocusRef=react.useRef(!1),[focusableItemsCount,setFocusableItemsCount]=react.useState(0);return react.useEffect((()=>{const node=ref.current;if(node)return node.addEventListener(ENTRY_FOCUS,handleEntryFocus),()=>node.removeEventListener(ENTRY_FOCUS,handleEntryFocus)}),[handleEntryFocus]),(0,jsx_runtime.jsx)(RovingFocusProvider,{scope:__scopeRovingFocusGroup,orientation,dir:direction,loop,currentTabStopId,onItemFocus:react.useCallback((tabStopId=>setCurrentTabStopId(tabStopId)),[setCurrentTabStopId]),onItemShiftTab:react.useCallback((()=>setIsTabbingBackOut(!0)),[]),onFocusableItemAdd:react.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount+1))),[]),onFocusableItemRemove:react.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount-1))),[]),children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{tabIndex:isTabbingBackOut||0===focusableItemsCount?-1:0,"data-orientation":orientation,...groupProps,ref:composedRefs,style:{outline:"none",...props.style},onMouseDown:(0,dist.m)(props.onMouseDown,(()=>{isClickFocusRef.current=!0})),onFocus:(0,dist.m)(props.onFocus,(event=>{const isKeyboardFocus=!isClickFocusRef.current;if(event.target===event.currentTarget&&isKeyboardFocus&&!isTabbingBackOut){const entryFocusEvent=new CustomEvent(ENTRY_FOCUS,EVENT_OPTIONS);if(event.currentTarget.dispatchEvent(entryFocusEvent),!entryFocusEvent.defaultPrevented){const items=getItems().filter((item=>item.focusable));focusFirst([items.find((item=>item.active)),items.find((item=>item.id===currentTabStopId)),...items].filter(Boolean).map((item=>item.ref.current)),preventScrollOnEntryFocus)}}isClickFocusRef.current=!1})),onBlur:(0,dist.m)(props.onBlur,(()=>setIsTabbingBackOut(!1)))})})})),RovingFocusGroupItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,focusable=!0,active=!1,tabStopId,...itemProps}=props,autoId=(0,react_id_dist.B)(),id=tabStopId||autoId,context=useRovingFocusContext("RovingFocusGroupItem",__scopeRovingFocusGroup),isCurrentTabStop=context.currentTabStopId===id,getItems=useCollection(__scopeRovingFocusGroup),{onFocusableItemAdd,onFocusableItemRemove}=context;return react.useEffect((()=>{if(focusable)return onFocusableItemAdd(),()=>onFocusableItemRemove()}),[focusable,onFocusableItemAdd,onFocusableItemRemove]),(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeRovingFocusGroup,id,focusable,active,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.span,{tabIndex:isCurrentTabStop?0:-1,"data-orientation":context.orientation,...itemProps,ref:forwardedRef,onMouseDown:(0,dist.m)(props.onMouseDown,(event=>{focusable?context.onItemFocus(id):event.preventDefault()})),onFocus:(0,dist.m)(props.onFocus,(()=>context.onItemFocus(id))),onKeyDown:(0,dist.m)(props.onKeyDown,(event=>{if("Tab"===event.key&&event.shiftKey)return void context.onItemShiftTab();if(event.target!==event.currentTarget)return;const focusIntent=function getFocusIntent(event,orientation,dir){const key=function getDirectionAwareKey(key,dir){return"rtl"!==dir?key:"ArrowLeft"===key?"ArrowRight":"ArrowRight"===key?"ArrowLeft":key}(event.key,dir);return"vertical"===orientation&&["ArrowLeft","ArrowRight"].includes(key)||"horizontal"===orientation&&["ArrowUp","ArrowDown"].includes(key)?void 0:MAP_KEY_TO_FOCUS_INTENT[key]}(event,context.orientation,context.dir);if(void 0!==focusIntent){if(event.metaKey||event.ctrlKey||event.altKey||event.shiftKey)return;event.preventDefault();let candidateNodes=getItems().filter((item=>item.focusable)).map((item=>item.ref.current));if("last"===focusIntent)candidateNodes.reverse();else if("prev"===focusIntent||"next"===focusIntent){"prev"===focusIntent&&candidateNodes.reverse();const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=context.loop?function wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateNodes,currentIndex+1):candidateNodes.slice(currentIndex+1)}setTimeout((()=>focusFirst(candidateNodes)))}}))})})}));RovingFocusGroupItem.displayName="RovingFocusGroupItem";var MAP_KEY_TO_FOCUS_INTENT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function focusFirst(candidates,preventScroll=!1){const PREVIOUSLY_FOCUSED_ELEMENT=document.activeElement;for(const candidate of candidates){if(candidate===PREVIOUSLY_FOCUSED_ELEMENT)return;if(candidate.focus({preventScroll}),document.activeElement!==PREVIOUSLY_FOCUSED_ELEMENT)return}}var Root=RovingFocusGroup,Item=RovingFocusGroupItem},"./node_modules/@radix-ui/react-toggle-group/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q7:()=>Item2,bL:()=>Root2});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_roving_focus_dist=__webpack_require__("./node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),react_toggle_dist=__webpack_require__("./node_modules/@radix-ui/react-toggle/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),[createToggleGroupContext,createToggleGroupScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}("ToggleGroup",[react_roving_focus_dist.RG]),useRovingFocusGroupScope=(0,react_roving_focus_dist.RG)(),ToggleGroup=react.forwardRef(((props,forwardedRef)=>{const{type,...toggleGroupProps}=props;if("single"===type){const singleProps=toggleGroupProps;return(0,jsx_runtime.jsx)(ToggleGroupImplSingle,{...singleProps,ref:forwardedRef})}if("multiple"===type){const multipleProps=toggleGroupProps;return(0,jsx_runtime.jsx)(ToggleGroupImplMultiple,{...multipleProps,ref:forwardedRef})}throw new Error("Missing prop `type` expected on `ToggleGroup`")}));ToggleGroup.displayName="ToggleGroup";var[ToggleGroupValueProvider,useToggleGroupValueContext]=createToggleGroupContext("ToggleGroup"),ToggleGroupImplSingle=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...toggleGroupSingleProps}=props,[value,setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return(0,jsx_runtime.jsx)(ToggleGroupValueProvider,{scope:props.__scopeToggleGroup,type:"single",value:value?[value]:[],onItemActivate:setValue,onItemDeactivate:react.useCallback((()=>setValue("")),[setValue]),children:(0,jsx_runtime.jsx)(ToggleGroupImpl,{...toggleGroupSingleProps,ref:forwardedRef})})})),ToggleGroupImplMultiple=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...toggleGroupMultipleProps}=props,[value=[],setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange}),handleButtonActivate=react.useCallback((itemValue=>setValue(((prevValue=[])=>[...prevValue,itemValue]))),[setValue]),handleButtonDeactivate=react.useCallback((itemValue=>setValue(((prevValue=[])=>prevValue.filter((value2=>value2!==itemValue))))),[setValue]);return(0,jsx_runtime.jsx)(ToggleGroupValueProvider,{scope:props.__scopeToggleGroup,type:"multiple",value,onItemActivate:handleButtonActivate,onItemDeactivate:handleButtonDeactivate,children:(0,jsx_runtime.jsx)(ToggleGroupImpl,{...toggleGroupMultipleProps,ref:forwardedRef})})}));ToggleGroup.displayName="ToggleGroup";var[ToggleGroupContext,useToggleGroupContext]=createToggleGroupContext("ToggleGroup"),ToggleGroupImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeToggleGroup,disabled=!1,rovingFocus=!0,orientation,dir,loop=!0,...toggleGroupProps}=props,rovingFocusGroupScope=useRovingFocusGroupScope(__scopeToggleGroup),direction=(0,react_direction_dist.jH)(dir),commonProps={role:"group",dir:direction,...toggleGroupProps};return(0,jsx_runtime.jsx)(ToggleGroupContext,{scope:__scopeToggleGroup,rovingFocus,disabled,children:rovingFocus?(0,jsx_runtime.jsx)(react_roving_focus_dist.bL,{asChild:!0,...rovingFocusGroupScope,orientation,dir:direction,loop,children:(0,jsx_runtime.jsx)(dist.sG.div,{...commonProps,ref:forwardedRef})}):(0,jsx_runtime.jsx)(dist.sG.div,{...commonProps,ref:forwardedRef})})})),ITEM_NAME="ToggleGroupItem",ToggleGroupItem=react.forwardRef(((props,forwardedRef)=>{const valueContext=useToggleGroupValueContext(ITEM_NAME,props.__scopeToggleGroup),context=useToggleGroupContext(ITEM_NAME,props.__scopeToggleGroup),rovingFocusGroupScope=useRovingFocusGroupScope(props.__scopeToggleGroup),pressed=valueContext.value.includes(props.value),disabled=context.disabled||props.disabled,commonProps={...props,pressed,disabled},ref=react.useRef(null);return context.rovingFocus?(0,jsx_runtime.jsx)(react_roving_focus_dist.q7,{asChild:!0,...rovingFocusGroupScope,focusable:!disabled,active:pressed,ref,children:(0,jsx_runtime.jsx)(ToggleGroupItemImpl,{...commonProps,ref:forwardedRef})}):(0,jsx_runtime.jsx)(ToggleGroupItemImpl,{...commonProps,ref:forwardedRef})}));ToggleGroupItem.displayName=ITEM_NAME;var ToggleGroupItemImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeToggleGroup,value,...itemProps}=props,valueContext=useToggleGroupValueContext(ITEM_NAME,__scopeToggleGroup),singleProps={role:"radio","aria-checked":props.pressed,"aria-pressed":void 0},typeProps="single"===valueContext.type?singleProps:void 0;return(0,jsx_runtime.jsx)(react_toggle_dist.l,{...typeProps,...itemProps,ref:forwardedRef,onPressedChange:pressed=>{pressed?valueContext.onItemActivate(value):valueContext.onItemDeactivate(value)}})})),Root2=ToggleGroup,Item2=ToggleGroupItem},"./node_modules/@radix-ui/react-toggle/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Root,l:()=>Toggle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Toggle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{pressed:pressedProp,defaultPressed=!1,onPressedChange,...buttonProps}=props,[pressed=!1,setPressed]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_2__.i)({prop:pressedProp,onChange:onPressedChange,defaultProp:defaultPressed});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.button,{type:"button","aria-pressed":pressed,"data-state":pressed?"on":"off","data-disabled":props.disabled?"":void 0,...buttonProps,ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_4__.m)(props.onClick,(()=>{props.disabled||setPressed(!pressed)}))})}));Toggle.displayName="Toggle";var Root=Toggle},"./node_modules/lucide-react/dist/esm/icons/loader-circle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LoaderCircle});const LoaderCircle=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])}}]);