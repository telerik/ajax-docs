---
title: RadPanelBar Object
page_title: RadPanelBar Object | RadPanelBar for ASP.NET AJAX Documentation
description: RadPanelBar Object
slug: panelbar/client-side-programming/radpanelbar-object
tags: radpanelbar,object
published: True
position: 1
---

# RadPanelBar Object



## 

The following table lists the most important methods of the **RadPanelBar** client-side object:


>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Begins tracking changes to the panel items. Only changes to the items that occur between a call to **trackChanges** and **commitChanges** persist after a postback.|
| **commitChanges** |none|none|Ends tracking changes to the panel items. Only changes to the items that occur between a call to **trackChanges** and **commitChanges** persist after a postback.|

>tip Client side changes are available on the server side after postback. You can use the[ClientChanges]({%slug panelbar/client-side-programming/accessing-client-changes-on-the-server%})property to access them.
>


````JavaScript
	
	
	        function AddNewItem() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>");
	            var panelItem = new Telerik.Web.UI.RadPanelItem();
	            panelItem.set_text("New Item");
	            panel.trackChanges();
	            panel.get_items().add(panelItem); 
	            panel.commitChanges();
	        }
	
````




>caption  

|  **disable**  | none | none | Disables all items in the panel. Clicking on any item has no effect, child items cannot be opened. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	        function Disablepanel() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>");
	            panel.disable(); 
	        }
	
````




>caption  

|  **enable**  | none | none | Enables all items in the panel. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	        function Enablepanel() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>");
	            panel.enable(); 
	        }
	
````




>caption  

|  **get_enabled**  | none | boolean | True if the panel is enabled. To enable a panel, use the enable() method. |
| ------ | ------ | ------ | ------ |
| **findItemByUrl** |(string URL)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first **RadPanelBarItem** object whose **NavigateUrl** property matches the parameter.

>caution The **NavigateUrl** property is transformed to absolute URL on the client side, e.g. *"default.aspx"* is turned into: *http://mydomain.com/default.aspx.* 
>
|
| **findItemByValue** |(string value)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first **RadPanelBarItem** object whose **Value** property is equal to the passed parameter.|
| **findItemByText** |(string text)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first **RadPanelBarItem** object whose **Text** property is equal to the passed parameter.|
| **findItemByUrl** |(string URL)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first **RadPanelBarItem** object whose **NavigateUrl** property is equal to the passed parameter.|
| **findItemByAbsoluteUrl** |(string URL)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first **RadPanelBarItem** object whose **NavigateUrl** property is equal to the passed parameter. Note that the parameter should end with '/' like:var item = sender.findItemByAbsoluteUrl('http://www.test.com/');|
| **findItemByAttribute** |(string attributeName, string value)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first **RadPanelBarItem** object with a custom attribute of the specified name that has the specified value.|
| **get_items** |none|[RadPanelItemCollection]({%slug panelbar/client-side-programming/radpanelitemcollection-object%})|Returns the collection of root level items.|

````JavaScript
	
	
	        function showRootItems() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>"); 
	            var items = panel.get_items();
	            for (var i = 0; i < items.get_count(); i++) {
	                alert(items.getItem(i).get_text());
	             } 
	        }
	
````




>caption  

|  **get_allItems**  | none | Array | Gets a linear collection of all items. This includes all root and child items in the panel. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	        function showAllItems() {
	            var panel = $find("<%=RadPanelBar1.ClientID %>");
	            for (var i = 0; i < panel.get_allItems().length; i++) {
	                alert(panel.get_allItems()[i].get_text());
	            } 
	         }
	
````




>caption  

|  **get_focusedItem**  | none | [RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%}) | Returns the focused root level item. Null if no root level item has focus. |
| ------ | ------ | ------ | ------ |
| **get_expandedItem** |none|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the last root level item that was expanded. Null if no root level items are expanded.|
| **get_expandedItems** |none|Array|Returns an array of the **RadPanelBarItem** objects for every expanded item in the panel bar (including expanded child items).|
| **get_selectedItem** |none|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the selected item if it exists. (It does not have to be a root level item). Null if the panel does not have a selected item.|
| **get_selectedItems** |none|Array|Returns an array containing the selected items in the panel. Because the panel bar does not allow more than one item to be selected, the array always has 0 or 1 elements.|
| **get_attributes** |none|Collection|Returns the collection of custom attributes for the panel.|
| **get_element** |none|HTML Element|Gets the DOM element for the panel.|

````JavaScript
	
	
	         // hide the panel
	         // note this change does not persist after a postback
	         function hidepanel() {
	             var panel = $find("<%= RadPanelBar1.ClientID %>");
	             panel.get_element().style.display = "none";
	         }
	
	        // show the panel
	        function showpanel() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>");
	            panel.get_element().style.display = "";
	         }
	
````




>caption  

|  **get_childListElement**  | none | HTML Element | Gets the DOM element for the list of items in the panel. |
| ------ | ------ | ------ | ------ |
| **enableEvents** |none|none|Enables the panel bar's client-side event emitting. Events are enabled by default.|
| **disableEvents** |none|none|Disables the panel bar's client-side event emitting.|
| **add_<EventName>** |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name <EventName>. Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug panelbar/client-side-programming/events%}).|

````JavaScript
	
	
	         function OnClientItemBlurHandler() {
	             alert("goodbye");
	         } 
	        
	        function AttachBlurHandler() {
	            var panel = $find("<%=RadPanelBar1.ClientID %>");
	            panel.add_itemBlur(OnClientItemBlurHandler);
	        }
	
````




>caption  

|  **remove_<EventName>**  | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name <EventName>.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug panelbar/client-side-programming/events%}). |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	
	        function OnClientItemBlurHandler() {
	            alert("goodbye");
	        } 
	        
	        function DetachBlurHandler() {
	            var panel = $find("<%=RadPanelBar1.ClientID %>");
	            panel.remove_itemBlur(OnClientItemBlurHandler);
	        }
	
````



# See Also

 * [Overview]({%slug panelbar/client-side-programming/overview%})

 * [Events]({%slug panelbar/client-side-programming/events%})

 * [Working With Items at the Client]({%slug panelbar/radpanelbar-items/working-with-items-at-the-client%})
