---
title: OnPageSizeChanging
page_title: OnPageSizeChanging | UI for ASP.NET AJAX Documentation
description: OnPageSizeChanging
slug: datapager/client-side-programming/events/onpagesizechanging
tags: onpagesizechanging
published: True
position: 4
---

# OnPageSizeChanging



## 

The __OnPageSizeChanging__ client-side event is fired when current page size is set on __RadDataPager__object.

The event handler receives two arguments:

1. the [RadDataPager object]({%slug datapager/client-side-programming/datapager-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnPageSizeChanging event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_oldPageSize()__ |int||Returns the old page size.|
| __get_newPageSize()__ |int||Returns the new page size.|
| __get_domEvent()__ |DOM event object||Returns the DOM event object.|
| __set_newPageSize(value)__ ||int|Set the new page size.|
| __set_cancel(value)__ ||bool|Lets you prevent the page size from changing.|

The following example demonstrates how to use the event arguments of the __OnPageSizeChanging__ event:

````ASPNET
	    <telerik:RadDataPager ID="RadDataPager1" runat="server">
	        <ClientEvents OnPageSizeChanging="PageSizeChanging" />
	    </telerik:RadDataPager>
````



````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function PageSizeChanging(sender, eventArgs) {
	                var oldPageSize = eventArgs.get_oldPageSize();
	                var newPageSize = eventArgs.get_newPageSize();
	                eventArgs.set_newPageSize(3);
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



# See Also

 * [OnPageIndexChanging]({%slug datapager/client-side-programming/events/onpageindexchanging%})
