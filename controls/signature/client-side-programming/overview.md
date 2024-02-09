---
title: Overview
page_title: RadSignature object
description: Check our Web Forms article about the API of RadSignature object.
slug: signature/client-side-programming/overview
tags: overview
published: True
position: 0
---


# RadSignature object

This article lists the client-side API of **RadSignature** and shows how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var signature = $find("<%=RadSignature1.ClientID %>");
````

Signature UI component for ASP.NET AJAX is a server-side wrapper over the Kendo UI Signature Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

````JavaScript
var signature  = $find("<%=RadSignature1.ClientID %>"); //the standard script control object
var kendoSignature = signature.get_kendoWidget(); //the Kendo widget
````

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

````JavaScript
var kendoSignature = $telerik.$("#<%=RadSignature1.ClientID %>").data("kendoSignature"); 
````

In addition to using the Kendo methods directly, you can also use their wrappers that follow the MS AJAX convention through the RadSignature client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadSignature object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **dispose** |none|none|Destroys the underlying Kendo widget (calls its [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **open** |none|none|Opens the Signature PopUp pad.  |
| **close** |none|none|Closes the Signature PopUp pad if opened.  |
| **disable** |none|none|Disables the Signature control. |
| **enable** |none|none|Enables the Signature control.  |
| **reset** |none|none|Resets the value of the Signature control to empty string.  |
| **get_backgroundColor** |none|string|Gets the background color of the Signature pad. |
| **set_backgroundColor** |string|none|Sets the background color of the Signature pad. |
| **get_enabled** |none|Boolean|Indicates whether the Signature is enabled. |
| **set_enabled** |Boolean|none|Enables/Disables the Signature Control. |
| **get_fillMode** |none|string|Gets the current FillMode of the Signature. |
| **set_fillMode** |string|none|Sets the FillMode of the Signature. |
| **get_hideLine** |none|Boolean|Indicates whether the dotted line in the Signature Pad is hidden. |
| **set_hideLine** |Boolean|none|Sets whether the dotted line in the Signature Pad to be hidden. |
| **get_maximizable** |none|Boolean|Indicates whether the control can be maximized. |
| **set_maximizable** |Boolean|none|Sets whether the control can be maximized. |
| **get_popupScale** |none|Number|Gets the current scale of the Signature PopUp. |
| **set_popupScale** |Number|none|Sets the current scale of the Signature PopUp. |
| **get_size** |none|string|Gets the current size of Signature UI control. |
| **set_size** |string|none|Sets the current size of Signature UI control. |
| **get_rounded** |none|string|Gets the current value of the Rounded property of Signature control. |
| **set_rounded** |string|none|Sets the current value of the Rounded property of Signature control. |
| **get_strokeWidth** |none|Number|Gets the current width of the stroke line of Signature control. |
| **set_strokeWidth** |Number|none|Sets the current width of the stroke line of Signature control. |
| **get_value** |none|string|Gets the current base64 string value of the component. |
| **set_value** |string|none|Sets the current base64 string value of the component. |

# See Also

 * [RadSignature Client-side Events]({%slug signature/client-side-programming/events%})
 * [Live Demo - RadSignature Client-side API](https://demos.telerik.com/aspnet-ajax/signature/api/defaultcs.aspx)
 * [Kendo UI Signature widget API](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature)


