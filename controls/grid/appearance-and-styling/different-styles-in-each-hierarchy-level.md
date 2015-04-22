---
title: Different Styles in Each Hierarchy Level
page_title: Different Styles in Each Hierarchy Level | RadGrid for ASP.NET AJAX Documentation
description: Different Styles in Each Hierarchy Level
slug: grid/appearance-and-styling/different-styles-in-each-hierarchy-level
tags: different,styles,in,each,hierarchy,level
published: True
position: 13
---

# Different Styles in Each Hierarchy Level



## 

Sometimes you may search the option to have different appearance settings for the table in hierarchical grid when one of the predefined [ skins ]({%slug grid/appearance-and-styling/skins%}) is applied. Since the skin definitions will override any additional css classes for the nested tables, you will need to put an *!important* keyword to the corresponding inner tables styles in order to take precedence over the grid table rendering. Thus the corresponding appearance setting will dominate over the style specified in the **Styles.css** file of the chosen skin.

Below is a sample approach:

````ASPNET
	  <html xmlns="http://www.w3.org/1999/xhtml">
	  <head runat="server">
	    <title>Styled hierarchical grid</title>
	    <style type="text/css">
	      .InnerHeaderStyle
	      {
	        background: navy !important;
	        font-size: 13px !important;
	        color: white !important; /*add more style definitions here*/
	      }
	      .InnerItemStyle
	      {
	        background: orange !important;
	        color: brown !important; /*add more style definitions here*/
	      }
	      .InnerAlernatingItemStyle
	      {
	        background: white !important;
	        color: brown !important; /*add more style definitions here*/
	      }
	      .MostInnerHeaderStyle
	      {
	        background: brown !important;
	        font-size: 15px !important;
	        color: white !important; /*add more style definitions here*/
	      }
	      .MostInnerItemStyle
	      {
	        background: white !important;
	        color: olive !important; /*add more style definitions here*/
	      }
	      .MostInnerAlernatingItemStyle
	      {
	        background: olive !important;
	        color: white !important; /*add more style definitions here*/
	      }
	    </style>
	  </head>
	  <body style="margin: 0px;">
	    <form id="form1" runat="server">
	    <div>
	      <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server" Skin="WebBlue"
	        Width="95%" AutoGenerateColumns="False" PageSize="3" AllowSorting="True" AllowPaging="True"
	        GridLines="None">
	        <PagerStyle Mode="NumericPages"></PagerStyle>
	        <MasterTableView DataSourceID="SqlDataSource1" DataKeyNames="CustomerID" AllowMultiColumnSorting="True"
	          Width="100%">
	          <DetailTables>
	            <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource2" Width="100%"
	              runat="server">
	              <ParentTableRelation>
	                <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
	              </ParentTableRelation>
	              <HeaderStyle CssClass="InnerHeaderStyle" />
	              <ItemStyle CssClass="InnerItemStyle" />
	              <AlternatingItemStyle CssClass="InnerAlernatingItemStyle" />
	              <DetailTables>
	                <telerik:GridTableView DataKeyNames="OrderID" DataSourceID="SqlDataSource3" Width="100%"
	                  runat="server">
	                  <ParentTableRelation>
	                    <telerik:GridRelationFields DetailKeyField="OrderID" MasterKeyField="OrderID" />
	                  </ParentTableRelation>
	                  <HeaderStyle CssClass="MostInnerHeaderStyle" />
	                  <ItemStyle CssClass="MostInnerItemStyle" />
	                  <AlternatingItemStyle CssClass="MostInnerAlernatingItemStyle" />
	                  <Columns>
	                    <telerik:GridBoundColumn SortExpression="UnitPrice" HeaderText="Unit Price" HeaderButtonType="TextButton"
	                      DataField="UnitPrice" UniqueName="UnitPrice">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridBoundColumn SortExpression="Quantity" HeaderText="Quantity" HeaderButtonType="TextButton"
	                      DataField="Quantity" UniqueName="Quantity">
	                    </telerik:GridBoundColumn>
	                    <telerik:GridBoundColumn SortExpression="Discount" HeaderText="Discount" HeaderButtonType="TextButton"
	                      DataField="Discount" UniqueName="Discount">
	                    </telerik:GridBoundColumn>
	                  </Columns>
	                </telerik:GridTableView>
	              </DetailTables>
	              <Columns>
	                <telerik:GridBoundColumn SortExpression="OrderID" HeaderText="OrderID" HeaderButtonType="TextButton"
	                  DataField="OrderID" UniqueName="OrderID">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn SortExpression="OrderDate" HeaderText="Date Ordered" HeaderButtonType="TextButton"
	                  DataField="OrderDate" UniqueName="OrderDate">
	                </telerik:GridBoundColumn>
	                <telerik:GridBoundColumn SortExpression="EmployeeID" HeaderText="EmployeeID" HeaderButtonType="TextButton"
	                  DataField="EmployeeID" UniqueName="EmployeeID">
	                </telerik:GridBoundColumn>
	              </Columns>
	            </telerik:GridTableView>
	          </DetailTables>
	          <Columns>
	            <telerik:GridBoundColumn SortExpression="CustomerID" HeaderText="CustomerID" HeaderButtonType="TextButton"
	              DataField="CustomerID" UniqueName="CustomerID">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="ContactName" HeaderText="Contact Name" HeaderButtonType="TextButton"
	              DataField="ContactName" UniqueName="ContactName">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn SortExpression="CompanyName" HeaderText="Company" HeaderButtonType="TextButton"
	              DataField="CompanyName" UniqueName="CompanyName">
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
	                <asp:Parameter Name="CustomerID" SessionField="CustomerID" Type="string" />
	            </SelectParameters>
	        </asp:SqlDataSource>
	        <asp:SqlDataSource ID="SqlDataSource3" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM [Order Details] where OrderID = @OrderID"
	            runat="server">
	            <SelectParameters>
	                <asp:Parameter Name="OrderID" SessionField="OrderID" Type="Int32" />
	            </SelectParameters>
	        </asp:SqlDataSource>
	    </div>
	    </form>
	  </body>
	  </html>
````


