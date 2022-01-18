---
title: Overview
page_title: Client-Side Events Overview - RadDragDropManager
description: Overview of RadDragDropManager Client-Side Events
slug: dragdropmanager/client-side-programming/droptargetarea/overview
tags: client-side events, events
published: True
position: 0
---

# DropTargetArea Client-Side APIs

## Get Client-Side Reference

>caption DropTarget Markup Definition

````ASP.NET
<telerik:RadDropTargetArea runat="server" ID="RadDropTargetArea1">
</telerik:RadDropTargetArea>
````

>caption JavaScript to Get Reference to RadDraggable

````JavaScript
<script>
    function DropTargetAreaClientSideReference() {
        let dropTargetArea; // Client-Side Object
        let dropTargetAreaElement; // HTML element

        // Client-Side Object using $find()
        dropTargetArea = $find('<%= RadDropTargetArea1.ClientID%>');

        // Client-Side Object using $telerik.findControl()
        dropTargetArea = $telerik.findControl(document, "RadDropTargetArea1");

        // If using jQuery, or just JavaScript to find the Element itself, there are two steps to get client-side reference

        // Step 1: Get the HTML element

        // Find the element using $get()
        dropTargetAreaElement = $get('<%= RadDropTargetArea1.ClientID%>');

        // Find the element using jQuery.
        // Note that "$telerik.$()" is the same as "$()" or "jQuery()"
        dropTargetAreaElement = $telerik.$('[id$=RadDropTargetArea1]')[0]; // same as $('[id$=RadDraggable1]')[0]; or jQuery('[id$=RadDraggable1]')[0]

        // Find the Element using QuerySelector
        dropTargetAreaElement = document.querySelector('[id$=RadDropTargetArea1]');

        // Step 2: call the ".control" property on the HTML element which will return the Client-Side object
        dropTargetArea = dropTargetAreaElement.control;
    }
</script>
````

## Public Getter Properties

| **Property**            | **Return Type**               | **Description**                                                                                                                                          |
| ----------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| get_elements()          | jQuery Collection of Elements | Returns a jQuery collection of elements satisfying the selector defined in `TargetSelectors`.                                                            |
| get_group()             | string                        | Returns a string representation of the group assigned to the control. The default group is "default".                                                    |
| get_kendoWidget()       | Kendo.ui.Draggable            | Returns the Kendo UI Draggable widget created for the `RadDraggable` control.                                                                            |
| get_filterSelectors()   | string                        | Returns a string representation of the selector used to filter the elements that should act as `DropTargets` within the container defined by the `TargetSelectors`. |

## Public Setter Properties

| **Property**          | **Parameters**                        | **Description**                                                                                                                                             |
| --------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| set_group()           | string                                | Sets the group value for the `RadDropTargetArea`.                                                                                                                  |
| set_filterSelectors() | string                                | Sets the selector used to filter the elements that should be draggable when the `RadDraggable` is attached to a container.                                  |


