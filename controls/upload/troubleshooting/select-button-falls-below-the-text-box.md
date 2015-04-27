---
title: Select Button Falls Below The Text Box
page_title: Select Button Falls Below The Text Box | RadUpload for ASP.NET AJAX Documentation
description: Select Button Falls Below The Text Box
slug: upload/troubleshooting/select-button-falls-below-the-text-box
tags: select,button,falls,below,the,text,box
published: True
position: 8
---

# Select Button Falls Below The Text Box



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

Sometimes the Select button can fall below the text box, but still be clickable in its regular place.

## CAUSE

The width of some of the tables is less than the combined width of the**TextBox** and the **Button** which emulatethe skin of the File Input

## RESOLUTION

Follow the instructions for changing file input width in[File Input Appearance]({%slug upload/appearance-and-styling/file-input-appearance%}) or set the**EnableFileInputSkinning** property to **false**.

# See Also

 * [Select Button Does Not Work]({%slug upload/troubleshooting/select-button-does-not-work%})
