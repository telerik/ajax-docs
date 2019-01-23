---
title: OnClientFileSelected
page_title: OnClientFileSelected | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientFileSelected
slug: asyncupload/client-side-programming/onclientfileselected
tags: onclientfileselected
published: True
position: 5
---

# OnClientFileSelected

## 

The **OnClientFileSelected** client-side event occurs when a file is selected in a file input control.

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_fileInputField** returns the file input field for the file that was just selected. (only when IFrame or FileAPI module is used)

* **get_row** returns the row containing the file input field for the file that was just selected (\<li\> element)

* **get_rowIndex** returns the index of the row

* **get_fileName** returns the name of the file selected

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientFileSelected="OnClientFileSelected"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileSelected(sender, args) {
	var currentFileName = args.get_fileName();
	alert(currentFileName);
}
````

## See Also

[Access selected file in the arguments of OnClientFileSelected event of AsyncUpload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/access-selected-file-in-the-arguments-of-onclientfileselected-event-of-asyncupload) KB article

