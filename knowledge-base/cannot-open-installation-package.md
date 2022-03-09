---
title: The Installation Package Could Not Be Opened Error Occurs
page_title: The Installation Package Could Not Be Opened Error Occurs
description: "When installing Telerik UI for ASP.NET AJAX, an error occurs that the installation package could not be opened and you need to contact the application vendor to verify that this is a valid Windows installer package."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/installation-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, installation, package, cannot, be, opened, contact, vendor, verify, windows, installer
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

When installing Telerik UI or ASP.NET AJAX, an error that the installation package cannot be opened and that I have to contact the application vendor to verify the Windows installer package is valid occurs.

## Error Message

`This installation package could not be opened. Contact the Application vendor to verify that this is a valid windows installer package`

## Cause

The possible reasons for this issue may be the following:

* The installation file got corrupt during the download.

* The installation file was downloaded to a compressed folder and/or the `Temp` folder on the machine is compressed.

## Solution

To solve this issue:

1. Log in to your Telerik account and download the Telerik UI for ASP.NET AJAX installer again. To verify that the new download is not corrupt, use an md5 hash sum calculator, for example, the [fciv](http://support.microsoft.com/default.aspx/kb/841290/) utility is such a tool.

1. Download the installation file to a non-compressed drive.
