---
title: extractKeysFromItem
page_title: extractKeysFromItem - RadGrid
description: Check our Web Forms article about extractKeysFromItem.
slug: grid/client-side-programming/gridtableview-object/methods/extractkeysfromitem
tags: extractkeysfromitem
published: True
position: 19
---

# extractKeysFromItem



## 

Method which extracts the key values (added to the **ClientDataKeyNames** collection of the master/detail table) from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.

>note Supported with InPlace and EditForms auto-generated edit form!
>


>note If invalid index is passed as argument to the method, the returned object array will be empty.
>



|  **extractKeyFromItem(gridItem) or extractKeysFromItem(index)**  |  |  |
| ------ | ------ | ------ |
| **gridItem** |HTML row object - <tr>|The editable row from which the key values will be extracted ( **GridDataItem** ).|
| **index** |Integer|The editable row (corresponding to the **index** ) from which the key values will be extracted.|

Example:

````JavaScript
function GetFirstEditedItemKeyValues() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();

    var keyValues = masterTable.extractKeysFromItem(0);
    var keyValuesSB = new Sys.StringBuilder();

    for (var property in keyValues) {
        keyValuesSB.append(String.format("<b>{0}</b> : {1} <br/>", property, keyValues[property]));
    }
}
````


