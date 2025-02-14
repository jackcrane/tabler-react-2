"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[283],{7682:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(6540),a=n(8453),r=n(7724),c=n(5072);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Alerts are used to display important messages to the user. Not to be confused with toasts."),"\n",l.createElement(t.h2,{id:"signature",style:{position:"relative"}},l.createElement(t.a,{href:"#signature","aria-label":"signature permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Signature"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'import { Alert } from "tabler-react-2";\n\n<Alert {...props}>{children}</Alert>;\n')),"\n",l.createElement(t.h3,{id:"props",style:{position:"relative"}},l.createElement(t.a,{href:"#props","aria-label":"props permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Props"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Prop"),l.createElement(t.th,null,"Required"),l.createElement(t.th,null,"Type"),l.createElement(t.th,null,"Default"),l.createElement(t.th,null,"Description"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"variant")),l.createElement(t.td,null,"No"),l.createElement(t.td,null,l.createElement(t.a,{href:"/utilities/colors"},"Color")),l.createElement(t.td),l.createElement(t.td,null,"The color variant of the alert.")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"title")),l.createElement(t.td,null,"No"),l.createElement(t.td,null,"String"),l.createElement(t.td),l.createElement(t.td,null,"The title of the alert.")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"onDismiss")),l.createElement(t.td,null,"No"),l.createElement(t.td,null,"function"),l.createElement(t.td),l.createElement(t.td,null,"A function that fires when the user clicks a close button.")),l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.code,null,"icon")),l.createElement(t.td,null,"No"),l.createElement(t.td,null,l.createElement(t.code,null,"React.ReactNode")),l.createElement(t.td),l.createElement(t.td,null,"An icon to be displayed in the alert.")))),"\n",l.createElement(t.h2,{id:"basic-usage",style:{position:"relative"}},l.createElement(t.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Basic Usage"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"Alert")," component is used to display an alert message."),"\n",l.createElement(c.I,null,l.createElement(r.Fc,null,"This is a basic alert.")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"<Alert>This is a basic alert.</Alert>\n")),"\n",l.createElement(t.h2,{id:"variants",style:{position:"relative"}},l.createElement(t.a,{href:"#variants","aria-label":"variants permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Variants"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"Alert")," component can be used to display different types of alerts. The ",l.createElement(t.code,null,"variant")," prop accepts a string value of ",l.createElement(t.code,null,"success"),", ",l.createElement(t.code,null,"failure"),", ",l.createElement(t.code,null,"warning"),", ",l.createElement(t.code,null,"info"),", ",l.createElement(t.code,null,"danger"),", or ",l.createElement(t.code,null,"dark"),"."),"\n",l.createElement(c.I,null,l.createElement("div",{style:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap",alignItems:"center"}},["success","failure","warning","info","danger","dark"].map((e=>l.createElement(r.Fc,{key:e,variant:e,title:e,style:{maxWidth:250,minWidth:150}},e," alert"))))),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'<Alert variant="success" title="success">\n  success alert\n</Alert>\n<Alert variant="failure" title="failure">\n  failure alert\n</Alert>\n')),"\n",l.createElement(t.h2,{id:"titles",style:{position:"relative"}},l.createElement(t.a,{href:"#titles","aria-label":"titles permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Titles"),"\n",l.createElement(t.p,null,"You can pass a ",l.createElement(t.code,null,"title")," prop to the ",l.createElement(t.code,null,"Alert")," component to display a title in boldface and the variant color."),"\n",l.createElement(c.I,null,l.createElement(r.Fc,{title:"My awesome title"},"A card with a title.")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'<Alert title="My awesome title">A card with a title.</Alert>\n')),"\n",l.createElement(t.h2,{id:"dismissible-alerts",style:{position:"relative"}},l.createElement(t.a,{href:"#dismissible-alerts","aria-label":"dismissible alerts permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Dismissible Alerts"),"\n",l.createElement(t.p,null,"You can pass an ",l.createElement(t.code,null,"onDismiss")," prop to the ",l.createElement(t.code,null,"Alert")," component to display a close button. When the user clicks the close button, the ",l.createElement(t.code,null,"onDismiss")," function is called."),"\n",l.createElement(c.I,null,l.createElement(r.Fc,{title:"Dismissible alert",onDismiss:()=>alert("Alert dismissed!")},l.createElement(t.p,null,"A dismissible alert."))),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'<Alert title="Dismissible alert" onDismiss={() => alert("Alert dismissed!")}>\n  A dismissible alert.\n</Alert>\n')),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note"),": The alert component does not manage its own state. If you want the alert to go away when the user clicks the close button, you must unmount it yourself."),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},i=n(2005);function u(e){return l.createElement(i.A,e,l.createElement(s,e))}i.A},7724:function(e,t,n){n.d(t,{Fc:function(){return C},eu:function(){return N},jd:function(){return _},Ex:function(){return x},Zp:function(){return w},J0:function(){return P}});var l=n(6540);function a(e,t){if(null==e)return{};var n={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(-1!==t.indexOf(l))continue;n[l]=e[l]}return n}var r=n(8168),c=n(9417),o=n(7387),s=n(4146);function i(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var u=l.createContext();var h={initialChunks:{}},d="PENDING",m="REJECTED";var f=function(e){return e};function p(e){var t=e.defaultResolveComponent,n=void 0===t?f:t,p=e.render,E=e.onLoad;function v(e,t){void 0===t&&(t={});var f=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function b(e){return t.cacheKey?t.cacheKey(e):f.resolve?f.resolve(e):"static"}function g(e,l,a){var r=t.resolveComponent?t.resolveComponent(e,l):n(e);return s(a,r,{preload:!0}),r}var y,S,A=function(e){var t=b(e),n=v[t];return n&&n.status!==m||((n=f.requireAsync(e)).status=d,v[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:f.resolve(e),chunkName:f.chunkName(e),error:t?t.message:t}),n.status=m}))),n},k=function(e){function n(n){var l;return(l=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:b(n)},i(!n.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(f.requireAsync(n).catch((function(){return null})),l.loadSync(),n.__chunkExtractor.addChunk(f.chunkName(n))),(0,c.A)(l)):(!1!==t.ssr&&(f.isReady&&f.isReady(n)||f.chunkName&&h.initialChunks[f.chunkName(n)])&&l.loadSync(),l)}(0,o.A)(n,e),n.getDerivedStateFromProps=function(e,t){var n=b(e);return(0,r.A)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var l=n.prototype;return l.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},l.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},l.componentWillUnmount=function(){this.mounted=!1},l.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},l.getCacheKey=function(){return b(this.props)},l.getCache=function(){return v[this.getCacheKey()]},l.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},l.triggerOnLoad=function(){var e=this;E&&setTimeout((function(){E(e.state.result,e.props)}))},l.loadSync=function(){if(this.state.loading)try{var e=g(f.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:f.resolve(this.props),chunkName:f.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},l.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=g(t,e.props,C);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},l.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,a(e,["__chunkExtractor","forwardedRef"]));return A(t)},l.render=function(){var e=this.props,n=e.forwardedRef,l=e.fallback,c=(e.__chunkExtractor,a(e,["forwardedRef","fallback","__chunkExtractor"])),o=this.state,s=o.error,i=o.loading,u=o.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===d)throw this.loadAsync();if(s)throw s;var h=l||t.fallback||null;return i?h:p({fallback:h,result:u,options:t,props:(0,r.A)({},c,{ref:n})})},n}(l.Component),w=(S=function(e){return l.createElement(u.Consumer,null,(function(t){return l.createElement(y,Object.assign({__chunkExtractor:t},e))}))},(y=k).displayName&&(S.displayName=y.displayName+"WithChunkExtractor"),S),C=l.forwardRef((function(e,t){return l.createElement(w,Object.assign({forwardedRef:t},e))}));return C.displayName="Loadable",C.preload=function(e){C.load(e)},C.load=function(e){return A(e)},C}return{loadable:v,lazy:function(e,t){return v(e,(0,r.A)({},t,{suspense:!0}))}}}var E=p({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return l.createElement(t,n)}}),v=E.loadable,b=E.lazy,g=p({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),y=g.loadable,S=g.lazy;var A=v;A.lib=y,b.lib=S;var k=A;const w=k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Card)))),C=(k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Typography)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Alert))))),N=k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Avatar)))),_=k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.AvatarStackedList)))),x=k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Badge)))),P=(k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Breadcrumb)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Button)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Dropdown)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Form)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Input)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Modal)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Ribbon)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Spinner)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Steps)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Table)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Timeline)))),k((()=>Promise.all([n.e(869),n.e(259),n.e(43)]).then(n.t.bind(n,4043,23)).then((e=>e.Util)))))}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-docs-query-js-content-file-path-src-docs-components-alerts-mdx-c9e80bc6eb5e4177866a.js.map