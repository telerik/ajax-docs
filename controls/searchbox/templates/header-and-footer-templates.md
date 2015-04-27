---
title: Header and Footer Templates
page_title: Header and Footer Templates | RadSearchBox for ASP.NET AJAX Documentation
description: Header and Footer Templates
slug: searchbox/templates/header-and-footer-templates
tags: header,and,footer,templates
published: True
position: 3
---

# Header and Footer Templates



## Header and Footer Templates

One can set Header and Footer Templates to the RadSearchBox as shown in the sample code below:

````ASPNET
			<telerik:RadSearchBox runat="server" ID="RadSearchBox1" 
	            DataSourceID="SqlDataSource1"
	            DataValueField="ProductId"
	            DataTextField="ProductName">
	            <DropDownSettings Height="400" Width="300">
	                <HeaderTemplate>
	                    This is the <asp:Label ID="Label2" Text="Header" runat="server" />
	                </HeaderTemplate>
	                <FooterTemplate>
	                    This is the <asp:Label ID="Label3" Text="Footer" runat="server" />
	                </FooterTemplate>
	            </DropDownSettings>
	        </telerik:RadSearchBox>
	        
	        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
	            ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	            SelectCommand="SELECT * FROM [Products]">
	        </asp:SqlDataSource>
````


