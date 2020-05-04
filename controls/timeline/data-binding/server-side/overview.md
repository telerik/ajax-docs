---
title: Overview
page_title: Data Binding Overview | RadTimeline for ASP.NET AJAX Documentation
description: Overview
slug: timeline/data-binding/server-side/overview
tags: overview
published: True
position: 0
---

# Server-side Data Binding Overview

**RadTimeline** fully supports binding to various data sources:

* [Array, IEnumerable]({%slug timeline/data-binding/server-side/binding-to-array-or-ienumerable%})

* [DataTable, DataSet, DataView]({%slug timeline/data-binding/server-side/binding-to-datatable,-dataset,-or-dataview%})

* [ASP 2.0 DataSource types]({%slug timeline/data-binding/server-side/binding-to-asp-datasource-components%})

* [OData]({%slug timeline/data-binding/server-side/binding-to-odata%})

>note Data sources can support both hierarchical and non-hierarchical structures. **RadTimeline**, however, only works with a flat structure - items cannot contain children.
>

## Databinding Properties and Methods

The following properties and methods are used when binding RadTimeline to a data source:

* **DataSource** property - set to an instance of your data source. This is mandatory when binding RadTimeline at runtime.

* **DataSourceID** property - set to the ID of your data source. This is mandatory when binding RadTimeline declaratively.

* **DataMember** property - if the data source is a **DataSet** and **DataMember** is set, then RadTimeline is bound to the **DataTable** with the respective name in the **DataSet**. If **DataMember** is not set, RadTimeline is bound to the first **DataTable** in the **DataSet**.

* **DataDateField** property - field name from the data source to bind to the **Date** property of the `TimelineItem`.

* **DataTitleField** property - field name from the data source to bind to the **Title** property of the `TimelineItem`.

* **DataSubtitleField** property - field name from the data source to bind to the **Subtitle** property of the `TimelineItem`.

* **DataDescriptionField** property - field name from the data source to bind to the **Description** property of the `TimelineItem`.

* **DataImagesField** property - field name from the data source to bind to the **Images** collection.

* **DataActionsField** property - field name from the data source to bind to the **Actions** collection.

* **DataKeyNames** property - lists the additional fields of the DataSource that will be mapped to each event item.

* **DataBind** method - must be called after the aforementioned properties are set, when binding at runtime. This method is mandatory for binding at runtime.

>note If you need to map additional fields from the Data Source to properties of RadTimeline item, the **ItemDataBound** event should be used. See [Binding To ASP DataSource Components]({%slug timeline/data-binding/server-side/binding-to-asp-datasource-components%}), for an example.
>


# See Also

 * [ItemDataBound]({%slug timeline/server-side-programming/events/itemdatabound%})
 
 * [Timeline Server-side Overview]({%slug timeline/server-side-programming/overview%})

 * [Timeline Overview]({%slug timeline/overview%})

