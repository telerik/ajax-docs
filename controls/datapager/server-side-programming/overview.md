---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: datapager/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



Below are listed the most important properties and events of __RadDataPager__ control.

## Properties


|  __Property__  |  __Description__  |
| ------ | ------ |
| __PagedControlID__ |Gets or sets the ID of the control that implements one of the following interfaces - __IPageableItemContainer or IRadPageableItemContainer__ . This is the control that will be paged by RadDataPager control. If RadDataPager is placed in Controls collection of IPageableItemContainer __/__ IRadPageableItemContainer setting this property is optional. In case PagedControlID is not set RadDataPager will attempt to find its container automatically.|
| __PageSize__ |Gets or sets the number of items and rows to display on each page.|
| __StartRowIndex__ |Gets the index of the first record that is displayed on a page of data.|
| __TotalRowCount__ |Gets the total number of records that are displayed in the underlying data source.|
| __MaximumRows__ |Gets the maximum number of records that are displayed for each page of data.|

## Events and methods


|  __Event__  |  __Description__  |
| ------ | ------ |
| __FieldCreating__ |Fired before a field is created. You can handle the event to load custom pager field on post back and to replace or modify the instance of the field that should be created and added into the collection of field in the corresponding RadDataPager.|
| __FieldCreated__ |This event is fired after a pager field is created.|
| __Command__ |Fired when any button is clicked or containing control value is changed in RadDataPager control.|


|  __Method__  |  __Description__  |
| ------ | ------ |
| __FireCommand__ |Can be used for manually triggering commands in code rather than clicking the pager buttons, etc.|
