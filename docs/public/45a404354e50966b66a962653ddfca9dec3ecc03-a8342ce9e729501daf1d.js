(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[502],{2005:function(e,t,r){"use strict";r.d(t,{A:function(){return m}});var n=r(6540),o=r(8600),s=r(1701),i=r(4810),a=r(9644),c=r(3942);const u=(0,c.A)("section",{target:"e1jikabl1"})({name:"ns1hxi",styles:"display:flex;justify-content:space-between;align-items:center;padding:48px 0;width:100%;@media (max-width: 780px){flex-direction:column;}"}),l=(0,c.A)("div",{target:"e1jikabl0"})("transition:all 200ms;",(e=>{let{isLeft:t}=e;return!t&&"margin-left: auto;"})," a{display:flex;text-decoration:none;justify-content:center;align-items:center;width:100%;height:100%;svg{width:25px;height:25px;color:",(e=>{let{theme:t}=e;return t.colors.text}),";",(e=>{let{isLeft:t}=e;return t?"margin-right: 16px":"margin-left: 16px"}),";}p{letter-spacing:0.142em;text-transform:uppercase;font-size:12px;margin:0;color:",(e=>{let{theme:t}=e;return t.colors.text}),";}h3{color:",(e=>{let{theme:t}=e;return t.colors.text}),";border:none;margin:0;padding:0;font-size:16px;}}&:hover{opacity:0.8;a svg{opacity:0.8;}}@media (max-width: 780px){width:100%;",(e=>{let{isLeft:t}=e;return t&&"margin-bottom: 16px"}),";a{justify-content:",(e=>{let{isLeft:t}=e;return t?"flex-start":"flex-end"}),";}}");var p=r(7437);function f(e){let{prev:t,next:r}=e;return(0,p.Y)(u,null,t&&(0,p.Y)(l,{isLeft:!0},(0,p.Y)(i.Link,{to:t.link},(0,p.Y)(a.l7J,null),(0,p.Y)("div",null,(0,p.Y)("p",null,"Prev"),(0,p.Y)("h3",null,t.label)))),r&&(0,p.Y)(l,null,(0,p.Y)(i.Link,{to:r.link},(0,p.Y)("div",null,(0,p.Y)("p",null,"Next"),(0,p.Y)("h3",null,r.label)),(0,p.Y)(a.U7T,null))))}f.defaultProps={prev:null,next:null};var d=r(8221);function h(e){let{repositoryEditUrl:t,repositoryProvider:r}=e;const n=(0,d.u)();return t?(0,p.Y)("a",{href:t,target:"_blank",rel:"noopener noreferrer",css:(0,p.AH)("display:flex;align-items:center;text-decoration:none;margin-top:48px;color:",n.colors.text,";opacity:0.8;font-size:14px;font-weight:normal;","")},(0,p.Y)(a.Yvo,{style:{marginRight:"5px"}}),"Edit this page on ",r):null}function g(e){let{mdx:t,pageContext:r,children:i}=e;const{prev:a,next:c,repositoryEditUrl:u,repositoryProvider:l}=r,{title:d,description:g,image:m,disableTableOfContents:v}=t.frontmatter,{headings:y}=t,{slug:b}=t.fields;return(0,p.Y)(n.Fragment,null,(0,p.Y)(s.A,{title:d,description:g,slug:b,image:m}),(0,p.Y)(o.A,{disableTableOfContents:v,title:d,headings:y},i,(0,p.Y)(h,{repositoryEditUrl:u,repositoryProvider:l}),(0,p.Y)(f,{prev:a,next:c})))}function m(e){let{data:{mdx:t},pageContext:r,children:n}=e;return(0,p.Y)(g,{mdx:t,pageContext:r},n)}h.defaultProps={repositoryEditUrl:null,repositoryProvider:null}},5072:function(e,t,r){"use strict";r.d(t,{I:function(){return Xt}});var n=r(6540);var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};Object.create;function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var i=r(2833),a=r.n(i),c="-ms-",u="-moz-",l="-webkit-",p="comm",f="rule",d="decl",h="@keyframes",g=Math.abs,m=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function S(e,t,r){return e.replace(t,r)}function w(e,t,r){return e.indexOf(t,r)}function x(e,t){return 0|e.charCodeAt(t)}function C(e,t,r){return e.slice(t,r)}function P(e){return e.length}function I(e){return e.length}function k(e,t){return t.push(e),e}function A(e,t){return e.filter((function(e){return!b(e,t)}))}var E=1,$=1,R=0,O=0,_=0,j="";function N(e,t,r,n,o,s,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:E,column:$,length:i,return:"",siblings:a}}function Y(e,t){return v(N("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function T(e){for(;e.root;)e=Y(e.root,{children:[e]});k(e,e.siblings)}function D(){return _=O>0?x(j,--O):0,$--,10===_&&($=1,E--),_}function z(){return _=O<R?x(j,O++):0,$++,10===_&&($=1,E++),_}function F(){return x(j,O)}function L(){return O}function G(e,t){return C(j,e,t)}function B(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M(e){return E=$=1,R=P(j=e),O=0,[]}function W(e){return j="",e}function H(e){return y(G(O-1,V(91===e?e+2:40===e?e+1:e)))}function U(e){for(;(_=F())&&_<33;)z();return B(e)>2||B(_)>3?"":" "}function q(e,t){for(;--t&&z()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return G(e,L()+(t<6&&32==F()&&32==z()))}function V(e){for(;z();)switch(_){case e:return O;case 34:case 39:34!==e&&39!==e&&V(_);break;case 40:41===e&&V(e);break;case 92:z()}return O}function X(e,t){for(;z()&&e+_!==57&&(e+_!==84||47!==F()););return"/*"+G(t,O-1)+"*"+m(47===e?e:z())}function J(e){for(;!B(F());)z();return G(e,O)}function Z(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function K(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case d:return e.return=e.return||e.value;case p:return"";case h:return e.return=e.value+"{"+Z(e.children,n)+"}";case f:if(!P(e.value=e.props.join(",")))return""}return P(r=Z(e.children,n))?e.return=e.value+"{"+r+"}":""}function Q(e,t,r){switch(function(e,t){return 45^x(e,0)?(((t<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}(e,t)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+u+e+c+e+e;case 5936:switch(x(e,t+11)){case 114:return l+e+c+S(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+c+S(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+c+S(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+c+e+e;case 6165:return l+e+c+"flex-"+e+e;case 5187:return l+e+S(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return l+e+c+"flex-item-"+S(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":c+"grid-row-"+S(e,/flex-|-self/g,""))+e;case 4675:return l+e+c+"flex-line-pack"+S(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+c+S(e,"shrink","negative")+e;case 5292:return l+e+c+S(e,"basis","preferred-size")+e;case 6060:return l+"box-"+S(e,"-grow","")+l+e+c+S(e,"grow","positive")+e;case 4554:return l+S(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return S(S(S(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return S(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return S(S(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!b(e,/flex-|baseline/))return c+"grid-column-align"+C(e,t)+e;break;case 2592:case 3360:return c+S(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,b(e.props,/grid-\w+-end/)}))?~w(e+(r=r[t].value),"span",0)?e:c+S(e,"-start","")+e+c+"grid-row-span:"+(~w(r,"span",0)?b(r,/\d+/):+b(r,/\d+/)-+b(e,/\d+/))+";":c+S(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return b(e.props,/grid-\w+-start/)}))?e:c+S(S(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return S(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(x(e,t+1)){case 109:if(45!==x(e,t+4))break;case 102:return S(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+u+(108==x(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?Q(S(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return S(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,s,i,a){return c+r+":"+n+a+(o?c+r+"-span:"+(s?i:+i-+n)+a:"")+e}));case 4949:if(121===x(e,t+6))return S(e,":",":"+l)+e;break;case 6444:switch(x(e,45===x(e,14)?18:11)){case 120:return S(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===x(e,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+c+"$2box$3")+e;case 100:return S(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return S(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case d:return void(e.return=Q(e.value,e.length,r));case h:return Z([Y(e,{value:S(e.value,"@","@"+l)})],n);case f:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(b(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":T(Y(e,{props:[S(t,/:(read-\w+)/,":-moz-$1")]})),T(Y(e,{props:[t]})),v(e,{props:A(r,n)});break;case"::placeholder":T(Y(e,{props:[S(t,/:(plac\w+)/,":"+l+"input-$1")]})),T(Y(e,{props:[S(t,/:(plac\w+)/,":-moz-$1")]})),T(Y(e,{props:[S(t,/:(plac\w+)/,c+"input-$1")]})),T(Y(e,{props:[t]})),v(e,{props:A(r,n)})}return""}))}}function te(e){return W(re("",null,null,null,[""],e=M(e),0,[0],e))}function re(e,t,r,n,o,s,i,a,c){for(var u=0,l=0,p=i,f=0,d=0,h=0,v=1,y=1,b=1,C=0,I="",A=o,E=s,$=n,R=I;y;)switch(h=C,C=z()){case 40:if(108!=h&&58==x(R,p-1)){-1!=w(R+=S(H(C),"&","&\f"),"&\f",g(u?a[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:R+=H(C);break;case 9:case 10:case 13:case 32:R+=U(h);break;case 92:R+=q(L()-1,7);continue;case 47:switch(F()){case 42:case 47:k(oe(X(z(),L()),t,r,c),c);break;default:R+="/"}break;case 123*v:a[u++]=P(R)*b;case 125*v:case 59:case 0:switch(C){case 0:case 125:y=0;case 59+l:-1==b&&(R=S(R,/\f/g,"")),d>0&&P(R)-p&&k(d>32?se(R+";",n,r,p-1,c):se(S(R," ","")+";",n,r,p-2,c),c);break;case 59:R+=";";default:if(k($=ne(R,t,r,u,l,o,a,I,A=[],E=[],p,s),s),123===C)if(0===l)re(R,t,$,$,A,s,p,a,E);else switch(99===f&&110===x(R,3)?100:f){case 100:case 108:case 109:case 115:re(e,$,$,n&&k(ne(e,$,$,0,0,o,a,I,o,A=[],p,E),E),o,E,p,a,n?A:E);break;default:re(R,$,$,$,[""],E,0,a,E)}}u=l=d=0,v=b=1,I=R="",p=i;break;case 58:p=1+P(R),d=h;default:if(v<1)if(123==C)--v;else if(125==C&&0==v++&&125==D())continue;switch(R+=m(C),C*v){case 38:b=l>0?1:(R+="\f",-1);break;case 44:a[u++]=(P(R)-1)*b,b=1;break;case 64:45===F()&&(R+=H(z())),f=F(),l=p=P(I=R+=J(L())),C++;break;case 45:45===h&&2==P(R)&&(v=0)}}return s}function ne(e,t,r,n,o,s,i,a,c,u,l,p){for(var d=o-1,h=0===o?s:[""],m=I(h),v=0,b=0,w=0;v<n;++v)for(var x=0,P=C(e,d+1,d=g(b=i[v])),k=e;x<m;++x)(k=y(b>0?h[x]+" "+P:S(P,/&\f/g,h[x])))&&(c[w++]=k);return N(e,t,r,0===o?f:a,c,u,l,p)}function oe(e,t,r,n){return N(e,t,r,p,m(_),C(e,2,-2),0,n)}function se(e,t,r,n,o){return N(e,t,r,d,C(e,0,n),C(e,n+1,-1),n,o)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ce="active",ue="data-styled-version",le="6.1.15",pe="/*!sc*/\n",fe="undefined"!=typeof window&&"HTMLElement"in window,de=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),he=(new Set,Object.freeze([])),ge=Object.freeze({});function me(e,t,r){return void 0===r&&(r=ge),e.theme!==r.theme&&e.theme||t||r.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function Se(e){return e.replace(ye,"-").replace(be,"")}var we=/(a)(d)/gi,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ce(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=xe(t%52)+r;return(xe(t%52)+r).replace(we,"$1-$2")}var Pe,Ie=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ke=function(e){return Ie(5381,e)};function Ae(e){return Ce(ke(e)>>>0)}function Ee(e){return e.displayName||e.name||"Component"}function $e(e){return"string"==typeof e&&!0}var Re="function"==typeof Symbol&&Symbol.for,Oe=Re?Symbol.for("react.memo"):60115,_e=Re?Symbol.for("react.forward_ref"):60112,je={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ne={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ye={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Te=((Pe={})[_e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[Oe]=Ye,Pe);function De(e){return("type"in(t=e)&&t.type.$$typeof)===Oe?Ye:"$$typeof"in e?Te[e.$$typeof]:je;var t}var ze=Object.defineProperty,Fe=Object.getOwnPropertyNames,Le=Object.getOwnPropertySymbols,Ge=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,Me=Object.prototype;function We(e,t,r){if("string"!=typeof t){if(Me){var n=Be(t);n&&n!==Me&&We(e,n,r)}var o=Fe(t);Le&&(o=o.concat(Le(t)));for(var s=De(e),i=De(t),a=0;a<o.length;++a){var c=o[a];if(!(c in Ne||r&&r[c]||i&&c in i||s&&c in s)){var u=Ge(t,c);try{ze(e,c,u)}catch(e){}}}}return e}function He(e){return"function"==typeof e}function Ue(e){return"object"==typeof e&&"styledComponentId"in e}function qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ve(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Xe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Je(e,t,r){if(void 0===r&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Je(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=Je(e[n],t[n]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function Ke(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Ke(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(pe);return t},e}(),et=new Map,tt=new Map,rt=1,nt=function(e){if(et.has(e))return et.get(e);for(;tt.has(rt);)rt++;var t=rt++;return et.set(e,t),tt.set(t,e),t},ot=function(e,t){rt=t+1,et.set(e,t),tt.set(t,e)},st="style[".concat(ae,"][").concat(ue,'="').concat(le,'"]'),it=new RegExp("^".concat(ae,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),at=function(e,t,r){for(var n,o=r.split(","),s=0,i=o.length;s<i;s++)(n=o[s])&&e.registerName(t,n)},ct=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(pe),o=[],s=0,i=n.length;s<i;s++){var a=n[s].trim();if(a){var c=a.match(it);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(ot(l,u),at(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},ut=function(e){for(var t=document.querySelectorAll(st),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(ae)!==ce&&(ct(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function lt(){return r.nc}var pt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ae,"]")));return t[t.length-1]}(r),s=void 0!==o?o.nextSibling:null;n.setAttribute(ae,ce),n.setAttribute(ue,le);var i=lt();return i&&n.setAttribute("nonce",i),r.insertBefore(n,s),n},ft=function(){function e(e){this.element=pt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Ke(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),dt=function(){function e(e){this.element=pt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gt=fe,mt={isServer:!fe,useCSSOMInjection:!de},vt=function(){function e(e,t,r){void 0===e&&(e=ge),void 0===t&&(t={});var n=this;this.options=o(o({},mt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&fe&&gt&&(gt=!1,ut(this)),Ze(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return tt.get(e)}(r);if(void 0===o)return"continue";var s=e.names.get(o),i=t.getGroup(r);if(void 0===s||!s.size||0===i.length)return"continue";var a="".concat(ae,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(pe)},s=0;s<r;s++)o(s);return n}(n)}))}return e.registerId=function(e){return nt(e)},e.prototype.rehydrate=function(){!this.server&&fe&&ut(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(o(o({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new ht(r):t?new ft(r):new dt(r)}(this.options),new Qe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(nt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(nt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yt=/&/g,bt=/^\s*\/\/.*$/gm;function St(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=St(e.children,t)),e}))}function wt(e){var t,r,n,o=void 0===e?ge:e,s=o.options,i=void 0===s?ge:s,a=o.plugins,c=void 0===a?he:a,u=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(yt,r).replace(n,u))})),i.prefix&&l.push(ee),l.push(K);var p=function(e,o,s,a){void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(bt,""),u=te(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);i.namespace&&(u=St(u,i.namespace));var p,f,d,h=[];return Z(u,(p=l.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})),f=I(p),function(e,t,r,n){for(var o="",s=0;s<f;s++)o+=p[s](e,t,r,n)||"";return o})),h};return p.hash=c.length?c.reduce((function(e,t){return t.name||Ke(15),Ie(e,t.name)}),5381).toString():"",p}var xt=new vt,Ct=wt(),Pt=n.createContext({shouldForwardProp:void 0,styleSheet:xt,stylis:Ct}),It=(Pt.Consumer,n.createContext(void 0));function kt(){return(0,n.useContext)(Pt)}function At(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],o=t[1],s=kt().styleSheet,i=(0,n.useMemo)((function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,s]),c=(0,n.useMemo)((function(){return wt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){a()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var u=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:c}}),[e.shouldForwardProp,i,c]);return n.createElement(Pt.Provider,{value:u},n.createElement(It.Provider,{value:c},e.children))}var Et=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=Ct);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,(function(){throw Ke(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Ct),this.name+e.hash},e}(),$t=function(e){return e>="A"&&e<="Z"};function Rt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;$t(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ot=function(e){return null==e||!1===e||""===e},_t=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ot(i)&&(Array.isArray(i)&&i.isCss||He(i)?n.push("".concat(Rt(o),":"),i,";"):Xe(i)?n.push.apply(n,s(s(["".concat(o," {")],_t(i),!1),["}"],!1)):n.push("".concat(Rt(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ie||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function jt(e,t,r,n){return Ot(e)?[]:Ue(e)?[".".concat(e.styledComponentId)]:He(e)?!He(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:jt(e(t),t,r,n):e instanceof Et?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?_t(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map((function(e){return jt(e,t,r,n)}))):[e.toString()];var o}function Nt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(He(r)&&!Ue(r))return!1}return!0}var Yt=ke(le),Tt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Nt(e),this.componentId=t,this.baseHash=Ie(Yt,t),this.baseStyle=r,vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=qe(n,this.staticRulesId);else{var o=Ve(jt(this.rules,e,t,r)),s=Ce(Ie(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}n=qe(n,s),this.staticRulesId=s}else{for(var a=Ie(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var p=Ve(jt(l,e,t,r));a=Ie(a,p+u),c+=p}}if(c){var f=Ce(a>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(c,".".concat(f),void 0,this.componentId)),n=qe(n,f)}}return n},e}(),Dt=n.createContext(void 0);Dt.Consumer;var zt={};new Set;function Ft(e,t,r){var s=Ue(e),i=e,a=!$e(e),c=t.attrs,u=void 0===c?he:c,l=t.componentId,p=void 0===l?function(e,t){var r="string"!=typeof e?"sc":Se(e);zt[r]=(zt[r]||0)+1;var n="".concat(r,"-").concat(Ae(le+r+zt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):l,f=t.displayName,d=void 0===f?function(e){return $e(e)?"styled.".concat(e):"Styled(".concat(Ee(e),")")}(e):f,h=t.displayName&&t.componentId?"".concat(Se(t.displayName),"-").concat(t.componentId):t.componentId||p,g=s&&i.attrs?i.attrs.concat(u).filter(Boolean):u,m=t.shouldForwardProp;if(s&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return v(e,t)&&y(e,t)}}else m=v}var b=new Tt(r,h,s?i.componentStyle:void 0);function S(e,t){return function(e,t,r){var s=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,p=n.useContext(Dt),f=kt(),d=e.shouldForwardProp||f.shouldForwardProp,h=me(t,p,a)||ge,g=function(e,t,r){for(var n,s=o(o({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=He(n=e[i])?n(s):n;for(var c in a)s[c]="className"===c?qe(s[c],a[c]):"style"===c?o(o({},s[c]),a[c]):a[c]}return t.className&&(s.className=qe(s.className,t.className)),s}(s,t,h),m=g.as||l,v={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y&&g.theme===h||("forwardedAs"===y?v.as=g.forwardedAs:d&&!d(y,m)||(v[y]=g[y]));var b=function(e,t){var r=kt();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,g),S=qe(c,u);return b&&(S+=" "+b),g.className&&(S+=" "+g.className),v[$e(m)&&!ve.has(m)?"class":"className"]=S,r&&(v.ref=r),(0,n.createElement)(m,v)}(w,e,t)}S.displayName=d;var w=n.forwardRef(S);return w.attrs=g,w.componentStyle=b,w.displayName=d,w.shouldForwardProp=m,w.foldedComponentIds=s?qe(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=s?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Je(e,o[n],!0);return e}({},i.defaultProps,e):e}}),Ze(w,(function(){return".".concat(w.styledComponentId)})),a&&We(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Lt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Gt=function(e){return Object.assign(e,{isCss:!0})};function Bt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(He(e)||Xe(e))return Gt(jt(Lt(he,s([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?jt(n):Gt(jt(Lt(n,t)))}function Mt(e,t,r){if(void 0===r&&(r=ge),!t)throw Ke(1,t);var n=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Bt.apply(void 0,s([n],o,!1)))};return n.attrs=function(n){return Mt(e,t,o(o({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Mt(e,t,o(o({},r),n))},n}var Wt=function(e){return Mt(Ft,e)},Ht=Wt;ve.forEach((function(e){Ht[e]=Wt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nt(e),vt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Ve(jt(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&vt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=lt(),n=Ve([r&&'nonce="'.concat(r,'"'),"".concat(ae,'="true"'),"".concat(ue,'="').concat(le,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ke(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Ke(2);var r=e.instance.toString();if(!r)return[];var s=((t={})[ae]="",t[ue]=le,t.dangerouslySetInnerHTML={__html:r},t),i=lt();return i&&(s.nonce=i),[n.createElement("style",o({},s,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new vt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ke(2);return n.createElement(At,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ke(3)}})(),"__sc-".concat(ae,"__");var Ut=r(5469),qt=r(7437);const Vt=Ht.div`
  background: white;
  background-image: radial-gradient(#e4e4e4 1px, transparent 0);
  background-size: 20px 20px;
  background-position: -19px -19px;
  border: 1.5px solid #e4e4e4;
  border-radius: 8px;
  min-height: 100px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`,Xt=e=>{let{children:t}=e;return(0,qt.Y)(Vt,null,(0,qt.Y)(Ut.X,null,t))}},5469:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(6540),o=r(961),s=r(7437);const i=e=>{let{children:t}=e;const r=(0,n.useRef)(null),i=(0,n.useRef)(null),{0:a,1:c}=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(r.current&&!i.current&&"undefined"!=typeof window){i.current=r.current.attachShadow({mode:"open"});const e=document.createElement("link");e.rel="stylesheet",e.href="/tabler.replaced.css";const t=document.createElement("div");t.style.display="inline-block",t.style.width="auto",t.style.height="auto";const n=document.createElement("script");i.current.appendChild(e),i.current.appendChild(t),i.current.appendChild(n),i.current.appendChild(inlineScript),c(t)}}),[]),(0,s.Y)("div",{ref:r},a&&o.createPortal(t,a))}},2833:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!a(u))return!1;var l=e[u],p=t[u];if(!1===(o=r?r.call(n,l,p,u):void 0)||void 0===o&&l!==p)return!1}return!0}}}]);
//# sourceMappingURL=45a404354e50966b66a962653ddfca9dec3ecc03-a8342ce9e729501daf1d.js.map