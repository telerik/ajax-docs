---
title: Telerik.Web.UI.MediaPlayerFilesCollection
page_title: Telerik.Web.UI.MediaPlayerFilesCollection
description: Telerik.Web.UI.MediaPlayerFilesCollection
---

# Telerik.Web.UI.MediaPlayerFilesCollection

MediaPlayerFiles collection. Used in RadMediaPlayer playlist. 
            For more information, please see the http://docs.telerik.com/devtools/aspnet-ajax/controls/mediaplayer/functionality/playlist Playlisttopic.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.MediaPlayerFilesCollection : ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1, IStateManager

## Properties

###  Count `Int32`

Returns the number of items in the collection

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

###  Item `MediaPlayerFile`

Access a  in the collection by index.

###  Owner `RadMediaPlayer`

Owner RadMediaPlayer control

## Methods

###  Add

Adds file to the collection

#### Parameters

#### item `Telerik.Web.UI.MediaPlayerFile`

File to add

#### Returns

`System.Void` 

###  Clear

Clears the collection

#### Returns

`System.Void` 

###  Contains

Determines of the file presents in the collection

#### Parameters

#### item `Telerik.Web.UI.MediaPlayerFile`

File to find

#### Returns

`System.Boolean` true if the file is found; otherwise false.

###  CopyTo

Copies all the elements of the current one-dimensional array to the specified one-dimensional array starting at the specified destination array index.

#### Parameters

#### array `Telerik.Web.UI.MediaPlayerFile`

The one-dimensional array that is the destination of the elements copied from the current array.

#### arrayIndex `System.Int32`

Integer that represents the index in array at which copying begins.

#### Returns

`System.Void` 

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` Returns an enumerator that iterates through the collection.

###  GetFilesByType

Returns a collection of files, filtered by file type

#### Parameters

#### fileType `System.String`

File types to find

#### Returns

`System.Collections.Generic.List`1` Collection of items with the given file type

###  IndexOf

Determines the index of a specific file in the
            MediaPlayerFilesCollection.

#### Parameters

#### item `Telerik.Web.UI.MediaPlayerFile`

The object to locate in the MediaPlayerFilesCollection.

#### Returns

`System.Int32` The index of value if found in the collection;
            otherwise, -1.

###  Insert

Inserts a file to the MediaPlayerFilesCollection at the specified
            index.

#### Parameters

#### index `System.Int32`

The zero-based index at which file should be
            inserted.

#### item `Telerik.Web.UI.MediaPlayerFile`

The  to insert into the collection.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### item `Telerik.Web.UI.MediaPlayerFile`

File to remove

#### Returns

`System.Boolean` true if file is successfully removed; otherwise, false.

###  RemoveAt

Removes the MediaPlayerFilesCollection file at the specified
            index.

#### Parameters

#### index `System.Int32`

The zero-based index of the file to remove.

#### Returns

`System.Void` 

