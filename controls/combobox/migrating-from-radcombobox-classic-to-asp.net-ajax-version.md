---
title: Migrating from RadComboBox Classic to ASP.NET AJAX version
page_title: Migrating from RadComboBox Classic to ASP.NET AJAX version - RadComboBox
description: Check our Web Forms article about Migrating from RadComboBox Classic to ASP.NET AJAX version.
slug: combobox/migrating-from-radcombobox-classic-to-asp.net-ajax-version
tags: migrating,from,radcombobox,classic,to,asp.net,ajax,version
published: True
position: 6
---

# Migrating from RadComboBox Classic to ASP.NET AJAX version



**RadComboBox for ASP.NET AJAX** has changed because of evolving to the ASP.NET Ajax framework and Telerik.Web.UI suite. All of the client-side properties and methods' names have changed along with several server API changes. Some properties and methods have been completely removed, while new ones have been added.The control's client-side API is not backward-compatible with **RadComboBox Classic** version. All the changes included in the AJAX RadComboBox's client-side API are listed below:

## Client-side API Changes

## RadComboBox class

>note The **tlrkComboBoxes** array has been removed. The **Telerik.Web.UI.RadComboBox.ComboBoxes** should be used instead. For more details please refer to the [Client-Side Basics]({%slug combobox/client-side-programming/overview%}) article.
>



>caption  

|  **RadComboBox Classic**  |  **RadComboBox AJAX**  |
| ------ | ------ |
| **_Methods_** ||
|HideDropDown|hideDropDown|
|ToggleDropDown|toggleDropDown|
|ShowDropDown|showDropDown|
|Disable|disable|
|Enable|enable|
|FindItemByValue|findItemByValue|
|FindItemByText|findItemByText|
|GetText / SetText|get_text / set_text|
|GetValue / SetValue|get_value / set_value|
|RequestItems|requestItems|
|ClearItems|clearItems|
|ClearSelection|clearSelection|
|ClientDataString|The ClientDataString property has been removed. The **OnClientItemsRequesting** event's event arguments should be used instead:

````ASPNET
	     
function OnClientItemsRequesting(sender, eventArgs)
{    
    //get the context object    
    var context = eventArgs.get_context();    
    //set a value to the context object    
    context["FilterString"] = eventArgs.get_text();  
}
				
````

Then, you can access the context object in the **WebService** method:

````C#
	     
IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
string txt = contextDictionary["FilterString"].ToStrring();
				
````

You can also access the context object in the **ItemsRequested** event handler using the event arguments:

````C#
	     
protected void RadComboBox1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{    
    string txt = e.Context["FilterString"].ToString();
}
				
````


|  **RadComboBox Classic**  |  **RadComboBox AJAX**  |
| ------ | ------ |
| **_Properties_** ||
|MoreResultsBoxID|get_moreResultsBoxElement()- returns the DOM element of the MoreResultsBox.|
|MoreResultsMessageBoxID|get_moreResultsBoxMessageElement() - returns the DOM element of the MoreResultsBox element.|
|DropDownVisible|get_DropDownVisible()|
|ImageID|get_imageDomElement() - returns the DOM element of the drop arrow image.|
|InputID|get_inputDomElement() - returns the DOM element of the input field.|
|DropDownID|get_dropDownElement()- returns the DOM element of the drop-down area.|
|Items|get_items() - returns an Items collection.|
|Enabled|get_enabled() - returns true if the combobox is enabled, false otherwise. set_enabled(true) - enables the RadComboBox, set_enabled(false) - disables the RadComboBox.|
|SelectedItem|get_selectedItem() / set_selectedItem(item)|
|HighlightedItem|get_highlightedItem() / set_highlightedItem(item)|

## RadComboBoxItem class
 

|  **RadComboBoxItem Classic**  |  **RadComboBoxItem AJAX**  |
| ------ | ------ |
| **_Methods_** ||
|Highlight|highlight|
|UnHighlight|unHighlight|
|Disable|disable|
|Enable|enable|
|Select|select|
|SetAttribute|setAttribute|
| **_Properties_** ||
|Enabled|get_enabled() - returns true if the item is enabled, false otherwise. set_enabled(true) - enables an item, set_enabled(false) - disables an item.|
|Index|get_index()|
|ComboBox|get_combobox()|
|Text|get_text() / set_text(string)|
|Value|get_value() / set_value(string)|

## RadComboBoxItemCollection class (new)


|  **Member**  |  **Notes**  |
| ------ | ------ |
| **_Methods_** ||
|add|Adds an item|
|insert|Inserts an item|
|remove|Removes an item|
|clear|Clears the items|
|getItem|Gets an item from the Items collection.|
|indexOf|Returns the index of an item.|
|removeAt|Removes an item at a specified index.|
|get_count|Returns the count of the items.|
|trackChanges|Indicates the beginning of client-side changes that are meant to be persisted on the server.|
|commitChanges|Indicates the end of client-side changes that are meant to be persisted on the server.|

## Server-side API changes

## RadComboBox class

 

|  **RadComboBox Classic**  |  **Notes**  |
| ------ | ------ |
| **_Properties_** ||
|ContentFile|Removed: The **LoadContentFile** method should be used instead.|
|ExternalCallbackPage|Removed: An external streamer page is no longer needed. The items' population of the RadComboBox should be done via [WebService]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}) instead.|
|IsCallBack|Removed: The **Page.IsCallBack** property should be used instead.|
|Value|Removed: With the new **RadComboBox for ASP.NET AJAX** , the **SelectedValue** property is persisted on the server even when the items are loaded on demand. Therefore, the Value property is no longer needed.|
|RadComboBoxItemsRequestedEventArgs.ClientDataString|Removed: The **RadComboBoxItemsRequestedEventArgs.Context** property should be used instead. It returns an object of type **IDictionary** .|
|AfterClientCallBackError|Changed to **OnClientItemsRequestFailed.** |
| **_Methods_** ||
|GetXmlString|Changed to **GetXml** (inherited from ControlItemContainer class).|
|LoadXmlString|Changed to **LoadXml** (inherited from ControlItemContainer class).|
