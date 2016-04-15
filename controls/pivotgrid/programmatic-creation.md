---
title: Programmatic Creation
page_title: Programmatic Creation | RadPivotGrid for ASP.NET AJAX Documentation
description: Programmatic Creation
slug: pivotgrid/programmatic-creation
tags: programmatic,creation
published: True
position: 9
---

# Programmatic Creation



There are many cases where you will need to create the RadPivotGrid control dynamically. In some scenarios you might want to declare it statically on the page and configure it with server-side code orbuild it entirely in code-behind. Both cases have a few requirements you should follow:

* **Create the RadPivotGrid entirely in code-behind** - here you should place all the code in the **Page_Init** event handler. Note that the columns have to beadded to the Columns collection after their properties are set.

* **Add the RadPivotGrid declaration statically in the page mark-up and configure itserver-side** - configuration is to be done in the **Page_Load** eventhandler and only on initial load (with Not IsPostBack condition) to avoid adding the same structuretwice. In contrast to the scenario above, columns have to be added to the Columns collection before their properties are set.

The samples bellow illustrate both approaches:

## Create the RadPivotGrid entirely in code-behind on Page_Init



````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
</telerik:RadAjaxLoadingPanel>
<telerik:RadAjaxPanel ID="radAjaxPanel1" runat="server" LoadingPanelID="RadAjaxLoadingPanel1">   
<h3>RadTreeList created entirely in code-behind on Page_Init</h3>
<asp:Panel ID="ContentPanel" runat="server">
</asp:Panel>
</telerik:RadAjaxPanel>
````
````C#
protected override void OnInit(EventArgs e)
{
    base.OnInit(e);

    RadPivotGrid pivotGrid = new RadPivotGrid();
    pivotGrid.ID = "RadPivotGrid1";
    pivotGrid.EmptyValue = "No data";
    pivotGrid.AllowPaging = true;
    pivotGrid.Width = new Unit(800);
    pivotGrid.ColumnHeaderCellStyle.Width = new Unit(80);
    pivotGrid.ClientSettings.Scrolling.AllowVerticalScroll = true;
    pivotGrid.NeedDataSource += new EventHandler<PivotGridNeedDataSourceEventArgs>(pivotGrid_NeedDataSource);

    PivotGridRowField rowField = new PivotGridRowField();
    rowField.DataField = "Company";
    rowField.UniqueName = "Company";
    pivotGrid.Fields.Add(rowField);
    rowField = new PivotGridRowField();
    rowField.DataField = "TransportType";
    rowField.UniqueName = "TransportType";
    pivotGrid.Fields.Add(rowField);

    PivotGridColumnField columnField = new PivotGridColumnField();
    columnField.DataField = "Country";
    columnField.UniqueName = "Country";
    pivotGrid.Fields.Add(columnField);
    columnField = new PivotGridColumnField();
    columnField.DataField = "City";
    columnField.UniqueName = "City";
    pivotGrid.Fields.Add(columnField);

    PivotGridAggregateField aggregateField = new PivotGridAggregateField();
    aggregateField.DataField = "Profit";
    aggregateField.UniqueName = "Profit";
    aggregateField.DataFormatString = "{0:F2}";
    aggregateField.TotalFormatString = "{0:F2}";
    pivotGrid.Fields.Add(aggregateField);
    aggregateField = new PivotGridAggregateField();
    aggregateField.DataField = "Expenses";
    aggregateField.UniqueName = "Expenses";
    aggregateField.DataFormatString = "{0:F2}";
    aggregateField.TotalFormatString = "{0:F2}";
    pivotGrid.Fields.Add(aggregateField);
    
    ContentPanel.Controls.Add(pivotGrid);
}

void pivotGrid_NeedDataSource(object sender, PivotGridNeedDataSourceEventArgs e)
{
    (sender as RadPivotGrid).DataSource = GetDataTable("SELECT * FROM Transportation");
    
}

public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);

    DataTable myDataTable = new DataTable();

    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }

    return myDataTable;
}
````
````VB.NET
Protected Overrides Sub OnInit(e As EventArgs)
    MyBase.OnInit(e)

    Dim pivotGrid As New RadPivotGrid()
    pivotGrid.ID = "RadPivotGrid1"
    pivotGrid.EmptyValue = "No data"
    pivotGrid.AllowPaging = True
    pivotGrid.Width = New Unit(800)
    pivotGrid.ColumnHeaderCellStyle.Width = New Unit(80)
    pivotGrid.ClientSettings.Scrolling.AllowVerticalScroll = True
    AddHandler pivotGrid.NeedDataSource, AddressOf pivotGrid_NeedDataSource

    Dim rowField As New PivotGridRowField()
    rowField.DataField = "TransportType"
    rowField.UniqueName = "TransportType"
    pivotGrid.Fields.Add(rowField)
    rowField = New PivotGridRowField()
    rowField.DataField = "FuelCapacity"
    rowField.UniqueName = "FuelCapacity"
    pivotGrid.Fields.Add(rowField)

    Dim columnField As New PivotGridColumnField()
    columnField.DataField = "Country"
    columnField.UniqueName = "Country"
    pivotGrid.Fields.Add(columnField)
    columnField = New PivotGridColumnField()
    columnField.DataField = "City"
    columnField.UniqueName = "City"
    pivotGrid.Fields.Add(columnField)

    Dim aggregateField As New PivotGridAggregateField()
    aggregateField.DataField = "Profit"
    aggregateField.UniqueName = "Profit"
    aggregateField.DataFormatString = "{0:F2}"
    aggregateField.TotalFormatString = "{0:F2}"
    pivotGrid.Fields.Add(aggregateField)
    aggregateField = New PivotGridAggregateField()
    aggregateField.DataField = "Expenses"
    aggregateField.UniqueName = "Expenses"
    aggregateField.DataFormatString = "{0:F2}"
    aggregateField.TotalFormatString = "{0:F2}"
    pivotGrid.Fields.Add(aggregateField)

    ContentPanel.Controls.Add(pivotGrid)
End Sub

Private Sub pivotGrid_NeedDataSource(sender As Object, e As PivotGridNeedDataSourceEventArgs)
    TryCast(sender, RadPivotGrid).DataSource = GetDataTable("SELECT * FROM Transportation")
End Sub

Public Function GetDataTable(query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
    Dim conn As New SqlConnection(ConnString)
    Dim adapter As New SqlDataAdapter()
    adapter.SelectCommand = New SqlCommand(query, conn)

    Dim myDataTable As New DataTable()

    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try

    Return myDataTable
End Function
````


## Statically declared RadPivotGrid and configured on Page_Load



````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />    
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server">
</telerik:RadAjaxLoadingPanel>
<telerik:RadAjaxPanel ID="radAjaxPanel1" runat="server" LoadingPanelID="RadAjaxLoadingPanel1">
 <h3>RadTreeList declared statically with structure defined on Page_Load</h3>
    <telerik:RadPivotGrid RenderMode="Lightweight" runat="server" ID="RadPivotGrid1"></telerik:RadPivotGrid>
</telerik:RadAjaxPanel>
````
````C#
protected override void OnInit(EventArgs e)
{
    base.OnInit(e);

    RadPivotGrid1.NeedDataSource += new EventHandler<PivotGridNeedDataSourceEventArgs>(pivotGrid_NeedDataSource);
}

protected override void OnLoad(EventArgs e)
{
    base.OnLoad(e);
    if (!IsPostBack)
    {
        RadPivotGrid1.EmptyValue = "No data";
        RadPivotGrid1.AllowPaging = true;
        RadPivotGrid1.Width = new Unit(800);
        RadPivotGrid1.ColumnHeaderCellStyle.Width = new Unit(80);
        RadPivotGrid1.ClientSettings.Scrolling.AllowVerticalScroll = true;

        PivotGridRowField rowField = new PivotGridRowField();
        RadPivotGrid1.Fields.Add(rowField);
        rowField.DataField = "TransportType";
        rowField.UniqueName = "TransportType";
        rowField = new PivotGridRowField();
        RadPivotGrid1.Fields.Add(rowField);
        rowField.DataField = "Company";
        rowField.UniqueName = "Company";

        PivotGridColumnField columnField = new PivotGridColumnField();
        RadPivotGrid1.Fields.Add(columnField);
        columnField.DataField = "Country";
        columnField.UniqueName = "Country";
        columnField = new PivotGridColumnField();
        RadPivotGrid1.Fields.Add(columnField);
        columnField.DataField = "City";
        columnField.UniqueName = "City";
        columnField = new PivotGridColumnField();
        RadPivotGrid1.Fields.Add(columnField);
        columnField.DataField = "DestinationCountry";
        columnField.UniqueName = "DestinationCountry";

        PivotGridAggregateField aggregateField = new PivotGridAggregateField();
        RadPivotGrid1.Fields.Add(aggregateField);
        aggregateField.DataField = "Profit";
        aggregateField.UniqueName = "Profit";
        aggregateField.DataFormatString = "{0:F2}";
        aggregateField.TotalFormatString = "{0:F2}";
        aggregateField = new PivotGridAggregateField();
        RadPivotGrid1.Fields.Add(aggregateField);
        aggregateField.DataField = "Expenses";
        aggregateField.UniqueName = "Expenses";
        aggregateField.DataFormatString = "{0:F2}";
        aggregateField.TotalFormatString = "{0:F2}";
    }
}

void pivotGrid_NeedDataSource(object sender, PivotGridNeedDataSourceEventArgs e)
{
    (sender as RadPivotGrid).DataSource = GetDataTable("SELECT * FROM Transportation");
}

public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);

    DataTable myDataTable = new DataTable();

    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }

    return myDataTable;
}
````
````VB.NET
Protected Overrides Sub OnInit(e As EventArgs)
    MyBase.OnInit(e)

    AddHandler RadPivotGrid1.NeedDataSource, AddressOf RadPivotGrid1_NeedDataSource
End Sub

Protected Overrides Sub OnLoad(e As EventArgs)
    MyBase.OnLoad(e)
    If Not IsPostBack Then
        RadPivotGrid1.EmptyValue = "No data"
        RadPivotGrid1.AllowPaging = True
        RadPivotGrid1.Width = New Unit(800)
        RadPivotGrid1.ColumnHeaderCellStyle.Width = New Unit(80)
        RadPivotGrid1.ClientSettings.Scrolling.AllowVerticalScroll = True

        Dim rowField As New PivotGridRowField()
        RadPivotGrid1.Fields.Add(rowField)
        rowField.DataField = "TransportType"
        rowField.UniqueName = "TransportType"
        rowField = New PivotGridRowField()
        RadPivotGrid1.Fields.Add(rowField)
        rowField.DataField = "Company"
        rowField.UniqueName = "Company"

        Dim columnField As New PivotGridColumnField()
        RadPivotGrid1.Fields.Add(columnField)
        columnField.DataField = "Country"
        columnField.UniqueName = "Country"
        columnField = New PivotGridColumnField()
        RadPivotGrid1.Fields.Add(columnField)
        columnField.DataField = "City"
        columnField.UniqueName = "City"
        columnField = New PivotGridColumnField()
        RadPivotGrid1.Fields.Add(columnField)
        columnField.DataField = "DestinationCountry"
        columnField.UniqueName = "DestinationCountry"

        Dim aggregateField As New PivotGridAggregateField()
        RadPivotGrid1.Fields.Add(aggregateField)
        aggregateField.DataField = "Profit"
        aggregateField.UniqueName = "Profit"
        aggregateField.DataFormatString = "{0:F2}"
        aggregateField.TotalFormatString = "{0:F2}"
        aggregateField = New PivotGridAggregateField()
        RadPivotGrid1.Fields.Add(aggregateField)
        aggregateField.DataField = "Expenses"
        aggregateField.UniqueName = "Expenses"
        aggregateField.DataFormatString = "{0:F2}"
        aggregateField.TotalFormatString = "{0:F2}"
    End If
End Sub

Private Sub RadPivotGrid1_NeedDataSource(sender As Object, e As PivotGridNeedDataSourceEventArgs)
    TryCast(sender, RadPivotGrid).DataSource = GetDataTable("SELECT * FROM Transportation")
End Sub

Public Function GetDataTable(query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
    Dim conn As New SqlConnection(ConnString)
    Dim adapter As New SqlDataAdapter()
    adapter.SelectCommand = New SqlCommand(query, conn)

    Dim myDataTable As New DataTable()

    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try

    Return myDataTable
End Function
````

