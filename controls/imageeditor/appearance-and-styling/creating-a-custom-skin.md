---
title: Creating a Custom Skin
page_title: Creating a Custom Skin | RadImageEditor for ASP.NET AJAX Documentation
description: Creating a Custom Skin
slug: imageeditor/appearance-and-styling/creating-a-custom-skin
tags: creating,a,custom,skin
published: True
position: 1
---

# Creating a Custom Skin



## Creating Custom Skin for RadImageEditor

Each of the controls included in the Telerik UI for ASP.NET AJAX suite is styled with two CSS files that are loaded in a certain order. The first one - ControlName.css, also called base stylesheet contains CSS properties and values that are common for all skins, i.e it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, padding and / or margins.

The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, i.e - **ImageEditor.Default.css**. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds.

**RadImageEditor**, however, consists of several controls and it is necessary to skin them also to achieve compatible look and feel. These controls are: **RadToolBar**, **RadButton**, **RadComboBox**, **RadColorPicker**, **RadDock**, **RadFormDecorator**, **RadSlider**, **RadDropDownList**.

## Creating a Custom Skin for RadImageEditor for ASP.NET AJAX from an Existing One

1. In your project, create a new directory named **Skins**.

1. In the Skins folder create a new directory **MyCustomSkin**.

1. Go to ~/[TelerikControlsInstallationFolder]/Skins/Default and copy **ImageEditor.Default.css** and the **Skins/Default/ImageEditor** folder in your Skins folder.

1. Rename ImageEditor.Default.css to **ImageEditor.MyCustomSkin.css** and the folder Default to **MyCustomSkin**.

1. When you are finished you should have **Skins/MyCustomSkin/ImageEditor.MyCustomSkin.css** and **Skins/MyCustomSkin/ImageEditor**. The last folder contains the images for MyCustomSkin.

1. In order to support multiple skins of RadNotification on a single page, the wrapping skin-specific class is coined by the name of the control, **RadImageEditor** plus underscore ("`_`") plus **SkinName**, i.e. **.RadImageEditor_Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "Default" in ImageEditor.MyCustomSkin.css to "MyCustomSkin" as shown below:
	
	![radimageeditor-rename](images/radimageeditor-rename.png)

1. Add a new server declaration of RadImageEditor on your page, and set **Skin="MyCustomSkin"** and **EnableEmbeddedSkins=”false”**:

	__ASP.NET__

		<telerik:RadImageEditor ID="rim1" runat="server" EnableEmbeddedSkins="false" Skin="MyCustomSkin">
		</telerik:RadImageEditor>



1. Register ImageEditor.MyCustomSkin.css in the head section of your webpage. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

	__HTML__

		<link href="Skins/MyCustomSkin/Notification.MyCustomSkin.css" rel="stylesheet" type="text/css" />


1. Make sure the path to the files is correct; otherwise the skin will not apply.

1. Reload the page, and if the steps 1-9 have been followed correctly, you will see **RadImageEditor** running a custom Default skin set as an external resource.

## Modifying the Image Sprites to Achieve Totally New Looks for the Skin

Each skin of **RadImageEditor** consists of one image sprite that is contained in the **Skins/SkinName/ImageEditor** folder:

ImageEditorTools.png contains all button icons normal and hovered states and resize buttons both left to right and right to left support states. Note, that there is one more sprite called ImageEditorToolsIE6.gif, which is exported from the png image to support IE6.

Explained below is a simple method for modifying the image sprites of **RadImageEditor** with Adobe© PhotoShop to achieve new looks without creating a new design.

1. Drag **ImageEditorTools.png** in Adobe© PhotoShop.

1. From the menu bar select Image » Mode » RGB Color to prepare the images for editing (convert from optimized Indexed Color to RGB Color):

	![radimageeditor-change-mode](images/radimageeditor-change-mode.png)

1. Press Set Foreground Color in PhotoShop's toolbox to invoke the color picker dialog:

	![radimageeditor-foreground-color](images/radimageeditor-foreground-color.png)

1. Select a color that you like from the color dialog and then close it:

	![radimageeditor-choose-color](images/radimageeditor-choose-color.png)

1. Choose the image you will modify - **ImageEditorTools.png**, and select Image » Adjustments » Hue/Saturation to open the Hue/Saturation dialog of Adobe© PhotoShop:

	![radimageeditor-hue](images/radimageeditor-hue.png)

1. Check the colorize checkbox in the Hue / Saturation dialog, and the image you have selected will be immediately colorized in the hue you have selected from the toolbox:

	![radimageeditor-colorize](images/radimageeditor-colorize.png)

	You may then play with the Hue, Saturation and Lightness sliders to fine tune or further modify the image.

1. Press "OK" when you are finished.

1. Select Image » Mode » Indexed Color to flatten the layers of the image.

1. Save and close the image.

1. Once you are ready, save your work and reload the page. You will have a brand new skin based on Telerik's **Default** skin of **RadImageEditor**.

# See Also
* [RadFormDecorator]({%slug formdecorator/overview%})

* [RadButton]({%slug button/telerik's-asp.net-button-overview%})

* [RadComboBox]({%slug combobox/overview%})
 
* [RadToolBar]({%slug toolbar/overview%})
 
* [RadDock]({%slug dock/overview%})
