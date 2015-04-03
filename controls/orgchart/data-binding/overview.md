---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
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

>note It is important to note that the control does not represent a random tree of objects but rather strictly and only an organization of people.
>


The fastest and most simple way to bind the chart to a data source, is to simply set a DataSource (self-referenced data) and to specify __DataFieldID__, __DataFieldParentID__ and all the details-fields such as __DataTextField__.

1. __DataFieldID__ - The name of the field in the data source that acts as a key, uniquely identifying rows.

1. __DataFieldParentID__ - The name of the field in the data source that identifies the key field value of the parent node. The value of this field for the root should be null (table- or object-based data source) or the default value of the corresponding value type used (object-based data source).

````ASPNET
	<telerik:RadOrgChart runat="server" ID="RadOrgChart1" DataSource="RadOrgChartDataSource1"
		DataFieldID="ID" DataFieldParentId="ParentID" DataTextField="Text">
	</telerik:RadOrgChart>
	
````



## DataBinding Properties and Methods

* __DataSource__ - Set to an instance of your data source. This is mandatory when binding the RadOrgChart at runtime

* __DataSourceID__ - Set to the ID of your data source. This is mandatory when binding the RadOrgChart declaratively

* __DataFieldID__ - This is the field name from the data source used to uniquely identify each row. This field is required when binding to hierarchical data

* __DataFieldParentID__ - This is the field name from the data source used to identify the row for the parent node. This field is required.

* __DataTextField__ - This is the field name from the data source that populates each item's Text property during binding

* __DataImageUrlField__ - This is the field name from the data source that populates each item's ImageUrl property during binding

* __DataImageAltTextField__ - This is the field name from the data source that populates each item's ImageAltText property during binding

* __DataBind__ - Call this method after you have set the aforementioned properties when binding at runtime. This method is mandatory for binding at runtime
