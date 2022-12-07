---
title: How to find out which is the used version of Telerik.Web.UI in the web application
description: See how to check the version of a .NET assembly in two different ways
type: how-to
page_title: How to check which is the version of the Telerik assembly
slug: common-assembly-version
position: 
tags: 
ticketid: 1587488
res_type: kb
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
The solution demonstrates two different approaches to check the version of the Telerik UI for ASP.NET AJAX controls used in an ASP.NET WebForms application or website.

## Solution
You can use two techniques to see which is the used version by your app:

* Open the bin folder of the app in Windows Explorer -> right-click on the assemblies -> Properties -> Details -> Product version:

![File Version](images/common_telerik_assembly_version.png)

* Load the page with the Telerik controls in the browser, go to View Source (Ctrl+U) -> Search for the following HTML comment tag string:

 `<!-- 20` and it will reveal the used version:

![Product Version](images/common-view-source-telerik-version.png)


  