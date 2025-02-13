---
title: Perform silent MSI install
description: Perform silent MSI install of Telerik UI for ASP.NET AJAX. Check it now!
type: how-to
page_title: Perform silent MSI install
slug: silent-msi-installation
res_type: kb
---


## HOW-TO
Silently install the Telerik UI for ASP.NET AJAX controls from MSI

## SOLUTION 

The command you need is 

```ASPX
msiexec /i [PathToAJAXMSI] /qn ADDLOCAL=Assemblies35,Assemblies40,Assemblies45,TelerikVSExtensionsVS2022 /L*v [PathForInstallLog]
````

The [Command-Line Options](https://docs.microsoft.com/en-us/windows/win32/msi/command-line-options) article provides details about the different options available for the command line msi installations.

There are also several important points to note:

1. The installer should have all the listed features. 

2. Path to installer should be fully qualified unless you are executing the command from the installer location

3. Logging is optional but I would recommend it as it will help you troubleshoot any problems

4. Have in mind that you will have to allow enough time for the installation to complete
 

> You can download the MSI installation from https://www.telerik.com/account/product-download?product=RCAJAX. 
> 
> For more information on the MSI installer check out this article [Installing Telerik UI for ASP.NET AJAX Controls from MSI File]({%slug getting-started/installation/install-using-msi%}).


## See Also

* [Details on Installation Approaches]({%slug details-installation-approaches %})
* [Installing Telerik UI for ASP.NET AJAX Controls from MSI File]({%slug getting-started/installation/install-using-msi%})
* [Installing Telerik UI for ASP.NET AJAX Controls from ZIP File]({%slug getting-started/installation/install-from-zip%})
* [Using the HOTFIX (DLLs and Scripts/Skins Only]({%slug introduction/installation/using-the-hotfix-(dlls-and-scripts/skins-only)%})
* [Major and Minor Releases Installation]({%slug introduction/installation/upgrading-instructions/major-and-minor-releases-installation%})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)

  