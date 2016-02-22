---
title: Configure Project
page_title: Configure Project | UI for ASP.NET AJAX Documentation
description: Configure Project
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard
tags: creation,and,configuration,wizard
published: True
position: 3
---

# Configure Project




The Project management functionality of the Visual Studio Extensions handles project assembly reference updates, web.config entry management and updates of the supporting resources.

This functionality is handled by three wizards - the Project Configuration Wizard, [Convert Project Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}) and the [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/convert-project%}).


Telerik Project Configuration wizard could be accessed through the Telerik > Telerik UI for ASP.NET AJAX menu:

![introduction-vsx newproject 1](images/introduction-vsx_telerikmenu_configurewizard.png)

The Project Configuration Wizard’s first page lets you define which Telerik DPL assemblies will be added to your project:

![introduction-vsx newproject 1](images/introduction-vsx_configurewizard_assembliesselection.png) 

The version of the assemblies are the same as the one with which your project has been created, converted or upgraded.

The second page of the Project Configuration Wizard gives you the ability to select which theme pack will be added to your project. Check the content of each theme or see the preview of it when select it into the Project Configuration wizard and select the one you want to be included in the project:

![introduction-vsx newproject 1](images/introduction-vsx_configurewizard_themes.png) 

>note If you prefer the Telerik assemblies to be copied into your solution folder, the **Copy referenced assemblies to solution and source control** option could be selected *only* into the [Visual Studio Extensions Options]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/visual-studio-extensions-options%}) but it is not applicable for Visual Studio web site projects.

On the third page the wizard suggests more site settings and several resource options:

![introduction-vsx newproject 1](images/introduction-vsx_configurewizard_websettings.png)  

* **Use ScriptManger CDN** - Define if the site will utilize [RadScriptManager CDN Support]({%slug scriptmanager/cdn-support/overview%}).

* **Use StyleSheetManager CDN** - Define if the site will utilize [RadStyleSheetManager CDN Support]({%slug stylesheetmanager/cdn-support/overview%}).

* **Use jQuery Support** - Define if the pages that will be created via the Scenario Wizard will use jQuery support by default.

* **Use Ajaxified Templates** - Define if the pages that will be created via the Scenario Wizard will use [RadAjaxManager]({%slug ajaxmanager/overview%}) by default.

* **General Web Project settings** - [RadUpload]({%slug upload/overview%})-related configuration - the [Maximum Request Length and Execution Timeout]({%slug upload/uploading-files/uploading-large-files%}) settings of the site.


>note The Project Configuration wizard does not allow the targeted Telerik controls distribution to be changed when configuring a project. In that mode you can change the other project properties though. Changing the Telerik UI for ASP.NET AJAX version of a project is handled by the [Upgrade Wizard]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/upgrade-wizard%}).
>


When a web project gets reconfigured, Visual Studio Extensions perform the following changes:

* Telerik assembly references get added or are changed in the project.

* [The user gets notified]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/telerik-web-design-assembly%}) through the Project Configuration wizard if the wizard cannot find a correct Telerik.Web.Design assembly in the GAC.

The web.config file gets updated as per the choices in the wizard:

* The global skin registration is updated.

* A registration for the "telerik" tag prefix is added, so that it is not needed to have the `<%@ Register %>` directive in each page.

* RadScriptManager and RadStyleSheetManager default CDN settings are persisted.
