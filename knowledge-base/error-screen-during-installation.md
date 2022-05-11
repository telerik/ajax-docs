---
title: An Installation Error Screen Appears during Installation
page_title: An Installation Error Screen Appears during Installation
description: "When installing Telerik UI for ASP.NET AJAX, an installation error screen appears."
slug: error-screen-during-installation
tags: telerik, asp, net, ajax, troubleshooting, error, screen, appears, during, installation
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

When installing Telerik UI or ASP.NET AJAX, an installation error screen appears.

## Cause

The installer has encountered an unexpected error during the execution. The error may be caused by a circumstance on the particular machine.

## Solution

Run the installation with logging enabled and send the log file in a support ticket for analysis. The log file will help the Support team to faster detect the problem. You'll either get a suggestion on how to fix the problem, or the installer will be fixed.

To start the installer with logging enabled:

1. Open a command prompt.

1. Navigate to the folder where the Telerik UI for ASP.NET AJAX installer is located.

1. Run the `msiexec /i [ControlsInstallation.msiFileName] /limev Telerik.Web.UI.Install.log` command.

## Identified Occurrences

Based on similar issues, the identified occurrences include the following cases:

* The Visual Studio reset performed by the installer did not succeed. On some machines the `[VSInstallDir]\Common7\IDE\devenv.exe /setup` command fails when called by the installer while it might not fail when you run the command directly from the command line.

	To avoid this issue, use any of the suggested approaches:

	* Delete all files in `[VSInstallDir]\Common7\IDE\ProjectTemplatesCache`.

	* Delete all files in `[VSInstallDir]\Common7\IDE\ItemTemplatesCache`.

	* Start a Visual Studio instance and run the installer without closing it.

	* Run the `[VSInstallDir]\Common7\IDE\devenv.exe /setup` command manually.

* The automatic installation of ASP.NET AJAX Extensions 1.0, performed by the Telerik UI for ASP.NET AJAX installer as a prerequisite for the .NE 2.0 assemblies, did not succeed.

	To work around this issue:

	1. Download [ASP.NET AJAX 1.0](https://www.microsoft.com/downloads/details.aspx?FamilyID=ca9d90fa-e8c9-42e3-aa19-08e2c027f5d6&displaylang=en) and install it manually.

	1. Run the Telerik UI for ASP.NET AJAX installer.

For more information, refer to the article on [post-installation issues]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%}).
