---
title: How to Preview Image Before Upload-IE only
page_title: How to Preview Image Before Upload-IE only | UI for ASP.NET AJAX Documentation
description: How to Preview Image Before Upload-IE only
slug: upload/application-scenarios/how-to-preview-image-before-upload-ie-only
tags: how,to,preview,image,before,upload-ie,only
published: True
position: 10
---

# How to Preview Image Before Upload-IE only



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

This article will show how to preview an image once it is selected.

Here is the RadUpload and Image controls declarations:

````ASPNET
	    <telerik:radupload id="RadUpload1" targetfolder="~/uploads/" allowedfileextensions=".jpg,.jpeg,.gif,.png"
	        onclientfileselected="OnClientFileSelectedHandler" runat="server"></telerik:radupload>
	    <asp:Image ID="Image1" runat="server" Height="56px" Style="visibility: hidden" Width="236px" />
````



Initially, we set the visibility of the image to hidden, so we do not see a blank image with a red cross.

Here is the OnClientFileSelectedHandler javascript method:

````JavaScript
	     
	
	    function OnClientFileSelectedHandler(sender, eventArgs) { 
	       var input = eventArgs.get_fileInputField();
	       //check the extension    
	       if (sender.isExtensionValid(input.value)) {
	           var img = document.getElementById('<%= Image1.ClientID %>');
	           if (img) {
	               img.style.visibility = "";
	               img.src = input.value;
	           }
	       }
	   } 
	
				
````



__Limitations__

The code above will work correctly on __IE__ browser only, since in Firefox the__input.value__ returns the filename instead of the full path to the file.

For security reasons the above code will work only on __localhost__, to make it work remotely you need to add the site to the Trusted Sites.
