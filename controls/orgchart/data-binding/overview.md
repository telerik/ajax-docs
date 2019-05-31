---
title: Overview
page_title: Data Binding Overview | RadOrgChart for ASP.NET AJAX Documentation
description: Overview
slug: orgchart/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



## 

RadOrgChart is a databound control that currently supports various types of data source:

* Binding to a Datatable, DataSet and DataView

* DataSource types including:

	* SqlDataSource

	* XmlDataSource

	* LinqDataSource

	* EntityDataSource

* etc.

* Any object that implements the IEnumerable interface.

>note It is important to note that the control does not represent a random tree of objects but rather strictly and only an organization of people. That means that only a single root node is allowed and all child nodes should have exactly one parent node.
>


The fastest and most simple way to bind the chart to a data source, is to simply set a DataSource (self-referenced data) and to specify **DataFieldID**, **DataFieldParentID** and all the details-fields such as **DataTextField**.

1. **DataFieldID** - The name of the field in the data source that acts as a key, uniquely identifying rows.

2. **DataFieldParentID** - The name of the field in the data source that identifies the key field value of the parent node. The value of this field for the root should be null (table- or object-based data source) or the default value of the corresponding value type used (object-based data source).

````ASPNET
<telerik:RadOrgChart RenderMode="Lightweight" runat="server" ID="RadOrgChart1" DataSource="RadOrgChartDataSource1"
	DataFieldID="ID" DataFieldParentId="ParentID" DataTextField="Text">
</telerik:RadOrgChart>
	
````



## DataBinding Properties and Methods

* **DataSource** - Set to an instance of your data source. This is mandatory when binding the RadOrgChart at runtime.

* **DataSourceID** - Set to the ID of your data source. This is mandatory when binding the RadOrgChart declaratively.

* **DataFieldID** - This is the field name from the data source used to uniquely identify each row. This field is required when binding to hierarchical data.

* **DataFieldParentID** - This is the field name from the data source used to identify the row for the parent node. This field is required.

* **DataTextField** - This is the field name from the data source that populates each item's Text property during binding.

* **DataImageUrlField** - This is the field name from the data source that populates each item's ImageUrl property during binding. The image must be 48 by 48 pixels or smaller. For bigger images see the sample below.

* **DataImageAltTextField** - This is the field name from the data source that populates each item's ImageAltText property during binding.

* **DataBind** - Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime.

If the images you put in the org chart are bigger than 48x48px, you must add a CSS rule that sets the size of their corresponding `<img />` element so that it fits its parent element where these dimenions are applied. For example:

````CSS
.rocImageWrap img
{
	width: 48px;
	height: 48px;
}
```` 
