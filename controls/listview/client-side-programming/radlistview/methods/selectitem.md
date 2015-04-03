---
title: selectItem
page_title: selectItem | UI for ASP.NET AJAX Documentation
description: selectItem
slug: listview/client-side-programming/radlistview/methods/selectitem
tags: selectitem
published: True
position: 8
---

# selectItem



## 

Method which selects the __RadListView__ item corresponding to the index passed as an argument.


| function selectItem(index) |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The item corresponding to the __index__ will be selected.|

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


