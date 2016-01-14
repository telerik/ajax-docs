---
title: Telerik.Web.UI.KeyboardNavigationCustomShortcut
page_title: Telerik.Web.UI.KeyboardNavigationCustomShortcut
description: Telerik.Web.UI.KeyboardNavigationCustomShortcut
---

# Telerik.Web.UI.KeyboardNavigationCustomShortcut

Class representing a single shortcut that represents the keyboard combination required to execute a specific command.
            The Telerik.Web.UI.KeyboardNavigationCustomShortcut enables the use of custom commands to enable your custom commands and actions.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.KeyboardNavigationShortcut
* Telerik.Web.UI.KeyboardNavigationCustomShortcut

## Properties

###  CustomCommand `String`

The name of the custom command that will be created and executed.
            Note: Custom commands does not have specific behavior.

###  Enabled `Boolean`

Gets or sets a value determining if the shortcut will be functioning.
            If Enabled is set to false the shortcut will not execute.

###  Key `KeyboardNavigationKey`

Gets or sets the key that should be pressed in order for the shortcut to be executed.
            Note: If the Modifiers value is set to None only the Key is sufficient to trigger the shortcut execution.

###  Modifiers `KeyboardNavigationModifier`

Gets or sets the modifiers that should be pressed in order for the shortcut to be executed.
            Multiple modifiers could be specified by using a commas in the page definition (Modifiers="Alt,Ctrl") or
            bitwise operations in the code behind Modifiers = KeyboardNavigationModifier.Alt | KeyboardNavigationModifier.Ctrl.
            Note: Setting the Modifiers to None will mean that no modifier is required to execute the shortcut.

