---
title: Overview
page_title: Client-Side Events Overview - RadDragDropManager
description: Overview of RadDragDropManager Client-Side Events
slug: dragdropmanager/client-side-programming/draggable/overview
tags: client-side events, events
published: True
position: 0
---

# Draggable Client-Side APIs


## Get Client-Side Reference

>caption Draggable Markup Definition

````ASP.NET
<telerik:RadDraggable runat="server" ID="RadDraggable1">
</telerik:RadDraggable>
````

>caption JavaScript to Get Reference to RadDraggable

````JavaScript
<script>
    function GetClientSideReference() {
        let draggable; // Client-Side Object
        let draggableElement; // HTML element

        // Client-Side Object using $find()
        draggable = $find('<%= RadDraggable1.ClientID%>');

        // Client-Side Object using $telerik.findControl()
        draggable = $telerik.findControl(document, "RadDraggable1");

        // If using jQuery, or just JavaScript to find the Element itself, there are two steps to get client-side reference
                
        // Step 1: Get the HTML element
        // Find the element using $get()
        draggableElement = $get('<%= RadDraggable1.ClientID%>');

        // Find the element using jQuery.
        // Note that "$telerik.$()" is the same as "$()" or "jQuery()"
        draggableElement = $telerik.$('[id$=RadDraggable1]')[0]; // same as $('[id$=RadDraggable1]')[0]; or jQuery('[id$=RadDraggable1]')[0]

        // Find the Element using QuerySelector
        draggableElement = document.querySelector('[id$=RadDraggable1]');

        // Step 2: call the ".control" property on the HTML element which will return the Client-Side object
        draggable = draggableElement.control;
    }
</script>
````


## Public Getter Properties

| **Property**            | **Return Type**               | **Description**                                                                                                                                          |
| ----------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| get_autoScroll()        | bool                          | Returns `true` or `false` indicating whether the `AutoScroll` is enabled.                                                                                |
| get_axis()              | int                           | Returns an integer indicating the `Axis` restriction                                                                                                     |
| get_containerElements() | jQuery Collection of Elements | Gets the a jQuery collection of elements satisfying the selector in `ContainerSelectors` property.                                                       |
| get_cursorOffset()      | Object                        | Returns and object with `top` and `left` properties if set or null.                                                                                      |
| get_distance()          | int                           | Returns the distance needed to drag before an actual drag is initiated.                                                                                  |
| get_dropped()           | bool                          | Returns a boolean identifying if the draggable is dropped inside a valid `DropTarget` or not.                                                            |
| get_elements()          | jQuery Collection of Elements | Returns a jQuery collection of elements satisfying the selector defined in `TargetSelectors`.                                                            |
| get_group()             | string                        | Returns a string representation of the group assigned to the control. The default group is "default".                                                    |
| get_hintHandler()       | function                      | Returns the function that should return the element that will be used as a `Hint` element.                                                               |
| get_holdToDrag()        | boolean                       | Returns a boolean describing wether a touch and hold is required to initiate a drag. Relevant for touch and mobile devices.                              |
| get_kendoWidget()       | Kendo.ui.Draggable            | Returns the Kendo UI Draggable widget created for the `RadDraggable` control.                                                                            |
| get_filterSelectors()   | string                        | Returns a string representation of the selector used to filter the elements that should be draggable when the `RadDraggable` is attached to a container. |

## Public Setter Properties

| **Property**          | **Parameters**                        | **Description**                                                                                                                                             |
| --------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| set_autoScroll()      | bool                                  | Sets the `AutoScroll` property for the control.                                                                                                             |
| set_axis()            | Telerik.Web.UI.RadDraggableAxis / int | Sets the axis restriction for the hint element. The values for the `Telerik.Web.UI.RadDraggableAxis` enum are: *None - 0*, *Horizontal - 1*, *Verical - 2*. |
| set_cursorOffset()    | object                                | Sets the offset of the hint element related to the mouse during a drag. Receives an object with two integer properties - `top` and `left`.                  |
| set_distance()        | int                                   | Sets the distance needed to drag before an actual drag is initiated.                                                                                        |
| set_group()           | string                                | Sets the group value for the RadDraggable.                                                                                                                  |
| set_hintHandler()     | function                              | Sets the function that should return the element that will be used as a `Hint` element.                                                                     |
| set_holdToDrag()      | bool                                  | Controls wether a touch and hold is required to initiate a drag. Relevant for touch and mobile devices.                                                     |
| set_filterSelectors() | string                                | Sets the selector used to filter the elements that should be draggable when the `RadDraggable` is attached to a container.                                  |



