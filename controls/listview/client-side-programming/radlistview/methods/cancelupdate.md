---
title: cancelUpdate
page_title: cancelUpdate | UI for ASP.NET AJAX Documentation
description: cancelUpdate
slug: listview/client-side-programming/radlistview/methods/cancelupdate
tags: cancelupdate
published: True
position: 5
---

# cancelUpdate



## 

Method which cancels the update for the __RadListView__ item corresponding to the index passed as an argument.




| function cancelUpdate(index) |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The edited item corresponding to the __index__ update will be canceled.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function CancelUpdateForFirstItem() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.cancelUpdate(0);
	            } 
	        </script>
	    </telerik:RadCodeBlock>
````


