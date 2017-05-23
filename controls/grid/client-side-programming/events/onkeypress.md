---
title: OnKeyPress
page_title: OnKeyPress | RadGrid for ASP.NET AJAX Documentation
description: OnKeyPress
slug: grid/client-side-programming/events/onkeypress
tags: onkeypress
published: True
position: 44
---

# OnKeyPress


This event is fired when a keyboard key is pressed.

`Telerik.Web.UI.GridDataItemCancelEventArgs` `OnKeyPress` Property


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |`get_keyCode()` - the code of the key pressed; `get_isShiftPressed()` - `true` or `false` , depending on whether the Shift key was held down when the event fired; `get_isCtrlPressed()` - `true` or `false` depending on whether the Ctrl key was held down when the event fired; `get_isAltPressed()` - `true` or `false` depending on whether the Alt key was held down when the event fired; `get_domEvent()` - the original browser event object.|
| **Can be canceled** |Yes, call `eventArgs.set_cancel(true)` to cancel.|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnKeyPress="KeyPress" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function KeyPress(sender, eventArgs) {
    alert("Key code: " + eventArgs.get_keyCode());
    alert("Is Shift pressed: " + eventArgs.get_isShiftPressed());
    alert("Is Ctrl pressed: " + eventArgs.get_isCtrlPressed());
    alert("Is Alt pressed: " + eventArgs.get_isAltPressed());
}
````


