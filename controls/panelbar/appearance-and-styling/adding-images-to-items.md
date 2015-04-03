---
title: Adding Images to Items
page_title: Adding Images to Items | UI for ASP.NET AJAX Documentation
description: Adding Images to Items
slug: panelbar/appearance-and-styling/adding-images-to-items
tags: adding,images,to,items
published: True
position: 2
---

# Adding Images to Items



## 

Each __RadPanelItem__ has a set of properties you can use to add images to your panel items. You can simply add a single image to each panel item, or you can add separate images that reflect the state of the panel item.

The following properties let you add images to panel items:

* __ImageUrl__ specifies an image that is added to the panel item. This image is always used, unless you set one of the other properties to specify an alternate image to use in a specific state.

* __HoveredImageUrl__ specifies an image that is used when the mouse is over the panel item.

* __SelectedImageUrl__ specifies an image that is used when the panel item is selected.

* __ExpandedImageUrl__ specifies an image that is used when the panel item is expanded, showing its child items.

* __DisabledImageUrl__ specifies an image that is used when the item is disabled.

To set the image properties at design time, use the [RadPanelBar Item Builder]({%slug panelbar/design-time/radpanelbar-item-builder%}).

The __ImagePosition__ property specifies where the image appears in the panel item. When __ImagePosition__ is "Left" (the default value), the image appears to the left of the item text. When __ImagePosition__ is "Right", the image appears on the far right of the item.

>caution Some skins (such as the "Web20" skin) use the position on the right to display an expand or collapse arrow. By setting __ImagePosition__ to "Right", you can hide the arrow that the skin provides.
>


The following example uses the __ImageUrl__ and __SelectedImageUrl__properties to create a __RadPanelBar__ that includes images on its items. The __ImagePosition__ is set to "Right" for parent items and "Left" for child items:

![Image Position](images/panelbar_imageposition.png)

````ASPNET
	    <telerik:RadPanelBar
	       ID="RadPanelBar1"
	       runat="server"
	       Skin="Web20">
	     <Items>
	        <telerik:RadPanelItem
	            runat="server"
	            Text="Home"
	            ImageUrl="~/Images/home.gif"
	            SelectedImageUrl="~/Images/SelectedHome.gif"
	            ImagePosition="Right">
	          <Items>
	            <telerik:RadPanelItem
	               runat="server"
	              Text="People"
	              SelectedImageUrl="~/Images/Selected.gif"
	              ImageUrl="~/Images/blank.gif">
	            </telerik:RadPanelItem>
	          </Items>
	        </telerik:RadPanelItem>
	        <telerik:RadPanelItem
	            runat="server"
	            Text="Office"
	            ImageUrl="~/Images/office.gif"
	            SelectedImageUrl="~/Images/SelectedOffice.gif"
	            ImagePosition="Right">
	          <Items>
	            <telerik:RadPanelItem
	              runat="server"
	              Text="People"
	              SelectedImageUrl="~/Images/Selected.gif"
	              ImageUrl="~/Images/blank.gif">
	            </telerik:RadPanelItem>
	            <telerik:RadPanelItem
	              runat="server"
	              SelectedImageUrl="~/Images/Selected.gif"
	              Text="Equipment"
	              ImageUrl="~/images/blank.gif">
	            </telerik:RadPanelItem>
	          </Items>
	        </telerik:RadPanelItem>
	     </Items>
	    </telerik:RadPanelBar> 
````



# See Also

 * [Controlling Appearance]({%slug panelbar/appearance-and-styling/controlling-appearance%})

 * [Skins]({%slug panelbar/appearance-and-styling/skins%})

 * [Overview]({%slug panelbar/templates/overview%})

 * [Setting  the CSS Class of Items]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%})
