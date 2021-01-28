---
title: Download Files with Ajaxified Control
page_title: Download Files with Ajaxified Control
description: Check our Web Forms article about Download Files with Ajaxified Control.
slug: ajaxmanager/how-to/download-files-with-ajaxified-control
previous_url: ajax/how-to/download-files-with-ajaxified-control
tags: download,files,with,ajaxified,control
published: True
position: 10
---

# Download Files with Ajaxified Control



## 

If you want to invoke download for a file from an AJAX-enabled control (either placed in **RadAjaxPanel**or ajaxified by **RadAjaxManager** ), you cannot use the normal **response.WriteFile** function.



````C#
	
Response.WriteFile("~/Your_File");
	        
````
````VB
Response.WriteFile("~/Your_File")
````


Why? Because the **XmlHttpRequest** cannot handle this.

Instead you can use the **ResponseScripts** collection of the **RadAjax** controls to change the location header and download the file:



````C#
RadAjaxPanel1.ResponseScripts.Add(String.Format(@"window.location.href = ""{0}"";", "http://yoursite.com/Your_File"));
	
````
````VB
RadAjaxPanel1.ResponseScripts.Add(String.Format("window.location.href = ""{0}"";", "http://yoursite.com/Your_File"))
````


The **ResponseScripts** collection will be executed after ajax request completes.

## See Also

 * [Known Reasons for Error Messages]({%slug ajaxmanager/troubleshooting/known-reasons-for-error-messages%})

 * [Properties]({%slug ajaxmanager/server-side-programming/properties%})
