---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: imageeditor/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## 


>caption  Helper Methods 

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|$telerik.toImageEditor(object)|object||Casts an object to a RadImageEditor instance|
|$telerik.findImageEditor(id, parent)|string, DOM Element|object|Finds a RadImageEditor instance|




>caption  RadImageEditor Client-Side Methods 

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addTextToImage(x, y, text)|integer, integer, object||Adds text to the image in the specified position|
|applyChangesOnServer()|||Forces the changes made to the image to be applied on the server|
|applyFilter(filterName)|Telerik.Web.UI.ImageEditor.Filters.IPixelFilter||Executes the provided filter against the current editable image and adds the operation to the undo stack|
|changeImageOpacity(opacity, shouldUpdateUI)|integer, boolean||Changes the opacity of the image|
|closeToolsPanel()|||Closes the tools panel|
|editImageOnServer(commandName, commandText, commandArgument, callbackFunction)|string, string, string, function||Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event. The EditableImage can be retrieved from the event arguments, and edited accordingly|
|executeCommand(commandName)|string||Executes an ImageEditor's command and opens the corresponding dialog. Does not fire the client-side events.|
|fire(commandName, args)|string, object||Fires an ImageEditor's command with the full set of client-side events|
|flipHorizontal()|||Flips the image in the Horizontal direction|
|flipImage(flipDirection, shouldUpdateUI, forceChanges)|enum, boolean, boolean||Flips the image in a horizontal or vertical direction|
|flipVertical()|||Flips the image in the Vertical direction|
|get_bottomZone()||object|Gets a reference to the bottom docking zone of the ToolBar panel|
|get_currentCommand()||string|Gets the currently executing command|
|get_currentToolWidget()||object|Gets the current tool widget, i.e. the object holding the dialog's functionality|
|get_enableResize()||boolean|Gets the flag to indicate whether the resizing of the ImageEditor control is enabled|
|get_formDecorator()||object|Gets the FormDecorator, used in decorating the dialog's UI|
|get_height()||integer|Gets the height of the ImageEditor control's element|
|get_isRedoAvailable()||boolean|Gets a flag whether the a redo command is available in the redo stack|
|get_isUndoAvailable()||boolean|Gets a flag whether the a undo command is available in the undo stack|
|get_left()||integer|Gets the left/x coordinate of the element's location|
|get_leftZone()||object|Gets a reference to the left docking zone of the ToolBar panel|
|get_location(forceCalculation)|boolean|Sys.UI.Point|Gets the location of the ImageEditor control's element|
|get_lowerZoomBound()||integer|Gets the upper limit of the zoom level. This is the highest percentage value up to which the user can zoom in the image in the RadImageEditor|
|get_operationsToRedo()||Array|Gets the redo stack of operations|
|get_operationsToUndo()||Array|Gets the undo stack of operations|
|get_resizeHandle()||DOM Element|Gets a reference to the resizing handle element, i.e. the element, by which the user resizes the ImageEditor's element|
|get_rightZone()||object|Gets a reference to the bottom docking zone of the ToolBar panel|
|get_shortcuts()||Array|Gets shortcuts set to the ImageEditor control on the server|
|get_toolBarContainer()||DOM Element|Gets a reference to the Toolbar's container DOM element|
|get_toolBarMode()||Telerik.Web.UI.ImageEditor.ToolBarMode|Gets the ToolBar Mode of the ImageEditor control|
|get_toolBarPanel()||object|Gets a reference to the ToolBar panel(the movable dock container)|
|get_toolBarPosition()||Telerik.Web.UI.ImageEditor.ToolBarPosition|Gets the position of the RadImageEditor ToolBar|
|get_toolGroups()||Array|Gets a collection of the different tool groups in the Tools' panel|
|get_tools()||Object|Gets a dictionary of the present tools in the Tools' panel|
|get_toolsPanel()||DOM Element|Gets a reference to theTools' panel|
|get_top()||integer|Gets the top/y coordinate of the element's location|
|get_topZone()||object|Gets a reference to the top docking zone of the ToolBar panel|
|get_upperZoomBound()||integer|Gets the upper limit of the zoom level. This is the highest percentage value up to which the user can zoom in the image in the RadImageEditor|
|get_viewport()||DOM Element|Gets a reference to the DOM element holding the edited image|
|get_width()||integer|Gets the width of the ImageEditor control's element|
|get_xmlHttpPanel()||object|Gets a reference to the XmlHttpPanel that manages the loading of the dialogs|
|getEditableImage()||object|Gets a reference to the current EditableImage|
|getImage()||DOM Element|Gets a reference to the image element being edited|
|initCallback(target)|string||Initializes an internal callback using a XmlHttpPanel|
|insertImage(x, y, imgSrc, operations)|integer, integer, string, array||Inserts image (clip art) into the editable image at the specified position|
|openToolsPanel()|||Opens the tools panel with the current tool widget|
|redo(depth)|integer||Redoes the previously undone editing steps of the image|
|removeShortCut(shortcutName)|string||Removes a shortcut with the specified name (keyword)|
|repaint()|||Redraws the ImageEditor|
|resetChanges()|||Resets the changes to the current image and reverts it to the original one|
|resizeImage(width, height, shouldUpdateUI)|integer, integer, boolean||Resizes the current image. This operation changes the image.|
|rotateImage(rotation, shouldUpdateUI)|enum, boolean||Rotates the current image clockwise with the specified enum angle value|
|rotateLeft90()|||Rotates the current image 90 degrees counterclockwise, i.e. 270 degrees clockwise|
|rotateRight90()|||Rotates the current image 90 degrees clockwise|
|saveClientState()|||Stores the client-state changes made during the client-side existance of the control|
|saveImageOnClient(fileName)|object||Downloads the image through the browser's save dialog on the user's PC|
|saveImageOnServer(fileName, overwrite)|object, boolean||Saves the image to the server in the same directory as the original image|
|set_currentCommand(value)|string||Sets the currently executing command|
|set_currentToolWidget(value)|enum||Sets the current tool widget|
|set_enableResize(value)|boolean||Enables/disables the resizing of the ImageEditor control|
|set_height(value)|integer||Sets the height of the ImageEditor control's element|
|set_width(value)|integer||Sets the width of the ImageEditor control's element|
|setShortCut(shortcutName, shortcutString)||string, string|Sets a shortcut with the specified name (keyword) and shortcut string (the combination of keys). If the shortcut name exists, the existing shortcut is removed|
|setToggleState(toolName, value)|string, boolean||(Un)checks a ToolBar button|
|undo(depth)|integer||Undoes the last editing steps of the image|
|zoomBestFit()|||Zooms the image to best fit in the viewport|
|zoomImage(zoomLevel, shouldUpdateUI)|integer, boolean||Zooms(scales) the image by the specified level in percents. This operation does not change the image|
|zoomIn()|||Zooms in the current image by 50%, i.e. if the current zoom level is 100, after zoom in the level will be 150|
|zoomOut()|||Zooms out the current image by 50%, i.e. if the current zoom level is 100, after zoom in the level will be 50|




>caption EditableImage Client-Side Methods	

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add_imageReload(callback)|Function||Adds another event handler to the image's load event|
|addText(x, y, text)|integer, integer, Telerik.Web.UI.ImageEditor.ImageText||Add text to the image|
|applyChangesOnServer(saveImageServer, fileName, call_saveOnClient, overwrite)|boolean, object, boolean, object||Initiates a callback to the server and performs operations (saving image, cropping and etc.) to the image on the server|
|changeOpacity(opacity)|integer||Changes the opacity of the image|
|crop(rectangle)|Sys.UI.Bounds||Crops the image by the specified rectangular bounds|
|doServerOperation(commandName, commandText, commandArgument, callbackFunction)|string, string, string, function||Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event|
|flip(flipDirection, clearPrevFlipDirection)|enum, boolean||Flips the image in specified direction|
|get_flipDirection()||integer|Gets the flip direction of the editable image|
|get_height()||enum|Gets the current height of the image. Note that value may be different that the height of the image DOM element (e.g. when zoomed)|
|get_opacity()||integer|Gets the current opacity of the editable image|
|get_rotation()||enum|Gets the rotation enum value of the editable image|
|get_rotationAngle()||integer|Gets the rotation angel of the editable image|
|get_serverUrl()||string|Gets the src of the original image, i.e. before the server operations|
|get_url()||string|Gets the src of the edited image|
|get_width()||integer|Gets the current width of the image. Note that value may be different that the width of the image DOM element (e.g when zoomed)|
|get_zoomLevel()||integer|Gets the current zoom level of the image|
|getImage()||object|Get the image being edited|
|insertImage(x, y, imgSrc, operations)|integer, integer, string, array||Inserts image (clip art) into the editable image at the specified position|
|remove_imageReload(callback)|Function||Remove a previously registered event handler|
|reset(imageUrl)|string||Resets the image to the provided image src|
|resize(width, height)|integer, integer||Resizes the image according to the specified dimensions|
|rotate(rotationDirection)|enum||Rotates the image according to the rotation direction specified|
|saveOnClient(fileName)|object||Invokes the download of the edited image to the client's machine|
|set_serverUrl(value)|string||Sets the src of the original image|
|zoom(zoomLevel, forceZoom)|integer, boolean||Zooms(scales) the image by the specified level in percentages. This operation does not change the image|
|zoomBestFit(width, height)|integer, integer||Zooms the image to best fit in the viewport|




>caption EditableCanvas Client-Side Methods	

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addText(x, y, text)|integer, integer, Telerik.Web.UI.ImageEditor.ImageText||Add text to the image|
|applyChangesOnServer(saveImageServer, fileName, call_saveOnClient, overwrite)|boolean, object, boolean, object||Initiates a callback to the server and performs operations (saving image, cropping and etc.) to the image on the server|
|applyFilter(filter)|Telerik.Web.UI.ImageEditor.Filters.IPixelFilter||Creates an image operation which is applied against the current editable image and adds the operation to the undo stack|
|changeOpacity(opacity)|integer||Changes the opacity of the image|
|crop(rectangle)|Sys.UI.Bounds||Crops the image by the specified rectangular bounds|
|doServerOperation(commandName, commandText, commandArgument, callbackFunction)|string, string, string, function||Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event|
|executeFilter(filter)|Telerik.Web.UI.ImageEditor.Filters.IPixelFilter||Executes the provided filter against the current editable image|
|flip(flipDirection, clearPrevFlipDirection)|enum, boolean||Flips the image in specified direction|
|forceCurrentZoom()|||Ensures that the Zoom level is applied to the image|
|get_flipDirection()||integer|Gets the flip direction of the editable canvas|
|get_height()||enum|Gets the current height of the image. Note that value may be different that the height of the image DOM element (e.g. when zoomed)|
|get_opacity()||integer|Gets the current opacity of the editable canvas|
|get_rotation()||enum|Gets the rotation enum value of the editable canvas|
|get_rotationAngle()||integer|Gets the rotation angel of the editable canvas|
|get_width()||integer|Gets the current width of the image. Note that value may be different that the width of the image DOM element (e.g when zoomed)|
|getBase64(mimeType)|string|string|Returns the Base64 representation of the loaded image|
|getCanvas()||DOM Element|Gets the element, onto which the editing will be done|
|getCanvasContext()||object|Returns the 2d Context of the canvas element|
|getDataUrl(mimeType)|string|string|Returns a URL which could be used to visualize the image directly. The image is represented in Base64 format|
|getImageDataAll()||object|Returns an ImageData object containing the image data for the given rectangle of the bitmap|
|insertImage(x, y, value, operationsToApply)|integer, integer, string, array||Inserts image (clip art) into the editable canvas at the specified position|
|isImageLoaded()||boolean|Gets a flag whether the image is loaded|
|isImageLoading(image)|DOM Element|boolean|Gets a flag whether the image is loading|
|reset(imageUrl)|string||Resets the image to the provided image src|
|resize(width, height, imgOperation)|integer, integer, object||Resizes the image according to the specified dimensions|
|rotate(rotationDirection, angle, imgOperation)|enum, integer, object||Rotates the image according to the rotation direction specified|
|saveOnClient(fileName)|object||Invokes the download of the edited image to the client's machine|
|set_flipDirection(value)|enum||Sets the flip direction to the editable canvas|
|zoom(zoomLevel, forceZoom)|integer, boolean||Zooms(scales) the image by the specified level in percentages. This operation does not change the image|
