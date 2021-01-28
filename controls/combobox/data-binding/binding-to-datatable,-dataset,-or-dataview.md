---
title: Binding to DataTable, DataSet, or DataView
page_title: Binding to DataTable, DataSet, or DataView - RadComboBox
description: Check our Web Forms article about Binding to DataTable, DataSet, or DataView.
slug: combobox/data-binding/binding-to-datatable,-dataset,-or-dataview
tags: binding,to,datatable,,dataset,,or,dataview
published: True
position: 2
---

# Binding to DataTable, DataSet, or DataView



## 

**RadComboBox** can be bound also to a DataTable, DataSet and DataView. The example below is using a dummy IEnumerable source to fill up a DataTable so you can directly copy-paste it to your project.

To demonstrate that this binding is happening entirely programmatically in the code-behind, the declaration of the following **RadComboBox** object includes no `DataSourceID` property or `<Items>` section:

````ASPNET
        <telerik:RadComboBox ID="RadComboBox1" runat="server"></telerik:RadComboBox>
````



In the **Page_Load** event handler, you can create and fill the DataTable object, then bind it to the RadComboBox. The `DataBind()` method should be called after setting the `DataSource` property.



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
````VB.NET
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

In addition to the `DataSource` property, the combo also requires the `DataTextField` and `DataValueField` properties. The content coming from the Text field will be displayed in the items visually, while the content coming from the Value field will represents the underlying value of the item, which will be returned by the `SelectedValue` property if the user chooses this given item.

The use of `if (!IsPostBack)` brings a nice performance optimization by allowing the combo to be bound only once since it can remember its source.

## Real-Case Use Scenarios

The combo or dropdownlist controls are usually used within the context of a parent control, whether it is a Grid, ListView, DataForm, Repeater, etc.

Since the items of these data visualization controls are bound automatically, they also bind all their inner components. Which means that the `DataBind()` method of the **RadComboBox** is being called by its container automatically.

We can make avail of this and just set the `DataSource` property of the combo inside its own `DataBinding` event handler. This will help us avoid calling `DataBind()` 2 times - once by the parent control and another - in late events like `PreRender` or `ItemDataBound`.

````ASPNET
        <telerik:RadComboBox ID="RadComboBox1" runat="server"
             OnDataBinding="RadComboBox1_DataBinding"></telerik:RadComboBox>
````
````C#
    protected void RadComboBox1_DataBinding(object sender, EventArgs e)
    {
        RadComboBox1.DataValueField = "ProductID";
        RadComboBox1.DataTextField = "ProductName";
        // GetSampleSource() is provided in the previous sample of the article
        RadComboBox1.DataSource = GetSampleSource();
    }
````
````VB.NET
    Protected Sub RadComboBox1_DataBinding(sender As Object, e As EventArgs)
        RadComboBox1.DataValueField = "ProductID"
        RadComboBox1.DataTextField = "ProductName"
        ' GetSampleSource() is provided in the previous sample of the article
        RadComboBox1.DataSource = GetSampleSource()
    End Sub
````

If you want to access the parent control's item data while this binding process takes place, you can use approach below.
````ASP.NET
 <%--Sample with RadGrid--%>
 <EditItemTemplate>
     <telerik:RadComboBox ID="RadComboBox1" runat="server"
         OnDataBinding="RadComboBox1_DataBinding">
     </telerik:RadComboBox>
 </EditItemTemplate>
````
````C#
    protected void RadComboBox1_DataBinding(object sender, EventArgs e)
    {
        RadComboBox combo = sender as RadComboBox;
        combo.DataValueField = "ProductID";
        combo.DataTextField = "ProductName";

        GridEditableItem item = combo.NamingContainer as GridEditableItem;
        string parentValue = DataBinder.Eval(item.DataItem, "ShipCountry").ToString();

        // GetSampleSource() is provided in the first sample of the article
        combo.DataSource = parentValue == "SomeExpectedValue" ?
            GetSampleSource() : SomeOtherSource();
    }
    private DataTable SomeOtherSource()
    {
        return new DataTable();
    }
````
````VB.NET
    Protected Sub RadComboBox1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
        Dim combo As RadComboBox = TryCast(sender, RadComboBox)
        combo.DataValueField = "ProductID"
        combo.DataTextField = "ProductName"

        Dim item As GridEditableItem = TryCast(combo.NamingContainer, GridEditableItem)
        Dim parentValue As String = DataBinder.Eval(item.DataItem, "ShipCountry").ToString()

        ' GetSampleSource() is provided in the first sample of the article
        combo.DataSource = If(parentValue = "SomeExpectedValue",
            GetSampleSource(), SomeOtherSource())
    End Sub
    Private Function SomeOtherSource() As DataTable
        Return New DataTable()
    End Function
````

