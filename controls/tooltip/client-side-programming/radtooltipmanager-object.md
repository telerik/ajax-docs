---
title: RadToolTipManager Object
page_title: RadToolTipManager Object | UI for ASP.NET AJAX Documentation
description: RadToolTipManager Object
slug: tooltip/client-side-programming/radtooltipmanager-object
tags: radtooltipmanager,object
published: True
position: 2
---

# RadToolTipManager Object



## RadToolTipManager specific API


>caption Public Properties

| Name | Description |
| ------ | ------ |
| __get_value__ |Gets the arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services|
| __set_value__ |Sets an arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services|


>caption Public Methods

| Name | Description |
| ------ | ------ |
| __createToolTip__ |creates a new tooltip on the client which is associated with a corresponding target element

````JavaScript
	
	            var tooltip = tooltipManager.createToolTip(element);
	
````

|
| __getToolTipByElement__ |gets the tooltip associated with a corresponding target element if such a tooltip exists

````JavaScript
	
	            var tooltip = tooltipManager.getToolTipByElement(element);
	
````

|
| __get_autoTooltipify__ |Gets a boolean value that indicates whether automatic RadToolTip creation for DOM elements with`title`or`alt`attributes is enabled.|
| __get_enableDataCaching__ |Gets a value which determines whether tooltip content should be cached after first load on demand request|
| __set_autoTooltipify__ |Sets a boolean value that indicates whether automatic RadToolTip creation for DOM elements with`title`or`alt`attributes is enabled.This can be used to create tooltips only for a specific are on demand, without having the automatic feature enabled for the entire page:

````JavaScript
	
	            var ttMngr = $find("<%=RadToolTipManager1.ClientID %>");
	            ttMngr.set_autoTooltipify(true);
	            ttMngr.tooltipify($get("theDesiredArea"));
	            ttMngr.set_autoTooltipify(false);
````

|
| __set_enableDataCaching__ |Sets a value which determines whether tooltip content should be cached after first load on demand request. When caching is enabled only one request	will be performed for each target, regardless of how many times the tooltip will be shown. By default a new request is performed each time the tooltip	must be shown.|
| __tooltipify__ |If AutoTooltipify is enabled calling this method will iterate over the page (or the element's children if a DOM element is passed as an argument)	so that tooltips will be created. This can be used for content that is dynamically created for to add RadToolTips for elements	outside of the TooltipZone. For Example, adding tooltips for content inside a RadWindow's ContentTemplate:tooltipManager.tooltipify(oWnd.get_contentElement());|

For a live demo see [RadToolTipManager's Client Side API](http://demos.telerik.com/aspnet-ajax/tooltip/examples/radtooltipmanagerclientapi/defaultcs.aspx).

# See Also

 * [Overview]({%slug tooltip/client-side-programming/overview%})

 * [RadToolTip Object]({%slug tooltip/client-side-programming/radtooltip-object%})
