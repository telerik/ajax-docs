---
title: Overview
page_title: Client-Side Events Overview - RadDragDropManager
description: Overview of RadDragDropManager Client-Side Events
slug: dragdropmanager/client-side-programming/droptarget/overview
tags: client-side events, events
published: True
position: 0
---

# DropTarget Client-Side APIs

## Get Client-Side Reference

>caption DropTarget Markup Definition

````ASP.NET
<telerik:RadDropTarget runat="server" ID="RadDropTarget1">
</telerik:RadDropTarget>
````

>caption JavaScript to Get Reference to RadDraggable

````JavaScript
<script>
    function DropTargetClientSideReference() {
        let dropTarget; // Client-Side Object
        let dropTargetElement; // HTML element

        // Client-Side Object using $find()
        dropTarget = $find('<%= RadDraggable1.ClientID%>');

        // Client-Side Object using $telerik.findControl()
        dropTarget = $telerik.findControl(document, "RadDropTarget1");

        // If using jQuery, or just JavaScript to find the Element itself, there are two steps to get client-side reference
                    
        // Step 1: Get the HTML element

        // Find the element using $get()
        dropTargetElement = $get('<%= RadDropTarget1.ClientID%>');

        // Find the element using jQuery.
        // Note that "$telerik.$()" is the same as "$()" or "jQuery()"
        dropTargetElement = $telerik.$('[id$=RadDropTarget1]')[0]; // same as $('[id$=RadDraggable1]')[0]; or jQuery('[id$=RadDraggable1]')[0]

        // Find the Element using QuerySelector
        dropTargetElement = document.querySelector('[id$=RadDropTarget1]');

        // Step 2: call the ".control" property on the HTML element which will return the Client-Side object
        dropTarget = dropTargetElement.control;
    }
</script>
````

## Public Getter Properties

| **Property**      | **Return Type**               | **Description**                                                                                       |
| ----------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| get_elements()    | jQuery Collection of Elements | Returns a jQuery collection of elements satisfying the selector defined in `TargetSelectors`.         |
| get_kendoWidget() | Kendo.ui.DropTarget           | Returns the Kendo UI DropTarget widget created for the `RadDropTarget` control.                       |
| get_group()       | string                        | Returns a string representation of the group assigned to the control. The default group is "default". |

## Public Setter Properties

| **Property**          | **Parameters**                        | **Description**                                                                                                                                             |
| --------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| set_group()           | string                                | Sets the group value for the RadDropTarget.                                                                                                                  |




