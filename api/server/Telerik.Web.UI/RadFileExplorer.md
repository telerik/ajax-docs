---
title: Telerik.Web.UI.RadFileExplorer
page_title: Telerik.Web.UI.RadFileExplorer
description: Telerik.Web.UI.RadFileExplorer
---

# Telerik.Web.UI.RadFileExplorer

Telerik File Explorer control
            You can find information on the server-side API of RadFileExplorer at https://docs.telerik.com/devtools/aspnet-ajax/controls/fileexplorer/server-side-programming/overview .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadFileExplorer : ICallbackEventHandler, INamingContainer

## Properties

###  AccessKey `String`

Specifies an access key to enable keyboard navigation for the File Explorer control

###  AllowPaging `Boolean`

When set to true, this property will enable paging in the File Explorer's Grid component.

###  AsyncUpload `RadUpload`

Gets a reference to the async upload component, which shows inside a popup window when the user wants to upload files.
            If you want to set the allowed file types or max upload file size, please use the Configuration property

###  AvailableFileListControls `FileList`

Determines which file list controls will be available on the client-side so that their respective file list view can be displayed dynamically

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  Configuration `FileExplorerConfiguration`

Contains the FileExplorer configuration (paths, content provider type, etc.).

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin
            and will be modified in AddAttributesToRender()

###  CurrentFolder `String`

Returns the currently selected node in the tree. This property is useful during postbacks.

###  DisplayUpFolderItem `Boolean`

Gets or sets a value indicating whether to show the up one folder (..) item in the grid if available.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAsyncUpload `Boolean`

Gets or sets a value indicating whether to allow opening a new window with the file

###  EnableCopy `Boolean`

Gets or sets a value indicating whether to allow copying of files/folders

###  EnableCreateNewFolder `Boolean`

Gets or sets a value indicating whether to allow creating new folders

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableFilteringOnEnterPressed `Boolean`

When set to true, performs the filtering after the "Enter" key is pressed.
            EnableFilterTextBox should be set to true (i.e. filtering enabled) to enable filtering.

###  EnableFilterTextBox `Boolean`

When set to true, renders a textbox used to filter files in the grid.

###  EnableOpenFile `Boolean`

Gets or sets a value indicating whether to allow opening a new window with the file

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  ExplorerMode `FileExplorerMode`

Gets or sets the current FileExplorerMode (e.g. default, show files in the tree, etc.)

###  FileList `FileList`

Gets a reference to the grid, which shows on the right of the file explorer control.

###  FilterTextBoxLabel `String`

Gets or sets the text of the label displayed next to the Filter TextBox.

###  Grid `RadGrid`

Gets a reference to the grid, which shows on the right of the file explorer control.

###  GridContextMenu `RadGrid`

Gets a reference to the context menu, which shows when the user right-clicks the grid control

###  Height `Unit`

Gets or sets the height of the Web server control.

###  InitialPath `String`

Gets or sets the initial path that will be shown in the file explorer control.

#### Remarks
If this property is not set, the file explorer will use the first path in the ViewPaths as the initial one.

###  IsSkinSet `String`

For internal use.

###  KeyboardShortcuts `FileExplorerShortcut`

Gets the Keyboard Shortcuts of the FileExplorer control.

###  Language `String`

Gets or sets a string containing the localization language for the File Explorer UI

###  ListView `RadListView`

Gets a reference to the grid, which shows on the right of the file explorer control.

###  LocalizationPath `DialogLocalizationStrings`

Gets or sets a value indicating where the control will look for its .resx localization files.
            By default these files should be in the App_GlobalResources folder. However, if you cannot put
            the resource files in the default location or .resx files compilation is disabled for some reason
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource files.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the control localization files from any location in the
            web application.

###  OnClientCopy `String`

The name of the javascript function called when the user tries to copy a file or folder.

###  OnClientCreateNewFolder `String`

The name of the javascript function called when the user tries to create a new folder.

###  OnClientDelete `String`

The name of the javascript function called when the user tries to delete a file.

###  OnClientFileOpen `String`

The name of the javascript function called when an item is double clicked in the grid.

###  OnClientFilesDropping `String`

The name of the client-side method called when the user drops files in the file list.

###  OnClientFilter `String`

The name of the javascript function called when the user filters the files in the grid.

###  OnClientFolderChange `String`

The name of the javascript function called when the the selected folder in the tree changes.

###  OnClientFolderLoaded `String`

The name of the javascript function called when a folder is loaded in the grid.

###  OnClientInit `String`

The name of the javascript function called before the control loads in the browser.

###  OnClientItemSelected `String`

The name of the javascript function called when the user selects an item in the explorer.

###  OnClientLoad `String`

The name of the javascript function called when the control loads in the browser.

###  OnClientMove `String`

The name of the javascript function called when the user tries to rename/move a file or folder.

###  OverwriteExistingFiles `Boolean`

Gets or sets a value, indicating whether files that already exist in RadFileExplorer will be overwritten.

###  PageSize `Int32`

Gets or sets the current PageSize of the grid

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Skin `String`

Specifies the skin that will be used by the control

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Splitter `RadSplitter`

Gets a reference to the splitter component in the file explorer

###  ToolBar `RadToolBar`

Gets a reference to the toolbar, which shows on the top of the file explorer control.

###  TooltipControl `RadToolTip`

Gets a reference to the tooltip control used for meta information popups

###  TreePaneWidth `Unit`

Gets or sets the width of the file explorer's tree pane

###  TreeView `RadTreeView`

Gets a reference to the tree, which shows on the left of the file explorer control.

###  Upload `RadUpload`

Gets a reference to the upload component, which shows inside a popup window when the user wants to upload files.
            If you want to set the allowed file types or max upload file size, please use the Configuration property

###  VisibleControls `FileExplorerControls`

Determines which of the FileExplorer controls will be visible(available).

###  Width `Unit`

Gets or sets the width of the Web server control.

###  WindowManager `RadWindowManager`

Gets a reference to the window component, which shows the upload popup and the alert/confirmation dialogs.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  BindExplorer

Rebinds the tree in the RadFileExplorer control. If there were any nodes in the tree when this method is called,
            they will be cleared unless you set the RadFileExplorer.Tree.AppendDataBoundItems property to true.

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CopyOrMoveTreeNode

This method is used in OnNodeEdit handler

#### Parameters

#### sourceNode `Telerik.Web.UI.RadTreeNode`

source node

#### destNode `Telerik.Web.UI.RadTreeNode`

destination node

#### isCopying `System.Boolean`

true for a copy operation

#### Returns

`System.String` the virtual path of the new node

###  CreateFolder

Create folder when perform this action in tree or in grid

#### Parameters

#### currNodeValue `System.String`

parent folder path

#### newDirName `System.String`

new folder name

#### Returns

`System.Void` 

###  DeleteItems

delete folder/file(s) from the grid or tree

#### Parameters

#### arguments `System.String`

a list of virtual paths to the item being deleted

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetExplorerData

Get the Grid data for the current selected folder in the file explorer tree

#### Parameters

#### path `System.String`

path to current selected folder

#### sortExpression `System.String`

sort argument (column and direction)

#### startIndex `System.Int32`

the index of the first item to return (used for paging)

#### maxRowNumber `System.Int32`

the number of items to return (used for paging)

#### includeFiles `System.Boolean`

if set to true, will return files and folders, otherwise only folders

#### control `System.String`

the control that needs the data ("grid" or "tree")

#### itemsCount `System.Int32@`

out parameter - set to the number of items returned

#### Returns

`System.Collections.Generic.List`1` a list of files and folders in the selected path

###  GetExplorerData

Get the Grid data for the current selected folder in the file explorer tree

#### Parameters

#### path `System.String`

path to current selected folder

#### sortExpression `System.String`

sort argument (column and direction)

#### startIndex `System.Int32`

the index of the first item to return (used for paging)

#### maxRowNumber `System.Int32`

the number of items to return (used for paging)

#### includeFiles `System.Boolean`

if set to true, will return files and folders, otherwise only folders

#### control `System.String`

the control that needs the data ("grid" or "tree")

#### itemsCount `System.Int32@`

out parameter - set to the number of items returned

#### filterKeyWord `System.String`

the keyword used to filter the items in the grid

#### Returns

`System.Collections.Generic.List`1` a list of files and folders in the selected path

###  IsMetroTouchSkin

Determines if the "MetroTouch" is used by the RadFileExplorer control.

#### Returns

`System.Boolean` True if "MetroTouch" skin is used, false otherwise.

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  LoadViewState

Restores view-state information from a previous request that was saved with the System.Web.UI.WebControls.WebControl.SaveViewState() method.

#### Parameters

#### state `System.Object`

An object that represents the control state to restore.

#### Returns

`System.Void` 

###  OnExplorerPopulated

Fired when the grid data is retrieved from the content provider.

#### Parameters

#### e `Telerik.Web.UI.RadFileExplorerPopulatedEventArgs`

an instance of the RadFileExplorerEventArgs event argument.

#### Returns

`System.Void` 

###  OnItemCommand

Fired when on all file explorer file and folder operations.

#### Parameters

#### e `Telerik.Web.UI.RadFileExplorerEventArgs`

an instance of the RadFileExplorerEventArgs event argument.

#### Returns

`System.Void` 

###  PopulateTreeNode

This method is used in the RadTreeView1_NodeExpand handler, in the TreeUpdatePanel_AjaxRequest method, when a folder is created
            and in the TreeUpdatePanel_AjaxRequest method, in order to reach a node in the tree

#### Parameters

#### currNode `Telerik.Web.UI.RadTreeNode`

The node to be populated

#### Returns

`System.Void` 

###  RadTreeView1_NodeEdit

Handle Renaming of folders

#### Parameters

#### sender `System.Object`

tree instance

#### e `Telerik.Web.UI.RadTreeNodeEditEventArgs`

rename event arguments

#### Returns

`System.Void` 

###  RadTreeView1_NodeExpand

Implemented using ASP.NET 2.0 Callback functionality built into RadTreeView

#### Parameters

#### sender `System.Object`

the tree instance

#### e `Telerik.Web.UI.RadTreeNodeEventArgs`

event arguments

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RenameTreeNode

This method is used in OnNodeEdit handler and in RenameGridItem method to handle renaming the folder
            and node in tree

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

node to rename

#### newName `System.String`

new name

#### Returns

`System.String` the virtual path of the new node

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SaveViewState

Saves any state that was modified after the System.Web.UI.WebControls.Style.TrackViewState() method was invoked.

#### Returns

`System.Object` An object that contains the current view state of the control; otherwise, if there is no view state associated with the control, null.

###  TrackViewState

Causes the control to track changes to its view state so they can be stored in the object's System.Web.UI.Control.ViewState property.

#### Returns

`System.Void` 

###  UpdateLocalization

Updates the strings that are localizable in the FileExplorer controls. Useful if you change the Localization collection after it has already
            set the values to the controls.

#### Returns

`System.Void` 

###  UpdateTreeNodeContainer

Necessary applying of the Item Container for a TreeNode items, because in scenarios with failing ViewState, the expanded node does not have a TreeView. As a result child nodes are not rendered correctly because their Template is not resolved on time for the DataBind call.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The node that should have its ItemContainer updated

#### Returns

`System.Void` 

