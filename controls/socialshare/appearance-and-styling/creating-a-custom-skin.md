---
title: Creating a Custom Skin
page_title: Creating a Custom Skin | UI for ASP.NET AJAX Documentation
description: Creating a Custom Skin
slug: socialshare/appearance-and-styling/creating-a-custom-skin
tags: creating,a,custom,skin
published: True
position: 1
---

# Creating a Custom Skin



## Creating RadSocialShare Custom Skin

Each of the controls included in the Telerik UI for ASP.NET AJAX suite is styled by two CSS files that are loaded in a certain order. The first one - ControlName.css, also called the base stylesheet contains CSS properties and values that are common for all skins, i.e. it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, paddings or margins. The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, i.e. SocialShare.Default.css. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds.

## Creating a Custom Skin for RadSocialShare for ASP.NET AJAX from an Existing One

1. In your project, create a new directory named __Skins__

1. In the __Skins__ folder create a new directory __MyCustomSkin__

1. Go to ~/__[TelerikControlsInstallationFolder]/Skins/Default__ and copy __SocialShare.Default.css__ and the __Skins/Default/SocialShare__ folder in your __Skins__ folder.

1. Rename __SocialShare.Default.css__ to __SocialShare.MyCustomSkin.css__ and the folder __Default__ to __MyCustomSkin__

1. When you are finished you should have __Skins/MyCustomSkin/SocialShare.MyCustomSkin.css__ and __Skins/MyCustomSkin/SocialShare__. The last folder contains the images for __MyCustomSkin__

1. In order to support multiple skins of __RadSocialShare__ on a single page, the wrapping skin-specific class is coined by the name of the control, __RadSocialShare__ plus underscore ("_____") plus __SkinName__, i.e.__.RadSocialShare_Default__, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "__Default__" in SocialShare.MyCustomSkin.css to "__MyCustomSkin__" as shown below:![radsocialshare-find-and-replace](images/radsocialshare-find-and-replace.gif)

1. Add a new server declaration of __RadSocialShare__ on your page, and set __Skin="MyCustomSkin"____and EnableEmbeddedSkins="false"__:

````ASPNET
	    <telerik:RadSocialShare ID="ssh1" runat="server" EnableEmbeddedSkins="false" Skin="MyCustomSkin">
	    </telerik:RadSocialShare>
````



1. Register __SocialShare.MyCustomSkin.css__ in the <head>…</head> section of your webpage.In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

````ASPNET
	    <link href="Skins/MyCustomSkin/SocialShare.MyCustomSkin.css" rel="stylesheet" type="text/css" />
````

Make sure the path to the files is correct; otherwise the skin will not apply.

1. Reload the page, and if the steps 0-8 have been followed correctly, you will see __RadSocialShare__running a custom __Default__ skin set as an external resource

## Modifying the Image Sprites to Achieve Totally New Looks for the Skin

Each skin of __RadSocialShare__ consists of one image sprite common for all embedded skins which is placed in __Skins/Common/SocialShare/SocialShareSprite.png__ . In order to override it for the custom skin, you will need to do the following steps:

1. Copy the sprite from __Skins/Common/SocialShare/__ and paste it to __Skins/MyCustomSkin/SocialShare__ folder.

1. As in the embedded skin the background image url is set in the base stylesheet, you have to override it in __SocialShare.MyCustomSkin.css__:

````ASPNET
	    .RadSocialShare_MyCustomSkin .sshIcon
	    {
	        background-image:url(SocialShare/SocialShareSprite.png);
	    }
````





Explained below is a simple method for modifying the image sprites of __RadSocialShare__ withAdobe© PhotoShop to achieve new looks without creating a new design:

1. Drag __SocialShareSprite.png__ in Adobe© PhotoShop

1. From the menu bar select Image » Mode » RGB Color to prepare the images for editing (convert from optimized Indexed Color to RGB Color):![radsocialshare-rgb](images/radsocialshare-rgb.gif)

1. Press Set Foreground Color in PhotoShop's toolbox to invoke the color picker dialog:![radsocialshare-foreground](images/radsocialshare-foreground.gif)

1. Select a color that you like from the color dialog and then close it:![radsocialshare-select-color](images/radsocialshare-select-color.gif)

1. Choose the image you will modify, and select Image » Adjustments Hue » / Saturation to open the Hue / Saturation dialog of Adobe© PhotoShop:![radsocialshare-choose-hue](images/radsocialshare-choose-hue.gif)

1. Check the colorize checkbox in the Hue / Saturation dialog, and the image you have selected will be immediately colorized in the hue you have selected from the toolbox:![radsocialshare-saturated](images/radsocialshare-saturated.gif)You may then play with the Hue, Saturation and Lightness sliders to fine tune or further modify the image

1. Press "OK" when you are finished

1. Select Image » Mode » Indexed Color to flatten the layers of the image

1. Save and close the image

1. Repeat Steps 5 - 9 for each of the remaining images

1. Once you are ready, save your work and reload the page. You will have a brand-new skin based on Telerik's__Default__ skin of __RadSocialShare__

1. This is not mandatory, but you could decide to change __RadSocialShare__ background and border colors to match the newly colorized sprite

# See Also

 * [CSS Skin File Selectors]({%slug socialshare/appearance-and-styling/css-classes%})

 * [Skins]({%slug socialshare/appearance-and-styling/skins%})
