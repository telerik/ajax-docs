---
title: Upload Large Files (maxRequestLength)
page_title: Upload Large Files (maxRequestLength) | RadEditor for ASP.NET AJAX Documentation
description: Upload Large Files (maxRequestLength)
slug: editor/functionality/dialogs/examples/upload-large-files-(maxrequestlength)
tags: upload,large,files,(maxrequestlength)
published: True
position: 5
---

# Upload Large Files (maxRequestLength)

Upload files larger than 4096 kilobytes using Telerik RadEditor

**SOLUTION**

1. Set the desired max file size in the editor declaration in the aspx/ascx file:

	**ASP.NET**

		<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
			<ImageManager ViewPaths="~/Images" UploadPaths="~/Images" MaxUploadFileSize="7100000" />
		</telerik:RadEditor>

2. By default, the maximum size of a file to be uploaded to the server using ASP.NET is around 4MB even if you have set **MaxUploadFileSize** > 4MB, due to security restrictions of the ASP.NET Framework. To set a larger size limit, you should make some changes in either the **web.config** file or in the **machine.config**.

In the **machine.config** file, find the `<httpruntime>` node called that looks like the following:

````XML
<httpruntime executiontimeout="90" 
	maxrequestlength="4096" 
	usefullyqualifiedredirecturl="false"
	minfreethreads="8" 
	minlocalrequestfreethreads="4" 
	apprequestqueuelimit="100" />
````



The attribute that takes care of the size of the files to be uploaded is the [maxRequestLength](http://msdn.microsoft.com/en-us/library/e1f13641(VS.71).aspx). By default, it is set to 4096 kilobytes (KB). Simply change this value to increase the size of the files that you can upload to the server.

>tip Making this change in the **machine.config** file applies the setting to all the applications that are on the server. If you would like to apply this to only the application you are working with, then apply this node to the **web.config** file of your application, overriding any setting that is in the **machine.config** file. Make sure this node resides between the `<system.web>` nodes in the configuration file.

