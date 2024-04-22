---
title: Export multiple Grids in single PDF/Excel file
description: Export multiple Grids in single PDF/Excel file. Check it out!
type: how-to
page_title: Export multiple Grids in single PDF/Excel file
slug: grid-export-multiple-grids-in-single-pdf-excel-file
tags: radgrid, grid, pdf, excel, export
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Sometimes, one might want to export multiple Grids to either PDF of Excel.

## Solution

This article illustrates how to export multiple Grid controls into single Excel/PDF file by using another Grid to wrap the contents.
Please notice the **ExportOnlyData="false"** property, intentionally set on the wrapper to ensure that the nested controls will be exported.

Export to Excel: 

````ASP.NET
<div style="background-color: #999999; padding: 10px; width: 550px">
    <div style="padding: 10px; background-color: White;">
        <telerik:RadComboBox ID="RadComboBox1" runat="server" Skin="Vista" AutoPostBack="false"
            BorderStyle="None">
            <Items>
                <telerik:RadComboBoxItem Text="RadGrid1" />
                <telerik:RadComboBoxItem Text="RadGrid2" />
                <telerik:RadComboBoxItem Text="RadGrid3" />
                <telerik:RadComboBoxItem Text="All RadGrids" />
            </Items>
        </telerik:RadComboBox>
        <asp:ImageButton ID="ImageButton1" runat="server" AlternateText="Export to Excel"
            CssClass="imButton" ImageUrl="~/Images/Excel.jpg" OnClick="ImageButton1_Click" />
    </div>
    <telerik:RadGrid ID="RadGridWrapper" runat="server" ShowHeader="false" BorderStyle="None"
        Width="550px">
        <ExportSettings OpenInNewWindow="true" />
        <MasterTableView AutoGenerateColumns="true">
            <ItemTemplate>
                <telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid_NeedDataSource"
                    BorderStyle="None" Skin="Office2007">
                    <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" />
                    <MasterTableView AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
                            <telerik:GridBoundColumn DataField="Number" HeaderText="Number" UniqueName="Number" />
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
                <br />
                <telerik:RadGrid ID="RadGrid2" runat="server" OnNeedDataSource="RadGrid_NeedDataSource"
                    BorderStyle="None" Skin="Office2007">
                    <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" />
                    <MasterTableView AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
                            <telerik:GridBoundColumn DataField="Number" HeaderText="Number" UniqueName="Number" />
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
                <br />
                <telerik:RadGrid ID="RadGrid3" runat="server" OnNeedDataSource="RadGrid_NeedDataSource"
                    BorderStyle="None" Skin="Office2007">
                    <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" />
                    <MasterTableView AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
                            <telerik:GridBoundColumn DataField="Number" HeaderText="Number" UniqueName="Number" />
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
            </ItemTemplate>
        </MasterTableView>
    </telerik:RadGrid>
</div>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadGridWrapper.DataSource = new string[] { " " };
}

protected void RadGrid_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    DataTable table = new DataTable();

    table.Columns.Add("ID", typeof(int));
    table.Columns.Add("Number", typeof(int));

    for (int i = 0; i < 5; i++) 
    {
        table.Rows.Add(i + 1, DateTime.Now.Millisecond);
    }

    System.Threading.Thread.Sleep(15); 

    (source as RadGrid).DataSource = table;
}

protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
{
    RadGrid radGrid = RadComboBox1.SelectedItem.Text == "All RadGrids" ? RadGridWrapper : (RadGrid)RadGridWrapper.Items[0].FindControl(RadComboBox1.SelectedItem.Text);
    radGrid.MasterTableView.ExportToExcel();
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    RadGridWrapper.DataSource = New String() {" "}
End Sub

Protected Sub RadGrid_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    Dim table As DataTable = New DataTable()

    table.Columns.Add("ID", GetType(Integer))
    table.Columns.Add("Number", GetType(Integer))

    For i As Integer = 0 To 5 - 1
        table.Rows.Add(i + 1, DateTime.Now.Millisecond)
    Next

    System.Threading.Thread.Sleep(15)

    (TryCast(source, RadGrid)).DataSource = table
End Sub

Protected Sub ImageButton1_Click(ByVal sender As Object, ByVal e As ImageClickEventArgs)
    Dim radGrid As RadGrid = If(RadComboBox1.SelectedItem.Text = "All RadGrids", RadGridWrapper, CType(RadGridWrapper.Items(0).FindControl(RadComboBox1.SelectedItem.Text), RadGrid))
    radGrid.MasterTableView.ExportToExcel()
End Sub
````

Export to PDF: 

````ASP.NET
<div style="background-color: #999999; padding: 10px; width: 550px">
    <div style="padding: 10px; background-color: White;">
        <telerik:RadComboBox ID="RadComboBox1" runat="server" Skin="Vista" AutoPostBack="false"
            BorderStyle="None">
            <Items>
                <telerik:RadComboBoxItem Text="RadGrid1" />
                <telerik:RadComboBoxItem Text="RadGrid2" />
                <telerik:RadComboBoxItem Text="RadGrid3" />
                <telerik:RadComboBoxItem Text="All RadGrids" />
            </Items>
        </telerik:RadComboBox>
        <asp:ImageButton ID="ImageButton1" runat="server" AlternateText="Export to Excel"
            CssClass="imButton" ImageUrl="~/Images/Pdf.jpg" OnClick="ImageButton1_Click" />
    </div>
    <telerik:RadGrid ID="RadGridWrapper" runat="server" ShowHeader="false" Width="550px"
        BorderStyle="None" OnItemCreated="RadGridWrapper_ItemCreated">
        <ExportSettings OpenInNewWindow="true" />
        <MasterTableView AutoGenerateColumns="true" BorderStyle="None">
            <ItemTemplate>
                <telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid_NeedDataSource"
                    BorderStyle="None" Skin="Office2007">
                    <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" />
                    <MasterTableView AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
                            <telerik:GridBoundColumn DataField="Number" HeaderText="Number" UniqueName="Number" />
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
                <br />
                <telerik:RadGrid ID="RadGrid2" runat="server" OnNeedDataSource="RadGrid_NeedDataSource"
                    BorderStyle="None" Skin="Office2007">
                    <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" />
                    <MasterTableView AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
                            <telerik:GridBoundColumn DataField="Number" HeaderText="Number" UniqueName="Number" />
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
                <br />
                <telerik:RadGrid ID="RadGrid3" runat="server" OnNeedDataSource="RadGrid_NeedDataSource"
                    BorderStyle="None" Skin="Office2007">
                    <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" />
                    <MasterTableView AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID" />
                            <telerik:GridBoundColumn DataField="Number" HeaderText="Number" UniqueName="Number" />
                        </Columns>
                    </MasterTableView>
                </telerik:RadGrid>
            </ItemTemplate>
        </MasterTableView>
    </telerik:RadGrid>
</div>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack) 
    {
        RadGridWrapper.DataSource = new string[] { " " };
    }
}

protected void RadGridWrapper_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridHeaderItem)
    {
        e.Item.Visible = false;
    }
}

protected void RadGrid_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    DataTable table = new DataTable();

    table.Columns.Add("ID", typeof(int));
    table.Columns.Add("Number", typeof(int));

    for (int i = 0; i < 5; i++)
    {
        table.Rows.Add(i + 1, DateTime.Now.Millisecond);
    }

    System.Threading.Thread.Sleep(15);
    
    (source as RadGrid).DataSource = table;
}

protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
{
    RadGrid radGrid = RadComboBox1.SelectedItem.Text == "All RadGrids" ? RadGridWrapper : (RadGrid)RadGridWrapper.Items[0].FindControl(RadComboBox1.SelectedItem.Text);
    radGrid.MasterTableView.ExportToPdf();
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not IsPostBack Then
        RadGridWrapper.DataSource = New String() {" "}
    End If
End Sub

Protected Sub RadGridWrapper_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridHeaderItem Then
        e.Item.Visible = False
    End If
End Sub

Protected Sub RadGrid_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    Dim table As DataTable = New DataTable()
    table.Columns.Add("ID", GetType(Integer))
    table.Columns.Add("Number", GetType(Integer))

    For i As Integer = 0 To 5 - 1
        table.Rows.Add(i + 1, DateTime.Now.Millisecond)
    Next

    System.Threading.Thread.Sleep(15)
    CType(source, RadGrid).DataSource = table
End Sub

Protected Sub ImageButton1_Click(ByVal sender As Object, ByVal e As ImageClickEventArgs)
    Dim radGrid As RadGrid = If(RadComboBox1.SelectedItem.Text = "All RadGrids", RadGridWrapper, CType(RadGridWrapper.Items(0).FindControl(RadComboBox1.SelectedItem.Text), RadGrid))
    radGrid.MasterTableView.ExportToPdf()
End Sub
```` 
   