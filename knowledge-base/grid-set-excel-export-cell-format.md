---
title: Set Excel export cell format
description: Set Excel export cell format
type: how-to
page_title: Set Excel export cell format - RadGrid
slug: grid-set-excel-export-cell-format
res_type: kb
---


## DESCRIPTION

Set cell format for Excel export.

This can be necessary when you have large numbers (e.g., serial numbers) that Excel can show in scientific (exponential) notation. While the end user can select the Format Cells option and choose the cell format, you want them not to have to do that.

## SOLUTION

To do this, you need to use the **InfrastructureExporting event** of the grid and the underlying [ExportInfrastructure]({%slug controls/export-infrastructure%}), then find the column that you wish to change (for example, via its header text), then loop through its **cells** and set their Excel format via their **Format property**. 

Here is an example:

````C#
protected void RadGrid1_InfrastructureExporting(object sender, GridInfrastructureExportingEventArgs e)
{
    int colIndex = -1;//you can make this a list and store more indexes so you can loop through them to format more columns
 
    //get the first row where the headers are so you can find the desired column
    Telerik.Web.UI.ExportInfrastructure.CellCollection cells = e.ExportStructure.Tables[0].Rows[1].Cells;
    foreach (Telerik.Web.UI.ExportInfrastructure.Cell item in cells)
    {
        if (item.Text == "large numbers")
        {
            colIndex = item.ColIndex;
        }
    }
 
    if (colIndex < 0) return;//no column found, avoid error
 
    Telerik.Web.UI.ExportInfrastructure.Column col = e.ExportStructure.Tables[0].Columns[colIndex];
    //loop through the cells to set format
    foreach (Telerik.Web.UI.ExportInfrastructure.Cell cell in col.Cells)
    {
        cell.Format = "##############";//or use another Excel format, this is just a series of digits for number representation
    }
    col.Width = 200;//enlarge the column to accommodate long numbers
}
 
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
    dt.Rows.Add(200011150032, 3, new DateTime(2011, 12, 12));
    dt.Rows.Add(3, 6, new DateTime(2012, 06, 17));
    dt.Rows.Add(4, 4, new DateTime(2012, 09, 18));
    dt.Rows.Add(5, 7, new DateTime(2013, 03, 18));
 
    return dt;
}
````

Sample markup for this example

````XML
<telerik:RadGrid runat="server" ID="RadGrid1" OnInfrastructureExporting="RadGrid1_InfrastructureExporting" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false">
    <ExportSettings Excel-Format="ExcelML" IgnorePaging="true" ExportOnlyData="true" OpenInNewWindow="true">
    </ExportSettings>
    <MasterTableView CommandItemDisplay="Top">
        <CommandItemSettings ShowExportToExcelButton="true" />
        <Columns>
            <telerik:GridBoundColumn DataField="numbers" UniqueName="numbers" HeaderText="large numbers" DataType="System.Decimal"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="someField" UniqueName="someColumn" HeaderText="another column" DataType="System.Decimal"></telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="someDate" UniqueName="dateColumn" HeaderText="the date"></telerik:GridDateTimeColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
 
