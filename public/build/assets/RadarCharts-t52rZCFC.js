import{j as o}from"./app-D3qFl5QJ.js";import{_ as i}from"./react-apexcharts.min-BlSZjJhz.js";import{g as l}from"./ChartsDynamicColor-B5Ek34yS.js";import"./index-B9h42nwt.js";const y=({dataColors:a})=>{var r=l(a);const t=[{name:"Series 1",data:[80,50,30,40,100,20]}];var e={chart:{height:350,type:"radar",toolbar:{show:!1}},colors:r,xaxis:{categories:["January","February","March","April","May","June"]}};return o.jsx(i,{dir:"ltr",className:"apex-charts",series:t,options:e,type:"radar",height:365})},u=({dataColors:a})=>{var r=l(a);const t=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];var e={chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1},toolbar:{show:!1}},stroke:{width:2},fill:{opacity:.2},markers:{size:0},colors:r,xaxis:{categories:["2014","2015","2016","2017","2018","2019"]}};return o.jsx(i,{dir:"ltr",className:"apex-charts",series:t,options:e,type:"radar",height:365})},m=({dataColors:a})=>{var r=l(a);const t=[{name:"Series 1",data:[20,100,40,30,50,80,33]}];var e={chart:{height:350,type:"radar",toolbar:{show:!1}},dataLabels:{enabled:!0},plotOptions:{radar:{size:140}},title:{text:"Radar with Polygon Fill",style:{fontWeight:500}},colors:r,markers:{size:4,colors:["#fff"],strokeColor:"#f34e4e",strokeWidth:2},tooltip:{y:{formatter:function(s){return s}}},xaxis:{categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},yaxis:{tickAmount:7,labels:{formatter:function(s,d){return d%2===0?s:""}}}};return o.jsx(i,{dir:"ltr",className:"apex-charts",series:t,options:e,type:"radar",height:365})};export{u as MultipleRadar,m as PolygonRadar,y as SimpleRadar};
