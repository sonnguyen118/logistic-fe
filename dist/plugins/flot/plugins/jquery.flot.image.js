!function(a){function i(a,i,e){var n=a.getPlotOffset();if(e.images&&e.images.show)for(var o=e.datapoints.points,t=e.datapoints.pointsize,r=0;r<o.length;r+=t){var s,m=o[r],h=o[r+1],p=o[r+2],u=o[r+3],g=o[r+4],c=e.xaxis,l=e.yaxis;if(!(!m||m.width<=0||m.height<=0||(h>u&&(s=u,u=h,h=s),p>g&&(s=g,g=p,p=s),"center"===e.images.anchor&&(h-=s=.5*(u-h)/(m.width-1),u+=s,p-=s=.5*(g-p)/(m.height-1),g+=s),h===u||p===g||h>=c.max||u<=c.min||p>=l.max||g<=l.min))){var f=0,d=0,x=m.width,w=m.height;h<c.min&&(f+=(x-f)*(c.min-h)/(u-h),h=c.min),u>c.max&&(x+=(x-f)*(c.max-u)/(u-h),u=c.max),p<l.min&&(w+=(d-w)*(l.min-p)/(g-p),p=l.min),g>l.max&&(d+=(d-w)*(l.max-g)/(g-p),g=l.max),(h=c.p2c(h))>(u=c.p2c(u))&&(s=u,u=h,h=s),(p=l.p2c(p))>(g=l.p2c(g))&&(s=g,g=p,p=s),s=i.globalAlpha,i.globalAlpha*=e.images.alpha,i.drawImage(m,f,d,x-f,w-d,h+n.left,p+n.top,u-h,g-p),i.globalAlpha=s}}}function e(a,i,e,n){i.images.show&&(n.format=[{required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0}])}a.plot.image={},a.plot.image.loadDataImages=function(i,e,n){var o=[],t=[],r=e.series.images.show;a.each(i,(function(i,e){(r||e.images.show)&&(e.data&&(e=e.data),a.each(e,(function(a,i){"string"==typeof i[0]&&(o.push(i[0]),t.push(i))})))})),a.plot.image.load(o,(function(i){a.each(t,(function(a,e){var n=e[0];i[n]&&(e[0]=i[n])})),n()}))},a.plot.image.load=function(i,e){var n=i.length,o={};0===n&&e({}),a.each(i,(function(i,t){var r=function(){--n,o[t]=this,0===n&&e(o)};a("<img />").load(r).error(r).attr("src",t)}))},a.plot.plugins.push({init:function(a){a.hooks.processRawData.push(e),a.hooks.drawSeries.push(i)},options:{series:{images:{show:!1,alpha:1,anchor:"corner"}}},name:"image",version:"1.1"})}(jQuery);