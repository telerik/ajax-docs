---
title: Telerik.Web.UI.KeyboardNavigationShortcut
page_title: Telerik.Web.UI.KeyboardNavigationShortcut
description: Telerik.Web.UI.KeyboardNavigationShortcut
---

# Telerik.Web.UI.KeyboardNavigationShortcut

Class representing a single shortcut that represents the keyboard combination required to execute a specific command.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.KeyboardNavigationShortcut

## Properties

###  Key `KeyboardNavigationKey`

Gets or sets the key that should be pressed in order for the shortcut to be executed.
            Note: If the Modifiers value is set to None only the Key is sufficient to trigger the shortcut execution.

###  Modifiers `KeyboardNavigationModifier`

Gets or sets the modifiers that should be pressed in order for the shortcut to be executed.
            Multiple modifiers could be specified by using a commas in the page definition (Modifiers="Alt,Ctrl") or
            bitwise operations in the code behind Modifiers = KeyboardNavigationModifier.Alt | KeyboardNavigationModifier.Ctrl.
            Note: Setting the Modifiers to None will mean that no modifier is required to execute the shortcut.

###  Enabled `Boolean`

Gets or sets a value determining if the shortcut will be functioning.
            If Enabled is set to false the shortcut will not execute.

