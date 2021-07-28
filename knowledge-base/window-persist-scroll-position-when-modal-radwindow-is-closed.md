---
title: Persist scroll position when modal RadWindow is closed
description: Persist scroll position when modal RadWindow is closed. Check it now!
type: how-to
page_title: Persist scroll position when modal RadWindow is closed
slug: window-persist-scroll-position-when-modal-radwindow-is-closed
res_type: kb
---

## Problem

When a modal RadWindow is shown and dragged on the page so that its scroll position is changed the scrolling "jumps back" after the RadWindow is closed  
   
## Solution
   
The modal RadWindow is intended to disable all the other content on the main page and thus if there is a control with a focus on the main page, it should lose its focus when the RadWindow is opened (to prevent accessing the main page by using the keyboard). AccordinglyÂ the focus should be returned after the RadWindow is closed. The default behavior of the browser, however, is to scroll the page to the element when it is focused and this causes change of the scroll position.  
   
In some scenarios it is needed to keep the current scroll position when the RadWindow is closed. This can be done by simple javascript which gets the scroll position of the html and body elements before the RadWindow is closed and resets them after its closure with a little timeout, e.g 30 ms.  
   
Sample code which shows this approach is available below:  
 
````ASPX
<script type="text/javascript">
    var body = document.body;
    var docElem = document.documentElement;
    var bodyScrollTop = 0;
    var bodyScrollLeft = 0;
    var docElemScrollTop = 0;
    var docElemScrollLeft = 0;
    function OnClientBeforeClose(sender, args) {
        bodyScrollTop = body.scrollTop;
        bodyScrollLeft = body.scrollLeft;
        docElemScrollTop = docElem.scrollTop;
        docElemScrollLeft = docElem.scrollLeft;
    }
    function OnClientClose() {
        setTimeout(function() {
            body.scrollTop = bodyScrollTop;
            body.scrollLeft = bodyScrollLeft;
            docElem.scrollTop = docElemScrollTop;
            docElem.scrollLeft = docElemScrollLeft;
        }, 30);
    }
    function OpenWnd() {
        $find("wnd").show();
    }
</script>
<telerik:RadWindow ID="wnd" runat="server" Modal="true" OnClientBeforeClose="OnClientBeforeClose"
    OnClientClose="OnClientClose">
</telerik:RadWindow>
<asp:Button ID="Button1" OnClientClick="OpenWnd(); return false;" runat="server"
    Text="Open RadWindow" />
````

To observe the difference you should drag the RadWindow down until the button hides from the viewport and you will see that without the described solution the page will scroll back to the button position while when the script is used it will maintain its current scroll position.  
   

 