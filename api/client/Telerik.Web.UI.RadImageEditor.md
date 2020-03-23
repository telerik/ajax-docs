---
title: Telerik.Web.UI.RadImageEditor
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadImageEditor
slug: Telerik.Web.UI.RadImageEditor
---

# Telerik.Web.UI.RadImageEditor : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadImageEditor]({%slug Telerik.Web.UI.RadImageEditor%})*


## Methods

### addShortCut

Adds a shortcut with the specified name (keyword) and shortcut string (the combination of keys).

#### Parameters

##### shortcutName `String`

The shortcut name 

##### shortcutString `String`

The Keyboard combination for the shortcut. Letter case is ignored. 

#### Returns

`None` 

### addTextToImage

Adds text to the image in the specified position

#### Parameters

##### x `Number`

The X coordinate of the text

##### y `Number`

The Y coordinate of the text

##### text `Telerik.Web.UI.ImageEditor.ImageText`

The text to add to the image

#### Returns

`None` 

### applyChangesOnServer

Forces the changes made to the image to be applied on the server

#### Parameters

#### Returns

`None` 

### applyFilter

Executes the provided filter against the current editable image and adds the operation to the undo stack

#### Parameters

##### filter `Telerik.Web.UI.ImageEditor.Filters.IPixelFilter`

The filter to be applied

#### Returns

`None` 

### changeImageOpacity

Changes the opacity of the image

#### Parameters

##### opacity `Number`

The opacity that is applied to the image

##### shouldUpdateUI `Boolean`

Flag whether the UI

#### Returns

`None` 

### closeToolsPanel

Closes the tools panel

#### Parameters

#### Returns

`None` 

### editImageOnServer

Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event. The EditableImage can be retrieved from the event arguments, and edited accordingly.

#### Parameters

##### commandName `String`

The command name that will be passed to the server and respective client events. It should be unique.

##### commandText `String`

The command text that will be used to record the operation in the Undo

##### commandArgument `String`

The additional command argument that will be passed to the server. By default empty string is passed.

##### callbackFunction `Function`

The function that will be called after response is received from the server. Two parameters are sent to this function

#### Returns

`None` 

### executeCommand

Executes an ImageEditor's command and opens the corresponding dialog. Does not fire the client-side events.

#### Parameters

##### commandName `String`

The name of the command to execute

#### Returns

`None` 

### fire

Fires an ImageEditor's command with the full set of client-side events

#### Parameters

##### commandName `String`

The name of the command to fire

##### args `Object`

Event arguments accompanying the firing of the command

#### Returns

`None` 

### flipHorizontal

Flips the image in the Horizontal direction

#### Parameters

#### Returns

`None` 

### flipImage

Flips the image in a horizontal or vertical direction

#### Parameters

##### flipDirection `Telerik.Web.UI.ImageEditor.FlipDirection`

The direction of flipping

##### shouldUpdateUI `Boolean`

Flag whether the UI

##### forceChanges `Boolean`

Flag whether the previously set flip direction should be taken under consideration

#### Returns

`None` 

### flipVertical

Flips the image in the Vertical direction

#### Parameters

#### Returns

`None` 

### get_bottomZone

Gets a reference to the bottom docking zone of the ToolBar panel.

#### Parameters

#### Returns

`Object` The reference to the bottom docking zone of the ToolBar panel

### get_currentCommand

Gets the currently executing command

#### Parameters

#### Returns

`String` The name of the command

### get_currentToolWidget

Gets the current tool widget, i.e. the object holding the dialog's functionality

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.ToolWidget` A reference to the widget

### get_enableResize

Gets the flag to indicate whether the resizing of the ImageEditor control is enabled

#### Parameters

#### Returns

`Boolean` Is resize enabled flag

### get_formDecorator

Gets the FormDecorator, used in decorating the dialog's UI

#### Parameters

#### Returns

`Telerik.Web.UI.RadFormDecorator` A reference to the RadFormDecorator

### get_height

Gets the height of the ImageEditor control's element

#### Parameters

#### Returns

`Number` The height of the control

### get_isRedoAvailable

Gets a flag whether the a redo command is available in the redo stack

#### Parameters

#### Returns

`Boolean` Is redo available flag

### get_isUndoAvailable

Gets a flag whether the a undo command is available in the undo stack

#### Parameters

#### Returns

`Boolean` Is undo available flag

### get_left

Gets the left/x coordinate of the element's location

#### Parameters

#### Returns

`Number` The value of the left

### get_leftZone

Gets a reference to the left docking zone of the ToolBar panel.

#### Parameters

#### Returns

`Object` The reference to the left docking zone of the ToolBar panel

### get_location

Gets the location of the ImageEditor control's element

#### Parameters

##### forceCalculation `Boolean`

Flag to force recalculation of the element

#### Returns

`Sys.UI.Point` The position of the control

### get_lowerZoomBound

Gets the lower limit of the zoom level. This is the lowest percentage value up to which the user can zoom out the image in the RadImageEditor.

#### Parameters

#### Returns

`Number` The lower zoom limit. The default is 25.

### get_operationsToRedo

Gets the redo stack of operations

#### Parameters

#### Returns

`Array` The redo stack

### get_operationsToUndo

Gets the undo stack of operations

#### Parameters

#### Returns

`Array` The undo stack

### get_resizeHandle

Gets a reference to the resizing handle element, i.e. the element, by which the user resizes the ImageEditor's element

#### Parameters

#### Returns

`Object` A reference ot the resize handle

### get_rightZone

Gets a reference to the right docking zone of the ToolBar panel.

#### Parameters

#### Returns

`Object` The reference to the right docking zone of the ToolBar panel

### get_shortcuts

Gets shortcuts set to the ImageEditor control on the server.

#### Parameters

#### Returns

`Array` Two dimensional array containing the shortcuts of the ImageEditor set on the server.

### get_toolBarContainer

Gets a reference to the Toolbar's container DOM element

#### Parameters

#### Returns

`Object` The Toolbar

### get_toolBarMode

Gets the ToolBar Mode of the ImageEditor control.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.ToolBarMode` The ToolBar Mode of the ImageEditor control.

### get_toolBarPanel

Gets a reference to the ToolBar panel(the movable dock container).

#### Parameters

#### Returns

`Object` The reference to the ToolBar panel

### get_toolBarPosition

Gets the position of the RadImageEditor ToolBar.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.ToolBarPosition` The position of the RadImageEditor ToolBar.

### get_toolGroups

Gets a collection of the different tool groups in the Tools" panel

#### Parameters

#### Returns

`Array` The collection of the different tool groups in the Tools

### get_tools

Gets a dictionary of the present tools in the Tools" panel

#### Parameters

#### Returns

`Array` The dictionary of the present tools in the Tools

### get_toolsPanel

Gets a reference to the  Tools" panel

#### Parameters

#### Returns

`Object` The reference to the Tools

### get_top

Gets the top/y coordinate of the element's location

#### Parameters

#### Returns

`Number` The value of the top

### get_topZone

Gets a reference to the top docking zone of the ToolBar panel.

#### Parameters

#### Returns

`Object` The reference to the top docking zone of the ToolBar panel

### get_upperZoomBound

Gets the upper limit of the zoom level. This is the highest percentage value up to which the user can zoom in the image in the RadImageEditor.

#### Parameters

#### Returns

`Number` The upper zoom limit. The default is 400.

### get_viewport

Gets a reference to the DOM element holding the edited image

#### Parameters

#### Returns

`Object` The reference to the viewport

### get_width

Gets the width of the ImageEditor control's element

#### Parameters

#### Returns

`Number` The width of the control

### get_xmlHttpPanel

Gets a reference to the XmlHttpPanel that manages the loading of the dialogs

#### Parameters

#### Returns

`Telerik.Web.UI.RadXmlHttpPanel` A reference to the XmlHttpPanel

### getEditableImage

Gets a reference to the current EditableImage

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The current EditableImage

### getImage

Gets a reference to the image element being edited

#### Parameters

#### Returns

`Object` The reference to the DOM image element

### initCallback

Initializes an internal callback using a XmlHttpPanel

#### Parameters

##### target `String`

Data to send to the server

#### Returns

`None` 

### insertImage

Inserts image (clip art) into the editable image at the specified position

#### Parameters

##### x `Number`

The X coordinate of the image

##### y `Number`

The Y coordinate of the image

##### imgSrc `String`

The client URL of the image to insert.

##### operations `Array`

Array of operations to apply to the clip art image

#### Returns

`None` 

### openToolsPanel

Opens the tools panel with the current tool widget

#### Parameters

#### Returns

`None` 

### redo

Redoes the previously undone editing steps of the image

#### Parameters

##### depth `Number`

The depth

#### Returns

`None` 

### removeShortCut

Removes a shortcut with the specified name (keyword).

#### Parameters

##### shortcutName `String`

The shortcut name 

#### Returns

`None` 

### repaint

Redraws the ImageEditor

#### Parameters

#### Returns

`None` 

### resetChanges

Resets the changes to the current image and reverts it to the original one

#### Parameters

#### Returns

`None` 

### resizeImage

Resizes the current image. This operation changes the image.

#### Parameters

##### width `Number`

The width

##### height `Number`

The height

##### shouldUpdateUI `Boolean`

Flag whether the UI

#### Returns

`None` 

### rotateImage

Rotates the current image clockwise with the specified enum angle value

#### Parameters

##### rotation `Telerik.Web.UI.ImageEditor.Rotation`

Enum to determine the angle value. Only orthogonal values

##### shouldUpdateUI `Boolean`

Flag whether the UI

#### Returns

`None` 

### rotateLeft90

Rotates the current image 90 degrees counterclockwise, i.e. 270 degrees clockwise

#### Parameters

#### Returns

`None` 

### rotateRight90

Rotates the current image 90 degrees clockwise

#### Parameters

#### Returns

`None` 

### saveClientState

Stores the client-state changes made during the client-side existence of the control

#### Parameters

#### Returns

`None` 

### saveImageOnClient

Downloads the image through the browser's save dialog on the user's PC

#### Parameters

##### fileName `Object`

The name of the file

#### Returns

`None` 

### saveImageOnServer

Saves the image to the server in the same directory as the original image

#### Parameters

##### fileName `Object`

The name of the file

##### overwrite `Boolean`

Flag to allow an image with the same name to be overwritten

#### Returns

`None` 

### set_currentCommand

Sets the currently executing command

#### Parameters

##### value `String`

The name of the command

#### Returns

`None` 

### set_currentToolWidget

Sets the current tool widget

#### Parameters

##### value `Telerik.Web.UI.ImageEditor.ToolWidget`

The new current widget

#### Returns

`None` 

### set_enableResize

Enables/disables the resizing of the ImageEditor control

#### Parameters

##### value `Boolean`

Flag to enable

#### Returns

`None` 

### set_height

Sets the height of the ImageEditor control's element

#### Parameters

##### value `Number`

The value in pixels

#### Returns

`None` 

### set_width

Sets the width of the ImageEditor control's element

#### Parameters

##### value `Number`

The value in pixels

#### Returns

`None` 

### setShortCut

Sets a shortcut with the specified name (keyword) and shortcut string (the combination of keys). If the shortcut name exists, the existing shortcut is removed.

#### Parameters

##### shortcutName `String`

The shortcut name 

##### shortcutString `String`

The Keyboard combination for the shortcut. Letter case is ignored. 

#### Returns

`None` 

### setToggleState

(Un)checks a ToolBar button

#### Parameters

##### toolName `String`

The name of the button

##### value `Boolean`

The value of the state 

#### Returns

`None` 

### undo

Undoes the last editing steps of the image

#### Parameters

##### depth `Number`

The depth

#### Returns

`None` 

### zoomBestFit

Zooms the image to best fit in the viewport

#### Parameters

#### Returns

`None` 

### zoomImage

Zooms(scales) the image by the specified level in percents. This operation does not change the image

#### Parameters

##### zoomLevel `Number`

The level

##### shouldUpdateUI `Boolean`

Flag whether the UI

#### Returns

`None` 

### zoomIn

Zooms in the current image by 50%, i.e. if the current zoom level is 100, after zoom in the level will be 150

#### Parameters

#### Returns

`None` 

### zoomOut

Zooms out the current image by 50%, i.e. if the current zoom level is 100, after zoom in the level will be 50

#### Parameters

#### Returns

`None` 


## Events

### resizeStart

Adds a handler to the resizeStart event (OnClientResizeStart server-side property). This client-side event occurs when the user starts resizing the control by the resize handle.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### load

Occurs after the control is initialized.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### toolsDialogClosed

Occurs after the user has closed the dialog that loads the image editor tools.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.EventArgs`

The arguments of the ToolsDialogClosed event.


### imageChanged

Occurs after the user has edited the image (i.e. after it has been changed).

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.ImageChangeEventArgs`

The arguments of the ImageChanged event.

### resizeEnd

Occurs after the user has finished resizing the control by the resize handle.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Sys.EventArgs`

The arguments of the ResizeEnd event.

### saved

Occurs after the user has saved the image.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.SavedEventArgs`

The arguments of the Saved event. 
### saving

Occurs before the user has saved the image. The event can be cancelled - thus the saving can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.SavingEventArgs`

The arguments of the Saving event.

### commandExecuted

Occurs immediately after the command has been executed.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.EventArgs`

The arguments of the CommandExecuted event. 

### commandExecuting

Occurs immediately after the user has fired a command.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.CancelEventArgs`

The arguments of the CommandExecuting event.

### imageChanging

Occurs immediately before the user has edited the image on the client (i.e. before it is changed).

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.ImageChangeCancelEventArgs`

The arguments of the ImageChanging event.

### shortCutHit

Occurs when the user has pressed the shortcut combination on the keyboard. In order for the event to be fired the shortcut has to be registered with the RadImageEditor control. This event can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadImageEditor`

The RadImageEditor instance raised the event.

##### args `Telerik.Web.UI.ImageEditor.ShortCutCancelEventArgs`

The arguments of the ShortCutHit event.


