---
title: Drag and Drop Upload
page_title: Drag and Drop Upload | RadCloudUpload for ASP.NET AJAX Documentation
description: Drag and Drop Upload
slug: cloudupload/functionality/drag-and-drop-upload
tags: drag,and,drop,upload
published: True
position: 2
---

# Drag and Drop Upload



## RadCloudUpload Drag and Drop

The Drag and Drop functionality allows the user to drag a file directly on the **RadCloudUpload** control without the use of file dialog. Upon file dropping the upload will start automatically. When the dragged file is positioned over the **RadCloudUpload** a drop area appears indicating where to drop the file.![Drag and Drop Upload](images/cloudupload-drag-and-drop.png)

This message can be easily localized by using **Localization-DropZone** property of **RadCloudUpload**.

>note The new functionality relies on the HTML5 FileApi and Drag-And-Drop modules and therefore is available only in browsers which support the aforementioned modules.
>As for now such browsers are:
>
* Mozilla Firefox v. 4+
* Google Chrome
* Safari v. 5+
* Internet Explorer 10


You will need to prevent the default behavior of the browser when the file is not dropped over the **RadCloudUpload**. More information about the Native HMTL5 Drag and Drop could be found [here](http://www.html5rocks.com/en/tutorials/dnd/basics/).

## DropZones Property

**RadCloudUpload** supports the **DropZones** property. By setting the drop zones (which are CSS selectors) the user can upload files by dropping them on different areas of the page.

>note Keep in mind that the drop zones should be listed with comma separator as demonstrated in the [demo here](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/draganddrop/defaultcs.aspx) and in the following code **\<telerik:RadCloudUpload RenderMode="Lightweight" runat="server" ID="RadCloudUpload1" MultipleFileSelection="Automatic" DropZones=".DropZone1,\#DropZone2"/\>** 
>

# See Also

 * [Drag and Drop Demo](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/draganddrop/defaultcs.aspx?product=asyncupload)
