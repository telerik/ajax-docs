---
title: Custom Paging through ObjectDataSource
page_title: Custom Paging through ObjectDataSource | RadGrid for ASP.NET AJAX Documentation
description: Custom Paging through ObjectDataSource
slug: grid/functionality/paging/how-to/custom-paging-through-objectdatasource
tags: custom,paging,through,objectdatasource
published: True
position: 1
---

# Custom Paging through ObjectDataSource



## 

There are many cases where you want Telerik RadGrid to receive its data from an **ObjectDataSource** control. There are certain behaviors of a grid that works with **ObjectDataSource** that are implemented in .NET 2.0 concerning paging - to be more precise, when given the page size, the grid can mine the datasource for ONLY that amount of data.

Telerik RadGrid offers this feature. The code below holds **MS GridView**and Telerik RadGrid instances. Both controls are populated from **ObjectDataSource**and demonstrate the integrated custom paging feature of this **DataSource**control.

````ASPNET
	  <h3>GridView</h3>
	  <asp:GridView ID="GridView1" runat="server" AllowPaging="True" DataSourceID="ObjectDataSource1"
	    PageSize="5">
	  </asp:GridView>
	  <br />
	  <h3>
	    Telerik RadGrid</h3>
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" DataSourceID="ObjectDataSource1"
	    PageSize="5">
	    <PagerStyle Mode="NumericPages" />
	  </telerik:RadGrid>
	  <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" EnablePaging="True" SelectCountMethod="SelectCount"
	    SelectMethod="SelectMethod" TypeName="Samples.AspNet.CS.PagingData" OnSelecting="ObjectDataSource1_Selecting">
	  </asp:ObjectDataSource>
	  <script runat="server">
	    protected void ObjectDataSource1_Selecting(object sender, ObjectDataSourceSelectingEventArgs e)
	    {
	      if (e.ExecutingSelectCount)
	      {
	        System.Diagnostics.Debug.Write("Executing select count...");
	      }
	    }
	  </script>
````



>note Note that you will need to configure your ObjectDataSource control properly to visualize the data inside the MS GridView/Telerik RadGrid.
>

