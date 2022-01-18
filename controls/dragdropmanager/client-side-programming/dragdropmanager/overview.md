---
title: Overview
page_title: Client-Side Events Overview - RadDragDropManager
description: Overview of RadDragDropManager Client-Side Events
slug: dragdropmanager/client-side-programming/dragdropmanager/overview
tags: client-side events, events
published: True
position: 0
---

# DragDropManager Client-Side Programming Overview

## Get Client-Side Reference

>caption DropTarget Markup Definition

````ASP.NET
<telerik:RadDragDropManager runat="server" ID="RadDragDropManager1">
</telerik:RadDragDropManager>
````

>caption JavaScript to Get Reference to RadDraggable

````JavaScript
<script>
    function DragDropManagerClientSideReference() {
        let dragDropManager; // Client-Side Object
        let dragDropManagerElement; // HTML element

        // Client-Side Object using $find()
        dragDropManager = $find('<%= RadDragDropManager1.ClientID%>');

        // Client-Side Object using $telerik.findControl()
        dragDropManager = $telerik.findControl(document, "RadDragDropManager1");

        // If using jQuery, or just JavaScript to find the Element itself, there are two steps to get client-side reference

        // Step 1: Get the HTML element

        // Find the element using $get()
        dragDropManagerElement = $get('<%= RadDragDropManager1.ClientID%>');

        // Find the element using jQuery.
        // Note that "$telerik.$()" is the same as "$()" or "jQuery()"
        dragDropManagerElement = $telerik.$('[id$=RadDragDropManager1]')[0]; // same as $('[id$=RadDraggable1]')[0]; or jQuery('[id$=RadDraggable1]')[0]

        // Find the Element using QuerySelector
        dragDropManagerElement = document.querySelector('[id$=RadDragDropManager1]');

        // Step 2: call the ".control" property on the HTML element which will return the Client-Side object
        dragDropManager = dragDropManagerElement.control;
    }
</script>
````

## Public Methods

| **Method Name**      | **Parameters** | **Return Type**                  | **Description**                                                                                   |
| -------------------- | -------------- | -------------------------------- | ------------------------------------------------------------------------------------------------- |
| createDraggable      | string         | Telerik.Web.UI.RadDraggable      | Returns a `RadDraggable` control create by the target selector string passed as a parameter.      |
| createDropTarget     | string         | Telerik.Web.UI.RadDropTarget     | Returns a `RadDropTarget` control create by the target selector string passed as a parameter.     |
| createDropTargetArea | string         | Telerik.Web.UI.RadDropTargetArea | Returns a `RadDropTargetArea` control create by the target selector string passed as a parameter. |

## Accessing the Manager 

There are global methods and properties can be used to get a reference to the RadDragDropManager of the page. Both the `Telerik.Web.UI.DragDropManager.Manager` and `window.GetRadDragDropManager()` return a reference of the client-side object of the manager.

