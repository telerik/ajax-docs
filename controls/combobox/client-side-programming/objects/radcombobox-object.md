---
title: RadComboBox Object
page_title: RadComboBox Object | RadComboBox for ASP.NET AJAX Documentation
description: RadComboBox Object
slug: combobox/client-side-programming/objects/radcombobox-object
tags: radcombobox,object
published: True
position: 0
---

# RadComboBox Object



## 

This article explains about the methods of the **RadComboBox** client-side object. The **RadComboBox** client API allows for complete control over the client object, giving the developer the opportunity to set the behavior of the control depending on the scenario.

>note Telerik has removed the **tlrkComboBoxes** array from the **RadComboBox** object. You should use **Telerik.Web.UI.RadComboBox.ComboBoxes** instead - which you can use to obtain an array containing all the client-side **RadComboBox** instances.
>


The following table lists the most important methods of the client-side **RadComboBox** object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Starts tracking changes made to **RadComboBox** that will be preserved over postbacks. See **Example 1**. |
| **commitChanges** |none|none|Writes the changes to **RadComboBox** that were made since a previous call to **trackChanges** , so that they are preserved over postbacks. Client-side changes are available on the server after postback. You can use the [ClientChanges]({%slug combobox/client-side-programming/accessing-client-changes-at-the-server%}) property to access them. See **Example 1**. |
| **set_text** |(string text)|none|Sets the text of the input field to the value of the specified parameter. See **Example 2**. |
| **get_text** |none|string|Gets the text of the input field.|
| **get_checkedItems** |none|array|Gets an array of the checked **RadComboBoxItem** objects.|
| **get_lastWord** |none|string|Gets the word after the last separator in the text of **RadComboBox** input field. If a separator is not set, returns the text itself.|
| **set_allowCustomText** |Boolean|none| Allows/Disallows the users to type text in the input area, when called with 'false' as a parameter - the input area contains only the currently selected item's text, or text obtained by all selected items' texts separated by comma or other character.|
| **get_allowCustomText** |none|Boolean| Returns **true** the users are allowed to type random text in the input area, **false** otherwise.|
| **set_emptyMessage** |(string text)|none|Sets the **EmptyMessage** text of **RadComboBox** input field.|
| **get_emptyMessage** |none|string|Gets the **EmptyMessage** text of **RadComboBox** input field.|
| **set_value** |(string value)|none|Sets the value of **RadComboBox** .|
| **get_value** |none|string|Gets the value of **RadComboBox** .|
| **showDropDown** |none|none|Opens the drop-down list.|
| **set_closeDropDownOnBlur** |Boolean|none|If you call the **showDropDown** / **toggleDropDown** method on a button click, you will have to use **combo.set_closeDropDownOnBlur(false)** right before you call the **showDropDown** / **toggleDropDown** method, otherwise the drop-down area will flicker instead of open. Then, you should use **combo.set_closeDropDownOnBlur(true)** in the **OnClientBlur** event handler. You can see a demo at: [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisableitemsclientside/defaultcs.aspx)|
| **hideDropDown** |none|none|Closes the drop-down list.|
| **toggleDropDown** |none|none|Toggles the drop-down list.|
| **enable** |none|none|Enables the **RadComboBox** .|
| **disable** |none|none|Disables the **RadComboBox** .|
| **findItemByValue** |(string value)| **RadComboBoxItem** |Returns the first **RadComboBoxItem** object whose **Value** property equals the passed parameter.|
| **findItemByText** |(string text)| **RadComboBoxItem** |Returns the first **RadComboBoxItem** object whose **Text** property equals the passed parameter.|
| **findFirstMatch** |string| **RadComboBoxItem** |Returns the first **RadComboBoxItem** object whose **Text** contains the string passed as parameter.|
| **clearItems** |none|none|Clears all items of **RadComboBox** .|
| **clearSelection** |none|none|Clears the selection. See **Example 3**. |
| **requestItems** |(string text, Boolean)|none|Initiates a [load-on-demand]({%slug combobox/load-on-demand/overview%})callback request with the specified text, causing the **ItemsRequested** server event to fire or a request to be sent to a web service. The second Boolean parameter instructs the **RadComboBox** to append the new items ( **True** ) or clear items ( **False** ). See **Example 4**. |
| **get_id** |none|string|Gets the server-side ID of the **RadComboBox** instance.|
| **get_dropDownElement** |none|DOM object|Gets a reference to the drop-down list.|
| **get_inputDomElement** |none|DOM object|Gets a reference to the input area. See **Example 5**. |
| **get_imageDomElement** |none|DOM object|Gets a reference to image element (drop-down toggle). See **Example 6**. |
| **get_moreResultsBoxElement** |none|DOM object|Gets a reference to the **MoreResultsBox** image element.|
| **get_moreResultsBoxMessageElement** |none|DOM object|Gets a reference to the **MoreResultsBox Message** element.|
| **get_dropDownVisible** |none|Boolean| **True** if the drop-down is opened.|
| **set_enabled** |Boolean|none| Enables/disables the **RadComboBox**.|
| **get_enabled** |none|Boolean| **True** if **RadComboBox** is enabled.|
| **get_selectedItem** |none| **RadComboBoxItem** |Gets the currently selected item.|
| **get_selectedIndex** |none|integer|Gets the index of the currently selected item.|
| **get_items** |none| **RadComboBoxItemCollection** |Returns the items collection for **RadComboBox** .|
| **get_enableItemCaching** |none|boolean| **True** if item caching is enabled (applicable in load-on-demand scenario).|
| **set_enableItemCaching** |boolean|none|Enables/disables item caching (applicable in load-on-demand scenario).|
| **attachDropDown** |none|none|Attach the drop down list to the input element if it is not aligned properly, especially when a postback fires from a templated item. Use it in this scenario: [ Ajaxified control in ItemTemplate does a full postback. ]({%slug combobox/troubleshooting/ajaxified-control-in-itemtemplate-does-a-full-postback%})|
| **get_visibleItems** |none|array|Returns all visible items.|
| **setAllItemsVisible** |Boolean|none|Sets all items visible / invisible.|
| **get_changeText** |none|Boolean| **True** if **ChangeTextOnKeyBoardNavigation** is **true** .|
| **set_changeText** |Boolean|none|Sets the **ChangeTextOnKeyBoardNavigation** property.|
| **get_enableTextSelection** |none|Boolean| **True** if **EnableTextSelection** is **True** .|
| **set_enableTextSelection** |boolean|none|Sets the **EnableTextSelection** property.|
| **get_markFirstMatch** |none|Boolean| **True** if **MarkFirstMatch** is **true** .|
| **set_markFirstMatch** |Boolean|none|Sets the **MarkFirstMatch** property.|
| **clearCache** |none|none|Clears the items cache if [EnableItemCaching]({%slug combobox/load-on-demand/caching-items%}) is **True** .|
| **get_highlightedItem** |none| **RadComboBoxItem** |Gets the currently highlighted item.|





>caption Example 1: Add a new item and persist it after a postback. 
````JavaScript
		
function AddNewItem() {
    var combo = $find("<%= RadComboBox1.ClientID %>");
    var comboItem = new Telerik.Web.UI.RadComboBoxItem();
    comboItem.set_text("item");
    combo.trackChanges();
    combo.get_items().add(comboItem);
    comboItem.select(); 
    combo.commitChanges();
}
	
````



>caption Example 2: Set **RadComboBox**'s text. 
````JavaScript
	
function SetTextOfTheComboBox() {
    var combo = $find("<%= RadComboBox1.ClientID %>"); 
    combo.set_text("CustomText");
}
	
````



>caption Example 3: Clear the selection. 
````JavaScript
	
function ClearSelection() {
    var combo = $find("<%= RadComboBox1.ClientID %>");
    combo.clearSelection(); 
}
	
````



>caption Example 4: Initiate a load-on-demand callback request with the specified text.
````ASPNET
	    
<script language="javascript" type="text/javascript">
function AddItems() {
    var combo = $find("<%= RadComboBox1.ClientID %>"); 
    combo.requestItems("Item1", true);
}
</script>

<telerik:RadComboBox 
    id="RadComboBox1" 
    runat="server"
    onitemsrequested="RadComboBox1_ItemsRequested">
</telerik:RadComboBox>
<input id="Button1" type="button" value="button" onclick="AddItems()" />
	
````



>caption Example 5: Set the background-color of the input area.
````JavaScript
	
function ChangeInputColor() {
    var combo = $find("<%= RadComboBox1.ClientID %>");
    var inputArea = combo.get_inputDomElement();
    inputArea.style.backgroundColor = "red" 
}
	
````



>caption Example 6: Set the image DOM element's src attribute. 
````JavaScript
	
function ChangeImageElement() {
    var combo = $find("<%= RadComboBox1.ClientID %>");
    var image = combo.get_imageDomElement();
    image.src = "MyImage.gif"; 
}
	
````



# See Also

 * [RadComboBoxItemCollection Object]({%slug combobox/client-side-programming/objects/radcomboboxitemcollection-object%})

 * [RadComboBoxItem Object]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%})
