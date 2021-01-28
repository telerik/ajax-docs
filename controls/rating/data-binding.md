---
title: Data Binding
page_title: Data Binding - RadRating
description: Check our Web Forms article about Data Binding.
slug: rating/data-binding
tags: data,binding
published: True
position: 4
---

# Data Binding

**RadRating**'s Items collection can be populated with data from a given data source. You can either specify the data source with the ID of the respective DataSource control via the **DataSourceID** property or pass the data to the **DataSource** property from the code-behind.

To control the data binding you should use the inner property **ItemBinding** which provides the following properties:

* **TextField** - determines which field of the data source will be displayed as text of the item.

* **ToolTipField** - determines which field of the data source will be displayed as tooltip of the item.

* **ValueField** - determines which field of the data source will provide the value associated with the item.

In addition, you can also include the databound items to already declared items by setting **AppendDataBoundItems="true"**.

## Database-friendly Value setting

The **RadRating** control provides **DbValue** property for setting a value in a database-friendly way. By default the **RadRating** accepts values of type decimal. If a value of incompatible type, for example string, is passed to the **Value** property of the control, this will result in exception. In such cases the property **DbValue** can be used, instead of **Value**. It converts the passed value to a type that can be used by the RadRating, so that you can avoid problems caused by setting incorrect type.

The online demo [Data Binding](https://demos.telerik.com/aspnet-ajax/rating/examples/databinding/defaultcs.aspx) contains useful examples, showing the most common scenarios that will be encountered when databinding a RadRating control.
