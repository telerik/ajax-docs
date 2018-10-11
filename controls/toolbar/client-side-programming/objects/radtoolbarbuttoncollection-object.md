---
title: RadToolBarButtonCollection Object
page_title: RadToolBarButtonCollection Object | RadToolBar for ASP.NET AJAX Documentation
description: RadToolBarButtonCollection Object
slug: toolbar/client-side-programming/radtoolbarbuttoncollection-object
tags: radtoolbarbuttoncollection,object
published: True
position: 3
previous_url: controls/toolbar/client-side-programming/radtoolbarbuttoncollection-object
---

# RadToolBarButtonCollection Object

RadToolBar's items can contain **Buttons**, **DropDowns** and **SplitButtons**. Each **DropDown** and **SplitButton** has its **Buttons** collection so that buttons can be added to these collections.

The **RadToolBarButtonCollection** object is returned by the **get_buttons** method of the **RadToolBarDropDown** or the **RadToolBarSplitButton** objects.The following table lists the most important methods.

>tip Changes to the button collection made using these methods do not persist after a postback unless surrounded by a call to the **trackChanges** and the **commitChanges** methods of the toolbar object.
>

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |RadToolBarButton|none|Adds a child button to the collection.(see **Example 1**)|
|  **insert**  | int, RadToolBarButton | none | Inserts the button into the collection at the position defined by the first (index) parameter. (see **Example 2**) |
|  **remove**  | RadToolBarButton | none | Removes the specified button from the collection. (see **Example 3**)|
|  **clear**  | none | none | Clears the Buttons collection of all the child buttons it contains. (see **Example 4**)|
|  **getButton**  | int | RadToolBarButton | Returns the button from the collection that resides at the specified index. (see **Example 5**) |
|  **indexOf**  | RadToolBarButton | int | Returns the index of a button. (see **Example 6**)|
|  **removeAt**  | int | none | Removes the button at the specified index. (see **Example 7**)|
|  **get_count**  | none | int | Returns the number of the buttons in the collection. (see **Example 8**)|


>caption Example 1: Demonstrates the usage of the add method
````JavaScript	
var toolBar = $find("<%=RadToolBar1.ClientID %>");

//creates a new DropDown containing one child button
toolBar.trackChanges();
var dropDown = new Telerik.Web.UI.RadToolBarDropDown();
dropDown.set_text("DropDown");
var dropDownButton = new Telerik.Web.UI.RadToolBarButton();
dropDownButton.set_text("button1");
dropDown.get_buttons().add(dropDownButton);

//creates a new SplitButton containing one child button
var splitButton = new Telerik.Web.UI.RadToolBarSplitButton();
splitButton.set_text("Split Button");
var splitChildButton = new Telerik.Web.UI.RadToolBarButton();
splitChildButton.set_text("button1");
splitButton.get_buttons().add(splitChildButton);
toolBar.get_items().add(dropDown);
toolBar.get_items().add(splitButton);
toolBar.commitChanges();				
````

>caption Example 2: Demonstrates the usage of the insert method
````JavaScript	
toolBar.trackChanges();
var dropDown = new Telerik.Web.UI.RadToolBarDropDown();
dropDown.set_text("DropDown");
var dropDownButton = new Telerik.Web.UI.RadToolBarButton();
dropDownButton.set_text("button1");

//inserts a new button at index 0 of the dropDown's Buttons collection
dropDown.get_buttons().insert(0, dropDownButton);
var splitButton = new Telerik.Web.UI.RadToolBarSplitButton();
splitButton.set_text("Split Button");
var splitChildButton = new Telerik.Web.UI.RadToolBarButton();
splitChildButton.set_text("button1");

//inserts a new button at index 0 of the splitButton's Buttons collection
splitButton.get_buttons().insert(0, splitChildButton);
toolBar.commitChanges();				
````

>caption Example 3: Demonstrates the usage of the remove method
````JavaScript	
toolBar.trackChanges();

//removes the first button from the dropDown's Buttons collection
var firstChildButton = dropDown.get_buttons().getButton(0);
dropDown.get_buttons().remove(firstChildButton);

//removes the first button from the splitButton's Buttons collection
var firstChildButton = splitButton.get_buttons().getButton(0);
splitButton.get_buttons().remove(firstChildButton);
toolBar.commitChanges();				
````

>caption Example 4: Demonstrates the usage of the clear method
````JavaScript
toolBar.trackChanges();
dropDown.get_buttons().clear();splitButton.get_buttons().clear();
toolBar.commitChanges()				
````

>caption Example 5: Demonstrates the usage of the getButton method
````JavaScript	     
var firstChildButton = dropDown.get_buttons().getButton(0);  
var firstChildButton = splitButton.get_buttons().getButton(0);				
````

>caption Example 6: Demonstrates the usage of the indexOf method
````JavaScript	
var firstChildButton = dropDown.get_buttons().getButton(0);
dropDown.get_buttons().indexOf(firstChildButton);
var firstChildButton = splitButton.get_buttons().getButton(0);
splitButton.get_buttons().indexOf(firstChildButton);				
````

>caption Example 7: Demonstrates the usage of the removeAt method
````JavaScript
//the code below will remove the first button in the collection
dropDown.get_buttons().removeAt(0);
splitButton.get_buttons().removeAt(0);				
````

>caption Example 8: Demonstrates the usage of the get_count method
````JavaScript
dropDown.get_buttons().get_count();
splitButton.get_buttons().get_count();				
````

