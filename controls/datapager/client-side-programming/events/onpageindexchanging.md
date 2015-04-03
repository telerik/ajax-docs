---
title: OnPageIndexChanging
page_title: OnPageIndexChanging | UI for ASP.NET AJAX Documentation
description: OnPageIndexChanging
slug: datapager/client-side-programming/events/onpageindexchanging
tags: onpageindexchanging
published: True
position: 3
---

# OnPageIndexChanging



## 

The __OnPageIndexChanging__ client-side event is fired when current page index is set on __RadDataPager__object.

The event handler receives two arguments:

1. the [RadDataPager object]({%slug datapager/client-side-programming/datapager-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnPageIndexChanging event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_oldPageIndex()__ |int||Returns the old page index.|
| __get_newPageIndex()__ |int||Returns the new page index.|
| __get_domEvent()__ |DOM event object||Returns the DOM event object.|
| __set_newPageIndex(value)__ ||int|Set the new page index.|
| __set_cancel(value)__ ||bool|Lets you prevent the page index from changing.|

The following example demonstrates how to use the event arguments of the __OnPageIndexChanging__ object:

````ASPNET
	    <telerik:RadDataPager ID="RadDataPager1" runat="server">
	        <ClientEvents OnPageIndexChanging="PageIndexChanging" />
	    </telerik:RadDataPager>
````



````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function PageIndexChanging(sender, eventArgs) {
	                var oldPageIndex = eventArgs.get_oldPageIndex();
	                var newPageIndex = eventArgs.get_newPageIndex();
	                eventArgs.set_newPageIndex(3);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



# See Also

 * [OnPageSizeChanging]({%slug datapager/client-side-programming/events/onpagesizechanging%})
