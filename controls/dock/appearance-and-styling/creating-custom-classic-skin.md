---
title: Creating a Custom Classic Skin
page_title: Tutorial - Creating a Custom Classic Skin | RadDock for ASP.NET AJAX Documentation
description: Tutorial - Creating a Custom Classic Skin
slug: dock/appearance-and-styling/creating-custom-classic-skin
tags: skin, custom, classic
published: True
position: 3
---

# Tutorial: Creating a Custom Classic Skin

## RadDock for ASP.NET AJAX CSS: Classes and Their Use

Each of the controls included in the Telerik UI for ASP.NET AJAX suite is styled by two CSS files that are loaded in a certain order. The first one - ControlName.css, also called the base stylesheet contains CSS properties and values that are common for all skins, i.e. it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, paddings or margins.The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, i.e. Dock.Default.css. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds.


## Creating a Custom Skin for RadDock for ASP.NET AJAX from an Existing One

1. In your project, create a new directory named Skins


1. In the Skins folder create a new directory **MyCustomSkin**. 


1. Go to **~/[TelerikControlsInstallationFolder]/Skins/Default** and copy **Dock.Default.css** and the **Skins/Default/Dock** folder in your Skins folder. 


1. Rename **Dock.Default.css** to **Dock.MyCustomSkin.css** and the folder **Default** to **MyCustomSkin**. 


1. When you are finished you should have **Skins/MyCustomSkin/Dock.MyCustomSkin.css** and **Skins/MyCustomSkin/Dock**. The last folder contains the images for **MyCustomSkin**. 


1. In order to support multiple skins of RadDock on a single page, the wrapping skin-specific class is coined by the name of the control, RadDock plus underscore ("_") plus SkinName, i.e. **.RadDock_Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "Default" in **Dock.MyCustomSkin.css** to "MyCustomSkin" as shown below:

	![dock skins thumb](images/dock_findandreplace.gif)

1. Add a new server declaration of RadDock on your page, and set Skin="MyCustomSkin" and EnableEmbeddedSkins=”false”:

	__ASP.NET__

		<telerik:raddock id="RadDock1" runat="server" title="RadDock" skin="MyCustomSkin"
			enableembeddedskins="false" text="Lorem ipsum dolor sit amet..."> </telerik:raddock>

1. Register Dock.MyCustomSkin.css in the <head>...</head> section of your webpage. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

	__HTML__

		<link rel="stylesheet" type="text/css" href="Skins/MyCustomSkin/Dock.MyCustomSkin.css"></link>

	Make sure the path to the files is correct, otherwise the skin will not apply.

1. Reload the page, and if the steps 0-9 have been followed correctly, you will see RadDock running a custom Default skin set as an external resource.


## Explanation of the CSS Classes Dock.MyCustomSkin.css

Each skin of RadDock consists of three image sprites, that are contained in the Skins/SkinName/Dock folder. These are:

1. CommandSprite.gif

	![dock skins thumb](images/dock_commandsprite.gif)


1. VerticalSprite.gif 

	![dock skins thumb](images/dock_verticalsprite.gif)


1. HorizontalSprite.gif

	![dock skins thumb](images/dock_horizontalsprite.gif)


## Modifying the Image Sprites to Achieve Totally New Looks for the Skin

Explained below is a simple method for modifying the image sprites of RadDock with Adobe© PhotoShop to achieve new looks without creating a new design.

1. Drag CommandSprite.gif, VerticalSprite.gif and HorizontalSprite.gif in Adobe© PhotoShop.


1. From the menu bar select Image » Mode » RGB Color to prepare the images for editing (convert from optimized Indexed Color to RGB Color):

	![dock skins thumb](images/dock_hextorgb.gif)

1. Press Set Foreground Color in PhotoShop's toolbox to invoke the color picker dialog:

	![dock skins thumb](images/dock-deock_pstoolbox.gif)

1. Select a color that you like from the color dialog and then close it:

	![dock skins thumb](images/dock_chooseclr.png)

1. Choose the first image you will modify, for example CommandSprite.gif, and select Image » Adjustments Hue » / Saturation to open the Hue / Saturation dialog of Adobe© PhotoShop:

	![dock skins thumb](images/dock_huesatlit.png)

1. Check the colorize checkbox in the Hue / Saturation dialog, and the image you have selected will be immediately colorized in the hue you have selected from the toolbox:

	![dock skins thumb](images/dock_hue.png)

	You may then play with the Hue, Saturation and Lightness sliders to finetune or further modify the image. Make sure you memorize the values of the sliders, as you will need to add the same settings to all three images in order to achieve consistent looks

1. Press "OK" when you are finished

1. Select Image Image » Mode » Indexed Color to flatten the layers of the image

1. Save and close the image

1. Repeat Steps 5 - 9 for each of the remaining images

1. After you are over and done with this, save your work and reload the page. You will have a brandnew skin based on Telerik's Default skin of RadDock.


# See Also

 * [CSS Skin File Selectors]({%slug dock/appearance-and-styling/css-classes%})
