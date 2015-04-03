---
title: Advanced Data-binding (Using NeedDataSource Event)
page_title: Advanced Data-binding (Using NeedDataSource Event) | UI for ASP.NET AJAX Documentation
description: Advanced Data-binding (Using NeedDataSource Event)
slug: grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)
tags: advanced,data-binding,(using,needdatasource,event)
published: True
position: 1
---

# Advanced Data-binding (Using NeedDataSource Event)



## 

The key to the advanced data binding of a __RadGrid__ control is handling the __NeedDataSource__ event. __RadGrid__ fires the __NeedDataSource__ event each time it needs to be bound to a data source. If, at the time of the event, the __DataSource__ property is not set to a valid data source object, the grid will not behave correctly.

This event fires in the following cases:

* Immediately after __On_Load__ if the grid has not yet been data-bound and there is no __ViewState__ data. This means that if __MasterTableView__.__EnableViewState__has been set to __False__, the grid will bind each time the page loads, not only the first time.

* When a paging operation occurs.

* When a sorting operation occurs.

* When an edit command is fired.

* Immediately after any __Update__, __Delete__, or __Insert__ command event handlers finish execution. You can cancel these operations by handling the __ItemCommand__ event and assigning __True__ to the __e__ event argument's __Canceled__ property.

* When grouping or ungrouping, immediately after the __GroupsChanging__ event occurs.

* When filtering (choosing an option from a column filter menu).

* When re-sorting a group.

* When a call to the grid's __Rebind__ method takes place.

* Prior to binding any detail table.

* Custom cases, for example using the __RebindReason__ property as noted below.

>note The event arguments for the __NeedDataSource__ event include the __RebindReason__ property, which indicates the reason the event is occurring.
>


The advantage of using the __NeedDataSource__ event is that you have the flexibility of generating your data source in the code-behind, but you are freed from handling the logic of when and how data binding should take place. It is still your responsibility to properly construct a data source object and assign it to the __RadGrid's DataSource__ property.

>caution  __Important:__ You should never call the __Rebind__ () method in a __NeedDataSource__ event handler.You should never call __DataBind__ () as well when using advanced data binding through __NeedDataSource__ . For Microsoft __GridView__ -like data binding, see[Simple Data-binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/simple-data-binding%}).
>


__RadGrid__ does not fire the __NeedDataSource__ event unless __RadGrid__ is visible (__Visible__=__True__).

In a __NeedDataSource__ event handler, you should prepare the data source (list of objects) for __RadGrid__ and assign it to the grid's __DataSource__ property:

>tabbedCode

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


>end

# See Also

 * [Bindable Property Types]({%slug grid/data-binding/bindable-property-types%})

 * [Telerik RadGrid Data Binding Basics]({%slug grid/data-binding/understanding-data-binding/telerik-radgrid-data-binding-basics%})
