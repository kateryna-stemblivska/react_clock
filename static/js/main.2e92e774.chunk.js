(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=n.n(s),h=(n(12),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({today:new Date}),console.info((new Date).toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.today;return Object(h.jsxs)("div",{className:"Clock",children:[Object(h.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(h.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var d=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.intervalGenerateClockName=0,e.handleRightClick=function(){document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})}))},e.handleClick=function(){document.addEventListener("click",(function(t){t.preventDefault(),e.setState({hasClock:!0})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalGenerateClockName=window.setInterval((function(){e.setState({clockName:k()})}),3300),this.handleRightClick(),this.handleClick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalGenerateClockName),document.removeEventListener("click",this.handleClick),document.removeEventListener("contextmenu",this.handleRightClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),t&&Object(h.jsx)(m,{clockName:n})]})}}]),n}(u.a.Component);a.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2e92e774.chunk.js.map