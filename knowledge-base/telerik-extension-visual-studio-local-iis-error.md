---
title: Telerik Extension in Visual Studio Not Working When Opening Project from Local IIS
description: Resolve issues with the Telerik extension in Visual Studio when opening a project from Local IIS and encountering file path errors during upgrade.
type: troubleshooting
page_title: Telerik Upgrade Wizard Fails with Local IIS Project Path Error
meta_title: Telerik Upgrade Wizard Fails with Local IIS Project Path Error
slug: telerik-extension-visual-studio-local-iis-error
tags: telerik, visual studio, upgrade wizard, local iis, path error
res_type: kb
ticketid: 1720315
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.3.812 </td>
</tr>
</tbody>
</table>

## Description

When attempting to upgrade a Telerik project using the Telerik extension in Visual Studio with the project opened from Local IIS (e.g., `http://localhost/projectname`), the following error message appears:

```plaintext
Failed to execute command.

System.NotSupportedException: The given path's format is not supported.
   at System.Security.Permissions.FileIOPermission.EmulateFileIOPermissionChecks(String fullPath)
   at System.IO.DirectoryInfo.Init(String path, Boolean checkHost)
   at System.IO.Directory.GetParent(String path)
   at Telerik.Licensing.DevSeat.OS.Telerik.Licensing.LicenseResolution.IOperatingSystem.ParentDirectory(String path)
   at Telerik.Licensing.LicenseResolution.LicenseKeyFileLookup.<Search>d__16.MoveNext()
   at System.Collections.Generic.List`1..ctor(IEnumerable`1 collection)
   at System.Linq.Enumerable.ToList[TSource](IEnumerable`1 source)
   at Telerik.Licensing.LicenseResolution.LicenseKeyFileLookup.Run(IOperatingSystem os, String projectPath)
   at Telerik.Licensing.DevSeat.ResolveProductLicense(IProductMetadata productMetadata, String projectPath, IOperatingSystem os)
   at Telerik.Licensing.Client.LicenseKey.ProductLicense.ResolveProductLicense(IProductMetadata productMetadata, String projectPath, IOperatingSystem os)
   at Telerik.Web.UI.VSX.ProjectConfigurators.ProjectConfigurationTypeSelector.GetProjectUpgradePreWizardData()
   at Telerik.Web.UI.VSX.ProjectConfigurators.ProjectConfigurationTypeSelector.ProjectUpgrade(IPropertyDataDictionary additionalPreWizardData)
   at Telerik.Web.UI.VSX.ProjectConfigurators.StreamlinedProjectConfiguration.StartUpgradeWizard()
   at Telerik.VSX.VSPackage.PackageBase.CommandCallback(Object sender, EventArgs e)
```

The error occurs because the Telerik Upgrade Wizard requires a file system path instead of a URL-based path.

## Cause

The Telerik Upgrade Wizard cannot resolve paths associated with a URL (e.g., `http://localhost/projectname`) because it relies on local file system paths to process the project.

## Solution

To resolve this issue, open the project in Visual Studio using its local file system path instead of the Local IIS URL. Follow these steps:

1. **Locate the Project Files on the Local File System**  
   - Navigate to the physical location of your project files on your machine (e.g., `C:\inetpub\wwwroot\projectname`).

2. **Open the Project in Visual Studio**  
   - Open Visual Studio.  
   - Go to `File > Open > Website`.  
   - Browse to the local file system path of your project (e.g., `C:\inetpub\wwwroot\projectname`) and select the folder.

3. **Verify the Project Path in Solution Explorer**  
   - Check the Solution Explorer in Visual Studio.  
   - Ensure the project name reflects the local file system path (e.g., `projectname`) instead of a URL.

4. **Disable IIS Hosting (Optional)**  
   - If the project is configured to use IIS or IIS Express, you can disable this setting to avoid URL-based paths:  
     - Right-click the project in Solution Explorer and select `Property Pages`.  
     - Under `Start Options`, set the server to `File System` instead of IIS or IIS Express.

5. **Run the Telerik Upgrade Wizard**  
   - Once the project is opened from the local file system path, re-run the Telerik Upgrade Wizard.

### Alternative Solution: Manual Upgrade

If the above steps do not resolve the issue, perform a manual upgrade by following the [manual upgrade instructions](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version) for Telerik UI for ASP.NET AJAX.

## See Also

- [Upgrading a Trial to a Developer License or to a Newer Version](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version)
- [Telerik UI for ASP.NET AJAX Documentation](https://www.telerik.com/products/aspnet-ajax)
