---
title: Creating a Custom Skin
page_title: Creating a Custom Skin | UI for ASP.NET AJAX Documentation
description: Creating a Custom Skin
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/creating-a-custom-skin
tags: creating,a,custom,skin
published: True
position: 5
---

# Creating a Custom Skin

Developers who want to create a custom skin for one or more Telerik control, have the following options:

* Use the [Telerik ThemeBuilder for ASP.NET AJAX](http://themebuilder.telerik.com/) application (for Lightweight RenderMode skins)

* Use the [Visual Style Builder](http://stylebuilder.telerik.com/) tool (discontinued since 2016). 

* Take an embedded skin and make changes to it until you have the desired look

* Create a custom skin from scratch


In most cases the last option is an unnecessary overhead, unless you need to create a skin, which is totally unique in terms of look and feel, and dimensions. In order to create a custom skin from scratch, you need a better understanding for the control's HTML output and CSS classes.

>tip After you create the custom skin you will need to [register]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) it on the page where it will be used.


## Telerik ThemeBuilder application

This is an easy to use application that enables you to customize the default look and feel. It can be used to customize only skins for **Lightweight RenderMode**.

[Read the documentation]({%slug theme-builder/overview%}) for illustration and examples on how to create a custom theme.

[Launch](http://themebuilder.telerik.com/) the application.



>tip The Theme Builder application can be used to create or modify themes used in **Lightweight** **RenderMode**


## Visual Style Builder

If you would like to modify a skin that will be used in **Classic RenderMode** you can use the StyleBuilder tool.

[launch the online tool](http://stylebuilder.telerik.com/)

[read the tool overview on the Telerik website](http://www.telerik.com/aspnet-ajax/visual-style-builder)

>tip The **Classic** render mode is in [maintenance mode since Q3 2015](https://docs.telerik.com/devtools/aspnet-ajax/controls/render-modes) and the Visual Style Builder tool, which produces skins for the Classic rendering only, is in maintenance since May 2016. We recommend using the **Lightweight** render mode and the provided [Telerik ThemeBuilder for ASP.NET AJAX](http://themebuilder.telerik.com/) tool.


## Create a Custom Skin From an Existing Embedded Skin

Here is a list of the required steps to perform:

1. Pick a built-in skin which looks similar to your requirements. For example, the "Telerik" skin of RadColorPicker.

1. Copy the "Common" and "Telerik" folders from "*C:\Program Files\Progress\UI for ASP.NET AJAX RX YYYY\Skins*" into your application folder. (If you have installed Telerik® UI for ASP.NET AJAX from a ZIP file, the **/Skins/** folder is in the ZIP archive root.) You can delete any unnecessary CSS files or folders inside the "Telerik" folder. Only the ColorPicker folder and ColorPicker.Telerik.css are needed for this example.

1. Pick a name for your skin. We will use "MySkin" for the example.

1. Rename the "Telerik" folder to "MySkin". Renaming is optional but will imply that the skin is a custom skin. Renaming the skin is required if you intend to use it together with an embedded skin with the same name on the same page.If you rename the folder it is a good idea to rename the CSS file as well, for example "ColorPicker.MySkin.css"
	
	>important A similar CSS selector is used in all skins. The naming convention is .Rad[Control]_[Skin]. For example *.RadSlider_Inox* or *.RadColorPicker_Telerik*. If you rename an existing skin, you must rename all skin suffixes in the CSS class names as follows *.ClassName_Telerik --> .ClassName_MySkin*.
	
1. Register the CSS file in your page. See the [Skin Registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) topic for more details.

1. Set the **Skin** property of your RadColorPicker to "**MySkin**". Then set the **EnableEmbeddedSkins** property to **false**.

	>important If you don't set **EnableEmbeddedSkins** to **false** an exception will be thrown saying that RadColorPicker cannot find an embedded skin named "MySkin". For more information you can check the [How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) and [Skin registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) topics.

1. Modify CSS rules to match your visual requirements. Save the CSS file.

1. Run the project. If all steps are performed correctly the RadColorPicker should use your newly defined skin.

## Create a Custom Skin dll from an Existing Custom Skin with Skin's Assembly Builder

Telerik provides an independent tool for assembling custom skin dll file based on an existing custom skin.

The [Skin's Assembly Builder](http://skinsassemblybuilder.telerik.com/) lets you generate a custom skin assembly for the UI for ASP.NET AJAX controls, based on an uploaded zip file, which contains a custom skin. Note that the zip file structure should be the same as the one generated by the [VisualStyleBuilder](http://stylebuilder.telerik.com/) tool.

>tip Note that the tool works only for Classic render mode skins and is currently not compatible with the skin files produced by the [Telerik ThemeBuilder for ASP.NET AJAX](http://themebuilder.telerik.com/) tool. If you want to create an assembly for the Lightweight render mode, download the source code from the [Download section of your account](https://www.telerik.com/account/product-download?product=RCAJAX), modify one of the built-in skins in the the Telerik.Web.UI.Skins project and build the Telerik assemblies.


Here is a list of the required steps to perform:

1. Once you have finalized your custom skin, the Visual Style Builder automatically packages all required files for your new skin into a single ZIP archive. In order to create a dll from this archive you should simply upload it in the **Skin's Assembly Builder**.

1. Set a Skin name.

1. Set name for the custom assembly that will be generated.

1. Upload Telerik.Web.UI.dll.

1. Click the "Get Assembly" button.

