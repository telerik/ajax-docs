---
title: Manual Upload
page_title: Manual Upload | UI for ASP.NET AJAX Documentation
description: Manual Upload
slug: asyncupload/functionality/manual-upload
tags: manual,upload
published: True
position: 4
---

# Manual Upload



## ManualUpload property

As of Q3 2012, the __RadAsyncUpload__ control supports a __ManualUpload__ property. By setting the __ManualUpload__ property to __true__ users could start the upload of the selected files when they want.In order to start the upload your application code should invoke the __startUpload()__ method from the client side API of the __RadAsyncUpload__ object.

As of Q1 2013, the __RadAsyncUpload__ control supports two more methods, __pauseUpload()__ and __resumeUpload()__ to complete manual upload functionality. Both of them should be invoked from the client side API of the __RadAsyncUpload__ object.

The __pauseUpload()__ method pauses the upload. Note that it pauses right after the currently uploading chunk is uploaded.

The __resumeUpload()__ method resumes the upload that was paused.

>note When manual upload is used under __IE 9/8/7__ , the upload module is automatically set to __IFrame__ .
>


## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Filtering]({%slug asyncupload/functionality/file-filtering%})

[Multiple File Selection]({%slug asyncupload/functionality/multiple-file-selection%})
