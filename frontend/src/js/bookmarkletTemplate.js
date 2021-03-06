'use strict'

/*
 * notie.js - A clean and simple notification plugin (alert/growl style) for javascript, with no dependencies.
 *
 * Copyright (c) 2015 Jared Reich
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 * https://jaredreich.com/projects/notie.js
 *
 * Version:  2.1.0
 *
 */

function generateBookmarkletJS(locationHostAndProtocol, token) {
  /****
   * note: when altering this, remember to add semicolons
   */
  return `
    (function(){
      var notie=function(){function e(){$=document.body.style.height,_=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"}function t(){document.body.style.height=$,document.body.style.overflow=_}function n(e,t,n){document.activeElement.blur(),se++,setTimeout(function(){se--},1e3*h+10),1==se&&(le?(clearTimeout(ie),clearTimeout(oe),o(function(){i(e,t,n)})):i(e,t,n))}function i(e,t,n){le=!0;var i=0;if("undefined"==typeof n)var i=3e3;else i=1>n?1e3:1e3*n;switch(e){case 1:ee.style.backgroundColor=b;break;case 2:ee.style.backgroundColor=x;break;case 3:ee.style.backgroundColor=v;break;case 4:ee.style.backgroundColor=w}ne.innerHTML=t,ee.style.top="-10000px",ee.style.display="table",ee.style.top="-"+ee.offsetHeight-5+"px",ie=setTimeout(function(){c&&(ee.style.boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"),ee.style.MozTransition="all "+h+"s ease",ee.style.WebkitTransition="all "+h+"s ease",ee.style.transition="all "+h+"s ease",ee.style.top=0,oe=setTimeout(function(){o(function(){})},i)},20)}function o(e){ee.style.top="-"+ee.offsetHeight-5+"px",setTimeout(function(){c&&(ee.style.boxShadow=""),ee.style.MozTransition="",ee.style.WebkitTransition="",ee.style.transition="",ee.style.top="-10000px",le=!1,e&&e()},1e3*h+10)}function l(e,t,n,i){document.activeElement.blur(),le?(clearTimeout(ie),clearTimeout(oe),o(function(){s(e,t,n,i)})):s(e,t,n,i)}function s(t,n,i,o){function l(){ue.innerHTML=t,pe.innerHTML=n,fe.innerHTML=i,de.style.top="-10000px",de.style.display="table",de.style.top="-"+de.offsetHeight-5+"px",ae.style.display="block",setTimeout(function(){c&&(de.style.boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"),de.style.MozTransition="all "+h+"s ease",de.style.WebkitTransition="all "+h+"s ease",de.style.transition="all "+h+"s ease",de.style.top=0,ae.style.opacity="0.75",setTimeout(function(){he=!0},1e3*h+10)},20)}e(),ye.onclick=function(){d(),setTimeout(function(){o()},1e3*h+10)},he?(d(),setTimeout(function(){l()},1e3*h+10)):l()}function d(){de.style.top="-"+de.offsetHeight-5+"px",ae.style.opacity="0",setTimeout(function(){c&&(de.style.boxShadow=""),de.style.MozTransition="",de.style.WebkitTransition="",de.style.transition="",ae.style.display="none",de.style.top="-10000px",t(),he=!1},1e3*h+10)}function a(e,t,n,i,l,s,d){document.activeElement.blur(),setTimeout(function(){we.focus()},1e3*h),we.setAttribute("type",i),we.setAttribute("placeholder",l),we.value="","undefined"!=typeof d&&d.length>0&&(we.value=d),le?(clearTimeout(ie),clearTimeout(oe),o(function(){r(e,t,n,s)})):r(e,t,n,s)}function r(t,n,i,o){function l(){ke.innerHTML=t,ze.innerHTML=n,Ee.innerHTML=i,me.style.top="-10000px",me.style.display="table",me.style.top="-"+me.offsetHeight-5+"px",be.style.display="block",setTimeout(function(){c&&(me.style.boxShadow="0px 0px 10px 0px rgba(0,0,0,0.5)"),me.style.MozTransition="all "+h+"s ease",me.style.WebkitTransition="all "+h+"s ease",me.style.transition="all "+h+"s ease",me.style.top=0,be.style.opacity="0.75",setTimeout(function(){Ce=!0},1e3*h+10)},20)}e(),ge.onclick=function(){y(),setTimeout(function(){o(we.value)},1e3*h+10)},Ce?(y(),setTimeout(function(){l()},1e3*h+10)):l()}function y(){me.style.top="-"+me.offsetHeight-5+"px",be.style.opacity="0",setTimeout(function(){c&&(me.style.boxShadow=""),me.style.MozTransition="",me.style.WebkitTransition="",me.style.transition="",be.style.display="none",me.style.top="-10000px",t(),Ce=!1},1e3*h+10)}var c=!0,u="18px",p="24px",f=600,h=.3,m=!0,b="#3498DB",x="#E3B771",v="#E1715B",w="#4D82D6",g="#FFF",T="#4D82D6",k="#57BF57",z="#E1715B",E="#FFF",C="#FFF",S="#FFF",F="notie-alert-outer",W="notie-alert-inner",L="notie-alert-text",M="notie-confirm-outer",H="notie-confirm-inner",A="notie-confirm-background",I="notie-confirm-yes",B="notie-confirm-no",D="notie-confirm-text",R="notie-confirm-yes-text",j="notie-confirm-no-text",q="notie-input-outer",G="notie-input-inner",J="notie-input-background",K="notie-input-div",N="notie-input-field",O="notie-input-yes",P="notie-input-no",Q="notie-input-text",U="notie-input-yes-text",V="notie-input-no-text",X=function(e){window.innerWidth<=f?e.style.fontSize=u:e.style.fontSize=p},Y=500,Z=function(e,t,n){var i;return function(){var o=this,l=arguments,s=function(){i=null,n||e.apply(o,l)},d=n&&!i;clearTimeout(i),i=setTimeout(s,t),d&&e.apply(o,l)}};window.addEventListener("keydown",function(e){var t=13==e.which||13==e.keyCode,n=27==e.which||27==e.keyCode;le?(t||n)&&(clearTimeout(ie),clearTimeout(oe),o()):he?t?ye.click():n&&ce.click():Ce&&(t?ge.click():n&&Te.click())}),"undefined"==typeof Element.prototype.addEventListener&&(Element.prototype.addEventListener=Window.prototype.addEventListener=function(e,t){return e="on"+e,this.attachEvent(e,t)});var $,_,ee=document.createElement("div");ee.id=F,ee.style.position="fixed",ee.style.top="0",ee.style.left="0",ee.style.zIndex="999999999",ee.style.height="auto",ee.style.width="100%",ee.style.display="none",ee.style.textAlign="center",ee.style.cursor="default",ee.style.MozTransition="",ee.style.WebkitTransition="",ee.style.transition="",ee.style.cursor="pointer",ee.onclick=function(){clearTimeout(ie),clearTimeout(oe),o()};var te=document.createElement("div");te.id=W,te.style.padding="20px",te.style.display="table-cell",te.style.verticalAlign="middle",ee.appendChild(te);var ne=document.createElement("span");ne.id=L,ne.style.color=g,window.innerWidth<=f?ne.style.fontSize=u:ne.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ne),Y),!0),te.appendChild(ne),document.body.appendChild(ee);var ie,oe,le=!1,se=0,de=document.createElement("div");de.id=M,de.style.position="fixed",de.style.top="0",de.style.left="0",de.style.zIndex="999999998",de.style.height="auto",de.style.width="100%",de.style.display="none",de.style.textAlign="center",de.style.MozTransition="",de.style.WebkitTransition="",de.style.transition="";var ae=document.createElement("div");ae.id=A,ae.style.position="fixed",ae.style.top="0",ae.style.left="0",ae.style.zIndex="999999997",ae.style.height="100%",ae.style.width="100%",ae.style.display="none",ae.style.backgroundColor="white",ae.style.MozTransition="all "+h+"s ease",ae.style.WebkitTransition="all "+h+"s ease",ae.style.transition="all "+h+"s ease",ae.style.opacity="0",ae.onclick=function(){m&&d()};var re=document.createElement("div");re.id=H,re.style.boxSizing="border-box",re.style.width="100%",re.style.padding="20px",re.style.display="block",re.style.cursor="default",re.style.backgroundColor=T,de.appendChild(re);var ye=document.createElement("div");ye.id=I,ye.style.cssFloat="left",ye.style.height="50px",ye.style.lineHeight="50px",ye.style.width="50%",ye.style.cursor="pointer",ye.style.backgroundColor=k,de.appendChild(ye);var ce=document.createElement("div");ce.id=B,ce.style.cssFloat="right",ce.style.height="50px",ce.style.lineHeight="50px",ce.style.width="50%",ce.style.cursor="pointer",ce.style.backgroundColor=z,ce.onclick=function(){d()},de.appendChild(ce);var ue=document.createElement("span");ue.id=D,ue.style.color=E,window.innerWidth<=f?ue.style.fontSize=u:ue.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ue),Y),!0),re.appendChild(ue);var pe=document.createElement("span");pe.id=R,pe.style.color=C,window.innerWidth<=f?pe.style.fontSize=u:pe.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,pe),Y),!0),ye.appendChild(pe);var fe=document.createElement("span");fe.id=j,fe.style.color=S,window.innerWidth<=f?fe.style.fontSize=u:fe.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,fe),Y),!0),ce.appendChild(fe),document.body.appendChild(de),document.body.appendChild(ae);var he=!1,me=document.createElement("div");me.id=q,me.style.position="fixed",me.style.top="0",me.style.left="0",me.style.zIndex="999999998",me.style.height="auto",me.style.width="100%",me.style.display="none",me.style.textAlign="center",me.style.MozTransition="",me.style.WebkitTransition="",me.style.transition="";var be=document.createElement("div");be.id=J,be.style.position="fixed",be.style.top="0",be.style.left="0",be.style.zIndex="999999997",be.style.height="100%",be.style.width="100%",be.style.display="none",be.style.backgroundColor="white",be.style.MozTransition="all "+h+"s ease",be.style.WebkitTransition="all "+h+"s ease",be.style.transition="all "+h+"s ease",be.style.opacity="0",be.onclick=function(){m&&y()};var xe=document.createElement("div");xe.id=G,xe.style.boxSizing="border-box",xe.style.width="100%",xe.style.padding="20px",xe.style.display="block",xe.style.cursor="default",xe.style.backgroundColor=T,me.appendChild(xe);var ve=document.createElement("div");ve.id=K,ve.style.boxSizing="border-box",ve.style.height="55px",ve.style.width="100%",ve.style.display="block",ve.style.cursor="default",ve.style.backgroundColor="#FFF",me.appendChild(ve);var we=document.createElement("input");we.id=N,we.setAttribute("autocomplete","off"),we.setAttribute("autocorrect","off"),we.setAttribute("autocapitalize","off"),we.setAttribute("spellcheck","false"),we.style.boxSizing="border-box",we.style.height="55px",we.style.width="100%",we.style.textAlign="center",we.style.textIndent="10px",we.style.paddingRight="10px",we.style.outline="0",we.style.border="0",we.style.fontFamily="inherit",we.style.fontSize=p,window.innerWidth<=f?we.style.fontSize=u:we.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,we),Y),!0),ve.appendChild(we);var ge=document.createElement("div");ge.id=O,ge.style.cssFloat="left",ge.style.height="50px",ge.style.lineHeight="50px",ge.style.width="50%",ge.style.cursor="pointer",ge.style.backgroundColor=k,me.appendChild(ge);var Te=document.createElement("div");Te.id=P,Te.style.cssFloat="right",Te.style.height="50px",Te.style.lineHeight="50px",Te.style.width="50%",Te.style.cursor="pointer",Te.style.backgroundColor=z,Te.onclick=function(){y()},me.appendChild(Te);var ke=document.createElement("span");ke.id=Q,ke.style.color=E,window.innerWidth<=f?ke.style.fontSize=u:ke.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ke),Y),!0),xe.appendChild(ke);var ze=document.createElement("span");ze.id=U,ze.style.color=C,window.innerWidth<=f?ze.style.fontSize=u:ze.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,ze),Y),!0),ge.appendChild(ze);var Ee=document.createElement("span");Ee.id=V,Ee.style.color=S,window.innerWidth<=f?Ee.style.fontSize=u:Ee.style.fontSize=p,window.addEventListener("resize",Z(X.bind(null,Ee),Y),!0),Te.appendChild(Ee),document.body.appendChild(me),document.body.appendChild(be);var Ce=!1;return{alert:n,confirm:l,input:a}}();"undefined"!=typeof module&&module&&(module.exports=notie);
      var description = '';
      var descriptionElem = document.querySelector('meta[name="description"], meta[name="Description"], meta[name="DESCRIPTION"], meta[property="og:description"]');
      var keywordsElem = document.querySelector('meta[name="keywords"], meta[name="Keywords"], meta[name="KEYWORDS"], meta[property="og:keywords"]');
      if(descriptionElem && descriptionElem.hasAttribute('content')){
        description = descriptionElem.getAttribute('content');
      }
      else if(keywordsElem && keywordsElem.hasAttribute('content')){
        description = keywordsElem.getAttribute('content');
      }
      var pageTitle = 'pageTitle=' + encodeURIComponent(document.title);
      var pageText = '&pageText=' + encodeURIComponent(document.body.innerText);
      var pageDescription = '&pageDescription=' + encodeURIComponent(description);
      var JWT = '&JWT=${ token }';
      var params = pageTitle + pageText + pageDescription + JWT;
      var http = new XMLHttpRequest();
      http.open("POST", '${ locationHostAndProtocol }/api/add/'+encodeURIComponent(window.location.href), true);
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http.send(params);
      notie.alert(1, 'Page Saved To MarkSearch', 3);
    })();
  `
}

export { generateBookmarkletJS }

// Old version
  //`
  //    (function(){
  //
  //    var form = document.createElement('form');
  //    form.setAttribute('style', 'display: none !important;');
  //    form.setAttribute('method', 'POST');
  //    form.setAttribute('acceptCharset', 'utf8');
  //    form.setAttribute('enctype', 'multipart/form-data');
  //    //dynamically set by MarkSearch settings page
  //    form.setAttribute('action', '${locationHostAndProtocol}/api/add/'+encodeURIComponent(window.location));
  //
  //    var jwtInput = document.createElement('input');
  //    jwtInput.setAttribute('type', 'text');
  //    jwtInput.setAttribute('name', 'JWT');
  //    //dynamically set by MarkSearch settings page
  //    jwtInput.value = ${token};
  //    form.appendChild(jwtInput);
  //
  //    var pageTitleInput = document.createElement('input');
  //    pageTitleInput.setAttribute('type', 'text');
  //    pageTitleInput.setAttribute('name', 'pageTitle');
  //    var titleElem = document.querySelector('head meta[property="og:title"], head title');
  //    pageTitleInput.value = '';
  //    if(titleElem.hasAttribute('content')){
  //      pageTitleInput.value = titleElem.getAttribute('content');
  //    }
  //    else{
  //      pageTitleInput.value = titleElem.textContent;
  //    }
  //    form.appendChild(pageTitleInput);
  //
  //    var pageTextInput = document.createElement('input');
  //    pageTextInput.setAttribute('type', 'text');
  //    pageTextInput.setAttribute('name', 'pageText');
  //    pageTextInput.value = document.body.innerText;
  //    form.appendChild(pageTextInput);
  //
  //    var pageDescriptionInput = document.createElement('input');
  //    pageDescriptionInput.setAttribute('type', 'text');
  //    pageDescriptionInput.setAttribute('name', 'pageDescription');
  //    pageDescriptionInput.value = pageTitleInput.value;
  //    var descriptionSelectors = 'head meta[name="description"],'+
  //                                ' head meta[name="Description"],'+
  //                                ' head meta[name="DESCRIPTION"],'+
  //                                ' head meta[property="og:description"]';
  //    var descriptionElement = document.querySelector(descriptionSelectors)
  //    if(descriptionElement && descriptionElement.hasAttribute('content')){
  //      pageDescriptionInput.value = descriptionElement.getAttribute('content');
  //    }
  //    form.appendChild(pageDescriptionInput);
  //
  //    document.body.appendChild(form);
  //    form.submit();
  //    document.body.removeChild(form);
  //
  //    //create notification div
  //    var notificationDiv = document.createElement('div')
  //
  //
  //  })();
  //`
