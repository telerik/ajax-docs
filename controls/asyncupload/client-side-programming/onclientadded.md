---
title: OnClientAdded
page_title: OnClientAdded | UI for ASP.NET AJAX Documentation
description: OnClientAdded
slug: asyncupload/client-side-programming/onclientadded
tags: onclientadded
published: True
position: 3
---

# OnClientAdded



## 

The __OnClientAdded__ client-side event occurs when a new row has just been added to the __RadAsyncUpload__ control.

>note This event occurs for the initial rows that are added when the __RadAsyncUpload__ control is first loaded, as well as any rows automatically added after a file has been uploaded or after invocation of the client-side __addFileInput()__ method.
>


The event handler receives two parameters:

1. The instance of the __RadAsycUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __get_row__ returns the row that was just added.

* __get_rowIndex__ returns the index of the row

Use the __OnClientAdded__ event to perform any last minute changes to the rows in the __RadAsyncUpload__ control.

````ASPNET
	            <telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientAdded="OnClientAdded"></telerik:RadAsyncUpload>
````



````JavaScript
	            function OnClientAdded(sender, args) {
	                var rowIndex = args.get_index();
	                alert(rowIndex);
	            }
````


