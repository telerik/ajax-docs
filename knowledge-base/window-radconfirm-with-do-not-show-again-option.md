---
title: RadConfirm with "Do not show again" option
description: RadWindow RadConfirm with "Do not show again" option. Check it now!
type: how-to
page_title: RadWindow RadConfirm with "Do not show again" option
slug: window-radconfirm-with-do-not-show-again-option
res_type: kb
---

   
## How to

Implement RadConfirm with "Do not show again" option  
   
   
## Solution
   
 
Showing a confirmation box to the user every time before some action might be annoying for some users and thus a common solution is to provide a "Do not show again" option. RadConfirm does not provide this functionality as a built in feature but it could be easily customized to support this scenario by changing its template and adding some javascript which saves the user choice. This article shows how to achieve this with a javascript cookie and through the following steps:  
   
 1. Add a checkbox to the radconfirm template:
 
 ````ASPX
 <telerik:RadWindowManager ID="RadWindowManager1" runat="server">
       <ConfirmTemplate>
           <div class="rwDialogPopup radconfirm">
               <div class="rwDialogText">
                   {1}
               </div>
               <div>
                   <a onclick="$find('{0}').close(true);" class="rwPopupButton" href="javascript:void(0);">
                       <span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[OK]##</span></span></a>
                   <a onclick="$find('{0}').close(false);" class="rwPopupButton" href="javascript:void(0);">
                       <span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[Cancel]##</span></span></a>
                   <br />
                   <br />
                   <br />
                   <input type="checkbox" name="{0}_checkbox" id="{0}_checkbox" />Do not show this
                   message again
               </div>
           </div>
       </ConfirmTemplate>
</telerik:RadWindowManager>
 ````

 1. Add javascript to create, read and delete a cookie:
 
 ````JavaScript
 function getCookie(c_name) {
     var i, x, y, ARRcookies = document.cookie.split(";");
     for (i = 0; i < ARRcookies.length; i++) {
           x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
           y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
           x = x.replace(/^\s+|\s+$/g, "");
           if (x == c_name) {
              return unescape(y);
           }
     }
 }
 function setCookie(c_name, value, exdays) {
     var exdate = new Date();
     exdate.setDate(exdate.getDate() + exdays);
     var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
     document.cookie = c_name + "=" + c_value;
 }
 function ClearCookie() {
     setCookie("showConfirm", false, -1)
 }
 ````

 1. Check whether the cookie exists and it is valid and determine whether to show the confirm based on that:
 
 ````JavaScript
 function ShowConfirm() {
       var showConfirm = getCookie("showConfirm");
       if (!showConfirm) {
          var msg = $find("<%=RadWindowManager1.ClientID %>").radconfirm("Are you sure you want to save your changes?", confirmCallBackFn, 350, 150, null, "Save  changes");
          //focus OK button - otherwise, the newly added checkbox gets the focus
          setTimeout(function () {
             msg.get_contentElement().getElementsByTagName("A")[0].focus();
          }, 0);
          msg.add_beforeClose(function () {
             var toShow = !($get(msg.get_id() + "_checkbox").checked);
             if (!toShow) setCookie("showConfirm", toShow, 365);
          });
       }
 }
 ````

This code is a sample to be used as a start point and you can refine it further in order to meet your particular needs or to reuse an existing cookie, etc.  

