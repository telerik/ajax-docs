---
title: Telerik.Web.UI.EditorDropDown
page_title: Client-side API Reference
description: Telerik.Web.UI.EditorDropDown
slug: Telerik.Web.UI.EditorDropDown
---

# Telerik.Web.UI.EditorDropDown : Telerik.Web.UI.EditorButton

## Inheritance Hierarchy

* [Telerik.Web.UI.EditorButton]({%slug Telerik.Web.UI.EditorButton%})
* *[Telerik.Web.UI.EditorDropDown]({%slug Telerik.Web.UI.EditorDropDown%})*

## Methods

### isExpanded

Returns a Boolean value indicating whether the pop-up element is expanded or not.

#### Parameters

#### Returns

`Boolean`

### show

Shows the pop-up of the tool.

#### Parameters

#### Returns

`None`

### configurePopupPropertiesBeforeShow

Sets the position of the pop-up before show.

#### Parameters

#### Returns

`None`

### hide

Hides the pop-up of the tool.

#### Parameters

#### Returns

`None`

### get_activeIndex

Returns the index of the currently selected item.

#### Parameters

#### Returns

`Number`

### set_activeIndex

Sets the index of the selected item.

#### Parameters

##### value `Number`

#### Returns

`None`

### get_popupElement

Returns the DOM element of the pop-up.

#### Parameters

#### Returns

`Element`

### get_selectedItem

Returns the name of the selected item.

#### Parameters

#### Returns

`String`

### get_selectedIndex

Returns the index of the selected item.

#### Parameters

#### Returns

`Number`

### set_selectedIndex

Sets an index of item to select.

#### Parameters

##### index `Number`

#### Returns

`None`

### get_items

Returns the item collection populated.

#### Parameters

#### Returns

`Array`

### set_items

Sets a new item collection.

#### Parameters

##### items `Array` 

#### Returns

`None`

## Events

### show

This event is raised when the pop-up element is shown.

#### Event Data

##### sender `Telerik.Web.UI.EditorDropDown`

The EditorDropDown instance raised the event.

##### args `Sys.EventArgs`

The event arguments.

### hide

This event is raised when the pop-up element is hidden.

#### Event Data

##### sender `Telerik.Web.UI.EditorDropDown`

The EditorDropDown instance raised the event.

##### args `Sys.EventArgs`

The event arguments.


