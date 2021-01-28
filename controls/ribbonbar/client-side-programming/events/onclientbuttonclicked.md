---
title: OnClientButtonClicked
page_title: OnClientButtonClicked - RadRibbonBar
description: Check our Web Forms article about OnClientButtonClicked.
slug: ribbonbar/client-side-programming/events/onclientbuttonclicked
tags: onclientbuttonclicked
published: True
position: 2
---

# OnClientButtonClicked



## 

The **OnClientButtonClicked** client-side event occurs when the user clicks on a ribbonbar button, after the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_button()** returns a reference to the ribbonbar button that was clicked. In this case it is **RibbonBarButton**.

You can use this event to respond when the user clicks on a ribbonbar button:

````ASPNET
	
<script type="text/javascript">
    function OnClientButtonClicked(sender, args) {
        var button = args.get_button();
        alert(button.get_text());
    }       
</script>


<telerik:RadRibbonBar RenderMode="Lightweight" ID="RadRibbonBar1" runat="server" OnClientButtonClicked="OnClientButtonClicked">
    <telerik:RibbonBarTab Text="Home">
        <telerik:RibbonBarGroup Text="Clipboard" EnableLauncher="true">
            <Items>
                <telerik:RibbonBarButton Size="Medium" Text="Cut" ImageUrl="icons/Cut.png" />
                <telerik:RibbonBarButton Size="Medium" Text="Copy" ImageUrl="icons/Copy.png" />
            </Items>
        </telerik:RibbonBarGroup>
    </telerik:RibbonBarTab>
</telerik:RadRibbonBar>
	
````



# See Also

 * [Client-Side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-Side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
