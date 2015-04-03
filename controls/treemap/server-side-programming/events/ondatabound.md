---
title: OnDataBound
page_title: OnDataBound | UI for ASP.NET AJAX Documentation
description: OnDataBound
slug: treemap/server-side-programming/events/ondatabound
tags: ondatabound
published: True
position: 2
---

# OnDataBound



The following article demonstrates the usage of the __DataBound__ server-side event of the __RadTreeMap__.

## 

The __DataBound__ server-side event of the __RadTreeMap__ is fired once the control is fully data-bound. This event only occurs if the items are loaded from a data source (the __DataSource__or __DataSourceID__ property is set).

The __DataBound__ event handler receives two arguments:

1. The __RadTreeMap__ that is loading items. This argument is of type object, but can be cast to the __RadTreeMap__ type.

1. An EventArgs object.
