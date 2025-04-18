---
title: Overview
page_title: Data Binding Overview - RadComboBox
description: Discover how to bind data to the ComboBox control for dynamic and efficient dropdown list management.
slug: combobox/data-binding/overview
tags: overview
published: True
position: 0
---

# ComboBox Data Binding Overview

The Telerik WebForm ComboBox supports binding to data both on Server and on Client.

Data sources can support both hierarchical and non-hierarchical structures. The `ComboBox`, however, only works with a flat structure - items cannot contain children.

## Client-side Data Binding

- [Binding to RadClientDataSource]({%slug combobox/data-binding/client-side/binding-to-radclientdatasource%})
- [Loading items from Web Service]({%slug combobox/data-binding/client-side/loading-items-from-webservice%})
- [Binding to OData]({%slug combobox/data-binding/client-side/binding-to-odata%})

## Server-side Data Binding

- [Binding to ASP DataSource components]({%slug combobox/data-binding/server-side/binding-to-asp-datasource-components%})
- [Binding to Collections]({%slug combobox/data-binding/server-side/binding-to-collections%})
- [Loading items from XML]({%slug combobox/data-binding/server-side/loading-items-from-xml%})

## Appending Data Bound Items

RadComboBox exposes the `AppendDataBoundItems` property (default `False`). If you bind the RadComboBox using the `DataBind` method, all RadComboBox items are automatically cleared. 

By setting `AppendDataBoundItems` to `True` preserves the items that are already present in RadComboBox. This lets you bind RadComboBox to multiple data sources or use both unbound and bound modes.
