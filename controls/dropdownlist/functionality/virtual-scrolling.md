---
title: Virtual Scrolling
page_title: Virtual Scrolling | RadDropDownList for ASP.NET AJAX Documentation
description: Virtual Scrolling
slug: dropdownlist/functionality/virtual-scrolling
tags: virtual,scrolling
published: True
position: 0
---

# Virtual Scrolling



When working with large data sets, it is convenient to use the RadDropDownList **Virtual Scrolling** functionality. It has similar behavior to as the LOD, but will enables access to items in a **non-sequential manner**.For instance, if you want to scroll to the bottom of the DropDown, you won’t need to load all the items in between.

>tip At the client-side you are able to access the items that are placed in the drop down list visible area.
>


## Virtual Scroll Rendering

To enable Virtual Scrolling for browsing large record sets:

* In order to utilize the Virtual Scrolling the DropDownHeight property must be set.

* Set the EnableVirtualScrolling property to True.

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1" runat="server" DefaultMessage="Select" 
	 DataSourceID="SqlDataSource1" DataTextField="ContactName" DataValueField="CustomerID" 
	 EnableVirtualScrolling="true" DropDownHeight="200px">            
</telerik:RadDropDownList>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	SelectCommand="SELECT [CustomerID], [ContactName] FROM [Customers]"></asp:SqlDataSource>
````

# See Also

 * [Virtual Scrolling demo](http://demos.telerik.com/aspnet-ajax/dropdownlist/examples/functionality/virtualscrolling/defaultcs.aspx)

