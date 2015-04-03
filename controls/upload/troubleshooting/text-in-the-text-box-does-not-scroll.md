---
title: Text in the Text Box Does Not Scroll
page_title: Text in the Text Box Does Not Scroll | UI for ASP.NET AJAX Documentation
description: Text in the Text Box Does Not Scroll
slug: upload/troubleshooting/text-in-the-text-box-does-not-scroll
tags: text,in,the,text,box,does,not,scroll
published: True
position: 9
---

# Text in the Text Box Does Not Scroll



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

The text in the __TextBox__ doesn't scroll when you move the cursor using the arrow keys.

## CAUSE

The displayed text is in the __TextBox__, but the cursor is in the file input. The cursor position for the visible part of the text in the file input and the __TextBox__ cannot be controlled using javascript.

## RESOLUTION

Disable text editing in the file input by setting __ReadOnlyFileInputs__property to __true__, or Set __EnableFileInputSkinning__ property to __false__.
