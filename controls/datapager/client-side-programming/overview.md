---
title: Overview
page_title: RadDataPager Client-side Programming Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: datapager/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## 

To get reference to the RadDataPager client-side object, you can use one of the following approaches:

* Using the **$find(id)** method (shortcut for the *findComponent()* method) of the ASP.NET AJAX framework:

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function GetDataPager() {
            var datapager = $find("<%= RadDataPager1.ClientID %>");
        }
    </script>
</telerik:RadCodeBlock>
````



* Subscribing for the **OnDataPagerCreated** client-side event of the control. In its handler the sender argument references the datapager client object:

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        var datapager = null;
        function DataPagerCreated(sender, eventArgs) {
            datapager = sender; 
        }
    </script>
</telerik:RadCodeBlock>
<telerik:RadDataPager ID="RadDataPager1" runat="server">
    <ClientEvents OnDataPagerCreated="DataPagerCreated" />
</telerik:RadDataPager>
````



# See Also

 * [DataPager Object]({%slug datapager/client-side-programming/datapager-object%})
