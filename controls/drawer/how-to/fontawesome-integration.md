---
title: How to integrate the RadDrawer with FontAwesome icons
page_title: How to integrate the RadDrawer with FontAwesome icons | RadDrawer for ASP.NET AJAX Documentation
description: How to integrate the RadDrawer with FontAwesome icons
slug: drawer/how-to/how-to-integrate-raddrawer-with-fontawesome-icons
tags: how,to,integrate,raddrawer,drawer,fontawesome,icons
published: True
position: 0
---

# How to Integrate RadDrawer with FontAwesome icons

This article explains how to create the items of the Drawer and use the FontAwesome icons

* [FontAwesome 5](#fontawesome-5)

* [FontAwesome 4](#fontawesome-5)

RadDrawer control receives a hierarchical structure of elements as explained in [Getting Started]() article. For example, an unordered list where each `<li>` element
is a separate item when the `data-role` attribute has value `drawer-item`. The element inside that contains text of the item should have the `k-item-text` class as demonstrated below:

````ASP.NET
<Template>
	<ul> 
		<li data-role='drawer-item' class='k-state-selected'>
			<span class='k-item-text'>Camera</span>
		</li> 
	</ul>
</Template>
````

In order to add some icons before the text, we can add an additional `<span>` element with class `k-icon` that would serve as a font-icon placeholder:

````ASP.NET
<Template>
	<ul> 
		<li data-role='drawer-item' class='k-state-selected'>
			<span class='k-icon'></span>
			<span class='k-item-text'>Camera</span>
		</li> 
	</ul>
</Template>
````

As the [FontAwesome 5.*](https://fontawesome.com/v5.9.0/how-to-use/on-the-web/setup/hosting-font-awesome-yourself) toolkit has some breaking changes compared to the previous FontAwesome 4 toolkit, there is a slight difference on the additional classes that should be added to the `k-icon` element.

Following are some examples for both the 4 and 5 versions of the FontAwesome toolkit.

## FontAwesome 5

The default class for the 5.* version is `fas` and to add a specific icon, the `fa-iconname` class should be added also. 

````ASP.NET
<script src="yourscriptslocation/fontawesome.js"></script>

<script>
	function OnItemClick(sender, args) {
		var itemtext = args.get_item().text();

		alert("You have clicked:" + itemtext);
	}
</script>

<telerik:RadDrawer runat="server" ID="RadDrawer1" Mode="push" Position="left" MinHeight="330" DrawerWidth="200" Mini="true" SwipeToOpen="true">
	<ClientEvents OnItemClick="OnItemClick" />
	<MiniSettings Width="48" />
	<ContentTemplate>
		<p>
			This is the content element containg the text
		</p>
	</ContentTemplate>
	<Template>
		<ul> 
			<li data-role='drawer-item' class='k-state-selected'>
				<span class='k-icon fas fa-camera'></span>
				<span class='k-item-text'>Camera</span>
			</li> 
			<li data-role='drawer-separator'></li> 
			<li data-role='drawer-item'>
				<span class='k-icon fas fa-address-book'></span>
				<span class='k-item-text'>Address Book</span>
			</li> 
			<li data-role='drawer-item'>
				<span class='k-icon fas fa-address-card'></span>
				<span class='k-item-text'>Address Card</span>
			</li> 
			<li data-role='drawer-separator'></li> 
			<li data-role='drawer-item'>
				<span class='k-icon fas fa-calendar-alt'></span>
				<span class='k-item-text'>Calendar</span>
			</li> 
		</ul>
	</Template>
</telerik:RadDrawer>
````

## FontAwesome 4

The default class for the 4.* version is `fa` and to add a specific icon, the `fa-iconname` class should be added also. 

````ASP.NET

<link href="yourstyleslocation/fontawesome.css">

<script>
	function OnItemClick(sender, args) {
		var itemtext = args.get_item().text();

		alert("You have clicked:" + itemtext);
	}
</script>

<telerik:RadDrawer runat="server" ID="RadDrawer1" Mode="push" Position="left" MinHeight="330" DrawerWidth="200" Mini="true" SwipeToOpen="true">
	<ClientEvents OnItemClick="OnItemClick" />
	<MiniSettings Width="48" />
	<ContentTemplate>
		<p>This is the content element containg the text</p>
	</ContentTemplate>
	<Template>
		<ul> 
			<li data-role='drawer-item' class='k-state-selected'>
				<span class='k-icon fa fa-camera'></span>
				<span class='k-item-text'>Camera</span>
			</li> 
			<li data-role='drawer-separator'></li> 
			<li data-role='drawer-item'>
				<span class='k-icon fa fa-address-book'></span>
				<span class='k-item-text'>Address Book</span>
			</li> 
			<li data-role='drawer-item'>
				<span class='k-icon fa fa-address-card'></span>
				<span class='k-item-text'>Address Card</span>
			</li> 
			<li data-role='drawer-separator'></li> 
			<li data-role='drawer-item'>
				<span class='k-icon fa fa-calendar'></span>
				<span class='k-item-text'>Calendar</span>
			</li> 
		</ul>
	</Template>
</telerik:RadDrawer>

````


# See Also

 * [Getting Started]()
 

 
