---
title: Telerik.Web.UI.AsyncUploadConfiguration
page_title: Telerik.Web.UI.AsyncUploadConfiguration
description: Telerik.Web.UI.AsyncUploadConfiguration
---

# Telerik.Web.UI.AsyncUploadConfiguration

Default implementation of Telerik.Web.UI.IAsyncUploadConfiguration IAsyncUploadConfiguration.
            Base class that can be used to pass custom information from the page to the handler. Inherit this class and 
            add a relevant data.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.AsyncUploadConfiguration : IAsyncUploadConfiguration

## Properties

###  TargetFolder `String`

Gets or sets the target folder.

###  TempTargetFolder `String`

Gets or sets the temp target folder.

###  MaxFileSize `Int32`

Gets or sets the max file size.

###  TimeToLive `TimeSpan`

Gets or sets the time to live.

###  UseApplicationPoolImpersonation `Boolean`

Gets or sets whether to use application pool impersonation.

###  AllowedFileExtensions `String[]`

Gets or sets the allowed file extensions send to the upload handler.

