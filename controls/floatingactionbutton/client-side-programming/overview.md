---
title: Overview
page_title: RadFloatingActionButton object
description: Check our Web Forms article about the API of RadFloatingActionButton object.
slug: floatingactionbutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client Side Programming Overview

# RadFloatingActionButton object

This article lists the client-side API of **RadFloatingActionButton** and shows how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var floatingActionButtonObject = $find("<%=RadFloatingActionButton1.ClientID %>");
````

RadFloatingActionButton is a server-side wrapper over the Kendo UI FloatingActionButton Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**

        var floatingActionButtonObject  = $find("<%=RadFloatingActionButton1.ClientID %>"); //the standard script control object
        var kendoFloatingActionButton = floatingActionButtonObject.get_kendoWidget(); //the Kendo widget


* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

    **JavaScript**
    
        var kendoFloatingActionButton = $telerik.$("#<%=RadFloatingActionButton1.ClientID %>").data("kendoFloatingActionButton"); 


In addition to using the Kendo methods directly, you can also use their wrappers that follow the MS AJAX convention through the RadFloatingActionButton client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadFloatingActionButton object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **dispose** |none|none|Destroys the underlying Kendo widget (calls its [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **show** |none|none|Shows the FloatingActionButton if it is hidden.  |
| **hide** |none|none|Hide the FloatingActionButton.  |
| **disable** |none|none|Disables the FloatingActionButton. |
| **enable** |none|none|Enables the FloatingActionButton.  |
| **get_items** |none|Array|Returns the collection of speed-dial items in the button. |
| **get_text** |none|String|Returns the text of the FloatingActionButton|
| **set_text** |String|none|Sets the text of the FloatingActionButton|
| **get_icon** |none|String|Returns the icon name of the FloatingActionButton|
| **set_icon** |String|none|Sets the icon name of the FloatingActionButton|
| **get_shape** |none|Number|Returns the enumeration index of the FloatingActionButton shape|
| **set_shape** |Number|none|Sets the shape of the FloatingActionButton by its enumeration index|
| **get_size** |none|Number|Returns the enumeration index of the FloatingActionButton size|
| **set_size** |Number|none|Sets the size of the FloatingActionButton by its enumeration index|
| **repaint** |Boolean|none| Repaints the control. The "force" argument determines whether the resizing routine should be executed even if the respective widget's outer dimensions have not changed.|


# See Also

 * [RadFloatingActionButton Client-side Events]({%slug floatingactionbutton/client-side-programming/events%})
 * [Live Demo - RadFloatingActionButton Client-side API](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/api/defaultcs.aspx)
 * [Kendo UI FloatingActionButton widget API](https://docs.telerik.com/kendo-ui/api/javascript/ui/floatingactionbutton)


