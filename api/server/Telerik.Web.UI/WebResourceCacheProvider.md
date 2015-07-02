---
title: Telerik.Web.UI.WebResourceCacheProvider
page_title: Telerik.Web.UI.WebResourceCacheProvider
description: Telerik.Web.UI.WebResourceCacheProvider
---

# Telerik.Web.UI.WebResourceCacheProvider

This abstract class defines the WebResourceCacheProvider object that 
            inherits ProviderBase.

## Inheritance Hierarchy

* System.Object
* System.Configuration.Provider.ProviderBase
* Telerik.Web.UI.WebResourceCacheProvider

## Properties

###  IsInitialized `Boolean`

Gets or sets the is initialized.

## Methods

###  Initialize

If the provider is created with code, put the initialization logic of the provider in this method.
            Optionally you can set the IsInitialized property to true after the initialization finishes.
            The  calls this method when the Provider property is set 
            if the IsInitialized property of the provider returns false.

#### Returns

`System.Void` 

###  Store

Stores the combined web resources output for a given unique URL in cache.

#### Parameters

#### resourceUid `System.String`

The unqiue URL of the requested combination of web resources.

#### output `System.String`

The combined output of the requested web resources.

#### Returns

`System.Void` 

###  Associate

Associates the given unique key with a URL of a combination of web resources.
            One key can have many URLs associated with it.

#### Parameters

#### pageKey `System.String`

The unique key with which the URL will be associated. The key is usually a unique identifier of a web page.

#### resourceUid `System.String`

The URL of the requested combination of web resources.

#### Returns

`System.Void` 

###  AreAssociated

Checks whether the given unique key and URL are associated in cache.

#### Parameters

#### pageKey `System.String`

The unique key with which the URL will be associated. The key is usually a unique identifier of a web page.

#### resourceUid `System.String`

The URL of the requested combination of web resources.

#### Returns

`System.Boolean` True if the key and URL are associated in cache; false otherwise.

###  Get

Gets the combined web resources output from cache for a given URL.
            The method reads the content of the entry in the cache. If you want to verify whether an entry exists, use the Exists method.

#### Parameters

#### resourceUid `System.String`

The URL of the requested combination of web resources.

#### Returns

`System.String` The combined output of the requested web resources from the cache. 
            Returns null if there is no entry for the requested URL in the cache.

###  Exists

Checks whether there is an entry for the requested URL in the cache.

#### Parameters

#### resourceUid `System.String`

The URL of the requested combination of web resources.

#### Returns

`System.Boolean` True if there is an entry in the cache; false otherwise.

###  Invalidate

Deletes all URL entries for the given key from cache.

#### Parameters

#### pageKey `System.String`

The unique key with which URLs are associated.
            (The key is usually a unique identifier of a web page.)

#### Returns

`System.Void` 

###  Invalidate

Clears the cache.

#### Returns

`System.Void` 

