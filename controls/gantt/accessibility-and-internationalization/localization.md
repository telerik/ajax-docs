---
title: Localization
page_title: Localization | RadGantt for ASP.NET AJAX Documentation
description: Localization
slug: gantt/accessibility-and-internationalization/localization
tags: localization
published: True
position: 1
---

# Localization

**RadGantt** supports built-in localization through **Global resources**. Similar to other Telerik UI controls you can use the resx files to localize the control with minimum efforts.

## Using the resource files

The resource files should be placed within the **App_GlobalResources** folder in your application. You can either create your own language pack (see below) or use an existing one (if available for your language). Telerik controls installation wizard automatically copies the built-in resources to the **App_GlobalResources** in your local installation.

To change the current language/resource you should set the **Culture** property accordingly.

>tip RadGantt's default **Culture** is taken from the page's **CurrentUICulture** .
>


Here is how to localize your **Rad** in simple steps:

1. Create a new resource file or copy an existing one from the **App_GlobalResources** in your installation folder

1. Add the resource file (**resx**) file to the **App_GlobalResources** folder in your application. Note that you should have two files as a bare minimum - **RadGantt.resx** and the localization file itself - for example **RadGantt.en-GB.resx**

1. Set the **Culture** property to the corresponding language (for example: it-IT, en-GB, ja-JP and so on)

## Creating/Modifying resource files

The resource files are represented in a human-readible format (XML) and can be easily modified either in the built-in Visual Studio resource editor or directly in the file, by hand.

![gantt-localization-2](images/gantt-localization-2.png)

## How to create a new localization resource

The process of creating a new global resource follows the same pattern as in **RadEditor** and **RadScheduler** controls.

1. Make a copy of the **RadGantt.resx** file and save it as **RadGantt.YOURLANGUAGE.resx** (for example: **RadGantt.ja-JP.resx**)

1. Replace the default strings with the translated ones

1. Set the **Culture** property to the relevant language

>caution Please **do not** modify/remove the **ReservedResource** key.
>


>tip We encourage that you submit your localized resource files. Your efforts will be rewarded accordingly.
>


You can find a complete list of the culture codes [here](https://msdn.microsoft.com/en-us/library/ee825488(v=cs.20).aspx).
