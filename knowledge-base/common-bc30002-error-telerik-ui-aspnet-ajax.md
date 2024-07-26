---
title: A guide on fixing the BC30002: The type Global.Telerik.Web.UI.RadGrid is not defined error 
type: troubleshooting
page_title: Fix 'Type RadGrid Not Defined' Error in ASP.NET Web Forms Projects
slug: common-bc30002-error-telerik-ui-aspnet-ajax
tags: [radgrid, asp.net ajax, error bc30002, migration, visual studio]
res_type: kb
ticketid: 1659393
---

## Environment

| Product | Telerik UI for ASP.NET AJAX / RadGrid |
| --- | --- |
| Version | all |

## Description

I am getting a compilation error "BC30002: The type 'Global.Telerik.Web.UI.RadGrid' is not defined" in Visual Studio. This issue persists despite removing all references to old DLLs, cleaning, and recompiling the project.

## Cause

This error may arise upon migration from RadControls for ASP.NET (Classic) to Telerik UI for ASP.NET AJAX due to improper assembly references, outdated entries in the `web.config` file, or issues related to the `licenses.licx` file.

## Solution

Follow these steps to resolve the error:

- **Ensure Correct Assembly Reference**: Update the Telerik.Web.UI assembly reference in your project. Remove the existing reference and re-add it, ensuring it points to the new DLL file. Reference update instructions can be found [here](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-update-assembly-reference).

- **Web.config Update**: Ensure your `web.config` file's assembly version matches the version of the Telerik UI for ASP.NET AJAX DLLs you're using. Include an assembly binding redirect like the following:

```xml
<configuration>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="Telerik.Web.UI" publicKeyToken="121fae78165ba3d4" culture="neutral" />
        <bindingRedirect oldVersion="0.0.0.0-2024.2.513.462" newVersion="2024.2.513.462" />
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
</configuration>
```

- **Delete the licenses.licx File Contents**: Clear the contents of the `licenses.licx` file as described in the [How To Fix License File Related Errors](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-how-to-fix-license-file-related-errors) article.

- **Update Control Registered Directive**: If not using the Global Assembly Cache, update or remove fully qualified names from the control registered directive. For global access in all project pages, add the following to your `web.config`:

```xml
<system.web>
  <compilation debug="true" targetFramework="4.8" />
  <httpRuntime targetFramework="4.8" />
  <pages>
    <controls>
      <add tagPrefix="telerik" namespace="Telerik.Web.UI" assembly="Telerik.Web.UI" />
    </controls>
  </pages>
</system.web>
```

- **Clean Visual Studio and ASP.NET Cache**: Follow the instructions to [Clean Up ASP.NET and Visual Studio Cache and Temp Files](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-cleanup-asp-vs-cache-and-temp).

- **Restart Visual Studio and Your Development/Server Machine**: This can help refresh any cached configurations or assemblies.

Additionally, check out this [forum thread](https://www.telerik.com/forums/bc30002-type-%27telerik-web-ui-radchart%27-is-not-defined) and the official [Microsoft article](https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/error-messages/type-typename-is-not-defined) for more information on the error. 

If the issue persists after following these steps, please share any additional error messages or project configuration details for further assistance.

## See Also

- [Migration from ASP.NET (Classic) to ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/grid-migration-from-aspnet-classic-to-aspnet-ajax)
- [Common Update Assembly Reference](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-update-assembly-reference)
- [How To Fix License File Related Errors](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-how-to-fix-license-file-related-errors)
- [Clean Up ASP.NET and Visual Studio Cache and Temp Files](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-cleanup-asp-vs-cache-and-temp)
