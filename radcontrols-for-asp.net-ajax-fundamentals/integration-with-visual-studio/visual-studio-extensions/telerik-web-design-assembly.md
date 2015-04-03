---
title: Telerik Web Design Assembly
page_title: Telerik Web Design Assembly | UI for ASP.NET AJAX Documentation
description: Telerik Web Design Assembly
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/telerik-web-design-assembly
tags: telerik,web,design,assembly
published: True
position: 2
---

# Telerik Web Design Assembly



## 

The Visual Studio designer classes of the __Telerik UI for ASP.NET AJAX__ are located in the __Telerik.Web.Design__ assembly.



During the installation of __Telerik UI for ASP.NET AJAX__, the __Telerik.Web.Design__ assembly gets added to the [GAC](http://msdn.microsoft.com/en-us/library/yf1d93sz(VS.80).aspx). Starting a page with any Telerik control on it in design mode, the Visual Studio IDE searches the designer class of the Telerik control and the __Telerik.Web.Design__ assembly respectively. Normally, when the assembly is located in the GAC, the Visual Studio IDE loads it properly and displays the control designers.



There are several cases that errors occur in design time.

![Visual Studio Design Time Error](images/introduction-vsx_vsdesigntimeerror.gif)



Here is a list of the circumstances when this is likely to happen:

* Manual upgrade - It is often faster to download the new Service Pack or [Latest Internal Build](http://blogs.telerik.com/blogs/09-01-07/download_latest_internal_builds.aspx) as a zip file and replace the Telerik.Web.UI reference manually. Forgetting to add the __Telerik.Web.Design__ assembly to the GAC breaks the Visual Studio design time, because the Visual Studio IDE cannot load the appropriate design assembly version. The error message can be fixed by either adding the proper __Telerik.Web.Design__ assembly to the GAC, or adding it to the local __BIN__ folder - the Visual Studio IDE will resolve the designer classes properly. A Visual Studio IDE restart is recommended to avoid loading duplicate [shadow copied assemblies](http://msdn.microsoft.com/en-us/library/ms404279.aspx) (Visual Studio IDE default behavior).

* Using __Visual Studio 2008__ without __Service Pack 1__ applied - The pre-SP1 Visual Studio 2008 IDE has a bug with the proper assembly loading. The __Telerik.Web.Design__ assembly exists in the GAC and the IDE loads it, but it cannot resolve the dependence between the __Telerik.Web.Design__ and __Telerik.Web.UI__ assemblies properly. To fix the design time error in this case, you could either [apply the Visual Studio SP1 upgrade](http://www.microsoft.com/downloads/details.aspx?FamilyId=FBEE1648-7106-44A7-9649-6D9F6D58056E&displaylang=en), or copy the __Telerik.Web.UI__ assembly to the __[VisualStudioInstallationFolder]\Common7\IDE\PublicAssemblies__ folder. This way the Visual Studio IDE would be able to properly resolve the reference between the two assemblies and load the designers.



>note Using the second approach (copying the __Telerik.Web.UI__ assembly to the __[VisualStudioInstallationFolder]\Common7\IDE\PublicAssemblies__ folder) could itself cause the problem described above. If you open a project, using a different version of the __Telerik.Web.UI__ assembly than the one in the __PublicAssemblies__ folder, the IDE could display an InvalidCast error message. It is suggested that you ensure the version of the __Telerik.Web.UI__ assembly used by your project and its version in the __PublicAssemblies__ folder are the same before loading the IDE.
>This instance of the error usually happens when upgrading Telerik UI for ASP.NET AJAX.
>




To help avoid these problems, the [Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard%}) detects the existence of the __Telerik.Web.Design__ assembly in the GAC. If the assembly is not found in the GAC, the wizardwill suggest to add it to the __Global Assembly Cache__:

![Project Wizard - Add Design Assembly To GAC](images/introduction-vsx_projectwizard_adddesignassemblytogac.png)

In case __Telerik.Web.UI.Design.dll__ is not found in the selected distribution the wizard will display a warning of possible design time problems:

![Project Wizard - Design Assembly Not Found](images/introduction-vsx_projectwizard_nodesignassemblyfound.png)

>note Adding the design assembly to the GAC requires __elevated privileges__ . In case you have __User Account Control__ enabled on your machine you will have to grant permissions to the __GAC Utility__ 
>


![GacUtil - UAC permissions Dialog in Windows 7](images/introduction-vsx_gacutilunderuac.png)


