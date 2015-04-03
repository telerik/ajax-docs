---
title: insertItem
page_title: insertItem | UI for ASP.NET AJAX Documentation
description: insertItem
slug: listview/client-side-programming/radlistview/methods/insertitem
tags: insertitem
published: True
position: 4
---

# insertItem



## 

Method which fired the PerformInsert command for the respective __RadListView__ object.


| function insertItem() |
| ------ |
||

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function InsertNewItem() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.insertItem();
	            } 
	        </script>
	    </telerik:RadCodeBlock>
````


