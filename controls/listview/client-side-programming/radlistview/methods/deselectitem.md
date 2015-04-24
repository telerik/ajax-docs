---
title: deselectItem
page_title: deselectItem | RadListView for ASP.NET AJAX Documentation
description: deselectItem
slug: listview/client-side-programming/radlistview/methods/deselectitem
tags: deselectitem
published: True
position: 9
---

# deselectItem



## 

Method which deselects the **RadListView** item corresponding to the index passed as an argument.




| function deselectItem(index) |  |  |
| ------ | ------ | ------ |
| **index** |Integer|The item corresponding to the **index** will be deselected.|

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


