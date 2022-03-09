---
title: Network Error Occurred while Attempting to Read from the File Error Occurs
page_title: Network Error Occurred while Attempting to Read from the File Error Occurs
description: "When installing Telerik UI for ASP.NET AJAX, an network error occurs while attempting to read from the file."
slug: installation-network-error-while-reading-file
tags: telerik, asp, net, ajax, troubleshooting, installation, network, error, while, attempting, to, read, from, file
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

When installing Telerik UI or ASP.NET AJAX, an installation network error occurs while attempting to read the file.

## Error Message

`A Network Error Occurred While Attempting to Read from the File`

## Steps to Reproduce

A sample scenario for reproducing includes the following steps:

1. The `Telerik.Web.UI_2011_1_215_Dev (1).msi` file is installed.

1. A repair or modify on the installation is initiated by `Telerik.Web.UI_2011_1_215_Dev.msi`.

1. The wizard fails and the error message is shown.

## Cause

Attempt to modify or repair through an installation file with name different from the original.

## Solution

Re-install the product by using the correct installation package:

1. Open **Add or Remove Programs** from the Control Panel.

1. Remove the product that was installed by `Telerik.Web.UI_2011_1_215_Dev (1).msi`.

1. Install `Telerik.Web.UI_2011_1_215_Dev.msi`.
