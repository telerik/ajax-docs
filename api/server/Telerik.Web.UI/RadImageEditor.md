---
title: Telerik.Web.UI.RadImageEditor
page_title: Telerik.Web.UI.RadImageEditor
description: Telerik.Web.UI.RadImageEditor
---

# Telerik.Web.UI.RadImageEditor

Telerik Image Editor control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadImageEditor : INamingContainer

## Properties

###  DownloadKey `String`

Key used for downloading the image on the client from the HttpHandler.

###  Language `String`

Gets or sets a string containing the localization language for the RadImageEditor UI

###  IsInRadEditor `Boolean`

Gets or sets a bool value that indicates whether the RadImageEditor is used in the RadEditor.

###  UndoStack `ImageOperationCollection`

The collection of commands that are applied on the client, and need to be applied on the server.

###  CurrentImageKey `String`

Gets the unique identifier of the current EditableImage.

###  ImageStorageKey `String`

GUID key used to get all the image keys from the CacheProvider, related with the current instance of the ImageEditor control.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ImageUrl `String`

Gets or sets the location of an image to edit within the Image editor

###  AlternateText `String`

Gets or sets the alternate text displayed in the edited image when the image is unavailable.

###  DescriptionUrl `String`

Gets or sets the location to a detailed description for the edited image.

###  Tools `ImageEditorToolGroupCollection`

Gets the collection containing RadImageEditor tools.

###  ToolsFile `ImageEditorToolGroupCollection`

Gets or sets a string containing the path to the XML toolbar configuration file.

#### Remarks
Use "~" (tilde) as a substitution of the web-application's root
            	directory.You can also provide this property with an absolute URL which returns a valid XML
            	toolbar configuration file, e.g. http://MyServer/MyApplication/Tools/MyToolsFile.aspx

###  ActiveCommand `String`

Gets the name of the last (active) command executed by the ImageEditor.

###  HttpHandlerUrl `String`

Specifies the URL of the HTTPHandler that serves the cached image.

#### Remarks
The HTTPHandler should either be registered in the application configuration
            		file, or a file with the specified name should exist at the location, which
            		HttpHandlerUrl points to.
            	
            		If a file is to serve the files, it should inherit the class Telerik.Web.UI.WebResource

###  ImageCacheStorageLocation `ImageStorage`

Specifies where the cached imaged from the operation will be stored
            When the image is stored in the session the HttpHandler 
            definition (in the web.config file) must be changed from type="Telerik.Web.UI.WebResource" to 
            type="Telerik.Web.UI.WebResourceSession" so that the image can be retrieved from the Session.

###  ToolsLoadPanelType `ImageEditorToolGroupCollection`

The panel type to use for loading the tools dialogs' content

###  Localization `ImageEditorStrings`

The Localization property specifies the strings that appear in the runtime user interface of RadImageEditor.

###  LocalizationPath `ImageEditorStrings`

Gets or sets a value indicating where the image editor will look for its .resx localization files.
            By default these files should be in the App_GlobalResources folder. However, if you cannot put
            the resource files in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource files.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the image editor localization files from any location in the 
            web application.

###  StatusBarMode `StatusBarMode`

Gets or sets a value that controls the behavior of the RadImageEditor's StatusBar.

###  EnableResize `Boolean`

Gets or sets a bool value that indicates whether the control can be resized.

###  Height `Unit`

Gets or sets the height of the RadImageEditor control

###  Width `Unit`

Gets or sets the width of the RadImageEditor control

###  AllowedSavingLocation `AllowedSavingLocation`

Gets or sets a value that indicates where the user is allowed to save the image. The options available are:
            "Client", "Server" and "ClientAndServer". The default is ClientAndServer.

###  ToolBarMode `ToolBarMode`

Gets or sets value that controls the behavior of the Toolbar. The options available are:
            "Default" and "Docked".

###  ToolBarPosition `ToolBarPosition`

Gets or sets the position of the Toolbar relative to the edited content (content area).

###  ImageManager `ImageManagerConfiguration`

Configures the ImageEditor's ContentProvider.

###  EditableImageSettings `EditableImageConfiguration`

Specify settings related to the EditableImage behavior.

###  UndoLimit `Int32`

Gets or sets the maximal number of operations that will be stored in the Undo stack.
            Zero (0) is the default value, meaning there is no limit on the number of operations stored.

###  ShowAjaxLoadingPanel `Boolean`

Gets or sets a bool value that indicates whether RadAjaxLoadingPanel will be shown over the tools panel.

###  ExternalDialogsPath `String`

Gets or sets a value indicating where the image editor will look for its dialogs.

#### Remarks
If specified, the ExternalDialogsPath
            		property will allow you to customize and load the image editor dialogs from normal ASCX files.

###  LowerZoomBound `Int32`

Gets or sets the lower limit of the zoom level. This is the lowest percentage value up to which the user can zoom out the image in the RadImageEditor.
            The default is 25%.

###  UpperZoomBound `Int32`

Gets or sets the upper limit of the zoom level. This is the highest percentage value up to which the user can zoom in the image in the RadImageEditor.
            The default is 400%.

###  CanvasMode `CanvasMode`

Gets or sets a value that indicates whether or not the canvas mode of the ImageEditor will be enabled.

###  OnClientLoad `String`

The name of the javascript function called when the control loads in the browser.

###  OnClientImageLoad `String`

The name of the javascript function called when the image in the editor loads in the browser.

###  OnClientResizeStart `String`

The name of the javascript function called when the resizing is started on the control.

###  OnClientResizeEnd `String`

The name of the javascript function called when the resizing on the control ends.

###  OnClientCommandExecuting `String`

The name of the javascript function called when a command is firing on the RadImageEditor. 
            This event is triggered when the ImageEditor's ToolBar buttons are clicked or the RadImageEditor.fire(commandName) method is invoked.
            The event can be canceled.

###  OnClientCommandExecuted `String`

The name of the javascript function called when a command is fired on the RadImageEditor.
            This event is triggered when the ImageEditor's ToolBar buttons are clicked or the RadImageEditor.fire(commandName) method is invoked.

###  OnClientDialogLoaded `String`

The name of the javascript function called when a tool widget dialog is loaded from the server.

###  OnClientImageChanging `String`

The name of the javascript function called before a change is applied on the image edited. 
            The event can be canceled.

###  OnClientImageChanged `String`

The name of the javascript function called after a change is applied on the image edited.

###  OnClientSaving `String`

The name of the javascript function called before the image is saved on the client or the server.
            The event can be canceled.

###  OnClientSaved `String`

The name of the javascript function called after the image is saved on the client or the server.

###  OnClientToolsDialogClosed `ImageEditorToolGroupCollection`

The name of the javascript function called when the tool's panel dialog is closed.

###  OnClientShortCutHit `String`

The name of the javascript function called, when a given Keyboard ShortCut of the RadImageEditor was hit.
            The event can be cancelled.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  IsBuiltInCommand

Returns a bool value that indicates whether the command is built-in in the RadImageEditor, or is a custom one.

#### Parameters

#### commandName `System.String`

The name of the command to check.

#### Returns

`System.Boolean` True - if the command is built-in; False - if the command is custom.

###  SwitchToolBarPosition

Goes through each value of the ToolBarPosition.

#### Returns

`System.Void` 

###  TryGetEditableImageFromSource

Tries to retrieve/load the image from the following sources:
            1. From the ImageLoading event args;
            2. From the FileBrowserContentProvider
            3. From the ICacheImageProvider

#### Parameters

#### alwaysCreateEditableImage `System.Boolean`

Pass FALSE if you want to avoid creating the EditableImage object when the image is specified through the ImageUrl.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The editable image object retrieved from the source.

###  GetImageFromContentProvider

Retrieves an EditableImage from the specified FileBrowserContentProvider.

#### Parameters

#### imageUrl `System.String`

The path to the image.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The editable image

###  StoreEditableImage

Invokes the Store method of the current ICacheImageProvider and sets the CurrentImageUrl and CurrentImageKey properties.

#### Parameters

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The editable image to store

#### Returns

`System.String` The key returned by the ICacheImageProvider.Store method.

###  StoreEditableImage

Invokes the Store method of the current ICacheImageProvider and sets the CurrentImageUrl and CurrentImageKey properties.

#### Parameters

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The editable image to store. If the image is null it would not be stored.

#### provider `Telerik.Web.UI.ImageEditor.ICacheImageProvider`

The ICacheImageProvider to use for storing the image.

#### Returns

`System.String` The key returned by the ICacheImageProvider.Store method. If the EditableImage is null returns string.Empty.

###  SaveEditableImage

Saves the EditableImage on the FileSystem.

#### Parameters

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The EditableImage to save.

#### provider `Telerik.Web.UI.ImageEditor.ICacheImageProvider`

The ICacheImageProvider to use for saving

#### imageName `System.String`

The file name to use for the image. If string.Empty the existing URL will be used

#### overwrite `System.Boolean`

The flag indicating whether the existing file should be overwritten.

#### Returns

`System.String` Returns string.Empty if the image was saved successfully, otherwise a string indicating the problem.

###  SaveEditableImage

Saves the EditableImage on the FileSystem.

#### Parameters

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The EditableImage to save.

#### provider `Telerik.Web.UI.ImageEditor.ICacheImageProvider`

The ICacheImageProvider to use for saving

#### imageName `System.String`

The file name to use for the image. If string.Empty the existing URL will be used

#### overwrite `System.Boolean`

The flag indicating whether the existing file should be overwritten.

#### preferImageFormatOverUrlExtension `System.Boolean`

Defines if the extension of the image should be taken from the image format and not by parsing the URL

#### Returns

`System.String` Returns string.Empty if the image was saved successfully, otherwise a string indicating the problem.

###  SaveImage

Saves the image using the FileBrowserContentProvider.

#### Parameters

#### img `System.Drawing.Bitmap`

The image to save.

#### originalImageFormat `System.Drawing.Imaging.ImageFormat`

The image format to use when saving the image.

#### overwrite `System.Boolean`

Should we overwrite if the image exists. (true means to overwrite)

#### imagePath `System.String`

The relative image path.

#### Returns

`System.String` A message indicating whether the saving was successful. Empty string means the saving was successful.

###  CreateToolbar

Creates the ImageEditor's set of tools.

#### Returns

`System.Void` 

###  GetRuntimeSkin

Finds out the actual skin that is applied to the controls.

#### Parameters

#### forceCalculation `System.Boolean`

true - always look for the skin, false - return the currently stored skin

#### Returns

`System.String` The actual skin applied to the ImageEditor control.

###  GetWebResourceUrl

Calculates the actual client url of the image applied to the tool.

#### Parameters

#### skin `System.String`

The current skin of the control.

#### Returns

`System.String` The client url of the embedded web resource.

###  CreateToolsPanel

Creates a RadDock control that serves as a Tools container for the controls that edit the Image.

#### Returns

`System.Void` 

###  CreateXmlHttpPanel

Creates an XmlHttpPanel control which loads the Tool's specific controls.
            The XmlHttpPanel is added to the Dock Tools panel.

#### Returns

`System.Void` 

###  CreateAjaxPanelControls

Creates an UpdatePanel and adds it to the ContentContainer of the Dock Tools panel.

#### Returns

`System.Void` 

###  UpdateEditableImageHttpPanel_MaxJsonLength

Update the MaxJsonLength value of the editable image's XmlHttpPanel

#### Returns

`System.Void` 

###  CreateAjaxLoadingPanel

Creates RadAjaxLoadingPanel to show over the dock while its updating.

#### Returns

`System.Void` 

###  CreateToolbarDock

Creates RadDock that holds the toolbar.

#### Returns

`System.Void` 

###  CreateTopLeftZones

Create Top and Left ToolBar zones.

#### Returns

`System.Void` 

###  CreateRightBottomZones

Create Right and Bottom ToolBar zones.

#### Returns

`System.Void` 

###  HandleMetroTouchSkin

Applies settings to the ImageEditor when the MetroTouch Skin is used.

#### Parameters

#### isMetroTouch `System.Boolean`

Bool value indicating whether the MetroTouch Skin is used.

#### Returns

`System.Void` 

###  LoadToolsFile

Loads ImageEditor tools from the passed XmlDocument.

#### Parameters

#### doc `System.Xml.XmlDocument`

The XmlDocument from which the tools are loaded.

#### Returns

`System.Void` 

###  EnsureToolsFileLoaded

Forces the ToolsFile to be parsed and loaded at any given time.

#### Returns

`System.Void` 

###  LoadViewState

Restores view-state information from a previous request that was saved with the System.Web.UI.WebControls.WebControl.SaveViewState() method.

#### Parameters

#### state `System.Object`

An object that represents the control state to restore.

#### Returns

`System.Void` 

###  SaveViewState

Saves any state that was modified after the System.Web.UI.WebControls.Style.TrackViewState() method was invoked.

#### Returns

`System.Object` An object that contains the current view state of the control; otherwise, if there is no view state associated with the control, null.

###  TrackViewState

Causes the control to track changes to its view state so they can be stored in the object's System.Web.UI.Control.ViewState property.

#### Returns

`System.Void` 

###  ApplyImageOperations

Applies the IImageOperation(s) to the current EditableImage in the order they appear in the operations collection.

#### Parameters

#### operations `System.Collections.Generic.IEnumerable{Telerik.Web.UI.ImageEditor.IImageOperation}`

Collection of IImageOperation(s) to apply.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The modified EditableImage object.

###  ApplyImageOperations

Applies the IImageOperation(s) to the passed EditableImage in the order they appear in the operations collection.

#### Parameters

#### operations `System.Collections.Generic.IEnumerable{Telerik.Web.UI.ImageEditor.IImageOperation}`

Collection of IImageOperation(s) to apply.

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The EditableImage to apply the operations to.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The modified EditableImage object.

###  ExtractFileNameFromImageUrl

Extracts the file name from the value of the ImageUrl property.

#### Returns

`System.String` The file name without the extension.

###  GetImageFormatName

Gets the format of the image as a string. The format may be different from the actual filename extension.

#### Returns

`System.String` The format of the image as a string

###  SaveEditableImage

Applies the current pending changes on the current RadImageEditor's EditableImage, saves the EditableImage using the ContentProvider's SaveImage method, and invokes the ImageSaving event.This method requires AllowedSavingLocation propety of RadImageEditor to be set to "Server" or "ClientAndServer".

#### Parameters

#### imageName `System.String`

The name to use if the image is saved on the FileSystem. Use string.Empty to use the existing name.

#### overwrite `System.Boolean`

Bool value indicating whether the existing image in the ContentProvider should be overwritten.

#### Returns

`System.String` Returns a string message that indicates whether the saving was successful. Empty string means the saving was successful.

###  SaveEditableImage

Applies the current pending changes on the current RadImageEditor's EditableImage, saves the EditableImage using the ContentProvider's SaveImage method, and invokes the ImageSaving event.This method requires AllowedSavingLocation propety of RadImageEditor to be set to "Server" or "ClientAndServer".

#### Parameters

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The EditableImage to save.

#### imageName `System.String`

The name to use if the image is saved on the FileSystem. Use string.Empty to use the existing name.

#### overwrite `System.Boolean`

Bool value indicating whether the existing image in the ContentProvider should be overwritten.

#### Returns

`System.String` Returns a string message that indicates whether the saving was successful. Empty string means the saving was successful.

###  ResetChanges

Clears all the changes currently applied to the image, and restores the original image.
            This method should be invoked before PreRender so that the control can request the original image.

#### Returns

`System.Void` 

###  GetEditableImage

Gets a reference to the Telerik.Web.UI.ImageEditor.EditableImage that is currently associated with the ImageEditor control.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The Telerik.Web.UI.ImageEditor.EditableImage currently associated with

###  RegisterCustomCommand

Registers a custom command in case it is missing as a button from the toolbar.

#### Remarks
This method should be called before PreRender

#### Parameters

#### commandName `System.String`

The name of the command

#### Returns

`System.Void` 

###  GetICacheImageProviderType

Gets the  of the ICacheImageProvider used.

#### Parameters

#### imageProviderTypeName `System.String`

The fully qualified name of the provider used.

#### Returns

`System.Type` Returns the  of the

###  OnImageChanged

Raises the ImageChanged event and passes the event related data.

#### Parameters

#### image `Telerik.Web.UI.ImageEditor.EditableImage`

The editable image that is being modified.

#### Returns

`System.Void` 

###  RaiseImageChangedEvent

Calls the event handler methods of the ImageChanged event.

#### Parameters

#### image `Telerik.Web.UI.ImageEditor.EditableImage`

The editable image that is being modified.

#### eventKey `System.Object`

The key used to find the event handler method handling the event.

#### Returns

`System.Void` 

###  OnDialogLoading

Raises the DialogLoading event and passes the event related data.

#### Parameters

#### dialogName `System.String`

The name of the dialog that is being loaded.

#### panel `System.Web.UI.Control`

The panel to which the dialog control loaded will be added.

#### Returns

`System.Void` 

###  RaiseDialogLoadingEvent

Calls the event handler methods of the DialogLoading event.

#### Parameters

#### dialogName `System.String`

The name of the dialog that is being loaded.

#### panel `System.Web.UI.Control`

The panel to which the dialog control loaded will be added.

#### eventKey `System.Object`

The key used to find the event handler method handling the event.

#### Returns

`System.Void` 

###  OnImageSaving

Raises the ImageSaving event and passes the event related data.

#### Parameters

#### savingEventArgs `Telerik.Web.UI.ImageEditorSavingEventArgs`

The event arguments passed to the event handler methods.

#### Returns

`System.Void` 

###  RaiseImageSavingEvent

Calls the event handler methods of the ImageSaving event.

#### Parameters

#### savingEventArgs `Telerik.Web.UI.ImageEditorSavingEventArgs`

The event arguments that will be passed to the event handling methods.

#### eventKey `System.Object`

The key used to find the event handler method handling the event.

#### Returns

`System.Void` 

###  OnImageLoading

Raises the ImageLoading event and passes the event related data.

#### Parameters

#### loadingEventArgs `Telerik.Web.UI.ImageEditorLoadingEventArgs`

The event arguments passed to the event handler methods.

#### Returns

`System.Void` 

###  RaiseImageLoadingEvent

Calls the event handler methods of the ImageLoading event.

#### Parameters

#### loadingEventArgs `Telerik.Web.UI.ImageEditorLoadingEventArgs`

The event arguments that will be passed to the event handling methods.

#### eventKey `System.Object`

The key used to find the event handler method handling the event.

#### Returns

`System.Void` 

###  OnImageEditing

Raises the ImageEditing event and passes the event related data.

#### Parameters

#### editingEventArgs `Telerik.Web.UI.ImageEditorEditingEventArgs`

The event arguments passed to the event handler methods.

#### Returns

`System.Void` 

###  RaiseImageEditingEvent

Calls the event handler methods of the ImageEditing event.

#### Parameters

#### editingEventArgs `Telerik.Web.UI.ImageEditorEditingEventArgs`

The event arguments that will be passed to the event handling methods.

#### eventKey `System.Object`

The key used to find the event handler method handling the event.

#### Returns

`System.Void` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

