function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequirea837;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequirea837=s),s("ecGnp"),s("iiT47"),s("lohXh"),s("gQXit");var o=s("dWN8B"),r={};r=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();var a={};function c(){return`
    <div class="container grid-wrapper shopping-list-container">
      <h2 class="shop-list-title">Shopping <span class="shop-list-title-span">List</span></h2>
      <div class="shop-list-empty-container">
        <p class="shop-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
        <img class="shop-list-empty-img" src="${t(a)}" alt="Books in empty section"/>
      </div>
    </div>`}a=new URL(s("kyEFX").resolve("3uQue"),import.meta.url).toString();var u=s("2sKPt"),l=function(){return(l=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};function p(t,e,n,i){var s,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r}function h(t){var e=t.touches?t.touches[t.touches.length-1]:t;return{x:e.clientX,y:e.clientY}}new WeakMap,RegExp("^-(?!(?:webkit|moz|ms|o)-)");var f=function(){function t(t){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=h(t)}return t.prototype.update=function(t){var e=this.velocity,n=this.updateTime,i=this.lastPosition,s=Date.now(),o=h(t),r={x:-(o.x-i.x),y:-(o.y-i.y)},a=s-n||16.7,c=r.x/a*16.7,u=r.y/a*16.7;e.x=c*this.velocityMultiplier,e.y=u*this.velocityMultiplier,this.delta=r,this.updateTime=s,this.lastPosition=o},t}();function g(t,e){return void 0===t&&(t=-1/0),void 0===e&&(e=1/0),function(n,i){var s="_"+i;Object.defineProperty(n,i,{get:function(){return this[s]},set:function(n){Object.defineProperty(this,s,{value:Math.max(t,Math.min(e,n)),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function d(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(t){Object.defineProperty(this,n,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}!function(){function t(){this._touchList={}}Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?l({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?l({},t.velocity):this._primitiveValue},t.prototype.getEasingDistance=function(t){var e=1-t,n={x:0,y:0},i=this.getVelocity();return Object.keys(i).forEach(function(t){for(var s=10>=Math.abs(i[t])?0:i[t];0!==s;)n[t]+=s,s=s*e|0}),n},t.prototype.track=function(t){var e=this;return Array.from(t.targetTouches).forEach(function(t){e._add(t)}),this._touchList},t.prototype.update=function(t){var e=this,n=t.touches,i=t.changedTouches;return Array.from(n).forEach(function(t){e._renew(t)}),this._setActiveID(i),this._touchList},t.prototype.release=function(t){var e=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach(function(t){e._delete(t)})},t.prototype._add=function(t){this._has(t)&&this._delete(t);var e=new f(t);this._touchList[t.identifier]=e},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){var t=this._activeTouchID;return this._touchList[t]}}(),function(){function t(t){var e=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach(function(n){e[n]=t[n]})}Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),p([g(0,1)],t.prototype,"damping",void 0),p([g(0,1/0)],t.prototype,"thumbMinSize",void 0),p([d],t.prototype,"renderByPixels",void 0),p([d],t.prototype,"alwaysShowTracks",void 0),p([d],t.prototype,"continuousScrolling",void 0)}();var v=s("iQIUW"),_={};window,_=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,(function(e){return t[e]}).bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,s,o,r=Object.prototype.hasOwnProperty;for(s=1,o=arguments.length;s<o;s+=1)for(i in n=arguments[s])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),s=n(17),o=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var s,o;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,s=n;n>=0&&s<o;s+=1)if(e[s]===t)return s;return -1}},function(t,e,n){"use strict";var i=n(29),s=n(30),o=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=o(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}}},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),s=n(7),o=n(0),r=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=s({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(s/2),1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i):(e=(o-1)*s+1,n=Math.min(n=o*s,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),s=n(14),o=n(4),r=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?u(t=t.split(l),function(t){i._bindEvent(t,e,n)}):r(t)&&(n=e,u(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(r(t)){n=e,u(t,function(t,e){i.once(e,t,n)});return}this.on(t,function s(){e.apply(n,arguments),i.off(t,s,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,o=e===i.context,r=s&&o;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),s=n._matchHandler(e);u(t=t.split(l),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(u(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?u(t,function(t,e){i.off(e,t)}):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),u(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),s=n(7),o=n(21),r=n(22),a=n(24),c=n(25),u=n(0),l=n(4),p=n(28),h=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],d=["prev","next"],v=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},f,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,function(t){this._buttons[t]=h.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(g,function(t){var e="disabled"+h.capitalizeFirstLetter(t);this._buttons[e]=h.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(d,function(t){this._buttons[t+"More"]=h.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(c(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(c(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=h.createElementByTemplate(this._template.currentPage,{page:n}):(e=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==s||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){r(this._getContainerElement(),"click",function(e){var n,i,s=o(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!h.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],h.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),s=n(3),o=n(23);function r(t,e,n,i){var r,a;function c(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,c):"attachEvent"in t&&t.attachEvent("on"+e,c),r=o(t,e),a=!1,s(r,function(t){return t.handler!==n||(a=!0,!1)}),a||r.push({handler:n,wrappedHandler:c})}t.exports=function(t,e,n,o){if(i(e)){s(e.split(/\s+/g),function(e){r(t,e,n,o)});return}s(e,function(e,i){r(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),s=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];if(a){i(n,function(e){t.classList.add(e)});return}(e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>s(t,c)&&c.push(t)}),r(t,c)}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),s=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){"use strict";var i=n(8),s=n(3),o=n(2),r=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,f=/^["']\w+["']$/,g=/"|'/g,d=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i,o,r,a,c=(i=[t],o=[],r=0,a=0,s(e,function(t,n){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),o.push(e.slice(a,n)),a=n+1)}),o.push(e.slice(a)),{exps:i,sourcesInsideIf:o}),u=!1,l="";return s(c.exps,function(t,e){return(u=y(t,n))&&(l=b(c.sourcesInsideIf[e],n)),!u}),l},each:function(t,e,n){var i=y(t,n),r=o(i)?"@index":"@key",c={},u="";return s(i,function(t,i){c[r]=i,c["@this"]=t,a(n,c),u+=b(e.slice(),n)}),u},with:function(t,e,n){var s=i("as",t),o=t[s+1],r=y(t.slice(0,s),n),c={};return c[o]=r,b(e,a(n,c))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],o=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return s.push(t.slice(o)),s};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:f.test(t)?i=t.replace(g,""):u.test(t)?i=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(h))[0],e)[n[1]]:d.test(t)&&(i=parseFloat(t)),i}function y(t,e){var n,i,o=m(t[0],e);return o instanceof Function?(n=t.slice(1),i=[],s(n,function(t){i.push(m(t,e))}),o.apply(null,i)):o}function b(t,e){for(var n,i,s,o=1,a=t[1];r(a);)v[i=(n=a.split(" "))[0]]?(s=function(t,e,n){for(var i,s,o,a=v[t],c=1,u=2,l=e[2];c&&r(l);)0===l.indexOf(t)?c+=1:0===l.indexOf("/"+t)&&(c-=1,o=u),u+=2,l=e[u];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=a(e[0].split(" ").slice(1),(i=o,(s=e.splice(1,i-0)).pop(),s),n),e}(i,t.splice(o,t.length-o),e),t=t.concat(s)):t[o]=y(n,e),o+=2,a=t[o];return t.join("")}t.exports=function(t,e){return b(_(t,c),e)}},function(t,e,n){"use strict";var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!r||new Date().getTime()-r>6048e5)&&(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,function(t,e){s+="&"+e+"="+t}),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]),document.querySelector(".shopping-list-book-btn");const m=document.querySelectorAll(".mob-menu-link");m.forEach(t=>t.classList.remove("activ-page")),m[1].classList.add("activ-page");const y=document.querySelectorAll(".menu-link");y.forEach(t=>t.classList.remove("activ-page")),y[1].classList.add("activ-page");const b=document.querySelector(".cont-section"),x=document.getElementById("tui-pagination-container");let P=1;const E=JSON.parse(localStorage.getItem("bookList"))||[],w={totalItems:E.length,itemsPerPage:3,visiblePages:3,page:P,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},M=new(t(_))(x,w),C=async e=>{let n=JSON.parse(localStorage.getItem("bookList"))||[],i=[...n],s=(P-1)*3,o=s+3,a=i.slice(s,o),l=[];for(let e=0;e<a.length;e+=1){let n=a[e];try{let e=await new(0,u.FetchBook)().fetchElement(n),i=function(e){let{_id:n,book_image:i,list_name:s,title:o,description:a,author:c,buy_links:[u,l,p,h,f,g]}=e,d=` 
  <li data-id="${n}" class="li-item">
    <div class="shopping-list-book-item">
      <img
        class="shopping-list-book-img"
        src="${i}"
        alt="Image of ${o}"
      />
      <div class="shopping-list-book-text">
        <h2 class="shopping-list-book-title">${o}</h2>
        <p class="shopping-list-book-category">${s}</p>
        <p class="shopping-list-book-description">${a||"Description is empty"}</p>
        <p class="shopping-list-book-author">${c}</p>
        <div class="shopping-list-book-links">
          <a class="test-link" href="${u.url}">
            <svg width="32" height="11" class="shopping-list-amazon"><use href="${t(r)}#icon-amazon"></use></svg>
          </a>
          <a class="test-link" href="${l.url}">
            <svg width="16" height="16" class="shopping-list-apple"><use href="${t(r)}#icon-apple-books-logo"></use></svg>
          </a>
          <a class="test-link" href="${f.url}">
            <svg width="16" height="16" class="shopping-list-bookshop"><use href="${t(r)}#icon-book-shops-logo"></use></svg>
          </a>
        </div>
        <button data-id="${n}" class="shopping-list-book-btn" >
          <svg class="shopping-list-book-btn-icon" width="16" height="16"><use href="${t(r)}#icon-trash"></use></svg>
        </button>
      </div>
    </div>
  </li>`;return d}(e);l.push(i)}catch(t){console.warn(`Error fetching book with ID ${n}: ${t.message}`)}}if(b.innerHTML=function(t){let e;if(0===t.length)e=c();else{let n=t.join("");e=`
  <div class="container grid-wrapper shopping-list-container">
    <h2 class="shop-list-title">Shopping <span class="shop-list-title-span">List</span></h2>
    <ul class="shopping-list">${n}</ul>
  </div>`}return e}(l),0!==n.length){let t=document.querySelector(".shopping-list");t.addEventListener("click",k)}};function k(t){let e=[...document.querySelectorAll(".li-item")],n=JSON.parse(localStorage.getItem("bookList"))||null,i=t.target.dataset.id,s=n.indexOf(i);-1!==s&&(n.splice(s,1),localStorage.setItem("bookList",JSON.stringify(n)),e.find(t=>t.dataset.id===i).remove(),(0,v.Notify).info("Book successfully deleted from your chart")),0===n.length&&(b.innerHTML=c()),M.getCurrentPage()!==Math.ceil(n.length/3)&&(M.reset(n.length),M.movePageTo(Math.ceil(n.length/3))),C(),(0,o.addToFierbase)()}C(),M.on("beforeMove",t=>{let e=t.page;P=e,C()}),M.on("afterMove",t=>{let e=t.page;P=e,C()});
//# sourceMappingURL=shoppingList.e90b783c.js.map
