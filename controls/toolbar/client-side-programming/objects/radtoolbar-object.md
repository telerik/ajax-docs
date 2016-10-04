---
title: RadToolBar Object
page_title: RadToolBar Object | RadToolBar for ASP.NET AJAX Documentation
description: RadToolBar Object
slug: toolbar/client-side-programming/radtoolbar-object
tags: radtoolbar,object
published: True
position: 0
---

# RadToolBar Object

## 

The following table lists the most important methods of the **RadToolBar** client-side object:

>caution Client side changes are available on the server side after postback. You can use the [ClientChanges]({%slug toolbar/client-side-programming/accessing-client-changes-at-the-server%}) property to access them.
>

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Begins tracking changes to the toolbar items. Only changes to the items that occur between a call to **trackChanges** and **commitChanges** persist after a postback. (see **Example 1**)|
| **commitChanges** |none|none|Ends tracking changes to the toolbar items. Only changes to the items that occur between a call to **trackChanges** and **commitChanges** persist after a postback. (see **Example 1**)|
|  **findItemByText**  | string | [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) | Returns the first item in the toolbar with the specified text.|
| **findItemByAttribute** |string, string|[RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%})|Returns the first item in the toolbar with the custom attribute specified by the first parameter set to the value specified by the second parameter.|
| **findItemByValue** |string|[RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%})|Returns the first item in the toolbar with the specified value.|
| **get_attributes** |none|[Attributes]({%slug toolbar/client-side-programming/attributes-object%})|Returns the collection of custom attributes defined for the toolbar.|
| **get_items** |none|[RadToolBarItemCollection]({%slug toolbar/client-side-programming/radtoolbaritemcollection-object%})|Returns the collection of items in the toolbar (not including items in drop-down lists).|
| **get_allItems** |none|Array of [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%})|Returns an array containing all the items in the toolbar, including the items in drop-down lists. Items in drop-down lists appear immediately following their parent items.|
| **get_orientation** |none|integer|Returns 0 if the toolbar is horizontal, 1 if it is vertical.|
| **set_orientation** |integer|none|Sets the orientation of the toolbar.|
| **get_expandAnimation** |none|[Animation]({%slug toolbar/client-side-programming/animation-object%})|Returns the expand animation object.|
| **get_collapseAnimation** |none|[Animation]({%slug toolbar/client-side-programming/animation-object%})|Returns the collapse animation object.|
| **get_element** |none|HTML element|Gets the DOM element for the toolbar.|
| **get_childListElement** |none|HTML element|Gets the DOM element for the UL element that lists the toolbar buttons.|
| **add_&lt;EventName&gt;** |eventHandler|none|Attaches an eventHandler to the event with the name &lt;EventName&gt;. Note that client-side event names differ from their server-side counterparts. For more information, see [Client-Side Events]({%slug toolbar/client-side-programming/events%}).|
| **remove_&lt;EventName&gt;** |eventHandler|Boolean|Detaches an eventHandler from the event with the name &lt;EventName&gt;.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see [Client-Side Events]({%slug toolbar/client-side-programming/events%}).|


>caption Example 1: Demonstrates the usage of trackChanges() and commitChanges() methods.

````JavaScript	
var toolBar = $find("<%=RadToolBar1.ClientID %>");
var dropDownButton = toolBar.get_items().getItem(0);
toolBar.trackChanges();
var dropDownChildButton = new Telerik.Web.UI.RadToolBarButton();
dropDownChildButton.set_text("Added on the client-side button");
dropDownButton.get_buttons().add(dropDownChildButton);
toolBar.commitChanges();				
````

