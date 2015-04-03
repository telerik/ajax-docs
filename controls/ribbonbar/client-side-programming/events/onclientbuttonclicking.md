---
title: OnClientButtonClicking
page_title: OnClientButtonClicking | UI for ASP.NET AJAX Documentation
description: OnClientButtonClicking
slug: ribbonbar/client-side-programming/events/onclientbuttonclicking
tags: onclientbuttonclicking
published: True
position: 3
---

# OnClientButtonClicking



## 

The __OnClientButtonClicking__ client-side event occurs when the user clicks on a ribbonbar button, before the ribbonbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the ribbonbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_button()__ returns a reference to the ribbonbar button that was clicked. In this case it is __RibbonBarButton__.

* __set_cancel()__ lets you prevent the ribbonbar from responding to the mouse click.You can use this event to respond when the user clicks on a ribbonbar button:

````JavaScript
	    <script type="text/javascript">
	        function OnClientButtonClicking(sender, args) {
	            args.set_cancel(true);
	        }       
	    </script>
````



````ASPNET
	    <telerik:RadRibbonBar ID="RadRibbonBar1" runat="server" OnClientButtonClicking="OnClientButtonClicking">
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



* __set_enabled()__ - disables a RadRibbonBarButton when set to __false__.

* __get_enabled()__ - returns __true__ if the RadRibbonBar is enabled and __flase__ when it is disabled.

````JavaScript
	        
	    <script type="text/javascript">
			function OnClientButtonClicking(sender, args) {
				var button = args.get_button();
				button.set_enabled(false);			
			}
		
		</script>
````



````ASPNET
	    <telerik:RadRibbonBar ID="RadRibbonBar1" runat="server" OnClientButtonClicking="OnClientButtonClicking">
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

 * [Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Overview]({%slug ribbonbar/client-side-programming/events/overview%})
