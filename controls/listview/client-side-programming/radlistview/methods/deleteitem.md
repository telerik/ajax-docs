---
title: deleteItem
page_title: deleteItem | UI for ASP.NET AJAX Documentation
description: deleteItem
slug: listview/client-side-programming/radlistview/methods/deleteitem
tags: deleteitem
published: True
position: 3
---

# deleteItem



## 

Method which fires the Delete command for the __RadListView__ item corresponding to the index passed as an argument in edit mode.




| function deleteItem(index) |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The item corresponding to the __index__ will be deleted.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function DeleteFirstItem() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.deleteItem(0);
	            } 
	        </script>
	    </telerik:RadCodeBlock>
````


