---
title: Client-Side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: asyncupload/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



__RadAsyncUpload__ provides a flexible client-side API.You can easily interact with the __RadAsyncUpload__ object in the browser using the browser's client-side object. In addition to a varietyof [client-side events]({%slug asyncupload/client-side-programming/events%}),the client-side object model lets you achieve tasks while avoiding the postbacks thatwould trigger file uploading.

## Getting the Client-Side Object

__RadAsyncUpload__ creates client-side objects withthe __ClientID__ of the server-side object. You can obtain areference using the __$find()__ method, as shown in the following JavaScript code:

````JavaScript
	
	        var upload = $find("<%= RadAsyncUpload1.ClientID %>");
	
````



## Calling Client-Side Methods

Once you have access to a client-side object, you can use it to call its client-side methods, as shown in the following examples.

## Using RadAsyncUpload with jQuery Intellisense

You can use [jQuery Intellisense](D3834762-E3C7-4505-9551-987B4CAF61B3) to get the client object of __RadAsyncUpload__ as shown in this sample code:

````JavaScript
	
	        function pageLoad() {
	            var asyncUpload = $telerik.toAsyncUpload("RadAsyncUpload1");
	
	        }
	
````



## RadAsyncUpload

The following example uses only a single __RadAsyncUpload__ controland demonstrates how by using client-side object the you can add an additional upload row tovisually demonstrate that the control can upload several files:

````JavaScript
	
	        function deleteUnusedFileInputs() {
	            var upload = $find("<%= RadUpload1.ClientID %>"); upload.addFileInput();
	        }
	
````



## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[RadAsyncUpload Client Object]({%slug asyncupload/client-side-programming/radasyncupload-object%})

[Server-Side Events]({%slug asyncupload/server-side-programming/events%})
