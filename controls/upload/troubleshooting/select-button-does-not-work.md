---
title: Select Button Does Not Work
page_title: Select Button Does Not Work | RadUpload for ASP.NET AJAX Documentation
description: Select Button Does Not Work
slug: upload/troubleshooting/select-button-does-not-work
tags: select,button,does,not,work
published: True
position: 7
---

# Select Button Does Not Work



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

When you try click the **Select** button of **RadUpload** it doesn't work, or you need to click somewhere else in order to bring the browser dialog.

## CAUSE

The **TextBox** is wider or shorter than the text area of the **File** Input, or the **Button** is wider or shorter than the button area of the File Input.

## RESOLUTION

Follow the instructions for changing file input width in [File Input Appearance]({%slug upload/appearance-and-styling/file-input-appearance%}) or set the **EnableFileInputSkinning** property to **false**.

In addition, check if you have the DocType set in your page:

````ASPNET
	    <pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
	    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
	    </pre>
````





# See Also

 * [Select Button Falls Below The Text Box]({%slug upload/troubleshooting/select-button-falls-below-the-text-box%})
