"use strict";(self.webpackChunk_fusillo_storybook=self.webpackChunk_fusillo_storybook||[]).push([[8886],{"../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"../../node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createContextScope,q:()=>createContext2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");function createContext2(rootComponentName,defaultContext){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);function Provider(props){const{children,...context}=props,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}},"../../node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"../../node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"../../packages/ui/components/progress/progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Brand:()=>Brand,Danger:()=>Danger,Default:()=>Default,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>progress_stories});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),index_esm=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),console=__webpack_require__("../../node_modules/console-browserify/index.js"),[createProgressContext,createProgressScope]=(0,dist.A)("Progress"),[ProgressProvider,useProgressContext]=createProgressContext("Progress"),Progress=react.forwardRef(((props,forwardedRef)=>{const{__scopeProgress,value:valueProp=null,max:maxProp,getValueLabel=defaultGetValueLabel,...progressProps}=props;!maxProp&&0!==maxProp||isValidMaxNumber(maxProp)||console.error(function getInvalidMaxError(propValue,componentName){return`Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`}(`${maxProp}`,"Progress"));const max=isValidMaxNumber(maxProp)?maxProp:100;null===valueProp||isValidValueNumber(valueProp,max)||console.error(function getInvalidValueError(propValue,componentName){return`Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`}(`${valueProp}`,"Progress"));const value=isValidValueNumber(valueProp,max)?valueProp:null,valueLabel=isNumber(value)?getValueLabel(value,max):void 0;return(0,jsx_runtime.jsx)(ProgressProvider,{scope:__scopeProgress,value,max,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{"aria-valuemax":max,"aria-valuemin":0,"aria-valuenow":isNumber(value)?value:void 0,"aria-valuetext":valueLabel,role:"progressbar","data-state":getProgressState(value,max),"data-value":value??void 0,"data-max":max,...progressProps,ref:forwardedRef})})}));Progress.displayName="Progress";var ProgressIndicator=react.forwardRef(((props,forwardedRef)=>{const{__scopeProgress,...indicatorProps}=props,context=useProgressContext("ProgressIndicator",__scopeProgress);return(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{"data-state":getProgressState(context.value,context.max),"data-value":context.value??void 0,"data-max":context.max,...indicatorProps,ref:forwardedRef})}));function defaultGetValueLabel(value,max){return`${Math.round(value/max*100)}%`}function getProgressState(value,maxValue){return null==value?"indeterminate":value===maxValue?"complete":"loading"}function isNumber(value){return"number"==typeof value}function isValidMaxNumber(max){return isNumber(max)&&!isNaN(max)&&max>0}function isValidValueNumber(value,max){return isNumber(value)&&!isNaN(value)&&value<=max&&value>=0}ProgressIndicator.displayName="ProgressIndicator";var Root=Progress,Indicator=ProgressIndicator,twMerge=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className","status","value"],__jsx=react.createElement,progressVariants=(0,index_esm.F)(["progress-component"],{variants:{status:{default:"progress-component-default",brand:"progress-component-brand",danger:"progress-component-danger",warning:"progress-component-warning"}},defaultVariants:{status:"default"}}),progress_Progress=react.forwardRef((function(_ref,ref){var className=_ref.className,status=_ref.status,value=_ref.value,props=(0,objectWithoutProperties.A)(_ref,_excluded);return __jsx(Root,(0,esm_extends.A)({ref,className:(0,twMerge.cn)(progressVariants({status,className}))},props),__jsx(Indicator,{className:"progress-indicator","data-variant":status,style:{transform:"translateX(-".concat(100-(value||0),"%)")}}))}));progress_Progress.displayName=Root.displayName,progress_Progress.__docgenInfo={description:"",methods:[]};var progress_stories_jsx=react.createElement;const progress_stories={title:"Components/Progress",component:progress_Progress,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","brand","danger","warning"],description:"Define the type of message communicated by the badge.",table:{defaultValue:{summary:"default"},type:{summary:null}}},value:{description:"The progress value.",table:{type:{summary:null}}},asChild:{control:"boolean",description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",table:{defaultValue:{summary:!1},type:{summary:null}}}},args:{status:"default"},parameters:{layout:"centered",docs:{description:{component:"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."}},design:{type:"figma",url:"https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8872&t=nua4UmG9Iu1hfUAm-1"}}};var Default={render:function render(args){return progress_stories_jsx(progress_Progress,(0,esm_extends.A)({},args,{className:"w-[400px]"}))},args:{status:"default",value:33}},Brand={render:function render(args){return progress_stories_jsx(progress_Progress,(0,esm_extends.A)({},args,{className:"w-[400px]"}))},args:{status:"brand",value:33}},Danger={render:function render(args){return progress_stories_jsx(progress_Progress,(0,esm_extends.A)({},args,{className:"w-[400px]"}))},args:{status:"danger",value:33}},Warning={render:function render(args){return progress_stories_jsx(progress_Progress,(0,esm_extends.A)({},args,{className:"w-[400px]"}))},args:{status:"warning",value:33}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Progress {...args} className="w-[400px]" />,\n  args: {\n    status: "default",\n    value: 33\n  }\n}',...Default.parameters?.docs?.source}}},Brand.parameters={...Brand.parameters,docs:{...Brand.parameters?.docs,source:{originalSource:'{\n  render: args => <Progress {...args} className="w-[400px]" />,\n  args: {\n    status: "brand",\n    value: 33\n  }\n}',...Brand.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'{\n  render: args => <Progress {...args} className="w-[400px]" />,\n  args: {\n    status: "danger",\n    value: 33\n  }\n}',...Danger.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  render: args => <Progress {...args} className="w-[400px]" />,\n  args: {\n    status: "warning",\n    value: 33\n  }\n}',...Warning.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Brand","Danger","Warning"]},"../../packages/lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.Q)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"../../node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);