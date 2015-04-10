---
title: Known Limitations
page_title: Known Limitations | UI for ASP.NET AJAX Documentation
description: Known Limitations
slug: upload/uploading-files/known-limitations
tags: known,limitations
published: True
position: 2
---

# Known Limitations



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The __RadUpload__ control uses and extends the existing API of the browsers and the .NET framework. However, due to some known restrictions, the control has the limitations listed below:

* __RadUpload__ cannot upload files using AJAX calls. This is a limitation of the __XmlHttpRequest__ component, which is used in the AJAX frameworks for asynchronous calls to the application. To upload a file you must perform a full page postback. In most cases, it is possible to [disable AJAX for a given submit button](http://www.telerik.com/help/aspnet-ajax/ajax-exclude.html), to allow file uploads. Fortunately this is possible in __RadAsyncUpload__- check the demo [here](http://demos.telerik.com/aspnet-ajax/upload/examples/async/ajaxprocessing/defaultcs.aspx).

* __RadUpload__ cannot check the __size__ and the __mime-type__ of its selected files before an upload starts. This is because of a security restriction of the JavaScript engine of popular browsers. You cannot access the client file system with JavaScript, hence the inability to get the file __size__, __mime type__ or content. You can, however, [check the file size when the upload first starts]({%slug upload/how-to/checking-file-size-on-the-client%}). Client-side validation is possible with __RadAsyncUpload__ - check the demo [here](http://demos.telerik.com/aspnet-ajax/upload/examples/async/validation/defaultcs.aspx).

* __RadUpload__ cannot select multiple files in one file select box. This is a limitation of the standard __<input type=file>__ elements that __RadUpload__ uses for file selection. Currently, there are no plans for changing this restriction. You can check this code-library: [How to upload multiple files using RadUpload (uploading .zip file and extract it on the server)](http://www.telerik.com/community/code-library/submission/b311D-beedct.aspx). In addition, this is possible in __RadAsyncUpload__ - check the demo [here](http://demos.telerik.com/aspnet-ajax/upload/examples/async/multiplefileselection/defaultcs.aspx).

* __RadUpload__ does not support initially selected files or allow file selections to persist across postbacks. This is a security limitation of the standard __<input type=file>__ elements which it uses internally for file selection.

* The file will not upload if you try to open the 'browse for file' window with javascript. Only the user can click on the Select button and select a file.


