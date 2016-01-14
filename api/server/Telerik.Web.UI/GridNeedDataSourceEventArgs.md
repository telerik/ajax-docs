---
title: Telerik.Web.UI.GridNeedDataSourceEventArgs
page_title: Telerik.Web.UI.GridNeedDataSourceEventArgs
description: Telerik.Web.UI.GridNeedDataSourceEventArgs
---

# Telerik.Web.UI.GridNeedDataSourceEventArgs

Event arguments passed when Telerik.Web.UI.RadGrid calls its E:Telerik.Web.UI.RadGrid.NeedDataSource event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridNeedDataSourceEventArgs

## Properties

###  IsFromDetailTable `Boolean`

Gets a value indicating if the

###  RebindReason `GridRebindReason`

Gets a value specifying why the  event was fired.

###  RowsCount `Int32`

Gets a value specifying the number of rows that should be extracted from the data source when virtualization and custom paging are enabled.

###  StartRowIndex `Int32`

Gets a value specifying the index of the first row in the data source that should be extracted when virtualization and custom paging are enabled.

