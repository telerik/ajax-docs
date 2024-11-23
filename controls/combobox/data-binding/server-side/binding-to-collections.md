---
title: Binding to Collections
page_title: Binding to Collections - RadComboBox
description: Overview of the Server-side Data binding options for the Telerik WebForms Combobox.
slug: combobox/data-binding/server-side/binding-to-collections
tags: server-side, data binding, array, arraylist, datatable, dataset, dataview
published: True
position: 2
---

# Binding to Collections

Programmatic Data Binding on Server-side involves setting the `DataSource` property and calling the `DataBind` method. This can be done either in the `Init` or `Load` events of the Page's LifeCycle.

## Binding to Array, ArrayList

>caption Markup

````ASPNET
<telerik:radcombobox id="RadComboBox1" runat="server" />
<telerik:radcombobox id="RadComboBox2" runat="server" />
````

>caption CodeBehind

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		BindToArrayList(RadComboBox1);
		BindToArray(RadComboBox2);
	}
}

private void BindToArray(RadComboBox combo)
{
	string[] itemsList = { "One", "Two", "Three" };
	combo.DataSource = itemsList;
	combo.DataBind();
}

private void BindToArrayList(RadComboBox combo)
{
	ArrayList itemsList = new ArrayList();
	itemsList.Add("One");
	itemsList.Add("Two");
	itemsList.Add("Three");
	combo.DataSource = itemsList;
	combo.DataBind();
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not Page.IsPostBack Then
        BindToArrayList(RadComboBox1)
        BindToArray(RadComboBox2)
    End If
End Sub

Private Sub BindToArray(ByVal combo As RadComboBox)
    Dim itemsList As String() = {"One", "Two", "Three"}
    combo.DataSource = itemsList
    combo.DataBind()
End Sub

Private Sub BindToArrayList(ByVal combo As RadComboBox)
    Dim itemsList As ArrayList = New ArrayList()
    itemsList.Add("One")
    itemsList.Add("Two")
    itemsList.Add("Three")
    combo.DataSource = itemsList
    combo.DataBind()
End Sub
````

## Binding to DataTable, DataSet, DataView

In case of structured data source, you will also need to set the `DataTextField` and `DataValueField` properties.

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            RadComboBox1.DataValueField = "ProductID";
            RadComboBox1.DataTextField = "ProductName";

            RadComboBox1.DataSource = GetSampleSource();
            RadComboBox1.DataBind();
        }
    }
    private DataTable GetSampleSource()
    {
        DataTable dataTable = new DataTable();

        DataColumn column = new DataColumn();
        column.DataType = Type.GetType("System.Int32");
        column.ColumnName = "ProductID";
        dataTable.Columns.Add(column);

        column = new DataColumn();
        column.DataType = Type.GetType("System.String");
        column.ColumnName = "ProductName";
        dataTable.Columns.Add(column);

        DataColumn[] PrimaryKeyColumns = new DataColumn[1];
        PrimaryKeyColumns[0] = dataTable.Columns["ProductID"];
        dataTable.PrimaryKey = PrimaryKeyColumns;

        for (int i = 0; i <= 6; i++)
        {
            DataRow row = dataTable.NewRow();
            row["ProductID"] = i + 1;
            row["ProductName"] = "Product " + (i + 1);

            dataTable.Rows.Add(row);
        }

        return dataTable;
    }          
````
````VB
    Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Not IsPostBack Then
            RadComboBox1.DataValueField = "ProductID"
            RadComboBox1.DataTextField = "ProductName"

            RadComboBox1.DataSource = GetSampleSource()
            RadComboBox1.DataBind()
        End If
    End Sub

    Private Function GetSampleSource() As DataTable
        Dim dataTable As DataTable = New DataTable()
        Dim column As DataColumn = New DataColumn()
        column.DataType = Type.[GetType]("System.Int32")
        column.ColumnName = "ProductID"
        dataTable.Columns.Add(column)
        column = New DataColumn()
        column.DataType = Type.[GetType]("System.String")
        column.ColumnName = "ProductName"
        dataTable.Columns.Add(column)
        Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}
        PrimaryKeyColumns(0) = dataTable.Columns("ProductID")
        dataTable.PrimaryKey = PrimaryKeyColumns

        For i As Integer = 0 To 6
            Dim row As DataRow = dataTable.NewRow()
            row("ProductID") = i + 1
            row("ProductName") = "Product " & (i + 1)
            dataTable.Rows.Add(row)
        Next

        Return dataTable
    End Function
````