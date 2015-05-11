---
title: editItem
page_title: editItem | RadListView for ASP.NET AJAX Documentation
description: editItem
slug: listview/client-side-programming/radlistview/methods/edititem
tags: edititem
published: True
position: 1
---

# editItem



## 

Method which switches the **RadListView** item corresponding to the index passed as an argument in edit mode.


|  **function editItem(index)**  |  |  |
| ------ | ------ | ------ |
| **index** |Integer|The item corresponding to the **index** will be switched in edit mode.|

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function EditFirstItem() {
            var listView = $find("<%= RadListView1.ClientID %>");
            listView.editItem(0);
        } 
    </script>
</telerik:RadCodeBlock>
````


