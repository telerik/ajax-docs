---
title: Telerik.Web.UI.Widgets.FileBrowserContentProvider
page_title: Telerik.Web.UI.Widgets.FileBrowserContentProvider
description: Telerik.Web.UI.Widgets.FileBrowserContentProvider
---

# Telerik.Web.UI.Widgets.FileBrowserContentProvider

Provides storage independent mechanism for uploading files and 
            populating the content of the FileBrowser dialog controls.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Widgets.FileBrowserContentProvider

## Properties

###  CanCreateDirectory `Boolean`

Gets a value indicating whether the ContentProvider can create directory items or not. The visibility of the 
            Create New Directory icon is controlled by the value of this property.

###  Context `HttpContext`

The HttpContext object, set in the constructor of the class.

###  DeletePaths `String[]`

The paths which will allow deleting in the dialog. This is passed by RadEditor and is 
            one of the values of DeleteImagesPaths, DeleteDocumentsPaths, DeleteMediaPaths, DeleteFlashPaths, 
            DeleteTemplatesPaths properties. You can disregard this value if you have custom mechanism for determining the rights
            for deleting.

###  PathSeparator `Char`

The character, used to separate parts of the virtual path (e.g. '/' is the path separator in /path1/path2/file)

###  SearchPatterns `String[]`

Gets the search patterns for the file items to be displayed in the FileBrowser control. This property
            is set in the constructor of the class. Supports wildcards.

###  SelectedItemTag `String`

Gets or sets the tag of the selected item. The file browser will navigate to the item
            which has this tag. Used mainly in Database content providers, where the file items have
            special url for accessing.

###  SelectedUrl `String`

Gets or sets the url of the selected item. The file browser will navigate to the item
            which has this url.

###  UploadPaths `String[]`

Gets the paths which will allow uploading in the dialog. This is passed by RadEditor and is 
            one of the values of UploadImagesPaths, UploadDocumentsPaths, UploadMediaPaths, UploadFlashPaths, 
            UploadTemplatesPaths properties. You can disregard this value if you have custom mechanism for determining the rights
            for uploading.

###  ViewPaths `String[]`

Gets the paths which will be displayed in the dialog. This is passed by RadEditor and is 
            one of the values of ImagesPaths, DocumentsPaths, MediaPaths, FlashPaths, TemplatesPaths properties. 
            You can disregard this value if you have custom mechanism for determining the rights for 
            directory / file displaying.

## Methods

###  CheckDeletePermissions

Checks if the current configuration allows deleting from the specified folder

#### Parameters

#### folderPath `System.String`

the virtual path that will be checked

#### Returns

`System.Boolean` true if deleting is allowed, otherwise false

###  CheckReadPermissions

Checks if the current configuration allows reading from the specified folder

#### Parameters

#### folderPath `System.String`

The virtual path that will be checked

#### Returns

`System.Boolean` True if reading is allowed, otherwise false

###  CheckWritePermissions

Checks if the current configuration allows writing (uploading) to the specified folder

#### Parameters

#### folderPath `System.String`

the virtual path that will be checked

#### Returns

`System.Boolean` true if writing is allowed, otherwise false

###  CopyDirectory

Copies a directory from a one virtual path to a new one

#### Parameters

#### path `System.String`

old virtual location

#### newPath `System.String`

new virtual location

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  CopyFile

Copies a file from a one virtual path to a new one.

#### Parameters

#### path `System.String`

old virtual location

#### newPath `System.String`

new virtual location

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  CreateDirectory

Creates a directory item in the given path with the given name.

#### Parameters

#### path `System.String`

The path where the directory item should be created.

#### name `System.String`

The name of the new directory item.

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  DeleteDirectory

Deletes the directory item with the given virtual path.

#### Parameters

#### path `System.String`

The virtual path of the directory item.

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  DeleteFile

Deletes the file item with the given virtual path.

#### Parameters

#### path `System.String`

The virtual path of the file item.

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  GetFile

Gets a read only Stream for accessing the file item with the given url.

#### Parameters

#### url `System.String`

The url of the file.

#### Returns

`System.IO.Stream` Stream for accessing the contents of the file item with the given url.

###  GetFileName

Get the name of the file with the given url.

#### Parameters

#### url `System.String`

The url of the file.

#### Returns

`System.String` String containing the file name.

###  GetPath

Gets the virtual path of the item with the given url.

#### Parameters

#### url `System.String`

The url of the item.

#### Returns

`System.String` String containing the path of the item.

###  MoveDirectory

Moves a directory from a one virtual path to a new one. This method can also be used for renaming items.

#### Parameters

#### path `System.String`

old virtual location

#### newPath `System.String`

new virtual location

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  MoveFile

Moves a file from a one virtual path to a new one. This method can also be used for renaming items.

#### Parameters

#### path `System.String`

old virtual location

#### newPath `System.String`

new virtual location

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  NormalizeRelativePath

Normalizes paths that contain parent references - /..

#### Parameters

#### path `System.String`

The path that will be normalized

#### Returns

`System.String` The normalized path that now points directly to its target

###  RemoveProtocolNameAndServerName

Removes the protocol and the server names from the given url.

#### Remarks
Url: http://www.myserver.com/myapp/mydirectory/myfile
            Result: /myapp/mydirectory/myfile
            
            Url: www.myserver.com/myapp/mydirectory/myfile
            Result: /myapp/mydirectory/myfile

#### Parameters

#### url `System.String`

Fully qualified url to a file or directory item.

#### Returns

`System.String` The root based absolute path.

###  ResolveDirectory

Resolves a directory with the given path. This method populates the Files collection in the returned DirectoryItem

#### Remarks
Used mainly in the Ajax calls.

#### Parameters

#### path `System.String`

The virtual path of the directory.

#### Returns

`Telerik.Web.UI.Widgets.DirectoryItem` A DirectoryItem, containing the directory.

###  ResolveRootDirectoryAsList

Resolves a root directory with the given path in list mode.

#### Parameters

#### path `System.String`

The virtual path of the directory.

#### Returns

`Telerik.Web.UI.Widgets.DirectoryItem[]` A DirectoryItem array, containing the root directory and all child directories.

###  ResolveRootDirectoryAsTree

Resolves a root directory with the given path in tree mode. This method populates the Directories collection in the returned DirectoryItem

#### Parameters

#### path `System.String`

The virtual path of the directory.

#### Returns

`Telerik.Web.UI.Widgets.DirectoryItem` A DirectoryItem, containing the root directory.

###  StoreBitmap

Stores an image with the given url and image format.

#### Remarks
Used when creating thumbnails in the ImageManager dialog.

#### Parameters

#### bitmap `System.Drawing.Bitmap`

The Bitmap object to be stored.

#### url `System.String`

The url of the bitmap.

#### format `System.Drawing.Imaging.ImageFormat`

The image format of the bitmap.

#### Returns

`System.String` string.Empty when the operation was successful; otherwise an error message token.

###  StoreFile

Creates a file item from a HttpPostedFile to the given path with the given name.

#### Remarks
The default FileUploader control does not include the arguments parameter. If you need additional arguments
            you should create your own FileUploader control.

#### Parameters

#### file `System.Web.HttpPostedFile`

The uploaded HttpPostedFile to store.

#### path `System.String`

The virtual path where the file item should be created.

#### name `System.String`

The name of the file item.

#### arguments `System.String`

Additional values to be stored such as Description, DisplayName, etc.

#### Returns

`System.String` String containing the full virtual path (including the file name) of the file item.

###  StoreFile

Creates a file item from a Telerik.Web.UI.UploadedFile in the given path with the given name.

#### Remarks
The default FileUploader control does not include the arguments parameter. If you need additional arguments
            you should create your own FileUploader control.

#### Parameters

#### file `Telerik.Web.UI.UploadedFile`

The UploadedFile instance to store.

#### path `System.String`

The virtual path where the file item should be created.

#### name `System.String`

The name of the file item.

#### arguments `System.String`

Additional values to be stored such as Description, DisplayName, etc.

#### Returns

`System.String` String containing the full virtual path (including the file name) of the file item.

