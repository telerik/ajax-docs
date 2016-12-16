---
title: OnClientChange
page_title: RadSpreadsheet Client-side Event | UI for ASP.NET AJAX Documentation
description: RadSpreadsheet Client-side Event
slug: spreadsheet/client-side-programming/events/onclientchange
tags: spreadsheetevent
published: True
position: 0
---

# OnClientChange

The **OnClientChange** occurs when certain Cell value has changed

The event handler receives two parameters:

1. The instance of the **Spreadsheet** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_range** return a reference to the [SpreadsheetRange]({%slug spreadsheet/client-side-programming/objects/spreadsheetrange%}) object, associated with the cell.

* **get_widget** reference to the Spreadsheet Kendo widget.

>caption Example 1: Demonstrates how you can get the new value of the cell

````ASP.NET
<telerik:RadSpreadsheet RenderMode="Lightweight" runat="server" id="RadSpreadsheet1" OnClientChange="OnClientChange">
</telerik:RadSpreadsheet>
````

````JavaScript
function OnClientChange(sender, eventArgs) {
    eventArgs.get_range().get_value() //returns the new value of the cell
}
````

