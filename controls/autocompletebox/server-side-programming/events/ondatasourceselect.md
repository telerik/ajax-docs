---
title: OnDataSourceSelect
page_title: OnDataSourceSelect | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: OnDataSourceSelect
slug: autocompletebox/server-side-programming/events/ondatasourceselect
tags: ondatasourceselect
published: True
position: 4
---

# OnDataSourceSelect



## OnDataSourceSelect

The **OnDataSourceSelect** event is raised just before the result items are requested from the underlying DataSource. Provided with the ability to modify the parameters of the request via the SelectCommand,the user can implement the filtering directly on the SQL Server. Optimizing the query in such manner would significantly boost the performance.

The event handler receives two parameters:

1. The instance of the AutoCompleteBox firing the event

1. An event arguments parameter that contains the following properties:

* **DataSource** -returns a reference to the DataSource control.

* **FilterString** -returns the text that is typed in the AutoCompleteBox.

Here is a sample code demonstrating how this event can be used:

````ASPNET
	
<telerik:RadAutoCompleteBox runat="server" ID="RadAutoCompleteBox1"
	OnDataSourceSelect="RadAutoCompleteBox1_DataSourceSelect"
	DataSourceID="SqlDataSource1"
	DataKeyNames="UnitPrice"
	DataValueField="ProductId"
	DataTextField="ProductName">
</telerik:RadAutoCompleteBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
	ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT * FROM [Products]">
</asp:SqlDataSource>
	
````





````C#
	
protected void RadAutoCompleteBox1_DataSourceSelect(object sender, AutoCompleteBoxDataSourceSelectEventArgs e)
{
	SqlDataSource source = (SqlDataSource)e.DataSource;
	RadAutoCompleteBox autoCompleteBox = (RadAutoCompleteBox)sender;

	string likeCondition = string.Format("'{0}' + @filterString + '%'", autoCompleteBox.Filter == RadAutoCompleteFilter.Contains ? "%" : "");
	string countCondition = " TOP 10 ";

	source.SelectCommand = string.Format("SELECT {0}* FROM [Products] WHERE [" + autoCompleteBox.DataTextField + "] LIKE {1}", countCondition, likeCondition);

	source.SelectParameters.Add("filterString", e.FilterString.Replace("%", "[%]").Replace("_", "[_]"));
}
	
````
````VB.NET
	
Protected Sub RadAutoCompleteBox1_DataSourceSelect(sender As Object, e As AutoCompleteBoxDataSourceSelectEventArgs)
	Dim source As SqlDataSource = DirectCast(e.DataSource, SqlDataSource)
	Dim autoCompleteBox As RadAutoCompleteBox = DirectCast(sender, RadAutoCompleteBox)

	Dim likeCondition As String = String.Format("'{0}' + @filterString + '%'", If(autoCompleteBox.Filter = RadAutoCompleteFilter.Contains, "%", ""))
	Dim countCondition As String = " TOP 10 "

	source.SelectCommand = String.Format("SELECT {0}* FROM [Products] WHERE [" + autoCompleteBox.DataTextField + "] LIKE {1}", countCondition, likeCondition)
	source.SelectParameters.Add("filterString", e.FilterString.Replace("%", "[%]").Replace("_", "[_]"))
End Sub
````


