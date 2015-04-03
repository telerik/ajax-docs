---
title: Advanced via NeedDataSource
page_title: Advanced via NeedDataSource | UI for ASP.NET AJAX Documentation
description: Advanced via NeedDataSource
slug: dataform/data-binding/advanced-via-needdatasource
tags: advanced,via,needdatasource
published: True
position: 1
---

# Advanced via NeedDataSource



## 

The key to the advanced data binding of a __RadDataForm__ control is handling the __NeedDataSource__ event.__RadDataForm__ fires the __NeedDataSource__ event each time it needs to be bound to a data source. If, at the timeof the event, the __DataSource__ property is not set to a valid data source object, the control will not behave correctly.

This event fires in the following cases:

* Right after __OnLoad__, Telerik RadDataForm checks the viewstate for stored control-related information.If such information is missing (when the page loads for the first time), the __NeedDataSource__ event is fired. This alsomeans that if the __EnableViewState__ property of the controlhas been set to __false__, the controlwill bind __each time the page__ loads (not only the first time).

* Right after __Edit/Update/Delete/Insert__ commands finish execution. You can cancel these operations handling the __ItemCommand__ event and assigning __false__ value to the __Canceled__ property of the __e__ event argument.

* In some other custom cases - for instance, when the __Rebind()__ method is called explicitly.

The event arguments for the __NeedDataSource__ event include the __RebindReason__ property, which indicatesthe reason why the event is occurring. It's also worth mentioning that __RadDataForm__ does not fire the __NeedDataSource__event unless the control is visible(__Visible__=__True__).

>caution You must not use the __DataBind()__ method along with __NeedDataSource__ event handler. Instead, you mayuse the __Rebind()__ method to refresh the control's records, but never for initial binding or changing the __DataSource__ of the __RadDataForm__ . In addition, the __Rebind()__ method should not be called during the __NeedDataSource__ event.
>


>tabbedCode

````C#
	    protected void RadDataForm1_NeedDataSource(object sender, RadDataFormNeedDataSourceEventArgs e)
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
	
	        RadDataForm1.DataSource = myDataTable;
	    }
````



````VB
	
	    Protected Sub RadDataForm1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.RadDataFormNeedDataSourceEventArgs) Handles RadDataForm1.NeedDataSource
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
	        RadDataForm1.DataSource = myDataTable
	    End Sub
	
````


>end

The __NeedDataSource__ event was introduced for binding convenience and its advantage is that you have the flexibility of generating your data source dynamically in the code-behind, but you are freed from handling the logic of when and how data binding should take place.

Alternatively, you can use various data source controls such as SqlDataSource, ObjectDataSource, XmlDataSource, etc. to populate Telerik __RadDataForm__ with data using its __DataSourceID__ property. You may check the links below for further details.

# See Also

 * [Overview]({%slug dataform/overview%})

 * [Declarative Data Source]({%slug dataform/data-binding/declarative-data-source%})

 * [Live Demo](http://demos.telerik.com/aspnet-ajax/DataForm/Data-Binding/Server-side-Binding/DefaultCS.aspx)
