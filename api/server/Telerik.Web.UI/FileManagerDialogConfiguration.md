---
title: Telerik.Web.UI.FileManagerDialogConfiguration
page_title: Telerik.Web.UI.FileManagerDialogConfiguration
description: Telerik.Web.UI.FileManagerDialogConfiguration
---

# Telerik.Web.UI.FileManagerDialogConfiguration

Encapsulates the properties used for FileBrowser dialog management.

#### Remarks
The FileManagerDialogConfigurationmembers are passed in a secure manner to
            the respective dialogs using the Telerik.Web.UI.DialogParameters DialogParameterscollection of the editor.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.FileExplorer.FileExplorerConfiguration
* Telerik.Web.UI.FileManagerDialogConfiguration

## Properties

###  AllowFileExtensionRename `Boolean`

Allows the option to change the extension of the file while renaming the item. Default value is true

###  AllowMultipleSelection `Boolean`

Enables or disables multiple item selection in the file browser dialogs.

#### Remarks
Used in the RadEditor dialogs like Image Manager, Document Manager. If the value is set to true,
            will allow multiple files / folders to be selected and deleted / copied / moved. Also, if Insert button
            is clicked all the selected file items will be inserted in the editor's content area

###  AllowMultipleSelection `Boolean`

Enables or disables multiple item selection in the file browser dialogs.

#### Remarks
Used in the RadEditor dialogs like Image Manager, Document Manager. If the value is set to true,
            will allow multiple files / folders to be selected and deleted / copied / moved. Also, if Insert button
            is clicked all the selected file items will be inserted in the editor's content area

###  ContentProviderTypeName `String`

Gets or sets the fully qualified type name of the FileBrowserContentProvider used in the dialog,
            including the assembly name, version, culture, public key token.

#### Remarks
When the value of this property is string.Empty (default), the dialog will use the integrated 
            FileSystemContentProvider.

###  DeletePaths `String[]`

Gets or sets the delete paths of the FileManager dialog.

#### Remarks
As only files/folders, contained in the ViewPaths
            array will be displayed, users are able to delete only the files/folders,
            belonging to the intersection of the ViewPaths and
            UploadPaths properties.

###  EnableAsyncUpload `Boolean`

Enables or disables asynchronous (no postback) upload in the file browser dialogs.

#### Remarks
Used in the RadEditor dialogs like Image Manager, Document Manager. If the value is set to true,
            uploading new files in these dialogs will happen faster - without a doing a full postback. 
            Selecting a file will start the upload process immediately. After the file(s) are successfuly uploaded,
            and its status icon is green, the user should click the "Upload" button to go back to the refreshed file explorer view.

###  FileBrowserContentProviderType `Type`

This property gets the current content provider type. To set the content provider type use ContentProviderTypeName

#### Remarks
If no provider is set, this property will return the default FileSystemContentProvider

###  MaxUploadFileSize `Int32`

Gets or sets the max filesize which users are able to upload in bytes

#### Remarks
The value of the MaxUploadFileSize property should be less or equal
            to the <httpRuntime maxRequestLength...> website property, specified in either
            the web.config or machine.config files. The <httpRuntime maxRequestLength...>
            property controls the allowed post request length for the website.

###  RenderMode `RenderMode`

Specifies the render mode of the controls in the file browser dialogs.

###  SearchPatterns `String[]`

Gets or sets the extension patterns for files to be displayed in the FileManager dialog.

#### Remarks
Values can contain wildcars (e.g. *.*, *.j?g)

###  UploadPaths `String[]`

Gets or sets the upload paths of the FileManager dialog.

#### Remarks
As only files/folders, contained in the ViewPaths
            array will be displayed, users are able to upload files/create subfolders only
            to folders, belonging to the intersection of the ViewPaths and
            UploadPaths properties.

###  ViewPaths `String[]`

Gets or sets the view paths of the FileManager dialog.

