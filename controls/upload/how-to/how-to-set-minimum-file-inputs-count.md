---
title: How to Set Minimum File Inputs Count
page_title: How to Set Minimum File Inputs Count | RadUpload for ASP.NET AJAX Documentation
description: How to Set Minimum File Inputs Count
slug: upload/how-to/how-to-set-minimum-file-inputs-count
tags: how,to,set,minimum,file,inputs,count
published: True
position: 7
---

# How to Set Minimum File Inputs Count



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

**RadUpload** exposes a property **MaxFileInputsCount** which specifies the maximumnumber of rows that can appear in the **RadUpload** control.

This example will show you how to implement "**MinFileInputsCount**" behavior - RadUpload will have atleast one input rows.

````ASPNET
	    <telerik:radupload id="RadUpload2" onclientdeleting="OnClientDeletingHandler" onclientdeletingselected="OnClientDeletingSelectedHandler"
	        runat="server" />
````





````JavaScript
	
	
	        function OnClientDeletingHandler(sender, eventArgs) {
	            var numberOfInputs = sender.getFileInputs().length;
	            if (numberOfInputs == 1) {
	                eventArgs.set_cancel(true);
	            }
	        }
	
	        function OnClientDeletingSelectedHandler(sender, eventArgs) {
	            var numberOfInputsToDelete = eventArgs.get_fileInputFields().length;
	            var totalNumberOfInputs = sender.getFileInputs().length;
	
	            if (totalNumberOfInputs == numberOfInputsToDelete) {
	                eventArgs.set_cancel(true);
	            }
	        }
	
	
````




