/*! For license information please see colReorder.bootstrap4.js.LICENSE.txt */
!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net-bs4","datatables.net-colreorder"],(function(t){return e(t,window,document)})):"object"==typeof exports?module.exports=function(t,n){return t||(t=window),n&&n.fn.dataTable||(n=require("datatables.net-bs4")(t,n).$),n.fn.dataTable.ColReorder||require("datatables.net-colreorder")(t,n),e(n,0,t.document)}:e(jQuery,window,document)}((function(e,t,n,o){return e.fn.dataTable}));