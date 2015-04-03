---
title: Data Binding
page_title: Data Binding | UI for ASP.NET AJAX Documentation
description: Data Binding
slug: rating/data-binding
tags: data,binding
published: True
position: 4
---

# Data Binding



## 

__RadRating__'s Items collection can be populated with data from a given data source. You can either specify the datasource with the ID of the respective DataSource control via the __DataSourceID__ property or pass the data to the __DataSource__ property from the code-behind.

To control the databinding you should use the inner property __ItemBinding__ which provides the following properties:

* __TextField__- determines which field of the datasource will be displayed as text of the item.

* __ToolTipField__- determines which field of the datasource will be displayed as tooltip of the item.

* __ValueField__- determines which field of the datasource will provide the value associated with the item.

In addition, you can also include the databound items to already declared items by setting __AppendDataBoundItems="true"__.

## Database-friendly Value setting

The __RadRating__ control provides __DbValue__ property for setting a value in a database-friendly way. By default the __RadRating__ accepts values of type decimal. If a value of incompatible type, for example string, is passed to the __Value__ property of the control, this will result in exception. In such cases the property __DbValue__ can be used, instead of __Value__. It converts the passed value to a type that can be used by the RadRating, so that you can avoid problems caused by setting incorrect type.



The online demo[Data Binding](http://demos.telerik.com/aspnet-ajax/rating/examples/databinding/defaultcs.aspx) contains useful examples, showing the most common scenarios that will be encountered when databinding a RadRating control.
