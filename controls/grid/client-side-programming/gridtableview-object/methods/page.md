---
title: page
page_title: page - RadGrid
description: Check our Web Forms article about page.
slug: grid/client-side-programming/gridtableview-object/methods/page
tags: page
published: True
position: 32
---

# page



## 

Method which triggers paging action with page command passed as an argument. All server-side paging capabilities of RadGrid are applicable here as well. See the topic describing the [fireCommand()]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand%}) client-side method for further details.


|  **page(pageCommand)**  |  |  |
| ------ | ------ | ------ |
| **pageCommand** |String|The page command that will be executed.|

Example:

````JavaScript
function TriggerPageCommand() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.page("Next");
}
````


