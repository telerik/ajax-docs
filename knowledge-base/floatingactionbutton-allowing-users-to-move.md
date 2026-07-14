---
title: Allowing Users to Move the FloatingActionButton in UI for ASP.NET AJAX
description: Learn how to enable users to move the RadFloatingActionButton in UI for ASP.NET AJAX by implementing custom JavaScript functionality.
type: how-to
page_title: Enabling User Interaction with the FloatingActionButton in UI for ASP.NET AJAX
meta_title: Enabling User Interaction with the FloatingActionButton in UI for ASP.NET AJAX
slug: floatingactionbutton-allowing-users-to-move
tags: floatingactionbutton, ui for asp.net ajax, drag-and-drop, customization
res_type: kb
ticketid: 1716671
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> 
FloatingActionButton for UI for ASP.NET AJAX
</td>
</tr>
<tr>
<td> Version </td>
<td>
All
</td>
</tr>
</tbody>
</table>

## Description

I want to allow users to move the RadFloatingActionButton on the screen. By default, the RadFloatingActionButton does not provide built-in options for users to move, minimize, or close it. However, I want to implement functionality to enable such interactions.

This knowledge base article also answers the following questions:
- How to enable drag-and-drop functionality for the FloatingActionButton?
- How to reposition the FloatingActionButton dynamically on the screen?
- How to customize user interaction with the FloatingActionButton?

## Solution

To enable users to move the RadFloatingActionButton, you can use custom JavaScript to implement drag-and-drop functionality.

1. Set the initial position of the RadFloatingActionButton in your markup or code-behind by configuring the `Align`, `PositionMode`, and `AlignOffsetSettings` properties. Refer to the [RadFloatingActionButton Alignment](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/alignment/defaultcs.aspx) documentation for more details.

2. Add the following custom JavaScript code to enable drag-and-drop functionality for the RadFloatingActionButton:

````JavaScript
let fab = document.querySelector('.RadFloatingActionButton'); // Select the FloatingActionButton element
let isDragging = false, offsetX, offsetY;

// Start dragging on mousedown
fab.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - fab.offsetLeft;
    offsetY = e.clientY - fab.offsetTop;
});

// Update the position on mousemove
document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        fab.style.left = (e.clientX - offsetX) + 'px';
        fab.style.top = (e.clientY - offsetY) + 'px';
        fab.style.position = 'fixed'; // Ensure the element is positioned relative to the viewport
    }
});

// Stop dragging on mouseup
document.addEventListener('mouseup', function () {
    isDragging = false;
});
````

- Modify the selector `.RadFloatingActionButton` or styles as needed to suit your specific layout and implementation.
- Ensure that the RadFloatingActionButton's `z-index` is set appropriately so that it remains on top of other elements during dragging.

## See Also

- [RadFloatingActionButton Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/floatingactionbutton/overview)
- [RadFloatingActionButton Alignment Demo](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/alignment/defaultcs.aspx)
