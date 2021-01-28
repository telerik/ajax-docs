---
title: Text in the Text Box Does Not Scroll
page_title: Text in the Text Box Does Not Scroll - RadUpload
description: Check our Web Forms article about Text in the Text Box Does Not Scroll.
slug: upload/troubleshooting/text-in-the-text-box-does-not-scroll
tags: text,in,the,text,box,does,not,scroll
published: True
position: 9
---

# Text in the Text Box Does Not Scroll



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

The text in the **TextBox** doesn't scroll when you move the cursor using the arrow keys.

## CAUSE

The displayed text is in the **TextBox**, but the cursor is in the file input. The cursor position for the visible part of the text in the file input and the **TextBox** cannot be controlled using javascript.

## RESOLUTION

Disable text editing in the file input by setting **ReadOnlyFileInputs** property to **true**, or Set **EnableFileInputSkinning** property to **false**.
