---
title: Problem with the Windows Installer Package Error Occurs
page_title: Windows Installer Package that a Program Required for This Install Could Not Be Run Error Occurs
description: "When installing Telerik UI for ASP.NET AJAX, a problem with the Windows Installer package error occurs stating that a program required for this install could not be run."
slug: windows-installer-package-program-could-not-run-error
tags: telerik, asp, net, ajax, troubleshooting, installation, problem, with, windows, installer, package, error, program, required, for, install, could, not, run
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

When installing Telerik UI or ASP.NET AJAX, a problem with the Windows Installer package error occurs stating that a program required for this install could not be run.

## Error Message

`There is a problem with this Windows Installer package. A program required for this install to complete could not be run. Contact your support personnel or package vendor.`

## Cause

The possible causes for the Telerik UI for ASP.NET AJAX offline documentation installation to fail include the following scenarios:

* Outdated root certificates.

* Corrupted Visual Studio 2010 help system.

* An attempt to uninstall Telerik UI for ASP.NET AJAX after the documentation has been manually removed.

## Solution

Depending on your scenario, use either of the suggested approaches:

* (Outdated root certificate) Use wither of the suggested solution:

	* Install the latest root certificates through Windows Update. For more information, refer to the [documentation on root certificates](http://support.microsoft.com/kb/931125).

	* Perform a custom install and disable the documentation feature.

* (Corrupted VS 2010 help system) Use either of the suggested solutions:

	* Perform a custom install and disable the documentation feature.

	* Reset the Visual Studio 2010 help system:

		1. Open `C:\Program Files\Microsoft Help Viewer\v1.0\HelpLibManager.exe.config`.

		1. Set the `FirstTimeRun` value to `True`.

		1. Go to **Visual Studio main menu** > **Help** > **Manage Help Settings** and open the Help Library Manager tool.

		1. Select **Choose online or local help**.

		1. Select **I want to use local help**.

		1. Go to **Visual Studio main menu** > **Help** > **View Help** and try to view the VS 2010 Help.

* (Attempt to uninstall) Use either of the suggested solutions:

	* Perform a repair using the original installation package and attempt another uninstall.

	* Perform a custom install and disable the documentation feature.
