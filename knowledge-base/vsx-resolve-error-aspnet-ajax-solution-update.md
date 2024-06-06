---
title: Resolving Error During ASP.NET AJAX Solution Update with Visual Studio Extensions
description: How to fix the error encountered when updating an ASP.NET AJAX solution using Telerik UI for ASP.NET AJAX Visual Studio Extensions.
type: troubleshooting
page_title: Fixing Upgrade Wizard Error in ASP.NET AJAX Projects with NuGet Packages
slug: vsx-resolve-error-aspnet-ajax-solution-update
tags: installer,vs extensions,asp.net ajax,visual studio,nuget,upgrade wizard
res_type: kb
ticketid: 1654377
---

## Environment

| Product | Installer and VS Extensions for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description
When attempting to update an ASP.NET AJAX solution using Telerik UI for ASP.NET AJAX Visual Studio Extensions, you might encounter the error: "An error occurred while running the wizard. Error executing custom action Telerik.Web.UI.VSX.Actions.MultiProjectUpdateReferencesAction: System.Runtime.InteropServices.COMException (0x80004005): This reference cannot be removed from the project because it is always referenced by the compiler."

This issue generally occurs under two conditions: when the project uses NuGet package references instead of assembly references, or when the installation of the product version currently referenced in the project has been removed.

## Cause
The Upgrade Wizard is designed to work with assembly references and cannot proceed with NuGet package references. Alternatively, the error may arise if the referenced version of Telerik UI for ASP.NET AJAX is not installed on the machine.

## Solution

- **For Projects with NuGet Package References:**
  1. Bypass the Upgrade Wizard for updating Telerik references.
  2. Utilize the NuGet Package Manager in Visual Studio to manage and update the Telerik UI for ASP.NET AJAX packages. 
  3. Follow the guidelines for setting up the Telerik private NuGet feed as detailed in [this documentation](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/first-steps-nuget).

- **For Missing Referenced Version Installation:**
  1. Remove all Telerik UI for ASP.NET AJAX references from the project.
  2. Clean the solution to remove any temporary files and cache.
  3. Use the [Telerik UI for ASP.NET AJAX Convert Wizard](https://docs.telerik.com/devtools/aspnet-ajax/integration/visual-studio/visual-studio-extensions/convert-project) to add the necessary assemblies with the updated version back into the project.

## See Also
- [First Steps with Telerik UI for ASP.NET AJAX and NuGet](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/first-steps-nuget)
- [Converting Projects with Telerik UI for ASP.NET AJAX Convert Wizard](https://docs.telerik.com/devtools/aspnet-ajax/integration/visual-studio/visual-studio-extensions/convert-project)
 
