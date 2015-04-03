---
title: DataForm Object
page_title: DataForm Object | UI for ASP.NET AJAX Documentation
description: DataForm Object
slug: dataform/server-side-programming/dataform-object
tags: dataform,object
published: True
position: 0
---

# DataForm Object



Following is a table of the most important properties you should be aware of when working with __RadDataForm__.

## Properties


| Property | Description |
| ------ | ------ |
| __ConvertEmptyStringToNull__ |Gets or sets a value indicating whether the empty string from the data source will be converted to null or not.|
| __DataKeyNames__ |Gets or sets an array of data-field names that will be used to populate the __DataKeyValues__ collection, when __RadDataForm__ control is databinding.|
| __DataSourceID__ |Gets or sets the ID property of the data source control that the control should use to retrieve its data source.|
| __InsertItemPosition__ |Gets or sets the location of the InsertItem template when it is rendered as part of the __RadDataForm__ control.|
| __ItemPlaceholderID__ |The ID for the item placeholder in a __RadDataForm__ control. The default is "itemPlaceholder".|
| __ValidationSettings-CommandsToValidate__ |Gets or sets a commands list of commands names which will be validated.|
| __ValidationSettings-EnableValidation__ |Gets or sets a value indicating of the validation is enabled.|
| __ValidationSettings-ValidationGroup__ |Gets or sets the name of the validation group to be used for the integrated validation controls.|
| __ValidationSettings-ValidationGroup__ |Gets or sets a value, indicating the total number of items in the data source when custom paging is used.Thus __RadDataForm__ "understands" that the data source contains the specified number of records and it should fetch merely partof them at a time to execute requested operation.|

# See Also

 * [Events]({%slug dataform/server-side-programming/events%})
