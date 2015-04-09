---
title: Telerik.Web.UI.RadDock
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadDock : Telerik.Web.UI.RadWebControl

## Methods

### set_title

Sets a title to the control.(Use the Title property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `String`

The text that will be assigned to the control

#### Returns

`None` 

### get_closed

Gets the bool value indicating whether the dock is closed or not.

#### Parameters

#### Returns

`Boolean` Bool value indicating whether the dock is closed or not.

### get_dockMode

Gets the DockMode of the RadDock control. It can be: 1. Floating; 2. Docked; 3. Default;

#### Parameters

#### Returns

`Telerik.Web.UI.DockMode` The Telerik.Web.UI.DockMode of the RadDock control. It can be

### get_pinned

Gets the bool value indicating whether the control is pinned.

#### Parameters

#### Returns

`Number` The bool value indicating whether the control is pinned.

### set_resizable

Enables/Disables the resizing of the control.

#### Parameters

##### value `Boolean`

The value indicating whether the control can be resized or not.

#### Returns

`None` 

### set_dockMode

Sets a DockMode to the dock.(Use the DockMode property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Telerik.Web.UI.DockMode`

Whether the dock will be

#### Returns

`None` 

### set_collapsed

Collapses/Expands the RadDock control.

#### Parameters

##### value `Boolean`

The value indicating whether the dock is collapsed or expanded.

##### playAnimation `Boolean`

Whether or not animation should be played.

#### Returns

`None` 

### get_index

Gets the (0-offset) docking position of the control within its parent docking zone.

#### Parameters

#### Returns

`Number` The 

### set_enableDrag

Sets a value enabling or disabling the ability of the user to drag the control to a new location. (Use the EnableDrag property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Boolean`

The bool value indicating whether the user can drag the control to a new location.

#### Returns

`None` 

### get_handle

Gets the current handle by which the dock can be dragged.

#### Parameters

#### Returns

`Object` The handle by which the dock can be dragged.

### get_parent

If the control is docked, returns the object for the parent docking zone.

#### Parameters

#### Returns

`Object` 

### get_titleElement

Gets the element containing the title text of the dock (the EM element).

#### Parameters

#### Returns

`Object` The element that contains the dock

### get_autoPostBack

Gets the bool value indicating whether the dock will perform postback.

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the dock will perform postback.

### set_width

Sets a width to the control.

#### Parameters

##### value `Number`

The width of the control.

#### Returns

`None` 

### set_forbiddenZones

Sets forbidden zones (DockZones where the dock cannot be docked to) to the dock. (Use the ForbiddenZones property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Array`

A string array containing the DockZone UniqueNames where the dock cannot docked to.

#### Returns

`None` 

### get_left

Gets the X-coordinate of the dock (relative to the top-left corner of the browser window).

#### Parameters

#### Returns

`Number` The number indicating the X

### get_forbiddenZones

Gets an array containing the DockZone UniqueNames where the dock cannot be docked to.

#### Parameters

#### Returns

`Array` A string array containing the DockZone UniqueNames where the dock cannot docked to.

### get_height

Gets the height of the control.

#### Parameters

#### Returns

`Number` The height of the control.

### set_handle

Sets a drag handle to the element passed as a parameter.

#### Parameters

##### element `Object`

#### Returns

`None` 

### clone

Clones the current Telerik.Web.UI.RadDock object.

#### Parameters

##### id `String`

The string that will be set to the UniqueId of the cloned object.

#### Returns

`Telerik.Web.UI.RadDock` The cloned Telerik.Web.UI.RadDock object.

### get_allowedZones

Gets an array containing the DockZone UniqueNames where the dock is allowed to dock.

#### Parameters

#### Returns

`Array` A string array containing the DockZone UniqueNames where the dock is allowed to dock.

### get_uniqueID

Gets the UniqueID of the control.

#### Parameters

#### Returns

`String` The UniqueID of the control.

### get_enableAnimation

Gets the bool value indicating whether the animation is enabled.

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the animation is enabled.

### get_resizable

Gets the bool value indicating whether the control can be resized.

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the control can be resized.

### get_dockZone

Gets the parent zone(Telerik.Web.UI.RadDockZone object) to which the dock is docked.

#### Parameters

#### Returns

`Telerik.Web.UI.RadDockZone` The parent DockZone.

### set_closed

Closes/Opens the RadDock control.

#### Parameters

##### value `Boolean`

The value indicating whether the dock will be opened or closed.

##### playAnimation `Boolean`

Whether or not animation should be played.

#### Returns

`None` 

### get_enableDrag

Gets the bool value indicating whether the user can drag the control to a new location.

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the user can drag the control to a new location.

### set_pinned

Causes a floating control to become pinned or unpinned. Dock with DockMode="Floating" can be pinned only. (Use the Pinned property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Boolean`

The bool value indicating whether the control will be pinned

#### Returns

`None` 

### get_layoutID

Gets the ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.

#### Parameters

#### Returns

`String` The ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDock control.

### get_contentContainer

Gets a reference to the element of the dock's content container.

#### Parameters

#### Returns

`Object` The element of the dock

### set_height

Sets a height to the control.

#### Parameters

##### value `Number`

The height of the control.

#### Returns

`None` 

### get_commands

Gets an object containing all present (enabled) dock commands. A single command can be accessed in the following way: "objCommands.CommandName" or "objCommands["CommandName"]".

#### Parameters

#### Returns

`Array` 

### get_tag

Tag

#### Parameters

#### Returns

`Object` 

### saveClientState

Gets the serialized client state of the dock control.

#### Parameters

#### Returns

`None` 

### getCommand

Gets the command by the name specified.

#### Parameters

##### name `String`

The name of the command.

#### Returns

`Telerik.Web.UI.DockCommand` The command with the given name.

### get_width

Gets the width of the control.

#### Parameters

#### Returns

`Number` The width of the control.

### conditionalPostback

Performs a postback if the dock has AutoPostBack enabled.

#### Parameters

##### parameter `String`

The parameter passed to the server when postback is performed.

#### Returns

`None` 

### set_autoPostBack

Sets a bool value indicating whether the dock will perform postback.

#### Parameters

##### value `Boolean`

Parameter indicating whether the dock will perform postback.

#### Returns

`None` 

### get_collapsed

Gets the bool value indicating whether the dock is collapsed or not.

#### Parameters

#### Returns

`Boolean` Bool value indicating whether the dock is collapsed or not.

### get_dockZoneID

Gets the ID of the zone where the RadDock control is docked to.

#### Parameters

#### Returns

`String` The ID of the zone where the RadDock control is docked to.

### get_skin

Gets the currently applied skin to the control.

#### Parameters

#### Returns

`String` The control

### get_title

Gets the title text of the dock control.

#### Parameters

#### Returns

`String` The text of the dock

### doPostBack

Calls the _doPostBack global function, passing the UniqueID of the control as event target paramenter.

#### Parameters

##### parameter `String`

The parameter passed to the server when postback is performed.

#### Returns

`None` 

### get_element

Returns the DOM element for this control.

#### Parameters

#### Returns

`Element` 

### undock

Undocks the RadDock control from its containing zone.

#### Parameters

#### Returns

`None` 

### set_left

Sets a X-coordinate to the dock (relative to the top-left corner of the browser window).

#### Parameters

##### value `Number`

The value set to the X

#### Returns

`None` 

### get_commandsContainer

Gets a reference to the element container of the dock's commands.

#### Parameters

#### Returns

`Object` The element containing dock

### get_dockZones

Returns an array which contains all dock zones.

#### Parameters

#### Returns

`Array` 

### set_allowedZones

Sets allowed zones (DockZones where the dock is allowed to dock) to the dock. (Use the AllowedZones property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Array`

A string array containing the DockZone UniqueNames where the dock is allowed to dock.

#### Returns

`None` 

### get_top

Gets the Y-coordinate of the dock (relative to the top-left corner of the browser window).

#### Parameters

#### Returns

`Number` The number indicating the Y

### get_titleBar

Gets a reference to the element of the dock's TitleBar template.

#### Parameters

#### Returns

`Object` The element of the dock

### set_enableAnimation

Enables or disables the dock animations. (Use the EnableAnimation property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Boolean`

The bool value indicating whether the animation will be enabled

#### Returns

`None` 

### set_top

Sets a Y-coordinate to the dock (relative to the top-left corner of the browser window).

#### Parameters

##### value `Number`

The value set to the Y

#### Returns

`None` 

### get_uniqueName

Gets the UniqueName of the control.

#### Parameters

#### Returns

`String` The UniqueName of the control.

## Events

### dockPositionChanged

The dockPositionChanged event occurs when the user has just changed the position of a RadDock control by dragging it to a new location.

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.

### resizeStart

The resizeStart event is raised when the resize of the dock is started.  

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.

### drag

The drag event is raised when the user moves the mouse while dragging a RadDock control.

#### Event Data

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.

### command

The command event occurs when the user clicks on a command in the RadDock title bar. 

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### resizeEnd

The resizeEnd event is raised when the RadDock is resized. 

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.

### dragEnd

The dragEnd event occurs when the user drops a RadDock control after a drag operation.

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.

### dockPositionChanging

The dockPositionChanging event occurs when the user tries to drop the RadDock control in a new location.

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### dragStart

The dragStart event occurs when the user begins to drag the RadDock control from its current position. 

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.


### enterZone

The enterZone event is raised when a RadDock is over a RadDockZone.

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.


### leaveZone

The leaveZone event is raised when a RadDock has left a RadDockZone.

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.

### load

The event raised when the RadDock is loaded. 

#### Event Data

##### sender `Telerik.Web.UI.RadDock`

The instance of the RadDock raised the event.

##### args `Sys.EventArgs`

The event arguments.
