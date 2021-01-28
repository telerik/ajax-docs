---
title: Overview
page_title: Overview - RadAjaxLoadingPanel
description: Check our Web Forms article about Overview.
slug: ajaxloadingpanel/client-side-programming/events/overview
previous_url: ajax/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

## 

**RadAjaxLoadingPanel** contains the following client events:


| Name | Description |
| ------ | ------ |
|[OnClientShowing]({%slug ajaxloadingpanel/client-side-programming/events/onclientshowing%})|Fired before the loading panel is shown.|
|[OnClientHiding]({%slug ajaxloadingpanel/client-side-programming/events/onclienthiding%})|Fired before the loading panel hides.|

To use these events, simply write a JavaScript function that can be called when the event occurs(**Example 2** ).You then assign the name of the JavaScript function as the value of the the corresponding property.

Example 2: Cancel the default behavior when shows and hides the RadAjaxLoadingPanel and apply a custom behavior for both actions.

````ASP.NET
<script type="text/javascript">
	function MyClientShowing(sender, eventArgs) {
	    eventArgs.get_loadingElement().style.border = "2px solid red";
	    eventArgs.set_cancelNativeDisplay(true);
	     $telerik.$(eventArgs.get_loadingElement()).show("slow");
	}
	function MyClientHiding(sender, eventArgs) {
	    eventArgs.get_loadingElement().style.border = "2px solid blue";
	    eventArgs.set_cancelNativeDisplay(true);
	    $telerik.$(eventArgs.get_loadingElement()).hide("slow");
	}
</script>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" BackColor="yellow"
	OnClientShowing="MyClientShowing" OnClientHiding="MyClientHiding" />
````



## See Also

 * [RadAjaxPanel Overview]({%slug ajaxpanel/client-side-programming/overview%})

 * [RadAjaxManager Object]({%slug ajaxmanager/client-side-programming/radajaxmanager-object%})

 * [Demo: RadAjaxManager Client-side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
