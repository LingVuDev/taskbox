(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators})),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),dist=(__webpack_require__("./src/index.css"),__webpack_require__("./node_modules/msw-storybook-addon/dist/index.js"));Object(dist.initialize)();var decorators=[dist.mswDecorator],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/msw-storybook-addon/dist sync recursive":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./node_modules/msw-storybook-addon/dist sync recursive"},"./src/components/Task.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"list-item ".concat(state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)},id:"archiveTask-".concat(id),"aria-label":"archiveTask-".concat(id)})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"title",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()},children:"TASK_ARCHIVED"!==state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{onClick:function onClick(){return onPinTask(id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"icon-star",id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id)})})})]})}Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},"./src/components/TaskList.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TaskList}));var _home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),_Task__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-redux/es/index.js"),_lib_store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/store.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TaskList(){var tasks=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.c)((function(state){return[].concat(Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(state.taskbox.tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(state.taskbox.tasks.filter((function(t){return"TASK_PINNED"!==t.state})))).filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))})),status=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.c)((function(state){return state.taskbox})).status,dispatch=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.b)(),LoadingRow=Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"loading-item",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"glow-checkbox"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:"glow-text",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Loading"})," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"cool"})," ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"state"})]})]});return"loading"===status?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"list-items","data-testid":"loading",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]},"loading"):0===tasks.length?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"list-items","data-testid":"empty",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"wrapper-message",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"icon-check"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"title-message",children:"You have no tasks"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"list-items","data-testid":"success",children:tasks.map((function(task){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_2__.a,{task:task,onPinTask:function onPinTask(task){return function pinTask(value){dispatch(Object(_lib_store__WEBPACK_IMPORTED_MODULE_4__.c)({id:value,newTaskState:"TASK_PINNED"}))}(task)},onArchiveTask:function onArchiveTask(task){return function archiveTask(value){dispatch(Object(_lib_store__WEBPACK_IMPORTED_MODULE_4__.c)({id:value,newTaskState:"TASK_ARCHIVED"}))}(task)}},task.id)}))},"success")}TaskList.__docgenInfo={description:"TaskLists are a continuous group of tasks. They are composed of items containing primary and supplemental actions, which are represented by text.",methods:[],displayName:"TaskList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src/components/TaskList.js"})},"./src/index.css":function(module,exports,__webpack_require__){},"./src/lib/store.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return fetchTasks})),__webpack_require__.d(__webpack_exports__,"c",(function(){return updateTaskState}));var _home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),fetchTasks=Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.b)("todos/fetchTodos",Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(){var response,data,result;return _home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("https://jsonplaceholder.typicode.com/todos?userId=1");case 2:return response=_context.sent,_context.next=5,response.json();case 5:return data=_context.sent,result=data.map((function(task){return{id:"".concat(task.id),title:task.title,state:task.completed?"TASK_ARCHIVED":"TASK_INBOX"}})),_context.abrupt("return",result);case 8:case"end":return _context.stop()}}),_callee)})))),TasksSlice=Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.c)({name:"taskbox",initialState:{tasks:[],status:"idle",error:null},reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.tasks.findIndex((function(task){return task.id===id}));task>=0&&(state.tasks[task].state=newTaskState)}},extraReducers:function extraReducers(builder){builder.addCase(fetchTasks.pending,(function(state){state.status="loading",state.error=null,state.tasks=[]})).addCase(fetchTasks.fulfilled,(function(state,action){state.status="succeeded",state.error=null,state.tasks=action.payload})).addCase(fetchTasks.rejected,(function(state){state.status="failed",state.error="Something went wrong",state.tasks=[]}))}}),updateTaskState=TasksSlice.actions.updateTaskState,store=Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.a)({reducer:{taskbox:TasksSlice.reducer}});__webpack_exports__.a=store},"./src/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.js)$":function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":"./src/stories/InboxScreen.stories.js","./Task.stories.js":"./src/stories/Task.stories.js","./TaskList.stories.js":"./src/stories/TaskList.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.js)$"},"./src/stories/InboxScreen.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error}));var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regenerator=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),store=__webpack_require__("./src/lib/store.js"),TaskList=__webpack_require__("./src/components/TaskList.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function InboxScreen(){var dispatch=Object(es.b)(),error=Object(es.c)((function(state){return state.taskbox})).error;return Object(react.useEffect)((function(){dispatch(Object(store.b)())}),[dispatch]),error?Object(jsx_runtime.jsx)("div",{className:"page lists-show",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-face-sad"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"Oh no!"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Something went wrong"})]})}):Object(jsx_runtime.jsxs)("div",{className:"page lists-show",children:[Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)("h1",{className:"title-page",children:Object(jsx_runtime.jsx)("span",{className:"title-wrapper",children:"Taskbox"})})}),Object(jsx_runtime.jsx)(TaskList.a,{})]})}InboxScreen.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"InboxScreen",docgenInfo:InboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"});var rest_deps=__webpack_require__("./node_modules/msw/lib/esm/rest-deps.js"),TaskList_stories=__webpack_require__("./src/stories/TaskList.stories.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),InboxScreen_stories_Template=(__webpack_exports__.default={component:InboxScreen,title:"Screens/InboxScreen",decorators:[function(Story){return Object(jsx_runtime.jsx)(es.a,{store:store.a,children:Object(jsx_runtime.jsx)(Story,{})})}]},function Template(){return Object(jsx_runtime.jsx)(InboxScreen,{})}),Default=InboxScreen_stories_Template.bind({});Default.parameters={msw:{handlers:[rest_deps.e.get("https://jsonplaceholder.typicode.com/todos?userId=1",(function(req,res,ctx){return res(ctx.json(TaskList_stories.MockedState.tasks))}))]}},Default.play=function(){var _ref2=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee2(_ref){var canvasElement,canvas;return regenerator_default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref.canvasElement,canvas=Object(esm.d)(canvasElement),_context2.t0=esm.c,_context2.next=5,canvas.findByTestId("loading");case 5:return _context2.t1=_context2.sent,_context2.next=8,(0,_context2.t0)(_context2.t1);case 8:return _context2.next=10,Object(esm.b)(Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,esm.a.click(canvas.getByLabelText("pinTask-1"));case 2:return _context.next=4,esm.a.click(canvas.getByLabelText("pinTask-3"));case 4:case"end":return _context.stop()}}),_callee)}))));case 10:case"end":return _context2.stop()}}),_callee2)})));return function(_x){return _ref2.apply(this,arguments)}}();var Error=InboxScreen_stories_Template.bind({});Error.parameters={msw:{handlers:[rest_deps.e.get("https://jsonplaceholder.typicode.com/todos?userId=1",(function(req,res,ctx){return res(ctx.status(403))}))]}},Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <InboxScreen />"}},Default.parameters),Error.parameters=Object(objectSpread2.a)({storySource:{source:"() => <InboxScreen />"}},Error.parameters)},"./src/stories/Task.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));var _home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components_Task__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Task.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_components_Task__WEBPACK_IMPORTED_MODULE_2__.a,title:"Components/Task"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=function Default(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))};Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(_home_runner_work_taskbox_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Task {...args} />"}},Archived.parameters),Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Task.stories.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/stories/Task.stories.js"})},"./src/stories/TaskList.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MockedState",(function(){return MockedState})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var toConsumableArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js")),TaskList=__webpack_require__("./src/components/TaskList.js"),Task=__webpack_require__("./src/components/Task.js"),Task_stories=__webpack_require__("./src/stories/Task.stories.js"),dist_esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js");function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(dist_esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(dist_esm.b)(esm.f,{mdxType:"Title"}),Object(dist_esm.b)(esm.e,{mdxType:"Subtitle"}),Object(dist_esm.b)(esm.b,{mdxType:"Description"}),Object(dist_esm.b)(esm.c,{mdxType:"Primary"}),Object(dist_esm.b)(esm.a,{story:TaskList.a,mdxType:"ArgsTable"}),Object(dist_esm.b)("h2",{id:"related"},"Related"),Object(dist_esm.b)("ul",null,Object(dist_esm.b)("li",{parentName:"ul"},Object(dist_esm.b)("a",{href:"?path=/docs/components-task--default"},"<Task />")),Object(dist_esm.b)("li",{parentName:"ul"},Object(dist_esm.b)("a",{href:"?path=/docs/screens-inboxscreen--default"},"<InboxScreen />"))),Object(dist_esm.b)(esm.d,{mdxType:"Stories"}))}MDXContent.isMDXComponent=!0;var es=__webpack_require__("./node_modules/react-redux/es/index.js"),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MockedState={tasks:[Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"1",title:"Task 1"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"2",title:"Task 2"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"3",title:"Task 3"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"4",title:"Task 4"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"5",title:"Task 5"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"6",title:"Task 6"})],status:"idle",error:null},TaskList_stories_Mockstore=function Mockstore(_ref){var taskboxState=_ref.taskboxState,children=_ref.children;return Object(jsx_runtime.jsx)(es.a,{store:Object(redux_toolkit_esm.a)({reducer:{taskbox:Object(redux_toolkit_esm.c)({name:"taskbox",initialState:taskboxState,reducers:{updateTaskState:function updateTaskState(state,action){var _action$payload=action.payload,id=_action$payload.id,newTaskState=_action$payload.newTaskState,task=state.tasks.findIndex((function(task){return task.id===id}));task>=0&&(state.tasks[task].state=newTaskState)}}}).reducer}}),children:children})},TaskList_stories_Template=(__webpack_exports__.default={component:TaskList.a,title:"Components/TaskList",decorators:[function(story){return Object(jsx_runtime.jsx)("div",{style:{padding:"3rem"},children:story()})}],subcomponents:{Task:Task.a},parameters:{docs:{page:MDXContent}},excludeStories:/.*MockedState$/},function Template(){return Object(jsx_runtime.jsx)(TaskList.a,{})}),Default=TaskList_stories_Template.bind({});Default.decorators=[function(story){return Object(jsx_runtime.jsx)(TaskList_stories_Mockstore,{taskboxState:MockedState,children:story()})}];var WithPinnedTasks=TaskList_stories_Template.bind({});WithPinnedTasks.decorators=[function(story){var pinnedtasks=[].concat(Object(toConsumableArray.a)(MockedState.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);return Object(jsx_runtime.jsx)(TaskList_stories_Mockstore,{taskboxState:Object(objectSpread2.a)(Object(objectSpread2.a)({},MockedState),{},{tasks:pinnedtasks}),children:story()})}];var Loading=TaskList_stories_Template.bind({});Loading.decorators=[function(story){return Object(jsx_runtime.jsx)(TaskList_stories_Mockstore,{taskboxState:Object(objectSpread2.a)(Object(objectSpread2.a)({},MockedState),{},{status:"loading"}),children:story()})}];var Empty=TaskList_stories_Template.bind({});Empty.decorators=[function(story){return Object(jsx_runtime.jsx)(TaskList_stories_Mockstore,{taskboxState:Object(objectSpread2.a)(Object(objectSpread2.a)({},MockedState),{},{tasks:[]}),children:story()})}],Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <TaskList />"}},Default.parameters),WithPinnedTasks.parameters=Object(objectSpread2.a)({storySource:{source:"() => <TaskList />"}},WithPinnedTasks.parameters),Loading.parameters=Object(objectSpread2.a)({storySource:{source:"() => <TaskList />"}},Loading.parameters),Empty.parameters=Object(objectSpread2.a)({storySource:{source:"() => <TaskList />"}},Empty.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);