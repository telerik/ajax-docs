---
title: Resolving 'Could not load file or assembly' Error in Telerik UI for ASP.NET AJAX
description: This article provides solutions for resolving the 'Could not load file or assembly' error in Telerik UI for ASP.NET AJAX.
type: troubleshooting
page_title: Resolving 'Could not load file or assembly' Error
slug: resolving-could-not-load-file-or-assembly-error-telerik-ui-ajax
tags: ajax, error, assembly
res_type: kb
---

## Environment

| Product | Progress Telerik UI for ASP.NET AJAX |
| ------- | ---------------------------------- |
| Version | all                          |

## Description

I encountered the following error upon building a project:

'Could not load file or assembly 'Telerik.Web.UI, Version=20xx.x.xxx.45, Culture=neutral, PublicKeyToken=121fae78165ba3d4' or one of its dependencies. Operation is not supported. (Exception from HRESULT: 0x80131515)'

## Solution

To resolve the 'Could not load file or assembly' error in Telerik UI for ASP.NET AJAX, you can try the following solutions:

1. Delete the contents of the licenses.licx file and save it. Alternatively, you can delete the whole licenses.licx file.
2. Make the licenses.licx file read-only.
3. Right-click the Telerik.Web.UI.dll file in Windows Explorer, select Properties, and click the 'Unblock' button on the General tab.
4. If your app is under source control, make sure to ignore the license file to prevent changes on a developer machine from affecting the build machine or other environments.
5. Re-install the NuGet package `microsoft.bcl.build` if reference errors persist.
6. Remove and re-add the reference to the Telerik.Web.UI.dll assembly. You can refer to this article for instructions: [How to update the reference to Telerik Web UI assembly in Visual Studio](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-update-assembly-reference).
7. Apply the troubleshooting suggestions provided in [The located assembly's manifest definition does not match the assembly reference HRESULT: 0x80131040](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/troubleshoot-upgrade#could-not-load-file-or-assembly-telerikwebui-after-upgrade).
8. Check for any other assemblies that reference the Telerik.Web.UI assembly and ensure they are updated to the same version.
9. Remove any other versions of the Telerik.Web.UI assembly present in the bin directory of your application or the GAC (Global Assembly Cache).
10. Ensure that the new version of the Telerik.Web.UI assembly is deployed correctly on the web server. Also, ensure that the application pool in IIS is using the correct version of the .NET Framework.
11. Check for any other errors or warnings related to assembly loading or dependencies in the Windows Event Viewer or IIS logs.
12. Add a bindingRedirect in the web.config file:

```xml
<runtime> 
  <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1"> 
    <dependentAssembly> 
      <assemblyIdentity name="Telerik.Web.UI" publicKeyToken="121fae78165ba3d4" /> 
      <bindingRedirect oldVersion="0.0.0.0-2020.2.512.45" newVersion="2020.2.512.45"/> 
    </dependentAssembly> 
  </assemblyBinding> 
</runtime> 
```

13. Clean and rebuild the application.
14. Restart Visual Studio.
15. Restart your machine.

## See Also

- [How To Fix License File Related Errors](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-how-to-fix-license-file-related-errors#could-not-load-file-or-assembly)
- [How to update the reference to Telerik Web UI assembly in Visual Studio](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-update-assembly-reference)
- [The located assembly's manifest definition does not match the assembly reference HRESULT: 0x80131040](https://docs.telerik.com/devtools/aspnet-ajax/upgrade-compatibility/upgrading-instructions/troubleshoot-upgrade#could-not-load-file-or-assembly-telerikwebui-after-upgrade)
