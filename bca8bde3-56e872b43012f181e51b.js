(self.webpackChunkcreative_cloud_libraries=self.webpackChunkcreative_cloud_libraries||[]).push([[37],{6366:function(e,i,t){"use strict";t.d(i,{e:function(){return q}});var n=t(2122),s=t(2137),r=t(7757),a=t.n(r),o=t(5007),l=t(7158),c=t(5444),m=t(2390),d=t(4922),u=t(2992),g=t(3803),p=t(4117),v=t(5961),f=t(4141),b=t(7155),h=t(7197),y=t(7851),z=t(2731),Z=t(465),x=t(5424);var k={name:"h6wb83",styles:"margin:var(--spectrum-global-dimension-size-200) 0"},w={name:"1c7vrxl",styles:"margin:var(--spectrum-global-dimension-size-200) 0;padding:0 var(--spectrum-global-dimension-size-200);box-sizing:border-box;width:100%"},S={name:"1p0uoub",styles:"padding:0 var(--spectrum-global-dimension-size-200);text-align:center"},A={name:"j1ccac",styles:"width:var(--spectrum-global-dimension-size-800);height:var(--spectrum-global-dimension-size-800);border-radius:var(--spectrum-global-dimension-static-percent-50);background:var(--spectrum-global-color-gray-50);overflow:hidden;margin-top:var(--spectrum-global-dimension-size-400);margin-bottom:var(--spectrum-global-dimension-size-200)"},E={name:"1m9g2qv",styles:"display:flex;align-items:center;justify-content:center;flex-direction:column"},j={name:"nv0dhh",styles:"width:var(--spectrum-global-dimension-size-3400);max-height:var(--spectrum-global-dimension-size-4600);margin-left:calc(-1 * var(--spectrum-global-dimension-size-3000))"},C={name:"696ux0",styles:"width:var(--spectrum-global-dimension-size-400);height:var(--spectrum-global-dimension-size-400);border-radius:var(--spectrum-global-dimension-static-percent-50);background:var(--spectrum-global-color-gray-50);overflow:hidden;cursor:pointer"},I={name:"1h7fxmz",styles:"margin-top:calc(-1 * var(--spectrum-global-dimension-size-25))"},R={name:"8bk0lr",styles:"display:flex;align-items:center;justify-content:center;margin-left:var(--spectrum-global-dimension-size-200);width:var(--spectrum-global-dimension-size-800)"},T={name:"zjik7",styles:"display:flex"},_={name:"1tnsek5",styles:"grid-area:optional;justify-self:flex-end"},L={name:"13jqjfr",styles:"margin-left:var(--spectrum-global-dimension-size-400);white-space:nowrap"},N={name:"9vjjy",styles:"bottom:calc(-1 * var(--spectrum-global-dimension-size-125))!important"},P={name:"kjrycj",styles:"margin-left:var(--spectrum-global-dimension-size-100)!important;margin-right:var(--spectrum-global-dimension-size-300)"},Q={name:"1qpcptp",styles:"width:var(--spectrum-global-dimension-size-300);height:var(--spectrum-global-dimension-size-250);display:block;margin-right:var(--spectrum-global-dimension-size-100)"},G={name:"g65o95",styles:"text-decoration:none"},H={name:"s5xdrg",styles:"display:flex;align-items:center"},O={name:"wm3npa",styles:"display:flex;height:100%;align-items:center"},U={name:"oui9o",styles:"height:100%;grid-area:title"},B={name:"13udsys",styles:"height:100%"},D={name:"167thwa",styles:"height:100%;border-bottom:var(--spectrum-global-dimension-size-10) solid var(--spectrum-global-color-gray-200);box-sizing:border-box"},q=function(e){var i,t=e.ims,r=e.isLoadingIms,q=e.menu,F=e.versions,K=e.pages,Y=e.docs,J=e.location,M=e.toggleSideNav,X=e.hasSideNav,V=(0,o.useRef)(null),W=(0,o.useRef)(null),$=(0,o.useRef)(null),ee=(0,o.useState)(!1),ie=ee[0],te=ee[1],ne=(0,o.useState)([])[0],se=(0,o.useRef)(null),re=(0,o.useRef)(null),ae=(0,o.useState)(!1),oe=ae[0],le=ae[1],ce=(0,o.useState)(!1),me=ce[0],de=ce[1],ue=(0,o.useState)(null),ge=ue[0],pe=ue[1],ve=(0,o.useState)(!0),fe=ve[0],be=ve[1],he=(0,l.ZP)(),ye=(0,l.ZP)(),ze=q||null===q,Ze=function(){var e=(0,m.A6)(J.pathname),i=(0,m.Gh)(K),t=i.indexOf((0,m.Yx)(e,i));return-1===t&&(t=0),t},xe=function(){var e=Ze(),i=ne.filter((function(e){return e.current}))[e];W.current.scrollLeft=i.current.offsetLeft,(0,Z.BA)($,i)};return(0,o.useEffect)((function(){(0,Z.Rp)($,ie),xe()}),[J.pathname]),(0,o.useEffect)((function(){(0,s.Z)(a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.isSignedInUser()){e.next=8;break}return e.next=3,t.getProfile();case 3:i=e.sent,pe(i),be(!1),e.next=9;break;case 8:r||be(!1);case 9:case"end":return e.stop()}}),e)})))()}),[t]),(0,o.useEffect)((function(){if(se.current)if(oe){var e=se.current.getBoundingClientRect(),i=e.top,t=e.left;se.current.style.left=t+13+"px",se.current.style.top=i+"px",se.current.style.position="fixed"}else setTimeout((function(){se.current.style=""}),200)}),[oe]),(0,o.useEffect)((function(){var e=function(e){null!=F&&F.length&&!se.current.contains(e.target)&&le(!1),re.current.contains(e.target)||de(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[]),(0,o.useEffect)((function(){var e=function(){le(!1)};return W.current.addEventListener("scroll",e,{passive:!0}),function(){return W.current.removeEventListener("scroll",e)}}),[]),(0,d.tZ)("header",{role:"banner",css:D},(0,d.tZ)("nav",{css:B,role:"navigation","aria-label":"Global"},(0,d.tZ)("div",{css:(0,d.iv)("display:grid;grid-template-areas:'title navigation optional';grid-template-columns:minmax(auto, min-content) auto minmax(auto, min-content);align-items:center;margin-left:var(--spectrum-global-dimension-size-400);margin-right:var(--spectrum-global-dimension-size-400);height:100%;@media screen and (max-width: ",m.Av,"){grid-template-columns:minmax(auto, min-content) auto 0 0;margin-right:0;margin-left:0;height:calc(100% + var(--spectrum-global-dimension-size-10));overflow:hidden;}","")},(0,d.tZ)("div",{css:U},(0,d.tZ)("div",{css:O},(0,d.tZ)("div",{css:H},(0,d.tZ)("div",{css:(0,d.iv)("margin-right:var(--spectrum-global-dimension-size-50);display:none;@media screen and (max-width: ",m.Av,"){display:block;visibility:",X?"visible":"hidden",";}","")},(0,d.tZ)(f.K,{isQuiet:!0,onClick:function(){M&&M()}},(0,d.tZ)(v.TripleGripper,null))),(0,d.tZ)("a",{href:"/",css:G},(0,d.tZ)("div",{css:(0,d.iv)("display:flex;align-items:center;@media screen and (max-width: ",m.Av,"){svg{margin-right:var(--spectrum-global-dimension-size-100);}strong{display:none;}}","")},(0,d.tZ)(v.Adobe,{css:Q}),(0,d.tZ)("strong",{className:"spectrum-Heading spectrum-Heading--sizeXXS"},"Developer")))),ze&&(0,d.tZ)("div",{css:(0,d.iv)("margin-left:var(--spectrum-global-dimension-size-300);box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200) var(--spectrum-global-dimension-size-300) 0 var(--spectrum-global-dimension-size-300);height:calc(100% + var(--spectrum-global-dimension-size-10));border-left:1px solid var(--spectrum-global-color-gray-200);border-right:1px solid var(--spectrum-global-color-gray-200);@media screen and (max-width: ",m.Av,"){display:none;}","")},(0,d.tZ)(f.K,(0,n.Z)({elementType:"a",isQuiet:!0,href:"/apis"},(0,m.U3)()),(0,d.tZ)(f.x,null,"Discover"))))),(0,d.tZ)("div",{ref:W,css:(0,d.iv)("grid-area:navigation;margin-left:",ze?"var(--spectrum-global-dimension-size-200)":"var(--spectrum-global-dimension-size-300)",";@media screen and (max-width: ",m.Av,"){overflow-x:auto;overflow-x:overlay;overflow-y:hidden;margin-right:var(--spectrum-global-dimension-size-800);.spectrum-Tabs{padding-bottom:var(--spectrum-global-dimension-size-400);margin-top:var(--spectrum-global-dimension-size-400);}.spectrum-Tabs-selectionIndicator{bottom:calc(\n                    var(--spectrum-global-dimension-size-400) - var(--spectrum-global-dimension-size-125)\n                  )!important;}}","")},(0,d.tZ)(Z.mQ,{ref:V,onFontsReady:function(){xe(),te(!0)}},ze&&(0,d.tZ)("div",{css:(0,d.iv)("display:none;margin-right:var(--spectrum-global-dimension-size-300);@media screen and (max-width: ",m.Av,"){display:block;}","")},(0,d.tZ)(Z.ck,{elementType:"a",href:"/apis"},"Discover")),K.map((function(e,i){var t=e.title,n=e.path,s=(0,o.createRef)();return ne.push(s),(0,d.tZ)(o.Fragment,{key:i},(0,d.tZ)(Z.ck,{elementType:c.rU,ref:s,to:n,selected:Ze()===i},t),0===i&&(null==F?void 0:F.length)>0&&(0,d.tZ)("div",{css:P},(0,d.tZ)(b.z,{isQuiet:!0,isOpen:oe,"aria-controls":he,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),le((function(e){return!e}))}},F[0].title),(0,d.tZ)(y.J,{ref:se,id:he,variant:"picker",isQuiet:!0,isOpen:oe},(0,d.tZ)(h.v2,null,F.map((function(e,i){var t=0===i;return(0,d.tZ)(h.ck,{key:i,isSelected:t,isHighlighted:t,href:e.path},e.title)}))))))})),(0,d.tZ)(Z.NN,{ref:$,css:N}),Y&&(0,d.tZ)("div",{css:L},(0,d.tZ)(u.A,{variant:"primary",href:Y.path},null!==(i=Y.title)&&void 0!==i?i:"View Docs")))),(0,d.tZ)("div",{css:_},(0,d.tZ)("div",{css:T},(0,d.tZ)(u.A,{variant:"primary",href:"https://console.adobe.io",css:(0,d.iv)("@media screen and (max-width: ",m.Av,"){display:none;}","")},"Console"),{}.GATSBY_IMS_SRC&&{}.GATSBY_IMS_CONFIG&&(0,d.tZ)("div",{css:R},(0,d.tZ)(p._,{size:"S",hidden:!r}),(0,d.tZ)(f.K,{css:I,hidden:r||fe||ge,variant:"primary",isQuiet:!0,onClick:function(){t.signIn()}},(0,d.tZ)(f.x,null,"Sign in")),(0,d.tZ)("div",{hidden:!ge},(0,d.tZ)("div",{"aria-controls":ye,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),de((function(e){return!e}))},css:C},(0,d.tZ)(z.E,{alt:"Avatar",src:ge?t.avatarUrl(ge.userId):""})),(0,d.tZ)(y.J,{id:ye,ref:re,isOpen:me,css:j},(0,d.tZ)("div",{css:E},(0,d.tZ)("div",{css:A},(0,d.tZ)(z.E,{alt:"Avatar",src:ge?t.avatarUrl(ge.userId):""})),(0,d.tZ)("div",{className:"spectrum-Heading spectrum-Heading--sizeL spectrum-Heading--light",css:S},ge&&ge.displayName),(0,d.tZ)("div",{css:w},(0,d.tZ)(x.i,{size:"S"})),(0,d.tZ)(u.A,{href:"https://account.adobe.com/",variant:"primary",isQuiet:!0},"Edit Profile"),(0,d.tZ)(g.z,{variant:"primary",css:k,onClick:function(){t.signOut()}},"Sign out"))))))))))}}}]);
//# sourceMappingURL=bca8bde3-56e872b43012f181e51b.js.map