---
title: Download Files with an Ajaxified Control When Using the AjaxManager
page_title: Download Files with an Ajaxified Control When Using the AjaxManager
description: "Learn how to download files with an ajaxified control with the Telerik AjaxManager control."
slug: ajaxmanager/how-to/download-files-with-ajaxified-control
previous_url: ajax/how-to/download-files-with-ajaxified-control, controls/ajaxmanager/how-to/download-files-with-ajaxified-control
tags: telerik, asp, net, ajax, manager, download, files, with, ajaxified, control
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
		</tr>
	</tbody>
</table>

## Description

How can I download files with an ajaxified control with the Telerik AjaxManager?

## Solution 

The `XmlHttpRequest` does not allow you to use the normal `response.WriteFile` function for invoking the download for a file from an AJAX-enabled control, which is either placed in the `RadAjaxPanel` or ajaxified by the `RadAjaxManager`.


````C#
	
Response.WriteFile("~/Your_File");
	        
````
````VB
Response.WriteFile("~/Your_File")
````


To work around this issue, use the `ResponseScripts` collection of the Telerik AJAX controls to change the location header and to download the file. In the following example, the `ResponseScripts` collection will be executed after the Ajax request completes.


````C#
RadAjaxPanel1.ResponseScripts.Add(String.Format(@"window.location.href = ""{0}"";", "http://yoursite.com/Your_File"));
	
````
````VB
RadAjaxPanel1.ResponseScripts.Add(String.Format("window.location.href = ""{0}"";", "http://yoursite.com/Your_File"))
````


## See Also

* [Known Reasons for Error Messages]({%slug ajaxmanager/troubleshooting/known-reasons-for-error-messages%})

* [AjaxManager Server-Side Programming Properties]({%slug ajaxmanager/server-side-programming/properties%})
