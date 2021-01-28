---
title: Telerik.Web.UI.RadFilter
description: Telerik.Web.UI.RadFilter
slug: Telerik.Web.UI.RadFilter
---

# Telerik.Web.UI.RadFilter : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadFilter]({%slug Telerik.Web.UI.RadFilter%})*


## Methods

### addExpression

Adds expression for the expression at the specified index.

#### Parameters

##### ownerIndex `Number`

Index of the expression item.

#### Returns

`None` 

### addGroup

Adds group for the expression at the specified index.

#### Parameters

##### ownerIndex `Number`

Index of the expression item.

#### Returns

`None` 

### applyExpressions

Applies the created expressions.

#### Parameters

#### Returns

`None` 

### changeExpressionFieldName

Changes the name of the used field in the expression by given index and field name.

#### Parameters

##### ownerIndex `Number`

Index of the expression item.

##### filterName `String`

The name of the filed to be filtered over.

#### Returns

`None` 

### changeFilterFunction

Changes the associated filter function for the expression item with the specified index.

#### Parameters

##### ownerIndex `Number`

Index of the expression item.

##### filterFunction `String`

The name of the filter function to be used.

#### Returns

`None` 

### changeGroupOperator

Changes the group operator for the expression at the specified index.

#### Parameters

##### ownerIndex `Number`

Index of the expression item.

##### groupOperator `String`

The group operator that should be applied.

#### Returns

`None` 

### fireCommand

Fires command with the specified command name and argument.

#### Parameters

##### commandName `String`

The command name to be fired.

##### commandArgument `String`

Optional argument to be passed.

#### Returns

`None` 

### get_clientID

Returns the client ID of the filter control.

#### Parameters

#### Returns

`String` 

### get_contextMenu

Returns a reference to the filter context menu.

#### Parameters

#### Returns

`Object` 

### get_uniqueID

Returns the unique ID of the filter control.

#### Parameters

#### Returns

`String` 

### repaint

Repaints the client area of the RadFilter control.

#### Parameters

#### Returns

`None` 


## Events

### FilterCreated

This client-side event is fired after the RadFilter is created.

#### Event Data

##### sender `Telerik.Web.UI.RadFilter`

The RadFilter instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### FilterCreating

This client-side event is fired before the RadFilter is created.

#### Event Data

##### sender `Telerik.Web.UI.RadFilter`

The RadFilter instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### MenuShowing

This client-side event is fired before the RadFilter.ContextMenu is shown.

#### Event Data

##### sender `Telerik.Web.UI.RadFilter`

The RadFilter instance that fired the event.

##### args `Telerik.Web.UI.FilterMenuShowingEventArgs`

The event arguments.

### FilterDestroying

This client-side event is fired when RadFilter object is destroyed, i.e. on each window.onunload.

#### Event Data

##### sender `Telerik.Web.UI.RadFilter`

The RadFilter instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### MenuShown

This client-side event is fired when the RadFilter.ContextMenu is shown.

#### Event Data

##### sender `Telerik.Web.UI.RadFilter`

The RadFilter instance that fired the event.

##### args `Telerik.Web.UI.FilterMenuShownEventArgs`

The event arguments.

