---
title: OnClientFilesUploaded
page_title: OnClientFilesUploaded | UI for ASP.NET AJAX Documentation
description: OnClientFilesUploaded
slug: asyncupload/client-side-programming/onclientfilesuploaded
tags: onclientfilesuploaded
published: True
position: 9
---

# OnClientFilesUploaded

## 

The **OnClientFilesUploaded** client-side event that occurs afterall selected files have been uploaded. You can use this event in order to execute custom action after the file upload have finished.

The event handler receives one parameter

1. The instance of the **RadAsyncUpload** control firing the event.

This event is suitable for invoking a client click or and Ajax request that will upload the files automatically.

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFilesUploaded="OnClientFilesUploaded" MultipleFileSelection="Automatic"></telerik:RadAsyncUpload>
<asp:Button runat="server" ID="Upload" />
````

````JavaScript
function OnClientFilesUploaded(sender) {
  var $=$telerik.$;
  $('#Upload').click();
}
````


