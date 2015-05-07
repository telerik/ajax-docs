---
title: OnClientMenuItemClicked
page_title: OnClientMenuItemClicked | RadRibbonBar for ASP.NET AJAX Documentation
description: OnClientMenuItemClicked
slug: ribbonbar/client-side-programming/events/onclientmenuitemclicked
tags: onclientmenuitemclicked
published: True
position: 7
---

# OnClientMenuItemClicked



## 

The **OnClientMenuItemClicked** client-side event occurs when the user clicks on a ribbonbar menu item, after the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_item()** returns a reference to the ribbonbar menu item that was clicked. In this case it is **RibbonBarMenuItem**.

You can use this event to respond when the user clicks on a ribbonbar menu item:

````ASPNET
<script type="text/javascript">
    function OnClientMenuItemClicked(sender, args) {
        var item = args.get_item();
        alert(item.get_imageUrl());
    }       
</script>

<telerik:RadRibbonBar ID="RadRibbonBar1" runat="server" OnClientMenuItemClicked="OnClientMenuItemClicked">
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
````



# See Also

 * [Client-Side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-Side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
