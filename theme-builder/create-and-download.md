---
title: Create and Download
page_title: Create and Download | UI for ASP.NET AJAX Documentation
description: Create and Download
slug: theme-builder/create-and-download
tags: create,download
published: True
position: 1
---

# Create and Download a Theme

##      

The **Theme Builder** for Telerik controls for AJAX ASP.NET is a convenient customization tool providing the ability and power to create your own custom **Lightweight** skins and themes quickly and efficiently, without the necessity of understanding the underlying HTML and CSS structure of the controls.


## Creating a New Theme

A theme dictates the overall look and feel of every product, be it a web site or GUI software. Traditionally, creating a new custom theme consumes significant time, designer involvement and tedious drilling into the element structure of a control.

The **Theme Builder** web-based tool can help you drastically reduce this effort and achieve the desired look and feel seamlessly, while enabling you to concentrate on the design and styling of your new theme.

First, you need to define a name for your new theme and then select one of the existing Skins to use as a base. Please choose the name carefully, because it won't be possible to change it later on without tweaking all the generated CSS rules.

![Theme Builder Create and Download 1](images/theme-builder-create-and-download-1.png)

Next step is to choose the controls you want to generate a custom Theme for. For our basic sample, the selected controls are Grid, Rating and Calendar.

![Theme Builder Create and Download 2](images/theme-builder-create-and-download-2.png)

Some of the controls have composite structures and include other child controls to provide the rich functionality they offer, e.g. RadGrid. Therefore, the **Theme Builder** adds these inner controls automatically so you don't bother finding them manually.

## Customization

Applying the desired colors is pretty straightforward. The **Theme Builder** provides Color pickers for customizing the appearance of the controls and the changes can be observed on the fly thanks to the *Apply changes instantly* option.

![Theme Builder Create and Download 3](images/theme-builder-create-and-download-3.png)

**1. Primitives** column contains the various sections for structure elements.

**2. Properties** column provides the applicable color customization options.

**3. Preview of Controls** keeps the main view of the controls.

**4. Collapse All Groups** button helps to expand/collapse all the control views on single action.

**5. Help** button navigates to the help resources for the app.

**6. Plus** button enables you to dynamically add or remove controls to modify.

**7. Download** button is used after completion to download the archive holding the generated style files.

## Download and Apply in a Project

Once you've completed the modifications and the new Theme is ready to be used in a project, you can download it as a compact archive using the Download button (#7 from previous section).

Add the new Theme folder in your application and follow the steps provided in the last section of the following article in order to set it as the Skin for your controls:

[Using a Custom Skin](http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/appearance-and-styling/modifying-existing-skins#creating-a-custom-skin-basic-steps)

You can also find a runnable web site sample in the code-library below, which was specifically created using **Theme Builder** with the selected controls in the progress of this article - Grid, Rating and Calendar.

[Theme Builder Sample Web Site](http://www.telerik.com/support/code-library/theme-builder-sample-web-site)

## See Also

 * [Overview]({%slug theme-builder/overview%})

 * [Importing a Theme]({%slug theme-builder/import%})
