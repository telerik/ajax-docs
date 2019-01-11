---
title: RadMultiColumnComboBox Object
page_title: RadMultiColumnComboBox Object | RadMultiColumnComboBox for ASP.NET AJAX Documentation
description: RadMultiColumnComboBox Object
slug: multicolumncombobox/client-side-programming/overview
tags: multicolumncombobox,object
published: True
position: 0
---

# RadMultiColumnComboBox Object

This article lists the client-side API of **RadMultiColumnComboBox** and how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var rmccbObject = $find("<%=RadMultiColumnComboBox1.ClientID %>");
````

RadMultiColumnComboBox is a server-side wrapper over the Kendo UI MultiColumnComboBox Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox#methods). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**
    
        var rmccbObject  = $find("<%=RadMultiColumnComboBox1.ClientID %>"); //the standard script control object
        var kendoMccbm = rmccbObject.get_kendoWidget(); //the Kendo widget

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

    **JavaScript**
    
        var kendoMccbm = $telerik.$("#<%=RadMultiColumnComboBox1.ClientID %>").data("kendoMultiColumnComboBox"); //the jQuery selector must get the RadMultiColumnComboBox1 wrapper span element

In addition to using the Kendo method directly, you can also use their wrappers that follow the MS AJAX convention through the RadMultiColumnComboBox client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadMultiColumnComboBox object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **close** |none|none|Closes the dropdown.|
| **destroy** |none|none|Destroys the underlying Kendo widget (calls its [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **focus** |none|none|Focuses the input.|
| **get_dataItem** |Number|object|Returns the data item for the corresponding index. If no index is provided, the data item for the selected item will be returned.|
| **get_filter** |none|string|Returns the filtering method used to determine the suggestions for the current value.|
| **get_items** | none | Array | Returns an array of the DOM `<li>` elements, which correspond to the data items from the Kendo UI DataSource of the widget. |
| **get_kendoWidget** |none|object|Returns a reference to the underlying Kendo MultiColumnComboBox widget.|
| **get_readOnly** |none|Boolean|Returns whether the input is readonly and typing is not allowed.|
| **get_selected** |none|Number|Returns the index of the selected item. If custom value is entered, returns `-1`.|
| **get_text** |none|string|Returns the current text.|
| **get_value** |none|string|Returns the current value.|
| **open** |none|none|Opens the dropdown.|
| **refresh** |none|none|Refresh the popup by rendering all items again.|
| **search** |string|none|Searches the data source for the provided value and displays any matches as suggestions.|
| **set_dataSource** | object| none | Sets the dataSource of the widget and rebinds it. Can be an actual kendo.data.DataSource object or an array of object literals.|
| **set_enabled** | Boolean | none | Enables or disables the widget if you pass `true` or `false` respectively.|
| **set_filter** | string | none | Sets the [filter](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/configuration/filter) setting of the underlying widget. Can be `startswith`, `endswith`, `eq` and `contains`. Pass `none` to disable filtering.|
| **set_readOnly** |Boolean|none|Sets whether the input is readonly and typing is disabled.|
| **set_selected** |object|none|Sets the new selected item. See the widget's [select](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/methods/select) method for more details on the possible arguments you can pass and its behavior.|
| **set_text** |string|none|Sets the text. See the underlying [text](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/methods/text) method for more details on its behavior.|
| **set_value** |string|none|Sets the value. See the underlying [value](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/methods/value) method for more details on its behavior.|
| **suggest** |string|none|Sets the value of the widget to the specified argument and visually selects the text.|
| **toggle** |none|none|Opens or closes the dropdown depending on its current state.|



# See Also

 * [Live Demo - RadMultiColumnComboBox Client-side API](https://demos.telerik.com/aspnet-ajax/MultiColumnComboBox/client-side-api/defaultcs.aspx)

 * [RadMultiColumnComboBox Client-side Events]({%slug multicolumncombobox/client-side-programming/events%})
 
