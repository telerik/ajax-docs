---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: gauge/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



The __RadLinearGauge__ and __RadRadialGauge__ share a lot of properties and are configured in much the same way.	The elements are structured in inner tags that correspond to the visual structure of the control, so configuring a certain element is easiest done through	its own tag that filters the available properties. To get a better understanding of the elements that create the gauge examine the	[RadGauge Structure]({%slug gauge/radgauge-structure%}) article.

## Configuring the global properties of the gauges


>caption Attribute properties of the main tag

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Height__ |Gets/sets the Height of the control in pixels|
| __RenderAs__ |A property indicating whether the gauge will be rendered as __Canvas__ , __SVG__ or __VML__ .	Setting the property to __Auto__ will instruct the chart to automatically decide how to be rendered, based on the browser. This property is available since __Q1 2015__ .|
| __Transitions__ |Gets/sets whether an animation should be played when the control is rendered in order to show the value.|
| __Width__ |Gets/sets the Width of the control in pixels|

## Main appearance configuration


>caption Attribute properties in main tag > Appearance

|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the main gauge area. Can take a common color name or a hex value|

## Configuring the pointer for a Linear Gauge


>caption Attribute properties in main tag > Pointer

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Shape__ |The shape of the pointer - either a triangular mark pointing to the value (Arrow), or an entire bar that fills up to the chosen value (BarIndicator).|
| __Color__ |The color of the pointer|
| __Value__ |The value which the pointer shows|


>caption Attribute properties in main tag > Pointer > Track (applicable only when the pointer is BarIndicator)

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color of the background that the track represents|
| __Opacity__ |The transparency of the track. The value must be between [0,1] where 0 is transparent and 1 is opaque.|

## Configuring the pointer for a Radial Gauge


>caption Attribute properties in main tag > Pointer

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color of the arrow that points to the value|
| __Value__ |The value which the pointer shows|


>caption Attribute properties in main tag > Pointer > Cap

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color of the cap (the axis around which the arrow rotates)|
| __Size__ |The size of the arrow axis. The value must be between [0,1] where 0 means no pointer and 1 makes the cap fill the entire gauge|

## Configuring the main Scale options


>caption Attribute properties in main tag > Scale

|  __Name__  |  __Description__  |
| ------ | ------ |
| __EndAngle__ |The angle at which the __Radial__ gauge ends. Zero is horizontal to the left. The difference between	the StartAngle and the EndAngle must be less than 360 degrees.|
| __MajorUnit__ |The distance between the major ticks and thus between the labels|
| __Max__ |The value at which the gauge ends|
| __Min__ |The value at which the gauge begins|
| __MinorUnit__ |The distance between the minor ticks on the scale|
| __Mirror__ |Whether the labels of the __Linear__ gauge will be on the opposite side|
| __Reverse__ |Whether the large values will be shown first. False by default|
| __StartAngle__ |The angle at which the __Radial__ gauge starts. Zero is horizontal to the left. The difference between	the StartAngle and the EndAngle must be less than 360 degrees.|
| __Vertical__ |Whether the __Linear__ gauge will be vertical. True by default|

## Configuring the Labels


>caption Attribute properties in main tag > Scale > Labels

|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the labels. Can take a common color name or a hex value|
| __Color__ |The font color of the labels. Can take a common color name or a hex value|
| __Font__ |The font of the labels|
| __Format__ |The format string for the labels. The __{0}__ placeholder indicates the value of the pointer.	The Template property has higher priority.|
| __Position__ |The position of the __Radial__ gauge labels - inside or outside of the dial|
| __Template__ |The client template for the labels. The __#=value#__ placeholder indicates the value of the pointer.	Takes precedence over the Format property.|
| __Visible__ |Whether the labels will be rendered|

## Configuring the Major and Minor Ticks


>caption Attribute properties in main tag > Scale > [MajorTicks | MinorTicks]

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color of the ticks. Can take a common color name or a hex value|
| __Size__ |The length of the ticks in pixels|
| __Visible__ |Whether the ticks are shown|
| __Width__ |The length of the ticks in pixels|

## Configuring the Ranges


>caption Attribute properties in main tag > Scale > Ranges > GaugeRange

|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color of the range. Can take a common color name or a hex value|
| __From__ |The lower value of the range. Must fit within the Min/Max values ofthe Scale|
| __To__ |The upper value of the range. Must fit within the Min/Max values ofthe Scale|

# See Also

 * [RadGauge Structure]({%slug gauge/radgauge-structure%})
