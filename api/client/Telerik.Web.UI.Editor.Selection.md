---
title: Telerik.Web.UI.Editor.Selection
description: Telerik.Web.UI.Editor.Selection
slug: Telerik.Web.UI.Editor.Selection
---

# Telerik.Web.UI.Editor.Selection

## Inheritance Hierarchy

* *[Telerik.Web.UI.Editor.Selection]({%slug Telerik.Web.UI.Editor.Selection%})*


## Methods

### collapse

Collapses a selection to the starting or ending position.

#### Parameters

##### toStart `Boolean`

The direction in which to collapse the selection. If true the selection will collapse from end to start.

#### Returns

`None` 

### getBrowserSelection

Returns the browser's Selection object

#### Parameters

#### Returns

`Object` 

### getHtml

Returns the selection's content as HTML

#### Parameters

#### Returns

`String` 

### getParentElement

Returns a reference to the selection's parent DOM element

#### Parameters

#### Returns

`Element` 

### getRange

Returns a reference to a range object

#### Parameters

#### Returns

`Object` 

### getText

Returns the selected content as plain text

#### Parameters

#### Returns

`String` 

### isControl

Specifies whether the current selection is a control or not.

#### Parameters

#### Returns

`Boolean` 

### moveToElementText

Recreates the selection range.

#### Parameters

##### element `Element`

DOM element to be selected.

#### Returns

`None` 

### pasteHtml

Pastes string at current selection

#### Parameters

##### htmlString `String`

String to be pasted

##### bSelContent `Boolean`

Specifies whether to select pasted content after execution

#### Returns

`None` 

### selectElement

Adds an element to current selection

#### Parameters

##### oElement `Element`

DOM element to be added

#### Returns

`None` 

### selectRange

Selects the previously stored range

#### Parameters

##### range `Object`

#### Returns

`None` 



