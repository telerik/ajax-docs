---
title: Advanced Data-binding (Using NeedDataSource Event)
page_title: Advanced Data-binding (Using NeedDataSource Event) | RadGrid for ASP.NET AJAX Documentation
description: Advanced Data-binding (Using NeedDataSource Event)
slug: grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)
tags: advanced,data-binding,(using,needdatasource,event)
published: True
position: 1
---

# Advanced Data-binding (Using NeedDataSource Event)



##   

The key to the advanced data binding of a **RadGrid** control is handling the **NeedDataSource** event. **RadGrid** fires the **NeedDataSource** event each time it needs to be bound to a data source. If, at the time of the event, the **DataSource** property is not set to a valid data source object, the grid will not behave correctly.

This event fires in the following cases:

* Immediately after **On_Load** if the grid has not yet been data-bound and there is no **ViewState** data. This means that if **MasterTableView**. **EnableViewState** has been set to **False**, the grid will bind each time the page loads, not only the first time.

* When a paging operation occurs.

* When a sorting operation occurs.

* When an edit command is fired.

* Immediately after any **Update**, **Delete**, or **Insert** command event handlers finish execution. You can cancel these operations by handling the **ItemCommand** event and assigning **True** to the **e** event argument's **Canceled** property.

* When grouping or ungrouping, immediately after the **GroupsChanging** event occurs.

* When filtering (choosing an option from a column filter menu).

* When re-sorting a group.

* When a call to the grid's **Rebind** method takes place.

* Prior to binding any detail table.

* Custom cases, for example using the **RebindReason** property as noted below.

>note The event arguments for the **NeedDataSource** event include the **RebindReason** property, which indicates the reason the event is occurring.
>


The advantage of using the **NeedDataSource** event is that you have the flexibility of generating your data source in the code-behind, but you are freed from handling the logic of when and how data binding should take place. It is still your responsibility to properly construct a data source object and assign it to the **RadGrid's DataSource** property.

>caution  **Important:** You should never call the **Rebind** () method in a **NeedDataSource** event handler.You should never call **DataBind** () as well when using advanced data binding through **NeedDataSource** . For Microsoft **GridView** -like data binding, see [Simple Data-binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/simple-data-binding%}).
>


**RadGrid** does not fire the **NeedDataSource** event unless **RadGrid** is visible (**Visible**=**True**).

In a **NeedDataSource** event handler, you should prepare the data source (list of objects) for **RadGrid** and assign it to the grid's **DataSource** property:



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


## See Also

 * [Bindable Property Types]({%slug grid/data-binding/bindable-property-types%})

 * [Telerik RadGrid Data Binding Basics]({%slug grid/data-binding/understanding-data-binding/telerik-radgrid-data-binding-basics%})
