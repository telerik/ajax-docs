---
title: Simple Data-binding
page_title: Simple Data-binding | RadGrid for ASP.NET AJAX Documentation
description: Simple Data-binding
slug: grid/data-binding/understanding-data-binding/server-side-binding/simple-data-binding
tags: simple,data-binding
published: True
position: 0
---

# Simple Data-binding



Simple data-binding can be used in simple cases when you do not require the grid to perform complex operations such as

* Inserting, deleting, and updating records through custom edit forms (WebUserControl or FormTemplate)

* Grouping

* Hierarchy relations

* Filtering

* Sorting

* Paging

>tip For advanced features such as those listed above, **RadGrid** must be bound using [declarative data sources]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%}) or through the [NeedDataSource event]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%}). When using declarative data sources or the **NeedDataSource** event, **RadGrid** can automatically accommodate the appropriate database operations without the need for you explicitly handle any sorting, paging, grouping, and so on.
>


To use simple data binding with a **RadGrid** control, take the following steps in the following in the code-behind:

1. Set the **DataSource** property. This property points a data source such as a **DataSet**, **DataTable**, **DataReader**, **ArrayList**, etc.

1. Call the **DataBind** method on the first page load and after any data operation.

When using simple data-binding, you do not need to call the **DataBind** method when loading the page on postbacks; after postback **RadGrid** uses the **ViewState** to recreate the data. You do, however, need to assign the data source and rebind the grid after any data operation such as paging, sorting, editing, and so on. This model copies exactly the behavior of MS **DataGrid**.

## Example

The following example shows the steps for simple data-binding with **RadGrid**. The grid is bound on page load and in the **PageIndexChanged** event handler:



````C#
private void LoadData()
{
    OleDbConnection MyOleDbConnection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/App_Data/NWind.mdb"));
    OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();
    DataSet MyDataSet = new DataSet();
    MyOleDbConnection.Open();
    try
    {
        MyOleDbDataAdapter.SelectCommand = new OleDbCommand("SELECT * FROM Customers", MyOleDbConnection);
        MyOleDbDataAdapter.Fill(MyDataSet, "Customers");
    }
    finally
    {
        MyOleDbConnection.Close();
    }
    DataView myDataView = MyDataSet.Tables["Customers"].DefaultView;
    RadGrid1.DataSource = myDataView;
}
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        LoadData();
        RadGrid1.DataBind();
    }
}
protected void RadGrid1_PageIndexChanged(object source, Telerik.Web.UI.GridPageChangedEventArgs e)
{
    RadGrid1.CurrentPageIndex = e.NewPageIndex;
    LoadData();
    RadGrid1.DataBind();
}
````
````VB
Private Sub LoadData()
    Dim MyOleDbConnection As New OleDbConnection( _
        "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + _
         Server.MapPath("~/App_Data/NWind.mdb"))
    Dim MyOleDbDataAdapter As New OleDbDataAdapter()
    Dim MyDataSet As New DataSet()
    MyOleDbConnection.Open()
    Try
        MyOleDbDataAdapter.SelectCommand = _
           New OleDbCommand("SELECT * FROM Customers", MyOleDbConnection)
        MyOleDbDataAdapter.Fill(MyDataSet, "Customers")
    Finally
        MyOleDbConnection.Close()
    End Try
    Dim myDataView As DataView = MyDataSet.Tables("Customers").DefaultView
    RadGrid1.DataSource = myDataView
End Sub 'LoadData
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) _
      Handles Me.Load
    If Not IsPostBack Then
        LoadData()
        RadGrid1.DataBind()
    End If
End Sub 'Page_Load
Protected Sub RadGrid1_PageIndexChanged(ByVal [source] As Object, _
                 ByVal e As Telerik.Web.UI.GridPageChangedEventArgs) _
                 Handles RadGrid1.PageIndexChanged
    RadGrid1.CurrentPageIndex = e.NewPageIndex
    LoadData()
    RadGrid1.DataBind()
End Sub 'RadGrid1_PageIndexChanged 
````


## See Also

 * [Advanced Data-binding (Using NeedDataSource Event)]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%})
