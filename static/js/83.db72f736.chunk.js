"use strict";(self.webpackChunkshoeshop=self.webpackChunkshoeshop||[]).push([[83],{2083:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var t=n(885),a=n(2791),r=n(8931),i=n(9679),o=n(7462),c=n(3366),l=n(1721),d=n(6755);function u(e,s){return e.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var p=n(7726),h=function(e,s){return e&&s&&s.split(" ").forEach((function(s){return t=s,void((n=e).classList?n.classList.add(t):(0,d.Z)(n,t)||("string"===typeof n.className?n.className=n.className+" "+t:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+t)));var n,t}))},v=function(e,s){return e&&s&&s.split(" ").forEach((function(s){return t=s,void((n=e).classList?n.classList.remove(t):"string"===typeof n.className?n.className=u(n.className,t):n.setAttribute("class",u(n.className&&n.className.baseVal||"",t)));var n,t}))},m=function(e){function s(){for(var s,n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return(s=e.call.apply(e,[this].concat(t))||this).appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(e,n){var t=s.resolveArguments(e,n),a=t[0],r=t[1];s.removeClasses(a,"exit"),s.addClass(a,r?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(e,n)},s.onEntering=function(e,n){var t=s.resolveArguments(e,n),a=t[0],r=t[1]?"appear":"enter";s.addClass(a,r,"active"),s.props.onEntering&&s.props.onEntering(e,n)},s.onEntered=function(e,n){var t=s.resolveArguments(e,n),a=t[0],r=t[1]?"appear":"enter";s.removeClasses(a,r),s.addClass(a,r,"done"),s.props.onEntered&&s.props.onEntered(e,n)},s.onExit=function(e){var n=s.resolveArguments(e)[0];s.removeClasses(n,"appear"),s.removeClasses(n,"enter"),s.addClass(n,"exit","base"),s.props.onExit&&s.props.onExit(e)},s.onExiting=function(e){var n=s.resolveArguments(e)[0];s.addClass(n,"exit","active"),s.props.onExiting&&s.props.onExiting(e)},s.onExited=function(e){var n=s.resolveArguments(e)[0];s.removeClasses(n,"exit"),s.addClass(n,"exit","done"),s.props.onExited&&s.props.onExited(e)},s.resolveArguments=function(e,n){return s.props.nodeRef?[s.props.nodeRef.current,e]:[e,n]},s.getClassNames=function(e){var n=s.props.classNames,t="string"===typeof n,a=t?""+(t&&n?n+"-":"")+e:n[e];return{baseClassName:a,activeClassName:t?a+"-active":n[e+"Active"],doneClassName:t?a+"-done":n[e+"Done"]}},s}(0,l.Z)(s,e);var n=s.prototype;return n.addClass=function(e,s,n){var t=this.getClassNames(s)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===s&&"done"===n&&a&&(t+=" "+a),"active"===n&&e&&e.scrollTop,t&&(this.appliedClasses[s][n]=t,h(e,t))},n.removeClasses=function(e,s){var n=this.appliedClasses[s],t=n.base,a=n.active,r=n.done;this.appliedClasses[s]={},t&&v(e,t),a&&v(e,a),r&&v(e,r)},n.render=function(){var e=this.props,s=(e.classNames,(0,c.Z)(e,["classNames"]));return a.createElement(p.ZP,(0,o.Z)({},s,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(a.Component);m.defaultProps={classNames:""},m.propTypes={};var f=m,x=n(364),g=(n(2616),n(184));function j(e){return(0,g.jsxs)("p",{children:["\uc7ac\uace0: ",e.stock[0]]})}function E(e){var s=e.tab,n=(0,a.useState)(""),r=(0,t.Z)(n,2),i=r[0],o=r[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){o("end")}),100);return function(){clearTimeout(e),o("")}}),[s]),(0,g.jsx)("div",{className:"start ".concat(i," info"),children:[(0,g.jsx)("div",{children:"\uc0c1\ud488\uc815\ubcf4 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"}),(0,g.jsx)("div",{children:"\ubc30\uc1a1\uad00\ub828 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"}),(0,g.jsx)("div",{children:"\ud658\ubd88\uc57d\uad00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4"})][s]})}var C=(0,x.$j)((function(e){return{state:e.reducer,alert:e.reducer2}}))((function(e){var s=(0,a.useState)(!0),n=(0,t.Z)(s,2),o=n[0],c=n[1];(0,a.useEffect)((function(){var e=setTimeout((function(){c(!1)}),2e3);return function(){clearTimeout(e)}}),[o]);var l=(0,r.UO)().id,d=e.shoes.find((function(e){return e.id==l})),u=(0,a.useState)(0),p=(0,t.Z)(u,2),h=p[0],v=p[1],m=(0,a.useState)(!1),x=(0,t.Z)(m,2),C=x[0],N=x[1],b=(0,r.k6)(),k=(0,a.useState)(""),Z=(0,t.Z)(k,2),y=Z[0],A=Z[1],S=(0,a.useState)(""),L=(0,t.Z)(S,2),T=L[0],w=L[1];return(0,a.useEffect)((function(){return w("end"),function(){w("")}}),[]),(0,g.jsxs)("div",{className:"container detail start ".concat(T),children:[!0===o?(0,g.jsx)("div",{className:"my-alert",children:(0,g.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!"})}):null,(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-md-4",children:(0,g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes".concat(d.id+1,".jpg"),width:"100%"})}),(0,g.jsxs)("div",{className:"col-md-6 mt-4",children:[(0,g.jsx)("h4",{className:"pt-5",children:d.title}),(0,g.jsx)("p",{children:d.content}),(0,g.jsxs)("p",{children:[d.price,"\uc6d0"]}),(0,g.jsx)(j,{stock:e.stock})," ",(0,g.jsxs)("select",{name:"size",class:"select_box",onChange:function(e){var s=e.target.value;A(s)},children:[(0,g.jsx)("option",{children:"=== size ==="}),(0,g.jsx)("option",{value:"230",children:"230"}),(0,g.jsx)("option",{value:"240",children:"240"}),(0,g.jsx)("option",{value:"250",children:"250"}),(0,g.jsx)("option",{value:"260",children:"260"}),(0,g.jsx)("option",{value:"270",children:"270"})]}),(0,g.jsx)("button",{className:"btn btn-danger",onClick:function(){e.setStock([9,10,11]),e.dispatch({type:"add",data:{id:d.id,name:d.title,quan:1,size:y}}),b.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),(0,g.jsx)("button",{onClick:function(){b.push("/cart")},className:"btn btn-success",style:{margin:"0 5px"},children:"\uc7a5\ubc14\uad6c\ub2c8"}),(0,g.jsx)("button",{onClick:function(){b.push("/")},className:"btn btn-dark",children:"\ub4a4\ub85c\uac00\uae30"})]})]}),(0,g.jsxs)(i.Z,{variant:"tabs",defaultActiveKey:"link-0",className:"tabs",children:[(0,g.jsx)(i.Z.Item,{children:(0,g.jsx)(i.Z.Link,{eventKey:"link-0",onClick:function(){v(0)},children:"Info"})}),(0,g.jsx)(i.Z.Item,{children:(0,g.jsx)(i.Z.Link,{eventKey:"link-1",onClick:function(){v(1)},children:"Shipping"})}),(0,g.jsx)(i.Z.Item,{children:(0,g.jsx)(i.Z.Link,{eventKey:"link-2",onClick:function(){v(2)},children:"Refund"})})]}),(0,g.jsx)(f,{in:C,classNames:"tab",timeout:500,children:(0,g.jsx)(E,{tab:h,setTabIn:N})})]})}))}}]);
//# sourceMappingURL=83.db72f736.chunk.js.map