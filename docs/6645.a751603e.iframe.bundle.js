/*! For license information please see 6645.a751603e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkairwalk_design_system=self.webpackChunkairwalk_design_system||[]).push([[6645],{"./node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>createCollection});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_slot_dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react.useRef(null),itemMap=react.useRef(new Map).current;return(0,jsx_runtime.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,dist.s)(forwardedRef,context.collectionRef);return(0,jsx_runtime.jsx)(react_slot_dist.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react.useRef(null),composedRefs=(0,dist.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,jsx_runtime.jsx)(react_slot_dist.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/@radix-ui/react-toast/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kq:()=>Provider,LM:()=>Viewport,VY:()=>Description,bL:()=>Root2,bm:()=>Close,hE:()=>Title,rc:()=>Action});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@radix-ui/react-portal/dist/index.mjs"),_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),[Collection,useCollection,createCollectionScope]=(0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__.N)("Toast"),[createToastContext,createToastScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__.A)("Toast",[createCollectionScope]),[ToastProviderProvider,useToastProviderContext]=createToastContext("ToastProvider"),ToastProvider=props=>{const{__scopeToast,label="Notification",duration=5e3,swipeDirection="right",swipeThreshold=50,children}=props,[viewport,setViewport]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[toastCount,setToastCount]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0),isFocusedToastEscapeKeyDownRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),isClosePausedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return label.trim()||console.error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`."),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Provider,{scope:__scopeToast,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastProviderProvider,{scope:__scopeToast,label,duration,swipeDirection,swipeThreshold,toastCount,viewport,onViewportChange:setViewport,onToastAdd:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setToastCount((prevCount=>prevCount+1))),[]),onToastRemove:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setToastCount((prevCount=>prevCount-1))),[]),isFocusedToastEscapeKeyDownRef,isClosePausedRef,children})})};ToastProvider.displayName="ToastProvider";var VIEWPORT_DEFAULT_HOTKEY=["F8"],ToastViewport=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,hotkey=VIEWPORT_DEFAULT_HOTKEY,label="Notifications ({hotkey})",...viewportProps}=props,context=useToastProviderContext("ToastViewport",__scopeToast),getItems=useCollection(__scopeToast),wrapperRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),headFocusProxyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),tailFocusProxyRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(forwardedRef,ref,context.onViewportChange),hotkeyLabel=hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,""),hasToasts=context.toastCount>0;react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const handleKeyDown=event=>{0!==hotkey.length&&hotkey.every((key=>event[key]||event.code===key))&&ref.current?.focus()};return document.addEventListener("keydown",handleKeyDown),()=>document.removeEventListener("keydown",handleKeyDown)}),[hotkey]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const wrapper=wrapperRef.current,viewport=ref.current;if(hasToasts&&wrapper&&viewport){const handlePause=()=>{if(!context.isClosePausedRef.current){const pauseEvent=new CustomEvent("toast.viewportPause");viewport.dispatchEvent(pauseEvent),context.isClosePausedRef.current=!0}},handleResume=()=>{if(context.isClosePausedRef.current){const resumeEvent=new CustomEvent("toast.viewportResume");viewport.dispatchEvent(resumeEvent),context.isClosePausedRef.current=!1}},handleFocusOutResume=event=>{!wrapper.contains(event.relatedTarget)&&handleResume()},handlePointerLeaveResume=()=>{wrapper.contains(document.activeElement)||handleResume()};return wrapper.addEventListener("focusin",handlePause),wrapper.addEventListener("focusout",handleFocusOutResume),wrapper.addEventListener("pointermove",handlePause),wrapper.addEventListener("pointerleave",handlePointerLeaveResume),window.addEventListener("blur",handlePause),window.addEventListener("focus",handleResume),()=>{wrapper.removeEventListener("focusin",handlePause),wrapper.removeEventListener("focusout",handleFocusOutResume),wrapper.removeEventListener("pointermove",handlePause),wrapper.removeEventListener("pointerleave",handlePointerLeaveResume),window.removeEventListener("blur",handlePause),window.removeEventListener("focus",handleResume)}}}),[hasToasts,context.isClosePausedRef]);const getSortedTabbableCandidates=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((({tabbingDirection})=>{const tabbableCandidates=getItems().map((toastItem=>{const toastNode=toastItem.ref.current,toastTabbableCandidates=[toastNode,...getTabbableCandidates(toastNode)];return"forwards"===tabbingDirection?toastTabbableCandidates:toastTabbableCandidates.reverse()}));return("forwards"===tabbingDirection?tabbableCandidates.reverse():tabbableCandidates).flat()}),[getItems]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const viewport=ref.current;if(viewport){const handleKeyDown=event=>{const isMetaKey=event.altKey||event.ctrlKey||event.metaKey;if("Tab"===event.key&&!isMetaKey){const focusedElement=document.activeElement,isTabbingBackwards=event.shiftKey;if(event.target===viewport&&isTabbingBackwards)return void headFocusProxyRef.current?.focus();const sortedCandidates=getSortedTabbableCandidates({tabbingDirection:isTabbingBackwards?"backwards":"forwards"}),index=sortedCandidates.findIndex((candidate=>candidate===focusedElement));focusFirst(sortedCandidates.slice(index+1))?event.preventDefault():isTabbingBackwards?headFocusProxyRef.current?.focus():tailFocusProxyRef.current?.focus()}};return viewport.addEventListener("keydown",handleKeyDown),()=>viewport.removeEventListener("keydown",handleKeyDown)}}),[getItems,getSortedTabbableCandidates]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_6__.lg,{ref:wrapperRef,role:"region","aria-label":label.replace("{hotkey}",hotkeyLabel),tabIndex:-1,style:{pointerEvents:hasToasts?void 0:"none"},children:[hasToasts&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusProxy,{ref:headFocusProxyRef,onFocusFromOutsideViewport:()=>{focusFirst(getSortedTabbableCandidates({tabbingDirection:"forwards"}))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Slot,{scope:__scopeToast,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.ol,{tabIndex:-1,...viewportProps,ref:composedRefs})}),hasToasts&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusProxy,{ref:tailFocusProxyRef,onFocusFromOutsideViewport:()=>{focusFirst(getSortedTabbableCandidates({tabbingDirection:"backwards"}))}})]})}));ToastViewport.displayName="ToastViewport";var FocusProxy=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,onFocusFromOutsideViewport,...proxyProps}=props,context=useToastProviderContext("ToastFocusProxy",__scopeToast);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_8__.s,{"aria-hidden":!0,tabIndex:0,...proxyProps,ref:forwardedRef,style:{position:"fixed"},onFocus:event=>{const prevFocusedElement=event.relatedTarget;!context.viewport?.contains(prevFocusedElement)&&onFocusFromOutsideViewport()}})}));FocusProxy.displayName="ToastFocusProxy";var Toast=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{forceMount,open:openProp,defaultOpen,onOpenChange,...toastProps}=props,[open=!0,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_9__.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_10__.C,{present:forceMount||open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastImpl,{open,...toastProps,ref:forwardedRef,onClose:()=>setOpen(!1),onPause:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.c)(props.onPause),onResume:(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.c)(props.onResume),onSwipeStart:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onSwipeStart,(event=>{event.currentTarget.setAttribute("data-swipe","start")})),onSwipeMove:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onSwipeMove,(event=>{const{x,y}=event.detail.delta;event.currentTarget.setAttribute("data-swipe","move"),event.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${x}px`),event.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${y}px`)})),onSwipeCancel:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onSwipeCancel,(event=>{event.currentTarget.setAttribute("data-swipe","cancel"),event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")})),onSwipeEnd:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onSwipeEnd,(event=>{const{x,y}=event.detail.delta;event.currentTarget.setAttribute("data-swipe","end"),event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),event.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${x}px`),event.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${y}px`),setOpen(!1)}))})})}));Toast.displayName="Toast";var[ToastInteractiveProvider,useToastInteractiveContext]=createToastContext("Toast",{onClose(){}}),ToastImpl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,type="foreground",duration:durationProp,open,onClose,onEscapeKeyDown,onPause,onResume,onSwipeStart,onSwipeMove,onSwipeCancel,onSwipeEnd,...toastProps}=props,context=useToastProviderContext("Toast",__scopeToast),[node,setNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.s)(forwardedRef,(node2=>setNode(node2))),pointerStartRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),swipeDeltaRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),duration=durationProp||context.duration,closeTimerStartTimeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),closeTimerRemainingTimeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(duration),closeTimerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(0),{onToastAdd,onToastRemove}=context,handleClose=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.c)((()=>{const isFocusInToast=node?.contains(document.activeElement);isFocusInToast&&context.viewport?.focus(),onClose()})),startTimer=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((duration2=>{duration2&&duration2!==1/0&&(window.clearTimeout(closeTimerRef.current),closeTimerStartTimeRef.current=(new Date).getTime(),closeTimerRef.current=window.setTimeout(handleClose,duration2))}),[handleClose]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const viewport=context.viewport;if(viewport){const handleResume=()=>{startTimer(closeTimerRemainingTimeRef.current),onResume?.()},handlePause=()=>{const elapsedTime=(new Date).getTime()-closeTimerStartTimeRef.current;closeTimerRemainingTimeRef.current=closeTimerRemainingTimeRef.current-elapsedTime,window.clearTimeout(closeTimerRef.current),onPause?.()};return viewport.addEventListener("toast.viewportPause",handlePause),viewport.addEventListener("toast.viewportResume",handleResume),()=>{viewport.removeEventListener("toast.viewportPause",handlePause),viewport.removeEventListener("toast.viewportResume",handleResume)}}}),[context.viewport,duration,onPause,onResume,startTimer]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{open&&!context.isClosePausedRef.current&&startTimer(duration)}),[open,duration,context.isClosePausedRef,startTimer]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(onToastAdd(),()=>onToastRemove())),[onToastAdd,onToastRemove]);const announceTextContent=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>node?getAnnounceTextContent(node):null),[node]);return context.viewport?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[announceTextContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastAnnounce,{__scopeToast,role:"status","aria-live":"foreground"===type?"assertive":"polite","aria-atomic":!0,children:announceTextContent}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastInteractiveProvider,{scope:__scopeToast,onClose:handleClose,children:react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.ItemSlot,{scope:__scopeToast,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_6__.bL,{asChild:!0,onEscapeKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(onEscapeKeyDown,(()=>{context.isFocusedToastEscapeKeyDownRef.current||handleClose(),context.isFocusedToastEscapeKeyDownRef.current=!1})),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":open?"open":"closed","data-swipe-direction":context.swipeDirection,...toastProps,ref:composedRefs,style:{userSelect:"none",touchAction:"none",...props.style},onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onKeyDown,(event=>{"Escape"===event.key&&(onEscapeKeyDown?.(event.nativeEvent),event.nativeEvent.defaultPrevented||(context.isFocusedToastEscapeKeyDownRef.current=!0,handleClose()))})),onPointerDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onPointerDown,(event=>{0===event.button&&(pointerStartRef.current={x:event.clientX,y:event.clientY})})),onPointerMove:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onPointerMove,(event=>{if(!pointerStartRef.current)return;const x=event.clientX-pointerStartRef.current.x,y=event.clientY-pointerStartRef.current.y,hasSwipeMoveStarted=Boolean(swipeDeltaRef.current),isHorizontalSwipe=["left","right"].includes(context.swipeDirection),clamp=["left","up"].includes(context.swipeDirection)?Math.min:Math.max,clampedX=isHorizontalSwipe?clamp(0,x):0,clampedY=isHorizontalSwipe?0:clamp(0,y),moveStartBuffer="touch"===event.pointerType?10:2,delta={x:clampedX,y:clampedY},eventDetail={originalEvent:event,delta};hasSwipeMoveStarted?(swipeDeltaRef.current=delta,handleAndDispatchCustomEvent("toast.swipeMove",onSwipeMove,eventDetail,{discrete:!1})):isDeltaInDirection(delta,context.swipeDirection,moveStartBuffer)?(swipeDeltaRef.current=delta,handleAndDispatchCustomEvent("toast.swipeStart",onSwipeStart,eventDetail,{discrete:!1}),event.target.setPointerCapture(event.pointerId)):(Math.abs(x)>moveStartBuffer||Math.abs(y)>moveStartBuffer)&&(pointerStartRef.current=null)})),onPointerUp:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onPointerUp,(event=>{const delta=swipeDeltaRef.current,target=event.target;if(target.hasPointerCapture(event.pointerId)&&target.releasePointerCapture(event.pointerId),swipeDeltaRef.current=null,pointerStartRef.current=null,delta){const toast=event.currentTarget,eventDetail={originalEvent:event,delta};isDeltaInDirection(delta,context.swipeDirection,context.swipeThreshold)?handleAndDispatchCustomEvent("toast.swipeEnd",onSwipeEnd,eventDetail,{discrete:!0}):handleAndDispatchCustomEvent("toast.swipeCancel",onSwipeCancel,eventDetail,{discrete:!0}),toast.addEventListener("click",(event2=>event2.preventDefault()),{once:!0})}}))})})}),context.viewport)})]}):null})),ToastAnnounce=props=>{const{__scopeToast,children,...announceProps}=props,context=useToastProviderContext("Toast",__scopeToast),[renderAnnounceText,setRenderAnnounceText]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[isAnnounced,setIsAnnounced]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return function useNextFrame(callback=()=>{}){const fn=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.c)(callback);(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_14__.N)((()=>{let raf1=0,raf2=0;return raf1=window.requestAnimationFrame((()=>raf2=window.requestAnimationFrame(fn))),()=>{window.cancelAnimationFrame(raf1),window.cancelAnimationFrame(raf2)}}),[fn])}((()=>setRenderAnnounceText(!0))),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const timer=window.setTimeout((()=>setIsAnnounced(!0)),1e3);return()=>window.clearTimeout(timer)}),[]),isAnnounced?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_13__.Z,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_8__.s,{...announceProps,children:renderAnnounceText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[context.label," ",children]})})})},ToastTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,...titleProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.div,{...titleProps,ref:forwardedRef})}));ToastTitle.displayName="ToastTitle";var ToastDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,...descriptionProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.div,{...descriptionProps,ref:forwardedRef})}));ToastDescription.displayName="ToastDescription";var ToastAction=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{altText,...actionProps}=props;return altText.trim()?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastAnnounceExclude,{altText,asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastClose,{...actionProps,ref:forwardedRef})}):(console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."),null)}));ToastAction.displayName="ToastAction";var ToastClose=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,...closeProps}=props,interactiveContext=useToastInteractiveContext("ToastClose",__scopeToast);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastAnnounceExclude,{asChild:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.button,{type:"button",...closeProps,ref:forwardedRef,onClick:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.m)(props.onClick,interactiveContext.onClose)})})}));ToastClose.displayName="ToastClose";var ToastAnnounceExclude=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeToast,altText,...announceExcludeProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":altText||void 0,...announceExcludeProps,ref:forwardedRef})}));function getAnnounceTextContent(container){const textContent=[];return Array.from(container.childNodes).forEach((node=>{if(node.nodeType===node.TEXT_NODE&&node.textContent&&textContent.push(node.textContent),function isHTMLElement(node){return node.nodeType===node.ELEMENT_NODE}(node)){const isHidden=node.ariaHidden||node.hidden||"none"===node.style.display,isExcluded=""===node.dataset.radixToastAnnounceExclude;if(!isHidden)if(isExcluded){const altText=node.dataset.radixToastAnnounceAlt;altText&&textContent.push(altText)}else textContent.push(...getAnnounceTextContent(node))}})),textContent}function handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const currentTarget=detail.originalEvent.currentTarget,event=new CustomEvent(name,{bubbles:!0,cancelable:!0,detail});handler&&currentTarget.addEventListener(name,handler,{once:!0}),discrete?(0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.hO)(currentTarget,event):currentTarget.dispatchEvent(event)}var isDeltaInDirection=(delta,direction,threshold=0)=>{const deltaX=Math.abs(delta.x),deltaY=Math.abs(delta.y),isDeltaX=deltaX>deltaY;return"left"===direction||"right"===direction?isDeltaX&&deltaX>threshold:!isDeltaX&&deltaY>threshold};function getTabbableCandidates(container){const nodes=[],walker=document.createTreeWalker(container,NodeFilter.SHOW_ELEMENT,{acceptNode:node=>{const isHiddenInput="INPUT"===node.tagName&&"hidden"===node.type;return node.disabled||node.hidden||isHiddenInput?NodeFilter.FILTER_SKIP:node.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;walker.nextNode();)nodes.push(walker.currentNode);return nodes}function focusFirst(candidates){const previouslyFocusedElement=document.activeElement;return candidates.some((candidate=>candidate===previouslyFocusedElement||(candidate.focus(),document.activeElement!==previouslyFocusedElement)))}var Provider=ToastProvider,Viewport=ToastViewport,Root2=Toast,Title=ToastTitle,Description=ToastDescription,Action=ToastAction,Close=ToastClose},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/icons/x.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>X});const X=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}}]);