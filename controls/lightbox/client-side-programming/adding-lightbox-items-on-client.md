---
title: Adding LightBox Items on Client
page_title: Adding LightBox Items on Client | RadLightBox for ASP.NET AJAX Documentation
description: Adding LightBox Items on Client
slug: lightbox/client-side-programming/adding-lightbox-items-on-client
tags: adding,lightbox,items,on,client
published: True
position: 1
---

# Adding LightBox Items on Client



This help article describes scenarios for adding items to a **RadLightBox** control. Sometimes you may need to add items to a **RadLightBox** control dynamically after you have already bound it to a collection of images.Or, perhaps you do not know the exact images that the control will display at the initial load of the page, and you’ll let a customer choose themlater from a list.

**RadLightBox** allows you to create and add items to the **RadLightBoxItemsCollection** by using the client API. To do this, first you have to create an item of type **Telerik.Web.UI.LightBoxItem**.When you have created the item, you can use the item’s API to set properties like **ImageUrl**, **NavigateUrl**,**Description**, **Title**, **TargetControlID**, **Width** and **Height**. **Example 1** demonstrates how to set some of these properties for a **RadLightBox**.

## RadLigthBoxItemCollection

The **get_items()** method of the **RadLightBox** object returns a **RadLightBoxItemCollection** object. The **RadLightBoxItemCollection** provides the methods andproperties described in **Table 1**.

**Table 1**: List of methods and properties that you can use to manipulate the collection of items.


| Methods and Properties | Parameter | Description |
| ------ | ------ | ------ |
| **add()** |RadLightBoxItem|Adds an item to the items collection.|
| **clear()** |none|Clears the items from the **RadLightBoxItemCollection** .|
| **forEach()** |handler|Iterates through the item collection.|
| **getItem()** |int| Gets an item from the item collection corresponding to the index specified by the parameter. |
| **get_count()** |none|Returns the number of items.|
| **insert()** |int, RadLightBoxItem| Inserts an item into the items collection at the position specified by the first (index) parameter. |
| **indexOf()** |RadLightBoxItem|Gets the index of an item.|
| **remove()** |RadLightBoxItem|Removes a child item from the Items collection.|
| **removeAt()** |int|Removes the item at the specified index.|
| **toArray()** |none|Converts the LightBox items to an array.|

## RadLightBoxItem

The **getItem()** method of the **RadLightBoxItemCollection** object returns a **RadLightBoxItem** object. The **RadLightBoxItem** provides the properties described in **Table 2**.

**Table 2**: List of properties by which you can manipulate a single item.


| Properties | Parameter | Description |
| ------ | ------ | ------ |
| **get_description()** |none|Gets the description of the item.|
| **get_height()** |none|Gets the height of the item.|
| **get_imageUrl()** |none|Gets the image URL of the item.|
| **get_navigateUrl()** |none|Gets the navigate URL of the item.|
| **get_targetControlID()** |none|Gets the id of the control that triggers the **RadLightBox** .|
| **get_title()** |none|Gets the title of the item.|
| **get_width()** |none|Gets the width of the item.|
| **set_description()** |string|Sets the description of the item.|
| **set_height()** |int|Sets the height of the item.|
| **set_imageUrl()** |string|Sets the image URL of the item.|
| **set_navigateUrl()** |string|Sets the navigate URL of the item.|
| **set_targetControlID()** |string|Sets the id of the control that triggers the **RadLightBox.** |
| **set_title()** |string|Sets the title of the item.|
| **set_width()** |int|Sets the width of the item.|

**Example 1** demonstrates how to add an item on a button click.

````ASPNET
<script type="text/javascript">
	function AddLightBoxItem()
	{
		var lightBox = $find('<%= RadLightBox1.ClientID %>');
		var lightBoxItem = new Telerik.Web.UI.LightBoxItem;
		lightBoxItem.set_imageUrl("../images/thumbnail/2.png");
		lightBoxItem.set_description("Description of the second item");
		lightBoxItem.set_title("Title of the second item");
		var lightBoxItemCollection = lightBox.get_items();
		lightBoxItemCollection.add(lightBoxItem);
	}

	function OpenLightBox()
	{
		var lightBox = $find('<%= RadLightBox1.ClientID %>');
		lightBox.show();
	}
</script>

<asp:Button Text="Add item" ID="Button1" OnClientClick="AddLightBoxItem(); return false;" runat="server" />
<asp:Button Text="Open LightBox" ID="Button2" OnClientClick="OpenLightBox(); return false;" runat="server" />
<telerik:RadLightBox RenderMode="Lightweight" Id="RadLightBox1" runat="server">
	<Items>
		<telerik:RadLightBoxItem Description="Description of the first item" ImageUrl="../images/thumbnail/1.png" Title="Title of the first item"></telerik:RadLightBoxItem>
	</Items>
</telerik:RadLightBox>
	
````



# See Also

 * [RadLightBox Overview](https://demos.telerik.com/aspnet-ajax/lightbox/examples/overview/defaultvb.aspx)

 * [Client-Side Basics]({%slug lightbox/client-side-programming/overview%})
