---
title: NET 3.5 Data Source Controls
page_title: NET 3.5 Data Source Controls | UI for ASP.NET AJAX Documentation
description: NET 3.5 Data Source Controls
slug: listview/data-binding/server-side/net-3.5-data-source-controls
tags: net,3.5,data,source,controls
published: True
position: 2
---

# NET 3.5 Data Source Controls



RadListView can be bound to all ASP 3.5 DataSource control types:

* __LinqDataSource__

* __EntityDataSource__

All you need to do is set the DataSourceID property of the ListView to the ID of the Data Source control. Then you can use ASP.NET binding expressions (Eval or Bind) for the fields that will be visualized in the listview's body.

Refer to the [respective online demo](http://demos.telerik.com/aspnet-ajax/listview/examples/databinding/net35datasourcecontrols/defaultcs.aspx) of the product for details and the code snippets in the next paragraph:



````C#
	    <asp:ScriptManager ID="ScriptManager1" runat="server" />
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <h3>
	        LinqDataSource</h3>
	    <telerik:RadListView ID="RadListView1" DataSourceID="LinqDataSource1" runat="server"
	        ItemPlaceholderID="ProductItemContainer" DataKeyNames="CategoryID">
	        <LayoutTemplate>
	            <fieldset>
	                <legend>Products</legend>
	                <asp:PlaceHolder ID="ProductItemContainer" runat="server" />
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <fieldset style="float: left; width: 200px;">
	                <legend>Category name:
	                    <%# Eval("CategoryName") %></legend>
	                <table cellpadding="0" cellspacing="0">
	                    <tr>
	                        <td style="width: 75%">
	                            <table cellpadding="0" cellspacing="0">
	                                <tr>
	                                    <td>
	                                        <%# Eval("Description")%>
	                                    </td>
	                                </tr>
	                            </table>
	                        </td>
	                        <td align="right" style="width: 25%">
	                            <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server" AlternateText="Category Photo"
	                                Style="margin-left: 10px" ToolTip="Category Photo" Width="90px" Height="110px"
	                                ResizeMode="Fit" DataValue='<%# ((System.Data.Linq.Binary) Eval("Picture")).ToArray() %>' />
	                        </td>
	                    </tr>
	                </table>
	            </fieldset>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <h3>
	        EntityDataSource</h3>
	    <telerik:RadListView ID="RadListView2" runat="server" DataSourceID="EntityDataSource1"
	        ItemPlaceholderID="ProductsHolder">
	        <LayoutTemplate>
	            <fieldset style="width: 700px;">
	                <legend>Products</legend>
	                <asp:Panel ID="ProductsHolder" runat="server" />
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <div style="float: left">
	                <table cellpadding="0" cellspacing="0" style="width: 230px">
	                    <tr>
	                        <td style="width: 20%;">
	                            Name:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("ProductName") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Quantity:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("QuantityPerUnit") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Price:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Units:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("UnitsInStock") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Available:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# ((bool)DataBinder.Eval(Container.DataItem,"Discontinued") == false ? "Yes" : "No") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <hr />
	                        </td>
	                        <td>
	                            <hr />
	                        </td>
	                    </tr>
	                </table>
	            </div>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <br />
	    <asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="LinqToSql.NorthwindDataContext"
	        TableName="Categories" />
	    <asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities"
	        DefaultContainerName="NorthwindEntities" EntitySetName="Products" Where="it.ProductID > 0 AND it.ProductID < 7" />
````
````VB.NET
	    <asp:ScriptManager ID="ScriptManager1" runat="server" />
	    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" />
	    <h3>
	        LinqDataSource</h3>
	    <telerik:RadListView ID="RadListView1" DataSourceID="LinqDataSource1" runat="server"
	        ItemPlaceholderID="ProductItemContainer" DataKeyNames="CategoryID">
	        <LayoutTemplate>
	            <fieldset>
	                <legend>Products</legend>
	                <asp:PlaceHolder ID="ProductItemContainer" runat="server" />
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <fieldset style="float: left; width: 200px;">
	                <legend>Category name:
	                    <%# Eval("CategoryName") %></legend>
	                <table cellpadding="0" cellspacing="0">
	                    <tr>
	                        <td style="width: 75%">
	                            <table cellpadding="0" cellspacing="0">
	                                <tr>
	                                    <td>
	                                        <%# Eval("Description")%>
	                                    </td>
	                                </tr>
	                            </table>
	                        </td>
	                        <td align="right" style="width: 25%">
	                            <telerik:RadBinaryImage ID="RadBinaryImage1" runat="server" AlternateText="Category Photo"
	                                Style="margin-left: 10px" ToolTip="Category Photo" Width="90px" Height="110px"
	                                ResizeMode="Fit" DataValue='<%# CType(Eval("Picture"), System.Data.Linq.Binary).ToArray() %>' />
	                        </td>
	                    </tr>
	                </table>
	            </fieldset>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <h3>
	        EntityDataSource</h3>
	    <telerik:RadListView ID="RadListView2" runat="server" DataSourceID="EntityDataSource1"
	        ItemPlaceholderID="ProductsHolder">
	        <LayoutTemplate>
	            <fieldset style="width: 700px;">
	                <legend>Products</legend>
	                <asp:Panel ID="ProductsHolder" runat="server" />
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <div style="float: left">
	                <table cellpadding="0" cellspacing="0" style="width: 230px">
	                    <tr>
	                        <td style="width: 20%;">
	                            Name:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("ProductName") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Quantity:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("QuantityPerUnit") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Price:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Units:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%# Eval("UnitsInStock") %>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            Available:
	                        </td>
	                        <td style="width: 80%; padding-left: 5px;">
	                            <%#IIf(Eval("Discontinued") = False, "Yes", "No")%>
	                        </td>
	                    </tr>
	                    <tr>
	                        <td>
	                            <hr />
	                        </td>
	                        <td>
	                            <hr />
	                        </td>
	                    </tr>
	                </table>
	            </div>
	        </ItemTemplate>
	    </telerik:RadListView>
	    <br />
	    <asp:LinqDataSource ID="LinqDataSource1" runat="server" ContextTypeName="LinqToSql.NorthwindDataContext"
	        TableName="Categories" />
	    <asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities"
	        DefaultContainerName="NorthwindEntities" EntitySetName="Products" Where="it.ProductID > 0 AND it.ProductID < 7" />
````


## Additional resources

The following MSDN articles describe how to configure ASP.NET 3.5 __DataSource__ controls:

* __LinqDataSource:__[http://msdn2.microsoft.com/en-us/library/bb547113.aspx](http://msdn2.microsoft.com/en-us/library/bb547113.aspx)

* __EntityDataSource:__[http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.entitydatasource.aspx](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.entitydatasource.aspx)
