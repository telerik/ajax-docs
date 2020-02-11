---
title: Accessing RadGrid
page_title: Accessing the Grid Client-Side - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing Grid on Client
slug: grid/accessing-values-and-controls/client-side/accessing-radgrid
published: True
position: 0
---

# Accessing RadGrid Client-Side

[Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%})

Finding a RadGrid that has a specific ID, in this case RadGrid1.

## Using the $find() method

````JavaScript
function myFunction(sender, args) {
    var grid = $find('<%= RadGrid1.ClientID %>');
}
````

## Using the $telerik.findControl() method

````JavaScript
function myFunction(sender, args) {
    var grid = $telerik.findControl(document, "RadGrid1");
}
````

## Using Document.querySelector()

````JavaScript
function myFunction(sender, args) {
    var gridElement = document.querySelector(".RadGrid[id$='RadGrid1']");

    // Checkpoint to ensure the Element exists and it has a property called "control", if so, cast the Element to a RadGrid JavaScript object.
    if (gridElement && gridElement.control) {
        var grid = gridElement.control;
    }
}
````

## Using jQuery

````JavaScript
function myFunction(sender, args) {
    var gridElement = $telerik.$('.RadGrid[id$="RadGrid1"]')[0];

    // Checkpoint to ensure the Element exists and it has a property called "control", if so, cast the Element to a RadGrid JavaScript object.
    if (gridElement && gridElement.control) {
        var grid = gridElement.control;
    }
}
````

Find one or more Grid's without specifying an ID

## Access Multiple RadGrid instances with Document.querySelector()

````JavaScript
function myFunction(sender, args) {
    var gridElements = document.querySelectorAll("div.RadGrid");

    for (var i = 0; i < gridElements.length; i++) {
        var gridElement = gridElements[i];

        // Checkpoint to ensure the Element exists and it has a property called "control", if so, cast the Element to a RadGrid JavaScript object.
        if (gridElement && gridElement.control) {
            var grid = gridElement.control;

        }
    }
}
````

## Access Multiple RadGrid instances with jQuery

````JavaScript
function myFunction(sender, args) {
    var $gridElements = $telerik.$('.RadGrid');

    for (var i = 0; i < $gridElements.length; i++) {
        var gridElement = $gridElements[i];

        // Checkpoint to ensure the Element exists and it has a property called "control", if so, cast the Element to a RadGrid JavaScript object.
        if (gridElement && gridElement.control) {
            var grid = gridElement.control;

        }
    }
}
````

## See Also

- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing Items/Rows]({%slug grid/accessing-values-and-controls/client-side/accessing-items %})
- [Accessing Cells]({%slug grid/accessing-values-and-controls/client-side/accessing-cells %})

