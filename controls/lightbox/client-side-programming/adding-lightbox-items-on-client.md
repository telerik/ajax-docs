---
title: Adding LightBox Items on Client
page_title: Adding LightBox Items on Client | UI for ASP.NET AJAX Documentation
description: Adding LightBox Items on Client
slug: lightbox/client-side-programming/adding-lightbox-items-on-client
tags: adding,lightbox,items,on,client
published: True
position: 1
---

# Adding LightBox Items on Client



This help article describes scenarios for adding items to a __RadLightBox__ control. Sometimes you may need to add items to a__RadLightBox__ control dynamically after you have already bound it to a collection of images.Or, perhaps you do not know the exact images that the control will display at the initial load of the page, and you’ll let a customer choose themlater from a list.

__RadLightBox__ allows you to create and add items to the __RadLightBoxItemsCollection__by using the client API. To do this, first you have to create an item of type __Telerik.Web.UI.LightBoxItem__.When you have created the item, you can use the item’s API to set properties like __ImageUrl__, __NavigateUrl__,__Description__, __Title__, __TargetControlID__, __Width__ and__Height__. __Example 1__ demonstrates how to set some of these properties for a__RadLightBox__.

## RadLigthBoxItemCollection

The __get_items()__ method of the __RadLightBox__ object returns a__RadLightBoxItemCollection__ object. The __RadLightBoxItemCollection__ provides the methods andproperties described in __Table 1__.

__Table 1__: List of methods and properties that you can use to manipulate the collection of items.


| Methods and Properties | Parameter | Description |
| ------ | ------ | ------ |
| __add()__ |RadLightBoxItem|Adds an item to the items collection.|
| __clear()__ |none|Clears the items from the __RadLightBoxItemCollection__ .|
| __forEach()__ |handler|Iterates through the item collection.|
| __getItem()__ |int| __Gets an item from the item collection corresponding to the index specified by the parameter.__ |
| __get_count()__ |none|Returns the number of items.|
| __insert()__ |int, RadLightBoxItem| __Inserts an item into the items collection at the position specified by the first (index) parameter.__ |
| __indexOf()__ |RadLightBoxItem|Gets the index of an item.|
| __remove()__ |RadLightBoxItem|Removes a child item from the Items collection.|
| __removeAt()__ |int|Removes the item at the specified index.|
| __toArray()__ |none|Converts the LightBox items to an array.|

## RadLightBoxItem

The __getItem()__ method of the __RadLightBoxItemCollection__ object returns a__RadLightBoxItem__ object. The __RadLightBoxItem__ provides the properties described in__Table 2__.

__Table 2__: List of properties by which you can manipulate a single item.


| Properties | Parameter | Description |
| ------ | ------ | ------ |
| __get_description()__ |none|Gets the description of the item.|
| __get_height()__ |none|Gets the height of the item.|
| __get_imageUrl()__ |none|Gets the image URL of the item.|
| __get_navigateUrl()__ |none|Gets the navigate URL of the item.|
| __get_targetControlID()__ |none|Gets the id of the control that triggers the __RadLightBox__ .|
| __get_title()__ |none|Gets the title of the item.|
| __get_width()__ |none|Gets the width of the item.|
| __set_description()__ |string|Sets the description of the item.|
| __set_height()__ |int|Sets the height of the item.|
| __set_imageUrl()__ |string|Sets the image URL of the item.|
| __set_navigateUrl()__ |string|Sets the navigate URL of the item.|
| __set_targetControlID()__ |string|Sets the id of the control that triggers the __RadLightBox.__ |
| __set_title()__ |string|Sets the title of the item.|
| __set_width()__ |int|Sets the width of the item.|

Example 1 demonstrates how to add an item on a button click.

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
	        <telerik:RadLightBox Id="RadLightBox1" runat="server">
	            <Items>
	                <telerik:RadLightBoxItem Description="Description of the first item" ImageUrl="../images/thumbnail/1.png" Title="Title of the first item"></telerik:RadLightBoxItem>
	            </Items>
	        </telerik:RadLightBox>
	
````



# See Also

 * [RadLightBox Overview](http://demos.telerik.com/aspnet-ajax/lightbox/examples/overview/defaultvb.aspx)

 * [Client-Side Basics]({%slug lightbox/client-side-programming/overview%})
