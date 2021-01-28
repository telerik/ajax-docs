---
title: Auto height of Mobile RadMenu items group popup
page_title: Auto height of Mobile RadMenu items group popup - RadMenu
description: Check our Web Forms article about Auto height of Mobile RadMenu items group popup.
slug: menu/how-to/auto-height-of-mobile-radmenu-items-group-popup
tags: radmenu,auto,resize,height,size,items,menu,popup,mobile
published: True
position: 12
---

# Auto height of Mobile RadMenu items group popup

## 

The below example demonstrates how to dynamically change the height of the Mobile RadMenu dropdown, which holds the RadMenuItems, depending on the number of items opened. It is achieved by updating the max-height of groups' element in the OnClientItemOpened and OnClientItemClosed events.  

````CSS
html .RadMenuPopup .rmGroup {
	height: auto;
}

````


````ASP.NET
<telerik:RadMenu runat="server" RenderMode="Mobile" OnClientItemOpened="ExpandOpenedItem" OnClientItemClosed="ExpandClosedItem" >
	<Items>
		<telerik:RadMenuItem Text="Item" >
			<Items>
				<telerik:RadMenuItem Text="Item">
					<Items>
						<telerik:RadMenuItem Text="Item" />
						<telerik:RadMenuItem Text="Item" />
						<telerik:RadMenuItem Text="Item" />
						<telerik:RadMenuItem Text="Item" />
					</Items>
				</telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
			</Items>
		</telerik:RadMenuItem>
		<telerik:RadMenuItem Text="Item" >
			<Items>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
				<telerik:RadMenuItem Text="Item"></telerik:RadMenuItem>
			</Items>
		</telerik:RadMenuItem>
	</Items>
</telerik:RadMenu>

````

````JavaScript

var $ = $telerik.$;

function ExpandOpenedItem(sender, args) {
	var rmGroup = args.get_item().get_childListElement();

	setSlideHeight(rmGroup);
}

function ExpandClosedItem(sender, args) {
	var rmGroup = $(args.get_item().get_element()).parent();

	setSlideHeight(rmGroup);
}

function setSlideHeight(rmGroup) {
	var rmGroupHeight = $(rmGroup).height();

	$(".rmSlide").height(rmGroupHeight);
	$(".rmSlide").css("max-height", rmGroupHeight)
}


````


# See Also

 * [Render Modes]({%slug menu/mobile-support/render-modes%})

 * [Mobile Rendering]({%slug menu/mobile-support/responsive-adaptive-and-elastic-capabilities%})
