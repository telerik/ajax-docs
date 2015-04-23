---
title: OnClientFileUploadFailed
page_title: OnClientFileUploadFailed | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientFileUploadFailed
slug: asyncupload/client-side-programming/onclientfileuploadfailed
tags: onclientfileuploadfailed
published: True
position: 11
---

# OnClientFileUploadFailed

## 

The **OnClientFileUploadFailed** client-side event occurs when error uploading the selected files(s) has occured. Common reason for this event firing is Telerik.Web.UI.WebResource.axd handler not being registered in the web.config. Another reason might be server-side error in custom upload handler is being used.

If the event fires a JavaScript error pops up. In order to supress the erros message, consider setting the set_handled property of the event args object to true.

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **set_handled** allows you to suppress the error message that would be thrown

* **get_handled** returns whether the error message should be suppressed. The default is true.

* **get_message** returns the original error message

* **get_loadedModuleName** returns the name of the currently loaded module. Can be Silverlight/Flash/IFrame

* **get_row** returns the upload row for which the event was fired.

One useful case for using this event is to check the error message and suppress it if needed:

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileUploadFailed="OnClientFileUploadFailed"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileUploadFailed(sender, args) {
  if (args.get_message()=="error") {
	  args.set_handled(true);
  }
}	
````


