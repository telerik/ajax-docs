---
title: Localization through Global Resources
page_title: Localization through Global Resources - RadGrid
description: Learn how to localize RadGrid with global resource files, configure the culture, and create language-specific resources in ASP.NET AJAX.
slug: grid/accessibility-and-internationalization/localization-through-global-resources
tags: localization,through,global,resources
published: True
position: 4
---

# Localization through Global Resources


From **UI for ASP.NET AJAX Q2 2010** onwards, **RadGrid** supports built-in localization through Global resources. Similar to **RadEditor** and **RadScheduler**, you can use the resx files to localize the control with minimum efforts.

## Using the resource file

The resource files should be placed within the **App_GlobalResources** folder in your application. You can either create your own language pack (see below) or use an existing one (if available for your language). Telerik controls installation wizard automatically copies the built-in resources to the **App_GlobalResources** in your local installation.

![App_GlobalResources folder containing RadGrid resource files](images/GlobalResources_Folder.jpg)

>note **RadGrid.Main.resx** must be in the **App_GlobalResources** folder in your application in order to change the culture/language.

To change the current language/resource you should set the **Culture** property accordingly. 

>note RadGrid's default **Culture** is taken from the page's **CurrentUICulture** .
>


````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Culture="en-US"></telerik:RadGrid>			
````



Here is how to localize your **RadGrid** in simple steps:

1. Create a new resource file or copy an existing one from the **App_GlobalResources** folder in your installation folder.

2. Add the resource file (`.resx`) to the **App_GlobalResources** folder in your application. Include at least **RadGrid.Main.resx** and the localization file, such as **RadGrid.Main.en-GB.resx**.

3. Set the **Culture** property to the corresponding language, such as `it-IT`, `en-GB`, or `ja-JP`.



## Creating or Modifying Resource Files

The resource files are represented in a human-readable format (XML) and can be easily modified either in the built-in Visual Studio resource editor or directly in the file, by hand.

![Editing RadGrid resource files in a resource editor](images/Editing_ResourceFiles.png)

![RadGrid resource file entries](images/resx_file.jpg)

## Creating a new localization resource

The process of creating a new global resource follows the same pattern as in **RadEditor** and **RadScheduler** controls.

1. Make a copy of the **RadGrid.Main.resx** file and save it as **RadGrid.Main.YOURLANGUAGE.resx** (for example: **RadGrid.Main.ja-JP.resx**)

2. Replace the default strings with the translated ones

3. Set the **Culture** property to the relevant language

>caution Please ** -do not- ** modify/remove the **ReservedResource** key.
>


>note We encourage that you submit your localized resource files. Your efforts will be rewarded accordingly.
>


You can find a complete list of culture codes in the [Microsoft CultureInfo documentation](https://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo%28vs.71%29.aspx).

## See Also

- [Localization through Resource Files]({%slug grid/accessibility-and-internationalization/localization-through-resource-files%})
- [Localizing the Grid Messages]({%slug grid/accessibility-and-internationalization/localizing-the-grid-messages%})
