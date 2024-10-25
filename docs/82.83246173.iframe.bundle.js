"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[82],{"./src/components/Images/DynamicIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Images_DynamicIcon});var react=__webpack_require__("./node_modules/react/index.js"),fontawesome_svg_core=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function camelize(string){return function _isNumerical(obj){return(obj-=0)==obj}(string)?string:(string=string.replace(/[\-_\s]+(.)?/g,(function(match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1)}var _excluded=["style"];var PRODUCTION=!1;try{PRODUCTION=!0}catch(e){}function normalizeIconArgs(icon){return icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName&&icon.icon?icon:fontawesome_svg_core.qg.icon?fontawesome_svg_core.qg.icon(icon):null===icon?null:icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName?icon:Array.isArray(icon)&&2===icon.length?{prefix:icon[0],iconName:icon[1]}:"string"==typeof icon?{prefix:"fas",iconName:icon}:void 0}function objectWithKey(key,value){return Array.isArray(value)&&value.length>0||!Array.isArray(value)&&value?_defineProperty({},key,value):{}}var defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},FontAwesomeIcon=react.forwardRef((function(props,ref){var allProps=_objectSpread2(_objectSpread2({},defaultProps),props),iconArgs=allProps.icon,maskArgs=allProps.mask,symbol=allProps.symbol,className=allProps.className,title=allProps.title,titleId=allProps.titleId,maskId=allProps.maskId,iconLookup=normalizeIconArgs(iconArgs),classes=objectWithKey("classes",[].concat(_toConsumableArray(function classList(props){var _classes,beat=props.beat,fade=props.fade,beatFade=props.beatFade,bounce=props.bounce,shake=props.shake,flash=props.flash,spin=props.spin,spinPulse=props.spinPulse,spinReverse=props.spinReverse,pulse=props.pulse,fixedWidth=props.fixedWidth,inverse=props.inverse,border=props.border,listItem=props.listItem,flip=props.flip,size=props.size,rotation=props.rotation,pull=props.pull,classes=(_defineProperty(_classes={"fa-beat":beat,"fa-fade":fade,"fa-beat-fade":beatFade,"fa-bounce":bounce,"fa-shake":shake,"fa-flash":flash,"fa-spin":spin,"fa-spin-reverse":spinReverse,"fa-spin-pulse":spinPulse,"fa-pulse":pulse,"fa-fw":fixedWidth,"fa-inverse":inverse,"fa-border":border,"fa-li":listItem,"fa-flip":!0===flip,"fa-flip-horizontal":"horizontal"===flip||"both"===flip,"fa-flip-vertical":"vertical"===flip||"both"===flip},"fa-".concat(size),null!=size),_defineProperty(_classes,"fa-rotate-".concat(rotation),null!=rotation&&0!==rotation),_defineProperty(_classes,"fa-pull-".concat(pull),null!=pull),_defineProperty(_classes,"fa-swap-opacity",props.swapOpacity),_classes);return Object.keys(classes).map((function(key){return classes[key]?key:null})).filter((function(key){return key}))}(allProps)),_toConsumableArray((className||"").split(" ")))),transform=objectWithKey("transform","string"==typeof allProps.transform?fontawesome_svg_core.qg.transform(allProps.transform):allProps.transform),mask=objectWithKey("mask",normalizeIconArgs(maskArgs)),renderedIcon=(0,fontawesome_svg_core.Kk)(iconLookup,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},classes),transform),mask),{},{symbol,title,titleId,maskId}));if(!renderedIcon)return function log(){var _console;!PRODUCTION&&console&&"function"==typeof console.error&&(_console=console).error.apply(_console,arguments)}("Could not find icon",iconLookup),null;var abstract=renderedIcon.abstract,extraProps={ref};return Object.keys(allProps).forEach((function(key){defaultProps.hasOwnProperty(key)||(extraProps[key]=allProps[key])})),convertCurry(abstract[0],extraProps)}));FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={beat:prop_types_default().bool,border:prop_types_default().bool,beatFade:prop_types_default().bool,bounce:prop_types_default().bool,className:prop_types_default().string,fade:prop_types_default().bool,flash:prop_types_default().bool,mask:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().array,prop_types_default().string]),maskId:prop_types_default().string,fixedWidth:prop_types_default().bool,inverse:prop_types_default().bool,flip:prop_types_default().oneOf([!0,!1,"horizontal","vertical","both"]),icon:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().array,prop_types_default().string]),listItem:prop_types_default().bool,pull:prop_types_default().oneOf(["right","left"]),pulse:prop_types_default().bool,rotation:prop_types_default().oneOf([0,90,180,270]),shake:prop_types_default().bool,size:prop_types_default().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:prop_types_default().bool,spinPulse:prop_types_default().bool,spinReverse:prop_types_default().bool,symbol:prop_types_default().oneOfType([prop_types_default().bool,prop_types_default().string]),title:prop_types_default().string,titleId:prop_types_default().string,transform:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().object]),swapOpacity:prop_types_default().bool};var convertCurry=function convert(createElement,element){var extraProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof element)return element;var children=(element.children||[]).map((function(child){return convert(createElement,child)})),mixins=Object.keys(element.attributes||{}).reduce((function(acc,key){var val=element.attributes[key];switch(key){case"class":acc.attrs.className=val,delete element.attributes.class;break;case"style":acc.attrs.style=function styleToObject(style){return style.split(";").map((function(s){return s.trim()})).filter((function(s){return s})).reduce((function(acc,pair){var i=pair.indexOf(":"),prop=camelize(pair.slice(0,i)),value=pair.slice(i+1).trim();return prop.startsWith("webkit")?acc[function capitalize(val){return val.charAt(0).toUpperCase()+val.slice(1)}(prop)]=value:acc[prop]=value,acc}),{})}(val);break;default:0===key.indexOf("aria-")||0===key.indexOf("data-")?acc.attrs[key.toLowerCase()]=val:acc.attrs[camelize(key)]=val}return acc}),{attrs:{}}),_extraProps$style=extraProps.style,existingStyle=void 0===_extraProps$style?{}:_extraProps$style,remaining=_objectWithoutProperties(extraProps,_excluded);return mixins.attrs.style=_objectSpread2(_objectSpread2({},mixins.attrs.style),existingStyle),createElement.apply(void 0,[element.tag,_objectSpread2(_objectSpread2({},mixins.attrs),remaining)].concat(_toConsumableArray(children)))}.bind(null,react.createElement),IconProvider=__webpack_require__("./src/components/Images/IconProvider.tsx");const DynamicIcon=({type="solid",iconName="cloud",size="lg",className})=>{const[icon,setIcon]=(0,react.useState)(null),[error,setError]=(0,react.useState)(!1),iconContext=(0,react.useContext)(IconProvider.V);if(!iconContext)return console.error("IconContext is undefined. Make sure you are using DynamicIcon within an IconProvider."),null;const{loaded,byPrefixAndName}=iconContext;return(0,react.useEffect)((()=>{if(!loaded)return;const iconPrefix=(type=>{switch(type){case"solid":default:return"fas";case"regular":return"far";case"light":return"fal";case"duotone":return"fad";case"kit":return"fak"}})(type),name=iconName;((prefix,name)=>{const iconLookup={prefix,iconName:name};if(byPrefixAndName)return!!byPrefixAndName[prefix]?.[name];return!!(0,fontawesome_svg_core.wu)(iconLookup)})(iconPrefix,name)?(setIcon([iconPrefix,name]),setError(!1)):(setIcon(null),setError(!0))}),[type,iconName,byPrefixAndName,loaded]),error&&loaded?react.createElement(FontAwesomeIcon,{icon:["fas","exclamation-triangle"],size,className,style:{height:"100%",width:"100%"}}):icon?react.createElement(FontAwesomeIcon,{icon,size,className,style:{height:"100%",width:"100%"}}):react.createElement(FontAwesomeIcon,{icon:["fas","spinner"],spin:!0,size,className,style:{height:"100%",width:"100%"}})},Images_DynamicIcon=DynamicIcon;DynamicIcon.__docgenInfo={description:"",methods:[],displayName:"DynamicIcon",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'regular' | 'light' | 'duotone' | 'kit'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'light'"},{name:"literal",value:"'duotone'"},{name:"literal",value:"'kit'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'cloud'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'",elements:[{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'1x'"},{name:"literal",value:"'2x'"},{name:"literal",value:"'3x'"},{name:"literal",value:"'4x'"},{name:"literal",value:"'5x'"},{name:"literal",value:"'6x'"},{name:"literal",value:"'7x'"},{name:"literal",value:"'8x'"},{name:"literal",value:"'9x'"},{name:"literal",value:"'10x'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}}}}]);