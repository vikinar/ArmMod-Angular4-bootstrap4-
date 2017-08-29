!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(e,r){this.options={},this.options=t.merge(e,r)}return t.merge=function(t,e){var r={};for(var n in t)r[n]=t[n];for(var n in e)r[n]=e[n];return r},t.flatten=function(e){var r=t.merge(e,{});return r.properties={},t.merge(r,e.properties)},t.isEqual=function(t,e){for(var r in t)if(t[r]!==e[r])return!1;for(var r in e)if(e[r]!==t[r])return!1;return!0},t}();e.Integration=n},function(t,e,r){"use strict";function n(){return"https://v.shopify.com/"}function o(t){var e=[];for(var r in t)("number"==typeof t[r]||t[r])&&("object"==typeof t[r]&&0===Object.keys(t[r]).length||e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r])));return e.join("&")}function i(t){var e=new Image(1,1);return e.src=t,e.style.display="none",e}function a(t,e,r){return i(n()+t+"/"+e+"?"+o(r))}function c(t,e){return a("internal_errors","page",{name:t.name,line:t.lineNumber||t.line,script:t.fileName||t.sourceURL||t.script,stack:t.stackTrace||t.stack||t.description,message:t.message,url:window.location,context:void 0!==e?e:null})}Object.defineProperty(e,"__esModule",{value:!0}),e.base=n,e.queryString=o,e.img=i,e.load=a,e.internalError=c},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i={viewedProduct:/^[ _]?viewed[ _]?product[ _]?$/i,viewedProductCategory:/^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,viewedProductVariant:/^[ _]?viewed[ _]?product[ _]?variant[ _]?$/i,addedProduct:/^[ _]?added[ _]?product[ _]?$/i,completedOrder:/^[ _]?completed[ _]?order[ _]?$/i,startedOrder:/^[ _]?started[ _]?order[ _]?$/i,performedSearch:/^[ _]?performed[ _]?search[ _]?$/i,addedPayment:/^[ _]?added[ _]?payment[ _]?$/i},a=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.wrapTrack(),n}return n(e,t),e.prototype.wrapTrack=function(){var t=this.track;this.track=function(e){var r=e.event,n=!1;for(var o in i){var a=i[o];if(this[o]&&a.test(r)){this[o].apply(this,[e]),n=!0;break}}n||t.apply(this,Array.prototype.slice.call(arguments))}},e}(o.Integration);e.EcommerceIntegration=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(14);e.exportVar="trekkie",e.trekkieClass=n.Trekkie,e.enabledIntegrations=[];var o=r(11);e.enabledIntegrations.push(["Performance",o.Performance]);var i=r(9);e.enabledIntegrations.push(["Facebook Pixel",i.FacebookPixel]);var a=r(10);e.enabledIntegrations.push(["Google Analytics",a.GoogleAnalytics]);var c=r(8);e.enabledIntegrations.push(["Clickstream",c.Clickstream]);var s=r(12);e.enabledIntegrations.push(["Pinterest Pixel",s.Pinterest]);var u=r(13);e.enabledIntegrations.push(["Session Attribution",u.SessionAttribution])},function(t,e,r){"use strict";function n(t){return e.cookie.read(t)}function o(t,e,r){void 0===r&&(r={}),a(t,e,r.permanent,i(window.location.hostname)),a(t,e,r.permanent,d),a(t,e,r.permanent,r.domain),a(t,e,r.permanent,"")}function i(t){var e=t.indexOf(u);return 0===e?"."+t:e>0?t.slice(e-1):p}function a(t,r,n,o){var i={maxage:n?s:c,domain:o,path:"/"};e.cookie.write(t,r,i)}Object.defineProperty(e,"__esModule",{value:!0});var c=18e5,s=62208e6,u="shopify",p=".shopify.com",d=".myshopify.com";e.cookie={parse:function(t){for(var e={},r=0,n=t.split(/ *; */);r<n.length;r++){var o=n[r],i=o.split("=");try{e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}catch(t){}}return e},read:function(t){if(e.cookie.enabled())return e.cookie.parse(document.cookie)[t]},write:function(t,r,n){if(void 0===n&&(n={}),e.cookie.enabled()){var o=encodeURIComponent(t)+"="+encodeURIComponent(r);return n.maxage&&(n.expires=new Date(Date.now()+n.maxage)),n.path&&(o+="; path="+n.path),n.domain&&(o+="; domain="+n.domain),n.expires&&(o+="; expires="+n.expires.toUTCString()),n.secure&&(o+="; secure"),document.cookie=o,o}},clear:function(t,r){return void 0===r&&(r={}),r.maxage=-1,e.cookie.write(t,"",r)},enabled:function(){try{return void 0!==document.cookie&&window.navigator.cookieEnabled}catch(t){return!1}}},e.read=n,e.write=o,e.shopifyCookieDomain=i},function(t,e,r){"use strict";function n(){return!!p.read(e.shortTermKey)||!!p.read(e.deprecatedShortTermKey)}function o(){return!!p.read(e.longTermKey)||!!p.read(e.deprecatedLongTermKey)}function i(){return l.fetchOrSet(!1,e.deprecatedShortTermKey,e.shortTermKey)}function a(){return l.fetchOrSet(!0,e.deprecatedLongTermKey,e.longTermKey)}function c(){return l.build()}function s(){return m.fetchOrSet(e.firstSeenKey)}function u(){return l.hexTime()}Object.defineProperty(e,"__esModule",{value:!0});var p=r(4);e.deprecatedShortTermKey="_s",e.shortTermKey="_shopify_s",e.deprecatedLongTermKey="_y",e.longTermKey="_shopify_y",e.firstSeenKey="_shopify_fs";var d="00000000",f="xxxx-4xxx-xxxx-xxxxxxxxxxxx",l={fetch:function(t){return p.read(t)},fetchOrSet:function(t,e,r){if(!p.cookie.enabled())return"00000000-0000-0000-4000-000000000000";var n=l.fetch(r)||l.fetch(e)||l.build(),o={permanent:t};return p.write(e,n,o),p.write(r,n,o),n},build:function(){var t="";try{var e=window.crypto||window.msCrypto,r=new Uint16Array(31);e.getRandomValues(r);var n=0;t=f.replace(/[x]/g,function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var i=r[n]%16,a="x"===t?i:3&i|8;return n++,a.toString(16)}).toUpperCase()}catch(e){t=f.replace(/[x]/g,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=16*Math.random()|0;return("x"===t?n:3&n|8).toString(16)}).toUpperCase()}return l.hexTime()+"-"+t},hexTime:function(){var t=0,e=0;try{t=Date.now()>>>0}catch(e){t=(new Date).getTime()>>>0}try{e=performance.now()>>>0}catch(t){e=0}var r=Math.abs(t+e).toString(16).toLowerCase();return d.substr(0,8-r.length)+r}},m={fetch:function(t){return p.read(t)},fetchOrSet:function(t){var r=m.fetch(t)||(new Date).toJSON(),n={permanent:!0};return p.write(e.firstSeenKey,r,n),r}};e.hasShortTerm=n,e.hasLongTerm=o,e.shortTerm=i,e.longTerm=a,e.buildToken=c,e.firstSeen=s,e.hexTime=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(3),i=r(1),a=function(){function t(t,e){this.integrations=[];var r=1+o.enabledIntegrations.length,n=this.waitFor(r,function(){try{e()}catch(t){i.internalError(t)}});this.trekkie=new o.trekkieClass(t.Trekkie,n),this.integrations.push(this.trekkie);for(var a=0,c=o.enabledIntegrations;a<c.length;a++){var s=c[a],u=t[s[0]],p=s[1];if(u&&"object"==typeof u)try{this.integrations.push(new p(u,this.trekkie,n))}catch(t){n(),i.internalError(t)}else n()}}return t.prototype.identify=function(t,e){void 0===t&&(t=""),void 0===e&&(e={});try{t instanceof Object&&(e=t,t="");for(var r=0,n=this.integrations;r<n.length;r++){n[r].identify({id:t,properties:e})}}catch(t){i.internalError(t)}},t.prototype.page=function(t,e){void 0===t&&(t=""),void 0===e&&(e={});try{t instanceof Object&&(e=t,t="");var r=this.pageDefaults();r.name=t,r.properties=n.Integration.merge(r.properties,e);for(var o=0,a=this.integrations;o<a.length;o++){a[o].page(r)}}catch(t){i.internalError(t)}},t.prototype.track=function(t,e){void 0===t&&(t=""),void 0===e&&(e={});try{t instanceof Object&&(e=t,t="");for(var r=0,n=this.integrations;r<n.length;r++){n[r].track({event:t,properties:e})}}catch(t){i.internalError(t)}},t.prototype.trackForm=function(t,e,r){var n=this;void 0===e&&(e=""),void 0===r&&(r={});try{t.addEventListener("submit",function(o){o.preventDefault(),n.track(e,r),setTimeout(function(){try{t.submit()}catch(t){i.internalError(t)}},0)})}catch(t){i.internalError(t)}},t.prototype.trackLink=function(t,e,r){var n=this;void 0===e&&(e=""),void 0===r&&(r={});try{t.addEventListener("click",function(o){var i=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href");n.track(e,r),i&&"_blank"!==t.target&&!n.isMeta(o)&&(o.preventDefault(),setTimeout(function(){n.setLocation(i)},0))})}catch(t){i.internalError(t)}},t.prototype.isMeta=function(t){if(t instanceof KeyboardEvent&&(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey))return!0;if(t instanceof MouseEvent){var e=t.which,r=t.button;if(!e&&void 0!==r)return 1===r||2===r;if(2===e)return!0}return!1},t.prototype.setLocation=function(t){window.location.href=t},t.prototype.ready=function(t){setTimeout(t,0)},t.prototype.waitFor=function(t,e){return function(){--t>0||0===t&&setTimeout(e,0)}},t.prototype.pageDefaults=function(){var t=window.location.href,e=t.indexOf("?");return t=-1===e?"":t.slice(e),e=t.indexOf("#"),t=-1===e?t:t.slice(0,e),t="?"===t?"":t,{path:window.location.pathname,referrer:document.referrer,search:t,title:document.title,url:this.url(),properties:{}}},t.prototype.canonical=function(){for(var t=document.getElementsByTagName("link"),e=0;e<t.length;e++){var r=t[e];if("canonical"===r.getAttribute("rel"))return r.getAttribute("href")}return""},t.prototype.url=function(){var t=this.canonical();if(t)return t.indexOf("?")>0?t:t+window.location.search;var e=window.location.href,r=e.indexOf("#");return-1===r?e:e.slice(0,r)},t}();e.Tricorder=a},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=r(3),i=r(1);try{var a=window[o.exportVar].config;if(a)var c=window[o.exportVar],s=window.trekkie=new n.Tricorder(a,function(){window[o.exportVar]=s,window._visit={tag:function(){},multitrackToken:function(){return s.trekkie.defaultAttributes.uniqToken}},s.user=function(){return{traits:function(){return{uniqToken:s.trekkie.defaultAttributes.uniqToken}}}};for(var t=0,e=c;t<e.length;t++){var r=e[t],n=r[0];s[n]&&s[n].apply(s,r.slice(1))}})}catch(t){i.internalError(t)}},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(16),a=r(17),c=r(1),s=function(t){function e(e,r,n){var o=t.call(this,{},e)||this;o.requestType="clickstream",o.config={storageKey:"_trekkie_cs",eventName:"click",customEventName:"trekkie-clickstream",validTargets:["a","button","input","select"],validInputSubTypes:["submit","file","radio","checkbox","text"],appName:null,flushInterval:5},o.trekkie=r,o.config.appName=r.options.appName;var i=e.flushInterval;return void 0!==i&&"number"==typeof i&&(o.config.flushInterval=i),"iframe"===r.options.embedMode?o.clickQueue=o.createPostingQueue():o.clickQueue=o.createPersistedQueue(),o.flushClickEvents(),o.setClickListener(),o.setFlushInterval(),n(),o}return n(e,t),e.prototype.identify=function(t){},e.prototype.page=function(t){this.flushClickEvents()},e.prototype.track=function(t){var e=this;t.event===this.config.eventName&&setTimeout(function(){e.trekkie.emit(e.requestType,t)},0)},e.prototype.createPostingQueue=function(){return new a.PostingQueue(this.trekkie,this.requestType,this.config.eventName)},e.prototype.createPersistedQueue=function(){return new i.PersistedQueue(this.config.storageKey)},e.prototype.setFlushInterval=function(){var t=this;this.config.flushInterval>0&&setInterval(function(){t.flushClickEvents()},1e3*this.config.flushInterval)},e.prototype.flushClickEvents=function(){for(var t=0,e=this.clickQueue.all();t<e.length;t++){var r=e[t];this.track({event:this.config.eventName,properties:r})}this.clickQueue.clear()},e.prototype.setClickListener=function(){var t=this;document.documentElement.addEventListener("click",function(e){t.trackClick(e)},!0)},e.prototype.trackClick=function(t){try{if(this.shouldTrack(t)){var e=t.target,r={app_name:this.config.appName,url:window.location.href,target_text:this.getTextLabelFromHTMLElement(e),target_tagname:e.tagName,target_classname:this.getClassName(e),target_id:e.id,target_trekkie_context:this.getAdditionalContext(e),target_url:e.getAttribute("href"),target_form_input_type:this.isHTMLFormInputSubType(e)?e.type:null,target_form_action:this.isHTMLFormInputSubType(e)?this.getHTMLFormAction(e):null,target_form_relative_position:this.isHTMLFormInputSubType(e)?this.getFormRelativePosition(e):null};this.clickQueue.push(r);try{var n=this.trekkie.options,o={detail:r};"iframe"===n.embedMode&&n.embedParentOrigin?this.trekkie.getEmbedParent().postMessage(JSON.stringify({event:"trekkie:customEvent:v1",payload:{eventType:this.config.customEventName,data:o}}),n.embedParentOrigin):document.dispatchEvent(new CustomEvent(this.config.customEventName,o))}catch(t){}}}catch(t){c.internalError(t)}},e.prototype.getClassName=function(t){return"object"==typeof t.className?t.parentElement.getAttribute("class"):t.className},e.prototype.shouldTrack=function(t){var e=t.target.tagName;if(e)switch(e=e.toLowerCase(),this.config.validTargets[this.config.validTargets.indexOf(e)]){case void 0:return this.isAnyAncestorValidClickTarget(t.target);case"input":return this.config.validInputSubTypes.indexOf(t.target.type.toLowerCase())>=0;default:return!0}},e.prototype.isAnyAncestorValidClickTarget=function(t){for(;t.parentNode;)if(t=t.parentNode,t.tagName&&-1!==this.config.validTargets.indexOf(t.tagName.toLowerCase()))return!0;return!1},e.prototype.getTextLabelFromHTMLElement=function(t){switch(t.tagName.toLowerCase()){case"input":return"text"===t.type?t.name:t.value;case"select":var e=t.options.selectedIndex;return e>-1?t.options[e].text:"No value chosen";default:return this.getTargetText(t)||this.getTextLabelFromParentHTMLElement(t)}},e.prototype.getTextLabelFromParentHTMLElement=function(t){for(;t.parentNode;)if(t=t.parentNode,t.tagName&&-1!==this.config.validTargets.indexOf(t.tagName.toLowerCase()))return this.getTargetText(t)},e.prototype.getTargetText=function(t){var e=t.innerText||t.textContent;if(e)return this.dedupTargetText(e.replace(/\s+/g," ").trim())},e.prototype.dedupTargetText=function(t){if(-1===t.indexOf(" "))return t;var e={};return t.split(" ").filter(function(t){return!e.hasOwnProperty(t)&&(e[t]=!0)}).join(" ")},e.prototype.getAdditionalContext=function(t){for(var e={};t.parentNode;){for(var r=0,n=Array.prototype.slice.call(t.attributes);r<n.length;r++){var o=n[r];o&&o.value&&o.name.match(/^data-trekkie-.*/)&&(e[o.name]=o.value)}t=t.parentNode}return Object.getOwnPropertyNames(e).length>0?JSON.stringify(e):null},e.prototype.getHTMLFormAction=function(t){for(;t.parentNode;)if((t=t.parentNode)&&t.tagName&&"form"===t.tagName.toLowerCase()){var e=t.attributes.getNamedItem("action");if(e&&e.value)return e.value}return""},e.prototype.isHTMLFormInputSubType=function(t){return-1!==["input","select"].indexOf(t.tagName.toLowerCase())},e.prototype.getFormRelativePosition=function(t){switch(t.tagName.toLowerCase()){case"select":return t.options.selectedIndex;default:return null}},e}(o.Integration);e.Clickstream=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(2),i=function(t){function e(r,n,o){var i=t.call(this,e.defaultOptions,r)||this;return i.initialize(o),i}return n(e,t),e.prototype.identify=function(t){throw new Error("identify is not supported")},e.prototype.page=function(t){window.fbq("track","PageView")},e.prototype.track=function(t){var e={};for(var r in t.properties)"revenue"===r?e.value=this.formatRevenue(t.properties.revenue):e[r]=t.properties[r]},e.prototype.viewedProductCategory=function(t){},e.prototype.viewedProductVariant=function(t){},e.prototype.viewedProduct=function(t){var e=t.properties;window.fbq("track","ViewContent",{content_ids:this.getProductContentIds(e),content_type:this.getProductContentType(e),content_name:e.name||"",content_category:e.category||"",currency:this.getCurrency(e.currency),value:this.formatRevenue(e.price)})},e.prototype.addedProduct=function(t){var e=t.properties;window.fbq("track","AddToCart",{content_ids:this.getProductContentIds(e),content_type:this.getProductContentType(e),content_name:e.name||"",content_category:e.category||"",currency:this.getCurrency(e.currency),value:this.formatRevenue(e.price),num_items:this.getProductNumItems(e)})},e.prototype.addedPayment=function(t){var e=t.properties;window.fbq("track","AddPaymentInfo",{currency:this.getCurrency(e.currency)})},e.prototype.performedSearch=function(t){var e=t.properties;window.fbq("track","Search",{search_string:e.query||""})},e.prototype.startedOrder=function(t){var e=t.properties;window.fbq("track","InitiateCheckout",{content_ids:this.getOrderContentIds(e),content_type:this.getOrderContentType(e),currency:this.getCurrency(e.currency),value:this.formatRevenue(e.revenue),num_items:this.getOrderNumItems(e)})},e.prototype.completedOrder=function(t){var e=t.properties;window.fbq("track","Purchase",{content_ids:this.getOrderContentIds(e),content_type:this.getOrderContentType(e),currency:this.getCurrency(e.currency),value:this.formatRevenue(e.revenue),num_items:this.getOrderNumItems(e)})},e.prototype.initialize=function(t){this.loadFacebookScript();for(var e=this.options,r=e.pixelIds.concat([e.pixelId]),n=0,o=r;n<o.length;n++){var i=o[n];null!==i&&""!==i&&(window.fbq("init",i),""!==e.agent&&window.fbq("set","agent",e.agent,i))}t()},e.prototype.loadFacebookScript=function(){if(!window.fbq){window.fbq=function(){window.fbq.callMethod?window.fbq.callMethod.apply(window.fbq,arguments):window.fbq.queue.push(arguments)},window._fbq||(window._fbq=window.fbq),window.fbq.push=window.fbq,window.fbq.loaded=!0,window.fbq.version="2.0",window.fbq.queue=[];var t=document.createElement("script");t.async=!0,t.src="https://connect.facebook.net/en_US/fbevents.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}},e.prototype.formatRevenue=function(t){return Number(t||0).toFixed(2)},e.prototype.getCurrency=function(t){return t||"USD"},e.prototype.getProductContentIds=function(t){var e=t.productId||t.variantId||t.sku;return e?[e]:[]},e.prototype.getProductContentType=function(t){return t.productId?"product_group":"product"},e.prototype.getProductNumItems=function(t){return t.quantity||this.getProductContentIds(t).length},e.prototype.getProductKey=function(t){return t.productId||t.variantId||t.sku},e.prototype.getOrderContentIds=function(t){for(var e=[],r=t.products||[],n=0,o=r;n<o.length;n++){var i=o[n],a=this.getProductKey(i);if(a){-1===e.indexOf(a)&&e.push(a)}}return e},e.prototype.getOrderContentType=function(t){for(var e=t.products||[],r=0,n=e;r<n.length;r++){if(n[r].productId)return"product_group"}return"product"},e.prototype.getOrderNumItems=function(t){for(var e=0,r=t.products||[],n=0,o=r;n<o.length;n++){var i=o[n];this.getProductKey(i)&&(e+=i.quantity||1)}return e},e.defaultOptions={pixelId:"",pixelIds:[],agent:""},e}(o.EcommerceIntegration);e.FacebookPixel=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(2),a=function(t){function e(r,n,o){var i=t.call(this,e.defaultOptions,r)||this;return i.pageCalled=!1,i.ecommerce=!1,i.enhancedEcommerceLoaded=!1,i.initialize(o),i}return n(e,t),e.prototype.identify=function(t){throw new Error("identify is not supported")},e.prototype.page=function(t){this.overrideDefaultPageProperties(t);var e=this.options,r=this.path(t),n=t.name||t.title,o={page:r,title:n};window.ga("set",o);var i={page:r,title:n,location:t.url};if(this.pageCalled&&delete i.location,window.ga("send","pageview",i),t.name&&e.trackNamedPages){var a=this.convertPageToTrack(t);a.properties.nonInteraction=!0,this.trackInternal(a)}this.pageCalled=!0},e.prototype.track=function(t){},e.prototype.trackInternal=function(t){var e=this.options,r=t.properties,n={eventAction:t.event,eventCategory:r.category||"All",eventLabel:r.label,eventValue:this.formatValue(r.value||r.revenue),nonInteraction:!!(r.hasOwnProperty("nonInteraction")?r.nonInteraction:e.nonInteraction)};window.ga("send","event",n)},e.prototype.completedOrder=function(t){var e=t.properties,r=e.total||e.revenue||0,n=e.orderId,o=e.products||[];if(n){this.ecommerce||(window.ga("require","ecommerce"),this.ecommerce=!0),window.ga("ecommerce:addTransaction",{affiliation:e.affiliation,shipping:e.shipping,revenue:r,tax:e.tax,id:n,currency:this.getCurrency(e.currency)});for(var i=0,a=o;i<a.length;i++){var c=a[i],s=this.createProductTrack(e,c);window.ga("ecommerce:addItem",{category:s.category,quantity:this.getProductQuantity(s),price:s.price,name:s.name,sku:s.sku||s.variantId,id:n,currency:this.getCurrency(s.currency)})}window.ga("ecommerce:send")}},e.prototype.viewedProductVariant=function(t){},e.prototype.viewedProductEnhanced=function(t){var e=t.properties;this.loadEnhancedEcommerce(t),this.enhancedEcommerceProductAction(e,"detail"),this.pushEnhancedEcommerce(t)},e.prototype.addedProductEnhanced=function(t){var e=t.properties;this.loadEnhancedEcommerce(t),this.enhancedEcommerceProductAction(e,"add"),this.pushEnhancedEcommerce(t)},e.prototype.startedOrderEnhanced=function(t){var e=t.properties,r=e.products||[];this.loadEnhancedEcommerce(t);for(var n=0,o=r;n<o.length;n++){var i=o[n],a=this.createProductTrack(e,i);this.enhancedEcommerceTrackProduct(a)}window.ga("ec:setAction","checkout",{step:e.step||1}),this.pushEnhancedEcommerce(t)},e.prototype.completedOrderEnhanced=function(t){var e=t.properties,r=e.total||e.revenue||0,n=e.orderId,o=e.products||[];if(n){this.loadEnhancedEcommerce(t);for(var i=0,a=o;i<a.length;i++){var c=a[i],s=this.createProductTrack(e,c);this.enhancedEcommerceTrackProduct(s)}window.ga("ec:setAction","purchase",{id:n,affiliation:e.affiliation,revenue:r,tax:e.tax,shipping:e.shipping,coupon:e.coupon}),this.pushEnhancedEcommerce(t)}},e.prototype.hostname=function(){return window.location.hostname},e.prototype.initialize=function(t){this.pageCalled=!1,this.loadGAScript();var r=this.options;"localhost"===this.hostname()&&(r.domain="none"),r.enhancedEcommerce&&this.enhancedEcommerce(),window.ga("create",r.trackingId,{cookieDomain:r.domain||e.defaultOptions.domain,siteSpeedSampleRate:r.siteSpeedSampleRate,sampleRate:r.sampleRate,allowLinker:!0}),r.doubleClick&&window.ga("require","displayfeatures"),r.enhancedLinkAttribution&&window.ga("require","linkid"),r.anonymizeIp&&window.ga("set","anonymizeIp",!0),t()},e.prototype.loadGAScript=function(){window.GoogleAnalyticsObject="ga",window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=(new Date).getTime();var t=document.createElement("script");t.async=!0,t.src="https://www.google-analytics.com/analytics.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},e.prototype.enhancedEcommerce=function(){this.viewedProduct=this.viewedProductEnhanced,this.addedProduct=this.addedProductEnhanced,this.startedOrder=this.startedOrderEnhanced,this.completedOrder=this.completedOrderEnhanced},e.prototype.path=function(t){var e=t.path;return this.options.includeSearch&&t.search&&(e+=t.search),e},e.prototype.formatValue=function(t){return!t||t<0?0:Math.round(t)},e.prototype.getProductQuantity=function(t){return t.quantity||1},e.prototype.getCurrency=function(t){return t||"USD"},e.prototype.createProductTrack=function(t,e){var r=o.Integration.merge(e,{});return r.currency=e.currency||this.getCurrency(t.currency),r},e.prototype.loadEnhancedEcommerce=function(t){this.enhancedEcommerceLoaded||(window.ga("require","ec"),this.enhancedEcommerceLoaded=!0);var e=t.properties;window.ga("set","&cu",this.getCurrency(e.currency))},e.prototype.enhancedEcommerceTrackProduct=function(t){var e={id:t.sku||t.variantId,name:t.name,category:t.category,quantity:this.getProductQuantity(t),price:t.price,brand:t.brand,variant:t.variant,currency:this.getCurrency(t.currency)};t.coupon&&(e.coupon=t.coupon),window.ga("ec:addProduct",e)},e.prototype.pushEnhancedEcommerce=function(t){var e=t.properties;window.ga("send","event",{eventCategory:e.category||"EnhancedEcommerce",eventAction:t.event||"Action not defined",eventLabel:e.label,nonInteraction:!0})},e.prototype.enhancedEcommerceProductAction=function(t,e){this.enhancedEcommerceTrackProduct(t),window.ga("ec:setAction",e)},e.prototype.convertPageToTrack=function(t){return{event:t.name?"Viewed "+t.name+" Page":"Loaded a Page",properties:t.properties}},e.prototype.overrideDefaultPageProperties=function(t){for(var e in t.properties)"properties"!==e&&"name"!==e&&e in t&&(t[e]=t.properties[e])},e.defaultOptions={anonymizeIp:!1,domain:"auto",doubleClick:!1,enhancedEcommerce:!1,enhancedLinkAttribution:!1,includeSearch:!1,nonInteraction:!1,siteSpeedSampleRate:1,sampleRate:100,trackNamedPages:!0,trackingId:""},e}(i.EcommerceIntegration);e.GoogleAnalytics=a},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=function(t){function e(r,n,o){var i=t.call(this,e.defaultOptions,r)||this;return i.trekkie=n,o(),i}return n(e,t),e.prototype.identify=function(t){},e.prototype.page=function(t){var e={event:"navigation_performance_metrics",properties:o.Integration.flatten(t)},r=this.options;r.navigationTimingApiMeasurementsEnabled&&r.navigationTimingApiMeasurementsSampleRate>=Math.random()&&(e.properties=o.Integration.merge(this.pagePerformance(),e.properties),this.trekkie.track(e))},e.prototype.track=function(t){},e.prototype.pagePerformance=function(){return(new a).collect()},e.defaultOptions={navigationTimingApiMeasurementsEnabled:!0,navigationTimingApiMeasurementsSampleRate:.001},e}(o.Integration);e.Performance=i;var a=function(){function t(){}return t.prototype.timing=function(){return!(!window.performance||!window.performance.timing)&&window.performance.timing},t.prototype.userAgent=function(){return window.navigator.userAgent},t.prototype.collect=function(){var e=this,r={},n=function(){for(var e=0,n=t.perfAttrs;e<n.length;e++){var o=n[e];r["nt:"+o]=0}r["nt:valid"]=!1};if(this.timing()&&!function(){return new RegExp("MSIE 9.0|Firefox/7.0|Firefox/8.0").test(e.userAgent())}())try{for(var o=0,i=t.perfAttrs;o<i.length;o++){var a=i[o];r["nt:"+a]=this.timing()[a]}r["nt:valid"]=!0}catch(t){n()}else n();return r},t.perfAttrs=["connectEnd","connectStart","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","domLoading","domainLookupEnd","domainLookupStart","fetchStart","loadEventEnd","loadEventStart","navigationStart","redirectEnd","redirectStart","requestStart","responseEnd","responseStart","secureConnectionStart","unloadEventEnd","unloadEventStart"],t}();e.PagePerformance=a},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(2),i=r(1),a=function(t){function e(r,n,o){var i=t.call(this,e.defaultOptions,r)||this;return o(),i}return n(e,t),e.prototype.identify=function(t){},e.prototype.page=function(t){},e.prototype.track=function(t){},e.prototype.completedOrder=function(t){var e=this.options;i.img("https://ct.pinterest.com/v2.5/?tid="+e.pixelId+"&event=checkout&value=0.00&quantity=1")},e.defaultOptions={pixelId:""},e}(o.EcommerceIntegration);e.Pinterest=a},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(4),i=r(5),a=r(0);e.sessionAttributionEventKey="session-attribution",e.sessionAttributionParamsKey="_shopify_sa_p",e.sessionAttributionTimestampKey="_shopify_sa_t";var c=function(t){function r(e,r,n){var o=t.call(this,{},e)||this;return o.trekkie=r,o.timestampManager=new s,o.campaignManager=new u,setTimeout(function(){o.attributeSession()},0),n(),o}return n(r,t),r.prototype.identify=function(t){},r.prototype.page=function(t){},r.prototype.track=function(t){var r=this;t.event===e.sessionAttributionEventKey&&setTimeout(function(){r.trekkie.emit(e.sessionAttributionEventKey,t)},0)},r.prototype.attributeSession=function(){var t=new Date,r=window.location.search,n=this.campaignManager.constructCanonicalUtmString(r);this.timestampManager.isValid(t)&&this.campaignManager.isValid(n)||this.track({event:e.sessionAttributionEventKey,properties:{sa_url:window.location.href,sa_referrer:window.document.referrer,sa_utm_string:n,sa_token:i.buildToken()}}),this.timestampManager.extend(t.toJSON()),this.campaignManager.extend(n)},r}(a.Integration);e.SessionAttribution=c;var s=function(){function t(){}return t.prototype.fetch=function(){return o.read(e.sessionAttributionTimestampKey)},t.prototype.extend=function(t){o.write(e.sessionAttributionTimestampKey,t,{permanent:!1})},t.prototype.isValid=function(t){var e=this.fetch();if(!e)return!1;try{var r=new Date(e);if(r.getUTCDate()<t.getUTCDate())return!1;if(t.getTime()-r.getTime()>18e5)return!1}catch(t){return!1}return!0},t}();e.TimestampManager=s;var u=function(){function t(){}return t.prototype.fetch=function(){return o.read(e.sessionAttributionParamsKey)},t.prototype.extend=function(t){o.write(e.sessionAttributionParamsKey,t,{permanent:!1})},t.prototype.isValid=function(t){return""===t||this.fetch()===t},t.prototype.constructCanonicalUtmString=function(t){if(""===t||void 0===t||null===t)return"";t="?"===t[0]?t.slice(1):t;for(var e={},r=0,n=t.split("&");r<n.length;r++){var o=n[r],i=o.split("="),a=decodeURIComponent(i[0]),c=decodeURIComponent(i[1]);c&&a&&null!==a.match(/^utm_/)&&(e[a]=c)}var s="";return e.utm_source&&(s=this.appendToUtmString(s,"utm_source",e.utm_source)),e.utm_medium&&(s=this.appendToUtmString(s,"utm_medium",e.utm_medium)),e.utm_campaign&&(s=this.appendToUtmString(s,"utm_campaign",e.utm_campaign)),e.utm_term&&(s=this.appendToUtmString(s,"utm_term",e.utm_term)),e.utm_content&&(s=this.appendToUtmString(s,"utm_content",e.utm_content)),s},t.prototype.appendToUtmString=function(t,e,r){return(t=0===t.length?t:t+"&")+encodeURIComponent(e)+"="+encodeURIComponent(r)},t}();e.CampaignManager=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(1),a=r(5),c=function(t){function e(e,r){var n=t.call(this,{},e)||this,i="",c="",s="";return"iframe"!==e.embedMode&&(i=a.longTerm(),c=a.shortTerm(),s=a.firstSeen()),n.defaultAttributes={appName:e.appName,uniqToken:i,visitToken:c,microSessionId:a.buildToken(),microSessionCount:0,firstSeen:s},e.defaultAttributes&&(n.defaultAttributes=o.Integration.merge(e.defaultAttributes,n.defaultAttributes)),"parent"===e.embedMode&&n.installFrameListener(),r(),n}return n(e,t),e.prototype.identify=function(t){this.emit("identify",t)},e.prototype.page=function(t){e.isEqualPage(this.lastPage,t)||(this.lastPage=t,this.emit("page",t))},e.prototype.track=function(t){this.emit("track",t)},e.prototype.emit=function(t,e,r){void 0===r&&(r={});var n=this.options;r.microSessionCount||++this.defaultAttributes.microSessionCount,e=o.Integration.flatten(e);var a=o.Integration.merge(e,this.defaultAttributes);a.eventType=t,a=o.Integration.merge(a,r);var c=n.development?"testing":a.appName;if("iframe"===n.embedMode&&n.embedParentOrigin)try{this.getEmbedParent().postMessage(JSON.stringify({event:"trekkie:emit:v1",payload:{requestType:t,args:a,overrideAttributes:{microSessionId:a.microSessionId,microSessionCount:a.microSessionCount}}}),n.embedParentOrigin)}catch(t){i.internalError(t)}else i.load(c,t,a)},e.prototype.installFrameListener=function(){var t=this;window.addEventListener("message",function(e){t.handleEmbedEvent(e)})},e.prototype.handleEmbedEvent=function(t){try{if(t&&t.origin.match(/(shopify.com|shopifyapps.com|myshopify.io)$/)&&t.data){var e=JSON.parse(t.data);if(e.event&&e.event.match(/^trekkie:/))switch(e.event){case"trekkie:emit:v1":var r=e.payload;r&&r.requestType&&r.args&&this.emit(r.requestType,r.args,r.overrideAttributes);break;case"trekkie:customEvent:v1":var r=e.payload;r&&r.eventType&&document.dispatchEvent(new CustomEvent(r.eventType,r.data));break;case"trekkie:xtldToken:v1":case"trekkie:xtldLastShop:v1":break;default:!function(t,e){i.internalError(new Error,JSON.stringify(e))}(e.event,e)}}}catch(e){"SyntaxError"!==e.name&&i.internalError(e,JSON.stringify(t))}},e.prototype.getEmbedParent=function(){return window.top||window.parent},e.isEqualPage=function(t,e){return t&&e&&t.path===e.path&&t.referrer===e.referrer&&t.search===e.search&&t.title===e.title&&t.url===e.url&&t.name===e.name&&o.Integration.isEqual(t.properties,e.properties)},e}(o.Integration);e.Trekkie=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.storageName=t,this.storage=localStorage,this.storageEnabled=this.checkLocalStorageAvailability()}return t.prototype.get=function(){return this.storageEnabled?this.storage.getItem(this.storageName):null},t.prototype.set=function(t){this.storageEnabled&&this.storage.setItem(this.storageName,t)},t.prototype.checkLocalStorageAvailability=function(){try{return this.storage.setItem("test","ok"),this.storage.removeItem("test"),!0}catch(t){return(22===t.code||1014===t.code)&&(this.storage.clear(),!0)}},t}();e.LocalStorage=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(15),o=function(){function t(t){this.queue=[],this.storage=new n.LocalStorage(t);var e=this.storage.get();null!==e&&(this.queue=JSON.parse(e))}return t.prototype.push=function(t){this.queue.push(t),this.persist()},t.prototype.all=function(){return this.queue},t.prototype.clear=function(){this.queue=[],this.persist()},t.prototype.persist=function(){this.storage.set(JSON.stringify(this.queue))},t}();e.PersistedQueue=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,r){this.trekkie=t,this.requestType=e,this.eventName=r}return t.prototype.push=function(t){this.trekkie.emit(this.requestType,{event:this.eventName,properties:t})},t.prototype.all=function(){return[]},t.prototype.clear=function(){},t}();e.PostingQueue=n}]);