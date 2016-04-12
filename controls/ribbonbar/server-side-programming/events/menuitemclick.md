---
title: MenuItemClick
page_title: MenuItemClick | RadRibbonBar for ASP.NET AJAX Documentation
description: MenuItemClick
slug: ribbonbar/server-side-programming/events/menuitemclick
tags: menuitemclick
published: True
position: 6
---

# MenuItemClick



## 

The server-side **MenuItemClick**event occurs when the user clicks on a menu item, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar type**.

1. An EventArgs object with the following properties:

	* **Item** - the clicked item.

	* **ParentItem** - the parent item of the clicked item.

	* **Menu** - the parent menu of the clicked item.

	* **Group** - the group of the clicked item parent menu.

	* **Index** - the index of the clicked item in its containing group.

````ASPNET
<telerik:RadRibbonBar RenderMode="Lightweight" ID="RadRibbonBar1" runat="server" 
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


# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/events/serverside/defaultcs.aspx)

 * [Server-side Events Overview]({%slug ribbonbar/server-side-programming/events/overview%})
