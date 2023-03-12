!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],t):t(CodeMirror)}((function(t){"use strict";t.defineMode("markdown",(function(e,i){var n=t.getMode(e,"text/html"),u="null"==n.name;void 0===i.highlightFormatting&&(i.highlightFormatting=!1),void 0===i.maxBlockquoteDepth&&(i.maxBlockquoteDepth=0),void 0===i.taskLists&&(i.taskLists=!1),void 0===i.strikethrough&&(i.strikethrough=!1),void 0===i.emoji&&(i.emoji=!1),void 0===i.fencedCodeBlockHighlighting&&(i.fencedCodeBlockHighlighting=!0),void 0===i.fencedCodeBlockDefaultMode&&(i.fencedCodeBlockDefaultMode="text/plain"),void 0===i.xml&&(i.xml=!0),void 0===i.tokenTypeOverrides&&(i.tokenTypeOverrides={});var r={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var a in r)r.hasOwnProperty(a)&&i.tokenTypeOverrides[a]&&(r[a]=i.tokenTypeOverrides[a]);var l=/^([*\-_])(?:\s*\1){2,}\s*$/,o=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,h=/^\[(x| )\](?=\s)/i,s=i.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,g=/^ {0,3}(?:\={1,}|-{2,})\s*$/,m=/^[^#!\[\]*_\\<>` "'(~:]+/,d=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,f=/^\s*\[[^\]]+?\]:.*$/,c=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;function k(t,e,i){return e.f=e.inline=i,i(t,e)}function F(t,e,i){return e.f=e.block=i,i(t,e)}function D(e){if(e.linkTitle=!1,e.linkHref=!1,e.linkText=!1,e.em=!1,e.strong=!1,e.strikethrough=!1,e.quote=0,e.indentedCode=!1,e.f==E){var i=u;if(!i){var r=t.innerMode(n,e.htmlState);i="xml"==r.mode.name&&null===r.state.tagStart&&!r.state.context&&r.state.tokenize.isInText}i&&(e.f=S,e.block=p,e.htmlState=null)}return e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.prevLine=e.thisLine,e.thisLine={stream:null},null}function p(n,u){var a,m=n.column()===u.indentation,c=!(a=u.prevLine.stream)||!/\S/.test(a.string),F=u.indentedCode,D=u.prevLine.hr,p=!1!==u.list,E=(u.listStack[u.listStack.length-1]||0)+3;u.indentedCode=!1;var C=u.indentation;if(null===u.indentationDiff&&(u.indentationDiff=u.indentation,p)){for(u.list=null;C<u.listStack[u.listStack.length-1];)u.listStack.pop(),u.listStack.length?u.indentation=u.listStack[u.listStack.length-1]:u.list=!1;!1!==u.list&&(u.indentationDiff=C-u.listStack[u.listStack.length-1])}var S=!(c||D||u.prevLine.header||p&&F||u.prevLine.fencedCodeEnd),v=(!1===u.list||D||c)&&u.indentation<=E&&n.match(l),B=null;if(u.indentationDiff>=4&&(F||u.prevLine.fencedCodeEnd||u.prevLine.header||c))return n.skipToEnd(),u.indentedCode=!0,r.code;if(n.eatSpace())return null;if(m&&u.indentation<=E&&(B=n.match(s))&&B[1].length<=6)return u.quote=0,u.header=B[1].length,u.thisLine.header=!0,i.highlightFormatting&&(u.formatting="header"),u.f=u.inline,A(u);if(u.indentation<=E&&n.eat(">"))return u.quote=m?1:u.quote+1,i.highlightFormatting&&(u.formatting="quote"),n.eatSpace(),A(u);if(!v&&!u.setext&&m&&u.indentation<=E&&(B=n.match(o))){var L=B[1]?"ol":"ul";return u.indentation=C+n.current().length,u.list=!0,u.quote=0,u.listStack.push(u.indentation),u.em=!1,u.strong=!1,u.code=!1,u.strikethrough=!1,i.taskLists&&n.match(h,!1)&&(u.taskList=!0),u.f=u.inline,i.highlightFormatting&&(u.formatting=["list","list-"+L]),A(u)}return m&&u.indentation<=E&&(B=n.match(d,!0))?(u.quote=0,u.fencedEndRE=new RegExp(B[1]+"+ *$"),u.localMode=i.fencedCodeBlockHighlighting&&function(i){if(t.findModeByName){var n=t.findModeByName(i);n&&(i=n.mime||n.mimes[0])}var u=t.getMode(e,i);return"null"==u.name?null:u}(B[2]||i.fencedCodeBlockDefaultMode),u.localMode&&(u.localState=t.startState(u.localMode)),u.f=u.block=x,i.highlightFormatting&&(u.formatting="code-block"),u.code=-1,A(u)):u.setext||!(S&&p||u.quote||!1!==u.list||u.code||v||f.test(n.string))&&(B=n.lookAhead(1))&&(B=B.match(g))?(u.setext?(u.header=u.setext,u.setext=0,n.skipToEnd(),i.highlightFormatting&&(u.formatting="header")):(u.header="="==B[0].charAt(0)?1:2,u.setext=u.header),u.thisLine.header=!0,u.f=u.inline,A(u)):v?(n.skipToEnd(),u.hr=!0,u.thisLine.hr=!0,r.hr):"["===n.peek()?k(n,u,T):k(n,u,u.inline)}function E(e,i){var r=n.token(e,i.htmlState);if(!u){var a=t.innerMode(n,i.htmlState);("xml"==a.mode.name&&null===a.state.tagStart&&!a.state.context&&a.state.tokenize.isInText||i.md_inside&&e.current().indexOf(">")>-1)&&(i.f=S,i.block=p,i.htmlState=null)}return r}function x(t,e){var n,u=e.listStack[e.listStack.length-1]||0,a=e.indentation<u,l=u+3;return e.fencedEndRE&&e.indentation<=l&&(a||t.match(e.fencedEndRE))?(i.highlightFormatting&&(e.formatting="code-block"),a||(n=A(e)),e.localMode=e.localState=null,e.block=p,e.f=S,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,a?F(t,e,e.block):n):e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),r.code)}function A(t){var e=[];if(t.formatting){e.push(r.formatting),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var n=0;n<t.formatting.length;n++)e.push(r.formatting+"-"+t.formatting[n]),"header"===t.formatting[n]&&e.push(r.formatting+"-"+t.formatting[n]+"-"+t.header),"quote"===t.formatting[n]&&(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(r.formatting+"-"+t.formatting[n]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(r.linkHref,"url"):(t.strong&&e.push(r.strong),t.em&&e.push(r.em),t.strikethrough&&e.push(r.strikethrough),t.emoji&&e.push(r.emoji),t.linkText&&e.push(r.linkText),t.code&&e.push(r.code),t.image&&e.push(r.image),t.imageAltText&&e.push(r.imageAltText,"link"),t.imageMarker&&e.push(r.imageMarker)),t.header&&e.push(r.header,r.header+"-"+t.header),t.quote&&(e.push(r.quote),!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(r.quote+"-"+t.quote):e.push(r.quote+"-"+i.maxBlockquoteDepth)),!1!==t.list){var u=(t.listStack.length-1)%3;u?1===u?e.push(r.list2):e.push(r.list3):e.push(r.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function C(t,e){if(t.match(m,!0))return A(e)}function S(e,u){var a=u.text(e,u);if(void 0!==a)return a;if(u.list)return u.list=null,A(u);if(u.taskList)return" "===e.match(h,!0)[1]?u.taskOpen=!0:u.taskClosed=!0,i.highlightFormatting&&(u.formatting="task"),u.taskList=!1,A(u);if(u.taskOpen=!1,u.taskClosed=!1,u.header&&e.match(/^#+$/,!0))return i.highlightFormatting&&(u.formatting="header"),A(u);var l=e.next();if(u.linkTitle){u.linkTitle=!1;var o=l;"("===l&&(o=")");var s="^\\s*(?:[^"+(o=(o+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+o;if(e.match(new RegExp(s),!0))return r.linkHref}if("`"===l){var g=u.formatting;i.highlightFormatting&&(u.formatting="code"),e.eatWhile("`");var m=e.current().length;if(0!=u.code||u.quote&&1!=m){if(m==u.code){var d=A(u);return u.code=0,d}return u.formatting=g,A(u)}return u.code=m,A(u)}if(u.code)return A(u);if("\\"===l&&(e.next(),i.highlightFormatting)){var f=A(u),k=r.formatting+"-escape";return f?f+" "+k:k}if("!"===l&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return u.imageMarker=!0,u.image=!0,i.highlightFormatting&&(u.formatting="image"),A(u);if("["===l&&u.imageMarker&&e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return u.imageMarker=!1,u.imageAltText=!0,i.highlightFormatting&&(u.formatting="image"),A(u);if("]"===l&&u.imageAltText){i.highlightFormatting&&(u.formatting="image");f=A(u);return u.imageAltText=!1,u.image=!1,u.inline=u.f=B,f}if("["===l&&!u.image)return u.linkText&&e.match(/^.*?\]/)||(u.linkText=!0,i.highlightFormatting&&(u.formatting="link")),A(u);if("]"===l&&u.linkText){i.highlightFormatting&&(u.formatting="link");f=A(u);return u.linkText=!1,u.inline=u.f=e.match(/\(.*?\)| ?\[.*?\]/,!1)?B:S,f}if("<"===l&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return u.f=u.inline=v,i.highlightFormatting&&(u.formatting="link"),(f=A(u))?f+=" ":f="",f+r.linkInline;if("<"===l&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return u.f=u.inline=v,i.highlightFormatting&&(u.formatting="link"),(f=A(u))?f+=" ":f="",f+r.linkEmail;if(i.xml&&"<"===l&&e.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var D=e.string.indexOf(">",e.pos);if(-1!=D){var p=e.string.substring(e.start,D);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(p)&&(u.md_inside=!0)}return e.backUp(1),u.htmlState=t.startState(n),F(e,u,E)}if(i.xml&&"<"===l&&e.match(/^\/\w*?>/))return u.md_inside=!1,"tag";if("*"===l||"_"===l){for(var x=1,C=1==e.pos?" ":e.string.charAt(e.pos-2);x<3&&e.eat(l);)x++;var L=e.peek()||" ",T=!/\s/.test(L)&&(!c.test(L)||/\s/.test(C)||c.test(C)),M=!/\s/.test(C)&&(!c.test(C)||/\s/.test(L)||c.test(L)),q=null,b=null;if(x%2&&(u.em||!T||"*"!==l&&M&&!c.test(C)?u.em!=l||!M||"*"!==l&&T&&!c.test(L)||(q=!1):q=!0),x>1&&(u.strong||!T||"*"!==l&&M&&!c.test(C)?u.strong!=l||!M||"*"!==l&&T&&!c.test(L)||(b=!1):b=!0),null!=b||null!=q)return i.highlightFormatting&&(u.formatting=null==q?"strong":null==b?"em":"strong em"),!0===q&&(u.em=l),!0===b&&(u.strong=l),d=A(u),!1===q&&(u.em=!1),!1===b&&(u.strong=!1),d}else if(" "===l&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return A(u);e.backUp(1)}if(i.strikethrough)if("~"===l&&e.eatWhile(l)){if(u.strikethrough)return i.highlightFormatting&&(u.formatting="strikethrough"),d=A(u),u.strikethrough=!1,d;if(e.match(/^[^\s]/,!1))return u.strikethrough=!0,i.highlightFormatting&&(u.formatting="strikethrough"),A(u)}else if(" "===l&&e.match("~~",!0)){if(" "===e.peek())return A(u);e.backUp(2)}if(i.emoji&&":"===l&&e.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){u.emoji=!0,i.highlightFormatting&&(u.formatting="emoji");var w=A(u);return u.emoji=!1,w}return" "===l&&(e.match(/^ +$/,!1)?u.trailingSpace++:u.trailingSpace&&(u.trailingSpaceNewLine=!0)),A(u)}function v(t,e){if(">"===t.next()){e.f=e.inline=S,i.highlightFormatting&&(e.formatting="link");var n=A(e);return n?n+=" ":n="",n+r.linkInline}return t.match(/^[^>]+/,!0),r.linkInline}function B(t,e){if(t.eatSpace())return null;var n,u=t.next();return"("===u||"["===u?(e.f=e.inline=(n="("===u?")":"]",function(t,e){if(t.next()===n){e.f=e.inline=S,i.highlightFormatting&&(e.formatting="link-string");var u=A(e);return e.linkHref=!1,u}return t.match(L[n]),e.linkHref=!0,A(e)}),i.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,A(e)):"error"}var L={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/};function T(t,e){return t.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=M,t.next(),i.highlightFormatting&&(e.formatting="link"),e.linkText=!0,A(e)):k(t,e,S)}function M(t,e){if(t.match("]:",!0)){e.f=e.inline=q,i.highlightFormatting&&(e.formatting="link");var n=A(e);return e.linkText=!1,n}return t.match(/^([^\]\\]|\\.)+/,!0),r.linkText}function q(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,!0),e.f=e.inline=S,r.linkHref+" url")}var b={startState:function(){return{f:p,prevLine:{stream:null},thisLine:{stream:null},block:p,htmlState:null,indentation:0,inline:S,text:C,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.thisLine,block:e.block,htmlState:e.htmlState&&t.copyState(n,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkText:e.linkText,linkTitle:e.linkTitle,linkHref:e.linkHref,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,emoji:e.emoji,header:e.header,setext:e.setext,hr:e.hr,taskList:e.taskList,list:e.list,listStack:e.listStack.slice(0),quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedEndRE:e.fencedEndRE}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine.stream){if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0))return D(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:t},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=E)){var i=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;if(e.indentation=i,e.indentationDiff=null,i>0)return null}}return e.f(t,e)},innerMode:function(t){return t.block==E?{state:t.htmlState,mode:n}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:b}},indent:function(e,i,u){return e.block==E&&n.indent?n.indent(e.htmlState,i,u):e.localState&&e.localMode.indent?e.localMode.indent(e.localState,i,u):t.Pass},blankLine:D,getType:A,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return b}),"xml"),t.defineMIME("text/markdown","markdown"),t.defineMIME("text/x-markdown","markdown")}));