---
title: The assembly dll exists in both the file system and in GAC
description: Learn how to resolve the assembly dll exists in both the file system and in GAC warning in Visual Studio
type: troubleshooting
page_title: The assembly dll exists in both the file system and in GAC
slug: common_assembly_exists_in_both_the_file_system_and_in_gac
position: 
tags: 
ticketid: 1569581
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

![Warning message](images/common_warning_file_system_gac_message.png)
The yellow warning appears if using the Telerik Visual Studio Extension to upgrade the Telerik version, but the Telerik Assemblies are installed in the Install folder and are also available in the GAC. This is just a reminder that an assembly is available in two locations, and that the version from the GAC will be used. It is safe to ignore this warning.

There are some .NET Libraries that are commonly used by multiple Telerik Suites (UI for ASP.NET AJAX, UI for WinForms, etc.). The WinForms Suite require the Assemblies to be installed in the GAC, the Telerik UI for ASP.NET does not. If you have installed both, then the same .NET library that is used by both Suites, they will be deployed in two locations (GAC and the Telerik AJAX install folder).

Upon using the Telerik Extension to Upgrade the Assemblies, the Assemblies at both locations are detected and shares a Warning.

## Error Messages
* "The assembly C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX RX 20XX\BinXX\..\AdditionalLibraries\BinXX\Telerik.Documents.SpreadsheetStreaming.dll exists in both the file system and in GAC. WebSites always use the version in GAC when a duplicate entry found. You could remove the assembly from GAC and reconfigure the WebSite if you need a bin-deployed assembly."
* "The assembly C:\Program Files (x86)\Progress\Telerik UI for ASP.NET AJAX R2 2022\Bin45\..\AdditionalLibraries\Bin45\Telerik.Windows.Documents.Spreadsheet.dll exists in both the file system and in GAC. WebSites always use the version in GAC when a duplicate entry found. You could remove the assembly from GAC and reconfigure the WebSite if you need a bin-deployed assembly"
* "The assembly Path_To_Telerik_Assembly_Installation_Folder]\BinXX\..\AdditionalLibraries\BinXX\Telerik.[AssemblyName].dll exists in both the file system and in GAC. WebSites always use the version in GAC when a duplicate entry found. You could remove the assembly from GAC and reconfigure the WebSite if you need a bin-deployed assembly."

## Solution
* Option 1: Ignore the warning (recommended) - This is the recommended option if you want to keep using both the WinForms and WebForms Suites from Telerik.
* Option 2: You can uninstall the WinForms installation, and un-register the Telerik Assemblies from the GAC. That way the Telerik Web Forms Wizard will not detect two different locations for the same assembly.


    