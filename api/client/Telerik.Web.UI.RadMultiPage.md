---
title: Telerik.Web.UI.RadMultiPage
description: Telerik.Web.UI.RadMultiPage
slug: Telerik.Web.UI.RadMultiPage
---

# Telerik.Web.UI.RadMultiPage : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadMultiPage]({%slug Telerik.Web.UI.RadMultiPage%})*


## Methods

### commitChanges

Ends tracking changes to the multipage. Only changes that occur between a call to trackChanges and commitChanges persist after a postback.

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

### get_element

Gets the DOM element for the multipage.

#### Parameters

#### Returns

`Element` 

### get_pageViews

Returns a collection of all pageviews.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPageViewCollection` 

### get_selectedIndex

Returns the index of the selected pageview.

#### Parameters

#### Returns

`Number` 

### get_selectedPageView

Returns the currently selected pageview.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPageView` the currently selected pageview

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


