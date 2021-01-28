---
title: get_clientDataKeyValue
page_title: get_clientDataKeyValue - RadListView
description: Check our Web Forms article about get_clientDataKeyValue.
slug: listview/client-side-programming/radlistview/properties/get_clientdatakeyvalue
tags: get_clientdatakeyvalue
published: True
position: 1
---

# get_clientDataKeyValue


The property returns an **Array** of objects representing the values of the `ClientDataKeyNames` for the RadListView items.

````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" ClientDataKeyNames="ID">
</telerik:RadListView>
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function GetClientDataKeyValueForFirstItem() {
            var clientDataKeyValues = $find("<%= RadListView1.ClientID %>").get_clientDataKeyValue();
            var itemIndex = 0; 
            var firstItemKeyValue = clientDataKeyValues[itemIndex]["ID"];
        }
    </script>
</telerik:RadCodeBlock>
````

>note This method is supported only with server-side data binding. If you are working with client-side binding, see the following KB article: [Item drag and drop with client data binding](https://www.telerik.com/support/kb/aspnet-ajax/listview/details/item-drag-and-drop-with-client-data-binding).
