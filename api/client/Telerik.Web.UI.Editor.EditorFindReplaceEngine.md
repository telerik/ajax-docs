---
title: Telerik.Web.UI.Editor.EditorFindReplaceEngine
title_prefix: Client-side API Reference
description: Telerik.Web.UI.Editor.EditorFindReplaceEngine
slug: Telerik.Web.UI.Editor.EditorFindReplaceEngine
---

# Telerik.Web.UI.Editor.EditorFindReplaceEngine

## Inheritance Hierarchy

* Sys.Component
* *[Telerik.Web.UI.Editor.EditorFindReplaceEngine]({%slug Telerik.Web.UI.Editor.EditorFindReplaceEngine%})*


## Methods

### find

Initializes a new search on the provided string.

#### Parameters

##### find `String`

The search string

##### backwards `Boolean`

Defines the direction of the search. If not true, search is always forwards.

#### Returns

`String` Important message (could be an error message) for the result fo the search

### findNext

Does a forward search

#### Parameters

##### find `String`

The search string

#### Returns

`String` Important message (could be an error message) for the result fo the search

### findPrevious

Does a backwards search

#### Parameters

##### find `String`

The search string

#### Returns

`String` Important message (could be an error message) for the result fo the search

### get_caseSensitive

Get whether find/replace will do case sensitive searches

#### Parameters

#### Returns

`Boolean`

### get_editor

Gets a reference to the Editor, where find/replace engine will search

#### Parameters

#### Returns

`Telerik.Web.UI.RadEditor`

### get_wholeWord

Get whether engine will do a whole word search

#### Parameters

#### Returns

`Boolean`

### replace

Initializes a new replace procedure on the content

#### Parameters

##### find `String`

The search string

##### replace `String`

The replacement string

##### backwards `Boolean`

Defines the direction of the search

#### Returns

`String` Important message (could be an error message) for the result fo the replace

### replaceAll

Does a replace all procedure, where all matched content will be replaced by the replace string.

#### Parameters

##### find `String`

The search string

##### replace `String`

The replacement string

##### backwards `Boolean`

Defines the direction of the search

#### Returns

`String` Important message (could be an error message) for the result fo the replace

### set_caseSensitive

Sets whether find/replace will do case sensitive searches

#### Parameters

##### value `Boolean`

True for case sensitive search. Otherwise, false.

#### Returns

`None`

### set_editor

Sets a reference to the Editor, where find/replace engine will search

#### Parameters

##### value `Telerik.Web.UI.RadEditor`

New reference to the RadEditor control

#### Returns

`None`

### set_wholeWord

Set whether engine will do a whole word search

#### Parameters

##### value `Boolean`

True will search for whole words. Otherwise, false.

#### Returns

`None`

