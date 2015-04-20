---
title: File Filtering
page_title: File Filtering | UI for ASP.NET AJAX Documentation
description: File Filtering
slug: asyncupload/functionality/file-filtering
tags: file,filtering
published: True
position: 3
---

# File Filtering

## RadAsyncUpload File Filtering

As of Q1 2011, __RadAsyncUpload__ supports file filtering.A file filter is an object with two properties: __Description__ and __Extensions__. The __Extensions__ property accepts a comma separated list of extensions upon whichthe select file dialog should be filtered. The __Description__ property, as its name suggests, describes the extensions set.

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1">
	<FileFilters>
		<telerik:FileFilter Description="Images(jpeg;jpg;gif)" Extensions="jpeg,jpg,gif" />
	</FileFilters>
</telerik:RadAsyncUpload>
	
````

This setup will produce the following result:

__Silverlight:__ <br> ![Silverlight module](images/asyncupload_filefiltering_silverlight.bmp) 

__Flash:__ <br> ![Flash module](images/asyncupload_filefiltering_flash.bmp)

Note that when __RadAsyncUpload__ is utilizing its IFrame module (when neither Flash nor Silverlight is installed) no filtering capabilities are available. This is because browsers don’t provide native file filtering support.

You can apply as many filters as you want. Then, the user can choose among different filters via the Files of type combo box.

# See Also

 * [RadAsyncUpload Validation Demo](http://demos.telerik.com/aspnet-ajax/upload/examples/async/validation/defaultcs.aspx?product=asyncupload)
