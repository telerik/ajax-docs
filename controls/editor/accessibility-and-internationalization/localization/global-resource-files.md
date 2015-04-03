---
title: Global Resource Files
page_title: Global Resource Files | UI for ASP.NET AJAX Documentation
description: Global Resource Files
slug: editor/accessibility-and-internationalization/localization/global-resource-files
tags: global,resource,files
published: True
position: 0
---

# Global Resource Files



## 

With RadEditor you can create a new language pack or alter labels of an existing language pack.

Localization strings are contained in resource (.resx ) files. The resource files can be found in the installation directory under "\App_GlobalResources". There are three built-in localizations (English, French and German) which can be set through the __Language__ property. For example to localize the editor in German set Language="de-DE".

To create your own localizations for the editor, you need to create the__App_Global Resources__ folder in the root of your web application and copy the English resx files into it.

* __RadEditor.Dialogs.resx__

* __RadEditor.Main.resx__

* __RadEditor.Modules.resx__

* __RadEditor.Tools.resx__

After you have copied the resx files, you must duplicate each copy of these files and rename them using the syntax shown in the few examples below:

* __RadEditor.Dialogs.<Your_Language>.resx__

* __RadEditor.Main.<Your_Language>.resx__

* __RadEditor.Modules.<Your_Language>.resx__

* __RadEditor.Tools.<Your_Language>.resx__

All resx file contain two columns: __Name__ and __Value__ as it is shown below:
>caption 

![](images/editor-localization.png)

>note It is mandatory to set the ReservedResource string in the Name column of the RadEditor.Tools.<Language>.resx file. Without this string the resource files will not be recognized.
>


After renaming the files, localize the strings in the __Value__ column of your new __resx__files. Then set the __Language__ property of RadEditor to the name of the <localization> string in the __RadEditor.Tools.<language>.resx__ file:

````ASPNET
		<telerik:radeditor runat="server" id="RadEditor1" language="it-IT"></telerik:radeditor>
````



````C#
	     
							RadEditor1.Language = "it-IT";
				
````



````VB.NET
	     
							RadEditor1.Language = "it-IT"
				
````



>note  __If you provide a new localization for RadEditor for ASP.NET AJAX which works properly, we will gladly reward you for your work.__ 
>

