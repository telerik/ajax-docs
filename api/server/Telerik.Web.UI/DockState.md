---
title: Telerik.Web.UI.DockState
page_title: Telerik.Web.UI.DockState
description: Telerik.Web.UI.DockState
---

# Telerik.Web.UI.DockState

Represents a object that unifies the most important properties of the Telerik.Web.UI.RadDock class, for easier saving and restoring the state of a RadDock. 
            Each property of this class corresponds to a property in the Telerik.Web.UI.RadDock class.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadControlState
* Telerik.Web.UI.DockState

## Properties

###  DockZoneID `String`

Gets or sets the ClientID of the RadDockZone, where the RadDock control is docked.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Width `Unit`

Gets or sets the width of the RadDock control.
            This property is used to save and restore the value of the  property of the RadDock class.

###  ExpandedHeight `Int32`

Gets or sets the height of the RadDock control when it is expanded.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Height `Unit`

Gets or sets the height of the RadDock control.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Index `Int32`

Gets the position of the RadDock control in its parent zone. If undocked returns -1.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Top `Unit`

Gets or sets the vertical position of the RadDock control in pixels.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Left `Unit`

Gets or sets the horizontal position of the RadDock control in pixels.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Closed `Boolean`

Gets or sets a value, indicating whether the RadDock control is closed (style="display:none;").
            This property is used to save and restore the value of the  property of the RadDock class.

###  Resizable `Boolean`

Gets or sets a value, indicating whether the RadDock control is resizable.
             This property is used to save and restore the value of the  property of the RadDock class.

###  Collapsed `Boolean`

Gets or sets a value, indicating whether the RadDock control is collapsed.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Pinned `Boolean`

Gets or sets a value, indicating whether the RadDock control is pinned.
            This property is used to save and restore the value of the  property of the RadDock class.

###  UniqueName `String`

Gets or sets the unique name of the RadDock control, which allows the parent RadDockLayout to
            automatically manage its position. If this property is not set, the control ID will be
            used instead. RadDockLayout will throw an exception if it finds two RadDock controls with
            the same UniqueName.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Tag `String`

Gets or sets the additional data associated with the RadDock control.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Title `String`

Gets or sets the text which will appear in the RadDock control titlebar area.
            This property is used to save and restore the value of the  property of the RadDock class.

###  Text `String`

Gets or sets the text which will appear in the RadDock control content area.
            This property is used to save and restore the value of the  property of the RadDock class.

###  ControlSettings `List`1`

Container for additional settings to be persisted with the state

###  UniqueId `String`

Gets or sets the UniqueId representing the corresponding control's UniqueId property

###  UniqueKey `String`

Used with RadPersistenceFrameworkProxy controls for avoiding problems with controls having identical UniqueId's

## Methods

###  ToString

Serializes the current DockState object. The resulting string can be deserialized using the  static method, and the identical object recreated.

#### Returns

`System.String` Serialized string that can be later used to recreate the same DockState object.

###  Deserialize

Deserializes the input string, and creates the corresponding  object.

#### Parameters

#### input `System.String`

The string to deserialize.

#### Returns

`Telerik.Web.UI.DockState` The deserialized DockState object that corresponds to the input string.

