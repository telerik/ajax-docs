---
title: Overview
page_title: Server-side Programming Overview | RadImageEditor for ASP.NET AJAX Documentation
description: Overview
slug: imageeditor/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## RadImageEditor Public Methods


>caption Methods

| Name | Description |
| ------ | ------ |
| __ApplyImageOperations__ |Applies the IImageOperation(s) to the current EditableImage in the order they appear in the operations collection. Takes a collection of IImageOperation(s) to apply as an argument. Can optionally take the EditableImage to apply the operations to. Returns the modified EditableImage object.|
| __ExtractFileNameFromImageUrl__ |Extracts the file name from the value of the ImageUrl property. Returns the file name without the extension.|
| __EnsureToolsFileLoaded__ |Forces the ToolsFile to be parsed and loaded at any given time.|
| __GetEditableImage__ |Gets a reference to the Telerik.Web.UI.ImageEditor. __EditableImage__ that is currently associated with the ImageEditor control. Returns the associated Telerik.Web.UI.ImageEditor. __EditableImage__ .|
| __IsBuiltInCommand__ |Returns a bool value that indicates whether the command is built-in in the RadImageEditor, or is a custom one.|
| __LoadToolsFile__ |Loads ImageEditor tools from the passed XmlDocument. Takes an object of type XmlDocument as an argument.|
| __RegisterCustomCommand__ |Registers a custom command in case it is missing as a button from the toolbar. The name of the command as a parameter (string). This method should be called before PreRender.|
| __ResetChanges__ |Clears all the changes currently applied to the image, and restores the original image. This method should be invoked before PreRender so that the control can request the original image.|
| __SaveEditableImage__ |Applies the current pending changes on the current RadImageEditor's EditableImage or on a specific EditableImage, saves the EditableImage using the ContentProvider's SaveImage method, and invokes the ImageSaving event. Takes as arguments the name to use if the image is saved on the FileSystem (Use string and leave empty if you want to keep the existing name) and a bool value indicating whether the existing image in the ContentProvider should be overwritten. Can optionally take the EditableImage to save as first argument. Returns a string message that indicates whether the saving was successful. Empty string means the saving was successful.|

## RadImageEditor Public Properties


>caption Properties

| Name | Description |
| ------ | ------ |
| __ActiveCommand__ |Gets the name of the last (active) command executed by the ImageEditor.|
| __AllowedSavingLocation__ |Gets or sets a value that indicates where the user is allowed to save the image. The options available are: "Client", "Server" and "ClientAndServer". The default is ClientAndServer.|
| __AlternateText__ |Gets or sets the alternate text displayed in the edited image when the image is unavailable.|
| __CanvasMode__ |Gets or sets a value that indicates whether or not the canvas mode of the ImageEditor will be enabled.|
| __CurrentImageKey__ |Gets the unique identifier of the current EditableImage.|
| __CurrentImageUrl__ |Gets or sets the location of the currently edited image within the Image editor.|
| __DescriptionUrl__ |Gets or sets the location to a detailed description for the edited image.|
| __EnableResize__ |Gets or sets a bool value that indicates whether the control can be resized.|
| __ExternalDialogsPath__ |Gets or sets a value indicating where the image editor will look for its dialogs.The required argument is a relative path to the dialogs location,	for example: "~/controls/RadImageEditorDialogs/". If specified, the __ExternalDialogsPath__ property allows the image editordialogs to be customized and loaded from normal ASCX files.|
| __Height__ |Gets or sets the height of the RadImageEditor control.|
| __HttpHandlerUrl__ |Specifies the URL of the HTTPHandler that serves the cached image. The HTTPHandler should either be registered in the application configuration file, or a file with the specified name should exist at the location, which HttpHandlerUrl points to. If a file is to serve the files, it should inherit the class Telerik.Web.UI.WebResource.|
| __ImageCacheStorageLocation__ |Specifies where the cached imaged from the operation will be stored. When the image is stored in the session the HttpHandler definition (in the web.config file) must be changed from Telerik.Web.UI.WebResource to Telerik.Web.UI.WebResourceSession so that the image can be retrieved from the Session|
| __ImageManager__ |Configures the ImageEditor's ContentProvider.|
| __ImageStorageKey__ |GUID key used to get all the image keys from the CacheProvider, related with the current instance of the ImageEditor control.|
| __ImageUrl__ |Gets or sets the location of an image to edit within the image editor.|
| __Language__ |Gets or sets a string containing the localization language for the RadImageEditor UI.|
| __Localization__ |The Localization property specifies the strings that appear in the runtime user interface of RadImageEditor.|
| __LocalizationPath__ |Gets or sets a value indicating where the image editor will look for its .resx localization files. By default these files should be in the App_GlobalResources folder. However, if you cannot put the resource files in the default location or .resx files compilation is disabled for some reason (e.g. in a DotNetNuke environment), this property should be set to the location of the resource files. The required argument is a relative path to the dialogs location. For example: "~/controls/RadEditorResources/". If specified, the __LocalizationPath__ property will allow you to load the image editor localization files from any location in the web application.|
| __LowerZoomBound__ |Gets or sets the lower limit of the zoom level. This is the lowest percentage value up to which the user can zoom out the image in the RadImageEditor.The default value is 25%.|
| __ShowAjaxLoadingPanel__ |Gets or sets a bool value that indicates whether RadAjaxLoadingPanel will be shown over the tools panel.|
| __Skin__ |Sets the skin the control will be using|
| __StatusBarMode__ |Gets or sets a value that controls the behavior of the RadImageEditor's StatusBar|
| __ToolBarMode__ |Gets or sets value that controls the behavior of the Toolbar. The options available are: "Default" and "Docked".|
| __ToolBarPosition__ |Gets or sets the position of the Toolbar relative to the edited content (content area).|
| __Tools__ |Gets the collection containing RadImageEditor tools.|
| __ToolsFile__ |Gets or sets a string containing the path to the XML toolbar configuration file. Use "~" (tilde) as a substitution of the web-application's root directory. You can also provide this property with an absolute URL which returns a valid XML toolbar configuration file, e.g.[http://MyServer/MyApplication/Tools/MyToolsFile.aspx](http://MyServer/MyApplication/Tools/MyToolsFile.aspx)|
| __ToolsLoadPanelType__ |The panel type to use for loading the tools dialogs' content.|
| __UndoLimit__ |Gets or sets the maximal number of operations that will be stored in the Undo stack. Zero (0) is the default value, meaning there is no limit on the number of operations stored.|
| __UndoStack__ |The collection of commands that are applied on the client, and need to be applied on the server.|
| __UpperZoomBound__ |Gets or sets the upper limit of the zoom level. This is the highest percentage value up to which the user can zoom in the image in the RadImageEditor. The default value is 400%.|
| __Width__ |Gets or sets the width of the RadImageEditor control.|

## RadImageEditor Properties For Setting Client-Side Event Handlers


>caption Client-Side Event Handlers

| Name | Description |
| ------ | ------ |
| __OnClientLoad__ |The name of the javascript function called when the control loads in the browser.|
| __OnClientResizeStart__ |The name of the javascript function called when the resizing is started on the control.|
| __OnClientResizeEnd__ |The name of the javascript function called when the resizing on the control ends.|
| __OnClientCommandExecuting__ |The name of the javascript function called when a command is firing on the RadImageEditor. This event is triggered when the ImageEditor's ToolBar buttons are clicked or the RadImageEditor.fire(commandName) method is invoked. The event can be canceled.|
| __OnClientDialogLoaded__ |The name of the javascript function called when a tool widget dialog is loaded from the server.|
| __OnClientCommandExecuted__ |The name of the javascript function called when a command is fired on the RadImageEditor. This event is triggered when the ImageEditor's ToolBar buttons are clicked or the RadImageEditor.fire(commandName) method is invoked.|
| __OnClientImageChanging__ |The name of the javascript function called before a change is applied on the image edited. The event can be canceled.|
| __OnClientImageLoad__ |The name of the javascript function called when the image in the editor loads in the browser.|
| __OnClientImageChanged__ |The name of the javascript function called after a change is applied on the image edited.|
| __OnClientSaving__ |The name of the javascript function called before the image is saved on the client or the server. The event can be canceled.|
| __OnClientSaved__ |The name of the javascript function called after the image is saved on the client or the server.|
| __OnClientShortCutHit__ |The name of the javascript function called, when a given Keyboard ShortCut of the RadImageEditor was hit. The event can be cancelled.|
| __OnClientToolsDialogClosed__ |The name of the javascript function called when the tool's panel dialog is closed.|

## RadImageEditor EditableImage Methods


>caption Methods

| Name | Description |
| ------ | ------ |
| __AddText__ |Adds text to a specific position in the current EditableImage. Takes as arguements the point, in which the text should be inserted, and the text itself.|
| __ApplyImageOperations__ |Applies the IImageOperation(s) to the current image in the order they appear in the operations collection. Takes as argument the Collection of IImageOperation(s) to apply.|
| __ChangeOpacity__ |Changes the opacity if the current EditableImage. Takes as arguement the opacity to be set.|
| __Clone__ |Creates copy of the current EditableImage. Returnes the cloned EditableImage.|
| __Crop__ |Crops a selected area of the current EditableImage. Takes as arguement an instance of the class Rectangle, which determines the cropped zone.|
| __Dispose__ |Disposes the current EditableImage.|
| __EditableImage__ |Creates an EditableImage. Takes as arguments any of the following variants:

* A stream, containing the image data.

* A path to the specific image.

* An object of type __System.Drawing.Image__ .

* An object of type __System.Drawing.Image__ and an object, implementing the IGraphicsCore interface.|
| __FixGifColors__ |Fixes a problem with the Gif file format support in the .NET framework.|
| __Flip__ |Flips the current EditableImage to the specified direction. Takes as arguement the direction, to which the EditableImage should be flipped.|
| __InsertImage__ |Inserts an image in a specific position in the current EditableImage. Takes as arguements the point, in which the image should be placed, and the image itself.|
| __ReplaceImage__ |Replaces the current __System.Drawing.Image__ object of the EditableImage. Takes as argument the __System.Drawing.Image__ object to replace the existing Image with.|
| __Resize__ |Resizes the current EditableImage. It can take either one argument of type Size or two arguments, which will specify whe new width and height.|
| __Rotate__ |Rotates the current EditableImage. Takes as arguement the angle for rotating the EditableImage.|

## RadImageEditor EditableImage Properties


>caption Properties

| Name | Description |
| ------ | ------ |
| __Format__ |Gets the format of the current EditableImage.|
| __Height__ |Gets the height of the current EditableImage.|
| __Image__ |Gets the Image object of the current EditableImage.|
| __IsDisposed__ |Gets a bool value that indicates whether the dispose method of the EditableImage has been called.|
| __RawFormat__ |Gets the format of the current EditableImage as an instance of ImageFormat.|
| __Size__ |Gets the size of the current EditableImage.|
| __Width__ |Gets the width of the current EditableImage.|

## RadImageEditor Tool Methods


>caption Methods

| Name | Description |
| ------ | ------ |
| __ImageEditorTool__ |Creates an ImageEditor tool with or without a specified command name. Can optionally take as arguments the CommandName of the tool and the ShortCut of the tool.|
| __ImageEditorToolSeparator__ |Creates a tool separator.|

## RadImageEditor Tool Properties


>caption Properties

| Name | Description |
| ------ | ------ |
| __CommandName__ |Gets or sets the name of the command fired when the tool is clicked.|
| __CssClass__ |Gets or sets the CSS class applied to the ImageEditor tool.|
| __Enabled__ |Gets or sets a value indicating whether this ImageEditor tool is enabled.|
| __ImageUrl__ |Gets or sets the location of an image (icon) to display in the ImageEditor tool|
| __IsSeparator__ |Gets or sets a bool value that indicates whether the tool is a separator.|
| __IsToggleButton__ |Gets or sets a value indicating whether the ImageEditor tool can be toggled or not.|
| __ShortCut__ |Gets or sets the keyboard shortcut which will invoke the associated RadImageEditor command.|
| __Text__ |Gets or sets the text displayed in the tool.|
| __ToolTip__ |Gets or sets the ToolTip of the ImageEditor tool.|

## RadImageEditor ToolGroup Methods


>caption Methods

| Name | Description |
| ------ | ------ |
| __Contains__ |Determines whether the group a tool with the specified name.|
| __FindTool__ |Finds the tool with the given name.|
| __GetAllTools__ |Gets all tools inside the group.|
| __ImageEditorToolStrip__ |Creates an ImageEditor toolstrip with the specified command name.|
| __LoadTools__ |Initializes the Tools collection from the ToolsFileContent property of RadImageEditor.|

## RadImageEditor ToolGroup Properties


>caption Properties

| Name | Description |
| ------ | ------ |
| __Tools__ |Gets the children of the ImageEditorToolGroup.|

## RadImageEditor Enumerators


>caption Enumerators

| Name | Values |
| ------ | ------ |
| __AllowedSavingLocation__ |Specifies where the end user can save the edited image:

*  __ClientAndServer__ - The user can save the image on the client and server machine.

*  __Client__ - The user can save image on the client only.

*  __Server__ - The user can save image on the server only.|
| __FlipDirection__ |

* Vertical

* Horizontal

* Both|
| __Rotation__ |

* Rotate90

* Rotate180

* Rotate270|
| __StatusBarMode__ |Specifies the possible values for the __StatusBarMode__ property of the RadImageEditor control:

*  __Bottom__ - The StatusBar is rendered below the editable area of the ImageEditor.

*  __Top__ - The StatusBar is rendered above the editable area of the ImageEditor and below the ToolBar.

*  __Hidden__ - The StatusBar is not rendered at all.|
| __ToolBarMode__ |Specifies the Toolbar behavior of the RadImageEditor control:

*  __Default__ - The Toolbar is attached to the ImageEditor control. In this mode the Toolbar is static and can't be moved.

*  __Docked__ - The Toolbar is rendered within a dock and can be docked into one of the 4(four) zones available, or left undocked anywhere on the page.|
| __ToolBarPosition__ |Specifies the position of the Toolbar relative to the edited content (content area):

*  __Top__ - The Toolbar is rendered above the content area.

*  __Right__ - The Toolbar is rendered to the right of the content area.

*  __Bottom__ - The Toolbar is rendered below the content area.

*  __Left__ - The Toolbar is rendered to the left of the content area.|
| __CanvasMode__ |Specifies the options for enabling the canvas mode (using HTML5 canvas element for editing images) in the RadImageEditor control:

*  __Automatic__ - The RadImageEditor enables the canvas mode if the client browser supports the HTML5 canvas element, and doesn't enable the canvas mode if the canvas element is not supported.

*  __Yes__ - The canvas mode is always enabled no matter if the browser does not support the HTML5 canvas element.

*  __No__ - The canvas mode is disabled.|
| __ImageStorage__ |Specifies the locations where a Telerik.Web.UI.RadImageEditor instance can store its intermediary EditableImage objects, resulting from server operations:

*  __Cache__ - The EditableImage objects are stored in the System.Web.Caching.Cache of the current application.

*  __Session__ - The EditableImage objects are stored in the System.Web.SessionState.HttpSessionState of the current HTTP Request.

*  __FileSystem__ - The EditableImage objects are stored in the WebServer's file system.|
| __ToolsLoadPanelTypes__ |

* AjaxPanel

* XmlHttpPanel|
