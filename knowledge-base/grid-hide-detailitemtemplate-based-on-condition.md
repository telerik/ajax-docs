---
title: Hide DetailItemTemplate based on condition
description: This article explains how to hide the DetailItemTemplate in a Grid based on a condition
type: how-to
page_title: Hide DetailItemTemplate based on condition. | RadGrid 
slug: grid-hide-detailitemtemplate-based-on-condition
tags: radgrid, detailitemtemplate, hide, condition, server-side, css
res_type: kb
---

## Environment

| Property | Value |
|----------|-------|
| Product  | Telerik WebForms Grid for ASP.NET AJAX |

## Description

I want to hide the **DetailItemTemplate** in a Grid based on a condition. 

## Solution

To hide the **DetailItemTemplate**, you can apply conditional styling based on the value of a certain field and apply a CSS class to hide the item:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="true" DataKeyNames="OrderID">
        <DetailItemTemplate>
            <%#(DataBinder.Eval(Container.DataItem, "OrderID").ToString() == "0") ? Container.CssClass += " Hide" : string.Empty %>
            <asp:Label Text='<%# Bind("OrderID") %>' ID="Label1" runat="server" />
            <asp:Label Text='<%# Bind("OrderDate") %>' ID="Label2" runat="server" />
            <asp:Label Text='<%# Bind("Freight") %>' ID="Label3" runat="server" />
            <asp:Label Text='<%# Bind("ShipName") %>' ID="Label4" runat="server" />
            <asp:Label Text='<%# Bind("ShipCountry") %>' ID="Label5" runat="server" />
        </DetailItemTemplate>
    </MasterTableView>
</telerik:RadGrid>
````

````CSS
.Hide {
    display: none;
}
````

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable(); 
}
private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(double)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    for (int i = 0; i < 5; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index % 2 == 0 ? index : 0;
        row["OrderDate"] = DateTime.Now.Date.AddDays(index);
        row["Freight"] = index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}
````

This will hide the DetailItemTemplate when OrderID is 0.
  
## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [How to Use DetailItemTemplate in RadGrid](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/use-detailitemtemplate-in-radgrid)

 
