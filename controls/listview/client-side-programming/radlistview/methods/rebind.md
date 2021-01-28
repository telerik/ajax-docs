---
title: rebind
page_title: rebind - RadListView
description: Check our Web Forms article about rebind.
slug: listview/client-side-programming/radlistview/methods/rebind
tags: rebind
published: True
position: 10
---

# rebind



## 

Method which will force rebind of the RadListView and will refresh its state.


| function rebind() |
| ------ |
||

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function RefreshRadListView() {
            var listView = $find("<%= RadListView1.ClientID %>");
            listView.rebind();
        } 
    </script>
</telerik:RadCodeBlock>
````


