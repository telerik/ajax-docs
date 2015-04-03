---
title: DataPager Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: datapager/overview
tags: overview
published: True
position: 0
---

# DataPager Overview



__RadDataPager__ can be used to display paging navigation controls for other data-bound controls that implement the __IPageableItemContainer__ or __IRadPageableItemContainer__ interface (like the RadListView and MS ListView). The RadDataPager control lets users view large sets of data in small chunks for faster loading and easier navigation. It also provides a set of events, helper methods and properties for custom intervention.![RadDataPager](images/DataPager_Overview.png)

You can easily add the RadDataPager control to a Web Form within Visual Studio. The paging interface appears wherever you place the RadDataPager control on the page. You may place it before or after the RadListView control, as well as within its LayoutTemplate element.

The RadDataPager control has the following properties for using it in its default state:

* __PagedControlID__ is the ID of the control that implements one of the following interfaces - __IPageableItemContainer__ or __IRadPageableItemContainer__. This is the control that will be paged by RadDataPager control. If RadDataPager is placed in Controls collection of IPageableItemContainer / IRadPageableItemContainer setting this property is optional. In case PagedControlID is not set, RadDataPager will attempt to find its container automatically.

* __PageSize__ is the number of items and rows to display on each page.

* __StartRowIndex__ gets the index of the first record that is displayed on a page of data.

* __TotalRowCount__ gets the total number of records that are displayed in the underlying data source.

* __MaximumRows__ gets the maximum number of records that are displayed for each page of data.

## RadDataPager field types

The RadDataPager control has a [number of fields]({%slug datapager/elements-and-templates/elements%}) you can use, including [template]({%slug datapager/elements-and-templates/template%}) support for designing your own pager. The following table lists the different RadDataPager fields:


| Pager field type | Description |
| ------ | ------ |
| __RadDataPagerButtonField__ |This pager field contains buttons with numeric pages or buttons for navigation to Next/Previous/First/Last page.|
| __RadDataPagerPageSizeField__ |This pager field contains RadComboBox for changing the current page size.|
| __RadDataPagerNumericPageSizeField__ |This pager field contains RadNumericTextBox and a button that lets the user enter a new page size.|
| __RadDataPagerTemplatePageField__ |This pager field enables users to create a custom paging UI.|
| __RadDataPagerGoToPageField__ |This pager field contains RadNumericTextBox and a button for navigating to particular page number.|
| __RadDataPagerSliderField__ |This pager field contains RadSlider control for changing pages.|

## Events and Methods

Telerik RadDataPager control contains the following sever-side events and methods:


| Event | Description |
| ------ | ------ |
| __FieldCreating__ |Fired before a field is created. You can handle the event to load custom pager field on postback and to replace or modify the instance of the field that should be created/added into the collection of field in the corresponding RadDataPager.|
| __FieldCreated__ |This event is fired after a pager field is created.|
| __Command__ |Fired when any button is clicked or containing control value is changed in RadDataPager control.|


| Method | Description |
| ------ | ------ |
| __FireCommand__ |Can be used for manually triggering commands in code rather than clicking the pager buttons, etc.|

## RadDataPager command names and arguments

* __PageCommandName__ represents the Page command name which fires the __RadDataPager.PageIndexChanged__ event. It can be raised bybuttons residing in the RadDataPager body. Their __CommandName__ should be set to __Page__ and __CommandArgument__ must match one of the values from the table below:


| Paging command arguments | Description |
| ------ | ------ |
| __First__ |Indicates that the end user chose to navigate to the first page in the RadDataPager.|
| __Next__ |Indicates that the end user chose to navigate to the next page in the container RadDataPager.|
| __Prev__ |Indicates that the end user chose to navigate to the previous page in the container RadDataPager.|
| __Last__ |Indicates that the end user chose to navigate to the last page in the container RadDataPager.|
| __<NumericValue>__ |<NumericValue> should be replaced with number that points to the page to which the control should navigate to.|

* __PageSizeChangeCommandName__ represents the PageSizeChange command name which fires __RadDataPager.PageSizeChanged__ event. It can be raised by buttons residing in the RadDataPager body. Their __CommandName__ should be set to __PageSizeChange__ and __CommandArgument__ must be the actual number representing the new page size that will be set.
