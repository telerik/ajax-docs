---
title: Programmatic Data Binding Using the NeedDataSource Event
page_title: Programmatic Data-binding Using the NeedDataSource Event | RadGrid for ASP.NET AJAX Documentation
description: When programmatically binding a RadGrid use the NeedDataSource Event
slug: grid/data-binding/understanding-data-binding/server-side-binding/programmatic-data-binding-using-needdatasource-event
tags: programmatic,data-binding,needdatasource,events
published: True
position: 1
---

# Programmatic Data Binding Using the NeedDataSource Event



##

The key to handling programmatic data binding of a RadGrid control is handling the **NeedDataSource** event. **RadGrid** fires the **NeedDataSource** event each time it needs to be bound to a data source.

The advantage of using the **NeedDataSource** event is the flexibility of generating the data source in the code-behind. The **NeedDataSource** event handles the logic of when and how data binding should take place out-of-the-box.

>note It is important to properly construct a data source object and assign it to the **RadGrid DataSource** property.
>

>note **RadGrid** does not fire the **NeedDataSource** event unless **RadGrid** is visible (**Visible**=**True**).
>

### The NeedDataSource event fires in the following cases:

>note The event arguments for the **NeedDataSource** event include the **RebindReason** property, which indicates the reason the event is occurring.
>

>caution If at the time of the event, the **DataSource** property is not set to a valid data source, the grid will behave  unexpectedly.
>

* Immediately after **On_Load** if the grid has not yet been data-bound and there is no **ViewState** data. This means that if the **MasterTableView** **EnableViewState** has been set to **False**, the grid will bind each time the page loads, not only the first time.

* When a paging operation occurs.

* When a sorting operation occurs.

* When an edit command is fired.

* Immediately after any **Update**, **Delete**, or **Insert** command event handlers finish execution. You can cancel these operations by handling the **ItemCommand** event and assigning **True** to the **e** event argument's **Canceled** property.

* When grouping or ungrouping, immediately after the **GroupsChanging** event occurs.

* When filtering (choosing an option from a column filter menu).

* When re-sorting a group.

* When a call to the grid's **Rebind** method takes place.

* Prior to binding any detail table.

* Custom cases, for example when using the **RebindReason** property as noted above.

In some scenarios it may be necessary to refresh the grid explicitly upon some external action. In such cases use just the **Rebind** () method, which will refresh the grid content.

>caution  **Important:** You should never call the **Rebind** () method in a **NeedDataSource** event handler.You should never call **DataBind** () as well when using programmatic data binding through **NeedDataSource**.
>

### Examples

*   Using a SQL Connection

````C#
protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn);

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

    RadGrid1.DataSource = myDataTable;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As SqlConnection = New SqlConnection(ConnString)
    Dim adapter As SqlDataAdapter = New SqlDataAdapter
    adapter.SelectCommand = New SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn)
    Dim myDataTable As New DataTable
    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try
    RadGrid1.DataSource = myDataTable
End Sub
````

* Using an IEnumerable and Object Class

````C#
public IEnumerable<Supplier> GenerateSupplierData()
{
    return Enumerable.Range(1, 5).Select(i => new Supplier
    {
        SupplierId = i,
        SupplierName = $"Supplier {i}"
    });
}    

public class Supplier
{
    public int SupplierId { get; set; }
    public string SupplierName { get; set; }
}

protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GenerateSupplierData();
}
````
````VB
Public Function GenerateSupplierData() As IEnumerable(Of Supplier)
    Return Enumerable.Range(1, 5).[Select](Function(i) New Supplier With {
        .SupplierId = i,
        .SupplierName = $"Supplier {i}"
    })
End Function

Public Class Supplier
    Public Property SupplierId As Integer
    Public Property SupplierName As String
End Class

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GenerateSupplierData()
End Sub
````