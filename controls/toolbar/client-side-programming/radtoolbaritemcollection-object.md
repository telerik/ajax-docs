---
title: RadToolBarItemCollection Object
page_title: RadToolBarItemCollection Object | RadToolBar for ASP.NET AJAX Documentation
description: RadToolBarItemCollection Object
slug: toolbar/client-side-programming/radtoolbaritemcollection-object
tags: radtoolbaritemcollection,object
published: True
position: 2
---

# RadToolBarItemCollection Object


## 

The **RadToolBarItemCollection** object is returned by the **get_items** method of the **RadToolBar** object. The following table lists the most important methods.

>caution RadToolBar's items can contain **Buttons** , **DropDowns** and **SplitButtons** . Each **DropDown** and **SplitButton** has its **Buttons** collection so that buttons can be added to these collections.
>

>note Changes to the item collection made using these methods do not persist after a postback unless surrounded by a call to the **trackChanges** method of the toolbar object and the **commitChanges** method of the toolbar object.
>

>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |[RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%})|none|Adds a child item to the collection.|

````JavaScript	
var toolBar = $find("<%=RadToolBar1.ClientID %>");

//create a new Button
var button1 = new Telerik.Web.UI.RadToolBarButton();
button1.set_text("New Button1");

//create a new DropDown containing one child button
toolBar.trackChanges();
var dropDown = new Telerik.Web.UI.RadToolBarDropDown();
dropDown.set_text("DropDown");
var dropDownButton = new Telerik.Web.UI.RadToolBarButton();
dropDownButton.set_text("button1");
dropDown.get_buttons().add(dropDownButton);

//create a new SplitButton containing one child button
var splitButton = new Telerik.Web.UI.RadToolBarSplitButton();
splitButton.set_text("Split Button");
var splitChildButton = new Telerik.Web.UI.RadToolBarButton();
splitChildButton.set_text("button1");
splitButton.get_buttons().add(splitChildButton);
toolBar.get_items().add(button1);
toolBar.get_items().add(dropDown);
toolBar.get_items().add(splitButton);
toolBar.commitChanges();				
````


>caption  

|  **insert**  | int,[RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) | none | Inserts the item into the collection at the position defined by the first (index) parameter. |
| ------ | ------ | ------ | ------ |

````JavaScript	
toolBar.trackChanges();
var insertButton = new Telerik.Web.UI.RadToolBarButton();
insertButton.set_text("Inserted Button");
toolBar.get_items().insert(0,insertButton);
var insertDropDown = new Telerik.Web.UI.RadToolBarDropDown();
insertDropDown.set_text("Inserted DropDown");
var dropDownButton = new Telerik.Web.UI.RadToolBarButton();
dropDownButton.set_text("button1");
insertDropDown.get_buttons().add(dropDownButton);
toolBar.get_items().insert(0, insertDropDown);
toolBar.commitChanges();				
````

>caption  

|  **remove**  | [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) | none | Removes the specified item from the collection. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var firtItem = toolBar.get_items().getItem(0);
toolBar.trackChanges();
toolBar.get_items().remove(firtItem);
toolBar.commitChanges();				
````


>caption  

|  **clear**  | none | none | Clears the Items collection of all the child items it contains. |
| ------ | ------ | ------ | ------ |

````JavaScript	
toolBar.trackChanges();
toolBar.get_items().clear();
toolBar.commitChanges();				
````

>caption  

|  **getItem**  | int | [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) | Returns the item from the collection that resides at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript	     
var firtItem = toolBar.get_items().getItem(0);				
````


>caption  

|  **indexOf**  | [RadToolBarItem]({%slug toolbar/client-side-programming/radtoolbaritem-object%}) | int | Returns the index of an item. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var item = toolBar.get_items().getItem(0);
toolBar.get_items().indexOf(item);				
````


>caption  

|  **removeAt**  | int | none | Removes the item at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript	
//the code below will remove the first item in the collection

toolBar.get_items().removeAt(0);				
````

>caption  

|  **get_count**  | none | int | Returns the number of the items in the collection. |
| ------ | ------ | ------ | ------ |

````JavaScript	
toolBar.get_items().get_count();				
````

# See Also

 * [Working With Items at the Client]({%slug toolbar/radtoolbar-items/working-with-items-at-the-client%})

 * [Overview]({%slug toolbar/client-side-programming/overview%})
