(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[5],{38:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InlineIcon=t.Icon=void 0;var i,c=(i=a(0))&&i.__esModule?i:{default:i};function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=0,r=/(-?[0-9.]*[0-9]+[0-9.]*)/g,s=/^-?[0-9.]*[0-9]+[0-9.]*$/g,h=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],f={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,a,i;return t=e,i=[{key:"splitAttributes",value:function(e){var t={icon:Object.create(null),node:Object.create(null)};return Object.keys(e).forEach((function(a){t[-1===h.indexOf(a)?"node":"icon"][a]=e[a]})),t}},{key:"calculateDimension",value:function(e,t,a){if(1===t)return e;if(a=void 0===a?100:a,"number"===typeof e)return Math.ceil(e*t*a)/a;var i=e.split(r);if(null===i||!i.length)return null;for(var c,n=[],l=i.shift(),o=s.test(l);;){if(o?(c=parseFloat(l),isNaN(c)?n.push(l):n.push(Math.ceil(c*t*a)/a)):n.push(l),void 0===(l=i.shift()))return n.join("");o=!o}}},{key:"replaceIDs",value:function(e){var t,a,i=/\sid="(\S+)"/g,c=[];function n(e,t,a){for(var i=0;-1!==(i=a.indexOf(e,i));)a=a.slice(0,i)+t+a.slice(i+e.length),i+=t.length;return a}for(;t=i.exec(e);)c.push(t[1]);return c.length?(a="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",c.forEach((function(t){var i=a+o;o++,e=n('="'+t+'"','="'+i+'"',e),e=n('="#'+t+'"','="#'+i+'"',e),e=n("(#"+t+")","(#"+i+")",e)})),e):e}}],(a=[{key:"getAttributes",value:function(t){var a=this._item;"object"!==n(t)&&(t=Object.create(null));var i={horizontal:"center",vertical:"middle",slice:!1},c={rotate:a.rotate,hFlip:a.hFlip,vFlip:a.vFlip},l=Object.create(null),o=Object.create(null),r=!0===t.inline||"true"===t.inline||"1"===t.inline,s={left:a.left,top:r?a.inlineTop:a.top,width:a.width,height:r?a.inlineHeight:a.height};if(["hFlip","vFlip"].forEach((function(e){void 0===t[e]||!0!==t[e]&&"true"!==t[e]&&"1"!==t[e]||(c[e]=!c[e])})),void 0!==t.flip&&t.flip.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"horizontal":c.hFlip=!c.hFlip;break;case"vertical":c.vFlip=!c.vFlip}})),void 0!==t.rotate){var h=t.rotate;if("number"===typeof h)c.rotate+=h;else if("string"===typeof h){var f=h.replace(/^-?[0-9.]*/,"");if(""===f)h=parseInt(h),isNaN(h)||(c.rotate+=h);else if(f!==h){var u=!1;switch(f){case"%":u=25;break;case"deg":u=90}u&&(h=parseInt(h.slice(0,h.length-f.length)),isNaN(h)||(c.rotate+=Math.round(h/u)))}}}var d,p=[];switch(c.hFlip?c.vFlip?c.rotate+=2:(p.push("translate("+(s.width+s.left)+" "+(0-s.top)+")"),p.push("scale(-1 1)"),s.top=s.left=0):c.vFlip&&(p.push("translate("+(0-s.left)+" "+(s.height+s.top)+")"),p.push("scale(1 -1)"),s.top=s.left=0),c.rotate%4){case 1:d=s.height/2+s.top,p.unshift("rotate(90 "+d+" "+d+")"),0===s.left&&0===s.top||(d=s.left,s.left=s.top,s.top=d),s.width!==s.height&&(d=s.width,s.width=s.height,s.height=d);break;case 2:p.unshift("rotate(180 "+(s.width/2+s.left)+" "+(s.height/2+s.top)+")");break;case 3:d=s.width/2+s.left,p.unshift("rotate(-90 "+d+" "+d+")"),0===s.left&&0===s.top||(d=s.left,s.left=s.top,s.top=d),s.width!==s.height&&(d=s.width,s.width=s.height,s.height=d)}var m,v,g=t.width?t.width:null,b=t.height?t.height:null;null===g&&null===b&&(b="1em"),null!==g&&null!==b?(m=g,v=b):null!==g?(m=g,v=e.calculateDimension(m,s.height/s.width)):(v=b,m=e.calculateDimension(v,s.width/s.height)),!1!==m&&(o.width="auto"===m?s.width:m),!1!==v&&(o.height="auto"===v?s.height:v),r&&0!==a.verticalAlign&&(l["vertical-align"]=a.verticalAlign+"em"),void 0!==t.align&&t.align.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"left":case"right":case"center":i.horizontal=e;break;case"top":case"bottom":case"middle":i.vertical=e;break;case"crop":i.slice=!0;break;case"meet":i.slice=!1}})),o.preserveAspectRatio=function(e){var t;switch(e.horizontal){case"left":t="xMin";break;case"right":t="xMax";break;default:t="xMid"}switch(e.vertical){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet"}(i),o.viewBox=s.left+" "+s.top+" "+s.width+" "+s.height;var y=e.replaceIDs(a.body);return void 0!==t.color&&(y=y.replace(/currentColor/g,t.color)),p.length&&(y='<g transform="'+p.join(" ")+'">'+y+"</g>"),!0!==t.box&&"true"!==t.box&&"1"!==t.box||(y+='<rect x="'+s.left+'" y="'+s.top+'" width="'+s.width+'" height="'+s.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:o,body:y,style:l}}},{key:"getSVG",value:function(t,a){var i=e.splitAttributes(t),c=this.getAttributes(i.icon),n='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return a&&Object.keys(i.node).forEach((function(e){n+=" "+e+'="'+i.node[e]+'"'})),Object.keys(c.attributes).forEach((function(e){n+=" "+e+'="'+c.attributes[e]+'"'})),n+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(c.style).forEach((function(e){n+=" "+e+": "+c.style[e]+";"})),t&&void 0!==t.style&&(n+=t.style),n+='">',n+=c.body+"</svg>"}}])&&l(t.prototype,a),i&&l(t,i),e}();function d(e,t){if("object"!==n(e.icon))return null;var a=u.splitAttributes(e),i=a.icon,l=a.node;delete l.icon,void 0===i.inline&&(i.inline=t);var o=new u(function(e){var t,a=Object.create(null);for(t in f)a[t]=f[t];for(t in e)a[t]=e[t];return void 0===a.inlineTop&&(a.inlineTop=a.top),void 0===a.inlineHeight&&(a.inlineHeight=a.height),void 0===a.verticalAlign&&(a.verticalAlign=a.height%7===0&&a.height%8!==0?-.143:-.125),a}(e.icon)).getAttributes(i),r={transform:"rotate(360deg)"};if(void 0!==o.style["vertical-align"]&&(r.verticalAlign=o.style["vertical-align"]),void 0!==e.style)for(var s in e.style)r[s]=e.style[s];var h,d={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:r};for(h in l)d[h]=l[h];for(h in o.attributes)d[h]=o.attributes[h];return d.dangerouslySetInnerHTML={__html:o.body},c.default.createElement("svg",d,null)}var p=function(e){return d(e,!1)};t.Icon=p;t.InlineIcon=function(e){return d(e,!0)};var m=p;t.default=m},39:function(e,t){t.__esModule=!0,t.default={body:'<path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101c0 .795-.265 1.59-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571z" fill="#539E43"/>',width:256,height:289}},40:function(e,t){t.__esModule=!0,t.default={body:'<path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345c.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86z" fill="#00D8FF"/>',width:256,height:228}},41:function(e,t){t.__esModule=!0,t.default={body:'<defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="ssvg-id-pythona"><stop stop-color="#387EB8" offset="0%"/><stop stop-color="#366994" offset="100%"/></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="ssvg-id-pythonb"><stop stop-color="#FFE052" offset="0%"/><stop stop-color="#FFC331" offset="100%"/></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13z" fill="url(#ssvg-id-pythona)"/><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13z" fill="url(#ssvg-id-pythonb)"/>',width:256,height:255}},62:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a(3),n=a(5),l=a(4),o=a(0),r=a.n(o),s=a(38),h=a(39),f=a.n(h),u=a(40),d=a.n(u),p=a(41),m=a.n(p),v=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,i=this.props.resumeBasicInfo.description;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{style:{color:"black"}},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"row center mx-auto mb-5"},r.a.createElement("div",{className:"col-md-4 mb-5 center"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("span",{style:{cursor:"auto"}},r.a.createElement("img",{width:"300px",src:e,alt:"Avatar placeholder"}),r.a.createElement(s.Icon,{icon:f.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),r.a.createElement(s.Icon,{icon:"logos:nodejs-icon"}),r.a.createElement(s.Icon,{icon:d.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),r.a.createElement(s.Icon,{icon:m.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),r.a.createElement("div",{className:"col-md-8 center"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",r.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",r.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),r.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},r.a.createElement("br",null),r.a.createElement("span",{className:"wave"},a," :) "),r.a.createElement("br",null),r.a.createElement("br",null),i)))))))}}]),a}(o.Component);t.default=v}}]);
//# sourceMappingURL=5.695bef34.chunk.js.map