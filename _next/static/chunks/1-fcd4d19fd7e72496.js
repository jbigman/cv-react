(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{9720:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s},isThenable:function(){return f}});var r,n,o="refresh",i="navigate",a="restore",l="server-patch",u="prefetch",c="fast-refresh",s="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2253),o=r(4932),i=r(7702),a=r(1309),l=r(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return O}});var u=r(8754),c=r(1757)._(r(7294)),s=u._(r(3935)),f=u._(r(4764)),d=r(8484),p=r(2666),v=r(4845);r(9982);var h=r(4167),g=u._(r(4148)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/cv-react/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(e,t,r,i,a,l){var u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){var l=new Event("load");Object.defineProperty(l,"target",{writable:!1,value:e});var u=!1,c=!1;r.current(o._(n._({},l),{nativeEvent:l,currentTarget:e,target:e,isDefaultPrevented:function(){return u},isPropagationStopped:function(){return c},persist:function(){},preventDefault:function(){u=!0,l.preventDefault()},stopPropagation:function(){c=!0,l.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}}))}function b(e){var t=a._(c.version.split(".",2),2),r=t[0],n=t[1],o=parseInt(r,10),i=parseInt(n,10);return o>18||18===o&&i>=3?{fetchPriority:e}:{fetchpriority:e}}var _=(0,c.forwardRef)(function(e,t){var r=e.src,a=e.srcSet,l=e.sizes,u=e.height,s=e.width,f=e.decoding,d=e.className,p=e.style,v=e.fetchPriority,h=e.placeholder,g=e.loading,m=e.unoptimized,_=e.fill,w=e.onLoadRef,O=e.onLoadingCompleteRef,j=e.setBlurComplete,P=e.setShowAltText,C=(e.onLoad,e.onError),S=i._(e,["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return c.default.createElement("img",o._(n._({},S,b(v)),{loading:g,width:s,height:u,decoding:f,"data-nimg":_?"fill":"1",className:d,style:p,sizes:l,srcSet:a,src:r,ref:(0,c.useCallback)(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&y(e,h,w,O,j,m))},[r,h,w,O,j,C,m,t]),onLoad:function(e){y(e.currentTarget,h,w,O,j,m)},onError:function(e){P(!0),"empty"!==h&&j(!0),C&&C(e)}}))});function w(e){var t=e.isAppRouter,r=e.imgAttributes,o=n._({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},b(r.fetchPriority));return t&&s.default.preload?(s.default.preload(r.src,o),null):c.default.createElement(f.default,null,c.default.createElement("link",n._({key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src},o)))}var O=(0,c.forwardRef)(function(e,t){var r=(0,c.useContext)(h.RouterContext),i=(0,c.useContext)(v.ImageConfigContext),u=(0,c.useMemo)(function(){var e=m||i||p.imageConfigDefault,t=l._(e.deviceSizes).concat(l._(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return o._(n._({},e),{allSizes:t,deviceSizes:r})},[i]),s=e.onLoad,f=e.onLoadingComplete,y=(0,c.useRef)(s);(0,c.useEffect)(function(){y.current=s},[s]);var b=(0,c.useRef)(f);(0,c.useEffect)(function(){b.current=f},[f]);var O=a._((0,c.useState)(!1),2),j=O[0],P=O[1],C=a._((0,c.useState)(!1),2),S=C[0],E=C[1],z=(0,d.getImgProps)(e,{defaultLoader:g.default,imgConf:u,blurComplete:j,showAltText:S}),R=z.props,x=z.meta;return c.default.createElement(c.default.Fragment,null,c.default.createElement(_,o._(n._({},R),{unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:P,setShowAltText:E,ref:t})),x.priority?c.default.createElement(w,{isAppRouter:!r,imgAttributes:R}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2253),o=r(7702),i=r(1309);r(8421),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});var a=r(8754)._(r(7294)),l=r(4879),u=r(1572),c=r(8373),s=r(6221),f=r(5933),d=r(4167),p=r(8874),v=r(6342),h=r(245),g=r(6015),m=r(9720),y=new Set;function b(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(a))return;y.add(a)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function _(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}var w=a.default.forwardRef(function(e,t){var r,c,y=e.href,w=e.as,O=e.children,j=e.prefetch,P=void 0===j?null:j,C=e.passHref,S=e.replace,E=e.shallow,z=e.scroll,R=e.locale,x=e.onClick,M=e.onMouseEnter,k=e.onTouchStart,I=e.legacyBehavior,L=void 0!==I&&I,A=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=O,L&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));var N=a.default.useContext(d.RouterContext),T=a.default.useContext(p.AppRouterContext),D=null!=N?N:T,F=!N,U=!1!==P,B=null===P?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,H=a.default.useMemo(function(){if(!N){var e=_(y);return{href:e,as:w?_(w):e}}var t=i._((0,l.resolveHref)(N,y,!0),2),r=t[0],n=t[1];return{href:r,as:w?(0,l.resolveHref)(N,w):n||r}},[N,y,w]),W=H.href,q=H.as,G=a.default.useRef(W),K=a.default.useRef(q);L&&(c=a.default.Children.only(r));var V=L?c&&"object"==typeof c&&c.ref:t,Y=i._((0,v.useIntersection)({rootMargin:"200px"}),3),J=Y[0],$=Y[1],Q=Y[2],X=a.default.useCallback(function(e){(K.current!==q||G.current!==W)&&(Q(),K.current=q,G.current=W),J(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[q,V,W,Q,J]);a.default.useEffect(function(){D&&$&&U&&b(D,W,q,{locale:R},{kind:B},F)},[q,W,$,R,U,null==N?void 0:N.locale,D,F,B]);var Z={ref:X,onClick:function(e){L||"function"!=typeof x||x(e),L&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,r,n,o,i,l,c,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((f=e.currentTarget.getAttribute("target"))&&"_self"!==f||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!s&&!(0,u.isLocalURL)(r)))){e.preventDefault();var f,d=function(){var e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};s?a.default.startTransition(d):d()}}(e,D,W,q,S,E,z,R,F)},onMouseEnter:function(e){L||"function"!=typeof M||M(e),L&&c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),D&&(U||!F)&&b(D,W,q,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:B},F)},onTouchStart:function(e){L||"function"!=typeof k||k(e),L&&c.props&&"function"==typeof c.props.onTouchStart&&c.props.onTouchStart(e),D&&(U||!F)&&b(D,W,q,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:B},F)}};if((0,s.isAbsoluteUrl)(q))Z.href=q;else if(!L||C||"a"===c.type&&!("href"in c.props)){var ee=void 0!==R?R:null==N?void 0:N.locale,et=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(q,ee,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);Z.href=et||(0,g.addBasePath)((0,f.addLocale)(q,ee,null==N?void 0:N.defaultLocale))}return L?a.default.cloneElement(c,Z):a.default.createElement("a",n._({},A,Z),r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1309);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});var o=r(7294),i=r(6231),a="function"==typeof IntersectionObserver,l=new Map,u=[];function c(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!a,s=n._((0,o.useState)(!1),2),f=s[0],d=s[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!c&&!f){var e,n,o,s,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(s=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(s.delete(v),o.unobserve(v),0===s.size){o.disconnect(),l.delete(n);var e=u.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&u.splice(e,1)}}}}else if(!f){var h=(0,i.requestIdleCallback)(function(){return d(!0)});return function(){return(0,i.cancelIdleCallback)(h)}}},[c,r,t,f,p.current]),[v,f,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2253),o=r(4932),i=r(7702);r(1309);var a=r(4586);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return f}}),r(9982);var l=r(2528),u=r(2666);function c(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t){var r,f,d,p=e.src,v=e.sizes,h=e.unoptimized,g=void 0!==h&&h,m=e.priority,y=void 0!==m&&m,b=e.loading,_=e.className,w=e.quality,O=e.width,j=e.height,P=e.fill,C=void 0!==P&&P,S=e.style,E=(e.onLoad,e.onLoadingComplete,e.placeholder),z=void 0===E?"empty":E,R=e.blurDataURL,x=e.fetchPriority,M=e.layout,k=e.objectFit,I=e.objectPosition,L=(e.lazyBoundary,e.lazyRoot,i._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),A=t.imgConf,N=t.showAltText,T=t.blurComplete,D=t.defaultLoader,F=A||u.imageConfigDefault;if("allSizes"in F)q=F;else{var U=a._(F.deviceSizes).concat(a._(F.imageSizes)).sort(function(e,t){return e-t}),B=F.deviceSizes.sort(function(e,t){return e-t});q=o._(n._({},F),{allSizes:U,deviceSizes:B})}var H=L.loader||D;delete L.loader,delete L.srcSet;var W="__next_img_default"in H;if(W){if("custom"===q.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{var q,G=H;H=function(e){return e.config,G(i._(e,["config"]))}}if(M){"fill"===M&&(C=!0);var K={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];K&&(S=n._({},S,K));var V={responsive:"100vw",fill:"100vw"}[M];V&&!v&&(v=V)}var Y="",J=s(O),$=s(j);if("object"==typeof(r=p)&&(c(r)||void 0!==r.src)){var Q=c(p)?p.default:p;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(Q));if(!Q.height||!Q.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(Q));if(f=Q.blurWidth,d=Q.blurHeight,R=R||Q.blurDataURL,Y=Q.src,!C){if(J||$){if(J&&!$){var X=J/Q.width;$=Math.round(Q.height*X)}else if(!J&&$){var Z=$/Q.height;J=Math.round(Q.width*Z)}}else J=Q.width,$=Q.height}}var ee=!y&&("lazy"===b||void 0===b);(!(p="string"==typeof p?p:Y)||p.startsWith("data:")||p.startsWith("blob:"))&&(g=!0,ee=!1),q.unoptimized&&(g=!0),W&&p.endsWith(".svg")&&!q.dangerouslyAllowSVG&&(g=!0),y&&(x="high");var et=s(w),er=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:I}:{},N?{}:{color:"transparent"},S),en=T||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:J,heightInt:$,blurWidth:f,blurHeight:d,blurDataURL:R||"",objectFit:er.objectFit})+'")':'url("'+z+'")',eo=en?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:en}:{},ei=function(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.width,i=e.quality,l=e.sizes,u=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r){var n=e.deviceSizes,o=e.allSizes;if(r){for(var i=/(^|\s)(1?\d?\d)vw/g,l=[];u=i.exec(r);u)l.push(parseInt(u[2]));if(l.length){var u,c,s=.01*(c=Math).min.apply(c,a._(l));return{widths:o.filter(function(e){return e>=n[0]*s}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:a._(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,l),s=c.widths,f=c.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map(function(e,n){return u({config:t,src:r,quality:i,width:e})+" "+("w"===f?e:n+1)+f}).join(", "),src:u({config:t,src:r,quality:i,width:s[d]})}}({config:q,src:p,unoptimized:g,width:J,quality:et,sizes:v,loader:H});return{props:o._(n._({},L),{loading:ee?"lazy":b,fetchPriority:x,width:J,height:$,decoding:"async",className:_,style:n._({},er,eo),sizes:ei.sizes,srcSet:ei.srcSet,src:ei.src}),meta:{unoptimized:g,priority:y,placeholder:z,fill:C}}}},2528:function(e,t){"use strict";function r(e){var t=e.widthInt,r=e.heightInt,n=e.blurWidth,o=e.blurHeight,i=e.blurDataURL,a=e.objectFit,l=n?40*n:t,u=o?40*o:r,c=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1309);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return c},default:function(){return s}});var o=r(8754),i=r(8484),a=r(9982),l=r(1100),u=o._(r(4148)),c=function(e){(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");var t=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/cv-react/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}}).props,r=!0,o=!1,l=void 0;try{for(var c,s=Object.entries(t)[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var f=n._(c.value,2),d=f[0],p=f[1];void 0===p&&delete t[d]}}catch(e){o=!0,l=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw l}}return{props:t}},s=l.Image},4148:function(e,t){"use strict";function r(e){var t=e.config,r=e.src,n=e.width,o=e.quality;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;var n=r},9008:function(e,t,r){e.exports=r(4764)},5675:function(e,t,r){e.exports=r(256)},1664:function(e,t,r){e.exports=r(1032)},3692:function(e,t,r){"use strict";r.d(t,{ViN:function(){return f}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){var t=t=>{var r,{attr:o,size:i,title:u}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}function f(e){var t;return(t={tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 6 2 18 2 18 9"},child:[]},{tag:"path",attr:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"},child:[]},{tag:"rect",attr:{x:"6",y:"14",width:"12",height:"8"},child:[]}]},e=>n.createElement(s,l({attr:c({},t.attr)},e),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(t.child)))(e)}}}]);