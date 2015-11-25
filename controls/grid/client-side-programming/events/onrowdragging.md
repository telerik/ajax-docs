---
title: OnRowDragging
page_title: OnRowDragging | RadGrid for ASP.NET AJAX Documentation
description: OnRowDragging
slug: grid/client-side-programming/events/onrowdragging
tags: onrowdragging
published: True
position: 59
---

# OnRowDragging



##    

Sys.EventArgs OnRowDragging Property



This event can be used if you want to check the current position of the mouse while the user is still dragging. It can be used to cancel the dragging action on Escape button click:

[Cancel row drag and drop when ESC key is pressed](http://www.telerik.com/support/code-library/cancel-row-drag-and-drop-when-esc-key-is-pressed)


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |  **get_domEvent()** - returns the event object representing the mousemove action|
| **Can be canceled** |No|

Example:

````ASP.NET
<ClientSettings AllowRowsDragDrop="true">
    <Selecting AllowRowSelect="true" />
    <ClientEvents OnRowDragging="rowDragging" />
</ClientSettings>
````

````JavaScript
function rowDragging(sender, args) {
    var event = args.get_domEvent();
    // the current position of the mouse
    var coordinateX = event.clientX;
    var coordinateY = event.clientY;
}
````




