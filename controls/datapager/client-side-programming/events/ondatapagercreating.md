---
title: OnDataPagerCreating
page_title: OnDataPagerCreating - RadDataPager
description: Check our Web Forms article about OnDataPagerCreating.
slug: datapager/client-side-programming/events/ondatapagercreating
tags: ondatapagercreating
published: True
position: 0
---

# OnDataPagerCreating



## 

The **OnDataPagerCreating** client-side event is fired before **RadDataPager** is created.

The event handler receives one argument:

1. the [RadDataPager object]({%slug datapager/client-side-programming/datapager-object%}) that fired the event.

The following example uses the **OnDataPagerCreating** event to display a message:

````ASPNET
<telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server">
    <ClientEvents OnDataPagerCreating="DataPagerCreating" />
</telerik:RadDataPager>
````

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function DataPagerCreating(sender, eventArgs) {
            alert("Creating datapager with UniqueID: " + sender.get_uniqueID());
        }
    </script>
</telerik:RadCodeBlock>
````



# See Also

 * [OnDataPagerCreated]({%slug datapager/client-side-programming/events/ondatapagercreated%})

 * [OnDataPagerDestroying]({%slug datapager/client-side-programming/events/ondatapagerdestroying%})
