---
title: License File
page_title: License File | UI for ASP.NET AJAX Documentation
description: License File
slug: introduction/licensing/license-file
tags: license,file
published: True
position: 2
---

# License File



As of __Q1 2015__, the __Telerik UI for ASP.NET AJAX__ suite	uses the standard .NET licensing mechanism, which means that using the controls in design-time	causes Visual Studio to add a __license.licx__ to the solution.	This file is used only in design-mode and is not needed for deployment explicitly. The .NET framework (lc.exe) will	embed it in the assembly your WebApplication will be built for deployment.

The license file is maintained by Visual Studio and contains information about all licensed components in the application (including non-Telerik products).

Having this license file is not expected to bring any performance/compilation issues and you can ignore it.

>tip In case your project build fails with errors pointing to the license file, you can delete it and rebuild.
>


If you are working under source control, once the file is created, it will be detected as a change by your source control system.	We would suggest that you check-in this file initially. Then, when it is checked-out again during your work,	it is up to you to decide whether to check it in, or discard the changes.

## 

# See Also

 * [License Agreement]({%slug introduction/licensing/license-agreement%})

 * [Trial License Limitations]({%slug introduction/licensing/trial-license-limitations%})
