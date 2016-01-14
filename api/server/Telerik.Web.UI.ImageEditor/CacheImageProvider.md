---
title: Telerik.Web.UI.ImageEditor.CacheImageProvider
page_title: Telerik.Web.UI.ImageEditor.CacheImageProvider
description: Telerik.Web.UI.ImageEditor.CacheImageProvider
---

# Telerik.Web.UI.ImageEditor.CacheImageProvider

Represents a provider for images of a Telerik.Web.UI.RadImageEditor instance. It stores the images into Cache or Session.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.CacheImageProvider : ICacheImageProvider

## Properties

###  ImageStorageKey `ImageStorage`

Gets or sets a unique key that used to associate the current  instance with the images stored by the provider.
            This property is set by the  instance.
            
            The  class provides exactly the same property, and the provider and the corresponding ImageEditor instance have the same value.

###  Storage `ImageStorage`

Gets or sets the location where the  objects will be stored.
            This property is set by the  instance.

## Methods

###  ClearImages

Clears all images currently saved by the provider.

#### Returns

`System.Void` 

###  ClearImages

Clears the images in the provider up to the image key passed. 
            
            The clearing is done from the first image that was placed by the provider, up to the one corresponding to the key. 
            The image that corresponds to the key is not cleared.

#### Parameters

#### imageKey `System.String`

The key up to which the images are cleared.

#### Returns

`System.Void` 

###  DeleteFile

Deletes a file from the FileSystem and returns a string.Empty if the action was successful.

#### Parameters

#### physicalPath `System.String`

The physical path to the file.

#### Returns

`System.String` String.Empty if the deletion was successful."FileReadOnly" if the file exists and it is read only. The file is not deleted."NoPermissionsToDeleteFile" if the deletion was successful. The file is not deleted.

###  GetFile

Gets a file from the FileSystem.

#### Parameters

#### physicalPath `System.String`

The physicalPath of the file.

#### Returns

`System.IO.Stream` The file stream. Null if the file does not exist.

###  LoadImage

Loads an image from the specified location. This image will be used to create an  object.

#### Parameters

#### imageUrl `System.String`

The path to the image to load.

#### physicalPath `System.String`

The physical path to the image to load.

#### context `System.Web.HttpContext`

The  to which the application belongs.

#### Returns

`System.Drawing.Image` Returns the  object loaded from the specified location.

###  Retrieve

Retrieves an EditableImage from the provider.

#### Parameters

#### key `System.String`

The key that corresponds to the editable image.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` An  object that corresponds to the  passed.

###  SaveImage

Saves the current image on the FileSystem and returns a string.Empty if the saving was successful.

#### Parameters

#### editableImage `Telerik.Web.UI.ImageEditor.EditableImage`

The EditableImage to save.

#### physicalPath `System.String`

The full physical path (including the file name) where the image will be saved.

#### imageUrl `System.String`

The path (relative) to the image that is currently loaded in the ImageEditor. If new image name was specified when saving the image, it will be reflected in the imageUrl.

#### overwrite `System.Boolean`

Should we overwrite the file if it exists.

#### Returns

`System.String` String.Empty if the operation was successful, else a string indicating the problem.

###  Store

Stores an image, generates key that corresponds to the stored image, and returns the key.

#### Parameters

#### image `Telerik.Web.UI.ImageEditor.EditableImage`

The EditableImage object to store.

#### Returns

`System.String` The key that corresponds to the stored editable image.

