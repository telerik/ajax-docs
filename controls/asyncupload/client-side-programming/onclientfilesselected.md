---
title: OnClientFilesSelected
page_title: OnClientFilesSelected | UI for ASP.NET AJAX Documentation
description: OnClientFilesSelected
slug: asyncupload/client-side-programming/onclientfilesselected
tags: onclientfilesselected
published: True
position: 6
---

# OnClientFilesSelected

## 

The __OnClientFilesSelected__ client-side event occurs whenfiles(s) are selected. These event can be cancelled, which will erase the selectedfiles collection.

The event handler receives two parameters:

1. The instance of the __RadAsyncUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __get_count__ returns the count of the selectedfiles.

* __set_cancel__ lets you cancel the event andprevent items from being uploaded

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFilesSelected="OnClientFilesSelected" MultipleFileSelection="Automatic"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFilesSelected(sender, args) {
	var selectedFilesCount = args.get_count();
	alert(selectedFilesCount);
}
````


