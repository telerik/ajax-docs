---
title: Remove the filter row from Excel export
description: Remove the filter row from Excel export
type: how-to
page_title: Remove the filter row from Excel export - RadGrid
slug: grid-remove-the-filter-row-from-excel-export
res_type: kb
---


## DESCRIPTION

Hide (remove) the filter row from the excel export.

The filter row is rendered below the headers in the excel export. It is usually blank but if you use custom **FilterTemplate** logic, you will get its contents in the cells. Since those filters cannot work and the actual controls cannot be rendered, you will only have some text or HTML tags.

## SOLUTION

To do this, you need to use the **PreRender event** of the grid with its **IsExporting** flag, and the [GetItems method](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Common/using-the--getitems-getcolumn-and-getcolumnsafe-methods). Then, just set the **Visible** property of the filter item to **false**. 

Here is an example:

**The Grid definition**

````XML
<telerik:RadGrid runat="server" ID="RadGrid1" OnPreRender="RadGrid1_PreRender"
    OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false" AllowFilteringByColumn="true">
    <ExportSettings Excel-Format="Xlsx" IgnorePaging="true" ExportOnlyData="true" OpenInNewWindow="true">
    </ExportSettings>
    <MasterTableView CommandItemDisplay="Top">
        <CommandItemSettings ShowExportToExcelButton="true" />
        <Columns>
            <telerik:GridBoundColumn DataField="numbers" UniqueName="numbers" HeaderText="large numbers" DataType="System.Decimal"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="someField" UniqueName="someColumn" HeaderText="another column" DataType="System.Decimal">
                <FilterTemplate>
                    my custom filter template
                </FilterTemplate>
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="someDate" UniqueName="dateColumn" HeaderText="the date"></telerik:GridDateTimeColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

**Backend code to hide the Filter row**

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    if (RadGrid1.IsExporting)
    {
        foreach (GridFilteringItem item in RadGrid1.MasterTableView.GetItems(GridItemType.FilteringItem))
        {
            item.Visible = false;
        }
    }
}

// The Following code is optional. It is required for data binding in this example.
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetDummyData();
}
 
protected DataTable GetDummyData()
{
    DataTable dt = new DataTable();
 
    dt.Columns.Add("numbers", typeof(decimal));
    dt.Columns.Add("someField", typeof(int));
    dt.Columns.Add("someDate", typeof(DateTime));
 
    dt.Rows.Add(1, 2, new DateTime(2011, 06, 12));
    dt.Rows.Add(2, 3, new DateTime(2011, 12, 12));
    dt.Rows.Add(3, 6, new DateTime(2012, 06, 17));
    dt.Rows.Add(4, 4, new DateTime(2012, 09, 18));
    dt.Rows.Add(5, 7, new DateTime(2013, 03, 18));
 
    return dt;
}
````
 
