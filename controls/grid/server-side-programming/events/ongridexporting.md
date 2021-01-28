---
title: OnGridExporting
page_title: OnGridExporting Event - RadGrid
description: Check our Web Forms article about OnGridExporting Event.
slug: grid/server-side-programming/events/ongridexporting
published: True
position: 50
---

# OnGridExporting Event

Fired when RadGrid is exported to Excel/Word/Csv/Pdf before the resulting document is rendered on the client.


### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridExportingArgs)` **e**

    * Event arguments 

        * `(string)` **e.ExportOutput**
            
             Contains export document which will be written to the response.

        * `(ExportType)` **e.ExportType**
            
             Gets the type of the export.
            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnGridExporting="RadGrid1_GridExporting">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.GridExporting += RadGrid1_GridExporting;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.GridExporting, AddressOf RadGrid1_GridExporting
End Sub
````

The event handler

````C#
protected void RadGrid1_GridExporting(object sender, GridExportingArgs e)
{
    string exportOutput = e.ExportOutput;
    ExportType exportType = e.ExportType;

}
````
````VB
Protected Sub RadGrid1_GridExporting(ByVal sender As Object, ByVal e As GridExportingArgs)
    Dim exportOutput As String = e.ExportOutput
    Dim exportType As ExportType = e.ExportType
End Sub
````

  
