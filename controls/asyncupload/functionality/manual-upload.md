---
title: Manual Upload
page_title: Manual Upload - RadAsyncUpload
description: Check our Web Forms article about Manual Upload.
slug: asyncupload/functionality/manual-upload
tags: manual,upload
published: True
position: 4
---

# Manual Upload



## ManualUpload property

As of Q3 2012, the **RadAsyncUpload** control supports a **ManualUpload** property. By setting the **ManualUpload** property to **true** users could start the upload of the selected files when they want. In order to start the upload your application code should invoke the **startUpload()** method from the client side API of the **RadAsyncUpload** object.

As of Q1 2013, the **RadAsyncUpload** control supports two more methods, **pauseUpload()** and **resumeUpload()** to complete manual upload functionality. Both of them should be invoked from the client side API of the **RadAsyncUpload** object.

The **pauseUpload()** method pauses the upload. Note that it pauses right after the currently uploading chunk is uploaded.

The **resumeUpload()** method resumes the upload that was paused.

>note When manual upload is used under **IE 9/8/7**, the upload module is automatically set to **IFrame**.
>


## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Filtering]({%slug asyncupload/functionality/file-filtering%})

[Multiple File Selection]({%slug asyncupload/functionality/multiple-file-selection%})

[Control over Upload Process online demo](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/manualupload/defaultcs.aspx)

