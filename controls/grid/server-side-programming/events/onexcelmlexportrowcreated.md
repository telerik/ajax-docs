---
title: OnExcelMLExportRowCreated
page_title: OnExcelMLExportRowCreated Event - RadGrid | UI for ASP.NET AJAX
description: OnExcelMLExportRowCreated Event 
slug: grid/server-side-programming/events/onexcelmlexportrowcreated
published: True
position: 50
---

# OnExcelMLExportRowCreated Event

Fired when RadGrid is exported to native Excel before the resulting document is rendered on the client.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridExportExcelMLRowCreatedArgs)` **e**

    * Event arguments 

        * `(RowElement)` **e.Row**
            
            Gets the Row object

        * `(GridExportExcelMLRowType)` **e.RowType**

            Gets the ExcelML row type

        * `(WorksheetElement)` **e.Worksheet**

            Gets the parent worksheet element
            
            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnExcelMLExportRowCreated="RadGrid1_ExcelMLExportRowCreated">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ExcelMLExportRowCreated += RadGrid1_ExcelMLExportRowCreated;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ExcelMLExportRowCreated, AddressOf RadGrid1_ExcelMLExportRowCreated
End Sub
````

The event handler

````C#
protected void RadGrid1_ExcelMLExportRowCreated(object sender, GridExportExcelMLRowCreatedArgs e)
{
    RowElement row = e.Row;
    GridExportExcelMLRowType rowType = e.RowType;
    WorksheetElement worksheet = e.Worksheet;
}
````
````VB
Protected Sub RadGrid1_ExcelMLExportRowCreated(ByVal sender As Object, ByVal e As GridExportExcelMLRowCreatedArgs)
    Dim row As RowElement = e.Row
    Dim rowType As GridExportExcelMLRowType = e.RowType
    Dim worksheet As WorksheetElement = e.Worksheet
End Sub
````

  
