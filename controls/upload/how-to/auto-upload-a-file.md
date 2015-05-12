---
title: Auto Upload a File
page_title: Auto Upload a File | RadUpload for ASP.NET AJAX Documentation
description: Auto Upload a File
slug: upload/how-to/auto-upload-a-file
tags: auto,upload,a,file
published: True
position: 1
---

# Auto Upload a File



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

This article shows how to upload the file automatically upon selection. What we will achieve is to let the user select a file and submit the form automatically after that. We will use the [OnClientFileSelected]({%slug upload/client-side-programming/onclientfileselected%}) event which fires right after the user selects a file and submit the form.

Here is the RadUpload's declaration:

````ASPNET
<telerik:radupload id="RadUpload1" runat="server" onclientfileselected="submitFile"
    targetfolder="uploads">
</telerik:radupload>
<asp:Button ID="Button1" runat="server" Text="Button" Style="visibility: hidden;" />
````



Here I have hidden the submit button by using a style, but this is an option only. Here is the javascript event handler:

````JavaScript
	
function submitFile(sender, e) {
    $get("<%= Button1.ClientID %>").click();
}
	
````


