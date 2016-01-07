---
title: Telerik.Web.UI.TreeListKeyPressEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.TreeListKeyPressEventArgs
slug: Telerik.Web.UI.TreeListKeyPressEventArgs
---

# Telerik.Web.UI.TreeListKeyPressEventArgs : Sys.CancelEventArgs

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.TreeListKeyPressEventArgs]({%slug Telerik.Web.UI.TreeListKeyPressEventArgs%})*

## Methods

### get_keyCode

Returns the code of the pressed key.

#### Parameters

#### Returns

`Number`

### get_isShiftPressed

Returns whether the shift key has been pressed as part of the keyboard shortcut.

#### Parameters

#### Returns

`Boolean`

### get_isCtrlPressed

Returns whether the control key has been pressed as part of the keyboard shortcut.

#### Parameters

#### Returns

`Boolean`

### get_isAltPressed

Returns whether the alt key has been pressed as part of the keyboard shortcut.

#### Parameters

#### Returns

`Boolean`

### get_domEvent

Gets the internal DOM event object for the event.

#### Parameters

#### Returns

`Sys.UI.DomEvent`

### get_keyboardNavigationType

Gets the action that will be performed as a result of this shortcut (e.g. for Enter - Edit).

#### Parameters

#### Returns

`Number`

### set_keyboardNavigationType

Sets the action that will be performed as a result of this shortcut. Useful when user wants to perform a different action as a result of a shortcut.

#### Parameters

##### value `Number`

#### Returns

`None`