---
title: RadPanelBar Object
page_title: RadPanelBar Object | UI for ASP.NET AJAX Documentation
description: RadPanelBar Object
slug: panelbar/client-side-programming/radpanelbar-object
tags: radpanelbar,object
published: True
position: 1
---

# RadPanelBar Object



## 

The following table lists the most important methods of the __RadPanelBar__ client-side object:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __trackChanges__ |none|none|Begins tracking changes to the panel items. Only changes to the items that occur between a call to __trackChanges__ and __commitChanges__ persist after a postback.|
| __commitChanges__ |none|none|Ends tracking changes to the panel items. Only changes to the items that occur between a call to __trackChanges__ and __commitChanges__ persist after a postback.|

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

|  __disable__  | none | none | Disables all items in the panel. Clicking on any item has no effect, child items cannot be opened. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	        function Disablepanel() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>");
	            panel.disable(); 
	        }
	
````




>caption  

|  __enable__  | none | none | Enables all items in the panel. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	        function Enablepanel() {
	            var panel = $find("<%= RadPanelBar1.ClientID %>");
	            panel.enable(); 
	        }
	
````




>caption  

|  __get_enabled__  | none | boolean | True if the panel is enabled. To enable a panel, use the enable() method. |
| ------ | ------ | ------ | ------ |
| __findItemByUrl__ |(string URL)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first __RadPanelBarItem__ object whose __NavigateUrl__ property matches the parameter.

>caution The __NavigateUrl__ property is transformed to absolute URL on the client side, e.g. *"default.aspx"* is turned into: *http://mydomain.com/default.aspx.* 
>
|
| __findItemByValue__ |(string value)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first __RadPanelBarItem__ object whose __Value__ property is equal to the passed parameter.|
| __findItemByText__ |(string text)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first __RadPanelBarItem__ object whose __Text__ property is equal to the passed parameter.|
| __findItemByUrl__ |(string URL)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first __RadPanelBarItem__ object whose __NavigateUrl__ property is equal to the passed parameter.|
| __findItemByAbsoluteUrl__ |(string URL)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first __RadPanelBarItem__ object whose __NavigateUrl__ property is equal to the passed parameter. Note that the parameter should end with '/' like:var item = sender.findItemByAbsoluteUrl('http://www.test.com/');|
| __findItemByAttribute__ |(string attributeName, string value)|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the first __RadPanelBarItem__ object with a custom attribute of the specified name that has the specified value.|
| __get_items__ |none|[RadPanelItemCollection]({%slug panelbar/client-side-programming/radpanelitemcollection-object%})|Returns the collection of root level items.|

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

|  __get_allItems__  | none | Array | Gets a linear collection of all items. This includes all root and child items in the panel. |
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

|  __get_focusedItem__  | none | [RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%}) | Returns the focused root level item. Null if no root level item has focus. |
| ------ | ------ | ------ | ------ |
| __get_expandedItem__ |none|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the last root level item that was expanded. Null if no root level items are expanded.|
| __get_expandedItems__ |none|Array|Returns an array of the __RadPanelBarItem__ objects for every expanded item in the panel bar (including expanded child items).|
| __get_selectedItem__ |none|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the selected item if it exists. (It does not have to be a root level item). Null if the panel does not have a selected item.|
| __get_selectedItems__ |none|Array|Returns an array containing the selected items in the panel. Because the panel bar does not allow more than one item to be selected, the array always has 0 or 1 elements.|
| __get_attributes__ |none|Collection|Returns the collection of custom attributes for the panel.|
| __get_element__ |none|HTML Element|Gets the DOM element for the panel.|

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

|  __get_childListElement__  | none | HTML Element | Gets the DOM element for the list of items in the panel. |
| ------ | ------ | ------ | ------ |
| __enableEvents__ |none|none|Enables the panel bar's client-side event emitting. Events are enabled by default.|
| __disableEvents__ |none|none|Disables the panel bar's client-side event emitting.|
| __add_<EventName>__ |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name <EventName>. Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug panelbar/client-side-programming/events%}).|

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

|  __remove_<EventName>__  | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name <EventName>.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug panelbar/client-side-programming/events%}). |
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
