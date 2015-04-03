---
title: RadComboBox Object
page_title: RadComboBox Object | UI for ASP.NET AJAX Documentation
description: RadComboBox Object
slug: combobox/client-side-programming/objects/radcombobox-object
tags: radcombobox,object
published: True
position: 0
---

# RadComboBox Object



## 

This article explains about the methods of the __RadComboBox__ client-side object. The __RadComboBox__ client API allows for complete control over the client object, giving the developer the opportunity to set the behavior of the control depending on the scenario.

>note Telerik has removed the __tlrkComboBoxes__ array from the __RadComboBox__ object. You should use __Telerik.Web.UI.RadComboBox.ComboBoxes__ instead - which you can use to obtain an array containing all the client-side __RadComboBox__ instances.
>


The following table lists the most important methods of the client-side __RadComboBox__ object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __trackChanges__ |none|none|Starts tracking changes made to __RadComboBox__ that will be preserved over postbacks.|
| __commitChanges__ |none|none|Writes the changes to __RadComboBox__ that were made since a previous call to __trackChanges__ , so that they are preserved over postbacks.

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



>tip Client-side changes are available on the server after postback. You can use the[ClientChanges]({%slug combobox/client-side-programming/accessing-client-changes-at-the-server%})property to access them.
>
|
| __set_text__ |(string text)|none|Sets the text of the input field to the value of the specified parameter.

````JavaScript
	
	
	        function SetTextOfTheComboBox() {
	            var combo = $find("<%= RadComboBox1.ClientID %>"); 
	            combo.set_text("CustomText");
	        }
	
````

|
| __get_text__ |none|string|Gets the text of the input field.|
| __get_checkedItems__ |none|array|Gets an array of the checked __RadComboBoxItem__ objects.|
| __get_lastWord__ |none|string|Gets the word after the last separator in the text of __RadComboBox__ input field. If a separator is not set, returns the text itself.|
| __set_emptyMessage__ |(string text)|none|Sets the __EmptyMessage__ text of __RadComboBox__ input field.|
| __get_emptyMessage__ |none|string|Gets the __EmptyMessage__ text of __RadComboBox__ input field.|
| __set_value__ |(string value)|none|Sets the value of __RadComboBox__ .|
| __get_value__ |none|string|Gets the value of __RadComboBox__ .|
| __showDropDown__ |none|none|Opens the drop-down list.|
| __set_closeDropDownOnBlur__ |Boolean|none|If you call the __showDropDown__ / __toggleDropDown__ method on a button click, you will have to use __combo.set_closeDropDownOnBlur(false)__ right before you call the __showDropDown__ / __toggleDropDown__ method, otherwise the drop-down area will flicker instead of open.Then, you should use __combo.set_closeDropDownOnBlur(true)__ in the __OnClientBlur__ event handler. You can see a demo at:[Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisableitemsclientside/defaultcs.aspx)|
| __hideDropDown__ |none|none|Closes the drop-down list.|
| __toggleDropDown__ |none|none|Toggles the drop-down list.|
| __enable__ |none|none|Enables the __RadComboBox__ .|
| __disable__ |none|none|Disables the __RadComboBox__ .|
| __findItemByValue__ |(string value)| __RadComboBoxItem__ |Returns the first __RadComboBoxItem__ object whose __Value__ property equals the passed parameter.|
| __findItemByText__ |(string text)| __RadComboBoxItem__ |Returns the first __RadComboBoxItem__ object whose __Text__ property equals the passed parameter.|
| __clearItems__ |none|none|Clears all items of __RadComboBox__ .|
| __clearSelection__ |none|none|Clears the selection.

````JavaScript
	
	        function ClearSelection() {
	            var combo = $find("<%= RadComboBox1.ClientID %>");
	            combo.clearSelection(); 
	          }
	
````

|
| __requestItems__ |(string text, Boolean)|none|Initiates a[load-on-demand]({%slug combobox/load-on-demand/overview%})callback request with the specified text, causing the __ItemsRequested__ server event to fire or a request to be sent to a web service. The second Boolean parameter instructs the __RadComboBox__ to append the new items ( __True__ ) or clear items ( __False__ ).

````ASPNET
	    
	   <script language="javascript" type="text/javascript">
	    function AddItems() {
	        var combo = $find("<%= RadComboBox1.ClientID %>"); 
	        combo.requestItems("Item1", true);
	    }
	    </script>
	
	    <telerik:radcombobox 
	        id="RadComboBox1" 
	        runat="server"
	        onitemsrequested="RadComboBox1_ItemsRequested">
	    </telerik:radcombobox>
	    <input id="Button1" type="button" value="button" onclick="AddItems()" />
	
````

|
| __get_id__ |none|string|Gets the server-side ID of the __RadComboBox__ instance.|
| __get_dropDownElement__ |none|DOM object|Gets a reference to the drop-down list.|
| __get_inputDomElement__ |none|DOM object|Gets a reference to the input area.

````JavaScript
	
	    function ChangeInputColor() {
	        var combo = $find("<%= RadComboBox1.ClientID %>");
	        var inputArea = combo.get_inputDomElement();
	        inputArea.style.backgroundColor = "red" 
	     }
	
````

|
| __get_imageDomElement__ |none|DOM object|Gets a reference to image element (drop-down toggle).

````JavaScript
	
	     function ChangeImageElement() {
	         var combo = $find("<%= RadComboBox1.ClientID %>");
	         var image = combo.get_imageDomElement();
	         image.src = "MyImage.gif"; 
	    }
	
````

|
| __get_moreResultsBoxElement__ |none|DOM object|Gets a reference to the __MoreResultsBox__ image element.|
| __get_moreResultsBoxMessageElement__ |none|DOM object|Gets a reference to the __MoreResultsBox Message__ element.|
| __get_dropDownVisible__ |none|Boolean| __True__ if the drop-down is opened.|
| __get_enabled__ |none|Boolean| __True__ if __RadComboBox__ is enabled.|
| __get_selectedItem__ |none| __RadComboBoxItem__ |Gets the currently selected item.|
| __get_selectedIndex__ |none|integer|Gets the index of the currently selected item.|
| __get_items__ |none| __RadComboBoxItemCollection__ |Returns the items collection for __RadComboBox__ .|
| __get_enableItemCaching__ |none|boolean| __True__ if item caching is enabled (applicable in load-on-demand scenario).|
| __set_enableItemCaching__ |boolean|none|Enables/disables item caching (applicable in load-on-demand scenario).|
| __attachDropDown__ |none|none|Attach the drop down list to the input element if it is not aligned properly, especially when a postback fires from a templated item. Use it in this scenario:[ Ajaxified control in ItemTemplate does a full postback. ]({%slug combobox/troubleshooting/ajaxified-control-in-itemtemplate-does-a-full-postback%})|
| __get_visibleItems__ |none|array|Returns all visible items.|
| __setAllItemsVisible__ |Boolean|none|Sets all items visible / invisible.|
| __get_changeText__ |none|Boolean| __True__ if __ChangeTextOnKeyBoardNavigation__ is __true__ .|
| __set_changeText__ |Boolean|none|Sets the __ChangeTextOnKeyBoardNavigation__ property.|
| __get_enableTextSelection__ |none|Boolean| __True__ if __EnableTextSelection__ is __True__ .|
| __set_enableTextSelection__ |boolean|none|Sets the __EnableTextSelection__ property.|
| __get_markFirstMatch__ |none|Boolean| __True__ if __MarkFirstMatch__ is __true__ .|
| __set_markFirstMatch__ |Boolean|none|Sets the __MarkFirstMatch__ property.|
| __clearCache__ |none|none|Clears the items cache if[EnableItemCaching]({%slug combobox/load-on-demand/caching-items%})is __True__ .|
| __get_highlightedItem__ |none| __RadComboBoxItem__ |Gets the currently highlighted item.|

# See Also

 * [RadComboBoxItemCollection Object]({%slug combobox/client-side-programming/objects/radcomboboxitemcollection-object%})

 * [RadComboBoxItem Object]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%})
