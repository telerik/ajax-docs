---
title: resizeToFit 
page_title: resizeToFit - RadGrid
description: Check our Web Forms article about resizeToFit.
slug: grid/client-side-programming/gridcolumn-object/methods/resizetofit-
tags: resizetofit,
published: True
position: 1
---

# resizeToFit 



This method resizes the column to fit the widest cell's content without wrapping. It also provides two **optional**  parameters which can be used for further alteration:

* `skipHeaderCell` - Determines whether the Headers should be ignored in the calculation for the column's new width.By default - `false`.

* `includeAllHeaderRows` - This parameter has effect only if the `skipHeaderCell` is set to `false`. It determines whether the cells of the filter item should be considered in the calculation for the column's new width.By default - `false`, except when the **RadGrid** has structure with Multi-column headers configured.

In order to enable the resizing of the columns you will need to configure also the following properties:
 * `AllowColumnResize="true"` - enables the column resizing functionality.
 * `AllowResizeToFit="true"` - enables the  resize to fit functionality.
 * `ResizeGridOnColumnResize="false"` - stops the automatic resizing of the columns after every `resizeToFit()` call.

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function pageLoad() {
            var grid = $find("<%= RadGrid1.ClientID %>");
            var columns = grid.get_masterTableView().get_columns();
            for (var i = 0; i < columns.length; i++) {
                columns[i].resizeToFit(false, true);
            }
        }
    </script>
</telerik:RadCodeBlock>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
    <ClientSettings>
        <Resizing AllowColumnResize="true" ResizeGridOnColumnResize="false" AllowResizeToFit="true" />
    </ClientSettings>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = GetGridSource();
}

private DataTable GetGridSource()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));


    for (int i = 0; i < 70; i++)
    {
        dt.Rows.Add(
            i + 1,
            DateTime.Now,
            (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01,
            "Name some long long name with even longer name" + (i + 1),
            "Country " + (i + 1)
            );
    }

    return dt;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    (TryCast(sender, RadGrid)).DataSource = GetGridSource()
End Sub

Private Function GetGridSource() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
    dt.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
    dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
    dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))

    For i As Integer = 0 To 70 - 1
        dt.Rows.Add(i + 1, DateTime.Now, (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01, "Name some long long name with even longer name" & (i + 1), "Country " & (i + 1))
    Next

    Return dt
End Function
````



## See Also

 * [Overview]({%slug grid/overview%})

 * [Multi-Column Headers Live Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/columns/multi-column-headers/defaultcs.aspx)

 * [Column Resize/Reorder Live Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/columns/column-row-resize-reorder/defaultcs.aspx)
