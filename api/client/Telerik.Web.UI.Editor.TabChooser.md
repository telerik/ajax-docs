---
title: Telerik.Web.UI.Editor.TabChooser
page_title: Client-side API Reference
description: Telerik.Web.UI.Editor.TabChooser
slug: Telerik.Web.UI.Editor.TabChooser
---

# Telerik.Web.UI.Editor.TabChooser : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* Telerik.Web.UI.RadWebControl
* *[Telerik.Web.UI.Editor.TabChooser]({%slug Telerik.Web.UI.Editor.TabChooser%})*

## Methods

### showItemsList

Shows the modal layout and the items list

#### Parameters

#### Returns

`None`

### hideItemsList

Hides the modal layout and the items list

#### Parameters

#### Returns

`None`

### show

Shows the TabChooser with animation transition

#### Parameters

##### callback `Function`

Callback function, which is called after the show animation ends

#### Returns

`None`

### hide

Hides the TabChooser with animation transition

#### Parameters

##### callback `Function`

Callback function, which is called after the hide animation ends

#### Returns

`None`

### selectTab

Selects a tab and fires the itemSelected event.

#### Parameters

##### tabName `String`

The name of the tab that should be selected

#### Returns

`None`

### get_buttonElement

Returns the button element, on which click the items list is shown

#### Parameters

#### Returns

`Element`

### get_textElement

Returns the selected text wrapper element

#### Parameters

#### Returns

`Element`

### get_overlayElement

Returns the modal overlay element

#### Parameters

#### Returns

`Element`

### get_itemsContainer

Returns the element containing the items list

#### Parameters

#### Returns

`Element`

###  itemsListIsVisible

Return true, if the items list is visible, and false, if it is hidden.

#### Parameters

#### Returns

`Boolean`

###  get_text

Returns the html content of the element returned by the get_textElement method

#### Parameters

#### Returns

`String`

###  set_text

Sets the html content of the element returned by the get_textElement method

#### Parameters

#### Returns

`None`

## Events

### load

This event is fired after the control is initialized

#### Event Data

##### sender `Telerik.Web.UI.Editor.TabChooser` 

##### args `Sys.EventArgs` 

### itemSelected

This event is fired after a list item is selected

#### Event Data

##### sender `Telerik.Web.UI.Editor.TabChooser` 

##### args `Telerik.Web.UI.Editor.TabChooserEventArgs`

### itemsListShowing

This event is fired before the items list is shown

#### Event Data

##### sender `Telerik.Web.UI.Editor.TabChooser` 

##### args `Telerik.Web.UI.Editor.TabChooserEventArgs`
