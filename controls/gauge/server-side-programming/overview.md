---
title: Overview
page_title: Server-side Programming Overview - RadGauge
description: Check our Web Forms article about Overview.
slug: gauge/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

The **RadLinearGauge** and **RadRadialGauge** share a lot of properties and are configured in much the same way.	The elements are structured in inner tags that correspond to the visual structure of the control, so configuring a certain element is easiest done through	its own tag that filters the available properties. To get a better understanding of the elements that create the gauge examine the	[RadGauge Structure]({%slug gauge/radgauge-structure%}) article.

## Configuring the global properties of the gauges

>caption Table 1: Attribute properties of the main tag

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Height** |Gets/sets the Height of the control in pixels|
| **RenderAs** |A property indicating whether the gauge will be rendered as **Canvas** , **SVG** or **VML** .	Setting the property to **Auto** will instruct the chart to automatically decide how to be rendered, based on the browser. This property is available since **Q1 2015** .|
| **Transitions** |Gets/sets whether an animation should be played when the control is rendered in order to show the value.|
| **Width** |Gets/sets the Width of the control in pixels|

## Main appearance configuration


>caption Table 2: Attribute properties in main tag > Appearance

|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the main gauge area. Can take a common color name or a hex value|

## Configuring the pointer for a Linear Gauge


>caption Table 3: Attribute properties in main tag > Pointer

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Shape** |The shape of the pointer - either a triangular mark pointing to the value (Arrow), or an entire bar that fills up to the chosen value (BarIndicator).|
| **Color** |The color of the pointer|
| **Value** |The value which the pointer shows|


>caption Table 4: Attribute properties in main tag > Pointer > Track (applicable only when the pointer is BarIndicator)

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color of the background that the track represents|
| **Opacity** |The transparency of the track. The value must be between [0,1] where 0 is transparent and 1 is opaque.|

## Configuring the pointer for a Radial Gauge


>caption Table 5: Attribute properties in main tag > Pointer

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color of the arrow that points to the value|
| **Value** |The value which the pointer shows|

>caption Table 6: Attribute properties in main tag > Pointer > Cap

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color of the cap (the axis around which the arrow rotates)|
| **Size** |The size of the arrow axis. The value must be between [0,1] where 0 means no pointer and 1 makes the cap fill the entire gauge|

## Configuring the main Scale options

>caption Table 7: Attribute properties in main tag > Scale

|  **Name**  |  **Description**  |
| ------ | ------ |
| **EndAngle** |The angle at which the **Radial** gauge ends. Zero is horizontal to the left. The difference between	the StartAngle and the EndAngle must be less than 360 degrees.|
| **MajorUnit** |The distance between the major ticks and thus between the labels|
| **Max** |The value at which the gauge ends|
| **Min** |The value at which the gauge begins|
| **MinorUnit** |The distance between the minor ticks on the scale|
| **Mirror** |Whether the labels of the **Linear** gauge will be on the opposite side|
| **Reverse** |Whether the large values will be shown first. False by default|
| **StartAngle** |The angle at which the **Radial** gauge starts. Zero is horizontal to the left. The difference between	the StartAngle and the EndAngle must be less than 360 degrees.|
| **Vertical** |Whether the **Linear** gauge will be vertical. True by default|

## Configuring the Labels

>caption Table 8: Attribute properties in main tag > Scale > Labels

|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the labels. Can take a common color name or a hex value|
| **Color** |The font color of the labels. Can take a common color name or a hex value|
| **Font** |The font of the labels|
| **Format** |The format string for the labels. The **{0}** placeholder indicates the value of the pointer.	The Template property has higher priority.|
| **Position** |The position of the **Radial** gauge labels - inside or outside of the dial|
| **Template** |The client template for the labels. The **#=value#** placeholder indicates the value of the pointer.	Takes precedence over the Format property.|
| **Visible** |Whether the labels will be rendered|

## Configuring the Major and Minor Ticks

>caption Table 9: Attribute properties in main tag > Scale > [MajorTicks | MinorTicks]

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color of the ticks. Can take a common color name or a hex value|
| **Size** |The length of the ticks in pixels|
| **Visible** |Whether the ticks are shown|
| **Width** |The length of the ticks in pixels|

## Configuring the Ranges

>caption Table 10: Attribute properties in main tag > Scale > Ranges > GaugeRange

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color of the range. Can take a common color name or a hex value|
| **From** |The lower value of the range. Must fit within the Min/Max values ofthe Scale|
| **To** |The upper value of the range. Must fit within the Min/Max values ofthe Scale|

## See Also

 * [RadGauge Structure]({%slug gauge/radgauge-structure%})
