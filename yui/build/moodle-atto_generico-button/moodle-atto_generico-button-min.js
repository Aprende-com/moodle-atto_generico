YUI.add("moodle-atto_generico-button",function(e,t){var n="atto_generico",r="atto_generico",i={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",KEYBUTTON:"atto_generico_templatebutton",HEADERTEXT:"atto_generico_headertext",TEMPLATEVARIABLE:"atto_generico_templatevariable",FLAVORCONTROL:"flavorcontrol"},s={FLAVORCONTROL:".flavorcontrol"},o='<div id="{{elementid}}_{{innerform}}" class="mdl-align"><h4 class="'+i.HEADERTEXT+'">{{headertext}} {{key}}</h4>'+"</div>",u='<div id="{{elementid}}_{{innerform}}" class="mdl-align"><h4 class="'+i.HEADERTEXT+'">{{headertext}}</h4>'+"</div>",a='<div id="{{elementid}}_{{innerform}}" class="mdl-align"><button class="'+i.KEYBUTTON+'_{{templateindex}}">{{key}}</button>'+"</div>",f='<div id="{{elementid}}_{{innerform}}" class="mdl-align">{{variable}}<input type="text" class="'+i.TEMPLATEVARIABLE+'_{{variableindex}}" value="{{defaultvalue}}"></input>'+"</div>",l='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align"><button class="'+i.INPUTSUBMIT+'">{{inserttext}}</button>'+"</div>"+"</form>";e.namespace("M.atto_generico").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,initializer:function(){if(this.get("disabled"))return;var t=["iconone","icontwo"];e.Array.each(t,function(e){this.addButton({icon:"ed/"+e,iconComponent:"atto_generico",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},this)},_getFlavorControlName:function(){return this.get("host").get("elementid")+"_"+FLAVORCONTROL},_displayDialogue:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=e.Node.create("<div></div>"),a=e.Handlebars.compile(u),f=e.Node.create(a({headertext:M.util.get_string("chooseinsert",n)}));o.append(f);var l=this._getButtonsForKeys(r);e.Array.each(l,function(e){o.append(e)},o),s.set("bodyContent",o),s.show(),this.markUpdated()},_showTemplateForm:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px"});s.width!==i+"px"&&s.set("width",i+"px");var u=this._getTemplateFields(r);if(u&&u.length>0)var a=M.util.get_string("fieldsheader",n);else var a=M.util.get_string("nofieldsheader",n);var f=e.Handlebars.compile(o),l=e.Node.create(f({key:this.get("keys")[r],headertext:a})),c=l,h=e.Node.create("<div></div>");h.append(c),e.Array.each(u,function(e){h.append(e)},h);var p=this._getSubmitButtons(r);h.append(p),s.set("bodyContent",h),s.show(),this.markUpdated()},_getSubmitButtons:function(t){var r=e.Handlebars.compile(l),s=e.Node.create(r({elementid:this.get("host").get("elementid"),inserttext:M.util.get_string("insert",n)}));return s.one("."+i.INPUTSUBMIT).on("click",this._doInsert,this,t),s},_getTemplateFields:function(t){var n=[],r=this.get("keys")[t],i=this.get("variables")[t],s=this.get("defaults")[t],o=this._getDefArray(s);return e.Array.each(i,function(t,r){var i=e.Handlebars.compile(f),s=e.Node.create(i({elementid:this.get("host").get("elementid"),variable:t,defaultvalue:o[t],variableindex:r}));n.push(s)},this),n},_getButtonsForKeys:function(t){var n=[];return e.Array.each(this.get("keys"),function(t,r){var s=e.Handlebars.compile(a),o=e.Node.create(s({elementid:this.get("host").get("elementid"),key:t,templateindex:r}));this._form=o,o.one("."+i.KEYBUTTON+"_"+r).on("click",this._showTemplateForm,this,r),n.push(o)},this),n},_getDefArray:function(t){var n=[],r=t.split(",");return e.Array.each(r,function(e){var t=e.split("=");t&&t.length>1&&(n[t[0]]=t[1])},this),n},_doInsert:function(t,n){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var r="{GENERICO:type=",s=this.get("keys")[n],o=this.get("variables")[n],u=this.get("defaults")[n],a=this._getDefArray(u);r+=s,e.Array.each(o,function(t,n){var s=e.one("."+i.TEMPLATEVARIABLE+"_"+n),o=s.get("value");o&&o!=a[t]&&(r+=","+t+"="+o)},this),r+="}",this.editor.focus(),this.get("host").insertContentAtFocusPoint(r),this.markUpdated()}},{ATTRS:{disabled:{value:!1},keys:{value:null},variables:{value:null},defaults:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});