---
title: Localization
page_title: Localization | UI for ASP.NET AJAX Documentation
description: Localization
slug: treelist/accessibility-and-internationalization/localization
tags: localization
published: True
position: 1
---

# Localization



The RadTreeList control supports built-in localization through Global resources.Similar to RadGrid, RadEditor and RadScheduler,you can use the resx files to localize the control with minimum efforts.

## Global Resource Files

The primary means for localization in ASP.NET is to use resource files. Resource files are simple XML files that can be easily edited and transferred to otherapplications. You can use resource files to change the default (English) localization for RadTreeList that is stored in the Telerik.Web.UI assembly.

>note RadTreeList's default __Culture__ is taken from the page's __CurrentUICulture__ .
>


To create a global resource file to localize the treelist:

1. Create the __App_GlobalResources__ folder in the root of your web application.

1. Copy the default resource __RadTreeList.Main.resx__ file into it. This file can be found in the App_GlobalResources folder of the directory where you installed the UI controls.

1. Make a copy of the file and rename the copy so that its name contains the Culture Identifier. The resource files used by RadTreeList follow a strict naming convention:__RadTreeList.Main.<Culture Identifier>.resx__

>note  __The Culture Identifier consists of a language codefollowed by a dash and the country code.Example: “en-US”, “fr-CA”, “bg-BG” and so on.__ 
>
For example RadTreeList.Main.bg-BG.resx. Both files should be present in the App_GlobalResources folder:![Global Resources](images/treelist_localization1.png)

1. The resource files are represented in a human-readible format (XML) and can be easily modified either in the built-in Visual Studio resource editor or directly in the file, by hand.![Modified resource file](images/treelist_localization2.png)

>caution Make sure that the ReservedResource message is preserved. It is used foridentification purposes and is never displayed.
>


You can now switch the treelist so that it uses your new resource file by setting the active culture:![Culture](images/treelist_localization3.png)
