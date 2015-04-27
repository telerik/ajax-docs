---
title: Overview
page_title: Templates Overview | RadSearchBox for ASP.NET AJAX Documentation
description: Overview
slug: searchbox/templates/overview
tags: overview
published: True
position: 0
---

# Templates Overview



## Templates

**RadSearchBox** supports [ Server ]({%slug searchbox/templates/server-templates%}) and[Client]({%slug searchbox/templates/client-templates%}) ItemTemplates, as well as DropDown [Header and Footer]({%slug searchbox/templates/header-and-footer-templates%}) Templates.

If the **ItemTemplate** is not specified inside the DropDownSettings tag, the items are rendered using their **Text** property as plain text. If you specify an **ItemTemplate**, however, the respective template is used for rendering.

The following application scenario shows an example of RadSearchBox using ItemTemplate. Here is a sample markup of a possible usage of server templates.

````ASPNET
		  <telerik:RadSearchBox runat="server" ID="RadSearchBox1" 
	            DataSourceID="SqlDataSource1"
	            DataValueField="ProductId"
	            DataTextField="ProductName">
	            <DropDownSettings Height="400" Width="300">
	                <ItemTemplate>
	                    <asp:Label ID="Label2" Text='<%# DataBinder.Eval(Container.DataItem, "ProductId") %>' runat="server" />
	                    <asp:Label ID="Label3" Text='<%# DataBinder.Eval(Container.DataItem, "ProductName") %>' runat="server" />
	                </ItemTemplate>
	            </DropDownSettings>
	        </telerik:RadSearchBox>
	        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
	            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	            SelectCommand="SELECT * FROM [Products]">
	        </asp:SqlDataSource>
````


