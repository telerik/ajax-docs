---
title: Getting ListView Client Object
page_title: Getting ListView Client Object - RadListView
description: Check our Web Forms article about Getting ListView Client Object.
slug: listview/client-side-programming/getting-listview-client-object
tags: getting,listview,client,object
published: True
position: 1
---

# Getting ListView Client Object



## 

To get reference of the RadListView client-side object, you can use one of the following approaches:

* Using the **$find(id)** method (shortcut for the findComponent() method) of the ASP.NET AJAX framework:

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function GetListView() {
            var listview = $find("<%= RadListView1.ClientID %>");
        }
    </script>
</telerik:RadCodeBlock>
````



* Subscribing for the **OnListViewCreated** client-side event of the control. In its handler the sender argument references the listview client object:

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock2" runat="server">
    <script type="text/javascript">
        var listView = null; function ListViewCreated(sender, eventArgs) {
            listView = sender;
        }
    </script>
</telerik:RadCodeBlock>
<telerik:RadListView ID="RadListView1" runat="server">
    <ClientSettings>
        <ClientEvents OnListViewCreated="ListViewCreated" />
    </ClientSettings>
</telerik:RadListView>
````


