---
title: TagCloudItem Object
page_title: TagCloudItem Object | UI for ASP.NET AJAX Documentation
description: TagCloudItem Object
slug: tagcloud/client-side-programming/tagclouditem-object
tags: tagclouditem,object
published: True
position: 1
---

# TagCloudItem Object



You can find in this help article information how to get the __RadTagCloudItem__ client-side object and use its properties and methods.

## 

You can get instance of the __RadTagCloudItem__ client-side object using the appropriate methods of the	[RadTagCould]({%slug tagcloud/client-side-programming/tagcloud-object%}) object (e.g., via the __get_items()__ method).

## 

Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|createAnchor||Object|Creates an anchor element inside the item's container and returns its instance.|
|get_accessKey||String|Returns the __accessKey__ attribute's value of the item's anchor element.|
|get_anchorElement||Object|Returns the item's anchor element. If one does not exist, it will be created automatically.|
|get_index||Number|Returns the index of the RadTagCloudItem.|
|get_navigateUrl||String|Returns the value set to the __NavigateUrl__ property.|
|get_rowIndex||Number|Returns the index of the item's row.|
|get_tabIndex||Number|Returns the value set to the __TabIndex__ property.|
|get_text||String|Returns the Text of the item.|
|get_toolTip||String|Returns the text set to the item's __Tooltip__ property.|
|get_value||String|Returns the value set to the __Value__ property.|
|get_weight||Number|Returns the weight indicator.|
|set_accessKey|String||Sets the accessKey attribute of the item's anchor element.|
|set_navigateUrl|String||Sets the __NavigateUrl__ property of the item.|
|set_tabIndex|Number||Sets the __TabIndex__ property of the item.|
|set_text|String||Sets the text of the item.|
|set_toolTip|String||Sets the tooltip text of the item.|
|set_value|String||Sets the value of the item.|
|set_weight|Number||Sets the weight indicator of the item.|

# See Also

 * [TagCloud Object]({%slug tagcloud/client-side-programming/tagcloud-object%})
