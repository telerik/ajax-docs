---
title: Templates
page_title: Templates | RadDrawer for ASP.NET AJAX Documentation
description: Templates
slug: drawer/functionality/templates
tags: template,client
published: True
position: 4
---


# Templates

**RadDrawer** uses [Kendo UI Templates](https://docs.telerik.com/kendo-ui/framework/templates/overview) to provide full control over the way pop-up items are rendered in the dropdown:

- [Templates](#templates)
	- [Content Template](#content-template)
	- [Items Template](#items-template)
	- [Mini Template](#mini-template)


>caption Example 1: Sample use of templates in RadDrawer. The result is having different items in open and collapsed state.
    
````ASP.NET
<script>
	function OnItemClick(sender, args) {
		var $clickedItemTextElement = args.get_item().find(".k-item-text");
		var $drawerContentElement = $telerik.$(sender.get_element()).find(".k-drawer-content");
		$drawerContentElement.find("#log").text($clickedItemTextElement.text())
	}
</script>

<telerik:RadDrawer runat="server" ID="RadDrawer1" Mode="push" MinHeight="330" DrawerWidth="200" SwipeToOpen="true">
	<ClientEvents OnItemClick="OnItemClick" />
	<ContentTemplate>
		<p style="user-select: none">
			This is the content element containg the text.
		</p>
		<p style="user-select: none">
			Swipe/Drag the mouse to the right to open the RadDrawer
		</p>
		<p id="log"></p>
	</ContentTemplate>
	<ItemsTemplate>
			<ul> 
			<li data-role='drawer-item' class='k-state-selected'>
				<span class='k-item-text'>First Item</span>
			</li> 
			<li data-role='drawer-item'>
				<span class='k-item-text'>Second Item</span>
			</li> 
			<li data-role='drawer-separator'></li> 
			<li data-role='drawer-item'>
				<span class='k-item-text'>Third Item</span>
			</li> 
				<li data-role='drawer-item'>
				<span class='k-item-text'>Fourth Item</span>
			</li> 
		</ul>
	</ItemsTemplate>
	<MiniSettings Width="40">
		<MiniTemplate>
			<ul>
				<li data-role='drawer-item'>
					<span class='k-icon t-i-add'></span>
					<span class='k-item-text'>Add</span>
				</li>
				<li data-role='drawer-separator'></li>
				<li data-role='drawer-item'>
					<span class='k-icon p-i-pencil'></span>
					<span class='k-item-text'>Edit</span>
				</li>
			</ul>
		</MiniTemplate>
	</MiniSettings>
</telerik:RadDrawer>
````


## Content Template

This is the template that is rendered as a content of the drawer. Here you can have the text or content that can be changed when a Drawer item is clicked. 

The content element can be accessed via the client API of the RadDrawer object or by ID. The ID of the content element is formed by combining the ClientID of the Drawer with `_Content`.

````JavaScript
var contentElement =  $get("<%= RadDrawer1.ClientID %>_Content");
var contentElementJQueryObject =  $find("<%= RadDrawer1.ClientID %>").get_contentElement();

````



## Items Template

This is the template that should contain a hierarchical HTML element, such as `<ul>` element with `<li>` child elements. There are some predefined classes and attributes that can be applied to the items to be distinguished as items, separators or icons. For example, in a `<ul>` with `<li>` scenario, the child `<li>` elements can have: 

* `data-role="drawer-item"` attribute - makes an element to be considered as a drawer item;
* `data-role="drawer-separator"` attribute - makes an element to appear as a separator;
* `class='k-state-selected'` class - makes the element to appear as selected;

For the content of the item, for example `<span>` elements, the following classes can be used: 

* `class='k-icon'` class - makes an element with an icon size. Usually combined with enabled Mini Mode;
* `class='k-item-text'` class - signs the element that contains the item's text

## Mini Template

A template that is visible when the Drawer is collapsed and Mini Mode is enabled. It is useful when the icons of the Collapsed and Expanded items need to be different.


## See Also

* [Live Demo - Templates](https://demos.telerik.com/aspnet-ajax/drawer/functionality/defaultcs.aspx)

* [Kendo UI Drawer Widget API Reference](https://docs.telerik.com/kendo-ui/controls/navigation/drawer/overview)

