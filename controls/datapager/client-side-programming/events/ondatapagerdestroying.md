---
title: OnDataPagerDestroying
page_title: OnDataPagerDestroying | UI for ASP.NET AJAX Documentation
description: OnDataPagerDestroying
slug: datapager/client-side-programming/events/ondatapagerdestroying
tags: ondatapagerdestroying
published: True
position: 2
---

# OnDataPagerDestroying



## 

The __OnDataPagerDestroying__ client-side event is fired when __RadDataPager__ object is destroyed, i.e. on each *window.onunload*.

The event handler receives one argument:

1. the [RadDataPager object]({%slug datapager/client-side-programming/datapager-object%}) that fired the event.

The following example uses the __OnDataPagerDestroying__ event to display a message:

````ASPNET
	    <telerik:RadDataPager ID="RadDataPager1" runat="server">
	        <ClientEvents OnDataPagerDestroying="DataPagerDestroying" />
	    </telerik:RadDataPager>
````



````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function DataPagerDestroying(sender, eventArgs) {
	                alert("Destroying datapager with UniqueID: " + sender.get_uniqueID());
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



# See Also

 * [OnDataPagerCreating]({%slug datapager/client-side-programming/events/ondatapagercreating%})

 * [OnDataPagerCreated]({%slug datapager/client-side-programming/events/ondatapagercreated%})
