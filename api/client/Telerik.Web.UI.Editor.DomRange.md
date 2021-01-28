---
title: Telerik.Web.UI.Editor.DomRange
description: Telerik.Web.UI.Editor.DomRange
slug: Telerik.Web.UI.Editor.DomRange
---

# Telerik.Web.UI.Editor.DomRange

## Inheritance Hierarchy

* *[Telerik.Web.UI.Editor.DomRange]({%slug Telerik.Web.UI.Editor.DomRange%})*


## Methods

### static commonAncestorContainer `Element`

The parent node that fully contains the range content

### static endContainer `Element`

The end container (node), where the end location of the range is located.

### static endOffset `Number`

The end offset within the end container of the range's end location

### static startContainer `Element`

The start container (node), where the start location of the range is located.

### static startOffset `Number`

The start offset within the start container of the range's start location

### clear

Clears the selection of the browser.

#### Parameters

#### Returns

`None`

### cloneRange

Creates a new DomRange object that has the same selected area

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.DomRange`

### collapse

Collapses the range to either end. When collapsed, start and end locations are identical.

#### Parameters

##### toStart? `Boolean`

If true, range is collapsed to the start location. Otherwise, collapses to the end location.

#### Returns

`None`

### static createRange

Creates a range from the page's document

#### Parameters

##### range `Object`

The page document, for which a range will be created

#### Returns

`Telerik.Web.UI.Editor.DomRange`

### deleteContents

Delete the content of the range

#### Parameters

#### Returns

`None`

### extractContents

Extract the content of the range

#### Parameters

#### Returns

`Object` Result is a documentFragment

### getBrowserRange

Gets the underlying browser range reference. It is different for legacy IE and modern browsers.

#### Parameters

#### Returns

`Object`

### getHtml

Gets the content of the range as HTML text content.

#### Parameters

#### Returns

`String`

### getText

Gets the range content as text. HTML tags are expected to be missing.

#### Parameters

#### Returns

`String`

### insertNode

Insert a DOM node at the start of the range

#### Parameters

##### node `Element`

The node to be inserted

#### Returns

`None`

### isCollapsed

Checks whether the range is collapsed.

#### Parameters

#### Returns

`Boolean` True means the range is collapsed. Otherwise, false.

### pasteHTML

Enters text content as range content. Input could be HTML text.

#### Parameters

##### text `String`

The content to be pasted in the range

#### Returns

`None`

### static rangeFromWindow

Gets the range of the specified browser window

#### Parameters

##### wndow `Object`

The page window object reference

#### Returns

`Telerik.Web.UI.Editor.DomRange`

### select

Puts the content of the range in a browser selection. The content should be wrapped in a UI selection by the browser.

#### Parameters

#### Returns

`None`

### selectNode

Selection is applied over the specified node.

#### Parameters

##### node `Element`

The node to be selected

#### Returns

`None`

### selectNodeContents

Select the whole content of a node

#### Parameters

##### node `Element`

The node, which content should be selected

#### Returns

`None`

### setEnd

Set the end of the range at a specific location in the DOM tree

#### Parameters

##### node `Element`

The node, where the end should be located

##### offset `Number`

The offset within the DOM node

#### Returns

`None`

### setEndAfter

Set the end of the range after the specified node

#### Parameters

##### node `Element`

The node, after which the end of the range will be set

#### Returns

`None`

### setEndBefore

Set the end of the range before the specified node

#### Parameters

##### node `Element`

The node, before which the range end will be set

#### Returns

`None`

### setStart

Set the start of the range at a specific location in the DOM tree

#### Parameters

##### node `Element`

The node, where the start should be located

##### offset `Number`

The offset within the DOM node

#### Returns

`None`

### setStartAfter

Sets the start of the range before the specified node

#### Parameters

##### node `Element`

The node, before which the start should be located

#### Returns

`None`

### setStartBefore

Sets the start of the range before the specified node

#### Parameters

##### node `Element`

The node, before which the start should be located

#### Returns

`None`

### surroundContents

Surrounds the selected range content with the provided node

#### Parameters

##### newParent `Element`

The new parent of the range content

#### Returns

`None`

### static toDomRange

Wrapper method that always returns DomRange. Useful when one is not sure if the range is a DomRange or a regular browser range.

#### Parameters

##### range `Object`

The range that could potentially be wrapped in a DomRange, if it is a browser range.

#### Returns

`Telerik.Web.UI.Editor.DomRange`

