"use strict";(self.webpackChunk_fusillo_storybook=self.webpackChunk_fusillo_storybook||[]).push([[4770],{"../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");function composeRefs(...refs){return node=>refs.forEach((ref=>function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"../../node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"../../node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children);return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{...mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef})}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"../../packages/ui/components/separator/separator.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_separator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/components/separator/separator.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Separator",component:_separator__WEBPACK_IMPORTED_MODULE_1__.w,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Define the axis that will divide the separator",table:{defaultValue:{summary:"horizontal"},type:{summary:null}}},asChild:{table:{disable:!0}}},parameters:{layout:"centered",docs:{description:{component:"Visually or semantically separates content."}},design:{type:"figma",url:"https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8876&t=nua4UmG9Iu1hfUAm-1"}}};var Default={render:function render(args){return __jsx("div",null,__jsx("div",{className:"space-y-1"},__jsx("h4",{className:"text-lg-semibold"},"fusillo Design System"),__jsx("p",{className:"text-md text-description"},"Crafting inclusive experiences for everyone")),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,(0,_Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args,{orientation:"horizontal",className:"my-4"})),__jsx("div",{className:"text-md flex h-6 items-center space-x-4"},__jsx("div",null,"Blog"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,(0,_Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args,{orientation:"vertical"})),__jsx("div",null,"Docs"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,(0,_Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args,{orientation:"vertical"})),__jsx("div",null,"Source")))},args:{orientation:"horizontal"}},Horizontal={render:function render(args){return __jsx("div",null,__jsx("h4",{className:"text-lg-semibold"},"fusillo Design System"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,(0,_Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args,{className:"my-4"})),__jsx("p",{className:"text-md text-description"},"Crafting inclusive experiences for everyone"))},args:{orientation:"horizontal"},argTypes:{orientation:{table:{disable:!0}}}},Vertical={render:function render(args){return __jsx("div",{className:"text-md flex h-6 items-center space-x-4"},__jsx("div",null,"Blog"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,(0,_Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args,{orientation:"vertical"})),__jsx("div",null,"Docs"),__jsx(_separator__WEBPACK_IMPORTED_MODULE_1__.w,(0,_Users_kkratter_Desktop_kkratter_Progetti_Al_dente_fusillo_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args,{orientation:"vertical"})),__jsx("div",null,"Source"))},args:{orientation:"vertical"},argTypes:{orientation:{table:{disable:!0}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <div className="space-y-1">\n        <h4 className="text-lg-semibold">fusillo Design System</h4>\n        <p className="text-md text-description">Crafting inclusive experiences for everyone</p>\n      </div>\n      <Separator {...args} orientation="horizontal" className="my-4" />\n      <div className="text-md flex h-6 items-center space-x-4">\n        <div>Blog</div>\n        <Separator {...args} orientation="vertical" />\n        <div>Docs</div>\n        <Separator {...args} orientation="vertical" />\n        <div>Source</div>\n      </div>\n    </div>,\n  args: {\n    orientation: "horizontal"\n  }\n}',...Default.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <h4 className="text-lg-semibold">fusillo Design System</h4>\n      <Separator {...args} className="my-4" />\n      <p className="text-md text-description">Crafting inclusive experiences for everyone</p>\n    </div>,\n  args: {\n    orientation: "horizontal"\n  },\n  argTypes: {\n    orientation: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}',...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  render: args => <div className="text-md flex h-6 items-center space-x-4">\n      <div>Blog</div>\n      <Separator {...args} orientation="vertical" />\n      <div>Docs</div>\n      <Separator {...args} orientation="vertical" />\n      <div>Source</div>\n    </div>,\n  args: {\n    orientation: "vertical"\n  },\n  argTypes: {\n    orientation: {\n      table: {\n        disable: true\n      }\n    }\n  }\n}',...Vertical.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Horizontal","Vertical"]},"../../packages/lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.Q)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"../../packages/ui/components/separator/separator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>separator_Separator});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),DEFAULT_ORIENTATION="horizontal",ORIENTATIONS=["horizontal","vertical"],Separator=react.forwardRef(((props,forwardedRef)=>{const{decorative,orientation:orientationProp=DEFAULT_ORIENTATION,...domProps}=props,orientation=function isValidOrientation(orientation){return ORIENTATIONS.includes(orientation)}(orientationProp)?orientationProp:DEFAULT_ORIENTATION,semanticProps=decorative?{role:"none"}:{"aria-orientation":"vertical"===orientation?orientation:void 0,role:"separator"};return(0,jsx_runtime.jsx)(dist.sG.div,{"data-orientation":orientation,...semanticProps,...domProps,ref:forwardedRef})}));Separator.displayName="Separator";var Root=Separator,twMerge=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className","orientation","decorative"],__jsx=react.createElement,separator_Separator=react.forwardRef((function(_ref,ref){var className=_ref.className,_ref$orientation=_ref.orientation,orientation=void 0===_ref$orientation?"horizontal":_ref$orientation,_ref$decorative=_ref.decorative,decorative=void 0===_ref$decorative||_ref$decorative,props=(0,objectWithoutProperties.A)(_ref,_excluded);return __jsx(Root,(0,esm_extends.A)({ref,decorative,orientation,className:(0,twMerge.cn)("separator-component","horizontal"===orientation?"separator-horizontal":"separator-vertical",className)},props))}));separator_Separator.displayName=Root.displayName,separator_Separator.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}}},"../../node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);