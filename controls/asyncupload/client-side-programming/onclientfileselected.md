---
title: OnClientFileSelected
page_title: OnClientFileSelected | UI for ASP.NET AJAX Documentation
description: OnClientFileSelected
slug: asyncupload/client-side-programming/onclientfileselected
tags: onclientfileselected
published: True
position: 5
---

# OnClientFileSelected



## 

The __OnClientFileSelected__ client-side event occurs when a file is selected in a file input control.

The event handler receives two parameters:

1. The instance of the __RadAsyncUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __get_fileInputField__ returns the file input field for the file that was just selected. (only when IFrame modules is used)

* __get_row__ returns the row containing the file input field for the file that was just selected (<LI> element)

* __get_rowIndex__ returns the index of the row

* __get_fileName__ returns the name of the file selected

````ASPNET
	            <telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileSelected="OnClientFileSelected"></telerik:RadAsyncUpload>
````



````JavaScript
	              function OnClientFileSelected(sender, args) {
	                    var currentFileName = args.get_fileName();
	                    alert(currentFileName);
	                }
````


