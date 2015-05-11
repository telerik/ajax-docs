---
title: deleteItem
page_title: deleteItem | RadListView for ASP.NET AJAX Documentation
description: deleteItem
slug: listview/client-side-programming/radlistview/methods/deleteitem
tags: deleteitem
published: True
position: 3
---

# deleteItem



## 

Method which fires the Delete command for the **RadListView** item corresponding to the index passed as an argument in edit mode.




| function deleteItem(index) |  |  |
| ------ | ------ | ------ |
| **index** |Integer|The item corresponding to the **index** will be deleted.|

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">
        function DeleteFirstItem() {
            var listView = $find("<%= RadListView1.ClientID %>");
            listView.deleteItem(0);
        } 
    </script>
</telerik:RadCodeBlock>
````


