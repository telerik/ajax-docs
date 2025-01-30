---
title: Resolving System.MissingMethodException in Telerik UI for ASP.NET AJAX
description: Steps to fix the "Method not found" exception for Telerik UI for ASP.NET AJAX when updating the web application.
type: troubleshooting
page_title: Fix Missing Method Exception for RadComboBox in ASP.NET AJAX Applications
slug: common-aspnet-ajax-method-not-found
tags: asp.net ajax, system.missingmethodexception, assembly version mismatch, .net framework compatibility
res_type: kb
ticketid: 1677276
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Telerik UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description

An unhandled exception occurs during the execution of the current web request with the following details: System.MissingMethodException: Method not found: System.String System.String.Format(System.IFormatProvider, System.String, System.Object). This error appears after publishing an update on the website but does not occur in the Visual Studio environment. All configurations in the web.config and DLLs in the bin folder are verified to be correct.

## Cause 

The error typically indicates a mismatch in assembly versions or .NET runtime environments between the development setup and the production server.

## Solution

To resolve the `System.MissingMethodException` error, follow these steps:

### 1. Clean the licenses.licx File

- Open the `licenses.licx` file in the Properties folder of your project.
- Remove any entries related to Telerik.
- Save the file, then clean and rebuild the project.

### 2. Verify Assembly Versions

- Ensure all `Telerik.Web.UI` assemblies in your bin folder are of the same version.
- The versions in your development environment should exactly match those on the server.

### 3. Confirm .NET Framework Compatibility

- Check that the server is running the required version of the .NET Framework that your application targets.

### 4. Check for Assembly Binding Redirects

- Inspect your `web.config` file for proper assembly binding redirects. Example:

```xml
<configuration>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="Telerik.Web.UI" publicKeyToken="121fae78165ba3d4" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-2024.4.1114" newVersion="2024.4.1114" />
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
</configuration>
```

### 5. Remove Conflicting Assemblies from the GAC

- If older versions of Telerik assemblies exist in the Global Assembly Cache (GAC) on the server, remove them.

### 6. Validate IIS Settings

- Ensure the IIS application pool is using the correct .NET Framework version that aligns with your application.

### 7. Review Logs

- Examine the Windows Event Viewer and IIS logs for additional error messages that might provide more context about the issue.

Following these steps should help resolve the error and ensure consistent functionality between your development and production environments.

## See Also

- [ASP.NET AJAX Troubleshooting](https://www.telerik.com/products/aspnet-ajax/documentation/getting-started/known-issues)
- [Global Assembly Cache (GAC)](https://docs.microsoft.com/en-us/dotnet/framework/app-domains/gac)
