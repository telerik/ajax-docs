---
title: TagCloud Object
page_title: TagCloud Object | RadTagCloud for ASP.NET AJAX Documentation
description: TagCloud Object
slug: tagcloud/server-side-programming/tagcloud-object
tags: tagcloud,object
published: True
position: 0
---

# TagCloud Object



## RadTagCloud's properties




>caption  

| Name | Type | Description |
| ------ | ------ | ------ |
| **AutoPostBack** |bool|Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control.|
| **DataNavigateUrlField** |string|Gets or sets the field of the data source that provides the URL (NavigateUrl) content of the TagCloud items.|
| **DataTextField** |string|Gets or sets the field of the data source that provides the text content of the TagCloud items.|
| **DataNavigateUrlFormatString** |string|Gets or sets the formatting string used to control how data bound to the NavigateUrl property of the TagCloud item is displayed.|
| **DataTextFormatString** |string|Gets or sets the formatting string used to control how data bound to the Text property of the TagCloud item is displayed.|
| **DataToolTipField** |string|Gets or sets the field of the data source that provides the ToolTip content of the TagCloud items.|
| **DataToolTipFormatString** |string|Gets or sets the formatting string used to control how data bound to the ToolTip property of the TagCloud item is displayed.|
| **DataValueField** |string|Gets or sets the field of the data source that provides the value content of the TagCloud items.|
| **DataWeightField** |string|Gets or sets the field of the data source that provides the weight of the TagCloud items.|
| **Distribution** |enum

1. Linear

1. Logarithmic|Gets or sets a value indicating how the font-size will be distributed among the different words (items).|
| **MinFontSize** |unit|Gets or sets the font-size to the least important (frequent) item. Used as a lower bound for automatic distribution of the font-size among the tags.|
| **MaxFontSize** |unit|Gets or sets the font-size to the most important (frequent) item. Used as an upper bound for automatic distribution of the font-size among the tags.|
| **MinColor** |System.Drawing.Color|Gets or sets the fore color to the least important (frequent) item. Used as a lower bound for automatic coloring of the tags.|
| **MaxColor** |System.Drawing.Color|Gets or sets the fore color to the most important (frequent) item. Used as an upper bound for automatic coloring of the tags.|
| **MinimalWeightAllowed** |double|Gets or sets the minimal weight a TagCloud item could have. If the weight of the item is less than this value, the keyword will not appear in the cloud. The default value is 0.0, which means the items will appear in the cloud regardless of their weight.|
| **MaxNumberOfItems** |int|Gets or sets the maximal number items that can appear in the cloud. The default value is 0, which means the items will appear in the cloud no matter their count.|
| **TakeTopWeightedItems** |bool|Should be used with **MaxNumberOfItems** property. Gets or sets a bool value indicating whether the [ **MaxNumberOfItems** ] visible items will be the ones with the biggest weight, or the ones that occur first in the DataSource. The default value is **false** (i.e. the items are the first that appear in the DataSource).|
| **PostBackUrl** |string|The URL to post to when an item is clicked.|
| **RenderItemWeight** |bool|Gets or sets a bool value indicating whether the item weight will be rendered. It is rendered right next to the item's text.|
| **Sorting** |enum

1. NotSorted

1. AlphabeticAsc

1. AlphabeticDsc

1. WeightedAsc

1. WeightedDsc|Gets or sets a value indicating how the TagCloud items will be sorted.|
| **Target** |string|Gets or sets the target window or frame to display the new content when the TagCloud item is clicked.Values must begin with a letter in the range of **a** through **z** (case-insensitive) except for the following values:

*  **_blank** - renders the content in a new window without frames;

*  **_parent** - renders the content in the immediate frameset parent;

*  **_search** - renders the content in the search pane;

*  **_self** - renders the content in the frame with focus;

*  **_top** - renders the content in the full window without frames;|
| **OnClientItemClicking** |string|Sets the name of the javascript function called when an item is clicked.|
| **OnClientItemClicked** |string|Sets the name of the javascript function called after an item is clicked.|
| **OnClientLoad** |string|Sets the name of the javascript function called when the control loads.|

## Events


>caption  

| Name | Description |
| ------ | ------ |
| **ItemDataBound** |Adds or removes an event handler method from the ItemDataBound event. The event is fried right after RadTagCloudItem is databound.|
| **ItemClick** |Adds or removes an event handler method from the ItemClick event. The event is fired after RadTagCloudItem is clicked.|



## RadTagCloudItem


>caption  

| Name | Type | Description |
| ------ | ------ | ------ |
| **AccessKey** |String|Gets or sets the access key of the TagCloud item.|
| **DataItem** |object|Gets or sets the data object (from the data source) associated with the TagCloud item.|
| **NavigateUrl** |string|Gets or sets the URL of the TagCloud item.|
| **TabIndex** |Short|Gets or sets the TabIndex of the tagCloud item.|
| **Text** |string|Gets or sets the text that is displayed in the TagCloud item.|
| **ToolTip** |String|Gets or sets the ToolTip of the TagCloud item.|
| **Value** |String|Gets or sets the Value of the TagCloud item.|
| **Weight** |double|Gets or sets the weight, that determines how the TagCloud item (tag, keyword) will be styled. Greater value means, the value of the font size will be closer to the one of the RadTagCloud's MaxFontSize property.|
