---
title: Overview
page_title: Server-side Programming Overview | RadDataPager for ASP.NET AJAX Documentation
description: Overview
slug: datapager/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



Below are listed the most important properties and events of **RadDataPager** control.

## Properties


|  **Property**  |  **Description**  |
| ------ | ------ |
| **PagedControlID** |Gets or sets the ID of the control that implements one of the following interfaces - **IPageableItemContainer or IRadPageableItemContainer** . This is the control that will be paged by RadDataPager control. If RadDataPager is placed in Controls collection of IPageableItemContainer **/** IRadPageableItemContainer setting this property is optional. In case PagedControlID is not set RadDataPager will attempt to find its container automatically.|
| **PageSize** |Gets or sets the number of items and rows to display on each page.|
| **StartRowIndex** |Gets the index of the first record that is displayed on a page of data.|
| **TotalRowCount** |Gets the total number of records that are displayed in the underlying data source.|
| **MaximumRows** |Gets the maximum number of records that are displayed for each page of data.|

## Events and methods


|  **Event**  |  **Description**  |
| ------ | ------ |
| **FieldCreating** |Fired before a field is created. You can handle the event to load custom pager field on post back and to replace or modify the instance of the field that should be created and added into the collection of field in the corresponding RadDataPager.|
| **FieldCreated** |This event is fired after a pager field is created.|
| **Command** |Fired when any button is clicked or containing control value is changed in RadDataPager control.|


|  **Method**  |  **Description**  |
| ------ | ------ |
| **FireCommand** |Can be used for manually triggering commands in code rather than clicking the pager buttons, etc.|
