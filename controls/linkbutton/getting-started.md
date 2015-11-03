---
title: Getting Started
page_title: Getting Started | RadLinkButton for ASP.NET AJAX Documentation
description: Getting Started
slug: linkbutton/getting-started
tags: getting,started
published: True
position: 2
---

# Getting Started

The following tutorial demonstrates how to set up a page with a **RadLinkButton** control and configure its **NavigateUrl** and **Target** properties.

1. In the default page of a new ASP.NET AJAX-enabled Web Application add a **RadLinkButton** control:

	**ASP.NET**	
	
		<telerik:RadLinkButton id="RadLinkButton1" runat="server" text="My Button">
		</telerik:RadLinkButton>	

	The **Text** property specifies the text displayed in the **RadLinkButton** control.

1. Define the URL that will be navigated to when the button is clicked in the **NavigateUrl** property (e.g., `NavigateUrl="http://www.telerik.com"`).

1. Set an open target for the URL through the **Target** property (e.g., `Target="_blank"`). The **Target="_blank"** property takes values from the [HyperLink.Target Property](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.hyperlink.target(v=vs.110).aspx).

At the end your **RadLinkButton** declaration should look like that:

**ASP.NET**

	<telerik:RadLinkButton ID="RadLinkButton1" Text="RadLinkButton" NavigateUrl="http://www.telerik.com" Target="_blank"></telerik:RadLinkButton>

## See Also

 * [Properties and Events]({%slug linkbutton/server-side-programming/properties-and-events%})
 
 * [HyperLink.Target Property](https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.hyperlink.target(v=vs.110).aspx)
