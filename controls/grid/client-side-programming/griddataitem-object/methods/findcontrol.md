---
title: findControl
page_title: findControl | RadGrid for ASP.NET AJAX Documentation
description: findControl
slug: grid/client-side-programming/griddataitem-object/methods/findcontrol
tags: findcontrol
published: True
position: 0
---

# findControl



## 

This method takes control id for an argument and returns the corresponding client object of RadControl or ASP.NET AJAX control inside the grid row. Useful to reference client objects of controls inside a grid item cell on the client.


|  **findControl(id)**  |  |  |
| ------ | ------ | ------ |
| **id** |String|The id of a RadControl or other ASP.NET AJAX control.|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <MasterTableView> 
        <Columns> 
            <telerik:GridTemplateColumn> 
                <ItemTemplate> 
                    <telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server" /> 
                </ItemTemplate> 
            </telerik:GridTemplateColumn> 
        </Columns> 
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnRowDataBound="RadGrid1_RowDataBound" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RadGrid1_RowDataBound(sender, args) {
    var radTextBox1 = args.get_item().findControl("RadTextBox1");
    radTextBox1.set_value(args.get_dataItem()["TitleOfCourtesy"]);
} 
````


