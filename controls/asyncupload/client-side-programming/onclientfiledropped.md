---
title: OnClientFileDropped
page_title: OnClientFileDropped | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientFileDropped
slug: asyncupload/client-side-programming/onclientfiledropped
tags: onclientfiledropped
published: True
position: 4
---

# OnClientFileDropped

## 

The **OnClientFileDropped** client-side event occurs when file(s) are dropped on some of the drop zones of RadAsyncUpload or on the control itself. If more then one file is dropped the event is fired for each one of them.

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_row** returns the row containing the file input field for the file that was just selected (\<li\> element)

* **get_file** returns the file that is dropped and that is about to be uploaded.

* **get_originalDropEvent** returns the original drop event that can provide the drop target element.

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientFileDropped="OnClientFileDropped"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileDropped(sender, args) {
	var dropTarget = args.get_originalDropEvent().target.parentElement.className;
	alert(dropTarget);
}
````


