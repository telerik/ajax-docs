---
title: Different Rendering in Design Time and in Browser
page_title: Different Rendering in Design Time and in Browser
description: "When working with Telerik UI for ASP.NET AJAX, I get a different rendering of controls in design-time and in the browser."
slug: different-render-design-time-browser
tags: telerik, asp, net, ajax, troubleshooting, skins, appearance, different, rendering, between, design, time, and, browser
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When working with Telerik UI for ASP.NET AJAX, I get a different rendering of controls between the design-time and the browser.

## Cause

The design-mode surface of Visual Studio is in a way similar to IE 5.5 and its rendering can be considered illustrative. It may not match the exact rendering of the page in a [supported browser](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support).

The way the Telerik UI for ASP.NET AJAX controls actually render in a real browser depends on the following factors:

* The selected [`RenderMode`]({%slug controls/render-modes%}) of the control.
* If the mode is `Lightweight`, the rendering depends on the [font used on the page]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/fonts%}).
* The [skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) of the control.

Newly created Telerik-enabled projects default to the `Lightweight` rendering mode. In this case, due to the [elastic design capabilities]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) of the controls, symptoms of the difference are likely to include larger dimensions than in design-time and a font like 16px Times New Roman, which is the common default among browsers.

## Solution

To make the rendering in the browser as similar as the one during the design-time, consider using the `Classic` rendering mode.
