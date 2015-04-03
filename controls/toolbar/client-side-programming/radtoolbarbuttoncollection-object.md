---
title: RadToolBarButtonCollection Object
page_title: RadToolBarButtonCollection Object | UI for ASP.NET AJAX Documentation
description: RadToolBarButtonCollection Object
slug: toolbar/client-side-programming/radtoolbarbuttoncollection-object
tags: radtoolbarbuttoncollection,object
published: True
position: 4
---

# RadToolBarButtonCollection Object



## 

RadToolBar's items can contain __Buttons__, __DropDowns__ and __SplitButtons__. Each __DropDown__ and __SplitButton__ has its __Buttons__ collection so that buttons can be added to these collections.

The __RadToolBarButtonCollection__ object is returned by the __get_buttons__ method of the __RadToolBarDropDown__ or the __RadToolBarSplitButton__ objects.The following table lists the most important methods.

>note Changes to the button collection made using these methods do not persist after a postback unless surrounded by a call to the __trackChanges__ and the __commitChanges__ methods of the toolbar object.
>



>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add__ |RadToolBarButton|none|Adds a child button to the collection.|

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




>caption  

|  __insert__  | int, RadToolBarButton | none | Inserts the button into the collection at the position defined by the first (index) parameter. |
| ------ | ------ | ------ | ------ |

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




>caption  

|  __remove__  | RadToolBarButton | none | Removes the specified button from the collection. |
| ------ | ------ | ------ | ------ |

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




>caption  

|  __clear__  | none | none | Clears the Buttons collection of all the child buttons it contains. |
| ------ | ------ | ------ | ------ |

````JavaScript
	     
	
	toolBar.trackChanges();
	dropDown.get_buttons().clear();splitButton.get_buttons().clear();
	toolBar.commitChanges()
				
````




>caption  

|  __getButton__  | int | RadToolBarButton | Returns the button from the collection that resides at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript
	     
	var firstChildButton = dropDown.get_buttons().getButton(0);  
	var firstChildButton = splitButton.get_buttons().getButton(0);
				
````




>caption  

|  __indexOf__  | RadToolBarButton | int | Returns the index of a button. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	var firstChildButton = dropDown.get_buttons().getButton(0);
	dropDown.get_buttons().indexOf(firstChildButton);
	var firstChildButton = splitButton.get_buttons().getButton(0);
	splitButton.get_buttons().indexOf(firstChildButton);
				
````




>caption  

|  __removeAt__  | int | none | Removes the button at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript
	     
	
	//the code below will remove the first button in the collection
	dropDown.get_buttons().removeAt(0);
	splitButton.get_buttons().removeAt(0);
				
````




>caption  

|  __get_count__  | none | int | Returns the number of the buttons in the collection. |
| ------ | ------ | ------ | ------ |

````JavaScript
	     
	
	dropDown.get_buttons().get_count();
	splitButton.get_buttons().get_count();
				
````


