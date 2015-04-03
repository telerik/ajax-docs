---
title: editItem
page_title: editItem | UI for ASP.NET AJAX Documentation
description: editItem
slug: listview/client-side-programming/radlistview/methods/edititem
tags: edititem
published: True
position: 1
---

# editItem



## 

Method which switches the __RadListView__ item corresponding to the index passed as an argument in edit mode.


|  __function editItem(index)__  |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The item corresponding to the __index__ will be switched in edit mode.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function EditFirstItem() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.editItem(0);
	            } 
	        </script>
	    </telerik:RadCodeBlock>
````


