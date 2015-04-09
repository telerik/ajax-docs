---
title: Telerik.Web.UI.RadDataPager
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadDataPager : Telerik.Web.UI.RadWebControl 

## Methods

### get_uniqueID

Gets the unique id of RadDataPager's container.

#### Parameters

#### Returns

`String` 

### get_totalRowCount

Gets the total number of records that are displayed in the underlying data source.

#### Parameters

#### Returns

`Number` 

### fireCommand

Fires command with command name and command argument specified as arguments

```javascript
fireCommand("Page", "First")
fireCommand("PageSizeChange", 10)
```

#### Parameters

##### commandName `String`

The name of the command that will be executed. Possible values are listed below:
* Page
* PageSizeChange

##### commandArgument `String`

The command argument with which the command will be executed. Possible values are:
* "First", "Next", "Prev", "Last" or integer value for page size

#### Returns

`None` 

### set_pageSize

Sets the page size for the RadDataPager control.

#### Parameters

##### size `Number`

The page size that will be set to the RadDataPager control.

#### Returns

`None` 

### get_startRowIndex

Gets the index of the first record that is displayed on a page of data.

#### Parameters

#### Returns

`Number` 

### set_currentPageIndex

Sets the current page index for the RadDataPager control.

#### Parameters

##### index `Number`

The page index

#### Returns

`None` 

### get_currentPageIndex

Gets the current page index for the RadDataPager control.

#### Parameters

#### Returns

`Number` 

### get_pageCount

Gets the page count for the RadDatePager control.

#### Parameters

#### Returns

`Number` 

### get_pageSize

Gets the page size for the RadDataPager control.

#### Parameters

#### Returns

`Number` 

## Events

###DataPagerCreating

The DataPagerCreating event fires before the RadDataPager is created.

#### Event Data

##### sender `Telerik.Web.UI.RadDataPager`

The RadDataPager instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### DataPagerCreated

The DataPagerCreated event fires after the RadDataPager is created.

#### Event Data

##### sender `Telerik.Web.UI.RadDataPager`

The RadDataPager instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### DataPagerDestroying

The DataPagerDestroying event fires before the RadDataPager is destroyed.

#### Event Data

##### sender `Telerik.Web.UI.RadDataPager`

The RadDataPager instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

###PageIndexChanging

The PageSizeChanging event fires when a page index is set on the RadDataPager object.

#### Event Data

##### sender `Telerik.Web.UI.RadDataPager`

The RadDataPager instance that fired the event.

##### args `Telerik.Web.UI.DataPagerPageIndexChangingEventArgs`

The event arguments.

###PageSizeChanging

The PageSizeChanging event fires when a page size is set for the RadDataPager object.

#### Event Data

##### sender `Telerik.Web.UI.RadDataPager`

The RadDataPager instance that fired the event.

##### args `Telerik.Web.UI.DataPagerPageSizeChangingEventArgs`

The event arguments.