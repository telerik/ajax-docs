---
title: RadDrawer Object
page_title: RadDrawer Object - RadDrawer
description: Check our Web Forms article about RadDrawer Object.
slug: drawer/client-side-programming/overview
tags: drawer,object
published: True
position: 0
---

# RadDrawer Object

This article lists the client-side API of **RadDrawer** and how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var drawerObject = $find("<%=RadDrawer1.ClientID %>");
````

RadDrawer is a server-side wrapper over the Kendo UI Drawer Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/drawer). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**
    
        var drawerObject  = $find("<%=RadDrawer1.ClientID %>"); //the standard script control object
        var kendoDrawer = drawerObject.get_kendoWidget(); //the Kendo widget

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

    **JavaScript**
    
        var kendoDrawer = $telerik.$("#<%=RadDrawer1.ClientID %>").data("kendoDrawer"); 

In addition to using the Kendo method directly, you can also use their wrappers that follow the MS AJAX convention through the RadDrawer client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadDrawer object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **show** |none|none|Shows the drawer.|
| **hide** |none|none|Hides the drawer.|
| **destroy** |none|none|Destroys the underlying Kendo widget (calls its [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/drawer/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **get_visible** |none|Boolean|Returns true if the drawer is opened.|
| **get_position** |none|String|Returns the position of the Drawer. The possible values are `left` and `right`.|
| **get_swipeToOpen** |none|Boolean|Returns whether the Drawer can be toggled with gestures.|
| **repaint** |Boolean|none| Repaints the control. The "force" argument determines whether the resizing routine should be executed even if the respective widget's outer dimensions have not changed.|
| **get_element** |none|HTML element| Returns the drawer's element, containing the id and the client-side object of the Drawer. It has the RadDrawer class.|
| **get_outerWrapper** |none|jQuery element| Returns an element that contains the items and the content element wrappers. It can contain classes that indicate the drawer's mode and position. |
| **get_contentElement** |none|jQuery element| Returns the content element from the ContentTemplate. It has the .k-drawer-content CSS class.|
| **get_drawerContainer** |none|Boolean| Return drawer's container element. It contains the items wrapper element|
| **get_drawerItemsWrapper** |none|Boolean| Returns the items wrapper element declared in the Items template and has the .k-drawer-items CSS class.|
| **get_drawerElement** |none|Boolean| Returns the root element declared in the ItemsTemplate.|


# See Also

 * [Live Demo - RadDrawer Client-side API](https://demos.telerik.com/aspnet-ajax/drawer/clientsideapi/defaultcs.aspx)

 * [RadDrawer Client-side Events]({%slug drawer/client-side-programming/events%})
 
