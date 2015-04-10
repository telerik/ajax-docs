---
title: Use NavigateUrl with StandardButton Type
page_title: Use NavigateUrl with StandardButton Type | UI for ASP.NET AJAX Documentation
description: Use NavigateUrl with StandardButton Type
slug: button/how-to/use-navigateurl-with-standardbutton-type
tags: use,navigateurl,with,standardbutton,type
published: True
position: 1
---

# Use NavigateUrl with StandardButton Type



## 

The __RadButton__ control has a __NavigateUrl__ property which is used for specifying a URL to redirect to, when the button is set to __ButtonType=LinkButton__.

There is a way to achieve this functionality with a __RadButton__ configured as __StandardButton__ by handling the client-side event __OnClientClicking__. In the event handler you should open with Javascript the URL, specified in the __NavigateUrl__ property. The code below demonstrates how to implement such functionality:

````ASPNET
		
		    <script type="text/javascript">
		        function OnClientClicking(button, args) {
		        	window.location = button.get_navigateUrl();
		        	args.set_cancel(true);
		        }
	        </script>
	 
	        <telerik:RadButton ID="RadButton" runat="server" Text="RadButton" NavigateUrl="http://www.telerik.com/" OnClientClicking="OnClientClicking">
	        </telerik:RadButton>
	
````



>note Please note that you should cancel the click event and the postback after the redirect, via the __set_cancel__ client-side method.
>


# See Also

 * [OnClientClicking]({%slug button/client-side-programming/events/onclientclicking%})

 * [RadButton Validation and Client-side Event Handlers]({%slug button/how-to/radbutton-validation-and-client-side-event-handlers%})
