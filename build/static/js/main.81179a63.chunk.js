(this.webpackJsonppraredn=this.webpackJsonppraredn||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"resource":"/cgi-bin/sysinfo.json","params":{"hosts":"?hosts=1","services":"&services=1","link_info":"link_info=1"}}')},37:function(e,t,n){e.exports=n(69)},42:function(e,t,n){},46:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),o=(n(42),n(8)),i=n.n(o),s=n(36),u=n(20),p=n(9),d=n(10),m=n(12),h=n(11),f=(n(44),n(45),n(46),n(74)),E=n(75),g=n(73),v=n(72),y=n(76),w=n(3),b=new w.Icon({iconUrl:"./purpleRadioCircle-icon.png",iconSize:[25,25]}),k=new w.Icon({iconUrl:"./goldRadioCircle-icon.png",iconSize:[25,25]}),C=new w.Icon({iconUrl:"./blueRadioCircle-icon.png",iconSize:[25,25]}),D=new w.Icon({iconUrl:"./magentaRadioCircle-icon.png",iconSize:[25,25]}),O=new w.Icon({iconUrl:"./grayRadioCircle-icon.png",iconSize:[25,25]});function j(e){var t=parseInt(e.channel);if(t>=3380&&t<=3495)return C;var n=e.freq;if(n){if(n.includes("2."))return b;if(n.includes("5."))return k;if(n.includes("3."))return C;if(n.includes("900"))return D}return O}var S=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={zoom:9.5,mapCenter:{lat:18.2,lon:-66.3}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;if(0===this.props.appConfig.length)return null;var t=[],n=[],a={},l={};this.props.nodesData.forEach((function(t){return a[e.canonicalHostname(t.node)]=t})),this.props.nodesData.forEach((function(r){if(r.lat&&r.lon){var c=e.canonicalHostname(r.node);r.link_info.forEach((function(o){var i=e.canonicalHostname(o.hostname),s=a[i];if(s){if(!s.lat||!s.lon||l["".concat(i,"/").concat(c)])return;var u=[[r.lat,r.lon],[s.lat,s.lon]];switch(o.linkType){case"RF":t.push(u);break;case"TUN":n.push(u)}l["".concat(i,"/").concat(c)]=!0,l["".concat(c,"/").concat(i)]=!0}}))}}));var c=[this.props.appConfig.mapSettings.mapCenter.lat,this.props.appConfig.mapSettings.mapCenter.lon];return r.a.createElement(f.a,{ref:"map",className:"Map",center:c,zoom:this.props.appConfig.mapSettings.zoom,scrollWheelZoom:!1},r.a.createElement(E.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://kn6plv-tiles.local.mesh/tile/{z}/{x}/{y}.png"}),r.a.createElement(g.a,{color:"lime",weight:"2",positions:t}),r.a.createElement(g.a,{color:"grey",weight:"1",dashArray:"5 5",positions:n}),this.props.nodesData.map((function(t){return r.a.createElement(v.a,{ref:t.node.toUpperCase(),key:t.node,position:[t.lat,t.lon],icon:j(t.meshrf)},r.a.createElement(y.a,null," ",r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement("a",{href:"http://".concat(t.node,".local.mesh"),target:"_blank"},t.node)),r.a.createElement("table",null,r.a.createElement("tr",{style:{verticalAlign:"top"}},r.a.createElement("td",null,"Desc"),r.a.createElement("td",null,t.node_details.description)),r.a.createElement("tr",null,r.a.createElement("td",null,"Location"),r.a.createElement("td",null,t.lat,",",t.lon)),r.a.createElement("tr",null,r.a.createElement("td",null,"RF Status"),r.a.createElement("td",null,t.meshrf.status)),"on"===t.meshrf.status&&r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"SSID"),r.a.createElement("td",null,t.meshrf.ssid)),r.a.createElement("tr",null,r.a.createElement("td",null,"RF Channel"),r.a.createElement("td",null,t.meshrf.channel)),r.a.createElement("tr",null,r.a.createElement("td",null,"RF Freq"),r.a.createElement("td",null,t.meshrf.freq)),r.a.createElement("tr",null,r.a.createElement("td",null,"Bandwidth"),r.a.createElement("td",null,t.meshrf.chanbw," MHz")),r.a.createElement("tr",null,r.a.createElement("td",null,"MAC"),r.a.createElement("td",null,t.interfaces[0].mac))),r.a.createElement("tr",{style:{verticalAlign:"top"}},r.a.createElement("td",null,"Model"),r.a.createElement("td",null,t.node_details.model)),r.a.createElement("tr",null,r.a.createElement("td",{width:"80"},"Firmware"),r.a.createElement("td",null,t.node_details.firmware_version)),r.a.createElement("tr",{style:{verticalAlign:"top",whiteSpace:"nowrap"}},r.a.createElement("td",null,"Neighbors"),r.a.createElement("td",null," ",t.link_info.map((function(t){return r.a.createElement("div",{key:t.hostname},r.a.createElement("a",{href:"#",onClick:function(){return e.openPopup(t.hostname)}},e.canonicalHostname(t.hostname))," ",t.linkType?"(".concat(t.linkType,")"):""," ")}))," "))))," "))})))}},{key:"openPopup",value:function(e){var t=this.refs[this.canonicalHostname(e)];t&&t.fireLeafletEvent("click")}},{key:"canonicalHostname",value:function(e){return e.replace(/^\./,"").replace(/\.local\.mesh$/i,"").toUpperCase()}}]),n}(a.Component),N=n(14),R=n(21),M=n.n(R),_=n(22),z=n.n(_),x=(n(67),n(68),n(77)),U=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(n,[{key:"countNodes",value:function(e,t){switch(t){case 900:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("900")})).length;case 24:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("2.")})).length;case 34:return e.filter((function(e){return"on"===e.meshrf.status&&(e.meshrf.freq.includes("3.")||e.meshrf.channel>=3380&&e.meshrf.channel<=3495)})).length;case 58:return e.filter((function(e){return"on"===e.meshrf.status&&e.meshrf.freq.includes("5.")})).length;case 0:default:return e.filter((function(e){return"off"===e.meshrf.status})).length}}},{key:"render",value:function(){return r.a.createElement("table",{className:"Header"},r.a.createElement("tr",null,r.a.createElement("th",null,"Band"),r.a.createElement("th",null,"Nodes")),r.a.createElement("tr",null,r.a.createElement("td",null,"  ",r.a.createElement(x.a,{src:"./magentaRadioCircle-icon.png",width:20})," 900 Mhz "),r.a.createElement("td",null,"# ",this.countNodes(this.props.nodesData,900)," ")),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(x.a,{src:"./purpleRadioCircle-icon.png",width:20})," 2.4 Ghz "),r.a.createElement("td",null," # ",this.countNodes(this.props.nodesData,24))),r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement(x.a,{src:"./blueRadioCircle-icon.png",width:20})," 3.4 Ghz "),r.a.createElement("td",null," # ",this.countNodes(this.props.nodesData,34))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(x.a,{src:"./goldRadioCircle-icon.png",width:20})," 5Ghz "),r.a.createElement("td",null,"# ",this.countNodes(this.props.nodesData,58))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(x.a,{src:"./grayRadioCircle-icon.png",width:20})," Mesh RF Off "),r.a.createElement("td",null,"# ",this.countNodes(this.props.nodesData,0))))}}]),n}(a.Component),A=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={appConfig:[],nodesData:[]},e}return Object(d.a)(n,[{key:"retrieveNodeDetails",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("http://".concat(t.ip).concat(N.resource,"/?").concat(N.params.link_info));case 3:200===(n=e.sent).status&&n.data.lat&&n.data.lon&&(a={node:n.data.node,lat:n.data.lat,lon:n.data.lon,meshrf:n.data.meshrf,chanbw:n.data.chanbw,node_details:n.data.node_details,interfaces:n.data.interfaces,link_info:Object.keys(n.data.link_info).map((function(e){return n.data.link_info[e]}))},this.setState({nodesData:[].concat(Object(s.a)(this.state.nodesData),[a])})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getNodesData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("http://localnode.local.mesh".concat(N.resource).concat(N.params.hosts));case 3:200!==(t=e.sent).status?z.a.alert("Unable to find your AREDN node, please verify if you are connected to the MESH."):(n=new RegExp(this.state.appConfig.nodesFilter),a=t.data.hosts.filter((function(e){return e.name.toUpperCase().trim().match(n)})),Object.keys(a).forEach((function(e){return r.retrieveNodeDetails(a[e])}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),z.a.alert("Unable to find your AREDN node, please verify if you are connected to the MESH.");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("appConfig.json");case 2:t=e.sent,this.setState({appConfig:t.data}),document.title="".concat(this.state.appConfig.contactInfo.callsign," - ").concat("LiveMeshMap"," ").concat("1.1.0"," by ").concat("KP4MSR and KN6PLV"),this.getNodesData();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{nodesData:this.state.nodesData,appConfig:this.state.appConfig}),r.a.createElement(S,{nodesData:this.state.nodesData,appConfig:this.state.appConfig}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.81179a63.chunk.js.map