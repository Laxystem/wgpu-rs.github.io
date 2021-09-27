if(!String.prototype.startsWith){String.prototype.startsWith=function(searchString,position){position=position||0;return this.indexOf(searchString,position)===position}}if(!String.prototype.endsWith){String.prototype.endsWith=function(suffix,length){var l=length||this.length;return this.indexOf(suffix,l-suffix.length)!==-1}}if(!DOMTokenList.prototype.add){DOMTokenList.prototype.add=function(className){if(className&&!hasClass(this,className)){if(this.className&&this.className.length>0){this.className+=" "+className}else{this.className=className}}}}if(!DOMTokenList.prototype.remove){DOMTokenList.prototype.remove=function(className){if(className&&this.className){this.className=(" "+this.className+" ").replace(" "+className+" "," ").trim()}}}(function(){var rustdocVars=document.getElementById("rustdoc-vars");if(rustdocVars){window.rootPath=rustdocVars.attributes["data-root-path"].value;window.currentCrate=rustdocVars.attributes["data-current-crate"].value;window.searchJS=rustdocVars.attributes["data-search-js"].value;window.searchIndexJS=rustdocVars.attributes["data-search-index-js"].value}var sidebarVars=document.getElementById("sidebar-vars");if(sidebarVars){window.sidebarCurrent={name:sidebarVars.attributes["data-name"].value,ty:sidebarVars.attributes["data-ty"].value,relpath:sidebarVars.attributes["data-relpath"].value,}}}());function getVirtualKey(ev){if("key"in ev&&typeof ev.key!="undefined"){return ev.key}var c=ev.charCode||ev.keyCode;if(c==27){return"Escape"}return String.fromCharCode(c)}var THEME_PICKER_ELEMENT_ID="theme-picker";var THEMES_ELEMENT_ID="theme-choices";function getThemesElement(){return document.getElementById(THEMES_ELEMENT_ID)}function getThemePickerElement(){return document.getElementById(THEME_PICKER_ELEMENT_ID)}function getNakedUrl(){return window.location.href.split("?")[0].split("#")[0]}function showThemeButtonState(){var themePicker=getThemePickerElement();var themeChoices=getThemesElement();themeChoices.style.display="block";themePicker.style.borderBottomRightRadius="0";themePicker.style.borderBottomLeftRadius="0"}function hideThemeButtonState(){var themePicker=getThemePickerElement();var themeChoices=getThemesElement();themeChoices.style.display="none";themePicker.style.borderBottomRightRadius="3px";themePicker.style.borderBottomLeftRadius="3px"}(function(){var themeChoices=getThemesElement();var themePicker=getThemePickerElement();var availableThemes=["ayu","dark","light"];function switchThemeButtonState(){if(themeChoices.style.display==="block"){hideThemeButtonState()}else{showThemeButtonState()}}function handleThemeButtonsBlur(e){var active=document.activeElement;var related=e.relatedTarget;if(active.id!==THEME_PICKER_ELEMENT_ID&&(!active.parentNode||active.parentNode.id!==THEMES_ELEMENT_ID)&&(!related||(related.id!==THEME_PICKER_ELEMENT_ID&&(!related.parentNode||related.parentNode.id!==THEMES_ELEMENT_ID)))){hideThemeButtonState()}}themePicker.onclick=switchThemeButtonState;themePicker.onblur=handleThemeButtonsBlur;availableThemes.forEach(function(item){var but=document.createElement("button");but.textContent=item;but.onclick=function(){switchTheme(window.currentTheme,window.mainTheme,item,true);useSystemTheme(false)};but.onblur=handleThemeButtonsBlur;themeChoices.appendChild(but)})}());(function(){"use strict";window.searchState={loadingText:"Loading search results...",input:document.getElementsByClassName("search-input")[0],outputElement:function(){return document.getElementById("search")},title:document.title,titleBeforeSearch:document.title,timeout:null,currentTab:0,focusedByTab:[null,null,null],clearInputTimeout:function(){if(searchState.timeout!==null){clearTimeout(searchState.timeout);searchState.timeout=null}},focus:function(){searchState.input.focus()},defocus:function(){searchState.input.blur()},showResults:function(search){if(search===null||typeof search==='undefined'){search=searchState.outputElement()}addClass(main,"hidden");removeClass(search,"hidden");searchState.mouseMovedAfterSearch=false;document.title=searchState.title},hideResults:function(search){if(search===null||typeof search==='undefined'){search=searchState.outputElement()}addClass(search,"hidden");removeClass(main,"hidden");document.title=searchState.titleBeforeSearch;if(searchState.browserSupportsHistoryApi()){history.replaceState("",window.currentCrate+" - Rust",getNakedUrl()+window.location.hash)}},getQueryStringParams:function(){var params={};window.location.search.substring(1).split("&").map(function(s){var pair=s.split("=");params[decodeURIComponent(pair[0])]=typeof pair[1]==="undefined"?null:decodeURIComponent(pair[1])});return params},putBackSearch:function(search_input){var search=searchState.outputElement();if(search_input.value!==""&&hasClass(search,"hidden")){searchState.showResults(search);if(searchState.browserSupportsHistoryApi()){var extra="?search="+encodeURIComponent(search_input.value);history.replaceState(search_input.value,"",getNakedUrl()+extra+window.location.hash)}document.title=searchState.title}},browserSupportsHistoryApi:function(){return window.history&&typeof window.history.pushState==="function"},setup:function(){var search_input=searchState.input;if(!searchState.input){return}function loadScript(url){var script=document.createElement('script');script.src=url;document.head.append(script)}var searchLoaded=false;function loadSearch(){if(!searchLoaded){searchLoaded=true;loadScript(window.searchJS);loadScript(window.searchIndexJS)}}search_input.addEventListener("focus",function(){searchState.putBackSearch(this);search_input.origPlaceholder=searchState.input.placeholder;search_input.placeholder="Type your search here.";loadSearch()});search_input.addEventListener("blur",function(){search_input.placeholder=searchState.input.origPlaceholder});search_input.removeAttribute('disabled');searchState.addCrateDropdown(window.ALL_CRATES);var params=searchState.getQueryStringParams();if(params.search!==undefined){var search=searchState.outputElement();search.innerHTML="<h3 style=\"text-align: center;\">"+searchState.loadingText+"</h3>";searchState.showResults(search);loadSearch()}},addCrateDropdown:function(crates){var elem=document.getElementById("crate-search");if(!elem){return}var savedCrate=getSettingValue("saved-filter-crate");for(var i=0,len=crates.length;i<len;++i){var option=document.createElement("option");option.value=crates[i];option.innerText=crates[i];elem.appendChild(option);if(crates[i]===savedCrate){elem.value=savedCrate}}},};function getPageId(){if(window.location.hash){var tmp=window.location.hash.replace(/^#/,"");if(tmp.length>0){return tmp}}return null}function showSidebar(){var elems=document.getElementsByClassName("sidebar-elems")[0];if(elems){addClass(elems,"show-it")}var sidebar=document.getElementsByClassName("sidebar")[0];if(sidebar){addClass(sidebar,"mobile");var filler=document.getElementById("sidebar-filler");if(!filler){var div=document.createElement("div");div.id="sidebar-filler";sidebar.appendChild(div)}}}function hideSidebar(){var elems=document.getElementsByClassName("sidebar-elems")[0];if(elems){removeClass(elems,"show-it")}var sidebar=document.getElementsByClassName("sidebar")[0];removeClass(sidebar,"mobile");var filler=document.getElementById("sidebar-filler");if(filler){filler.remove()}document.getElementsByTagName("body")[0].style.marginTop=""}var toggleAllDocsId="toggle-all-docs";var main=document.getElementById("main");var savedHash="";function handleHashes(ev){var elem;var search=searchState.outputElement();if(ev!==null&&search&&!hasClass(search,"hidden")&&ev.newURL){searchState.hideResults(search);var hash=ev.newURL.slice(ev.newURL.indexOf("#")+1);if(searchState.browserSupportsHistoryApi()){history.replaceState(hash,"",getNakedUrl()+window.location.search+"#"+hash)}elem=document.getElementById(hash);if(elem){elem.scrollIntoView()}}if(savedHash!==window.location.hash){savedHash=window.location.hash;if(savedHash.length===0){return}expandSection(savedHash.slice(1))}}function onHashChange(ev){hideSidebar();handleHashes(ev)}function openParentDetails(elem){while(elem){if(elem.tagName==="DETAILS"){elem.open=true}elem=elem.parentNode}}function expandSection(id){openParentDetails(document.getElementById(id))}function getHelpElement(build){if(build){buildHelperPopup()}return document.getElementById("help")}function displayHelp(display,ev,help){if(display){help=help?help:getHelpElement(true);if(hasClass(help,"hidden")){ev.preventDefault();removeClass(help,"hidden");addClass(document.body,"blur")}}else{help=help?help:getHelpElement(false);if(help&&!hasClass(help,"hidden")){ev.preventDefault();addClass(help,"hidden");removeClass(document.body,"blur")}}}function handleEscape(ev){var help=getHelpElement(false);var search=searchState.outputElement();if(help&&!hasClass(help,"hidden")){displayHelp(false,ev,help)}else if(search&&!hasClass(search,"hidden")){searchState.clearInputTimeout();ev.preventDefault();searchState.hideResults(search)}searchState.defocus();hideThemeButtonState()}var disableShortcuts=getSettingValue("disable-shortcuts")==="true";function handleShortcut(ev){if(ev.ctrlKey||ev.altKey||ev.metaKey||disableShortcuts){return}if(document.activeElement.tagName==="INPUT"){switch(getVirtualKey(ev)){case"Escape":handleEscape(ev);break}}else{switch(getVirtualKey(ev)){case"Escape":handleEscape(ev);break;case"s":case"S":displayHelp(false,ev);ev.preventDefault();searchState.focus();break;case"+":case"-":ev.preventDefault();toggleAllDocs();break;case"?":displayHelp(true,ev);break;case"t":case"T":displayHelp(false,ev);ev.preventDefault();var themePicker=getThemePickerElement();themePicker.click();themePicker.focus();break;default:if(getThemePickerElement().parentNode.contains(ev.target)){handleThemeKeyDown(ev)}}}}function handleThemeKeyDown(ev){var active=document.activeElement;var themes=getThemesElement();switch(getVirtualKey(ev)){case"ArrowUp":ev.preventDefault();if(active.previousElementSibling&&ev.target.id!==THEME_PICKER_ELEMENT_ID){active.previousElementSibling.focus()}else{showThemeButtonState();themes.lastElementChild.focus()}break;case"ArrowDown":ev.preventDefault();if(active.nextElementSibling&&ev.target.id!==THEME_PICKER_ELEMENT_ID){active.nextElementSibling.focus()}else{showThemeButtonState();themes.firstElementChild.focus()}break;case"Enter":case"Return":case"Space":if(ev.target.id===THEME_PICKER_ELEMENT_ID&&themes.style.display==="none"){ev.preventDefault();showThemeButtonState();themes.firstElementChild.focus()}break;case"Home":ev.preventDefault();themes.firstElementChild.focus();break;case"End":ev.preventDefault();themes.lastElementChild.focus();break}}document.addEventListener("keypress",handleShortcut);document.addEventListener("keydown",handleShortcut);(function(){var x=document.getElementsByClassName("version-selector");if(x.length>0){x[0].onchange=function(){var i,match,url=document.location.href,stripped="",len=window.rootPath.match(/\.\.\//g).length+1;for(i=0;i<len;++i){match=url.match(/\/[^/]*$/);if(i<len-1){stripped=match[0]+stripped}url=url.substring(0,url.length-match[0].length)}var selectedVersion=document.getElementsByClassName("version-selector")[0].value;url+="/"+selectedVersion+stripped;document.location.href=url}}}());window.initSidebarItems=function(items){var sidebar=document.getElementsByClassName("sidebar-elems")[0];var current=window.sidebarCurrent;function addSidebarCrates(crates){if(!hasClass(document.body,"crate")){return}var div=document.createElement("div");div.className="block crate";div.innerHTML="<h3>Crates</h3>";var ul=document.createElement("ul");div.appendChild(ul);for(var i=0;i<crates.length;++i){var klass="crate";if(window.rootPath!=="./"&&crates[i]===window.currentCrate){klass+=" current"}var link=document.createElement("a");link.href=window.rootPath+crates[i]+"/index.html";link.className=klass;link.textContent=crates[i];var li=document.createElement("li");li.appendChild(link);ul.appendChild(li)}sidebar.appendChild(div)}function block(shortty,longty){var filtered=items[shortty];if(!filtered){return}var div=document.createElement("div");div.className="block "+shortty;var h3=document.createElement("h3");h3.textContent=longty;div.appendChild(h3);var ul=document.createElement("ul");for(var i=0,len=filtered.length;i<len;++i){var item=filtered[i];var name=item[0];var desc=item[1];var klass=shortty;if(name===current.name&&shortty===current.ty){klass+=" current"}var path;if(shortty==="mod"){path=name+"/index.html"}else{path=shortty+"."+name+".html"}var link=document.createElement("a");link.href=current.relpath+path;link.title=desc;link.className=klass;link.textContent=name;var li=document.createElement("li");li.appendChild(link);ul.appendChild(li)}div.appendChild(ul);sidebar.appendChild(div)}if(sidebar){var isModule=hasClass(document.body,"mod");if(!isModule){block("primitive","Primitive Types");block("mod","Modules");block("macro","Macros");block("struct","Structs");block("enum","Enums");block("union","Unions");block("constant","Constants");block("static","Statics");block("trait","Traits");block("fn","Functions");block("type","Type Definitions");block("foreigntype","Foreign Types");block("keyword","Keywords");block("traitalias","Trait Aliases")}addSidebarCrates(window.ALL_CRATES)}};window.register_implementors=function(imp){var implementors=document.getElementById("implementors-list");var synthetic_implementors=document.getElementById("synthetic-implementors-list");if(synthetic_implementors){var inlined_types=new Set();onEachLazy(synthetic_implementors.getElementsByClassName("impl"),function(el){var aliases=el.getAttribute("data-aliases");if(!aliases){return}aliases.split(",").forEach(function(alias){inlined_types.add(alias)})})}var currentNbImpls=implementors.getElementsByClassName("impl").length;var traitName=document.querySelector("h1.fqn > .in-band > .trait").textContent;var baseIdName="impl-"+traitName+"-";var libs=Object.getOwnPropertyNames(imp);for(var i=0,llength=libs.length;i<llength;++i){if(libs[i]===window.currentCrate){continue}var structs=imp[libs[i]];struct_loop:for(var j=0,slength=structs.length;j<slength;++j){var struct=structs[j];var list=struct.synthetic?synthetic_implementors:implementors;if(struct.synthetic){for(var k=0,stlength=struct.types.length;k<stlength;k++){if(inlined_types.has(struct.types[k])){continue struct_loop}inlined_types.add(struct.types[k])}}var code=document.createElement("h3");code.innerHTML=struct.text;addClass(code,"code-header");addClass(code,"in-band");onEachLazy(code.getElementsByTagName("a"),function(elem){var href=elem.getAttribute("href");if(href&&href.indexOf("http")!==0){elem.setAttribute("href",window.rootPath+href)}});var currentId=baseIdName+currentNbImpls;var anchor=document.createElement("a");anchor.href="#"+currentId;addClass(anchor,"anchor");var display=document.createElement("div");display.id=currentId;addClass(display,"impl");display.appendChild(anchor);display.appendChild(code);list.appendChild(display);currentNbImpls+=1}}};if(window.pending_implementors){window.register_implementors(window.pending_implementors)}function labelForToggleButton(sectionIsCollapsed){if(sectionIsCollapsed){return"+"}return"\u2212"}function toggleAllDocs(){var innerToggle=document.getElementById(toggleAllDocsId);if(!innerToggle){return}var sectionIsCollapsed=false;if(hasClass(innerToggle,"will-expand")){removeClass(innerToggle,"will-expand");onEachLazy(document.getElementsByClassName("rustdoc-toggle"),function(e){if(!hasClass(e,"type-contents-toggle")){e.open=true}});innerToggle.title="collapse all docs"}else{addClass(innerToggle,"will-expand");onEachLazy(document.getElementsByClassName("rustdoc-toggle"),function(e){if(e.parentNode.id!=="main"||(!hasClass(e,"implementors-toggle")&&!hasClass(e,"type-contents-toggle"))){e.open=false}});sectionIsCollapsed=true;innerToggle.title="expand all docs"}innerToggle.children[0].innerText=labelForToggleButton(sectionIsCollapsed)}function insertAfter(newNode,referenceNode){referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)}(function(){var toggles=document.getElementById(toggleAllDocsId);if(toggles){toggles.onclick=toggleAllDocs}var hideMethodDocs=getSettingValue("auto-hide-method-docs")==="true";var hideImplementations=getSettingValue("auto-hide-trait-implementations")==="true";var hideLargeItemContents=getSettingValue("auto-hide-large-items")!=="false";function setImplementorsTogglesOpen(id,open){var list=document.getElementById(id);if(list!==null){onEachLazy(list.getElementsByClassName("implementors-toggle"),function(e){e.open=open})}}if(hideImplementations){setImplementorsTogglesOpen("trait-implementations-list",false);setImplementorsTogglesOpen("blanket-implementations-list",false)}onEachLazy(document.getElementsByClassName("rustdoc-toggle"),function(e){if(!hideLargeItemContents&&hasClass(e,"type-contents-toggle")){e.open=true}if(hideMethodDocs&&hasClass(e,"method-toggle")){e.open=false}});var pageId=getPageId();if(pageId!==null){expandSection(pageId)}}());(function(){var lineNumbersFunc=function(){};if(getSettingValue("line-numbers")==="true"){lineNumbersFunc=function(x){var count=x.textContent.split("\n").length;var elems=[];for(var i=0;i<count;++i){elems.push(i+1)}var node=document.createElement("pre");addClass(node,"line-number");node.innerHTML=elems.join("\n");x.parentNode.insertBefore(node,x)}}onEachLazy(document.getElementsByClassName("rust-example-rendered"),function(e){if(hasClass(e,"compile_fail")){e.addEventListener("mouseover",function(){this.parentElement.previousElementSibling.childNodes[0].style.color="#f00"});e.addEventListener("mouseout",function(){this.parentElement.previousElementSibling.childNodes[0].style.color=""})}else if(hasClass(e,"ignore")){e.addEventListener("mouseover",function(){this.parentElement.previousElementSibling.childNodes[0].style.color="#ff9200"});e.addEventListener("mouseout",function(){this.parentElement.previousElementSibling.childNodes[0].style.color=""})}lineNumbersFunc(e)})}());function handleClick(id,f){var elem=document.getElementById(id);if(elem){elem.addEventListener("click",f)}}handleClick("help-button",function(ev){displayHelp(true,ev)});onEachLazy(document.getElementsByTagName("a"),function(el){if(el.hash){el.addEventListener("click",function(){expandSection(el.hash.slice(1))})}});onEachLazy(document.getElementsByClassName("notable-traits"),function(e){e.onclick=function(){this.getElementsByClassName('notable-traits-tooltiptext')[0].classList.toggle("force-tooltip")}});var sidebar_menu=document.getElementsByClassName("sidebar-menu")[0];if(sidebar_menu){sidebar_menu.onclick=function(){var sidebar=document.getElementsByClassName("sidebar")[0];if(hasClass(sidebar,"mobile")){hideSidebar()}else{showSidebar()}}}var buildHelperPopup=function(){var popup=document.createElement("aside");addClass(popup,"hidden");popup.id="help";popup.addEventListener("click",function(ev){if(ev.target===popup){displayHelp(false,ev)}});var book_info=document.createElement("span");book_info.className="top";book_info.innerHTML="You can find more information in \
            <a href=\"https://doc.rust-lang.org/rustdoc/\">the rustdoc book</a>.";var container=document.createElement("div");var shortcuts=[["?","Show this help dialog"],["S","Focus the search field"],["T","Focus the theme picker menu"],["↑","Move up in search results"],["↓","Move down in search results"],["← / →","Switch result tab (when results focused)"],["&#9166;","Go to active search result"],["+","Expand all sections"],["-","Collapse all sections"],].map(function(x){return"<dt>"+x[0].split(" ").map(function(y,index){return(index&1)===0?"<kbd>"+y+"</kbd>":" "+y+" "}).join("")+"</dt><dd>"+x[1]+"</dd>"}).join("");var div_shortcuts=document.createElement("div");addClass(div_shortcuts,"shortcuts");div_shortcuts.innerHTML="<h2>Keyboard Shortcuts</h2><dl>"+shortcuts+"</dl></div>";var infos=["Prefix searches with a type followed by a colon (e.g., <code>fn:</code>) to \
             restrict the search to a given item kind.","Accepted kinds are: <code>fn</code>, <code>mod</code>, <code>struct</code>, \
             <code>enum</code>, <code>trait</code>, <code>type</code>, <code>macro</code>, \
             and <code>const</code>.","Search functions by type signature (e.g., <code>vec -&gt; usize</code> or \
             <code>* -&gt; vec</code>)","Search multiple things at once by splitting your query with comma (e.g., \
             <code>str,u8</code> or <code>String,struct:Vec,test</code>)","You can look for items with an exact name by putting double quotes around \
             your request: <code>\"string\"</code>","Look for items inside another one by searching for a path: <code>vec::Vec</code>",].map(function(x){return"<p>"+x+"</p>"}).join("");var div_infos=document.createElement("div");addClass(div_infos,"infos");div_infos.innerHTML="<h2>Search Tricks</h2>"+infos;container.appendChild(book_info);container.appendChild(div_shortcuts);container.appendChild(div_infos);var rustdoc_version=document.createElement("span");rustdoc_version.className="bottom";var rustdoc_version_code=document.createElement("code");rustdoc_version_code.innerText="rustdoc 1.57.0-nightly (05044c2e6 2021-09-26)";rustdoc_version.appendChild(rustdoc_version_code);container.appendChild(rustdoc_version);popup.appendChild(container);insertAfter(popup,searchState.outputElement());buildHelperPopup=function(){}};onHashChange(null);window.addEventListener("hashchange",onHashChange);searchState.setup()}());(function(){var reset_button_timeout=null;window.copy_path=function(but){var parent=but.parentElement;var path=[];onEach(parent.childNodes,function(child){if(child.tagName==='A'){path.push(child.textContent)}});var el=document.createElement('textarea');el.value=path.join('::');el.setAttribute('readonly','');el.style.position='absolute';el.style.left='-9999px';document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);but.children[0].style.display='none';var tmp;if(but.childNodes.length<2){tmp=document.createTextNode('✓');but.appendChild(tmp)}else{onEachLazy(but.childNodes,function(e){if(e.nodeType===Node.TEXT_NODE){tmp=e;return true}});tmp.textContent='✓'}if(reset_button_timeout!==null){window.clearTimeout(reset_button_timeout)}function reset_button(){tmp.textContent='';reset_button_timeout=null;but.children[0].style.display=""}reset_button_timeout=window.setTimeout(reset_button,1000)}}())