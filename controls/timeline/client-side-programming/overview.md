---
title: RadTimeline Object
page_title: RadTimeline Object | RadTimeline for ASP.NET AJAX Documentation
description: RadTimeline Object
slug: timeline/client-side-programming/overview
tags: timeline,object
published: True
position: 0
---

# RadTimeline Object

This article lists the client-side API of **RadTimeline** and how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var timelineObject = $find("<%=RadTimeline1.ClientID %>");
````

RadTimeline is a server-side wrapper over the Kendo UI Timeline Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline#methods). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**
    
        var timelineObject  = $find("<%=RadTimeline1.ClientID %>"); //the standard script control object
        var kendoTimeline = timelineObject.get_kendoWidget(); //the Kendo widget

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

    **JavaScript**
    
        var kendoTimeline = $telerik.$("#<%=RadTimeline1.ClientID %>").data("kendoTimeline"); //the jQuery selector must get the RadTimeline1 wrapper span element

In addition to using the Kendo method directly, you can also use their wrappers that follow the MS AJAX convention through the RadTimeline client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadTimeline object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **collapse** |object|none|Collapses an event in vertical mode. See the underlying [collapse](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/methods/collapse) method for more details on its behavior.|
| **expand** |object|none|Expands an event in vertical mode. See the underlying [expand](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/methods/expand) method for more details on its behavior.|
| **dispose** |none|none|Disposes the Timeline client-side object (calls its underlying Kendo widget's [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/timeline/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **get_clientDataSource** |none|RadClientDataSource|Returns a reference to the underlying RadClientDataSource control.|
| **get_kendoWidget** |none|object|Returns a reference to the underlying Kendo Timeline widget.|
| **get_items** |none|jQuery collection|Returns a jQuery collection of the DOM elements of the visible Timeline events.|
| **get_dataItems** |none|collection|Returns a collection of the data items available in the underlying data source.|
| **get_orientation** |none|Number|Returns the orienation of the timeline axis. The possible return values are *0 = Vertical* and *1 = Horizontal*|
| **next** |none|none|Switches to the next portion of events with animation in horizontal mode.|
| **open** |object|none|Opens event details in horizontal mode.|
| **previous** |none|none|Switches to the previous portion of events with animation in horizontal mode.|
| **rеpaint** |none|none|Redraws the Timeline widget.|


# See Also

 * [Live Demo - RadTimeline Client-side API](https://demos.telerik.com/aspnet-ajax/timeline/clientsideapi/defaultcs.aspx)

 * [RadTimeline Client-side Events]({%slug timeline/client-side-programming/events%})

 
