---
title: Customizing the Menu
page_title: Customizing the Menu | RadFilter for ASP.NET AJAX Documentation
description: Customizing the Menu
slug: filter/how-to/customizing-the-menu
tags: customizing,the,menu
published: True
position: 4
---

# Customizing the Menu



The menu used for displaying the fields of the field editors and the filter functions is a **RadContexMenu**. You can easily access it and customize it server-side as well as client-side.

## Accessing the context menu

You access the context menu of the RadFilter server-side with the following code:



````C#
RadContextMenu menu = RadFilter1.FindControl("rfContextMenu") as RadContextMenu;
````
````VB.NET
Dim menu As RadContextMenu = TryCast(RadFilter1.FindControl("rfContextMenu"), RadContextMenu)
````


To find it client-side, you can use the following code:

````JavaScript
var filter = $find("<%=RadFilter1.ClientID %>");
var menu = filter.get_contextMenu();
````



## Reducing the filter menu options

You can reduce the filter menu options to display only a subset of the available filter functions depending on the field. A suitable event for this is the **OnClientShowing** of the context menu of the **RadFilter**. In the code below the **IsNull** and **NotIsNull** filter options are hidden for **System.Int32** data:

````JavaScript
function pageLoad(sender, args) {
    var filter = $find("<%=RadFilter1.ClientID %>");
    var menu = filter.get_contextMenu();
    menu.add_showing(FilterMenuShowing);
}

function FilterMenuShowing(sender, args) {
    var filter = $find("<%=RadFilter1.ClientID %>");
    var currentExpandedItem = sender.get_attributes()._data.ItemHierarchyIndex;
    var fieldName = filter._expressionItems[currentExpandedItem];
    var allFields = filter._dataFields;
    var dataType = null;
    for (var i = 0, j = allFields.length; i < j; i++) {
        if (allFields[i].FieldName == fieldName) {
            dataType = allFields[i].DataType;
            break;
        }
    }
    if (dataType == "System.Int32") {
        sender.findItemByValue("IsNull").set_visible(false);
        sender.findItemByValue("NotIsNull").set_visible(false);
    }
}
````


