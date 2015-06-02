---
title: Common Issues
page_title: Common Issues | RadWindow for ASP.NET AJAX Documentation
description: Common Issues
slug: window/troubleshooting/common-issues
tags: common,issues
published: True
position: 1
---

# Common Issues

The RadWindow control is part of the [Telerik UI for ASP.NET AJAX ](http://www.telerik.com/products/aspnet-ajax.aspx) suite and is intended to replace the standard browser’s popup (window.open()). Since the control is based on an IFRAME, it behaves just like one – basically, whatever can be done with an IFRAME, can be achieved with RadWindow as well. This fact is useful when you investigate a reason for some problem related to the RadWindow control. Just replace the RadWindow with a standard IFRAME or browser’s popup and see how your application will behave in this case. If the problem still exists, then it is not related to the RadWindow control but is most probably a default browser’s behavior or a problem in the used logic itself.

Below you can see several common cases that occur when RadWindow is used and what is the best approach in such scenarios.

## Video / audio keep playing after window is closed

This happens because by default, when a RadWindow is closed, its object is not destroyed but remains hidden on the page so it can be quickly called again when needed. There are 2 ways to avoid that issue:

1. Set **DestroyOnClose=true**. See p.5 for more details on the subject.

1. Use the **OnClientClose** event handler that is called every time when a RadWindow is closed. There you could use setUrl() client-side method to change the content page’s Url which will stop the media as well. e.g.

````JavaScript
function ShowWindow()
{
	var oWnd = window.radopen('Dialog1.aspx', 'window1'); //Opens the window  
	oWnd.add_close(OnClientClose); //set a function to be called when RadWindow is closed  
}
function OnClientClose(oWnd)
{
	oWnd.setUrl("about:blank"); // Sets url to blank 
	oWnd.remove_close(OnClientClose); //remove the close handler - it will be set again on the next opening 
}      
````

````ASP.NET
<telerik:RadWindowManager ID="RadWindowManager1" runat="server"> 
</telerik:RadWindowManager> 
<button onclick="ShowWindow(); return false;"> 
	open RadWindow</button> 
````



## RadMenu overlaps RadWindow

This behavior is expected – by design RadMenu has a higher z-Index value than the RadWindow control. This is needed in common cases where a [RestrictionZone](http://demos.telerik.com/aspnet-ajax/window/examples/restrictionzone/defaultcs.aspx) is used and the RadMenu control is above that zone. To render the RadWindow control above RadMenu, all you need to do is to change its z-Index, according to [this help article]({%slug controls/controlling-absolute-positioning-with-z-index%}). There is a [KB article](http://www.telerik.com/support/kb/aspnet-ajax/window/show-radwindow-above-radmenu.aspx)on the same subject as well.

## Using OffsetElementID and Top / Left properties together

When OffsetElementID is specified, Top and Left are calculated towards that element's top left corner. If OffsetElementID is not specified, Top and Left are calculated towards the page's top left corner.Top and Left can be used along with the RestrictionZoneID property as well - if the RestrictionZoneID property is set,Top and Left will be calculated towards the top left corner of the restriction zone.

## OpenerElementID is not working as expected in some scenarios

By using the OpenerElementID property it is possible to specify the id of an HTML element that, when clicked, will automatically open the corresponding RadWindow object. The opener can be any element on the page that has an ID attribute - the property expect a client ID, so if you are setting it to a server element, you need to use its ClientID `OpenerElementID="<%# ServerButton.ClientID %>"` ).

>note Note that if you set this property to a postback element like asp:Button control, the server-side click event of that element will not fire. That is why we recommend using OpenerElementID in simple scenarios only. OpenerElementID is not suitable for ajaxified and databinding scenarios as well. For example if you have a standard asp:Repeater control or RadGrid where you need to open RadWindows by clicking some elements in the columns, you will have to declare number of RadWindows equal to the number of the opener elements in the grid. In such scenarios it is recommended to use RadWindow's client-side or server-side API.

## Once a RadWindow is closed, it "looses" all its settings (width, height, modality, etc.)

This could happen if you have set DestroyOnClose to true. When this property is set to true, RadWindow’s object will be destroyed once the window is closed. This, however,means that you will not be able to open that same RadWindow again until the whole page is reloaded. In such scenario, it will be best to either set all needed properties (width, height, modality, etc.) to the RadWindowManager or as an alternative – to use the [client-side API]({%slug window/client-side-programming/radwindow-object%}) and set them when opening the RadWindow.

## RadComboBox, RadCalendar, RadDatePicker, etc. are not visible when a RadWindow is maximized

By default, when maximized, a **RadWindow** changes its z-index to a very high value (100 000) in order to ensure that it is the topmost control on the page. If its **ContentTemplate** is used then the controls inside are part of the main page and normal z-index rules apply to them as well. This means that they will be hidden behind the popup element of the RadWindow with its new value. You can find a list with the default z-index values in [this help article]({%slug controls/controlling-absolute-positioning-with-z-index%}).

There is an easy way to control this behavior - setting the **ShowOnTopWhenMaximized** property of the **RadWindow** to **false** will prevent this z-index increase and the control will behave the same way in maximized and non-maximized state. The default value of this property is **true**.

## RestrictionZondeID and MinimizeZoneID - common issues and requirements

The **RestrictionZoneID** can be useful, but due to the way HTML works it has some requirements in order to function properly. The main concern is that pure HTML elements do not fire resize events, so the control cannot be notified if their dimensions or positions change. This means that the **HTML element** whose **ClientID** is passed to the **RestrictionZoneID** property **must have static dimensions set in**. Also, **the size of the restriction zone must be large enough to accommodate the RadWindows that will be opened inside. These dimensions must not change during runtime** because such a modification can lead to a RadWindow being left outside of its zone which is an incorrect scenario and cannot be handled by the control. If we move the control automatically this is behavior that is not initiated by the user and is perceived as buggy; if we modify the size of the popup this may break the functionality required by the developer; if we modify the restriction zone we may break the page layout.

Similar restrictions and requirements apply to the **MinimizeZoneID** property. What is also important with it is that using it moves the RadWnidow in the DOM - upon minimizing inside the element, upon restoring - back to being a direct child of the form. **This DOM modification causes iframes to reload**. This can be avoided by creating an MDI-like interface by following [this online demo](http://demos.telerik.com/aspnet-ajax/window/examples/radwindowandmdi/defaultcs.aspx).
