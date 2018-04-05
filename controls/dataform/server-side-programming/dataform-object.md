---
title: DataForm Object
page_title: DataForm Object | RadDataForm for ASP.NET AJAX Documentation
description: DataForm Object
slug: dataform/server-side-programming/dataform-object
tags: dataform,object
published: True
position: 0
---

# DataForm Object


Following is a table of the most important properties you should be aware of when working with **RadDataForm**.

## Properties


| Property | Description |
| ------ | ------ |
| **ConvertEmptyStringToNull** |Gets or sets a value indicating whether the empty string from the data source will be converted to null or not.|
| **DataKeyNames** |Gets or sets an array of data-field names that will be used to populate the **DataKeyValues** collection, when **RadDataForm** control is databinding.|
| **DataSourceID** |Gets or sets the ID property of the data source control that the control should use to retrieve its data source.|
| **InsertItemPosition** |Gets or sets the location of the InsertItem template when it is rendered as part of the **RadDataForm** control. It can be the only item rendered (Single), above the other item (FirstItem), below the other item (LastItem) or not rendered at all (None).|
| **ItemPlaceholderID** |The ID for the item placeholder in a **RadDataForm** control. The default is "itemPlaceholder".|
| **ValidationSettings-CommandsToValidate** |Gets or sets a commands list of commands names which will be validated.|
| **ValidationSettings-EnableValidation** |Gets or sets a value indicating of the validation is enabled.|
| **ValidationSettings-ValidationGroup** |Gets or sets the name of the validation group to be used for the integrated validation controls.|
| **ValidationSettings-ValidationGroup** |Gets or sets a value, indicating the total number of items in the data source when custom paging is used.Thus **RadDataForm** "understands" that the data source contains the specified number of records and it should fetch merely partof them at a time to execute requested operation.|

# See Also

 * [Events]({%slug dataform/server-side-programming/events%})
