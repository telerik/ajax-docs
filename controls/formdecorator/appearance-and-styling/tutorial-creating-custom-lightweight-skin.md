---
title: Tutorial - Creating a Custom Lightweight Skin
page_title: Tutorial - Creating a Custom Lightweight Skin - RadFormDecorator
description: Check our Web Forms article about Tutorial for Creating a Custom Lightweight Skin for RadFormDecorator.
slug: formdecorator/appearance-and-styling/tutorial-creating-custom-lightweight-skin
tags: FormDecorator, custom, lightweight, skin, tutorial
published: True
position: 3
---

# Tutorial: Creating a Custom Skin

## RadFormDecorator Custom Skin with LightWeight RenderMode

Each of the controls included in the **Telerik® UI for ASP.NET AJAX** suite is styled with two CSS files that are loaded in a certain order. The first one – **[ControlName].css** , also called base stylesheet, contains CSS properties and values that are common for all skins, i.e it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, padding and / or margins. 

The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, e.g. - **FormDecorator.Default.css**. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds. 

Since Q2 2013 RadFormDecorator has a LightWeight render mode, which uses semantically structured HTML and CSS3 for shadows, rounded corners and gradients. Overall, the skinning method is the same as for the Classic mode. The difference is that now there is one common sprite for all Light-Weighted controls called **radActionsSprite.png**. The sprite is placed in the **[SkinName]\Common** folder, e.g.:** [Telerik® UI for ASP.NET AJAX installation folder]\Skins\Default\Common\radActionsSprite.png**



## Creating RadFormDecorator LightWeight Skin from Existing One


1. In your project, create a new directory named **Skins**


1. In the **Skins** folder if you already have some custom skin, most probably you have already a folder named: **MyCustomSkin** – if you don’t – create one;

1. In the **Skins** folder create a new folder named: **MyCustomSkinLite** - this is the place where your Light-Weight custom skins CSS will be placed;


1. Go to **~/[TelerikControlsInstallationFolder]/Skins/DefaultLite** and copy **FormDecorator.Default.css** to your **MyCustomSkinLite** folder. 

1. Go to **[TelerikControlsInstallationFolder]\Skins\Default** and copy **Common** folder in your **MyCustomSkin** folder;


1. Rename **FormDecorator.Default.css** to **FormDecorator.MyCustomSkin.css**

1. When you are finished you should have the following folder structure in your project:
	* **Skins/MyCustomSkin/Common/** - containing several sprites;
	* **Skins/MyCustomSkinLite/FormDecorator.MyCustomSkin.css**.


1. In order to support multiple skins of RadFormDecorator on a single page, the wrapping skin-specific class is coined by the name of the control, RadFormDecorator plus underscore ("`_`") plus SkinName, i.e. **.RadForm_Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "**RadForm_Default**" in **FormDecorator.MyCustomSkin.css** to "**RadForm_MyCustomSkin**" as shown below:

	![FormDecorator skin name](images/RenameRFDLight.png)

1. Add a new server declaration of RadFormDecorator on your page, and set Skin="MyCustomSkin" and EnableEmbeddedSkins="false":

	__ASP.NET__

		<telerik:RadFromDecorator ID="RFD1" runat="server"  EnableEmbeddedSkins="false" Skin="MyCustomSkin" />



1. Register FormDecorator.MyCustomSkin.css in the `<head>...</head>` section of your webpage. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

	__HTML__

		<link href="Skins/MyCustomSkin/FormDecorator.MyCustomSkin.css" rel="stylesheet" type="text/css" />

1. Make sure the path to the files is correct, otherwise the skin will not apply.

1. To complete the customization, you will need to change the common sprite color according to your needs. Open **[TelerikControlsInstallationFolder]\Skins\Default\radActionsSprite.png** and edit it as required. **RadFormDecorator** uses one more common sprite for Checkboxes and RadioButtons: **[TelerikControlsInstallationFolder]\Skins\Default\radFormToggleSprite.png** which also should be edited.

1. Reload the page, and if the steps 1-12 have been followed correctly, you will see **RadFormDecorator** running a custom Default skin set as an external resource.


## RadFormDecorator LightWeight Custom Skin Example

Below is shown how to modify the CSS in order not only to change some colors and background colors, but also some base layout settings such as font size, element height, border-radius etc.

__ASP.NET__

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="https://www.w3.org/1999/xhtml">
	<head runat="server">
	    <title></title>
	    <style type="text/css">
	        /* Normal State button styles */
	        .RadForm.RadForm_MyCustomSkin.rfdRoundedCorners .rfdSkinnedButton {
	            border-radius: 6px; /* Change border radius */
	            color: #fff; /* Change Button fon color */
	            font-family: Verdana, Tahoma, Serif; /* Change button font family */
	            font-size: 13px; /* Change button font size */
	            border-color: #e4a1f7; /* Change button border color */
	            border-width: 2px; /* Change button border width */
	            line-height: 16px; /* Change button line height - depends on the specified font size and font family */
	            background-image: -webkit-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - webkit */
	            background-image: -moz-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - firefox */
	            background-image: -ms-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - IE10+ */
	            background-image: -o-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - Opera */
	            background-image: linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - native CSS3 rule */
	            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#840c83', endColorstr='#a172a0',GradientType=0 ); /* Older IE */
	        }
	
	        /* Hover State button styles */
	        .RadForm.RadForm_MyCustomSkin.rfdRoundedCorners .rfdSkinnedButton:hover,
	        .RadForm.RadForm_MyCustomSkin.rfdRoundedCorners .rfdHoveredButton {
	            border-color: #2d3737; /* Change button border hover color */
	            background-image: -webkit-linear-gradient(top, #06d3ff 0%, #043635 100%); /* CSS gradient for the title bar, applied from top to bottom - webkit */
	            background-image: -moz-linear-gradient(top, #06d3ff 0%, #043635 100%); /* CSS gradient for the title bar, applied from top to bottom - firefox */
	            background-image: -ms-linear-gradient(top, #06d3ff 0%, #043635 100%); /* CSS gradient for the title bar, applied from top to bottom - IE10+ */
	            background-image: -o-linear-gradient(top, #06d3ff 0%, #043635 100%); /* CSS gradient for the title bar, applied from top to bottom - Opera */
	            background-image: linear-gradient(top, #06d3ff 0%, #043635 100%); /* CSS gradient for the title bar, applied from top to bottom - native CSS3 rule */
	            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#06d3ff', endColorstr='#043635',GradientType=0 ); /* Older IE */
	        }
	
	        /* Active and Focus State button styles - need to add one more class to the CSS cascade in order to override hover states */
	        .RadForm.RadForm_MyCustomSkin.rfdRoundedCorners.rfdButton .rfdClickedButton,
	        .RadForm.RadForm_MyCustomSkin.rfdRoundedCorners.rfdButton .rfdFocusedButton {
	            border-color: #99c194; /* Change button border active/focus color */
	            background-image: -webkit-linear-gradient(top, #093d03 0%, #0f7204 100%); /* CSS gradient for the title bar, applied from top to bottom - webkit */
	            background-image: -moz-linear-gradient(top, #093d03 0%, #0f7204 100%); /* CSS gradient for the title bar, applied from top to bottom - firefox */
	            background-image: -ms-linear-gradient(top, #093d03 0%, #0f7204 100%); /* CSS gradient for the title bar, applied from top to bottom - IE10+ */
	            background-image: -o-linear-gradient(top, #093d03 0%, #0f7204 100%); /* CSS gradient for the title bar, applied from top to bottom - Opera */
	            background-image: linear-gradient(top, #093d03 0%, #0f7204 100%); /* CSS gradient for the title bar, applied from top to bottom - native CSS3 rule */
	            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#093d03', endColorstr='#0f7204',GradientType=0 ); /* Older IE */
	        }
	    </style>
	</head>
	<body>
	    <form id="form1" runat="server">
	    <asp:ScriptManager ID="sm1" runat="server" />
	    <telerik:RadFormDecorator runat="server" DecoratedControls="All" RenderMode="Lightweight" EnableEmbeddedSkins="false" Skin="MyCustomSkin" />
	    <asp:button runat="server" Text="ASP Button" />
	    <asp:button runat="server" Text="ASP Button Different Height" Height="40" />
	    <button>HTML Button</button>
	    </form>
	</body>
	</html>
    

   
## See Also

 * [Telerik ThemeBuilder for ASP.NET AJAX](https://themebuilder.telerik.com/)


