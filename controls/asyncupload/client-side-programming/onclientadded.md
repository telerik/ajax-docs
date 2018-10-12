---
title: OnClientAdded
page_title: OnClientAdded | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientAdded
slug: asyncupload/client-side-programming/onclientadded
tags: onclientadded
published: True
position: 3
---

# OnClientAdded

## 

The **OnClientAdded** client-side event occurs when a new row has just been added to the **RadAsyncUpload** control.

>note This event occurs for the initial rows that are added when the **RadAsyncUpload** control is first loaded, as well as any rows automatically added after a file has been uploaded or after invocation of the client-side **addFileInput()** method.
>


The event handler receives two parameters:

1. The instance of the **RadAsycUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_row** returns the row that was just added.

* **get_rowIndex** returns the index of the row

Use the **OnClientAdded** event to perform any last minute changes to the rows in the **RadAsyncUpload** control.

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientAdded="OnClientAdded"></telerik:RadAsyncUpload>
````



````JavaScript
function OnClientAdded(sender, args) {
	var rowIndex = args.get_index();
	alert(rowIndex);
}
````


