(function(t){function e(e){for(var o,a,s=e[0],c=e[1],l=e[2],b=0,p=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"15b4":function(t,e,n){},1913:function(t,e,n){var o={"./black-chip.png":"8acd","./blue-chip.png":"9ebb","./brown-chip.png":"b035","./cyan-chip.png":"e28b","./green-chip.png":"6b6c","./grey-chip.png":"2b3d","./orange-chip.png":"4003","./pink-chip.png":"7ba4","./purple-chip.png":"3078","./red-chip.png":"1a09","./white-chip.png":"48e2","./white2-chip.png":"6f8b","./yellow-chip.png":"5ce5"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="1913"},"1a09":function(t,e,n){t.exports=n.p+"img/red-chip.71196e6f.png"},2340:function(t,e,n){"use strict";var o=n("6cc4"),r=n.n(o);r.a},2405:function(t,e,n){"use strict";var o=n("2835"),r=n.n(o);r.a},2613:function(t,e,n){"use strict";var o=n("c61e"),r=n.n(o);r.a},2835:function(t,e,n){},"2b3d":function(t,e,n){t.exports=n.p+"img/grey-chip.9ee3d302.png"},3078:function(t,e,n){t.exports=n.p+"img/purple-chip.5df04b60.png"},4003:function(t,e,n){t.exports=n.p+"img/orange-chip.10ef6acd.png"},"48e2":function(t,e,n){t.exports=n.p+"img/white-chip.2c3ee8d8.png"},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"5ce5":function(t,e,n){t.exports=n.p+"img/yellow-chip.8ccdba58.png"},6660:function(t,e,n){},"6b6c":function(t,e,n){t.exports=n.p+"img/green-chip.c7a34aa6.png"},"6cc4":function(t,e,n){},"6f8b":function(t,e,n){t.exports=n.p+"img/white2-chip.670be8ed.png"},"7ba4":function(t,e,n){t.exports=n.p+"img/pink-chip.7997b8f5.png"},"8acd":function(t,e,n){t.exports=n.p+"img/black-chip.898982dd.png"},"9c0c":function(t,e,n){},"9ebb":function(t,e,n){t.exports=n.p+"img/blue-chip.6c2f1c0f.png"},b035:function(t,e,n){t.exports=n.p+"img/brown-chip.ae430679.png"},bd7c:function(t,e,n){"use strict";var o=n("6660"),r=n.n(o);r.a},c61e:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("fmNav"),n("router-view")],1)},i=[],a=n("d4ec"),s=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-button",{on:{click:function(e){return t.$router.go(-1)}}},[[n("b-icon",{attrs:{icon:"box-arrow-in-left"}})],t._v(" Go Back ")],2)],1),n("b-navbar-brand",{staticClass:"ml-auto",attrs:{"align-v":"center",href:"/"}},[t._v(" Floorman ")]),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.rules",modifiers:{rules:!0}}]},[t._v(" Rules and Info "),n("b-icon",{attrs:{icon:"book"}})],1)],1)],1)],1),n("b-modal",{attrs:{id:"rules",title:"Rules and Info"}},[n("h2",[t._v("Rules")])])],1)},p=[],h=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);h=Object(l["a"])([u["a"]],h);var d=h,f=d,v=(n("bd7c"),n("2877")),m=Object(v["a"])(f,b,p,!1,null,"23b66f3c",null),g=m.exports,y=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);y=Object(l["a"])([Object(u["a"])({components:{fmNav:g}})],y);var k=y,_=k,w=(n("5c0b"),Object(v["a"])(_,r,i,!1,null,null,null)),x=w.exports,O=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"floorman"}},[n("br"),n("b-container",[n("br"),n("b-jumbotron",{attrs:{header:"Floorman"}},[n("br"),n("b-row",[n("b-col",[n("b-button",{staticClass:"setup-button",attrs:{variant:"primary",href:"/setup"}},[n("h1",[t._v("Setup")])]),t._v(" "),n("b-button",{staticClass:"reset-button",attrs:{variant:"outline-primary",href:"/info"}},[n("h1",[t._v("Preset")])])],1)],1),n("br"),n("b-row",[n("b-col",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.presets",modifiers:{presets:!0}}],staticClass:"reset-button",attrs:{variant:"outline-primary"}},[n("h3",[t._v("Load Popular Preset")])])],1)],1)],1),n("b-modal",{attrs:{id:"presets",title:"Popular Presets"}},[n("b-row",[n("b-col",[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("Total Chips")]),n("th",[t._v("Players")]),n("th",[t._v("Speed")]),n("th")])]),t.serverData?n("tbody",t._l(t.serverData,(function(e,o){return n("tr",{key:o,attrs:{index:o}},[n("td",[t._v(t._s(t.getTotalChips(e.chips)))]),n("td",[t._v(t._s(e.players))]),n("td",[t._v(t._s(e.timePerPerson))]),n("td",[n("b-button",{attrs:{variant:"primary",href:"/setup"},on:{click:function(e){return t.choose(o)}}},[t._v("Choose")])],1)])})),0):n("tbody",[t._v(" Loading data... ")])])])],1)],1)],1)],1)},C=[],P=(n("4160"),n("a9e3"),n("159b"),n("bee2")),S=n("bc3a"),$=n.n(S),I=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.serverData=null,t.url="http://localhost:5000/",t}return Object(P["a"])(n,[{key:"choose",value:function(t){console.log("Setting current set to preset: ",t),this.$store.commit("setState",this.serverData[t])}},{key:"getTotalChips",value:function(t){var e=0;return t.forEach((function(t){e+=Number(t.amount)})),e}},{key:"getAPI",value:function(){var t=this;$.a.get(this.url).then((function(e){console.log("response: ",e),t.setServerData(e.data)}))}},{key:"setServerData",value:function(t){this.serverData=t,console.log("Setting server data...",this.serverData)}},{key:"mounted",value:function(){this.getAPI(),console.log("Startup data: ",this.serverData)}}]),n}(u["c"]);I=Object(l["a"])([u["a"]],I);var E=I,B=E,T=(n("2340"),Object(v["a"])(B,j,C,!1,null,null,null)),N=T.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md",attrs:{id:"setup-form"}},[n("br"),n("b-jumbotron",{attrs:{header:"Setup"}},[n("b-row",[n("b-col",[n("b-container",[n("div",{attrs:{id:"chips-form"}},[n("br"),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("Color")]),n("th",[t._v("Quantity")]),n("th",[n("div")])])]),n("tbody",t._l(t.chips,(function(t,e){return n("chipFormRow",{key:t.id,attrs:{index:e,cId:t.id}})})),1)]),n("br"),n("b-button",{attrs:{block:"",variant:"outline-primary"},on:{click:t.addChip}},[n("b-icon",{attrs:{icon:"plus"}}),t._v(" New Chip ")],1)],1)])],1),n("b-col",[n("b-container",[n("div",{attrs:{id:"form-players"}},[n("div",{staticClass:"mt-3"},[t._v("Players: "),n("strong",[t._v(t._s(t.players))])]),n("b-form-select",{attrs:{options:t.options},model:{value:t.players,callback:function(e){t.players=e},expression:"players"}})],1),n("br"),n("div",{attrs:{id:"form-speed"}},[n("b-form-group",{attrs:{label:"Choose game speed: "}},[n("b-form-radio",{attrs:{name:"blitz",value:"10"},model:{value:t.timePerPerson,callback:function(e){t.timePerPerson=e},expression:"timePerPerson"}},[t._v("Blitz")]),n("b-form-radio",{attrs:{name:"blitz",value:"15"},model:{value:t.timePerPerson,callback:function(e){t.timePerPerson=e},expression:"timePerPerson"}},[t._v("Normal")]),n("b-form-radio",{attrs:{name:"blitz",value:"25"},model:{value:t.timePerPerson,callback:function(e){t.timePerPerson=e},expression:"timePerPerson"}},[t._v("Long")])],1)],1)])],1)],1),n("b-row",[n("b-col"),n("b-col",{attrs:{"align-v":"end"}},[n("b-button",{staticClass:"float-right",attrs:{variant:"primary",href:"/info"}},[t._v(" Next "),n("b-icon",{attrs:{icon:"box-arrow-in-right"}})],1)],1)],1)],1)],1)},G=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"chipFormRow"},[n("td",[n("div",{staticClass:"color-input"},[n("b-dropdown",{attrs:{size:"lg",variant:"light","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("img",{attrs:{src:t.getImgUrl(t.chipOptions.find((function(e){return e.color===t.chipColor})).link),height:"30px",width:"30px"}}),n("span",{staticClass:"sr-only"},[t._v("Search")])]},proxy:!0}])},t._l(t.chipOptions,(function(e,o){return n("b-dropdown-item-button",{key:o},[n("img",{attrs:{src:t.getImgUrl(e.link),height:"30px",width:"30px"},on:{click:function(e){return t.chooseChip(o)}}}),t._v(" "+t._s(e.text)+" Chip ")])})),1)],1)]),n("td",[n("div",{staticClass:"amount-input"},[n("b-form-input",{attrs:{type:"number"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)]),n("td",[n("b-button-group",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.saveChip()}}},[n("b-icon",{attrs:{icon:"check"}})],1),n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.removeChip()}}},[n("b-icon",{attrs:{icon:"trash"}})],1)],1)],1)])},M=[],R=(n("7db0"),function(t){Object(s["a"])(o,t);var e=Object(c["a"])(o);function o(){var t;return Object(a["a"])(this,o),t=e.apply(this,arguments),t.amount=0,t.chipOptions=[{color:"red",text:"Red",link:"red-chip.png"},{color:"blue",text:"Blue",link:"blue-chip.png"},{color:"black",text:"Black",link:"black-chip.png"},{color:"white2",text:"White",link:"white2-chip.png"},{color:"white",text:"White",link:"white-chip.png"},{color:"green",text:"Green",link:"green-chip.png"},{color:"cyan",text:"Cyan",link:"cyan-chip.png"},{color:"grey",text:"Grey",link:"grey-chip.png"},{color:"brown",text:"Brown",link:"brown-chip.png"},{color:"orange",text:"Orange",link:"orange-chip.png"},{color:"purple",text:"Purple",link:"purple-chip.png"},{color:"pink",text:"Pink",link:"pink-chip.png"},{color:"yellow",text:"Yellow",link:"yellow-chip.png"}],t.chipColor=t.chipOptions[0].color,t}return Object(P["a"])(o,[{key:"removeChip",value:function(){this.$store.commit("removeChip",this.index)}},{key:"getImgUrl",value:function(t){return n("1913")("./"+t)}},{key:"chooseChip",value:function(t){this.chipColor=this.chipOptions[t].color}},{key:"saveChip",value:function(){console.log("Chip color: "+this.chipColor),console.log("Trying to change id: "+this.cId);var t={id:this.cId,color:this.chipColor,amount:this.amount};this.$store.commit("updateChip",t)}},{key:"mounted",value:function(){var t=this,e=this.$store.state.chips.find((function(e){return t.cId===e.id}));e&&(this.chipColor=e.color,this.amount=e.amount),void 0===this.chipColor&&(console.log("Could not find a matching chip"),this.chipColor=this.chipOptions[0].color,this.amount=0)}}]),o}(u["c"]));Object(l["a"])([Object(u["b"])()],R.prototype,"cId",void 0),Object(l["a"])([Object(u["b"])()],R.prototype,"index",void 0),R=Object(l["a"])([u["a"]],R);var z=R,F=z,L=(n("2405"),Object(v["a"])(F,U,M,!1,null,null,null)),A=L.exports,W=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.options=[{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"},{value:6,text:"6"},{value:7,text:"7"},{value:8,text:"8"}],t}return Object(P["a"])(n,[{key:"addChip",value:function(){this.$store.commit("addChip")}},{key:"players",get:function(){return this.$store.state.players},set:function(t){console.log("Setting players to: ",t),this.$store.commit("players",t)}},{key:"timePerPerson",get:function(){return this.$store.state.timePerPerson},set:function(t){this.$store.commit("timePerPerson",t)}},{key:"chips",get:function(){return console.log(this.$store.state.chips),this.$store.state.chips}}]),n}(u["c"]);W=Object(l["a"])([Object(u["a"])({components:{chipFormRow:A}})],W);var Z=W,J=Z,V=Object(v["a"])(J,D,G,!1,null,null,null),H=V.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"info-display"}},[n("b-container",[n("br"),n("b-jumbotron",{attrs:{header:"Starting Stack"}},[n("b-container",[n("b-row",[n("b-col",[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("Amount")]),n("th",[t._v("Color")])])]),n("tbody",t._l(t.stack,(function(e,o){return n("tr",{key:o,attrs:{index:o}},[n("td",[n("h1",[n("b",[t._v(t._s(e.amount))])])]),"white"===e.color.substring(0,5)?n("td",{staticClass:"imagebox-b"},[n("img",{attrs:{src:t.getImgUrl(e.color+"-chip.png"),height:"150px",width:"150px"}}),n("div",{staticClass:"centered"},[n("h1",[t._v(t._s(e.value)+"$")])])]):n("td",{staticClass:"imagebox"},[n("img",{attrs:{src:t.getImgUrl(e.color+"-chip.png"),height:"150px",width:"150px"}}),n("div",{staticClass:"centered"},[n("h1",[t._v(t._s(e.value)+"$")])])])])})),0)])])],1),n("b-row",[n("b-col"),n("b-col",{attrs:{"align-v":"end"}},[n("b-button",{staticClass:"float-right",attrs:{variant:"primary",href:"/game"}},[t._v(" Next "),n("b-icon",{attrs:{icon:"box-arrow-in-right"}})],1)],1)],1)],1)],1)],1)],1)},Y=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{attrs:{disabled:"",size:"sm",pill:"",variant:"warning"}},[t._v(" sb ")])},K=[],X=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);X=Object(l["a"])([u["a"]],X);var tt=X,et=tt,nt=Object(v["a"])(et,q,K,!1,null,"9633b8ba",null),ot=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{attrs:{disabled:"",size:"sm",pill:"",variant:"danger"}},[t._v(" Bb ")])},it=[],at=function(t){Object(s["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);at=Object(l["a"])([u["a"]],at);var st=at,ct=st,lt=Object(v["a"])(ct,rt,it,!1,null,"2be38afe",null),ut=lt.exports,bt=function(t){Object(s["a"])(o,t);var e=Object(c["a"])(o);function o(){var t;return Object(a["a"])(this,o),t=e.apply(this,arguments),t.stack=[],t}return Object(P["a"])(o,[{key:"setStack",value:function(){var t=this,e=[1,5,10,50,100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6],n=100,o=[],r=[],i=[],a=0;this.sortedChips.forEach((function(n){o.push(Math.floor(n.amount/t.players)),r.push(e[a]),n.value=e[a],a++})),console.log("Stack amounts: ",o),console.log("Stack values: ",r);for(var s=0,c=0;c<o.length;c++)s+=o[c]*r[c];if(console.log("Total value: ",s),s<n)console.log("The process ends here. We can take the playerstack we have and keep it."),o.forEach((function(t){i.push(0)}));else{console.log("Time to do more fun stuff!");var l=0,u=s-100;console.log("Making change for: ",u);for(var b=o.length-1;b>-1;b--){var p=r[b],h=o[b];l=Math.floor(u/p),console.log("Integer division yields: ",l),l>h?(i.push(h),u-=p*h):(i.push(l),u%=p)}i.reverse(),console.log("toRemove: ",i)}for(var d=0;d<o.length;d++){o[d]-=i[d];var f={amount:o[d],color:this.sortedChips[d].color,value:e[d]};f.amount>0&&this.stack.push(f)}console.log("New stack is: ",this.stack)}},{key:"getImgUrl",value:function(t){return n("1913")("./"+t)}},{key:"mounted",value:function(){this.setStack()}},{key:"sortedChips",get:function(){return this.$store.commit("updateChipValue"),this.$store.state.chips.sort((function(t,e){return t.amount>e.amount?1:-1}))}},{key:"players",get:function(){return this.$store.state.players}}]),o}(u["c"]);bt=Object(l["a"])([Object(u["a"])({components:{sb:ot,bb:ut}})],bt);var pt=bt,ht=pt,dt=(n("2613"),Object(v["a"])(ht,Q,Y,!1,null,null,null)),ft=dt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"game-page"}},[n("br"),n("b-container",{attrs:{id:"game-page-body"}},[n("b-jumbotron",[n("b-row",{attrs:{id:"chip-display"}},t._l(t.chips,(function(e,o){return n("b-col",{key:o,attrs:{index:o}},["white"===e.color.substring(0,5)?n("div",{staticClass:"imagebox-b"},[n("img",{attrs:{src:t.getImgUrl(e.color+"-chip.png"),height:"150px",width:"150px"}}),n("div",{staticClass:"centered"},[n("h1",[t._v("$"+t._s(e.value))])])]):n("div",{staticClass:"imagebox"},[n("img",{attrs:{src:t.getImgUrl(e.color+"-chip.png"),height:"150px",width:"150px"}}),n("div",{staticClass:"centered"},[n("h1",[t._v("$"+t._s(e.value))])])])])})),1),n("br"),n("b-row",{attrs:{id:"time-display"}},[n("b-col",[n("b-row",[n("b-col",[n("h1",[t._v("Timer")])])],1),n("b-row",[n("b-col",[n("b-jumbotron",{attrs:{"border-variant":"primary"}},[n("h1",[t._v(" "+t._s(t._f("addZero")(t.minutes))+" : "+t._s(t._f("addZero")(t.seconds)))])])],1)],1)],1)],1),n("b-row",{attrs:{id:"controls"}},[n("b-col",[n("b-button",{attrs:{variant:"warning"}},[[n("b-icon",{attrs:{icon:"skip-backward"},on:{click:function(e){return t.prevGameState()}}})]],2)],1),n("b-col",[n("b-button-group",[n("b-button",{attrs:{variant:"warning"}},[[n("b-icon",{attrs:{icon:"arrow-clockwise"},on:{click:function(e){return t.resetClick()}}})]],2),t.isPlay?n("b-button",{attrs:{variant:"danger"}},[[n("b-icon",{attrs:{icon:"pause-fill"},on:{click:function(e){return t.stopClick()}}})]],2):n("b-button",{attrs:{variant:"warning"}},[[n("b-icon",{attrs:{icon:"play"},on:{click:function(e){return t.startClick()}}})]],2)],1)],1),n("b-col",[n("b-button",{attrs:{variant:"warning"}},[[n("b-icon",{attrs:{icon:"skip-forward"},on:{click:function(e){return t.nextGameState()}}})]],2)],1)],1),n("b-row",{attrs:{id:"blind-info"}},[n("b-col",[n("b-row",{attrs:{id:"blind-titles"}},[n("b-col",[n("h2",[t._v("Prev Blinds")])]),n("b-col",[n("h1",[t._v("Blinds")])]),n("b-col",[n("h2",[t._v("Next Blinds")])])],1),n("b-row",{attrs:{id:"blind-values"}},[n("b-col",[n("h2",[t._v(" $"+t._s(t.getBlinds(t.gameState-1).sb)+"| $"+t._s(t.getBlinds(t.gameState-1).bb)+" ")])]),n("b-col",[n("h1",[t._v(" $"+t._s(t.getBlinds(t.gameState).sb)+"| $"+t._s(t.getBlinds(t.gameState).bb)+" ")])]),n("b-col",[n("h2",[t._v(" $"+t._s(t.getBlinds(t.gameState+1).sb)+"| $"+t._s(t.getBlinds(t.gameState+1).bb)+" ")])])],1)],1)],1)],1)],1)],1)},mt=[];n("4de4");u["c"].filter("addZero",(function(t){console.log(t);var e=Number(t);console.log("num: ",e);var n="";if(e<10)n="0"+e;else{if(0!=e)return e;n="00"}return n}));var gt=function(t){Object(s["a"])(o,t);var e=Object(c["a"])(o);function o(){var t;return Object(a["a"])(this,o),t=e.apply(this,arguments),t.isPlay=!1,t.gameState=0,t.blinds=[{sb:"1",bb:"2"},{sb:"2",bb:"4"},{sb:"4",bb:"8"},{sb:"5",bb:"10"},{sb:"10",bb:"20"},{sb:"20",bb:"40"},{sb:"40",bb:"80"},{sb:"50",bb:"100"},{sb:"100",bb:"200"},{sb:"200",bb:"400"},{sb:"400",bb:"800"},{sb:"500",bb:"1000"},{sb:"1000",bb:"2000"},{sb:"2000",bb:"4000"},{sb:"4000",bb:"8000"},{sb:"5000",bb:"10000"},{sb:"10000",bb:"20000"}],t.minutes=t.initialTime,t.seconds=0,t}return Object(P["a"])(o,[{key:"nextGameState",value:function(){this.gameState++,console.log("gamestate",this.gameState),this.resetClick()}},{key:"prevGameState",value:function(){0===this.gameState?console.log("Game can't regress anymore"):(this.gameState--,console.log("gamestate",this.gameState),this.resetClick())}},{key:"getBlinds",value:function(t){return t<0?{sb:"",bb:""}:t>this.blinds.length-1?{sb:"Game",bb:"End"}:this.blinds[t]}},{key:"countDown",value:function(){this.isPlay&&(0===this.seconds&&0===this.minutes?(this.seconds=0,this.minutes=this.initialTime,this.nextGameState()):0===this.seconds?(this.seconds=59,this.minutes--):this.seconds--)}},{key:"startClick",value:function(){this.isPlay=!0,this.timer=window.setInterval(this.countDown,1e3)}},{key:"stopClick",value:function(){this.isPlay=!1,window.clearInterval(this.timer)}},{key:"resetClick",value:function(){this.isPlay=!1,this.seconds=0,this.minutes=this.initialTime,window.clearInterval(this.timer)}},{key:"getImgUrl",value:function(t){return n("1913")("./"+t)}},{key:"mounted",value:function(){console.log("mounting components..."),console.log("minutes: ",this.minutes)}},{key:"chips",get:function(){return console.log(this.$store.state.chips),this.$store.state.chips}},{key:"initialTime",get:function(){return console.log("starting clock times: ",this.$store.state.timePerPerson),this.$store.state.timePerPerson}}]),o}(u["c"]);gt=Object(l["a"])([Object(u["a"])({components:{bb:ut,sb:ot}})],gt);var yt=gt,kt=yt,_t=(n("efe4"),Object(v["a"])(kt,vt,mt,!1,null,null,null)),wt=_t.exports;o["default"].use(O["a"]);var xt=[{path:"/",name:"Home Page",component:N},{path:"/setup",name:"Setup Page",component:H},{path:"/info",name:"Info Page",component:ft},{path:"/game",name:"Game Page",component:wt}],Ot=new O["a"]({mode:"history",base:"/",routes:xt}),jt=Ot,Ct=(n("a434"),n("2f62")),Pt=n("bfa9");o["default"].use(Ct["a"]);var St=new Pt["a"]({key:"vuex",storage:window.localStorage}),$t=new Ct["a"].Store({state:{players:2,chips:[],timePerPerson:15},mutations:{players:function(t,e){t.players=e,console.log("players: "+e)},addChip:function(t){var e=t.chips.length+1;t.chips.forEach((function(t){e===t.id&&(e+=t.id)}));var n={color:"red",amount:0,value:0,id:0};n.id=e,t.chips.push(n)},removeChip:function(t,e){t.chips.splice(e,1)},timePerPerson:function(t,e){t.timePerPerson=e,console.log("tPP: "+e)},updateChip:function(t,e){var n=e.id,o=e.color,r=e.amount;console.log("trying to update: "+n),t.chips.forEach((function(t){t.id===n&&(t.color=o,t.amount=r)}))},setState:function(t,e){t.players=e.players,t.chips=e.chips,t.timePerPerson=e.timePerPerson},updateChipValue:function(t){var e=[1,5,10,50,100,500,1e3,5e3,1e4,5e4,1e5,5e5,1e6],n=t.chips.sort((function(t,e){return t.amount>e.amount?1:-1})),o=0;n.forEach((function(t){t.value=e[o],o++}))}},actions:{},modules:{},plugins:[St.plugin]}),It=n("5f5b"),Et=n("b1e0");n("f9e3"),n("2dd8");o["default"].use(It["a"]),o["default"].use(Et["a"]),o["default"].config.productionTip=!1,new o["default"]({router:jt,store:$t,render:function(t){return t(x)}}).$mount("#app")},e28b:function(t,e,n){t.exports=n.p+"img/cyan-chip.78b48ffd.png"},efe4:function(t,e,n){"use strict";var o=n("15b4"),r=n.n(o);r.a}});
//# sourceMappingURL=app.558a0fad.js.map