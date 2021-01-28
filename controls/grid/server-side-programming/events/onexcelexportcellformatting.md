---
title: OnExcelExportCellFormatting
page_title: OnExcelExportCellFormatting Event - RadGrid
description: Check our Web Forms article about OnExcelExportCellFormatting Event.
slug: grid/server-side-programming/events/onexcelexportcellformatting
published: True
position: 50
---

# OnExcelExportCellFormatting Event

Fired when RadGrid is exported to Excel before the resulting document is rendered on the client.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(ExportCellFormattingEventArgs)` **e**

    * Event arguments 

        * `(TableCell)` **e.Cell**
            
            Gets the cell for formating

        * `(GridColumn)` **e.FormattedColumn**

            Gets the column associatied with the formating cell.
            
            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnExportCellFormatting="RadGrid1_ExportCellFormatting">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ExportCellFormatting += RadGrid1_ExportCellFormatting;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ExportCellFormatting, AddressOf RadGrid1_ExportCellFormatting
End Sub
````

The event handler

````C#
protected void RadGrid1_ExportCellFormatting(object sender, ExportCellFormattingEventArgs e)
{
    TableCell cell = e.Cell;
    GridColumn formattedColumn = e.FormattedColumn;
}
````
````VB
Protected Sub RadGrid1_ExportCellFormatting(ByVal sender As Object, ByVal e As ExportCellFormattingEventArgs)
    Dim cell As TableCell = e.Cell
    Dim formattedColumn As GridColumn = e.FormattedColumn
End Sub
````

  
