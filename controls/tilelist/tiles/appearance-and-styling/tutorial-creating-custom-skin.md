---
title: Tutorial - Creating a Custom Skin
page_title: Tutorial  Creating a Custom Skin | RadTile for ASP.NET AJAX Documentation
description: Tutorial for Creating a Custom Skin for RadTile
slug: tilelist/tiles/appearance-and-styling/tutorial-creating-custom-skin
tags: tilelist, custom, skin, tutorial
published: True
position: 2
---

# Tutorial: Creating a Custom Skin

## RadTile Tutorial: Creating a Custom Skin

Each of the controls included in the Telerik® UI for ASP.NET AJAX suite is styled by two CSS files that are loaded in a certain order. The first one - **ControlName.css**, also called the base stylesheet contains CSS properties and values that are common for all skins, i.e. it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, paddings or margins. The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, i.e. **Tile.Default.css**. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds.

## Creating a Custom Skin for RadTile for ASP.NET AJAX from an Existing One

1. In your project, create a new directory named Skins


1. In the Skins folder create a new directory **MyCustomSkin**. 


1. Go to **~/[TelerikControlsInstallationFolder]/Skins/Default** and copy **Tile.Default.css** and the **Skins/Default/Tile** folder in your Skins folder. 


1. Rename **Tile.Default.css** to **Tile.MyCustomSkin.css** and the folder **Default** to **MyCustomSkin**. 


1. When you are finished you should have **Skins/MyCustomSkin/Tile.MyCustomSkin.css** and **Skins/MyCustomSkin/Tile**. The last folder contains the images for **MyCustomSkin**. 


1. In order to support multiple skins of RadTile on a single page, the wrapping skin-specific class is coined by the name of the control, RadTile plus underscore ("_") plus SkinName, i.e. **.RadTile_Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "**Default**" in **Tile.MyCustomSkin.css** to "**MyCustomSkin**" as shown below:

	![tile skin name](images/tile-skinname.png)

1. Add a new server declaration of RadTile on your page, and set Skin="MyCustomSkin" and EnableEmbeddedSkins="false":

	__ASP.NET__

		<telerik:RadTextTile runat="server" Title-Text="My Custom Skin" EnableEmbeddedSkins="false" Skin="MyCustomSkin"></telerik:RadTextTile>


1. Register Tile.MyCustomSkin.css in the `<head>...</head>` section of your webpage. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

	__HTML__

		<link rel="stylesheet" type="text/css" href="Skins/MyCustomSkin/Tile.MyCustomSkin.css"></link>

	Make sure the path to the files is correct, otherwise the skin will not apply.

1. Reload the page, and if the steps 1-9 have been followed correctly, you will see RadTile running a custom Default skin set as an external resource.


## Modifying the Image Sprites to Achieve Totally New Looks for the Skin

Explained below is a simple method for modifying the image sprites of RadTile with Adobe© PhotoShop to achieve new looks without creating a new design.

1. Drag **rtileSprite.gif** in Adobe© PhotoShop.

1. From the menu bar select Image » Mode » RGB Color to prepare the images for editing (convert from optimized Indexed Color to RGB Color):

	![hex to rgb](images/RadTile_dock_hextorgb.png)

1. Press Set Foreground Color in PhotoShop's toolbox to invoke the color picker dialog:

	![foreground color](images/RadTile_deock_pstoolbox.png)

1. Select a color that you like from the color dialog and then close it:

	![cloose color](images/RadTile_dock_chooseclr.png)

1. Select Image » Adjustments Hue » / Saturation to open the Hue / Saturation dialog of Adobe© PhotoShop:

	![choose hue](images/RadTile_dock_huesatlit.png)

1. Check the colorize checkbox in the Hue / Saturation dialog, and the image you have selected will be immediately colorized in the hue you have selected from the toolbox:

	![choose hue](images/RadTile_dock_hue.png)

	You may then play with the Hue, Saturation and Lightness sliders to finetune or further modify the image.

1. Press "OK" when you are finished

1. Select Image Image » Mode » Indexed Color to flatten the layers of the image


1. Save and close the image


1. Repeat Steps 5 - 9 for each of the remaining images


1. After you are over and done with this, save your work and reload the page. You will have a brand new skin based on Telerik's Default skin of **RadTile**.


>tip If you use RadTileList together with RadTile you will need to [create a custom skin for RadTileList]({%slug tilelist/appearance-and-styling/Tutorial-creating-custom-skin%}) also.


# See Also

* [Tutorial: Creating a Custom Skin for RadTileList]({%slug tilelist/appearance-and-styling/Tutorial-creating-custom-skin%})
* [Telerik ThemeBuilder for ASP.NET AJAX](http://themebuilder.telerik.com/)


