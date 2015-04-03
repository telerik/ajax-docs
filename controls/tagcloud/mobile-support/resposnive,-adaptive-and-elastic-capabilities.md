---
title: Resposnive, Adaptive and Elastic Capabilities
page_title: Resposnive, Adaptive and Elastic Capabilities | UI for ASP.NET AJAX Documentation
description: Resposnive, Adaptive and Elastic Capabilities
slug: tagcloud/mobile-support/resposnive,-adaptive-and-elastic-capabilities
tags: resposnive,,adaptive,and,elastic,capabilities
published: True
position: 0
---

# Resposnive, Adaptive and Elastic Capabilities



This article explains the __elastic capabilities RadTagCloud offers__. The control supports __elastic design since Q2 2014__.

## 

Generally, elastic design means that the page and its content are able to adapt to different font size by scaling the elements properly depending on the chosen font-size.
>caption Figure 1: Comparison between appearances of a RadTagCloud with two different values for font size.

![tagcloud-elastic-comparison](images/tagcloud-elastic-comparison.png)

__RadTagCloud__ supports changing the font size without breaking the control's appearance - if the new size is larger than the original, the elements of the tag cloud will simply increase their size as well to accommodate the text inside. This fluid layout is achieved by using __em__ units for setting dimensions and paddings in the control, instead of __px__ because __em__ units are tied to the font size. This allows dimensions and sizes to scale with the font size.

>note If you configure the __MinFontSize__ and __MaxFontSize__ properties of __RadTagCloud__ in pixels or without specifying a unit, the text in the tag cloud will not be scaled, because the font size of the items will be calculated in pixels. It is recommended to __set these properties in em units__ to ensure that the whole control will be resized according to the chosen font size.
>


To use the elasticity of the RadTagCloud change the font size of the control's element (Example 1). As a result the sizing of the tags is proportionally changed (Figure 1).

Example 1: The font size of __RadTagCloud__ is set to 20px.

````ASPNET
	        <style type="text/css">
	            div.RadTagCloud {
	                font-size: 20px;
	            }
	        </style>
	        <telerik:RadTagCloud ID="RadTagCloud1" runat="server" Width="400px">
	            <Items>
	                <telerik:RadTagCloudItem Text="ASP.NET" Weight="12"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="AJAX" Weight="134"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="VB" Weight="56"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="C#" Weight="38"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="Web" Weight="73"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="jQuery" Weight="23"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text=".NET" Weight="78"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="Code" Weight="50"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="UI" Weight="80"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="Unit" Weight="20"></telerik:RadTagCloudItem>
	                <telerik:RadTagCloudItem Text="Class" Weight="50"></telerik:RadTagCloudItem>
	            </Items>
	        </telerik:RadTagCloud>
````



# See Also

 * [RadTagCloud Server-Side]({%slug tagcloud/server-side-programming/tagcloud-object%})

 * [RadTagCloud Getting Started]({%slug tagcloud/getting-started%})
