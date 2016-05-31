---
title: Change RenderMode According to Current Window Size
page_title: Change RenderMode According to Current Window Size | RadMenu for ASP.NET AJAX Documentation
description: Change RenderMode According to Current Window Size
slug: menu/how-to/change-rendermode-according-to-current-window-size
tags: rendermode,lightweight,mobile,window,size,viw,menu,change
published: True
position: 11
---

# Change RenderMode According to Current Window Size

## 

The below example demonstrates how to change RadMenu **RenderMode**, based on the size of current window (view). The change will occur on resize of window, when the given breakpoint is reached. Within the below implementation, for widths below 1000px **RenderMode** is set to **"Mobile"**. For widths above this value **RenderMode** is **"Lightweight"**.

````ASP.NET
<%--The RadAjaxManager initiates AJAX postback each time RenderMode needs to be changed--%>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest" ClientIDMode="Predictable">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="RadMenu1" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>

<%--This Menu switches depending on the breakpoint that is set in the JavaScript code--%>
<div>
	<telerik:RadMenu ID="RadMenu1" runat="server" Width="100%">
		<Items>
			<telerik:RadMenuItem runat="server" Text="Root RadMenuItem1">
			</telerik:RadMenuItem>
			<telerik:RadMenuItem runat="server" Text="Root RadMenuItem2">
			</telerik:RadMenuItem>
			<telerik:RadMenuItem runat="server" Text="Root RadMenuItem3">
			</telerik:RadMenuItem>
		</Items>
	</telerik:RadMenu>
</div>
````

````JavaScript
var $ = $telerik.$;
var $T = Telerik.Web.UI;
// Breakpoint is set to 1000px
var breakPointsWidth = 1000;
var bigResolution;
var isInLightweight;
var isInMobile;

function pageLoad() {
    var menu = $find('RadMenu1');
	// Identify the current RadMenu RenderMode
    var currentRenderMode = menu.get_renderMode();
    isInLightweight = currentRenderMode === $T.RenderMode.Lite;
    isInMobile = currentRenderMode === $T.RenderMode.Mobile;
	// Identify current window size
    bigResolution = ($(window).width() > breakPointsWidth);
	
    if ((bigResolution && !isInLightweight) || (!bigResolution && !isInMobile)) {
        changeRenderMode();
    }
}

$(window).resize(function () {
	// Identify current window size
    bigResolution = ($(window).width() > breakPointsWidth);
    if ((bigResolution && !isInLightweight) || (!bigResolution && !isInMobile)) {
        changeRenderMode();
    }
});

function changeRenderMode() {
	// Initiate AJAX request using RadAjaxManager
    $find('RadAjaxManager1').ajaxRequest(bigResolution);
    isInMobile = !isInMobile;
    isInLightweight = !isInLightweight;
}
````


````C#
protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
	if (Boolean.Parse(e.Argument))
	{
		RadMenu1.RenderMode = RenderMode.Lightweight;
	}
	else
	{
		RadMenu1.RenderMode = RenderMode.Mobile;
	}
}
````
````VB.NET
Protected Sub RadAjaxManager1_AjaxRequest(sender As Object, e As AjaxRequestEventArgs)
	If [Boolean].Parse(e.Argument) Then
		RadMenu1.RenderMode = RenderMode.Lightweight
	Else
		RadMenu1.RenderMode = RenderMode.Mobile
	End If
End Sub
````


# See Also

 * [Render Modes]({%slug menu/mobile-support/render-modes%})

 * [Mobile Rendering]({%slug menu/mobile-support/responsive-adaptive-and-elastic-capabilities%})
