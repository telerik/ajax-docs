---
title: page
page_title: page | UI for ASP.NET AJAX Documentation
description: page
slug: listview/client-side-programming/radlistview/methods/page
tags: page
published: True
position: 11
---

# page



## 

Method which triggers paging action with page command passed as an argument. See the topic describing the [fireCommand method]({%slug listview/client-side-programming/radlistview/methods/firecommand%}) for further details.


| function page(pageCommand) |  |  |
| ------ | ------ | ------ |
| __pageCommand__ |Integer|The page command that will be executed.|

````ASPNET
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function GoToNextPage() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.page("Next");
	            }
	            function GoToPage() {
	                var listView = $find("<%= RadListView1.ClientID %>");
	                listView.page(3);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````


