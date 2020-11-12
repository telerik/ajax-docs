---
title: Overview
page_title: RadImageEditor Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: imageeditor/overview
tags: overview
published: True
position: 0
---

# Image Editor Overview





**RadImageEditor** is a powerful and flexible graphics editing component that allows the users to modify their images directly in the browser, without installing any third party plugins. The actions on the image are performed on the client or, through a light callback, on the server, giving you the ability to perform the editing quickly and see the changes on the fly. The control is fully customizable, intuitive to work with and provides many features. 


#### Key features:

* **Rich Client-side functionality** - RadImageEditor exposes many of the methods used to perform the operations on the image, so that the image can be easily modified programmatically.

* **Customizable Tools** - The developer has full control over the ImageEditor's set of tools. The **ToolsFile** property or the **Tools** collection can be used to specify the desired buttons that will appear in the ToolBar.

* **Intuitive Dialogs** - RadImageEditor provides a set of built-in dialog controls that are easy to use and offerthe user a quick and intuitive way of modifying the images in the desired fashion.

* **Works with `<canvas>`** - The control automatically detects whether it can use a `<canvas>` element to perform most operations in the browser for better performance. All current major browsers support this feature. If, for any reason, it is not supported, RadImageEditor will automatically fall back to server-side operations.

* **Integrated Telerik controls** - We have embedded some of the Telerik controls into the ImageEditor to benefit from their rich functionality. This not only makes the new component feature rich, but a perfect example of how the Telerik controls work together in complex scenarios. The integrated controls are loaded on demand thus ensuring optimal loading speed and scalability.

* **Undo/Redo Actions** - RadImageEditor saves all the operations, so each change performed on the image can be reverted or re-applied again. The operations stack is cleared on postbacks, because we assume the user won't initiate a postback unless she is finished with the editing.

* **Image Operations** - A variety of operations can be performed on a given image. This includes rotation, resizing, changing the transparency, cropping and many more. For closer look at the specific operations please observe the different examples of the ImageEditor.

* **Image formats** - RadImageEditor can work with four different image formats: JPEG, PNG, BMP and non-animated GIF.


In current browsers, the image editor control defaults to using [canvas mode](https://demos.telerik.com/aspnet-ajax/imageeditor/examples/canvassupport/defaultcs.aspx). **If** you are explicitly using it in image mode (**`CanvasMode="No"`**), **as of R1 2019**, you must set the `Telerik.AsyncUpload.ConfigurationEncryptionKey` and `Telerik.Upload.ConfigurationHashKey` keys in the `appSettings` section of your `web.config` file. You can read more about them in the [Mandatory Additions to the web.config]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig) and [AsyncUpload Security]({%slug asyncupload-security%}) articles. These existing keys are reused to improve backwards compatibility of your applications and to reduce the number of properties you have to set.

