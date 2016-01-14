---
title: Telerik.Web.UI.Captcha.SessionCachingProvider
page_title: Telerik.Web.UI.Captcha.SessionCachingProvider
description: Telerik.Web.UI.Captcha.SessionCachingProvider
---

# Telerik.Web.UI.Captcha.SessionCachingProvider

Instance of a Telerik.Web.UI.Captcha.ICaptchaCachingProvider that utilizes System.Web.SessionState.HttpSessionState as a storage.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Captcha.BaseCaptchaCachingProvider
* Telerik.Web.UI.Captcha.SessionCachingProvider

## Properties

###  ShouldAddCacheDependecy `Boolean`

Defines if a cache dependency should be applied to the cached object.

## Methods

###  CacheExpirationCallback

Callback method that will be assigned to the Cache dependency

#### Parameters

#### key `System.String`

#### value `System.Object`

#### reason `System.Web.Caching.CacheItemRemovedReason`

#### Returns

`System.Void` 

###  Clear

Removes the cached image from the storage.

#### Parameters

#### key `System.String`

The identifier under which the image has been stored.

#### Returns

`System.Void` 

###  Load

Retrieves the cached image from the storage

#### Parameters

#### key `System.String`

The identifier under which the image has been stored.

#### Returns

`Telerik.Web.UI.CaptchaImage` Previously stored  object.

###  Save

Saves the CachedImage into the storage.

#### Parameters

#### key `System.String`

The identifier under which the image will be stored.

#### image `Telerik.Web.UI.CaptchaImage`

instance that will be stored.

#### Returns

`System.Void` 

