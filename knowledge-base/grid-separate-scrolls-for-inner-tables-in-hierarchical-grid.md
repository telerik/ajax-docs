---
title: Setting a Maximum Height for Detail Tables in RadGrid for ASP.NET AJAX
description: Learn how to limit the height of detail tables in a hierarchical RadGrid for ASP.NET AJAX, allowing for vertical scrolling when exceeding the set maximum height.
type: how-to
page_title: How to Limit the Height of Detail Tables in RadGrid for ASP.NET AJAX
slug: grid-separate-scrolls-for-inner-tables-in-hierarchical-grid
tags: radgrid, asp.net ajax, detail table, maximum height, scrolling
res_type: kb
ticketid: 1662784
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX | All |

## Description

I want to set a maximum height for a detail table within a hierarchical RadGrid. My goal is to ensure that if the number of rows exceeds this maximum height, the detail table becomes scrollable vertically. I am looking for a solution that allows specifying a height limit, preferably in a unit other than pixels.

This KB article also answers the following questions:

- How can I make a detail table in RadGrid for ASP.NET AJAX scrollable?
- What's the method to set a static height for RadGrid's detail table?
- Is there a way to limit the height of a hierarchical grid's detail table?

## Solution

To limit the height of a detail table in a hierarchical RadGrid and enable vertical scrolling, follow these steps:

Wrap the RadGrid in a `<div>` with a specified static height and set the `overflow:auto` CSS property to enable scrolling.

````ASP.NET
<div>
    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="100%"
        OnNeedDataSource="RadGrid1_NeedDataSource" OnItemCreated="RadGrid1_ItemCreated"
        OnDetailTableDataBind="RadGrid1_DetailTableDataBind">
        <MasterTableView Name="Orders" AutoGenerateColumns="true" DataKeyNames="OrderID">
            <Columns>
                    // Columns for main Grid
            </Columns>
            <DetailTables>
                <telerik:GridTableView Name="OrderDetails" AutoGenerateColumns="true">
                    <Columns>
                        // Columns for detail table
                    </Columns>
                </telerik:GridTableView>
            </DetailTables>
        </MasterTableView>
    </telerik:RadGrid>
</div>
````

In the `ItemCreated` event handler of your RadGrid, check if the item is a `GridNestedViewItem` and then add a `PreRender` event to it.

````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridNestedViewItem)
    {
        GridNestedViewItem nestedItem = e.Item as GridNestedViewItem;
        nestedItem.NestedViewCell.PreRender += new EventHandler(NestedViewCell_PreRender);
    }
}

private void NestedViewCell_PreRender(object sender, EventArgs e)
{
    ((Control)sender).Controls[0].SetRenderMethodDelegate(new RenderMethod(NestedViewTable_Render)); // This line replaces the rendering logic of the nested view table with the custom logic defined in NestedViewTable_Render.
}

protected void NestedViewTable_Render(HtmlTextWriter writer, Control control)
{
    control.SetRenderMethodDelegate(null);

    writer.Write("<div style='height: 200px; overflow: scroll;'>"); // Starts the scrollable div 
    control.RenderControl(writer);
    writer.Write("</div>"); // End the scrollable div after rendering its content (the nested view)
}



protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}

protected void RadGrid1_DetailTableDataBind(object sender, GridDetailTableDataBindEventArgs e)
{
    if (e.DetailTableView.Name == "OrderDetails")
    {
        GridDataItem parentItem = e.DetailTableView.ParentItem;

        int orderId = (int)parentItem.GetDataKeyValue("OrderID");

        e.DetailTableView.DataSource = OrderDetailsTable().Select(string.Format("OrderID = '{0}'", orderId));
    }
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(double)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 100; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = DateTime.Now.Date.AddDays(index);
        row["Freight"] = index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}

private DataTable OrderDetailsTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("UnitPrice", typeof(decimal)));
    dt.Columns.Add(new DataColumn("Quantity", typeof(int)));
    dt.Columns.Add(new DataColumn("Discount", typeof(decimal)));

    var orders = OrdersTable();

    int itemsPerOrder = 8;

    for (int rowIndex = 0; rowIndex < orders.Rows.Count; rowIndex++)
    {
        DataRow currentOrder = orders.Rows[rowIndex];

        for (int j = 0; j < itemsPerOrder; j++)
        {
            int index = j + 1;

            DataRow row = dt.NewRow();

            row["OrderID"] = currentOrder["OrderID"];

            row["UnitPrice"] = index;
            row["Quantity"] = index;
            row["Discount"] = index * 0.01;

            dt.Rows.Add(row);
        }
    }
    return dt;
}
````

In the `PreRender` event handler, customize the rendering of the nested view table to include it within a `<div>` that has a specified height and overflow property set to scroll.

This approach effectively wraps the content of the nested view table in a scrollable `<div>`, thus limiting its height as desired.

## Notes

- The `height` in the `<div>` style should be adjusted according to the maximum height you wish to set for the detail tables.
- The `overflow: scroll;` CSS property ensures that the content becomes scrollable when it exceeds the set height.

## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Creating a Scrollable HTML Table](https://stackoverflow.com/questions/8232713/how-to-display-scroll-bar-onto-a-html-table)
