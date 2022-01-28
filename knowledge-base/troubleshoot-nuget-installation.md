---
title: Troubleshooting NuGet Installation Issues
page_title: Troubleshooting NuGet Installation Issues
description: "Handle issues which may occur when you install Telerik UI for ASP.NET AJAX with NuGet."
type: troubleshooting
slug: troubleshooting-nuget-installation-issues
res_type: kb
---

# Troubleshooting NuGet Installation Issues

This article demonstrates how to handle issues which may occur when you install Telerik UI for ASP.NET AJAX with NuGet.  

## Incorrect Credentials and How to Re-Enter Them

Error details: Failed to fetch results from V3 feed at 'https://nuget.telerik.com/v3/index.json' with following message : Response status code does not indicate success: 401 (Logon failed.).

The setup can get stuck in a circular reference problem if you enter incorrect credentials the first time.
To reset or edit the NuGet feed credentials:

1. Close Visual Studio.
1. Open **Control Panel** > **All Control Panel Items** > **Credential Manager**. Alternatively, click the **Win** button, type `Manage Windows Credentials`, and open the manager.
1. Look for `VSCredentials_nuget.telerik.com`. Then, remove or edit the password.
1. Open Visual Studio and try to access the `nuget.telerik.com` feed again.

For additional troubleshooting options, see the [NuGet can't connect to Telerik NuGet Server thread](https://www.telerik.com/forums/nuget-can't-connect-to-https-nuget-telerik-com-nuget).

## Other Errors

### Unable to load the service index for source https://nuget.telerik.com/v3/index.json

Make sure that the Telerik NuGet Feed is live at [https://status.telerik.com/](https://status.telerik.com/).

### The schema version of '<namespace>' is incompatible with version 2.0.30625.9003 of NuGet. Please upgrade NuGet to the latest version.

In R1 2018, the `nuget.exe` version the suite uses was updated from `2.8` to `4.3`. This is the executable file used to generate and read the `.nupkg` files.

Due to this update, you may get the error in question when using Visual Studio 2012 that uses the NuGet Package Manager version 2.0. To solve the problem, upgrade the NuGet Package Manager to version 2.8.

### [Telerik NuGet] The V2 feed at 'https://nuget.telerik.com/nuget/Search()?$filter=IsLatestVersion&searchTerm='telerik'&targetFramework='net45'&includePrerelease=false&$skip=0&$top=26&semVerLevel=2.0.0' returned an unexpected status code '401 Logon failed.'.

To solve this issue, refer to the [nuget can't connect to Telerik NuGet Server](https://www.telerik.com/forums/nuget-can't-connect-to-https-nuget-telerik-com-nuget) forum thread.

## Additional Resources

* [Azure DevOps and Telerik NuGet Packages](https://www.telerik.com/blogs/azure-devops-and-telerik-nuget-packages)
