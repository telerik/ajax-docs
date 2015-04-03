---
title: TagCloud Object
page_title: TagCloud Object | UI for ASP.NET AJAX Documentation
description: TagCloud Object
slug: tagcloud/client-side-programming/tagcloud-object
tags: tagcloud,object
published: True
position: 0
---

# TagCloud Object



You can find in this help article information how to get the __RadTagCloud__ client-side object and use its properties and methods.

## Getting the RadTagCloud client-side object

RadTagCloud creates a client-side object with the ClientID of the tagCloud. You can obtain the reference using the following JavaScript code:

````JavaScript
	    var tagCloud = $find("<%= RadTagCloud1.ClientID %>");
````



## 

Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addTagCloudItem|RadTagCloudItem||Creates, renders a new[TagCloudItem]({%slug tagcloud/client-side-programming/tagclouditem-object%})item and inserts it in the get_items Array.|
|dataBind|||Data binds the data of the RadTagCloud.|
|get_appendClientDataBoundItems||Boolean|Gets whether data bound items will be appended to the TagCloud.|
|get_clientDataSource||Telerik.Web.UI.RadClientDataSource|Gets the RadClientDataSource that is associated with the TagCloud.|
|get_clientDataSourceID||String|Gets the ID of the RadClientDataSource that is associated with the TagCloud.|
|get_containerElement||Object|Returns the UL DOM element that wraps all tagCloud's items.|
|get_dataSource||Object|Gets the data source of the TagCloud.|
|get_distribution||Telerik.Web.UI.TagCloudDistribution|Returns a value of type Telerik.Web.UI.TagCloudDistribution that indicates how the font-size is distributed among the different items.|
|get_enabled||Boolean|Returns a value, indicating whether the tagCloud control is enabled.|
|get_height||Number|Returns the height of the tagCloud control.|
|get_items||Array|Returns an array of the tagCloud's items. The items are of type Telerik.Web.UI.RadTagCloudItem.|
|get_sorting||Telerik.Web.UI.TagCloudSorting|Returns a value of type Telerik.Web.UI.TagCloudSorting that indicates how the items are sorted.|
|get_target||String|Returns the target window or frame to display the new content when the TagCloud item is clicked.|
|get_width||Number|Returns the width of the tagCloud control.|
|removeTagCloudItem|Telerik.Web.UI.RadTagCloudItem, Bool||Removes a RadTagCloudItem item. The second boolean parameter instructs whether the TagCould to be repainted after removing the item.|
|repaint|||Redraws the TagCloud control.|
|requestItems|String||Initiates RadTagCloudItem items request with a specified argument, causing the request to be sent to a WebService. All current items will be removed,before the new ones are populated.|
|set_appendClientDataBoundItems|Boolean||Sets whether data bound items will be appended to the TagCloud.|
|set_clientDataSourceID|String||Sets the ID of the RadClientDataSource that is associated with the TagCloud.|
|set_dataSource|Array||Sets a custom data source for the RadTagCloud.|
|set_enabled|Bool||Sets a bool value indicating whether the tagCloud is enabled.|
|set_target|String||Sets the target window or frame to display the new content when the TagCloud item is clicked.|



## 

Events


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add_itemClicked|Function||Adds a handler for the itemClicked even of the tagCloud control.|
|add_itemClicking|Function||Adds a handler for the itemClicking event of the tagCloud control.|
|add_load|Function||Adds a handler to the load event of the tagCloud control.|
|remove_itemClicked|Function||Removes the handler from the handlers collection that is associated with the itemClicked event.|
|remove_itemClicking|Function||Removes the handler from the handlers collection that is associated with the itemClicking event.|

# See Also

 * [TagCloudItem Object]({%slug tagcloud/client-side-programming/tagclouditem-object%})
