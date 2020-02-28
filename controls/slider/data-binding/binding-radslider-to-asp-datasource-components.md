---
title: Binding RadSlider to ASP DataSource components
page_title: Binding RadSlider to ASP DataSource components | RadSlider for ASP.NET AJAX Documentation
description: Binding RadSlider to ASP DataSource components
slug: slider/data-binding/binding-radslider-to-asp-datasource-components
tags: binding,radslider,to,asp,datasource,components
published: True
position: 0
---

# Binding RadSlider to ASP DataSource components

**RadSlider** can now be data bound to a data source. When you data bind it, it automatically creates items and populates the **Items** collection. That is why to be able to data bind RadSlider you should explicitly set **ItemType="Item"**

To control the data binding you should use the new **ItemBinding** inner property which provides the following properties:

* **TextField** - determines which field of the data source will be displayed as text of the item

* **ToolTipField** - determines which field of the data source will be displayed as tooltip of the item

* **ValueField** - determines which field of the data source will provide the value associated with the item

In addition, you can also add the data bound items to already declared items by setting **AppendDataBoundItems="true"**.

Below is demonstrated how a data source for a RadSlider can be configured. You can also refer to the [Databinding online demo](https://demos.telerik.com/aspnet-ajax/slider/examples/databinding/defaultcs.aspx), which contains a more detailed example of this feature.

````ASP.NET
<telerik:RadSlider RenderMode="Lightweight" ID="slider" runat="server" DataSourceID="SqlDataSource1" Width="800"
   ItemType="Item" Height="100" AutoPostBack="true">
   <ItemBinding TextField="Name" ToolTipField="Description" ValueField="ID" />
</telerik:RadSlider>

<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
SelectCommand="SELECT * FROM Countries INNER JOIN CountryDetails ON Countries.Name = CountryDetails.CountryName ORDER BY Name ASC"
runat="server"></asp:SqlDataSource>
````

## Database-friendly Value setting

The **RadSlider** control provides **DbValue** property for setting a value in a database-friendly way. By default the **RadSlider** accepts values of type decimal. If a value of incompatible type, for example string, is passed to the **Value** property of the control, this will result in exception. In such cases the property **DbValue** can be used, instead of **Value**. It converts the passed value to a type that can be used by the RadSlider, so that you can avoid problems due to setting incorrect type. The online demo [Database-friendly Value setting](https://demos.telerik.com/aspnet-ajax/slider/examples/dbvalue/defaultcs.aspx) provides an example of the setup that should be used in such scenario.
