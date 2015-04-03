---
title: Data Binding Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: searchbox/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



__RadSearchBox__ supports binding to various data sources, which include:

* [Array, ArrayList]({%slug searchbox/data-binding/binding-to-array-or-arraylist%})

* [DataTable, DataSet, DataView]({%slug searchbox/data-binding/binding-to-datatable%})

* [ASP DataSource types]({%slug searchbox/data-binding/binding-to-asp-datasource-components%})

* [Web Service]({%slug searchbox/data-binding/web-service-binding%})

* [WCF Service]({%slug searchbox/data-binding/wcf-service-binding%})

* [OData]({%slug searchbox/data-binding/binding-to-odata%})

## Databinding Properties and Methods

The following properties and methods are used when binding RadSearchBox to a data source.

* __DataSource__ property - set to an instance of your data source. This is mandatory when binding RadSearchBox at runtime.

* __DataSourceID__ property - set to the ID of your data source. This is mandatory when binding RadSearchBox declaratively.

* __DataTextField__ property - field name from the data source bound to the RadSearchBox DropDownItem's __Text__ property.

* __DataValueField__ property - field name from the data source bound to the RadSearchBox DropDownItem's __Value__ property.

* __[DataKeyNames]({%slug searchbox/functionality/datakeynames%})__ property - lists the additional fields of the RadSearchBox DropDownItem that are needed from the DataSource.

* __DataContextKeyField__ property - this poperty defines a field from the data source which is used as a context when search operation is performed. It should be used along with the [Search Context]({%slug searchbox/search-context/overview%})

* __DataModelID__ property is used to set the ModelID when binding RadSearchBox to OData DataSource.
