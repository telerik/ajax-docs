---
title: Design-Time Errors Occur on a Page Using Telerik Controls
page_title: Design-Time Error Occurs on a Page Using Telerik Controls
description: "When working with Telerik UI for ASP.NET AJAX, design-time errors occur on a page that uses Telerik controls."
slug: design-time-errors-on-page-with-telerik-controls
tags: telerik, asp, net, ajax, troubleshooting, design, time, errors, on, page, using, controls
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

When working with Telerik UI for ASP.NET AJAX or dragging a Telerik control from the ToolБox to the design surface, design-time errors occur on a page that uses Telerik controls.

## Causes

Depending on the use case, the possible causes for such errors may be the following:

* If the `Telerik.Web.UI.dll` assembly is updated while a page using Telerik controls is in Design-time, Visual Studio creates two different versions of the assembly. Hence, two different versions of the same Telerik controls are available.

* If you try to drag a Telerik control from the Toolbox to the design surface and get an error, the possible reasons are various. Refer to the resource links below.  

* After upgrading Telerik UI for ASP.NET AJAX to Q1 2009, Visual Studio 2008 has a problem with loading GAC-ed design-time assemblies of control libraries deployed in the `Bin` folder of a website.

## Error Messages

* (Two assembly versions) `Error Creating Control - Telerik control 'Property' cannot be initialized. Details: Unable to cast object of type 'Type' to type 'Type'`

* (Dragging a Telerik control from the ToolBox) `Error creating control. Unable to cast object of type 'Telerik.Web.UI.Radxxx' to type 'Telerik.Web.UI.ControlItemContainer`

* (Problem loading GAC-ed assemblies) `Error creating control - ControlName` or `Failed to create designer "Telerik.Web.UI.ControlName..."`

## Solutions

Depending on the possible cause for this issue, use the following approaches to handle it:

* (Two assembly versions) Restart Visual Studio.

* (Dragging a Telerik control from the ToolBox) Refer to the following resources:

	* [Error rendering control (`Unable to cast object of TypeA to TypeA`)](https://www.telerik.com/forums/error-rendering-control-unable-to-cast-object-of-typea-to-typea-75309ca98a0e)
	* [Menu problem: `Error creating control` at design time](https://www.telerik.com/forums/menu-problem-39-error-creating-control-39-at-design-time)
	* [Clearing Cache](https://www.telerik.com/forums/ajax-2009-q2-release-giving-me-gray-hair)
	* [Visual Studio: `Error Creating Control`](https://www.telerik.com/blogs/visual-studio-ldquo-error-creating-control-rdquo)

* (Problem loading GAC-ed assemblies) To solve this issue, use any of the following approaches:

	* To `Bin`-deploy the design-time assembly, add a reference to `Telerik.Web.Design.dll` to your website or application, remove `Telerik.Web.Design.dll` from the GAC, and restart Visual Studio.

	* To GAC-deploy the control library assembly, add `Telerik.Web.UI.dll` in the GAC, remove `Telerik.Web.UI.dll` from your `Bin` folder, and restart Visual Studio.

	* Copy `Telerik.Web.UI.dll` to `C:\Program Files\Microsoft Visual Studio 9.0\Common7\IDE\PublicAssemblies` and restart Visual Studio.
