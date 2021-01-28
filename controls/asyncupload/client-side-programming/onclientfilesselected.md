---
title: OnClientFilesSelected
page_title: OnClientFilesSelected - RadAsyncUpload
description: Check our Web Forms article about OnClientFilesSelected.
slug: asyncupload/client-side-programming/onclientfilesselected
tags: onclientfilesselected
published: True
position: 6
---

# OnClientFilesSelected

## 

The **OnClientFilesSelected** client-side event occurs when files(s) are selected. This event can be cancelled, which will erase the selectedfiles collection.

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_count** returns the count of the selected files.

* **set_cancel** lets you cancel the event and prevent items from being uploaded

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientFilesSelected="OnClientFilesSelected" MultipleFileSelection="Automatic"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFilesSelected(sender, args) {
	var selectedFilesCount = args.get_count();
	alert(selectedFilesCount);
}
````


