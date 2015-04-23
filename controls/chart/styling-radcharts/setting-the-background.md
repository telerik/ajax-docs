---
title: Setting The Background
page_title: Setting The Background | RadChart for ASP.NET AJAX Documentation
description: Setting The Background
slug: chart/styling-radcharts/setting-the-background
tags: setting,the,background
published: True
position: 1
---

# Setting The Background



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

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


