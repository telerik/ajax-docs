---
title: OnRowDataBound
page_title: OnRowDataBound | RadGrid for ASP.NET AJAX Documentation
description: OnRowDataBound
slug: grid/client-side-programming/events/onrowdatabound
tags: onrowdatabound
published: True
position: 52
---

# OnRowDataBound



## 

Telerik.Web.UI.GridDataItemEventArgs OnRowDataBound Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event will be raised for each grid item which is about to be bound on the client. Can be used to modify/extract the data from the respective row cells or apply custom formatting to some of the cells based on their values.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **dataItem** - the underlying data item object (equivalent to e.Item.DataItem object inside ItemDataBound on the server) **item** - the GridDataItem client instance which is about to be bound|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDataBound="RowDataBound" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RowDataBound(sender, args) {
    // conditional formatting
    if (args.get_dataItem()["TitleOfCourtesy"] == "Dr.") {
        args.get_item().get_cell("TitleOfCourtesy").style.fontWeight = "bold";
    }
    var sb = new Sys.StringBuilder();
    sb.appendLine("<b>RowDataBound</b><br />");
    for (var item in args.get_dataItem()) {
        sb.appendLine(String.format("{0} : {1}<br />", item, args.get_dataItem()[item]));
    }
    sb.appendLine("<br />");
    sb.appendLine("<br />");
    $get("<%= Panel1.ClientID %>").innerHTML += sb.toString();
}
````


