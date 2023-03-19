"use strict";(self.webpackChunkgenesis_test_case=self.webpackChunkgenesis_test_case||[]).push([[146],{5397:function(n,e,t){t.d(e,{E3:function(){return p},W2:function(){return l},_i:function(){return h},cQ:function(){return d}});var i,r,o,c,s,a=t(168),u=t(6444),l=u.ZP.div(i||(i=(0,a.Z)(["\n  padding: 40px 20px;\n  margin-left: auto;\n  margin-right: auto;\n  @media "," {\n    width: 768px;\n  }\n  @media "," {\n    width: 1280px;\n  }\n"])),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.media.desktop})),d=u.ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  margin-bottom: 32px;\n  @media "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: unset;\n    gap: 24px;\n  }\n"])),(function(n){return n.theme.media.tablet})),f=u.ZP.button(o||(o=(0,a.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 28px;\n\n  border: ",";\n  border-radius: 40px;\n\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  :hover:not(:disabled),\n  :focus:not(:disabled) {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n    outline: none;\n  }\n"])),(function(n){return n.active?"none":"2px solid"}),(function(n){return n.active?n.theme.colors.accent:n.theme.colors.white}),(function(n){return n.active?n.theme.colors.secondatyBtnText:n.theme.colors.accent}),(function(n){return n.active?n.theme.colors.hoverBtn:n.theme.colors.white}),(function(n){return n.theme.colors.hoverBtn}),(function(n){return n.active?n.theme.colors.secondatyBtnText:n.theme.colors.hoverBtn})),h=u.ZP.div(c||(c=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),p=(0,u.ZP)(f)(s||(s=(0,a.Z)(["\n  border-radius: 20%;\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"])))},8146:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var i,r,o,c,s,a,u,l,d=t(9439),f=t(2791),h=t(7689),p=t(3275),m=t(168),v=t(6444),g=v.ZP.div(i||(i=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=v.ZP.h1(r||(r=(0,m.Z)(["\n  font-weight: 700;\n  font-size: 32px;\n  text-align: center;\n"]))),Z=v.ZP.p(o||(o=(0,m.Z)(["\n  font-weight: 700;\n  font-size: 32px;\n"]))),w=v.ZP.p(c||(c=(0,m.Z)(["\n  text-align: center;\n"]))),k=v.ZP.ol(s||(s=(0,m.Z)([""]))),b=t(9843),j=t.n(b),P=t(184),I=function(n){var e=n.videoLink,t=n.previewImageLink,i=n.order,r=n.id,o=(0,f.useRef)(null),c=(0,f.useState)(0),s=(0,d.Z)(c,2),a=s[0],u=s[1];(0,f.useEffect)((function(){var n=o.current;if(n&&j().isSupported()){var t=new(j());t.attachMedia(n),t.on(j().Events.MEDIA_ATTACHED,(function(){t.loadSource(e),t.on(j().Events.MANIFEST_PARSED,(function(){var e=localStorage.getItem(r);null!==e&&(n.currentTime=parseInt(e))}))}))}}),[e,r]);var l="".concat(t,"/lesson-").concat(i,".webp");return(0,P.jsx)("video",{width:"100%",ref:o,controls:!0,onTimeUpdate:function(){var n,e=(null===(n=o.current)||void 0===n?void 0:n.currentTime)||a;0!==e&&(localStorage.setItem(r,String(e)),u(e))},poster:l})},S=v.ZP.h2(a||(a=(0,m.Z)([""]))),y=(v.ZP.a(u||(u=(0,m.Z)([""]))),v.ZP.li(l||(l=(0,m.Z)(["\n  cursor: pointer;\n"])))),E=t(5397),L=function(){var n=(0,h.UO)().id,e=void 0===n?"":n,t=(0,p.GI)(e).data,i=(0,f.useState)(null),r=(0,d.Z)(i,2),o=r[0],c=r[1],s=(0,f.useState)(!1),a=(0,d.Z)(s,2),u=a[0],l=a[1];(0,f.useEffect)((function(){t&&t.lessons&&t.lessons.length>0&&c(t.lessons[0])}),[t]);return(0,P.jsxs)(E.W2,{children:[(0,P.jsx)(x,{children:null===t||void 0===t?void 0:t.title}),(0,P.jsx)(w,{children:null===t||void 0===t?void 0:t.description}),(0,P.jsx)(g,{children:u&&o&&(0,P.jsx)(I,{id:o.id,videoLink:o.link,order:o.order,previewImageLink:o.previewImageLink})}),!u&&o&&(0,P.jsx)(I,{id:o.id,videoLink:o.link,order:o.order,previewImageLink:o.previewImageLink}),(0,P.jsx)(Z,{children:"Lessons:"}),(0,P.jsx)(k,{children:null===t||void 0===t?void 0:t.lessons.map((function(n){return(0,P.jsx)(y,{onClick:function(){return function(n){"locked"!==n.status&&(l(!0),c(n))}(n)},id:n.id,title:n.title,children:(0,P.jsx)(S,{children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=146.58e943fb.chunk.js.map