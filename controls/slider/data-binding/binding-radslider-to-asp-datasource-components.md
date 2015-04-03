---
title: Binding RadSlider to ASP DataSource components
page_title: Binding RadSlider to ASP DataSource components | UI for ASP.NET AJAX Documentation
description: Binding RadSlider to ASP DataSource components
slug: slider/data-binding/binding-radslider-to-asp-datasource-components
tags: binding,radslider,to,asp,datasource,components
published: True
position: 0
---

# Binding RadSlider to ASP DataSource components



## 

__RadSlider__ can now be databound to a datasource. When you databind it, it automatically creates items and populates the __Items__ collection. That is why to be able to databind RadSlider you should explicitly set __ItemType="Item"__

To control the databinding you should use the new __ItemBinding__ inner property which provides the following properties:

* __TextField__ - determines which field of the datasource will be displayed as text of the item

* __ToolTipField__ - determines which field of the datasource will be displayed as tooltip of the item

* __ValueField__ - determines which field of the datasource will provide the value associated with the item

In addition, you can also add the databound items to already declared items by setting __AppendDataBoundItems="true"__.

Below is demonstrated how a data source for a RadSlider can be configured. You can also refer to the[Databinding online demo](http://demos.telerik.com/aspnet-ajax/slider/examples/databinding/defaultcs.aspx), which contains a more detailed example of this feature.

````ASPNET
		<telerik:RadSlider ID="slider" runat="server" DataSourceID="SqlDataSource1" Width="800"
	       ItemType="Item" Height="100" AutoPostBack="true">
	       <ItemBinding TextField="Name" ToolTipField="Description" ValueField="ID" />
	    </telerik:RadSlider>
	
		<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	    SelectCommand="SELECT * FROM Countries INNER JOIN CountryDetails ON Countries.Name = CountryDetails.CountryName ORDER BY Name ASC"
	    runat="server"></asp:SqlDataSource>
````



## Database-friendly Value setting

The __RadSlider__ control provides __DbValue__ property for setting a value in a database-friendly way. By default the __RadSlider__ accepts values of type decimal. If a value of incompatible type, for example string, is passed to the __Value__ property of the control, this will result in exception. In such cases the property __DbValue__ can be used, instead of __Value__. It converts the passed value to a type that can be used by the RadSlider, so that you can avoid problems due to setting incorrect type. The online demo[Database-friendly Value setting](http://demos.telerik.com/aspnet-ajax/slider/examples/dbvalue/defaultcs.aspx)provides an example of the setup that should be used in such scenario.
