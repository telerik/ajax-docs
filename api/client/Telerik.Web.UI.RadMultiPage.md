---
title: Telerik.Web.UI.RadMultiPage
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadMultiPage : Telerik.Web.UI.RadWebControl 

## Methods

### set_selectedIndex

Sets the selected index of the multipage.

#### Parameters

##### value `Number`

the selected index of the multipage

#### Returns

`None` 

### trackChanges

Begins tracking changes to the multipage. Only changes that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

### findPageViewByID

Gets the first page view instance, whose id corresponds to the passed parameter.

#### Parameters

##### id `String`

The id to look for

#### Returns

`Telerik.Web.UI.RadPageView` 

### get_selectedPageView

Returns the currently selected pageview.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPageView` the currently selected pageview

### get_element

Gets the DOM element for the multipage.

#### Parameters

#### Returns

`Element` 

### get_selectedIndex

Returns the index of the selected pageview.

#### Parameters

#### Returns

`Number` 

### commitChanges

Ends tracking changes to the multipage. Only changes that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

### get_pageViews

Returns a collection of all pageviews.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPageViewCollection` 

