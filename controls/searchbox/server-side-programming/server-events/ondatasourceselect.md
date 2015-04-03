---
title: OnDataSourceSelect
page_title: OnDataSourceSelect | UI for ASP.NET AJAX Documentation
description: OnDataSourceSelect
slug: searchbox/server-side-programming/server-events/ondatasourceselect
tags: ondatasourceselect
published: True
position: 3
---

# OnDataSourceSelect



## OnDataSourceSelect

The __OnDataSourceSelect__ event is raised just before the result items are requested from theunderlying DataSource, providing the ability to modify the parameters of the request. For instance with SqlDataSourcethe user can modify the SelectCommand and implement the filtering directly on the SQL Server.

The event handler receives two parameters:

1. The instance of the SearchBox firing the event

1. An event arguments parameter that contains the following properties:

* __DataSource__ -returns a reference to the DataSource control.

* __FilterString__ -returns the text that is typed in the SearchBox.

* __SelectedContextItem__ -returns the selected context item in the SearchContext.

* __UserContext__ -returns the userContext object of type IDictionary that is passed through the [OnClientDataRequesting]({%slug searchbox/client-side-programming/events/onclientdatarequesting%}) event.

Here is a sample code demonstrating how this event can be used:

````ASPNET
	
	        <telerik:RadSearchBox runat="server" ID="RadSearchBox1"
	                OnDataSourceSelect="RadSearchBox1_DataSourceSelect"
	                DataSourceID="SqlDataSource1"
	                DataKeyNames="UnitPrice"
	                DataValueField="ProductID"
	                DataTextField="ProductName">
	                <DropDownSettings Height="400" Width="300" />
	            </telerik:RadSearchBox>
	
	            <asp:SqlDataSource ID="SqlDataSource1" runat="server"
	                ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	                SelectCommand="SELECT * FROM [Products]">
	            </asp:SqlDataSource>
	
````



>tabbedCode

````C#
	
	    protected void RadSearchBox1_DataSourceSelect(object sender, SearchBoxDataSourceSelectEventArgs e)
	    {
	        SqlDataSource source = (SqlDataSource)e.DataSource;
	        RadSearchBox searchBox = (RadSearchBox)sender;
	
	        string likeCondition = string.Format("'{0}' + @filterString + '%'", searchBox.Filter == SearchBoxFilter.Contains ? "%" : "");
	        string countCondition = e.ShowAllResults ? " " : " TOP 100 ";
	
	        source.SelectCommand = string.Format("SELECT {0}* FROM [Products] WHERE [" + searchBox.DataTextField + "] LIKE {1}", countCondition, likeCondition);
	
	        source.SelectParameters.Add("filterString", e.FilterString.Replace("%", "[%]").Replace("_", "[_]"));
	    }
	
````



````VB.NET
	
	    Protected Sub RadSearchBox1_DataSourceSelect(sender As Object, e As SearchBoxDataSourceSelectEventArgs)
	        Dim source As SqlDataSource = DirectCast(e.DataSource, SqlDataSource)
	        Dim searchBox As RadSearchBox = DirectCast(sender, RadSearchBox)
	
	        Dim likeCondition As String = String.Format("'{0}' + @filterString + '%'", If(searchBox.Filter = SearchBoxFilter.Contains, "%", ""))
	        Dim countCondition As String = If(e.ShowAllResults, " ", " TOP 100 ")
	
	        source.SelectCommand = String.Format("SELECT {0}* FROM [Products] WHERE [" + searchBox.DataTextField + "] LIKE {1}", countCondition, likeCondition)
	
	        source.SelectParameters.Add("filterString", e.FilterString.Replace("%", "[%]").Replace("_", "[_]"))
	    End Sub
	   
````


>end
