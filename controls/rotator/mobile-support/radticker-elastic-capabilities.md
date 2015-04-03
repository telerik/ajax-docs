---
title: RadTicker Elastic Capabilities
page_title: RadTicker Elastic Capabilities | UI for ASP.NET AJAX Documentation
description: RadTicker Elastic Capabilities
slug: rotator/mobile-support/radticker-elastic-capabilities
tags: radticker,elastic,capabilities
published: True
position: 2
---

# RadTicker Elastic Capabilities



This article explains the __elastic capabilities RadTicker offers__. The control supports __elastic design since Q1 2015__.

Generally, elastic design means that the page and its content are able to adapt to different font size by scaling the elements properly depending on the chosen font-size.

## 
>caption Figure 1: Comparison between appearance of a RadTicker with regular font size and with increased font size.

![ticker-elastic-comparison](images/ticker-elastic-comparison.png)

__RadTicker__ supports changing the font size without breaking the control's appearance - if the new size is larger than the original, theticker items' text will increase in size as well.This fluid layout is achieved by using em units for setting dimensions and paddings in the control, instead of px because emunits are tied to the font size. This allows dimensions and sizes to scale with the font size of the page.

__Example 1__ shows how to increase the font size of a __RadTicker__ control and the effect can be seen in comparison in __Figure 1__.

>tip  __RadTicker__ does not render additional HTML elements or apply any CSS to the text it shows.	Thus, it inherits thefont settings of the browser (usually 16px Arial) or the page (defined by the developer).	This means that you can use any appropriate selector for its parent element to change the ticker items' font-size.	This can be a the CSS class of its parent and	it is not mandatory to use the body element for the cascade.
>


__Example 1__: The font size of RadTicker is set to 22px.

````ASPNET
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<title></title>
		<style type="text/css">
			body
			{
				font-size: 22px;
			}
		</style>
	</head>
	<body>
		<form id="form1" runat="server">
			<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
			<telerik:RadTicker runat="server" AutoStart="true" LineDuration="5000" TickSpeed="100">
				<Items>
					<telerik:RadTickerItem Text="Lorem ipsum dolor sit amet" NavigateUrl="www.google.com"></telerik:RadTickerItem>
				</Items>
			</telerik:RadTicker>
		</form>
	</body>
	</html>
````


