---
title: Skins
page_title: Skins | RadAsyncUpload for ASP.NET AJAX Documentation
description: Skins
slug: asyncupload/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins

**RadAsyncUpload** use *skins* to control its overall look-and-feel. A skin is a set of images and a CSS style sheet that can be applied to the control elements (items, images, etc.) and defines their look and feel. To apply a skin to a **RadAsyncUpload** set its **Skin** property, either using the properties pane or the control's Smart Tag.

**RadAsyncUpload** is installed with a number of preset skins:![Skins](images/asyncupload_skins_thumb.png)

>note The **Hay**, **Forest**, **Sitefinity** and **Transparent** skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of **Q1 2014** .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Not Using Skins

If you do not set the **Skin** property, **RadAsyncUpload** will automatically use the "Default" skin. If you do not want to use a skin with your control, set its **Skin** property to an empty string and set the **EnableEmbeddedSkins** property to **false**.

## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a style sheet. When creating your own, it is a good idea to start with the style sheet for an existing skin and alter that. See [ Tutorial: Creating a Custom Skin ]({%slug asyncupload/appearance-and-styling/tutorial-creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin:

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your webpage.

1. Set the **EnableEmbeddedSkins** property of the control to **false**.

The style sheet for a **RadAsyncUpload** skin has the name **Upload.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/Upload** directory. For example, the style sheet for the "Black" skin is called **Upload.Black.css** and is located in the ...**Skins/Black** directory. The images are found in the ...**Skins/Black/Upload** directory. The images are referenced by name from within the style sheet.

## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload]({%slug asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload%})

[RadAsyncUpload vs. RadUpload for ASP.NET AJAX]({%slug asyncupload/radasyncupload-vs-radupload%})
