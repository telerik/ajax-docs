---
title: Telerik.Web.UI.RadPane
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadPane : Telerik.Web.UI.SplitterPaneBase 

## Methods

###  collapse

Collapses the pane in the specified direction

#### Parameters

##### direction `Telerik.Web.UI.SplitterDirection`

The direction

#### Returns

`Boolean` A value

###  expand

Expands the pane in the specified direction

#### Parameters

##### direction `Telerik.Web.UI.SplitterDirection`

The direction

#### Returns

`Boolean` A value

###  getContentElement

Returns a reference to the HTML element, which is holding the pane content

#### Parameters

#### Returns

`Object` The HTML element

###  getExtContentElement

Returns a reference to the IFRAME element, which is holding the pane content

#### Parameters

#### Returns

`Object` The IFRAME element

###  getInnerHeight

Returns the height of the pane control, excluding the pane borders

#### Parameters

#### Returns

`Number` 

###  getInnerWidth

Returns the width of the pane control, excluding the pane borders

#### Parameters

#### Returns

`Number` 

###  get_content

Returns the HTML content of the pane control. In case the ContentUrl property of the pane is set, returns an empty string

#### Parameters

#### Returns

`String` The HTML content of the pane control

###  get_contentUrl

Gets the URL of the page that is opened in the pane

#### Parameters

#### Returns

`String` The URL of the page that is opened in the pane

###  get_index

Returns the index of the pane in the items collection of the splitter control

#### Parameters

#### Returns

`Number` The index of the pane in the items collection of the splitter control

###  get_indexInPanes

Returns the index of the pane control in the panes collection of the splitter control

#### Parameters

#### Returns

`Number` The index of the pane control in the panes collection of the splitter control

###  get_locked

Returns a value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed

#### Parameters

#### Returns

`Boolean` A value

###  get_parent

Returns a reference to the splitter control

#### Parameters

#### Returns

`Telerik.Web.UI.RadSplitter` A reference to the splitter control

###  get_splitter

Returns a reference to the splitter control

#### Parameters

#### Returns

`Telerik.Web.UI.RadSplitter` A reference to the splitter control

###  isExternalContent

Returns a value, indicating whether the pane control is showing external content (content specified using the ContentUrl property)

#### Parameters

#### Returns

`Boolean` A value

###  isLocked

Returns a value, indicating whether the pane is locked, that is, whether the pane can be resized or collapsed

#### Parameters

#### Returns

`Boolean` A value

###  isSplitterContainer

Returns a value, indicating whether the pane contains a splitter control with ResizeWithParentPane set to true

#### Parameters

#### Returns

`Boolean` A value

###  lock

Sets the Locked property of the pane control to true

#### Parameters

#### Returns

`None` 

###  print

Prints the content of the pane

#### Parameters

##### arrCssFiles `Array`

An array with the paths to the style sheets that contain styles for the printed content. This parameter is used only in case the ContentUrl property of the pane is not set

#### Returns

`None` 

###  resize

Resizes the pane control with delta pixels in the specified direction

#### Parameters

##### delta `Number`

The number of pixels

##### resizeDirection `Telerik.Web.UI.SplitterDirection`

The direction

#### Returns

`None` 

###  set_content

Sets the HTML content of the pane control

#### Parameters

##### contentHtml `String`

The HTML content of the pane control

#### Returns

`None` 

###  set_contentUrl

Sets the URL of the page to open in the pane

#### Parameters

##### value `String`

The URL of the page to open in the pane

#### Returns

`None` 

###  set_height

Sets the height in pixels of the control

#### Parameters

##### value `Number`

The new height in pixels of the control

#### Returns

`None` 

###  set_locked

Sets the locked state of the pane - whether the pane can be resized or collapsed

#### Parameters

##### value `Boolean`

The new value for the Locked property of the pane control

#### Returns

`None` 

###  set_width

Sets the width in pixels of the control

#### Parameters

##### value `Number`

The new width in pixels of the control

#### Returns

`None` 

###  unlock

Sets the Locked property of the pane control to false

#### Parameters

#### Returns

`None` 


