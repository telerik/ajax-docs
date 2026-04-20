---
title: Upload Modules
page_title: Upload Modules - RadAsyncUpload
description: Check our Web Forms article about Upload Modules.
slug: asyncupload/upload-modules
tags: upload,modules
published: True
position: 13
---

# Upload Modules

## RadAsyncUpload Module

RadAsyncUpload uses the **File API** upload module for file uploading. The File API is natively supported by all modern browsers.

>important As of **2026 Q1 SP2**, the legacy **IFrame**, **Silverlight** and **Flash** modules have been removed from the source code. This change improves the compatibility with modern browsers and hardens the security of the RadAsyncUpload control. The `DisablePlugins` property has also been removed. These modules were originally introduced to extend the upload capabilities in browsers that did not support the File API. The **IFrame** module served as a fallback for Internet Explorer, while the **Silverlight** and **Flash** modules provided features like chunked uploads, file filtering, and multiple file selection. Since all modern browsers now natively support the File API, and the Silverlight and Flash browser plugins have been discontinued by their vendors, these modules are no longer necessary. For more details on currently supported browsers, see the [Browser Support]({%slug getting-started/prerequisites/browser-support%}) article.

### File API Features

The File API module supports the following features:

* Multiple file upload

* Stand alone progress monitoring (No http module used!)

* Support for upload events

* Upload cancellation

* Upload files via chunks, effectively walking around the ASP.NET max files size limitation.


# See Also

 * [RadAsyncUpload Overview]({%slug asyncupload/overview%})

 * [RadAsyncUpload Overview Demo](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx?product=asyncupload)
