webpackJsonp([2],{115:function(t,e,i){"use strict";(function(t){var o=i(2),n=i.n(o),l=t||n.a,r=l.import("attributors/style/size"),s=["10px","12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","34px","36px"];r.whitelist=s;var a=l.import("parchment"),p=["1.0","1.2","1.4","1.6","1.8","2.0","2.4","2.6","2.8","3.0","4.0","5.0"],d={scope:a.Scope.INLINE,whitelist:p},u=new a.Attributor.Class("lineheight","ql-lineheight",d),c=new a.Attributor.Style("lineheight","line-height",d),h=["0px","1px","2px","3px","4px","5px","6px","7px","8px","9px","10px"],g={scope:a.Scope.INLINE,whitelist:h},f=new a.Attributor.Class("letterspacing","ql-letterspacing",g),m=new a.Attributor.Style("letterspacing","letter-spacing",g),y=function(){l.register(r,!0),a.register(u),a.register(c),a.register(f),a.register(m)};e.a={sizeList:s,sizeStyle:r,lineHeightClass:u,lineHeightStyle:c,lineHeightList:p,letterSpacingClass:f,letterSpacingStyle:m,letterSpacingList:h,register:y}}).call(e,i(2))},116:function(t,e,i){"use strict";e.a={theme:"snow",boundary:document.body,modules:{imageResize:{modules:["Resize","DisplaySize"]},toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:[!1,"10px","12px","14px","16px","18px","20px","22px","24px","26px","28px","30px","32px","34px","36px"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],[{lineheight:["1.0","1.2","1.5","1.6","1.8","2.0","2.4","2.8","3.0","4.0","5.0"]}],[{letterspacing:["0px","1px","2px","3px","4px","5px","6px","7px","8px","9px","10px"]}]]},placeholder:"Insert text here ...",readOnly:!1}},118:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){i.d(e,"Quill",function(){return s}),i.d(e,"install",function(){return a});var o=i(2),n=i.n(o),l=i(55),r=i.n(l);i.d(e,"quillEditor",function(){return r.a});var s=t||n.a,a=function(t,e){e&&(r.a.props.globalOptions.default=function(){return e}),t.component(r.a.name,r.a)},p={Quill:s,quillEditor:r.a,install:a};e.default=p}.call(e,i(2))},119:function(t,e,i){"use strict";e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px solid red",backgroundColor:"rgba(255,255,255,0.5)"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"red",border:"1px solid red",boxSizing:"border-box",opacity:"0.80"},cropBtnStyles:{backgroundColor:"#cccccc",width:"80px",height:"30px",position:"absolute",lineHeight:"30px",cursor:"pointer",textAlign:"center",borderRadius:"5px"},btnResizeStyles:{backgroundColor:"#cccccc",width:"80px",height:"30px",position:"absolute",lineHeight:"30px",cursor:"pointer",textAlign:"center",borderRadius:"5px"}}},120:function(t,e,i){"use strict";(function(t){var o=i(16),n=i.n(o),l=i(17),r=i.n(l),s=i(132),a=i.n(s),p=i(241),d=i.n(p),u=i(119),c=i(121),h=i(123),g=i(122),f={DisplaySize:c.a,Toolbar:h.a,Resize:g.a},m=function(){function e(i){var o=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r()(this,e),this.initializeModules=function(){o.removeModules(),o.modules=o.moduleClasses.map(function(t){return new(f[t]||t)(o)}),o.modules.forEach(function(t){t.onCreate()}),o.onUpdate()},this.onUpdate=function(){o.repositionElements(),o.modules.forEach(function(t){t.onUpdate()})},this.removeModules=function(){o.modules.forEach(function(t){t.onDestroy()}),o.modules=[]},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(o.img===t.target)return;o.img&&o.hide(),o.show(t.target)}else o.img&&o.hide()},this.show=function(t){o.img=t,o.showOverlay(),o.initializeModules()},this.onCropBtnClick=function(){"crop"===o.options.mode?o.doCrop():(o.options.mode="crop",o.cropBtn.innerText="确认裁剪",o.btnResize.style.display="none")},this.doCrop=function(){o.cropBtn.innerText="裁剪中";var t=new Image;t.setAttribute("crossOrigin","Anonymous"),t.crossOrigin="Anonymous",t.src=o.img.src,t.onload=function(){var e=document.createElement("canvas"),i=o.overlay.getBoundingClientRect(),n=o.img.getBoundingClientRect(),l=n.width/o.img.naturalWidth;e.width=i.width,e.height=i.height,e.getContext("2d").drawImage(t,i.left-n.left,i.top-n.top,i.width/l,i.height/l,0,0,e.width,e.height),o.options.upload&&e.toBlob(function(t){o.options.upload(t,function(t){o.img.src=t,o.hide()})})}},this.onScroll=function(t){o.scrollTop=t.target.scrollTop,o.repositionElements()},this.repositionBtnCrop=function(t,e,i){var l={left:e.left-t.left-1+i.scrollLeft+e.width-5-80+"px",top:e.top-t.top+i.scrollTop+10+"px"};n()(o.cropBtn.style,l)},this.repositionBtnResize=function(t,e,i){var l={left:e.left-t.left-1+i.scrollLeft+e.width-5-80+"px",top:e.top-t.top+i.scrollTop+10+40+"px"};n()(o.btnResize.style,l)},this.showOverlay=function(){o.overlay&&o.hideOverlay();var t=o.img.getBoundingClientRect();o.position={left:t.left,top:t.top,width:t.width,height:t.height},o.quill.setSelection(null),o.setUserSelect("none"),document.addEventListener("keyup",o.checkImage,!0),o.quill.root.addEventListener("input",o.checkImage,!0),o.quill.root.addEventListener("scroll",o.onScroll,!1),o.overlay=document.createElement("div"),n()(o.overlay.style,o.options.overlayStyles),o.quill.root.parentNode.appendChild(o.overlay),o.cropBtn=document.createElement("div"),o.cropBtn.innerText="裁剪图片",o.btnResize=document.createElement("div"),o.btnResize.innerHTML="调整大小",n()(o.cropBtn.style,o.options.cropBtnStyles),n()(o.btnResize.style,o.options.btnResizeStyles),o.quill.root.parentNode.appendChild(o.cropBtn),o.quill.root.parentNode.appendChild(o.btnResize),o.repositionElements(),o.cropBtn.addEventListener("click",o.onCropBtnClick),o.btnResize.addEventListener("click",o.onBtnResizeClick)},this.onBtnResizeClick=function(t){"resize"===o.options.mode?o.hide():(o.options.mode="resize",o.btnResize.innerText="确认大小",o.cropBtn.style.display="none")},this.hideOverlay=function(){o.overlay&&(o.quill.root.parentNode.removeChild(o.overlay),o.overlay=void 0,o.quill.root.parentNode.removeChild(o.cropBtn),o.cropBtn=void 0,o.quill.root.parentNode.removeChild(o.btnResize),o.btnResize=void 0,o.options.mode=void 0,document.removeEventListener("keyup",o.checkImage),o.quill.root.removeEventListener("input",o.checkImage),o.quill.root.removeEventListener("scroll",o.onScroll),o.setUserSelect(""))},this.repositionElements=function(){o.overlay&&o.img&&("crop"===o.options.mode?o.repositionCrop():(o.options.mode,o.repositionResize()))},this.repositionResize=function(){var t=o.quill.root.parentNode,e=o.img.getBoundingClientRect(),i=t.getBoundingClientRect();n()(o.overlay.style,{left:e.left-i.left-1+t.scrollLeft+"px",top:e.top-i.top+t.scrollTop+"px",width:e.width+"px",height:e.height+"px"}),o.repositionBtnCrop(i,e,t),o.repositionBtnResize(i,e,t)},this.repositionCrop=function(){var t=o.quill.root.parentNode,e=o.img.getBoundingClientRect(),i=o.position;i.top=o.position.top?o.position.top:e.top,i.left=o.position.left?o.position.left:e.left;var l=t.getBoundingClientRect(),r={left:i.left-l.left-1+t.scrollLeft,top:i.top-l.top+t.scrollTop,width:i.width,height:i.height};console.log("top",o.position.top),console.log(r);var s={left:i.left-l.left-1+t.scrollLeft+"px",top:i.top-l.top+t.scrollTop+"px",width:i.width+"px",height:i.height+"px"};n()(o.overlay.style,s),o.repositionBtnCrop(l,i,t),o.repositionBtnResize(l,i,t)},this.hide=function(){o.hideOverlay(),o.removeModules(),o.img=void 0},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(e){o.quill.root.style[e]=t,document.documentElement.style[e]=t})},this.checkImage=function(e){o.img&&(46!==e.keyCode&&8!==e.keyCode||t.find(o.img).deleteAt(0),o.hide())},this.quill=i;var s=!1;l.modules&&(s=l.modules.slice()),this.options=d()({},l,u.a),!1!==s&&(this.options.modules=s),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,this.modules=[]}return a()(e,[{key:"data2blob",value:function(t){for(var e=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],o=new ArrayBuffer(e.length),n=new Uint8Array(o),l=0;l<e.length;l++)n[l]=e.charCodeAt(l);return new Blob([n],{type:i})}}]),e}();e.a=m,t&&t.register("modules/imageResize",m)}).call(e,i(2))},121:function(t,e,i){"use strict";i.d(e,"a",function(){return g});var o=i(16),n=i.n(o),l=i(34),r=i.n(l),s=i(17),a=i.n(s),p=i(36),d=i.n(p),u=i(35),c=i.n(u),h=i(33),g=function(t){function e(){var t,i,o,l;a()(this,e);for(var s=arguments.length,p=Array(s),u=0;u<s;u++)p[u]=arguments[u];return i=o=d()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(p))),o.onCreate=function(){o.display=document.createElement("div"),n()(o.display.style,o.options.displayStyles),o.overlay.appendChild(o.display)},o.onDestroy=function(){},o.onUpdate=function(){if(o.display&&o.overlay){var t=o.getCurrentSize();if(o.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)n()(o.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"===o.overlay.style.float){var e=o.display.getBoundingClientRect();n()(o.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"})}else{var i=o.display.getBoundingClientRect();n()(o.display.style,{right:"-"+(i.width+4)+"px",bottom:"-"+(i.height+4)+"px",left:"auto"})}}},o.getCurrentSize=function(){return[o.overlay.getBoundingClientRect().width,o.overlay.getBoundingClientRect().height]},l=i,d()(o,l)}return c()(e,t),e}(h.a)},122:function(t,e,i){"use strict";i.d(e,"a",function(){return g});var o=i(16),n=i.n(o),l=i(34),r=i.n(l),s=i(17),a=i.n(s),p=i(36),d=i.n(p),u=i(35),c=i.n(u),h=i(33),g=function(t){function e(){var t,i,o,l;a()(this,e);for(var s=arguments.length,p=Array(s),u=0;u<s;u++)p[u]=arguments[u];return i=o=d()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(p))),o.onCreate=function(){o.boxes=[],o.addBox("nwse-resize"),o.addBox("nesw-resize"),o.addBox("nwse-resize"),o.addBox("nesw-resize"),o.positionBoxes()},o.onDestroy=function(){o.setCursor("")},o.positionBoxes=function(){var t=-parseFloat(o.options.handleStyles.width)/2+"px",e=-parseFloat(o.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach(function(t,e){n()(o.boxes[e].style,t)})},o.addBox=function(t){var e=document.createElement("div");n()(e.style,o.options.handleStyles),e.style.cursor=t,e.style.width=o.options.handleStyles.width+"px",e.style.height=o.options.handleStyles.height+"px",e.addEventListener("mousedown",o.handleMousedown,!1),o.overlay.appendChild(e),o.boxes.push(e)},o.handleMousedown=function(t){o.dragBox=t.target,o.dragStartX=t.clientX,o.dragStartY=t.clientY,"crop"===o.options.mode?o.preDrag=n()({},o.position):o.preDrag=n()({},{width:o.img.width}),o.setCursor(o.dragBox.style.cursor),document.addEventListener("mousemove",o.handleDrag,!1),document.addEventListener("mouseup",o.handleMouseup,!1)},o.handleMouseup=function(){o.setCursor(""),document.removeEventListener("mousemove",o.handleDrag),document.removeEventListener("mouseup",o.handleMouseup)},o.handleDrag=function(t){o.img&&("resize"===o.options.mode?o.handleModeResize(t):"crop"===o.options.mode&&o.handleModeCrop(t),o.requestUpdate())},o.handleModeCrop=function(t){var e=t.clientX-o.dragStartX,i=t.clientY-o.dragStartY,n=o.position.width,l=o.position.height,r=o.position.top,s=o.position.left,a=o.img.getBoundingClientRect();o.dragBox===o.boxes[0]&&(n=Math.round(o.preDrag.width-e),l=Math.round(o.preDrag.height-i),s=Math.round(o.preDrag.left+e),r=Math.round(o.preDrag.top+i),s<a.left&&(s=a.left),r<a.top&&(r=a.top),r>a.top+a.height-20&&(r=a.top+a.height-20),s>a.left+a.width-20&&(s=a.left+a.width-20)),o.dragBox===o.boxes[1]&&(n=Math.round(o.preDrag.width+e),l=Math.round(o.preDrag.height-i),r=Math.round(o.preDrag.top+i),r<a.top&&(r=a.top),s+n>a.width+a.left&&(n=a.width+a.left-s),r>a.top+a.height-20&&(r=a.top+a.height-20)),o.dragBox===o.boxes[2]&&(n=Math.round(o.preDrag.width+e),l=Math.round(o.preDrag.height+i),s+n>a.width+a.left&&(n=a.width+a.left-s),r+l>a.top+a.height&&(l=a.height+a.top-r)),o.dragBox===o.boxes[3]&&(n=Math.round(o.preDrag.width-e),l=Math.round(o.preDrag.height+i),s=Math.round(o.preDrag.left+e),s<a.left&&(s=a.left),r+l>a.top+a.height&&(l=a.height+a.top-r),s>a.left+a.width-20&&(s=a.left+a.width-20)),n<20&&(n=20),l<20&&(l=20),n>a.width&&(n=a.width),l>a.height&&(l=a.height),s<a.left&&(s=a.left),r<a.top&&(r=a.top),o.position.width=n,o.position.height=l,o.position.top=r,o.position.left=s},o.handleModeResize=function(t){var e=t.clientX-o.dragStartX;o.dragBox===o.boxes[0]||o.dragBox===o.boxes[3]?o.img.width=Math.round(o.preDrag.width-e):o.img.width=Math.round(o.preDrag.width+e)},o.setCursor=function(t){[document.body,o.img].forEach(function(e){e.style.cursor=t})},l=i,d()(o,l)}return c()(e,t),e}(h.a)},123:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return B});var o=i(16),n=i.n(o),l=i(34),r=i.n(l),s=i(17),a=i.n(s),p=i(36),d=i.n(p),u=i(35),c=i.n(u),h=i(248),g=i.n(h),f=i(247),m=i.n(f),y=i(249),x=i.n(y),v=i(33),b=t.imports.parchment,w=new b.Attributor.Style("float","float"),C=new b.Attributor.Style("margin","margin"),q=new b.Attributor.Style("display","display"),B=function(t){function e(){var t,i,o,l;a()(this,e);for(var s=arguments.length,p=Array(s),u=0;u<s;u++)p[u]=arguments[u];return i=o=d()(this,(t=e.__proto__||r()(e)).call.apply(t,[this].concat(p))),o.onCreate=function(){o.toolbar=document.createElement("div"),n()(o.toolbar.style,o.options.toolbarStyles),o.overlay.appendChild(o.toolbar),o._defineAlignments(),o._addToolbarButtons()},o.onDestroy=function(){},o.onUpdate=function(){},o._defineAlignments=function(){o.alignments=[{icon:g.a,apply:function(){q.add(o.img,"inline"),w.add(o.img,"left"),C.add(o.img,"0 1em 1em 0")},isApplied:function(){return"left"===w.value(o.img)}},{icon:m.a,apply:function(){q.add(o.img,"block"),w.remove(o.img),C.add(o.img,"auto")},isApplied:function(){return"auto"===C.value(o.img)}},{icon:x.a,apply:function(){q.add(o.img,"inline"),w.add(o.img,"right"),C.add(o.img,"0 0 1em 1em")},isApplied:function(){return"right"===w.value(o.img)}}]},o._addToolbarButtons=function(){var t=[];o.alignments.forEach(function(e,i){var l=document.createElement("span");t.push(l),l.innerHTML=e.icon,l.addEventListener("click",function(){t.forEach(function(t){return t.style.filter=""}),e.isApplied()?(w.remove(o.img),C.remove(o.img),q.remove(o.img)):(o._selectButton(l),e.apply()),o.requestUpdate()}),n()(l.style,o.options.toolbarButtonStyles),i>0&&(l.style.borderLeftWidth="0"),n()(l.children[0].style,o.options.toolbarButtonSvgStyles),e.isApplied()&&o._selectButton(l),o.toolbar.appendChild(l)})},o._selectButton=function(t){t.style.filter="invert(20%)"},l=i,d()(o,l)}return c()(e,t),e}(v.a)}).call(e,i(2))},125:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var o=i(126),n=i.n(o),l=i(16),r=i.n(l),s=i(180),a=i.n(s),p=i(2),d=i.n(p),u=i(116),c=i(120),h=i(115),g=t||d.a;g.register("modules/imageResize",c.a),h.a.register(),"function"!=typeof r.a&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])}return i},writable:!0,configurable:!0}),e.default={name:"quill-editor",data:function(){return{_options:{},_content:"",defaultOptions:u.a}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{toJSON:function(t){return JSON.parse(n()(t))},initialize:function(){var t=this;this.$el&&(this._options=a()({},this.defaultOptions,this.globalOptions,this.options),this.quill=new g(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on("selection-change",function(e){e?t.$emit("focus",t.quill):t.$emit("blur",t.quill)}),this.quill.on("text-change",function(e,i,o){var n=t.$refs.editor.children[0].innerHTML,l=t.quill,r=t.quill.getText();"<p><br></p>"===n&&(n=""),t._content=n,t.$emit("input",t._content),t.$emit("change",{html:n,text:r,quill:l})}),this.$emit("ready",this.quill))}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}}}.call(e,i(2))},247:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},248:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},249:function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quill-editor"},[t._t("toolbar"),t._v(" "),i("div",{ref:"editor"})],2)},staticRenderFns:[]}},33:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var o=i(17),n=i.n(o),l=function t(e){n()(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=e.overlay,this.position=e.position,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}},55:function(t,e,i){var o=i(54)(i(125),i(253),null,null,null);t.exports=o.exports}},[118]);
//# sourceMappingURL=vue-quill-editor-ext.f7ab0c4b0612b88f885d.js.map