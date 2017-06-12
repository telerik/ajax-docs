---
title: Remove Detail Tables from Export
page_title: Remove Detail Tables from Export | RadGrid for ASP.NET AJAX Documentation
description: Remove Detail Tables from Export to prevent blank rows or nested items
slug: grid/how-to/exporting/remove-detail-tables-from-export
tags: export,detail,table,blank,row
published: True
position: 1
---

# Remove Detail Tables from Export

When you have a hierarchical grid but you do not want the nested (detail) tables to show up in the exported file, you should prevent them from rendering altogether by setting their [HierarchyLoadMode]({% slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes %}) property to `ServerOnDemand`. See **Example 1**.

If you do not do that, the detail tables will be present in the Excel export. You may get an extra row that is blank if data was not provided, or they will simply render. Their rows may be collapsed in the Excel file, depending on the value of the `HierarchyDefaultExpanded` property.

>caption **Example 1**: Prevent detail tables from exporting

````C#
protected void Button1_Click(object sender, EventArgs e)
{
	RadGrid1.ExportSettings.FileName = "noDetailTable";
	RadGrid1.ExportSettings.IgnorePaging = true;
	RadGrid1.ExportSettings.ExportOnlyData = true;
	RadGrid1.ExportSettings.OpenInNewWindow = true;
	RadGrid1.MasterTableView.UseAllDataFields = true;
	RadGrid1.ExportSettings.Excel.Format = GridExcelExportFormat.Xlsx;

	//have the nested tables render only when the user expands them via the UI, so they are not present in the export output
	RadGrid1.MasterTableView.HierarchyLoadMode = GridChildLoadMode.ServerOnDemand;
	RadGrid1.MasterTableView.DetailTables[0].HierarchyLoadMode = GridChildLoadMode.ServerOnDemand;

	RadGrid1.MasterTableView.ExportToExcel();
}

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
	if (!e.IsFromDetailTable)
	{
		RadGrid1.DataSource = GeneratingTable();
	}
}

private DataTable GeneratingTable()
{
	DataTable table = new DataTable();
	table.Columns.Add("Column1");
	table.Columns.Add("Column2");
	table.Columns.Add("Column3");
	table.Columns.Add("Column4");

	for (int i = 0; i < 20; i++)
	{
		table.Rows.Add("Col1Row" + i, "Col2Row" + i, "Col3Row" + i, "Col4Row" + i);
	}

	return table;
}

protected void RadGrid1_DetailTableDataBind(object sender, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
{
	DataTable table = new DataTable();
	table.Columns.Add("Column5");
	table.Columns.Add("Column6");
	table.Columns.Add("Column7");
	table.Columns.Add("Column8");

	for (int i = 0; i < 20; i++)
	{
		table.Rows.Add("Col5Row" + i, "Col6Row" + i, "Col7Row" + i, "Col8Row" + i);
	}

	e.DetailTableView.DataSource = table;
}
````
````VB
Protected Sub Button1_Click(sender As Object, e As EventArgs)
	RadGrid1.ExportSettings.FileName = "noDetailTable"
	RadGrid1.ExportSettings.IgnorePaging = True
	RadGrid1.ExportSettings.ExportOnlyData = True
	RadGrid1.ExportSettings.OpenInNewWindow = True
	RadGrid1.MasterTableView.UseAllDataFields = True
	RadGrid1.ExportSettings.Excel.Format = GridExcelExportFormat.Xlsx

	'have the nested tables render only when the user expands them via the UI, so they are not present in the export output
	RadGrid1.MasterTableView.HierarchyLoadMode = GridChildLoadMode.ServerOnDemand
	RadGrid1.MasterTableView.DetailTables(0).HierarchyLoadMode = GridChildLoadMode.ServerOnDemand

	RadGrid1.MasterTableView.ExportToExcel()
End Sub

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
	If Not e.IsFromDetailTable Then
		RadGrid1.DataSource = GeneratingTable()
	End If
End Sub

Private Function GeneratingTable() As DataTable
	Dim table As New DataTable()
	table.Columns.Add("Column1")
	table.Columns.Add("Column2")
	table.Columns.Add("Column3")
	table.Columns.Add("Column4")

	For i As Integer = 0 To 19
		table.Rows.Add("Col1Row" + i, "Col2Row" + i, "Col3Row" + i, "Col4Row" + i)
	Next

	Return table
End Function

Protected Sub RadGrid1_DetailTableDataBind(sender As Object, e As Telerik.Web.UI.GridDetailTableDataBindEventArgs)
	Dim table As New DataTable()
	table.Columns.Add("Column5")
	table.Columns.Add("Column6")
	table.Columns.Add("Column7")
	table.Columns.Add("Column8")

	For i As Integer = 0 To 19
		table.Rows.Add("Col5Row" + i, "Col6Row" + i, "Col7Row" + i, "Col8Row" + i)
	Next

	e.DetailTableView.DataSource = table
End Sub
````

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AutoGenerateColumns="false" OnDetailTableDataBind="RadGrid1_DetailTableDataBind" 
    AllowPaging="true" PageSize="5" RenderMode="Lightweight">
    <MasterTableView>
        <Columns>
            <telerik:GridBoundColumn DataField="Column1" HeaderText="Column1"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Column2" HeaderText="Column2"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Column3" HeaderText="Column3"></telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Column4" HeaderText="Column4"></telerik:GridBoundColumn>
        </Columns>
        <DetailTables>
            <telerik:GridTableView AllowPaging="true" PageSize="5">
                <Columns>
                    <telerik:GridBoundColumn DataField="Column5" HeaderText="Column5"></telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="Column6" HeaderText="Column6"></telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="Column7" HeaderText="Column7"></telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="Column8" HeaderText="Column8"></telerik:GridBoundColumn>
                </Columns>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
<asp:Button Text="Export to Excel" ID="Button1" OnClick="Button1_Click" runat="server" />
````

## See Also

* [Hierarchy Load Modes]({% slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes %})

* [Hiding the Expand/Collapse Images When No Records]({% slug grid/how-to/hierarchy/hiding-the-expand-collapse-images-when-no-records %})
