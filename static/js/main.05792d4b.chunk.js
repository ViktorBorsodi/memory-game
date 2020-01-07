(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),o=(a(15),a(1)),s=a(2),h=a(5),u=a(4),c=a(3),d=a(6),m=(a(16),a(17),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"Memory Game"),i.a.createElement("h2",{onClick:this.props.newGame},"New Game"))}}]),t}(n.Component)),p=(a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).onClick=a.onClick.bind(Object(c.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onClick",value:function(){this.props.handleMatch(this.props.id,this.props.color,this.props.enabled)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Tile",style:"hidden"===this.props.status?{background:"gray"}:{background:this.props.color},onClick:this.onClick})}}]),t}(n.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tiles.map((function(t){return i.a.createElement(p,{key:t.id,id:t.id,color:t.color,status:t.status,enabled:t.enabled,handleMatch:e.props.handleMatch})}));return i.a.createElement("div",{className:"Game"},t)}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={tiles:a.createTileObjects(),halfPair:!1,matchedColor:""},a.handleMatch=a.handleMatch.bind(Object(c.a)(a)),a.newGame=a.newGame.bind(Object(c.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getRandomColors",value:function(){for(var e=[],t=1;t<=8;t++){var a=Math.floor(Math.random()*this.props.allColors.length),n=this.props.allColors[a];e.includes(n)?t--:e.push(n,n)}for(var i=[];e.length>0;){var r=Math.floor(Math.random()*e.length);i.push(e[r]),e.splice(r,1)}return i}},{key:"createTileObjects",value:function(){return this.getRandomColors().map((function(e,t){return{id:t,color:e,status:"hidden",enabled:!0}}))}},{key:"handleMatch",value:function(e,t,a){var n=this;if(a){var i=this.show(e);this.state.halfPair?(this.setState({tiles:i,halfPair:!1}),this.state.matchedColor===t?(i=this.state.tiles.map((function(e){return"shown"===e.status&&(e.status="matched"),e})),i=this.enable(!1,"matched"),this.setState({tiles:i})):(this.enable(!1,"shown"),this.enable(!1,"hidden"),this.setState({tiles:i}),setTimeout((function(){i=n.enable(!0,"shown"),i=n.enable(!0,"hidden"),i=n.hide("shown"),n.setState({tiles:i})}),1e3))):(this.enable(!1,"shown"),this.setState({halfPair:!0,matchedColor:t,tiles:i}))}}},{key:"show",value:function(e){return this.state.tiles.map((function(t){return e===t.id&&(t.status="shown"),t}))}},{key:"hide",value:function(e){return this.state.tiles.map((function(t){return e?t.status===e&&(t.status="hidden"):t.status="hidden",t}))}},{key:"enable",value:function(e,t){return this.state.tiles.map((function(a){return a.status===t&&(a.enabled=e),a}))}},{key:"newGame",value:function(){this.setState({tiles:this.createTileObjects(),halfPair:!1,matchedColor:""})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,{newGame:this.newGame}),i.a.createElement(k,{tiles:this.state.tiles,handleMatch:this.handleMatch}))}}]),t}(n.Component);f.defaultProps={allColors:["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]};var b=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.05792d4b.chunk.js.map