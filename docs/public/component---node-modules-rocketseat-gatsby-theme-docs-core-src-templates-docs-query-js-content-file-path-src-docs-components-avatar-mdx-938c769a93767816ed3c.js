"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[977],{1682:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(6540),l=a(8453),r=a(7724),c=a(5072);function i(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",strong:"strong"},(0,l.RP)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.p,null,"Avatars are used to display a user's profile picture or initials."),"\n",n.createElement(t.h2,{id:"signature",style:{position:"relative"}},n.createElement(t.a,{href:"#signature","aria-label":"signature permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Signature"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'import { Avatar } from "tabler-react-2";\n\n<Avatar {...props}>{children}</Avatar>;\n')),"\n",n.createElement(t.h3,{id:"props",style:{position:"relative"}},n.createElement(t.a,{href:"#props","aria-label":"props permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Props"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Prop"),n.createElement(t.th,null,"Required"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"),n.createElement(t.th,null,"Description"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"src")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,"String"),n.createElement(t.td),n.createElement(t.td,null,"The URL of the avatar image.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"initials")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,"String"),n.createElement(t.td),n.createElement(t.td,null,"The initials of the avatar.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"initialsColor")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,n.createElement(t.a,{href:"/utilities/colors"},"Color")),n.createElement(t.td),n.createElement(t.td,null,"The background color of the initials.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"dicebear")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,"String | Boolean"),n.createElement(t.td),n.createElement(t.td,null,"The style of the avatar.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"size")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,"[",n.createElement(t.code,null,"sm"),", ",n.createElement(t.code,null,"md"),", ",n.createElement(t.code,null,"lg"),"]"),n.createElement(t.td),n.createElement(t.td,null,"The size of the avatar.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"status")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,n.createElement(t.a,{href:"/utilities/colors"},"Color")),n.createElement(t.td),n.createElement(t.td,null,"The status of the avatar.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"badge")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,"String"),n.createElement(t.td),n.createElement(t.td,null,"The badge to be displayed on the avatar.")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.code,null,"color")),n.createElement(t.td,null,"No"),n.createElement(t.td,null,n.createElement(t.a,{href:"/utilities/colors"},"Color")),n.createElement(t.td),n.createElement(t.td,null,"The color of the avatar.")))),"\n",n.createElement(t.h2,{id:"basic-usage",style:{position:"relative"}},n.createElement(t.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Basic Usage"),"\n",n.createElement(t.p,null,"The ",n.createElement(t.code,null,"Avatar")," component is used to display an avatar."),"\n",n.createElement(c.I,null,n.createElement(r.eu,{src:"https://picsum.photos/200"})),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar src="https://picsum.photos/200" />\n')),"\n",n.createElement(t.h2,{id:"initials",style:{position:"relative"}},n.createElement(t.a,{href:"#initials","aria-label":"initials permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Initials"),"\n",n.createElement(t.p,null,"You can pass an ",n.createElement(t.code,null,"initials")," prop to the ",n.createElement(t.code,null,"Avatar")," component to display initials."),"\n",n.createElement(c.I,null,n.createElement(r.eu,{initials:"JC"})),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar initials="JC" />\n')),"\n",n.createElement(t.h2,{id:"color",style:{position:"relative"}},n.createElement(t.a,{href:"#color","aria-label":"color permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Color"),"\n",n.createElement(t.p,null,"You can pass a ",n.createElement(t.code,null,"color")," prop to the ",n.createElement(t.code,null,"Avatar")," component to change the color of the avatar."),"\n",n.createElement(c.I,null,n.createElement("div",{style:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap"}},["primary","secondary","success","danger","warning","info","dark","yellow","pink","purple"].map((e=>n.createElement(r.eu,{key:e,initials:"JC",color:e}))))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar initials="JC" color="primary" />\n<Avatar initials="JC" color="secondary" />\n<Avatar initials="JC" color="success" />\n<Avatar initials="JC" color="danger" />\n<Avatar initials="JC" color="warning" />\n')),"\n",n.createElement(t.h2,{id:"initials-color",style:{position:"relative"}},n.createElement(t.a,{href:"#initials-color","aria-label":"initials color permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Initials Color"),"\n",n.createElement(t.blockquote,null,"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"Note"),": Unless explicitly required, you should not use the ",n.createElement(t.code,null,"initialsColor")," prop. Instead, use the ",n.createElement(t.code,null,"color")," prop."),"\n"),"\n",n.createElement(t.p,null,"You can pass an ",n.createElement(t.code,null,"initialsColor")," prop to the ",n.createElement(t.code,null,"Avatar")," component to change the color of the initials."),"\n",n.createElement(c.I,null,n.createElement(r.eu,{initials:"JC",initialsColor:"cyan"})),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar initials="JC" initialsColor="cyan" />\n')),"\n",n.createElement(t.h2,{id:"dicebear",style:{position:"relative"}},n.createElement(t.a,{href:"#dicebear","aria-label":"dicebear permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Dicebear"),"\n",n.createElement(t.p,null,"You can use Dicebear to generate avatars. You can pass a ",n.createElement(t.code,null,"dicebear")," attribute to the ",n.createElement(t.code,null,"Avatar")," component to instruct it to use a Dicebear image. Dicebear will use the ",n.createElement(t.code,null,"initials")," prop as a seed. When a dicebear style is not provided, it defaults to ",n.createElement(t.code,null,"shapes"),"."),"\n",n.createElement(c.I,null,n.createElement(r.eu,{dicebear:!0,initials:"JC"})),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar dicebear initials="JC" />\n')),"\n",n.createElement(t.h3,{id:"dicebear-styles",style:{position:"relative"}},n.createElement(t.a,{href:"#dicebear-styles","aria-label":"dicebear styles permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Dicebear Styles"),"\n",n.createElement(t.p,null,"You can pass a ",n.createElement(t.code,null,"dicebear")," prop to the ",n.createElement(t.code,null,"Avatar")," component to instruct it to use a specific Dicebear style. The ",n.createElement(t.code,null,"dicebear")," prop accepts a string value of the style name or a boolean."),"\n",n.createElement(t.h3,{id:"dicebear-styles-1",style:{position:"relative"}},n.createElement(t.a,{href:"#dicebear-styles-1","aria-label":"dicebear styles 1 permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Dicebear Styles"),"\n",n.createElement(c.I,null,n.createElement("div",{style:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap"}},["adventurer","bottts","identicon","initials","croodles","dylan","icons","lorelei"].map((e=>n.createElement(r.eu,{key:e,dicebear:e,initials:"JC"}))))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar dicebear="bottts" initials="JC" />\n<Avatar dicebear="identicon" initials="JC" />\n<Avatar dicebear="initials" initials="JC" />\n<Avatar dicebear="croodles" initials="JC" />\n<Avatar dicebear="dylan" initials="JC" />\n<Avatar dicebear="icons" initials="JC" />\n<Avatar dicebear="lorelei" initials="JC" />\n')),"\n",n.createElement(t.p,null,"Styles are at the ",n.createElement(t.a,{href:"https://www.dicebear.com/styles/"},"Dicebear docs page")," and work out-of-the-box."),"\n",n.createElement(t.h2,{id:"sizes",style:{position:"relative"}},n.createElement(t.a,{href:"#sizes","aria-label":"sizes permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Sizes"),"\n",n.createElement(c.I,null,n.createElement("div",{style:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap",alignItems:"center"}},["sm","md","lg"].map((e=>n.createElement(r.eu,{key:e,size:e,initials:"JC"}))))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar size="sm" initials="JC" />\n<Avatar size="md" initials="JC" />\n<Avatar size="lg" initials="JC" />\n')),"\n",n.createElement(t.h2,{id:"statuses",style:{position:"relative"}},n.createElement(t.a,{href:"#statuses","aria-label":"statuses permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Statuses"),"\n",n.createElement(t.p,null,"You can pass a ",n.createElement(t.code,null,"status")," prop to the ",n.createElement(t.code,null,"Avatar")," component to display a badge on the avatar. The ",n.createElement(t.code,null,"status")," prop accepts a string value ",n.createElement(t.a,{href:"/utilities/colors"},"color"),"."),"\n",n.createElement(c.I,null,n.createElement("div",{style:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap",alignItems:"center"}},["primary","secondary","success","danger","warning","info","dark"].map((e=>n.createElement(r.eu,{key:e,status:e,initials:"JC"}))))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar status="primary" initials="JC" />\n<Avatar status="secondary" initials="JC" />\n<Avatar status="success" initials="JC" />\n<Avatar status="danger" initials="JC" />\n<Avatar status="warning" initials="JC" />\n<Avatar status="info" initials="JC" />\n<Avatar status="dark" initials="JC" />\n')),"\n",n.createElement(t.h2,{id:"badges",style:{position:"relative"}},n.createElement(t.a,{href:"#badges","aria-label":"badges permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Badges"),"\n",n.createElement(t.p,null,"You can pass a ",n.createElement(t.code,null,"badge")," prop to the ",n.createElement(t.code,null,"Avatar")," component to display a badge on the avatar. Badges require a ",n.createElement(t.code,null,"status")," prop to be present in order to be displayed."),"\n",n.createElement(c.I,null,n.createElement("div",{style:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap",alignItems:"center"}},[1,2,3,4,5].map((e=>n.createElement(r.eu,{key:e,badge:e,status:"danger",initials:"JC"}))))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<Avatar badge={1} status="danger" initials="JC" />\n<Avatar badge={2} status="danger" initials="JC" />\n<Avatar badge={3} status="danger" initials="JC" />\n<Avatar badge={4} status="danger" initials="JC" />\n<Avatar badge={5} status="danger" initials="JC" />\n')),"\n",n.createElement(t.h2,{id:"stacked-avatars",style:{position:"relative"}},n.createElement(t.a,{href:"#stacked-avatars","aria-label":"stacked avatars permalink",className:"anchor before"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Stacked Avatars"),"\n",n.createElement(t.p,null,"You can use the ",n.createElement(t.code,null,"AvatarStackedList")," component to stack avatars."),"\n",n.createElement(c.I,null,n.createElement(r.jd,null,n.createElement(r.eu,{stacked:!0,dicebear:!0,initials:"JC"}),n.createElement(r.eu,{stacked:!0,dicebear:!0,initials:"AB"}))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'import { Avatar, AvatarStackedList } from "tabler-react-2";\n\n<AvatarStackedList>\n  <Avatar stacked initials="JC" />\n  <Avatar stacked initials="JC" />\n</AvatarStackedList>;\n')))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?n.createElement(t,e,n.createElement(i,e)):i(e)},o=a(2005);function u(e){return n.createElement(o.A,e,n.createElement(s,e))}o.A},7724:function(e,t,a){a.d(t,{Fc:function(){return w},eu:function(){return x},jd:function(){return H},Ex:function(){return N},Zp:function(){return k},J0:function(){return _}});var n=a(6540);function l(e,t){if(null==e)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}var r=a(8168),c=a(9417),i=a(7387),s=a(4146);function o(e,t){if(!e){var a=new Error("loadable: "+t);throw a.framesToPop=1,a.name="Invariant Violation",a}}var u=n.createContext();var d={initialChunks:{}},h="PENDING",m="REJECTED";var p=function(e){return e};function v(e){var t=e.defaultResolveComponent,a=void 0===t?p:t,v=e.render,E=e.onLoad;function f(e,t){void 0===t&&(t={});var p=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),f={};function g(e){return t.cacheKey?t.cacheKey(e):p.resolve?p.resolve(e):"static"}function b(e,n,l){var r=t.resolveComponent?t.resolveComponent(e,n):a(e);return s(l,r,{preload:!0}),r}var y,C,S=function(e){var t=g(e),a=f[t];return a&&a.status!==m||((a=p.requireAsync(e)).status=h,f[t]=a,a.then((function(){a.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:p.resolve(e),chunkName:p.chunkName(e),error:t?t.message:t}),a.status=m}))),a},A=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={result:null,error:null,loading:!0,cacheKey:g(a)},o(!a.__chunkExtractor||p.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),a.__chunkExtractor?(!1===t.ssr||(p.requireAsync(a).catch((function(){return null})),n.loadSync(),a.__chunkExtractor.addChunk(p.chunkName(a))),(0,c.A)(n)):(!1!==t.ssr&&(p.isReady&&p.isReady(a)||p.chunkName&&d.initialChunks[p.chunkName(a)])&&n.loadSync(),n)}(0,i.A)(a,e),a.getDerivedStateFromProps=function(e,t){var a=g(e);return(0,r.A)({},t,{cacheKey:a,loading:t.loading||t.cacheKey!==a})};var n=a.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return g(this.props)},n.getCache=function(){return f[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),f[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;E&&setTimeout((function(){E(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=b(p.requireSync(this.props),this.props,w);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:p.resolve(this.props),chunkName:p.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var a=b(t,e.props,w);e.safeSetState({result:a,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,l(e,["__chunkExtractor","forwardedRef"]));return S(t)},n.render=function(){var e=this.props,a=e.forwardedRef,n=e.fallback,c=(e.__chunkExtractor,l(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,s=i.error,o=i.loading,u=i.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===h)throw this.loadAsync();if(s)throw s;var d=n||t.fallback||null;return o?d:v({fallback:d,result:u,options:t,props:(0,r.A)({},c,{ref:a})})},a}(n.Component),k=(C=function(e){return n.createElement(u.Consumer,null,(function(t){return n.createElement(y,Object.assign({__chunkExtractor:t},e))}))},(y=A).displayName&&(C.displayName=y.displayName+"WithChunkExtractor"),C),w=n.forwardRef((function(e,t){return n.createElement(k,Object.assign({forwardedRef:t},e))}));return w.displayName="Loadable",w.preload=function(e){w.load(e)},w.load=function(e){return S(e)},w}return{loadable:f,lazy:function(e,t){return f(e,(0,r.A)({},t,{suspense:!0}))}}}var E=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,a=e.props;return n.createElement(t,a)}}),f=E.loadable,g=E.lazy,b=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,a=e.props;return a.children?a.children(t):null}}),y=b.loadable,C=b.lazy;var S=f;S.lib=y,g.lib=C;var A=S;const k=A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Card)))),w=(A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Typography)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Alert))))),x=A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Avatar)))),H=A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.AvatarStackedList)))),N=A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Badge)))),_=(A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Breadcrumb)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Button)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Dropdown)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Form)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Input)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Modal)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Ribbon)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Spinner)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Steps)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Table)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>e.Timeline)))),A((()=>Promise.all([a.e(869),a.e(259),a.e(43)]).then(a.t.bind(a,4043,23)).then((e=>({...e.Util,Hr:e.Util.Hr}))))))}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-docs-query-js-content-file-path-src-docs-components-avatar-mdx-938c769a93767816ed3c.js.map