---
title: OnPdfExporting
page_title: OnPdfExporting Event - RadGrid | UI for ASP.NET AJAX
description: OnPdfExporting Event
slug: grid/server-side-programming/events/onpdfexporting
published: True
position: 50
---

# OnPdfExporting Event

Fired when RadGrid is exported to Pdf before the resulting document is rendered on the client. Appropriate for customizing the grid table appearance in the .pdf document.



### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridPdfExportingArgs)` **e**

    * Event arguments 

        * `(string)` **e.RawHTML**
            
             Contains the RadGrid`s HTML which will be transformed to PDF
            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnPdfExporting="RadGrid1_PdfExporting">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.PdfExporting += RadGrid1_PdfExporting;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.PdfExporting, AddressOf RadGrid1_PdfExporting
End Sub
````

The event handler

````C#
protected void RadGrid1_PdfExporting(object sender, GridPdfExportingArgs e)
{
    string rawHtml = e.RawHTML;
}
````
````VB
Protected Sub RadGrid1_PdfExporting(ByVal sender As Object, ByVal e As GridPdfExportingArgs)
    Dim rawHtml As String = e.RawHTML
End Sub
````

  
