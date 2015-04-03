---
title: deselectItem
page_title: deselectItem | UI for ASP.NET AJAX Documentation
description: deselectItem
slug: listview/client-side-programming/radlistview/methods/deselectitem
tags: deselectitem
published: True
position: 9
---

# deselectItem



## 

Method which deselects the __RadListView__ item corresponding to the index passed as an argument.




| function deselectItem(index) |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The item corresponding to the __index__ will be deselected.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function DeselectFirstItem() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.deselectItem(0);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````


