---
title: Designer Files Are Not Updated or Are Missing Telerik Controls
page_title: Designer Files Are Not Updated or Are Missing Telerik Controls
description: "When working with Telerik UI for ASP.NET AJAX, designer files are not updated or are missing Telerik controls."
slug: designer-files-not-updated-missing-telerik-controls
tags: telerik, asp, net, ajax, troubleshooting, designer, files, not, updated, or, missing, controls
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

Designer files are not updated or are missing Telerik controls.

## Cause

On rare occasions, the `designer.cs` or `designer.vb` files may not be updated when you change the markup of a page, or they may be missing the Telerik controls altogether.

## Solution

To solve this issue, use any of the following approaches:

* Check if the issue occurs on another machine, for example, a colleague's. If not, compare the machines to try to find the difference that causes it.

* When Visual Studio 2013 is used together with TFS and **Get Everything when a solution or project is opened** under **Options** > **Source Control** > **Environment** is checked, uncheck the option and manually retrieve the latest version. This issue occurs with the native ASP.NET controls as well.

* Try deleting your local copy of the project and get it anew from your source control.

* Try deleting the contents of the `license.licx` file or the entire file so that Visual Studio can generate it again.

* Try deleting the `.suo` file of the solution.

* Try uninstalling the Telerik Visual Studio Extensions.

* If possible in your scenario, try moving the control declaration from the markup to the code-behind.

* Try removing the Telerik assembly references and adding them again through the Visual Studio dialogs. It is recommended that you copy them to the `Bin` folder of your application and point the references there.

* Ensure the Telerik control tags are in PascalCase and not in all lowercase. A report suggested that this caused the classes in the designer files to also become lowercase which led to their mismatch for the actual classes.
