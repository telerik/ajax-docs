---
title: Telerik.Web.UI.EditorShortCutManager
page_title: Client-side API Reference
description: Telerik.Web.UI.EditorShortCutManager
slug: Telerik.Web.UI.EditorShortCutManager
---

# Telerik.Web.UI.EditorShortCutManager

## Inheritance Hierarchy

* *[Telerik.Web.UI.EditorShortCutManager]({%slug Telerik.Web.UI.EditorShortCutManager%})*

## Methods

### addShortCut

Adds a shortcut from collection.

#### Parameters

##### shortcutName `String`

Name of the shortcut

##### shortcutString `String`

The key combination of the shortcut

#### Returns

`None` 

### removeShortCut

Removes a shortcut from collection.

#### Parameters

##### shortcutName `String`

Name of the the shortcut

#### Returns

`None` 

### isShortCutHit

Indicates whether a shortcut is hit. 

#### Parameters

##### evt `Object`

The DOM event.

#### Returns

`Boolean` 

### findShortCutByName

Returns the ShortCut instance found by its name.  

#### Parameters

##### shortcutName `String`

The DOM event.

#### Returns

`Telerik.Web.UI.EditorShortCut` 

### setShortCut

Edits an existing ShortCut.  

#### Parameters

##### shortcutName `String`

Name of the shortcut

##### shortcutString `String`

The key combination of the shortcut

#### Returns

`None` 