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

The **OnPageIndexChanging** client-side event is fired when current page index is set on **RadDataPager** object.

The event handler receives two arguments:

1. the [RadDataPager object]({%slug datapager/client-side-programming/datapager-object%}) that fired the event.

1. an event arguments object that exposes the following methods:OnPageIndexChanging event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_oldPageIndex()** |int||Returns the old page index.|
| **get_newPageIndex()** |int||Returns the new page index.|
| **get_domEvent()** |DOM event object||Returns the DOM event object.|
| **set_newPageIndex(value)** ||int|Set the new page index.|
| **set_cancel(value)** ||bool|Lets you prevent the page index from changing.|

The following example demonstrates how to use the event arguments of the **OnPageIndexChanging** object:

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
