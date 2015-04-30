---
title: Aligning columns in each level of hierarchical grid
page_title: Aligning columns in each level of hierarchical grid | RadGrid for ASP.NET AJAX Documentation
description: Aligning columns in each level of hierarchical grid
slug: grid/hierarchical-grid-types-and-load-modes/how-to/aligning-columns-in-each-level-of-hierarchical-grid
tags: aligning,columns,in,each,level,of,hierarchical,grid
published: True
position: 6
---

# Aligning columns in each level of hierarchical grid



## 

Sometimes you may need to align the columns in hierarchical grid precisely one below the other (when having vertical grid lines enabled). Thus you will improve the user experience by avoiding the misalignment of these vertical lines when the grid is rendered in the browser.

The task can be fulfilled by setting *HorizontalAlign = Right* for each table in the hierarchy and specifying fixed width in pixels for the grid columns. There is one extra detail you should have in mind - the expand/collapse column in each upper level in the hierarchy has size of 19px which should be deducted from the first column width in the respective level. Therefore, for the first nested level (supposing that the depth is more than 2) you have to subtract 38px from the size of the first column (for the expand/collapse column in the first and second level).

Below is an example configured for the* Vista* grid skin:

````ASP.NET
	<telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server" Skin="Vista"
	    Width="470px" AutoGenerateColumns="False" PageSize="3" AllowSorting="True" AllowMultiRowSelection="False"
	    AllowPaging="True" GridLines="Both">
	    <PagerStyle Mode="NumericPages"></PagerStyle>
	    <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" AllowMultiColumnSorting="True"
	      Width="100%" HorizontalAlign="Right">
	      <DetailTables>
	        <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource2" Width="100%"
	          runat="server" HorizontalAlign="Right">
	          <ParentTableRelation>
	            <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
	          </ParentTableRelation>
	          <Columns>
	            <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
	              DataField="OrderID" UniqueName="OrderID">
	              <HeaderStyle Width="112px" />
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
	              DataField="OrderDate" UniqueName="OrderDate" DataFormatString="{0:d}">
	              <HeaderStyle Width="195px" />
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="Freight" HeaderText="Freight" HeaderButtonType="TextButton"
	              DataField="Freight" UniqueName="Freight">
	              <HeaderStyle Width="150px" />
	            </telerik:GridBoundColumn>
	          </Columns>
	          <DetailTables>
	            <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource3" Width="100%"
	              runat="server" HorizontalAlign="Right">
	              <ParentTableRelation>
	                <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
	              </ParentTableRelation>
	              <Columns>
	                <telerik:GridBoundColumn SortExpression="UnitPrice" HeaderText="Unit Price" HeaderButtonType="TextButton"
	                  DataField="UnitPrice" UniqueName="UnitPrice">
	                  <HeaderStyle Width="120px" />
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn SortExpression="Quantity" HeaderText="Quantity" HeaderButtonType="TextButton"
	                  DataField="Quantity" UniqueName="Quantity">
	                  <HeaderStyle Width="200px" />
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn SortExpression="Discount" HeaderText="Discount" HeaderButtonType="TextButton"
	                  DataField="Discount" UniqueName="Discount">
	                  <HeaderStyle Width="150px" />
	                </telerik:GridBoundColumn>
	              </Columns>
	            </telerik:GridTableView>
	          </DetailTables>
	        </telerik:GridTableView>
	      </DetailTables>
	      <Columns>
	        <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
	          DataField="CustomerID" UniqueName="CustomerID">
	          <HeaderStyle Width="150px" />
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
	          DataField="ContactName" UniqueName="ContactName">
	          <HeaderStyle Width="200px" />
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
	          DataField="CompanyName" UniqueName="CompanyName">
	          <HeaderStyle Width="150px" />
	        </telerik:GridBoundColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
	    runat="server"></asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
	    runat="server">
	    <SelectParameters>
	      <asp:SessionParameter Name="CustomerID" SessionField="CustomerID" Type="string" />
	    </SelectParameters>
	  </asp:SqlDataSource>
	  <asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Order Details] where OrderID = @OrderID"
	    runat="server">
	  <SelectParameters>
	    <asp:SessionParameter Name="OrderID" SessionField="OrderID" Type="Int32" />
	      </SelectParameters>
	  </asp:SqlDataSource>
````



Note that you may need to modify the configuration a bit for other grid skins (depending on their css style settings for tr and td elements).
