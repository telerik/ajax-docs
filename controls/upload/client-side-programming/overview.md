---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: upload/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


__RadUpload__ provides a flexible client-side API. You can easily interact with the__RadUpload__, __RadProgressManager__ and __RadProgressArea__ objects in the browser using their client-side objects. In addition to a variety of[client-side events]({%slug upload/client-side-programming/events%}), the client-side object model lets youachieve tasks while avoiding the post-backs that would trigger file uploading.

## Getting the client-side object

__RadUpload__, __RadProgressManager__, and __RadProgressArea__all create client-side objects with the __ClientID__ of the server-side object. You can obtain a referenceusing the __$find()__ method, as shown in the following JavaScript code:

````JavaScript
	
	        var upload = $find("<%= RadUpload1.ClientID %>");
	        
	        var mgr = $find("<%= RadProgressManager1.ClientID %>"); 
	        
	        var progressArea = $find("<%= RadProgressArea1.ClientID %>");
	
````



For __RadUpload__, you can also use the __getRadUpload()__ method:

````JavaScript
	
	        var ul = getRadUpload("<%= RadUpload1.ClientID %>");
	
````



For __RadProgressArea__, you can also use the __getRadProgressArea()__ method:

````JavaScript
	
	        var pa = getRadProgressArea("<%= RadProgressArea1.ClientID %>");
	
````



For __RadProgressManager__, you can also use the __getRadProgressManager()__ method:

````JavaScript
	
	        var mgr = getRadProgressManager();
	
````



## Calling client-side methods

Once you have access to a client-side object, you can use it to call its client-side methods, as shown in the following examples.

## RadUpload

The following example uses the __RadUpload__ client-side object to obtain a reference to the file inputDOM elements, and delete the row that contains them if the user has not selected a file.

````JavaScript
	
	        function deleteUnusedFileInputs() {
	            var upload = $find("<%= RadUpload1.ClientID %>");
	            var inputs = upload.getFileInputs();
	            for (i = inputs.length - 1; i >= 0; i--) {
	                if (inputs[i].value == "")
	                    upload.deleteFileInputAt(i);
	            } 
	        }
	
````



## RadProgressArea

The following example uses the __RadProgressArea__ client-side object to cancel the current upload:

````JavaScript
	
	        function cancelUpload() {
	            $find("<%= RadProgressArea1.ClientID %>").cancelRequest(); 
	        }
	
````



## RadProgressManager

The following example uses the __RadProgressManager__ client-side object to start polling for progress information:

````JavaScript
	
	        function startPolling() {
	            getRadProgressManager().startProgressPolling(); 
	        }
	
````



# See Also

 * [RadUpload Object]({%slug upload/client-side-programming/radupload-object%})[](F07E2354-2B45-479D-983B-0CF4A70D4446)[](E9863C1B-4C24-456F-8640-BA6A83203777)
