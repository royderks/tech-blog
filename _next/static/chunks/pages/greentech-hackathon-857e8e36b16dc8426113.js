_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"2W6z":function(e,t,n){"use strict";var o=function(){};e.exports=o},"4LCK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/greentech-hackathon",function(){return n("Sq0u")}])},Gd4L:function(e,t,n){"use strict";n.r(t),n.d(t,"FAQ",(function(){return o})),n.d(t,"REGISTER_LINK_HACKATHON",(function(){return a})),n.d(t,"REGISTER_LINK_EVENT",(function(){return r})),n.d(t,"SCHEDULE",(function(){return i}));var o=[{title:"Can I join without technical knowledge?",description:"Yes! We invite everyone to participate in the event, even without technical knowledge you can still create cool prototypes or use your imagination to make the perfect hackathon project come to life. Also, you can be teamed up with more technical people during our team matchmaking event."},{title:"How many team members do I need?",description:"Nobody likes to ride solo, so we advise you to sign up with a team of 2 to 5 people. If possible, it's best if you're able to combine the skill set of your team!"},{title:"What if I don't have a team yet?",description:"No problem! Before the event, we'll organize a team matchmaking event for those who have signed up individually. Based on your skillset and the challenge you prefer working on we try to create an optimal team."},{title:"Can I only join the event with speakers?",description:"Yes, you can! If you don't have the time or not looking forward to joining the hackathon, you can still signup for the LinkedIn event and join us on April 1st to learn more about climate challenges and the energy transition."}],a="https://forms.gle/rigzes89tJA2dWcu7",r="https://www.linkedin.com/events/greentechhackathon20216773262111981219840/",i=[{description:"Opening & hacking \ud83d\ude80",activities:[{time:"09:00 - 10:00",description:"Opening ceremony"},{time:"10:00 - 11:30",description:"Team formation (optional)"},{time:"16:30 - 17:30",description:"Day closing \ud83c\udf7b"}]},{description:"Full day of hacking \ud83d\ude80",activities:[{time:"09:30 - 10:00",description:"Day start \u2615 (optional)"},{time:"12:00 - 12:30",description:"Lunch & energizer"},{time:"16:30 - 18:00",description:"Inspiration sessions \ud83c\udfa4"}]},{description:"Finishing up & presentations \ud83c\udfc6",activities:[{time:"09:30 - 10:00",description:"Day start \u2615"},{time:"12:00 - 12:30",description:"Lunch & energizer"},{time:"16:30 - 17:30",description:"Presentations, prizes & closing \ud83c\udf7b"}]}]},Sq0u:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.r(t),n.d(t,"__N_SSG",(function(){return Ze})),n.d(t,"default",(function(){return et}));var a=n("q1tI"),r=n.n(a),i=n("jaOS"),s=n("g4pe"),c=n.n(s),l=n("mToe"),u=n("wx14"),d=n("zLVn"),f=n("TSYQ"),p=n.n(f),m=!("undefined"===typeof window||!window.document||!window.document.createElement),h=!1,g=!1;try{var v={get passive(){return h=!0},get once(){return g=h=!0}};m&&(window.addEventListener("test",v,v),window.removeEventListener("test",v,!0))}catch(tt){}var y=function(e,t,n,o){if(o&&"boolean"!==typeof o&&!g){var a=o.once,r=o.capture,i=n;!g&&a&&(i=n.__once||function e(o){this.removeEventListener(t,e,r),n.call(this,o)},n.__once=i),e.addEventListener(t,i,h?o:r)}e.addEventListener(t,n,o)};function b(e){return e&&e.ownerDocument||document}var E,w=function(e,t,n,o){var a=o&&"boolean"!==typeof o?o.capture:o;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};function x(e){if((!E&&0!==E||e)&&m){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),E=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return E}var k=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function C(e){var t=k(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}function O(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}function N(e,t){return function(e){var t=b(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var T=/([A-Z])/g;var j=/^ms-/;function R(e){return function(e){return e.replace(T,"-$1").toLowerCase()}(e).replace(j,"-ms-")}var S=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var I=function(e,t){var n="",o="";if("string"===typeof t)return e.style.getPropertyValue(R(t))||N(e).getPropertyValue(R(t));Object.keys(t).forEach((function(a){var r=t[a];r||0===r?!function(e){return!(!e||!S.test(e))}(a)?n+=R(a)+": "+r+";":o+=a+"("+r+") ":e.style.removeProperty(R(a))})),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n};var A=function(e,t,n,o){return y(e,t,n,o),function(){w(e,t,n,o)}};function H(e,t,n){void 0===n&&(n=5);var o=!1,a=setTimeout((function(){o||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),r=A(e,"transitionend",(function(){o=!0}),{once:!0});return function(){clearTimeout(a),r()}}function L(e,t,n,o){null==n&&(n=function(e){var t=I(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=H(e,n,o),r=A(e,"transitionend",t);return function(){a(),r()}}function _(e){void 0===e&&(e=b());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(tt){return e.body}}function F(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var D=n("17x9"),P=n.n(D),B=n("i8i4"),M=n.n(B);function G(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function z(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function K(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=z(e.className,t):e.setAttribute("class",z(e.className&&e.className.baseVal||"",t))}function V(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function U(e){var t;return V(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=V(e)?b():b(e),n=V(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var W=["template","script","style"],q=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===W.indexOf(n.toLowerCase())}(e)&&n(e)}))};function X(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var Y,Q=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,o=void 0===n||n,a=t.handleContainerOverflow,r=void 0===a||a;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=o,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=x()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,o){return!!t(e,o)&&(n=o,!0)})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(I(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),I(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var o=this.modals.indexOf(e),a=this.containers.indexOf(t);if(-1!==o)return o;if(o=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,o=t.backdrop;q(e,[n,o],(function(e){return X(!0,e)}))}(t,e),-1!==a)return this.data[a].modals.push(e),o;var r={modals:[e],classes:n?n.split(/\s+/):[],overflowing:U(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(G.bind(null,t)),this.containers.push(t),this.data.push(r),o},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),o=this.data[n],a=this.containers[n];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(t,1),0===o.modals.length)o.classes.forEach(K.bind(null,a)),this.handleContainerOverflow&&this.removeContainerStyle(o,a),this.hideSiblingNodes&&function(e,t){var n=t.dialog,o=t.backdrop;q(e,[n,o],(function(e){return X(!1,e)}))}(a,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var r=o.modals[o.modals.length-1],i=r.backdrop;X(!1,r.dialog),X(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),$=function(e){var t;return"undefined"===typeof document?null:null==e?b().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function J(e){var t=e||(Y||(Y=new Q),Y),n=Object(a.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,o){return t.add(n.current,e,o)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(a.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(a.useCallback)((function(e){n.current.backdrop=e}),[])})}var Z=Object(a.forwardRef)((function(e,t){var n=e.show,o=void 0!==n&&n,i=e.role,s=void 0===i?"dialog":i,c=e.className,l=e.style,f=e.children,p=e.backdrop,h=void 0===p||p,g=e.keyboard,v=void 0===g||g,y=e.onBackdropClick,b=e.onEscapeKeyDown,E=e.transition,w=e.backdropTransition,x=e.autoFocus,k=void 0===x||x,N=e.enforceFocus,T=void 0===N||N,j=e.restoreFocus,R=void 0===j||j,S=e.restoreFocusOptions,I=e.renderDialog,H=e.renderBackdrop,L=void 0===H?function(e){return r.a.createElement("div",e)}:H,D=e.manager,P=e.container,B=e.containerClassName,G=e.onShow,z=e.onHide,K=void 0===z?function(){}:z,V=e.onExit,U=e.onExited,W=e.onExiting,q=e.onEnter,X=e.onEntering,Y=e.onEntered,Q=Object(d.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),Z=function(e,t){var n=Object(a.useState)((function(){return $(e)})),o=n[0],r=n[1];if(!o){var i=$(e);i&&r(i)}return Object(a.useEffect)((function(){t&&o&&t(o)}),[t,o]),Object(a.useEffect)((function(){var t=$(e);t!==o&&r(t)}),[e,o]),o}(P),ee=J(D),te=function(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),ne=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.current=e})),t.current}(o),oe=Object(a.useState)(!o),ae=oe[0],re=oe[1],ie=Object(a.useRef)(null);Object(a.useImperativeHandle)(t,(function(){return ee}),[ee]),m&&!ne&&o&&(ie.current=_()),E||o||ae?o&&ae&&re(!1):re(!0);var se=C((function(){if(ee.add(Z,B),pe.current=A(document,"keydown",de),fe.current=A(document,"focus",(function(){return setTimeout(le)}),!0),G&&G(),k){var e=_(document);ee.dialog&&e&&!F(ee.dialog,e)&&(ie.current=e,ee.dialog.focus())}})),ce=C((function(){var e;(ee.remove(),null==pe.current||pe.current(),null==fe.current||fe.current(),R)&&(null==(e=ie.current)||null==e.focus||e.focus(S),ie.current=null)}));Object(a.useEffect)((function(){o&&Z&&se()}),[o,Z,se]),Object(a.useEffect)((function(){ae&&ce()}),[ae,ce]),O((function(){ce()}));var le=C((function(){if(T&&te()&&ee.isTopModal()){var e=_();ee.dialog&&e&&!F(ee.dialog,e)&&ee.dialog.focus()}})),ue=C((function(e){e.target===e.currentTarget&&(null==y||y(e),!0===h&&K())})),de=C((function(e){v&&27===e.keyCode&&ee.isTopModal()&&(null==b||b(e),e.defaultPrevented||K())})),fe=Object(a.useRef)(),pe=Object(a.useRef)(),me=E;if(!Z||!(o||me&&!ae))return null;var he=Object(u.a)({role:s,ref:ee.setDialogRef,"aria-modal":"dialog"===s||void 0},Q,{style:l,className:c,tabIndex:-1}),ge=I?I(he):r.a.createElement("div",he,r.a.cloneElement(f,{role:"document"}));me&&(ge=r.a.createElement(me,{appear:!0,unmountOnExit:!0,in:!!o,onExit:V,onExiting:W,onExited:function(){re(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==U||U.apply(void 0,t)},onEnter:q,onEntering:X,onEntered:Y},ge));var ve=null;if(h){var ye=w;ve=L({ref:ee.setBackdropRef,onClick:ue}),ye&&(ve=r.a.createElement(ye,{appear:!0,in:!!o},ve))}return r.a.createElement(r.a.Fragment,null,M.a.createPortal(r.a.createElement(r.a.Fragment,null,ve,ge),Z))})),ee={show:P.a.bool,container:P.a.any,onShow:P.a.func,onHide:P.a.func,backdrop:P.a.oneOfType([P.a.bool,P.a.oneOf(["static"])]),renderDialog:P.a.func,renderBackdrop:P.a.func,onEscapeKeyDown:P.a.func,onBackdropClick:P.a.func,containerClassName:P.a.string,keyboard:P.a.bool,transition:P.a.elementType,backdropTransition:P.a.elementType,autoFocus:P.a.bool,enforceFocus:P.a.bool,restoreFocus:P.a.bool,restoreFocusOptions:P.a.shape({preventScroll:P.a.bool}),onEnter:P.a.func,onEntering:P.a.func,onEntered:P.a.func,onExit:P.a.func,onExiting:P.a.func,onExited:P.a.func,manager:P.a.instanceOf(Q)};Z.displayName="Modal",Z.propTypes=ee;var te=Object.assign(Z,{Manager:Q});n("2W6z");function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ne(e,t)}var ae=Function.prototype.bind.call(Function.prototype.call,[].slice);function re(e,t){return ae(e.querySelectorAll(t))}var ie=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",se=".sticky-top",ce=".navbar-toggler",le=function(e){function t(){return e.apply(this,arguments)||this}oe(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var o,a=t.style[e];t.dataset[e]=a,I(t,((o={})[e]=parseFloat(I(t,e))+n+"px",o))},n.restore=function(e,t){var n,o=t.dataset[e];void 0!==o&&(delete t.dataset[e],I(t,((n={})[e]=o,n)))},n.setContainerStyle=function(t,n){var o=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var a=x();re(n,ie).forEach((function(e){return o.adjustAndStore("paddingRight",e,a)})),re(n,se).forEach((function(e){return o.adjustAndStore("marginRight",e,-a)})),re(n,ce).forEach((function(e){return o.adjustAndStore("marginRight",e,a)}))}},n.removeContainerStyle=function(t,n){var o=this;e.prototype.removeContainerStyle.call(this,t,n),re(n,ie).forEach((function(e){return o.restore("paddingRight",e)})),re(n,se).forEach((function(e){return o.restore("marginRight",e)})),re(n,ce).forEach((function(e){return o.restore("marginRight",e)}))},t}(Q),ue=!1,de=r.a.createContext(null),fe="unmounted",pe="exited",me="entering",he="entered",ge="exiting",ve=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var a,r=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?r?(a=pe,o.appearStatus=me):a=he:a=t.unmountOnExit||t.mountOnEnter?fe:pe,o.state={status:a},o.nextCallback=null,o}oe(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===fe?{status:pe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==me&&n!==he&&(t=me):n!==me&&n!==he||(t=ge)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===me?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===pe&&this.setState({status:fe})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,a=this.props.nodeRef?[o]:[M.a.findDOMNode(this),o],r=a[0],i=a[1],s=this.getTimeouts(),c=o?s.appear:s.enter;!e&&!n||ue?this.safeSetState({status:he},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,i),this.safeSetState({status:me},(function(){t.props.onEntering(r,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:he},(function(){t.props.onEntered(r,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:M.a.findDOMNode(this);t&&!ue?(this.props.onExit(o),this.safeSetState({status:ge},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:pe},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:pe},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:M.a.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=a[0],i=a[1];this.props.addEndListener(r,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===fe)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(d.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(de.Provider,{value:null},"function"===typeof n?n(e,o):r.a.cloneElement(r.a.Children.only(n),o))},t}(r.a.Component);function ye(){}ve.contextType=de,ve.propTypes={},ve.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ye,onEntering:ye,onEntered:ye,onExit:ye,onExiting:ye,onExited:ye},ve.UNMOUNTED=fe,ve.EXITED=pe,ve.ENTERING=me,ve.ENTERED=he,ve.EXITING=ge;var be,Ee=ve;function we(e,t){var n=L(e,(function(o){o.target===e&&(n(),t(o))}))}var xe=((be={}).entering="show",be.entered="show",be),ke=r.a.forwardRef((function(e,t){var n=e.className,o=e.children,i=Object(d.a)(e,["className","children"]),s=Object(a.useCallback)((function(e){!function(e){e.offsetHeight}(e),i.onEnter&&i.onEnter(e)}),[i]);return r.a.createElement(Ee,Object(u.a)({ref:t,addEndListener:we},i,{onEnter:s}),(function(e,t){return r.a.cloneElement(o,Object(u.a)({},t,{className:p()("fade",n,o.props.className,xe[e])}))}))}));ke.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ke.displayName="Fade";var Ce=ke,Oe=/-(.)/g;var Ne=r.a.createContext({});Ne.Consumer,Ne.Provider;function Te(e,t){var n=Object(a.useContext)(Ne);return e||n[t]||t}var je=function(e){return e[0].toUpperCase()+(t=e,t.replace(Oe,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function Re(e,t){var n=void 0===t?{}:t,o=n.displayName,a=void 0===o?je(e):o,i=n.Component,s=n.defaultProps,c=r.a.forwardRef((function(t,n){var o=t.className,a=t.bsPrefix,s=t.as,c=void 0===s?i||"div":s,l=Object(d.a)(t,["className","bsPrefix","as"]),f=Te(a,e);return r.a.createElement(c,Object(u.a)({ref:n,className:p()(o,f)},l))}));return c.defaultProps=s,c.displayName=a,c}var Se=Re("modal-body"),Ie=r.a.createContext({onHide:function(){}}),Ae=r.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,a=e.contentClassName,i=e.centered,s=e.size,c=e.children,l=e.scrollable,f=Object(d.a)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),m=(n=Te(n,"modal"))+"-dialog";return r.a.createElement("div",Object(u.a)({},f,{ref:t,className:p()(m,o,s&&n+"-"+s,i&&m+"-centered",l&&m+"-scrollable")}),r.a.createElement("div",{className:p()(n+"-content",a)},c))}));Ae.displayName="ModalDialog";var He=Ae,Le=Re("modal-footer"),_e={label:P.a.string.isRequired,onClick:P.a.func},Fe=r.a.forwardRef((function(e,t){var n=e.label,o=e.onClick,a=e.className,i=Object(d.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(u.a)({ref:t,type:"button",className:p()("close",a),onClick:o},i),r.a.createElement("span",{"aria-hidden":"true"},"\xd7"),r.a.createElement("span",{className:"sr-only"},n))}));Fe.displayName="CloseButton",Fe.propTypes=_e,Fe.defaultProps={label:"Close"};var De=Fe,Pe=r.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.closeLabel,i=e.closeButton,s=e.onHide,c=e.className,l=e.children,f=Object(d.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Te(n,"modal-header");var m=Object(a.useContext)(Ie),h=C((function(){m&&m.onHide(),s&&s()}));return r.a.createElement("div",Object(u.a)({ref:t},f,{className:p()(c,n)}),l,i&&r.a.createElement(De,{label:o,onClick:h}))}));Pe.displayName="ModalHeader",Pe.defaultProps={closeLabel:"Close",closeButton:!1};var Be,Me,Ge=Pe,ze=Re("modal-title",{Component:(Be="h4",r.a.forwardRef((function(e,t){return r.a.createElement("div",Object(u.a)({},e,{ref:t,className:p()(e.className,Be)}))})))}),Ke={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:He};function Ve(e){return r.a.createElement(Ce,e)}function Ue(e){return r.a.createElement(Ce,e)}var We=r.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.style,s=e.dialogClassName,c=e.contentClassName,l=e.children,f=e.dialogAs,h=e["aria-labelledby"],g=e.show,v=e.animation,E=e.backdrop,k=e.keyboard,N=e.onEscapeKeyDown,T=e.onShow,j=e.onHide,R=e.container,S=e.autoFocus,I=e.enforceFocus,A=e.restoreFocus,H=e.restoreFocusOptions,_=e.onEntered,F=e.onExit,D=e.onExiting,P=e.onEnter,B=e.onEntering,M=e.onExited,G=e.backdropClassName,z=e.manager,K=Object(d.a)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),V=Object(a.useState)({}),U=V[0],W=V[1],q=Object(a.useState)(!1),X=q[0],Y=q[1],Q=Object(a.useRef)(!1),$=Object(a.useRef)(!1),J=Object(a.useRef)(null),Z=Object(a.useState)(null),ee=Z[0],ne=Z[1],oe=C(j);n=Te(n,"modal"),Object(a.useImperativeHandle)(t,(function(){return{get _modal(){return ee}}}),[ee]);var ae=Object(a.useMemo)((function(){return{onHide:oe}}),[oe]);function re(){return z||(Me||(Me=new le),Me)}function ie(e){if(m){var t=re().isContainerOverflowing(ee),n=e.scrollHeight>b(e).documentElement.clientHeight;W({paddingRight:t&&!n?x():void 0,paddingLeft:!t&&n?x():void 0})}}var se=C((function(){ee&&ie(ee.dialog)}));O((function(){w(window,"resize",se),J.current&&J.current()}));var ce=function(){Q.current=!0},ue=function(e){Q.current&&ee&&e.target===ee.dialog&&($.current=!0),Q.current=!1},de=function(){Y(!0),J.current=L(ee.dialog,(function(){Y(!1)}))},fe=function(e){"static"!==E?$.current||e.target!==e.currentTarget?$.current=!1:j():function(e){e.target===e.currentTarget&&de()}(e)},pe=Object(a.useCallback)((function(e){return r.a.createElement("div",Object(u.a)({},e,{className:p()(n+"-backdrop",G,!v&&"show")}))}),[v,G,n]),me=Object(u.a)({},i,U);v||(me.display="block");return r.a.createElement(Ie.Provider,{value:ae},r.a.createElement(te,{show:g,ref:ne,backdrop:E,container:R,keyboard:!0,autoFocus:S,enforceFocus:I,restoreFocus:A,restoreFocusOptions:H,onEscapeKeyDown:function(e){k||"static"!==E?k&&N&&N(e):(e.preventDefault(),de())},onShow:T,onHide:j,onEnter:function(e){e&&(e.style.display="block",ie(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];P&&P.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];B&&B.apply(void 0,[e].concat(n)),y(window,"resize",se)},onEntered:_,onExit:function(e){J.current&&J.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];F&&F.apply(void 0,[e].concat(n))},onExiting:D,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];M&&M.apply(void 0,n),w(window,"resize",se)},manager:re(),containerClassName:n+"-open",transition:v?Ve:void 0,backdropTransition:v?Ue:void 0,renderBackdrop:pe,renderDialog:function(e){return r.a.createElement("div",Object(u.a)({role:"dialog"},e,{style:me,className:p()(o,n,X&&n+"-static"),onClick:E?fe:void 0,onMouseUp:ue,"aria-labelledby":h}),r.a.createElement(f,Object(u.a)({},K,{onMouseDown:ce,className:s,contentClassName:c}),l))}}))}));We.displayName="Modal",We.defaultProps=Ke,We.Body=Se,We.Header=Ge,We.Title=ze,We.Footer=Le,We.Dialog=He,We.TRANSITION_DURATION=300,We.BACKDROP_TRANSITION_DURATION=150;var qe=We,Xe=(n("q4sD"),n("5Gh6")),Ye=r.a.createElement;function Qe(e){var t=e.logo,n=e.hero,o=e.title,r=e.company,s=e.content,c=e.registerLink,l=Object(a.useState)(!1),u=l[0],d=l[1];return Ye("div",{style:{width:"100% "}},Ye(i.Card,{image:t,style:{width:"100%"},imageAsBackground:!0},Ye(i.H4,null,r),Ye(i.Paragraph,null,o),Ye(i.Button,{onClick:function(){return d(!0)}},"Read more")),Ye(qe,{show:u,onHide:function(){return d(!1)},size:"xl"},Ye(qe.Header,{closeButton:!0},Ye(qe.Title,null,"Challenge: ".concat(o))),Ye(qe.Body,null,Ye("div",{className:"modal-hero"},Ye("img",{src:n})),Ye(Xe.a,null,s)),Ye(qe.Footer,null,Ye(i.Button,{as:"a",href:c},"REGISTER"))))}var $e=n("Gd4L"),Je=r.a.createElement,Ze=!0;function et(e){var t=e.challenges;return Je(r.a.Fragment,null,Je(c.a,null,Je("title",null,"GreenTech Hackathon 2021 - vandebron.tech"),Je("meta",{name:"Description",content:"Vandebron GreenTech Hackathon"}),Je("meta",{property:"og:title",content:"Vandebron GreenTech Hackathon - 31 March, 1-2 April 2021"}),Je("meta",{property:"og:description",content:"Climate change is on of the many pressing challenges our society is facing currently. At Vandebron we want continue trying to find ways to tackle this immense challenge. That\u2019s why we\u2019re organizing a 3-day GreenTech hackathon from March 31st to April 2nd."}),Je("meta",{property:"og:image",content:"https://www.vandebron.tech/images/greentech-hackathon/hero.jpg",key:"ogimage"})),Je("div",{className:"home"},Je("div",{className:"hero"},Je("div",{className:"hero-overlay"},Je(i.Container,null,Je(i.Row,{as:"header",alignItems:"center",justifyContent:"between",style:{paddingTop:30,paddingBottom:30,marginBottom:30}},Je(i.Col,{col:12,sm:12,smAuto:!1,mdAuto:!0,lgAuto:!0},Je(l.a,{inverted:!0}))),Je(i.Row,{alignItems:"center",justifyContent:"start"},Je(i.Col,{col:12,sm:12,md:8,lg:8,alignItems:"start",style:{textAlign:"left"}},Je(i.H4,{style:{color:"white"}},"31 MARCH, 1-2 APRIL"),Je(i.H1,{style:{color:"white",textShadow:"2px 2px rgba(0, 0, 0, 0.3)"}},"GreenTech Hackathon 2021"),Je(i.Button,{as:"a",href:$e.REGISTER_LINK_HACKATHON,style:{background:"green",borderColor:"green",marginRight:20}},"REGISTER HACKATHON"),Je(i.Button,{as:"a",href:$e.REGISTER_LINK_EVENT,variant:"button-alternate"},"REGISTER EVENT")))))),Je(i.Container,null,Je(i.Row,{alignItems:"center",style:{paddingTop:60,paddingBottom:60}},Je(i.Col,{col:12,sm:12,md:12,lg:6,alignItems:"start",style:{textAlign:"left"}},Je(i.H3,null,"Why this hackathon?"),Je(i.Paragraph,null,"Climate change is one of the many pressing challenges our society is currently facing. At Vandebron we want to continue trying to find ways to tackle this immense challenge. That\u2019s why we\u2019re organizing a 3-day GreenTech hackathon from March 31st to April 2nd."),Je(i.Paragraph,null,"During this free online event, we're trying to find technological solutions to problems in wildlife conservation and renewable energy. And you can join us! In these three days, you get the opportunity to work on challenges from our partners, access their technology and knowledge, and you'll get the chance to win unique prizes. Besides, on April 1st (no joke) different speakers will share their expertise and experiences with you."),Je(i.Paragraph,null,"We'd love to have you on board, registration for both the hackathon and speaker event are now open via the button below (deadline Friday March 19th)."),Je(i.Paragraph,null,Je(i.Button,{as:"a",href:$e.REGISTER_LINK_HACKATHON,style:{marginRight:20,marginBottom:20}},"REGISTER HACKATHON"),Je(i.Button,{as:"a",href:$e.REGISTER_LINK_EVENT},"REGISTER EVENT"))),Je(i.Col,{col:12,sm:12,md:12,lg:6,alignItems:"start",style:{textAlign:"left"}},t.map((function(e){var t=e.meta;return Je(i.BoxShadow,{className:"image-stack"},Je(i.Image,{src:t.hero,alt:t.company,aspectRatio:"16:9"}))})))),Je(i.Row,{alignItems:"center",justifyContent:"center",style:{paddingTop:60}},Je(i.H3,null,"The Challenges")),Je(i.Row,{alignItems:"center",style:{paddingBottom:60}},t.map((function(e){return Je(i.Col,{col:12,sm:12,md:6,lg:4,alignItems:"center",justifyContent:"center",style:{textAlign:"left",marginBottom:30}},Je(Qe,o({},e.meta,{content:e.content,registerLink:$e.REGISTER_LINK_HACKATHON})))}))),Je(i.Row,{alignItems:"center",justifyContent:"center",style:{paddingTop:60}},Je(i.H3,null,"Schedule")),Je(i.Row,{alignItems:"flex-start",style:{paddingBottom:60}},$e.SCHEDULE.map((function(e,t){var n=e.description,o=e.activities;return Je(i.Col,{col:12,sm:12,md:6,lg:4,alignItems:"center",justifyContent:"center",style:{textAlign:"left",marginBottom:30}},Je(i.Block,{withShadow:!0,small:!0,style:{padding:30,minHeight:300,width:"100%"}},Je(i.H4,null,"Day ".concat(t+1)),Je(i.Paragraph,{fontSize:"body-small"},n),Je("br",null),Je(i.Table,{style:{width:"100%",fontSize:16}},Je(i.Table.Tbody,{style:{borderTop:"1px solid #eaeaea"}},o.map((function(e,t){var n=e.time,o=e.description;return Je(i.Table.Row,null,Je(i.Table.Cell,{style:{paddingLeft:0}},n),Je(i.Table.Cell,{style:{paddingRight:0}},o))}))))))}))),Je(i.Row,{alignItems:"center",justifyContent:"center",style:{paddingTop:60}},Je(i.H3,null,"Frequently Asked Questions")),Je(i.Row,{alignItems:"flex-start",style:{paddingBottom:60}},$e.FAQ.map((function(e,t){var n=e.title,o=e.description;return Je(i.Col,{col:12,alignItems:"start"},Je(i.H4,null,n),Je(i.Paragraph,null,o))}))),Je(i.Row,{alignItems:"center",justifyContent:"center",style:{paddingTop:60}},Je(i.H3,null,"Other partners")),Je(i.Row,{alignItems:"center",justifyContent:"center",style:{paddingBottom:60}},Je(i.Col,{col:4,sm:4,md:2,lg:2,alignItems:"start"},Je("a",{href:"https://klimaatroute.nl",target:"_blank"},Je(i.Image,{src:"/images/greentech-hackathon/logo-klimaatroute.jpg"}))),Je(i.Col,{col:4,sm:4,md:2,lg:2,alignItems:"start"},Je("a",{href:"https://evexperience.nl/",target:"_blank"},Je(i.Image,{src:"/images/greentech-hackathon/logo-ev-experience.jpg"}))),Je(i.Col,{col:4,sm:4,md:2,lg:2,alignItems:"start"},Je("a",{href:"https://felyx.com",target:"_blank"},Je(i.Image,{src:"/images/greentech-hackathon/logo-felyx.jpg"})))))))}},TSYQ:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===r)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},mToe:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),i=n("jaOS"),s=r.a.createElement;function c(e){var t,n=e.inverted,a=void 0!==n&&n;return s("div",{style:(t={cursor:"pointer"},o(t,"user-select","none"),o(t,"display","flex"),o(t,"alignItems","baseline"),t)},s(i.Logo,{inverted:a}),"\xa0",s(i.H3,{as:"span",color:"green",style:{fontSize:28,margin:0,lineHeight:"auto"}},".tech"))}},q4sD:function(e,t,n){}},[["4LCK",1,2,4,0,3,5]]]);