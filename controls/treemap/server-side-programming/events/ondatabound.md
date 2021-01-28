---
title: OnDataBound
page_title: OnDataBound - RadTreeMap
description: Check our Web Forms article about OnDataBound.
slug: treemap/server-side-programming/events/ondatabound
tags: ondatabound
published: True
position: 2
---

# OnDataBound



The following article demonstrates the usage of the **DataBound** server-side event of the **RadTreeMap**.

## 

The **DataBound** server-side event of the **RadTreeMap** is fired once the control is fully data-bound. This event only occurs if the items are loaded from a data source (the **DataSource** or **DataSourceID** property is set).

The **DataBound** event handler receives two arguments:

1. The **RadTreeMap** that is loading items. This argument is of type object, but can be cast to the **RadTreeMap** type.

1. An EventArgs object.
