---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: asyncupload/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

This tutorial will walk you through creating a Web page that uses __RadAsyncUpload__ control. It shows how to

* Use __RadAsyncUpload__ to upload files.

## Getting Started

1. Create a new page and add a __RadAsyncUpload__ control to it.

1. Click the Smart Tag of the __RadAsyncUpload__ control to add __Telerik.Web.UI.WebResource.axd__ handler in the web.config file:![Getting Started](images/asyncupload_rau_getting_started_1.png)

1. Adding the __RadScriptManager__ to the page will also automatically register the __Telerik.Web.UI.WebResource.axd__ handler in the web.config file. This handler is used by both __RadScriptManager__ and __RadAsyncUpload__:![Getting Started part two](images/asyncupload_rau_getting_started_2.png)

1. Set the __TargetFolder__ property to the folder where you want the files to be automatically uploaded after the PostBack (ex. __App_Data/UploadedFiles__).

>caution The files are *automatically* and *asynchronously* uploaded to the folder specified by the __TemporaryFolder__ property but are copied to the __TargetFolder__ after the postback on the page.
>
By default the __TemporaryFolder__ property is set to the __App_Data/RadUploadTemp__ folder. The files are uploaded with randomly generated unique names.

````ASPNET
<telerik:RadAsyncUpload ID="RadAsyncUpload1" TargetFolder="uploads" runat="server"></telerik:RadAsyncUpload>				
````

1. Finally, add a simple RadButton or an asp.net Button on the page that will postback. Press F5 from the keyboard to build and run the application. Now you need to select a file that will be uploaded. You will see the loading image indicating that the file is uploaded asynchronously. During the upload the page is interactive to the user. After clicking on the postback button - the file is saved to the __TargetFolder__.

## See Also

[Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload]({%slug asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload%})

[RadAsyncUpload vs. RadUpload for ASP.NET AJAX]({%slug asyncupload/radasyncupload-vs-radupload%})
