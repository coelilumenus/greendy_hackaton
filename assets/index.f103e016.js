import{o as d,c as l,a as s,b as u,u as p,R as h,w as m,d as b,e as g,Q as i,p as x,f as w,r as S,t as _,g as D,h as I,i as R,j as $,k}from"./vendor.77be6da5.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};O();const P=g("Home"),B=g("About"),F={setup(e){return(r,a)=>(d(),l("div",null,[s("header",null,[s("div",null,[s("nav",null,[u(p(h),{to:"/"},{default:m(()=>[P]),_:1}),u(p(h),{to:"/about"},{default:m(()=>[B]),_:1})])])]),u(p(b))]))}};var y=(e,r)=>{const a=e.__vccOpts||e;for(const[n,t]of r)a[n]=t;return a};const L={name:"QuaggaScanner",props:{onDetected:{type:Function,default(e){console.log("detected: ",e)}},onProcessed:{type:Function,default(e){let r=i.canvas.ctx.overlay,a=i.canvas.dom.overlay;e&&(e.boxes&&(r.clearRect(0,0,parseInt(a.getAttribute("width")),parseInt(a.getAttribute("height"))),e.boxes.filter(function(n){return n!==e.box}).forEach(function(n){i.ImageDebug.drawPath(n,{x:0,y:1},r,{color:"#F00",lineWidth:3})})),e.box&&this.locate&&i.ImageDebug.drawPath(e.box,{x:0,y:1},r,{color:"#00F",lineWidth:3}),e.codeResult&&e.codeResult.code&&i.ImageDebug.drawPath(e.line,{x:"x",y:"y"},r,{color:"#FF0",lineWidth:4}))}},readerTypes:{type:Array,default:()=>["code_128_reader"]},readerSize:{type:Object,default:()=>({width:640,height:480}),validator:e=>typeof e.width=="number"&&typeof e.height=="number"},aspectRatio:{type:Object,default:()=>({min:1,max:2}),validator:e=>typeof e.min=="number"&&typeof e.max=="number"},locate:{type:Boolean,default:()=>!1},area:{type:Object,default:()=>({top:"30%",right:"30%",left:"30%",bottom:"30%"})}},data:function(){return{quaggaState:{inputStream:{type:"LiveStream",constraints:{width:{min:this.readerSize.width},height:{min:this.readerSize.height},facingMode:"environment",aspectRatio:{min:this.aspectRatio.min,max:this.aspectRatio.max}},area:{top:this.area.top,right:this.area.right,left:this.area.left,bottom:this.area.bottom}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,frequency:10,decoder:{readers:this.readerTypes},locate:this.locate}}},mounted:function(){i.init(this.quaggaState,function(e){if(e)return console.error(e);i.start()}),i.onDetected(this.onDetected),i.onProcessed(this.onProcessed)},destroyed:function(){i.stop()}},v=e=>(x("data-v-658bafd8"),e=e(),w(),e),A={id:"interactive",class:"viewport scanner"},N=v(()=>s("video",null,null,-1)),z=v(()=>s("canvas",{class:"drawingBuffer"},null,-1)),V=[N,z];function W(e,r,a,n,t,o){return d(),l("div",A,V)}var j=y(L,[["render",W],["__scopeId","data-v-658bafd8"]]);const q={components:{BarcodeScanner:j},data(){return{isDetected:!1,info:{},screen:null}},mounted(){this.screen=window.screen.orientation.type},methods:{logIt(e){this.isDetected=!0,this.info=e}}},C={class:"text-red-500 max-w-full"},T={key:1};function E(e,r,a,n,t,o){const c=S("barcode-scanner");return d(),l("div",null,[s("div",C,[s("div",null,[s("pre",null,"          "+_(t.screen)+`\r
        `,1)]),t.isDetected?(d(),l("div",T,[s("pre",null,"          "+_(t.info)+`\r
        `,1)])):(d(),D(c,{key:0,onDetected:o.logIt,readerSize:{width:640,height:480},readerTypes:["ean_reader"]},null,8,["onDetected"]))])])}var H=y(q,[["render",E]]);const Q=I({history:R("/greendy_hackaton/"),routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about"}]});const f=$(F);f.use(k());f.use(Q);f.mount("#app");
