---
title: Setting The Background
page_title: Setting The Background - RadChart
description: Check our Web Forms article about Setting The Background.
slug: chart/styling-radcharts/setting-the-background
components: ["chart"]
tags: setting,the,background
published: True
position: 1
---

# Setting The Background

>caution **RadChart** has been deprecated since Q3 2014 and is marked as obsolete as of the 2026 Q2 SP1 (v2026.2.708) release. This is the last release that includes the RadChart component — its source code will be removed from the assembly in the next release. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

RadChart offers a variety of ways to define backgrounds. Here are the main scenarios:

**1. Solid color**

… -> FillStyle -> FillType -> Solid

… -> FillStyle -> MainColor ->

**2. Simple 2-color gradient**

… -> FillStyle -> FillType : Gradient

… -> FillStyle -> MainColor ->

… -> FillStyle -> SecondColor ->

… -> FillStyle -> FillSettings -> GradientMode ->

**3. Complex Gradient**

… -> FillStyle -> FillType -> ComplexGradient

… -> FillStyle -> FillSettings -> ComplexGradient -> Collection ->

… -> FillStyle -> FillSettings -> GradientAngle ->

**4. Hatch (2-color pattern)**

… -> FillStyle -> FillType -> Hatch

… -> FillStyle -> MainColor ->

… -> FillStyle -> SecondColor ->

… -> FillStyle -> FillSettings -> HatchStyle ->

**5. Custom Image**

… -> FillStyle -> FillType -> Image

… -> FillStyle -> FillSettings -> BackgroundImage ->

… -> FillStyle -> FillSettings -> ImageAlign ->

… -> FillStyle -> FillSettings -> ImageDrawMode ->

… -> FillStyle -> FillSettings -> ImageFlip ->

**6. Opacity**

You can achieve opacity by specifying an alpha transparency to the color, in addition to the red-green-blue values. The alpha value should come first, like this:

[transparency level0 - 255]**;** [red 0 - 255]**;** [green 0 - 255]**;** [blue 0 - 255]

The greater the opacity value, the less transparent the background is.


