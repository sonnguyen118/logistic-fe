function number_format(a,r,t,e){a=(a+"").replace(",","").replace(" ","");var o=isFinite(+a)?+a:0,n=isFinite(+r)?Math.abs(r):0,i=void 0===e?",":e,d=void 0===t?".":t,l="";return l=(n?function(a,r){var t=Math.pow(10,r);return""+Math.round(a*t)/t}(o,n):""+Math.round(o)).split("."),l[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(l[1]||"").length<n&&(l[1]=l[1]||"",l[1]+=new Array(n-l[1].length+1).join("0")),l.join(d)}Chart.defaults.global.defaultFontFamily="Nunito",Chart.defaults.global.defaultFontColor="#858796";var ctx=document.getElementById("myBarChart"),myBarChart=new Chart(ctx,{type:"bar",data:{labels:["January","February","March","April","May","June"],datasets:[{label:"Revenue",backgroundColor:"#4e73df",hoverBackgroundColor:"#2e59d9",borderColor:"#4e73df",data:[4215,5312,6251,7841,9821,14984]}]},options:{maintainAspectRatio:!1,layout:{padding:{left:10,right:25,top:25,bottom:0}},scales:{xAxes:[{time:{unit:"month"},gridLines:{display:!1,drawBorder:!1},ticks:{maxTicksLimit:6},maxBarThickness:25}],yAxes:[{ticks:{min:0,max:15e3,maxTicksLimit:5,padding:10,callback:function(a,r,t){return"$"+number_format(a)}},gridLines:{color:"rgb(234, 236, 244)",zeroLineColor:"rgb(234, 236, 244)",drawBorder:!1,borderDash:[2],zeroLineBorderDash:[2]}}]},legend:{display:!1},tooltips:{titleMarginBottom:10,titleFontColor:"#6e707e",titleFontSize:14,backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,caretPadding:10,callbacks:{label:function(a,r){return(r.datasets[a.datasetIndex].label||"")+": $"+number_format(a.yLabel)}}}}});