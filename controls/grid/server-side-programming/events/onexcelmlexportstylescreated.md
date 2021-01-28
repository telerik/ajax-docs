---
title: OnExcelMLExportStylesCreated
page_title: OnExcelMLExportStylesCreated Event - RadGrid
description: Check our Web Forms article about OnExcelMLExportStylesCreated Event.
slug: grid/server-side-programming/events/onexcelmlexportstylescreated
published: True
position: 50
---

# OnExcelMLExportStylesCreated Event

RadGrid fires this event when creating the built-in styles. It could be used not only for modifying the predefined styles but also to define your own (already assigned to a grid table element on ExcelMLExportRowCreated) custom style.

### Event Parameters

* `(object)` **sender**

    * The control that fires the event

* `(GridExportExcelMLStyleCreatedArgs)` **e**

    * Event arguments 

        * `(IStylesCollection)` **e.Styles**
            
             Gets collection of styles

            

## Attaching the event

In the Markup

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnExcelMLExportStylesCreated="RadGrid1_ExcelMLExportStylesCreated">
</telerik:RadGrid>
````

In the Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid1.ExcelMLExportStylesCreated += RadGrid1_ExcelMLExportStylesCreated;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    AddHandler RadGrid1.ExcelMLExportStylesCreated, AddressOf RadGrid1_ExcelMLExportStylesCreated
End Sub
````

The event handler

````C#
protected void RadGrid1_ExcelMLExportStylesCreated(object sender, GridExportExcelMLStyleCreatedArgs e)
{
    IStylesCollection styles = e.Styles;
}
````
````VB
Protected Sub RadGrid1_ExcelMLExportRowCreated(ByVal sender As Object, ByVal e As GridExportExcelMLStyleCreatedArgs)
    Dim styles As IStylesCollection = e.Styles
End Sub
````

  
