---
title: MenuItemClick
page_title: MenuItemClick | UI for ASP.NET AJAX Documentation
description: MenuItemClick
slug: ribbonbar/server-side-programming/events/menuitemclick
tags: menuitemclick
published: True
position: 6
---

# MenuItemClick



## 

The server-side __MenuItemClick__event occurs when the user clicks on a menu item, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar type__.

1. An EventArgs object with the following properties:

* __Item__ - the clicked item.

* __ParentItem__ - the parent item of the clicked item.

* __Menu__ - the parent menu of the clicked item.

* __Group__ - the group of the clicked item parent menu.

* __Index__ - the index of the clicked item in its containing group.

````ASPNET
	    <telerik:RadRibbonBar ID="RadRibbonBar1" runat="server" 
	        onmenuitemclick="RadRibbonBar1_MenuItemClick">
	        <telerik:RibbonBarTab Text="Home">
	            <telerik:RibbonBarGroup Text="Image">
	                <Items>
	                    <telerik:RibbonBarMenu Size="Medium" Text="Rotate" ImageUrl="icons/Rotate.png">
	                        <Items>
	                            <telerik:RibbonBarMenuItem Text="Rotate Right 90�" ImageUrl="icons/Rotate.png" />
	                            <telerik:RibbonBarMenuItem Text="Rotate Left 90�" ImageUrl="icons/RotateLeft.png" />
	                            <telerik:RibbonBarMenuItem Text="Rotate 180�" ImageUrl="icons/Rotate180.png" />
	                            <telerik:RibbonBarMenuItem Text="Flip Horizontal" ImageUrl="icons/FlipHorizontal.png" />
	                            <telerik:RibbonBarMenuItem Text="Flip Vertical" ImageUrl="icons/FlipVertical.png" />
	                        </Items>
	                    </telerik:RibbonBarMenu>
	                </Items>
	            </telerik:RibbonBarGroup>
	        </telerik:RibbonBarTab>
	    </telerik:RadRibbonBar>
	    <asp:Literal runat="server" ID="Literal1"></asp:Literal>
````



>tabbedCode

````C#
	
	    protected void RadRibbonBar1_MenuItemClick(object sender, RibbonBarMenuItemClickEventArgs e)
	    {
	        Literal1.Text += "Text: " + e.Item.Text + "<br/>";
	    }
	
````



````VB.NET
	
	    Protected Sub RadRibbonBar1_MenuItemClick(sender As Object, e As RibbonBarMenuItemClickEventArgs)
	        Literal1.Text += "Text: " + e.Item.Text + "<br/>"
	    End Sub
	
````


>end

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Overview]({%slug ribbonbar/server-side-programming/events/overview%})
