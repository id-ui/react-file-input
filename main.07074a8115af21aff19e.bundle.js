(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1081:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(58),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1082);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1082:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters})),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    html {\n      font-size: 10px;\n    }\n    \n    body {\n      font-size: 1.4rem;\n      font-family: Roboto, sans-serif;\n      color: #141414;\n    }\n    \n    * {\n      box-sizing: border-box;\n      padding: 0;\n      margin: 0;\n      outline: none;\n    }\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.a)(_templateObject()),parameters={layout:"centered"},decorators=[function(Story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle,null))}]},1083:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(360).configure)([__webpack_require__(1084)],module,!1)}).call(this,__webpack_require__(119)(module))},1084:function(module,exports,__webpack_require__){var map={"./components/FileInput/fileInput.stories.js":1088};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1084},1088:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"playground",(function(){return fileInput_stories_playground})),__webpack_require__.d(__webpack_exports__,"ImageField",(function(){return fileInput_stories_ImageField})),__webpack_require__.d(__webpack_exports__,"DragAndDrop",(function(){return fileInput_stories_DragAndDrop}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styled_components_browser_esm=__webpack_require__(115),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),UploadArea=styled_components_browser_esm.b.div.withConfig({displayName:"styled__UploadArea",componentId:"idui-file__sc-14ht7qq-0"})(["position:relative;width:100%;height:15rem;display:flex;align-items:center;justify-content:center;border:1px dashed #b4b4b4;color:#343434;text-align:center;border-radius:0.3rem;padding:1rem;img{height:100%;width:auto;max-width:100%;}"]),Input=styled_components_browser_esm.b.input.attrs({type:"file"}).withConfig({displayName:"styled__Input",componentId:"idui-file__sc-14ht7qq-1"})(["opacity:0;position:absolute;z-index:1;top:0;right:0;left:0;bottom:0;width:100%;cursor:pointer;"]);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)})(Class)}function _construct(Parent,args,Class){return(_construct=_isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var TooLargeFileError=function(_Error){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(TooLargeFileError,_Error);var _super=function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}(TooLargeFileError);function TooLargeFileError(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TooLargeFileError),(_this=_super.call(this)).message="Too large file",_this}return TooLargeFileError}(_wrapNativeSuper(Error));function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var toMB=function toMB(size){return size/Math.pow(1024,2)};function FileInput(_ref){var onStartUploading=_ref.onStartUploading,onChange=_ref.onChange,onError=_ref.onError,multiple=_ref.multiple,onUpload=_ref.onUpload,maxFileSize=_ref.maxFileSize,props=_objectWithoutProperties(_ref,["onStartUploading","onChange","onError","multiple","onUpload","maxFileSize"]),inputRef=Object(react.useRef)(),handleChange=function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(e){var files,result,reader;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(e.persist(),files=e.target.files,onStartUploading(),_context.prev=3,!maxFileSize||!(multiple?files:[files[0]]).some((function(file){return toMB(file.size)>maxFileSize}))){_context.next=6;break}throw new TooLargeFileError;case 6:if(!onUpload){_context.next=13;break}return _context.next=9,onUpload(multiple?files:files[0],e);case 9:(result=_context.sent)&&(onChange(result,files,e),inputRef.current.value=null),_context.next=16;break;case 13:(reader=new FileReader).onload=function(progressEvent){onChange(progressEvent.target.result,e),inputRef.current.value=null},reader.readAsDataURL(files[0]);case 16:_context.next=21;break;case 18:_context.prev=18,_context.t0=_context.catch(3),onError(_context.t0);case 21:case"end":return _context.stop()}}),_callee,null,[[3,18]])})));return function handleChange(_x){return _ref2.apply(this,arguments)}}();return react_default.a.createElement(Input,_extends({onChange:handleChange,ref:inputRef,multiple:multiple},props))}function FileInputWithDraggableContainer(_ref3){var _useState2,isDragging,setDragging,handleDragEnd,render=_ref3.render,props=_objectWithoutProperties(_ref3,["render"]);return render({dragContainerProps:(_useState2=_slicedToArray(Object(react.useState)(),2),isDragging=_useState2[0],setDragging=_useState2[1],{onDragEnter:function handleDragEnter(){setDragging(!0)},onDragLeave:handleDragEnd=function handleDragEnd(){setDragging(!1)},onDragExit:handleDragEnd,onDragEnd:handleDragEnd,onDrop:handleDragEnd,isDragging:isDragging}),fileInput:react_default.a.createElement(FileInput,props)})}FileInput.prpTypes={onStartUploading:prop_types_default.a.func,onChange:prop_types_default.a.func,onError:prop_types_default.a.func,onUpload:prop_types_default.a.func,multiple:prop_types_default.a.bool,name:prop_types_default.a.string,accepts:prop_types_default.a.string,maxFileSize:prop_types_default.a.number},FileInput.defaultProps={onStartUploading:function onStartUploading(){},onChange:function onChange(){},onError:function onError(){},multiple:!1};var FileInput_FileInput=function FileInputContainer(_ref4){var children=_ref4.children,props=_objectWithoutProperties(_ref4,["children"]);return"function"==typeof children?react_default.a.createElement(FileInputWithDraggableContainer,_extends({render:children},props)):react_default.a.createElement(FileInput,props)};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function fileInput_stories_extends(){return(fileInput_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function fileInput_stories_slicedToArray(arr,i){return function fileInput_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function fileInput_stories_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function fileInput_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return fileInput_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fileInput_stories_arrayLikeToArray(o,minLen)}(arr,i)||function fileInput_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fileInput_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function fileInput_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function fileInput_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_exports__.default={title:"FileInput",component:FileInput_FileInput,argTypes:{onStartUploading:{disable:!0,action:"onStartUploading",description:"Handler called before uploading started"},onUpload:{disable:!0,action:"onUpload",description:"Handler called with (multiple ? first file : files, event). It should return promise that resoles future onChange result (For example file src)"},onChange:{disable:!0,action:"onChange",description:"Handler called with (result, event), where result is onUpload result or, if onUpload not provided, FileReader result, event is onChange event"},onError:{disable:!0,action:"onError",description:"Handler called if an error occurred"},children:{disable:!0,description:'if children is function then it called with { fileInput, dragContainerProps }, you should render fileInput inside drag container and provide drag container with dragContainerProps. There is "isDragging" prop inside dragContainerProps, so you can use it for styling.'},maxFileSize:{control:"number",description:'maximum size of file (MB) for uploading (if actual size of file more then onError fired with Error { message: "Too large file" } )'},accepts:{control:"string",description:"acceptable types of files"},multiple:{control:"boolean",description:"whether you want fileInput to accept multiple files or not",defaultValue:!1,table:{defaultValue:{summary:!1}}},name:{control:"string",description:"input name"}}};var fileInput_stories_playground=function playground(props){return react_default.a.createElement(react.Fragment,null,"Click on document, play with props, check actions tab",react_default.a.createElement(FileInput_FileInput,props))},fileInput_stories_ImageField=function ImageField(_ref){_ref.onUpload;var onChange=_ref.onChange,props=fileInput_stories_objectWithoutProperties(_ref,["onUpload","onChange"]),_useState2=fileInput_stories_slicedToArray(Object(react.useState)(),2),value=_useState2[0],setValue=_useState2[1],handleChange=Object(react.useCallback)((function(src,e){setValue(src),onChange(src,e)}),[onChange]);return react_default.a.createElement(UploadArea,null,react_default.a.createElement(FileInput_FileInput,fileInput_stories_extends({},props,{onChange:handleChange,accept:"image/*"})),value?react_default.a.createElement("img",{alt:"",src:value}):react_default.a.createElement("span",null,"Drop file here or click to upload"))},DragUploadArea=Object(styled_components_browser_esm.b)(UploadArea).withConfig({displayName:"fileInputstories__DragUploadArea",componentId:"idui-file__blhvh3-0"})(["height:40rem;width:60rem;background-color:",";"],(function(props){return props.isDragging?"#C7F9F1":"#FFFFFF"})),fileInput_stories_DragAndDrop=function DragAndDrop(_ref2){_ref2.onUpload;var props=fileInput_stories_objectWithoutProperties(_ref2,["onUpload"]),_useState4=fileInput_stories_slicedToArray(Object(react.useState)(),2),value=_useState4[0],setValue=_useState4[1];return react_default.a.createElement(FileInput_FileInput,fileInput_stories_extends({},props,{onChange:setValue,accept:"image/*"}),(function(_ref3){var dragContainerProps=_ref3.dragContainerProps,fileInput=_ref3.fileInput;return react_default.a.createElement(DragUploadArea,dragContainerProps,fileInput,value?react_default.a.createElement("img",{alt:"",src:value}):react_default.a.createElement("span",null,dragContainerProps.isDragging?"Drop here":"Drop file here or click to upload"))}))};fileInput_stories_playground.parameters=_objectSpread({storySource:{source:"function playground(props) {\n  return (\n    <Fragment>\n      Click on document, play with props, check actions tab\n      <FileInput {...props} />\n    </Fragment>\n  );\n}"}},fileInput_stories_playground.parameters),fileInput_stories_ImageField.parameters=_objectSpread({storySource:{source:'function ImageField({ onUpload, onChange, ...props }) {\n  const [value, setValue] = useState();\n\n  const handleChange = useCallback(\n    (src, e) => {\n      setValue(src);\n      onChange(src, e);\n    },\n    [onChange]\n  );\n\n  return (\n    <UploadArea>\n      <FileInput {...props} onChange={handleChange} accept="image/*" />\n      {value ? (\n        <img alt="" src={value} />\n      ) : (\n        <span>Drop file here or click to upload</span>\n      )}\n    </UploadArea>\n  );\n}'}},fileInput_stories_ImageField.parameters),fileInput_stories_DragAndDrop.parameters=_objectSpread({storySource:{source:"function DragAndDrop({ onUpload, ...props }) {\n  const [value, setValue] = useState();\n\n  return (\n    <FileInput {...props} onChange={setValue} accept=\"image/*\">\n      {({ dragContainerProps, fileInput }) => (\n        <DragUploadArea {...dragContainerProps}>\n          {fileInput}\n\n          {value ? (\n            <img alt=\"\" src={value} />\n          ) : (\n            <span>\n              {dragContainerProps.isDragging\n                ? 'Drop here'\n                : 'Drop file here or click to upload'}\n            </span>\n          )}\n        </DragUploadArea>\n      )}\n    </FileInput>\n  );\n}"}},fileInput_stories_DragAndDrop.parameters)},480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(653),__webpack_require__(654),__webpack_require__(810),__webpack_require__(1028),__webpack_require__(1060),__webpack_require__(1072),__webpack_require__(1074),__webpack_require__(1079),__webpack_require__(1081),module.exports=__webpack_require__(1083)},555:function(module,exports){},654:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(360)}},[[480,1,2]]]);
//# sourceMappingURL=main.07074a8115af21aff19e.bundle.js.map