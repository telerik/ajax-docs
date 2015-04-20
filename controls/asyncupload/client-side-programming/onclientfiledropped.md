---
title: OnClientFileDropped
page_title: OnClientFileDropped | UI for ASP.NET AJAX Documentation
description: OnClientFileDropped
slug: asyncupload/client-side-programming/onclientfiledropped
tags: onclientfiledropped
published: True
position: 4
---

# OnClientFileDropped

## 

The __OnClientFileDropped__ client-side event occurs when file(s) are dropped on some of the drop zones of RadAsyncUpload or on the control itself. If more then one file is dropped the event is fired for each one of them.

The event handler receives two parameters:

1. The instance of the __RadAsyncUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __get_row__ returns the row containing the file input field for the file that was just selected (\<li\> element)

* __get_file__ returns the file that is dropped and that is about to be uploaded.

* __get_originalDropEvent__ returns the original drop event that can provide the drop target element.

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileDropped="OnClientFileDropped"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileDropped(sender, args) {
	var dropTarget = args.get_originalDropEvent().target.parentElement.className;
	alert(dropTarget);
}
````


