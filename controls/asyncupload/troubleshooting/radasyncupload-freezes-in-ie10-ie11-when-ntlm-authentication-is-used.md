---
title: IE10 and IE11 browsers freeze when RadAsyncUpload is used in application with NTLM authentication turned on
page_title: IE10 and IE11 freeze when RadAsyncUpload is used in application with NTLM authentication turned on | RadAsyncUpload for ASP.NET AJAX Documentation
description: IE10 and IE11 freeze when RadAsyncUpload is used in application with NTLM authentication turned on
slug: asyncupload\troubleshooting\radasyncupload-freezes-in-ie10-ie11-when-ntlm-authentication-is-used
tags: asyncupload,ie,ie10,ie11,sharepoint,ntml,authentication
published: True
position: 2
---

# IE10 and IE11 browsers freeze when RadAsyncUpload is used in application with NTLM authentication turned on




The **HTML5 FileApi** implementation in **Internet explorer 10 and 11** conflicts with NTLM Windows authentication. As RadAsyncUpload uses the **FileApi module**, using the control in a project with the above authentication enabled, results in browser freeze. The file uploading request receives response with code 401 (Unauthorized), blocking in this way the functionality of the control and the whole page.

The above has been reported to be an [Internet explorer bug](https://connect.microsoft.com/IE/feedback/details/819941/file-upload-stop-working-on-ie-with-windows-authentication).

In order to resolve this issue, the **FileApi module** for the RadAsyncUpload should be disabled:

````ASPNET
<script type="text/javascript">
    Telerik.Web.UI.RadAsyncUpload.Modules.FileApi.isAvailable = function () {
		return false;
	}
  </script>
````

