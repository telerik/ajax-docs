---
title: RadMultiSelect Object
page_title: RadMultiSelect Object | RadMultiSelect for ASP.NET AJAX Documentation
description: RadMultiSelect Object
slug: multiselect/client-side-programming/overview
tags: multiselect,object
published: True
position: 0
---

# RadMultiSelect Object

This article lists the client-side API of **RadMultiSelect** and how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var multiSelectObject = $find("<%=RadMultiSelect1.ClientID %>");
````

RadMultiSelect is a server-side wrapper over the Kendo UI MultiSelect Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect#methods). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**
    
        var multiSelectObject  = $find("<%=RadMultiSelect1.ClientID %>"); //the standard script control object
        var kendoMultiSelect = multiSelectObject.get_kendoWidget(); //the Kendo widget

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

    **JavaScript**
    
        var kendoMultiSelect = $telerik.$("#<%=RadMultiSelect1.ClientID %>").data("kendoMultiSelect"); //the jQuery selector must get the RadMultiSelect1 wrapper span element

In addition to using the Kendo method directly, you can also use their wrappers that follow the MS AJAX convention through the RadMultiSelect client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadMultiSelect object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clearValue** |none|none|Clears the list of selected values (items).|
| **close** |none|none|Closes the dropdown.|
| **dispose** |none|none|Disposes the MultiSelect client-side object (calls its underlying Kendo widget's [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **focus** |none|none|Focuses the input.|
| **get_enabled** |none|Boolean|Returns whether the control is enabled.|
| **get_inputElement** |none|DOM object|Returns a reference to the input element.|
| **get_items** | none | Array | Returns an array of the DOM `<li>` elements, which correspond to the data items from the Kendo UI DataSource of the widget. |
| **get_kendoWidget** |none|object|Returns a reference to the underlying Kendo MultiSelect widget.|
| **get_listElement** |none|DOM object|Returns a reference to the drop-down list element.|
| **get_readOnly** |none|Boolean|Returns whether the input is readonly and typing is not allowed.|
| **get_selectedDataItems** |none|Array|Returns a list of raw data records corresponding to the selected items.|
| **get_tagListElement** |none|DOM object|Returns a reference to the `ul` element, which holds the selected tags.|
| **get_ulElement** |none|DOM object|Returns a reference to the `ul` element, which holds the available options.|
| **get_value** |none|Array|Returns an array with the currently selected values (items).|
| **open** |none|none|Opens the popup.|
| **refresh** |none|none|Refresh the popup by rendering all items again.|
| **search** |string|none|Searches the data source for the provided value and displays any matches as suggestions.|
| **set_enabled** |Boolean|none| Enables or disables the widget if you pass `true` or `false` respectively.|
| **set_readOnly** |Boolean|none|Sets whether the input is readonly and typing is disabled.|
| **set_value** |string|none|Sets the value. See the underlying [value](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect/configuration/value) method for more details on its behavior.|
| **toggle** |none|none|Opens or closes the dropdown depending on its current state.|


# See Also

 * [Live Demo - RadMultiSelect Client-side API](https://demos.telerik.com/aspnet-ajax/multiselect/clientsideapi/defaultcs.aspx)

 * [RadMultiSelect Client-side Events]({%slug multiselect/client-side-programming/events%})

 
