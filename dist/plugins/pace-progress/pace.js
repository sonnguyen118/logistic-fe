(function(){var t,e,n,r,s,o,i,u,a,c,l,p,h,f,d,g,y,m,v,w,b,L,k,S,q,x,P,T,R,j,E,O,M,A,_,F,C,U,W,X,D,H,I,z,G,N,B,J,K=[].slice,Q={}.hasOwnProperty,V=function(t,e){for(var n in e)Q.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},Y=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(P={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},X=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,x=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==X&&(X=function(t){return setTimeout(t,50)},x=function(t){return clearTimeout(t)}),H=function(t){var e,n;return e=C(),(n=function(){var r;return(r=C()-e)>=33?(e=C(),t(r,(function(){return X(n)}))):setTimeout(n,33-r)})()},D=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?K.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},T=function(){var t,e,n,r,s,o,i;for(r=arguments[0],t=0,n=(o=2<=arguments.length?K.call(arguments,1):[]).length;t<n;t++)if(s=o[t])for(e in s)Q.call(s,e)&&(i=s[e],null!=r[e]&&"object"==typeof r[e]&&null!=i&&"object"==typeof i?T(r[e],i):r[e]=i);return r},k=function(t){var e,n,r,s,o;for(s=e=0,n=0,r=t.length;n<r;n++)o=t[n],s+=Math.abs(o),e++;return s/e},j=function(t,e){var n,r,s,o;if(null==t&&(t="options"),null==e&&(e=!0),s=document.querySelector("[data-pace-"+t+"]")){if(n=s.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(o){return r=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},i=function(){function t(){}return t.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},t.prototype.trigger=function(){var t,e,n,r,s,o,i,u,a;if(n=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],null!=(i=this.bindings)?i[n]:void 0){for(s=0,a=[];s<this.bindings[n].length;)r=(u=this.bindings[n][s]).handler,e=u.ctx,o=u.once,r.apply(null!=e?e:this,t),o?a.push(this.bindings[n].splice(s,1)):a.push(s++);return a}},t}(),c=window.Pace||{},window.Pace=c,T(c,i.prototype),U=c.options=T({},P,window.paceOptions,j()),_=0,F=(W=["ajax","document","eventLag","elements"]).length;_<F;_++)!0===U[N=W[_]]&&(U[N]=P[N]);a=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return V(e,t),e}(Error),e=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(U.target)))throw new a;this.el=document.createElement("div"),this.el.classList.add("pace"),this.el.classList.add("pace-active"),document.body.classList.remove("pace-done"),document.body.classList.add("pace-running"),this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).classList.remove("pace-active"),t.classList.add("pace-inactive"),document.body.classList.remove("pace-running"),document.body.classList.add("pace-done")},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){var t;try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){a=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(U.target))return!1;for(t=this.getElement(),i="translate3d("+this.progress+"%, 0, 0)",n=0,r=(o=["webkitTransform","msTransform","transform"]).length;n<r;n++)e=o[n],t.children[0].style[e]=i;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?s="99":(s=this.progress<10?"0":"",s+=0|this.progress),t.children[0].setAttribute("data-progress",""+s)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),u=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),m=window.XMLHttpRequest,y=window.XDomainRequest,g=window.WebSocket,R=function(t,e){var n,r;for(n in r=[],e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(){return e.prototype[n]},configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(t){}return r},M=[],c.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],M.unshift("ignore"),n=e.apply(null,t),M.shift(),n},c.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],M.unshift("track"),n=e.apply(null,t),M.shift(),n},G=function(t){var e;if(null==t&&(t="GET"),"track"===M[0])return"force";if(!M.length&&U.ajax){if("socket"===t&&U.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),Y.call(U.ajax.trackMethods,e)>=0)return!0}return!1},l=function(t){function e(){var t,n;e.__super__.constructor.apply(this,arguments),n=this,t=function(t){var e;return e=t.open,t.open=function(r,s,o){return G(r)&&n.trigger("request",{type:r,url:s,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new m(e),t(n),n};try{R(window.XMLHttpRequest,m)}catch(t){}if(null!=y){window.XDomainRequest=function(){var e;return e=new y,t(e),e};try{R(window.XDomainRequest,y)}catch(t){}}if(null!=g&&U.ajax.trackWebSockets){window.WebSocket=function(t){return function(e,n){var r;return r=null!=n?new g(e,n):new g(e),G("socket")&&t.trigger("request",{type:"socket",url:e,protocols:n,request:r}),r}}(this);try{R(window.WebSocket,g)}catch(t){}}}return V(e,t),e}(u),v=null,z=function(t){var e,n,r,s;for(e=0,n=(s=U.ajax.ignoreURLs).length;e<n;e++)if("string"==typeof(r=s[e])){if(-1!==t.indexOf(r))return!0}else if(r.test(t))return!0;return!1},(E=function(){return null==v&&(v=new l),v})().on("request",(function(e){var n,r,s,o,i;if(o=e.type,s=e.request,i=e.url,!z(i))return c.running||!1===U.restartOnRequestAfter&&"force"!==G(o)?void 0:(r=arguments,"boolean"==typeof(n=U.restartOnRequestAfter||0)&&(n=0),setTimeout((function(){var e,n,i,u,a;if("socket"===o?s.readyState<2:0<(i=s.readyState)&&i<4){for(c.restart(),a=[],e=0,n=(u=c.sources).length;e<n;e++){if((N=u[e])instanceof t){N.watch.apply(N,r);break}a.push(void 0)}return a}}),n))})),t=function(){function t(){var t;this.elements=[],E().on("request",(t=this,function(){return t.watch.apply(t,arguments)}))}return t.prototype.watch=function(t){var e,n,r,s;if(r=t.type,e=t.request,s=t.url,!z(s))return n="socket"===r?new f(e):new d(e),this.elements.push(n)},t}(),d=function(t){var e,n,r,s,o,i;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",(i=this,function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2}),!1),r=0,s=(o=["load","abort","timeout","error"]).length;r<s;r++)n=o[r],t.addEventListener(n,function(t){return function(){return t.progress=100}}(this),!1);else e=t.onreadystatechange,t.onreadystatechange=function(n){return function(){var r;return 0===(r=t.readyState)||4===r?n.progress=100:3===t.readyState&&(n.progress=50),"function"==typeof e?e.apply(null,arguments):void 0}}(this)},f=function(t){var e,n,r,s;for(this.progress=0,n=0,r=(s=["error","open"]).length;n<r;n++)e=s[n],t.addEventListener(e,function(t){return function(){return t.progress=100}}(this),!1)},r=function(t){var e,n,r,o;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),e=0,n=(r=t.selectors).length;e<n;e++)o=r[e],this.elements.push(new s(o))},s=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){return document.querySelector(this.selector)?this.done():setTimeout((t=this,function(){return t.check()}),U.elements.checkInterval);var t},t.prototype.done=function(){return this.progress=100},t}(),n=function(){function t(){var t,e,n;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=(n=this,function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0})}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),o=function(){var t,e,n,r,s,o;this.progress=0,t=0,s=[],r=0,n=C(),e=setInterval((o=this,function(){var i;return i=C()-n-50,n=C(),s.push(i),s.length>U.eventLag.sampleCount&&s.shift(),t=k(s),++r>=U.eventLag.minSamples&&t<U.eventLag.lagThreshold?(o.progress=100,clearInterval(e)):o.progress=3/(t+3)*100}),50)},h=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=U.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=D(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=D(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/U.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,U.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+U.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),B=null,I=null,S=null,J=null,L=null,q=null,c.running=!1,O=function(){if(U.restartOnPushState)return c.restart()},null!=window.history.pushState&&(w=window.history.pushState,window.history.pushState=function(){return O(),w.apply(window.history,arguments)}),null!=window.history.replaceState&&(b=window.history.replaceState,window.history.replaceState=function(){return O(),b.apply(window.history,arguments)}),p={ajax:t,elements:r,document:n,eventLag:o},(A=function(){var t,n,r,s,o,i,u,a;for(c.sources=B=[],t=0,n=(o=["ajax","elements","document","eventLag"]).length;t<n;t++)!1!==U[a=o[t]]&&B.push(new p[a](U[a]));for(s=0,r=(u=null!=(i=U.extraSources)?i:[]).length;s<r;s++)N=u[s],B.push(new N(U));return c.bar=S=new e,I=[],J=new h})(),c.stop=function(){return c.trigger("stop"),c.running=!1,S.destroy(),q=!0,null!=L&&("function"==typeof x&&x(L),L=null),A()},c.restart=function(){return c.trigger("restart"),c.stop(),c.start()},c.go=function(){var t;return c.running=!0,S.render(),t=C(),q=!1,L=H((function(e,n){var r,s,o,i,u,a,l,p,f,d,g,y,m,v,w;for(S.progress,s=w=0,o=!0,a=p=0,f=B.length;p<f;a=++p)for(N=B[a],v=null!=I[a]?I[a]:I[a]=[],l=g=0,d=(u=null!=(y=N.elements)?y:[N]).length;g<d;l=++g)i=u[l],o&=(m=null!=v[l]?v[l]:v[l]=new h(i)).done,m.done||(s++,w+=m.tick(e));return r=w/s,S.update(J.tick(e,r)),S.done()||o||q?(S.update(100),c.trigger("done"),setTimeout((function(){return S.finish(),c.running=!1,c.trigger("hide")}),Math.max(U.ghostTime,Math.max(U.minTime-(C()-t),0)))):n()}))},c.start=function(t){var e;T(U,t),c.running=!0;try{S.render()}catch(e){a=e}return document.querySelector(".pace")?(c.trigger("start"),c.go()):setTimeout(c.start,50)},"object"==typeof exports&&(module.exports=c),U.startOnPageLoad&&c.start()}).call(this);