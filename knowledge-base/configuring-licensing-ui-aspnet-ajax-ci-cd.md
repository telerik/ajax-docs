```markdown
---
title: Adding License Key in CI/CD for Web Applications Using UI for ASP.NET AJAX
description: Learn the steps to configure the license for a Web Application using UI for ASP.NET AJAX in a CI/CD pipeline.
type: how-to
page_title: Configuring Licensing for UI for ASP.NET AJAX in CI/CD
meta_title: Configuring Licensing for UI for ASP.NET AJAX in CI/CD
slug: configuring-licensing-ui-aspnet-ajax-ci-cd
tags: licensing, ui-for-aspnet-ajax, ci-cd, telerik-license
res_type: kb
ticketid: 1717123
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
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I need to configure the licensing for UI for ASP.NET AJAX in a Web Application project using a CI/CD pipeline. The goal is to satisfy the licensing requirements with minimal implementation effort. The project uses Azure DevOps for build and deployments, and licensing complexity should be minimized.

This knowledge base article also answers the following questions:
- How to set up TELERIK_LICENSE for UI for ASP.NET AJAX in a CI/CD pipeline?
- What is the simplest way to configure licensing for a Web Application project using Telerik controls?
- How to integrate licensing for Telerik UI for ASP.NET AJAX with Azure DevOps?

## Solution

To configure the licensing for UI for ASP.NET AJAX in a Web Application project using a CI/CD pipeline, follow these steps:

1. Ensure your Web Application uses NuGet package references for the Telerik UI for ASP.NET AJAX components. The licensing activation is automatic during project compilation.

2. Use one of the following approaches to set the license:

   **Option 1: Using the `TELERIK_LICENSE` Environment Variable**
   - Set the `TELERIK_LICENSE` environment variable with the contents of your `telerik-license.txt` file. 
   - Example: Refer to [this guide](https://github.com/LanceMcCarthy/DevOpsExamples#approach-1---using-a-variable).

   **Option 2: Using the `TELERIK_LICENSE_PATH` Environment Variable**
   - Set the `TELERIK_LICENSE_PATH` variable to point to the path of a Secure File containing the `telerik-license.txt` file.
   - Example: Refer to [this guide](https://github.com/LanceMcCarthy/DevOpsExamples#approach-2---using-a-file).

3. Ensure that the environment variable is set as a **User Defined variable** and not as a generic environment variable since generic environment variables may have value size limits (<4 KB).

4. Enable diagnostic output in your build process for troubleshooting:
   ```
   msbuild ... /p:TelerikLicensingVerbosity=diagnostic /verbosity:diagnostic
   ```

5. Build the project to complete the licensing integration.

### Additional Resources
- [Telerik Web Forms Adding Your License Key to CI Services](https://www.telerik.com/products/aspnet-ajax/documentation/licensing/add-license-to-ci-cd)
- [DevOps Examples for Telerik Licensing](https://github.com/LanceMcCarthy/DevOpsExamples)
- [Telerik License Approaches](https://github.com/LanceMcCarthy/DevOpsExamples#telerik-license-approaches)
```
