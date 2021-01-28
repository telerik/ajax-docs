---
title: OnDataPagerDestroying
page_title: OnDataPagerDestroying - RadDataPager
description: Check our Web Forms article about OnDataPagerDestroying.
slug: datapager/client-side-programming/events/ondatapagerdestroying
tags: ondatapagerdestroying
published: True
position: 2
---

# OnDataPagerDestroying



## 

The **OnDataPagerDestroying** client-side event is fired when **RadDataPager** object is destroyed, i.e. on each *window.onunload*.

The event handler receives one argument:

1. the [RadDataPager object]({%slug datapager/client-side-programming/datapager-object%}) that fired the event.

The following example uses the **OnDataPagerDestroying** event to display a message:

````ASPNET
<telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server">
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
