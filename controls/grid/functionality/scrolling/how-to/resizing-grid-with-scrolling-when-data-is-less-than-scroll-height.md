---
title: Resizing Grid with Scrolling when Data is Less Than Scroll Height
page_title: Resizing Grid with Scrolling when Data is Less Than Scroll Height | UI for ASP.NET AJAX Documentation
description: Resizing Grid with Scrolling when Data is Less Than Scroll Height
slug: grid/functionality/scrolling/how-to/resizing-grid-with-scrolling-when-data-is-less-than-scroll-height
tags: resizing,grid,with,scrolling,when,data,is,less,than,scroll,height
published: True
position: 1
---

# Resizing Grid with Scrolling when Data is Less Than Scroll Height



## 

Sometimes your application may reduce the records that __RadGrid__ displays by some method such as applying filtering criteria or dynamically changing the page size. When this occurs, the grid automatically resizes its content area for the smaller amount of data, except when scrolling is enabled.

To reduce the size of the grid when the data does not fill the content area when scrolling is enabled, use the client-side __GridCreated__ event. In the __GridCreated__ event handler, check whether the table height is less than the value of the __ClientSettings.Scrolling.ScrollHeight__ property, and if so, explicitly modify the scroll area height to match the height of the data items.

The following example illustrates this technique:

````JavaScript
	  <script type="text/javascript">
	      function GridCreated(sender, args) {
	          var scrollArea = sender.GridDataDiv;
	          var dataHeight = sender.get_masterTableView().get_element().clientHeight; if (dataHeight < 350) {
	              scrollArea.style.height = dataHeight + 17 + "px";
	          }
	      }
	  </script>
````



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AllowPaging="true"
	    PageSize="25" AllowFilteringByColumn="true">
	    <MasterTableView AutoGenerateColumns="False" DataSourceID="SqlDataSource1" Width="99%">
	      <Columns>
	        <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" SortExpression="ProductName"
	          UniqueName="ProductName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="QuantityPerUnit" HeaderText="Quantity Per Unit"
	          SortExpression="QuantityPerUnit" UniqueName="QuantityPerUnit">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="UnitPrice" DataType="System.Decimal" HeaderText="Unit Price"
	          SortExpression="UnitPrice" UniqueName="UnitPrice">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="UnitsInStock" DataType="System.Int16" HeaderText="Units In Stock"
	          SortExpression="UnitsInStock" UniqueName="UnitsInStock">
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView>
	    <ClientSettings>
	      <Scrolling AllowScroll="True" UseStaticHeaders="True" ScrollHeight="350px" />
	      <ClientEvents OnGridCreated="GridCreated" />
	    </ClientSettings>
	    <PagerStyle Mode="NextPrevNumericAndAdvanced" />
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            SelectCommand="SELECT [ProductName], [QuantityPerUnit], [UnitPrice], [UnitsInStock] FROM [Products]">
	  </asp:SqlDataSource>
````



[this code library thread](http://www.telerik.com/community/code-library/aspnet-ajax/grid/how-to-set-radgrid-height-client-side-with-javascript.aspx)
