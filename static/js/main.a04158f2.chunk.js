(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t){e.exports=[{label:"Genre",key:"genre",dataSource:"data/genres.json"},{label:"Mood",key:"mood",dataSource:"data/moods.json"},{label:"Tempo",key:"tempo",dataSource:"data/tempos.json"}]},29:function(e,t,a){e.exports=a(53)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),r=a.n(o),c=(a(34),a(9)),i=a(10),u=a(12),s=a(11),d=a(14),m=(a(35),a(13)),p=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={selectedOption:null},a.handleChange=function(e){a.setState({selectedOption:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.dataSource).then(function(e){return e.json()}).then(function(t){p=t.map(function(e){return{label:e,value:e}}),e.setState({options:p})})}},{key:"render",value:function(){var e=this.state.selectedOption;return l.a.createElement(m.a,{options:p,value:e,onChange:this.handleChange})}}]),t}(n.Component),b=(a(52),a(18)),v=a.n(b),f=a(55),w=a(56),y=a(57);console.log(v.a);var E=[{value:"artist",label:"Artist"},{value:"writer",label:"Writer"},{value:"title",label:"Title"},{value:"album",label:"Album"}],g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={selectedOption:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(w.a,null,l.a.createElement(y.a,{md:4},l.a.createElement(m.a,{options:E})),l.a.createElement(y.a,{md:8},l.a.createElement("input",{type:"text",className:"search"}))),l.a.createElement(w.a,null,l.a.createElement(y.a,{md:4},v.a.map(function(e){return l.a.createElement("div",null,l.a.createElement("label",null,e.label),l.a.createElement(h,{dataSource:e.dataSource,key:e.key}))})),l.a.createElement(y.a,{md:8},"Content")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.a04158f2.chunk.js.map