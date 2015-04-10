---
title: Download Files with Ajaxified Control
page_title: Download Files with Ajaxified Control | UI for ASP.NET AJAX Documentation
description: Download Files with Ajaxified Control
slug: ajax/how-to/download-files-with-ajaxified-control
tags: download,files,with,ajaxified,control
published: True
position: 10
---

# Download Files with Ajaxified Control



## 

If you want to invoke download for a file from an AJAX-enabled control (either placed in __RadAjaxPanel__or ajaxified by __RadAjaxManager__), you cannot use the normal __response.WriteFile__ function.



````C#
	
	        Response.WriteFile("~/Your_File");
	        
````
````VB.NET
	        Response.WriteFile("~/Your_File")
````


Why? Because the __XmlHttpRequest__ cannot handle this.

Instead you can use the __ResponseScripts__ collection of the __RadAjax__ controls to change the location header and download the file:



````C#
	
	        RadAjaxPanel1.ResponseScripts.Add(String.Format(@"window.location.href = ""{0}"";", "http://yoursite.com/Your_File"));
	
````
````VB.NET
	        RadAjaxPanel1.ResponseScripts.Add(String.Format("window.location.href = ""{0}"";", "http://yoursite.com/Your_File"))
````


The __ResponseScripts__ collection will be executed after ajax request completes.

# See Also

 * [Known Reasons for Error Messages]({%slug ajax/troubleshooting/known-reasons-for-error-messages%})

 * [Properties]({%slug ajax/server-side-programming/properties%})
