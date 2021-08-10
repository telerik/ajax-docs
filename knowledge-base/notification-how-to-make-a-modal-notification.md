---
title: How to make a modal RadNotification
description: How to make a modal RadNotification. Check it now!
type: how-to
page_title: How to make a modal RadNotification
slug: notification-how-to-make-a-modal-notification
res_type: kb
---

   
 ## HOW-TO
   
Make the **RadNotification** display a modal overlay.  
   
## DESCRIPTION: 
   

**RadNotification** is a lightweight control and does not have a built-in modality (i.e. no `Modal` property).  
   
   
 ## SOLUTION 

The modal overlay used in a web page is actually an HTML element that has some specific properties set - absolute positioning, appropriate size, backgroung color, opacity and the unselectable attribute set to on. In this case we need to utilize the **RadNotification's** [client-side events]({%slug notification/client-side-programming/events/overview %}) and more precisely the [OnClientShowing]({%slug notification/client-side-programming/events/onclientshowing %})
notification/client-side-programming/events/overview and [OnClientHidden]({%slug notification/client-side-programming/events/onclienthidden %}) to respectively show and hide the modality div. Below is an example how to create such an element:  
   
````JavaScript
if (!modalDiv)
{
    modalDiv = document.createElement("div");
    modalDiv.style.width = "100%";
    modalDiv.style.height = "100%";
    modalDiv.style.backgroundColor = "#aaaaaa";
    modalDiv.style.position = "absolute";
    modalDiv.style.left = "0px";
    modalDiv.style.top = "0px";
    modalDiv.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=50)";
    modalDiv.style.opacity = ".5";
    modalDiv.style.MozOpacity = ".5";
    modalDiv.setAttribute("unselectable", "on");
    modalDiv.style.zIndex = (sender.get_zIndex() - 1).toString();
    document.body.appendChild(modalDiv);
}
````
 

A runnable page that shows the approach in action is attached here:
* [modal_radnotification.zip](files/modal_radnotification.zip)
 



