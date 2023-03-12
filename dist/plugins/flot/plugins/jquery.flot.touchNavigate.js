!function(e){"use strict";var t=e.plot.uiConstants.ZOOM_DISTANCE_MARGIN;function n(n,u){var d,p,h,l,v={zoomEnable:!1,prevDistance:null,prevTapTime:0,prevPanPosition:{x:0,y:0},prevTapPosition:{x:0,y:0}},x={prevTouchedAxis:"none",currentTouchedAxis:"none",touchedAxis:null,navigationConstraint:"unconstrained",initialState:null},g=u.pan.interactive&&"manual"===u.pan.touchMode,T="smartLock"===u.pan.touchMode,f=u.pan.interactive&&(T||"smart"===u.pan.touchMode);function A(e,t,a){x.touchedAxis=function(e,t,n,i){if("pinchstart"!==t.type)return"panstart"===t.type||"pinchend"===t.type?e.getTouchedAxis(t.detail.touches[0].pageX,t.detail.touches[0].pageY):i.touchedAxis;var a=e.getTouchedAxis(t.detail.touches[0].pageX,t.detail.touches[0].pageY),o=e.getTouchedAxis(t.detail.touches[1].pageX,t.detail.touches[1].pageY);return a.length===o.length&&a.toString()===o.toString()?a:void 0}(n,e,0,x),i(x)?x.navigationConstraint="unconstrained":x.navigationConstraint="axisConstrained"}d={start:function(e){if(A(e),a(e,"pan",v,x),f){var t=s(e,"pan");x.initialState=n.navigationState(t.x,t.y)}},drag:function(e){if(A(e),f){var t=s(e,"pan");n.smartPan({x:x.initialState.startPageX-t.x,y:x.initialState.startPageY-t.y},x.initialState,x.touchedAxis,!1,T)}else g&&(n.pan({left:-c(e,"pan",v).x,top:-c(e,"pan",v).y,axes:x.touchedAxis}),r(e,"pan",v,x))},end:function(e){A(e),f&&n.smartPan.end(),function(e,t){return t.zoomEnable&&1===e.detail.touches.length}(e,v)&&updateprevPanPosition(e,"pan",v,x)}},p={start:function(e){l&&(clearTimeout(l),l=null),A(e),function(e,t){t.prevDistance=o(e)}(e,v),a(e,"pinch",v,x)},drag:function(e){l||(l=setTimeout((function(){A(e),n.pan({left:-c(e,"pinch",v).x,top:-c(e,"pinch",v).y,axes:x.touchedAxis}),r(e,"pinch",v,x);var i=o(e);(v.zoomEnable||Math.abs(i-v.prevDistance)>t)&&(function(e,t,n,i){var a=e.offset(),r={left:0,top:0},c=o(t)/n.prevDistance,u=o(t);r.left=s(t,"pinch").x-a.left,r.top=s(t,"pinch").y-a.top,e.zoom({center:r,amount:c,axes:i.touchedAxis}),n.prevDistance=u}(n,e,v,x),v.zoomEnable=!0),l=null}),1e3/60))},end:function(e){l&&(clearTimeout(l),l=null),A(e),v.prevDistance=null}},h={recenterPlot:function(t){t&&t.detail&&"touchstart"===t.detail.type&&function(t,n,a,o){var r;(function(e,t,n){var a=e.getTouchedAxis(t.detail.firstTouch.x,t.detail.firstTouch.y);void 0!==a[0]&&(n.prevTouchedAxis=a[0].direction),void 0!==(a=e.getTouchedAxis(t.detail.secondTouch.x,t.detail.secondTouch.y))[0]&&(n.touchedAxis=a,n.currentTouchedAxis=a[0].direction),i(n)&&(n.touchedAxis=null,n.prevTouchedAxis="none",n.currentTouchedAxis="none")}(t,n,o),"x"===o.currentTouchedAxis&&"x"===o.prevTouchedAxis||"y"===o.currentTouchedAxis&&"y"===o.prevTouchedAxis||"none"===o.currentTouchedAxis&&"none"===o.prevTouchedAxis)&&(t.recenter({axes:o.touchedAxis}),r=o.touchedAxis?new e.Event("re-center",{detail:{axisTouched:o.touchedAxis}}):new e.Event("re-center",{detail:n}),t.getPlaceholder().trigger(r))}(n,t,0,x)}},!0!==u.pan.enableTouch&&!0!==u.zoom.enableTouch||(n.hooks.bindEvents.push((function(e,t){var n=e.getOptions();n.zoom.interactive&&n.zoom.enableTouch&&(t[0].addEventListener("pinchstart",p.start,!1),t[0].addEventListener("pinchdrag",p.drag,!1),t[0].addEventListener("pinchend",p.end,!1)),n.pan.interactive&&n.pan.enableTouch&&(t[0].addEventListener("panstart",d.start,!1),t[0].addEventListener("pandrag",d.drag,!1),t[0].addEventListener("panend",d.end,!1)),n.recenter.interactive&&n.recenter.enableTouch&&t[0].addEventListener("doubletap",h.recenterPlot,!1)})),n.hooks.shutdown.push((function(e,t){t[0].removeEventListener("panstart",d.start),t[0].removeEventListener("pandrag",d.drag),t[0].removeEventListener("panend",d.end),t[0].removeEventListener("pinchstart",p.start),t[0].removeEventListener("pinchdrag",p.drag),t[0].removeEventListener("pinchend",p.end),t[0].removeEventListener("doubletap",h.recenterPlot)})))}function i(e){return!e.touchedAxis||0===e.touchedAxis.length}function a(e,t,n,i){var a,o=s(e,t);switch(i.navigationConstraint){case"unconstrained":i.touchedAxis=null,n.prevTapPosition={x:n.prevPanPosition.x,y:n.prevPanPosition.y},n.prevPanPosition={x:o.x,y:o.y};break;case"axisConstrained":a=i.touchedAxis[0].direction,i.currentTouchedAxis=a,n.prevTapPosition[a]=n.prevPanPosition[a],n.prevPanPosition[a]=o[a]}}function o(e){var t,n,i,a,o=e.detail.touches[0],r=e.detail.touches[1];return t=o.pageX,n=o.pageY,i=r.pageX,a=r.pageY,Math.sqrt((t-i)*(t-i)+(n-a)*(n-a))}function r(e,t,n,i){var a=s(e,t);switch(i.navigationConstraint){case"unconstrained":n.prevPanPosition.x=a.x,n.prevPanPosition.y=a.y;break;case"axisConstrained":n.prevPanPosition[i.currentTouchedAxis]=a[i.currentTouchedAxis]}}function c(e,t,n){var i=s(e,t);return{x:i.x-n.prevPanPosition.x,y:i.y-n.prevPanPosition.y}}function s(e,t){return"pinch"===t?{x:(e.detail.touches[0].pageX+e.detail.touches[1].pageX)/2,y:(e.detail.touches[0].pageY+e.detail.touches[1].pageY)/2}:{x:e.detail.touches[0].pageX,y:e.detail.touches[0].pageY}}e.plot.plugins.push({init:function(e){e.hooks.processOptions.push(n)},options:{zoom:{enableTouch:!1},pan:{enableTouch:!1,touchMode:"manual"},recenter:{enableTouch:!0}},name:"navigateTouch",version:"0.3"})}(jQuery);