---
title: selectItem
page_title: selectItem | RadListView for ASP.NET AJAX Documentation
description: selectItem
slug: listview/client-side-programming/radlistview/methods/selectitem
tags: selectitem
published: True
position: 8
---

# selectItem



## 

Method which selects the **RadListView** item corresponding to the index passed as an argument.


| function selectItem(index) |  |  |
| ------ | ------ | ------ |
| **index** |Integer|The item corresponding to the **index** will be selected.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function SelectFirstItem() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.selectItem(0);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````


