---
title: updateItem
page_title: updateItem | RadListView for ASP.NET AJAX Documentation
description: updateItem
slug: listview/client-side-programming/radlistview/methods/updateitem
tags: updateitem
published: True
position: 2
---

# updateItem



## 

Method which fires the Update command for the **RadListView** edited item corresponding to the index passed as an argument in edit mode.


|  **function updateItem(index)**  |  |  |
| ------ | ------ | ------ |
| **index** |Integer|The edited item corresponding to the **index** will be updated.|

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function UpdateFirstItem() {
            var listView = $find("<%= RadListView1.ClientID %>");
            listView.updateItem(0);
        } 
    </script>
</telerik:RadCodeBlock>
````


