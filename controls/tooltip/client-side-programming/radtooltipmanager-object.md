---
title: RadToolTipManager Object
page_title: RadToolTipManager Object | RadTooltip for ASP.NET AJAX Documentation
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
| **get_value** |Gets the arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services|
| **set_value** |Sets an arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services|


>caption Public Methods

| Name | Description |
| ------ | ------ |
| **createToolTip** |Creates a new tooltip on the client which is associated with a corresponding target element. See **Example 1**.|
| **getToolTipByElement** |Gets the tooltip associated with a corresponding target element if such a tooltip exists. See **Example 2**.|
| **get_autoTooltipify** |Gets a boolean value that indicates whether automatic RadToolTip creation for DOM elements with `title` or `alt` attributes is enabled.|
| **get_enableDataCaching** |Gets a value which determines whether tooltip content should be cached after first load on demand request|
| **set_autoTooltipify** |Sets a boolean value that indicates whether automatic RadToolTip creation for DOM elements with `title` or` alt` attributes is enabled.This can be used to create tooltips only for a specific are on demand, without having the automatic feature enabled for the entire page. See **Example 3**.|
| **set_enableDataCaching** |Sets a value which determines whether tooltip content should be cached after first load on demand request. When caching is enabled only one request will be performed for each target, regardless of how many times the tooltip will be shown. By default a new request is performed each time the tooltip must be shown.|
| **tooltipify** |If AutoTooltipify is enabled calling this method will iterate over the page (or the element's children if a DOM element is passed as an argument) so that tooltips will be created. This can be used for content that is dynamically created for to add RadToolTips for elements outside of the TooltipZone. For Example, adding tooltips for content inside a RadWindow's ContentTemplate: `tooltipManager.tooltipify(oWnd.get_contentElement());`|

For a live demo see [RadToolTipManager's Client Side API](https://demos.telerik.com/aspnet-ajax/tooltip/examples/radtooltipmanagerclientapi/defaultcs.aspx).


**Example 1**: Creating a RadTooltip for an HTML element.
````JavaScript
var tooltip = tooltipManager.createToolTip(element);
````

**Example 2**: Getting a reference to the tooltip associated with a specific HTML element.
````JavaScript
var tooltip = tooltipManager.getToolTipByElement(element);
````

**Example 3**: Create tooltips for a specific area on the page on demand.

````JavaScript
var ttMngr = $find("<%=RadToolTipManager1.ClientID %>");
ttMngr.set_autoTooltipify(true);
ttMngr.tooltipify($get("theDesiredArea"));
ttMngr.set_autoTooltipify(false);
````

# See Also

 * [Overview]({%slug tooltip/client-side-programming/overview%})

 * [RadToolTip Object]({%slug tooltip/client-side-programming/radtooltip-object%})
