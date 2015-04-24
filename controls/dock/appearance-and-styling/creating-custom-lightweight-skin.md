---
title: Creating a Custom Lightweight Skin
page_title: Tutorial - Creating a Custom Lightweight Skin | RadDock for ASP.NET AJAX Documentation
description: Tutorial - Creating a Custom Lightweight Skin
slug: dock/appearance-and-styling/creating-custom-lightweight-skin
tags: skin, custom, lightweight
published: True
position: 4
---

# Tutorial: Creating a Custom Lightweight Skin

## RadDock Custom Skin with LightWeight RenderMode

Each of the controls included in the **Telerik UI for ASP.NET AJAX** suite is styled with two CSS files that are loaded in a certain order. The first one – **[ControlName].css** , also called base stylesheet, contains CSS properties and values that are common for all skins, i.e it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, padding and / or margins.

The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, e.g. - **Dock.Default.css**. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds.

Since Q2 2013 RadDock has a LightWeight render mode, which uses semantically structured HTML and CSS3 for shadows, rounded corners and gradients. Overall, the skinning method is the same as for the Classic mode. The difference is that now there is one common sprite for all Light-Weighted controls called **radActionsSprite.png**. The sprite is placed in the **[SkinName]\Common** folder, e.g.: **[TelerikControlsInstallationFolder]\Skins\Default\Common\radActionsSprite.png**


## Creating RadDock LightWeight Skin from Existing One

1. In your project, create a new directory named **Skins**; 


1. In the **Skins** folder if you already have some custom skin, most probably you have already a folder named: **MyCustomSkin** – if you don’t – create one; 


1.  In the Skins folder create a new folder named: **MyCustomSkinLite** - this is the place where your Light-Weight custom skins CSS will be placed; 


1.  Go to **[TelerikControlsInstallationFolder]\Skins\DefaultLite** and copy **Dock.Default.css** in your **MyCustomSkinLite** folder; 


1.  Go to **[TelerikControlsInstallationFolder]\Skins\Default** and copy **Common** folder in your **MyCustomSkin** folder; 


1. Rename **Dock.Default.css** to **Dock.MyCustomSkin.css**; 


1. When you are finished you should have the following folder structure in your project:
	* **Skins/MyCustomSkin/Common/** - containing several sprites; 
	* **Skins/MyCustomSkinLite/Dock.MyCustomSkin.css**.

1. In order to support multiple skins of **RadDock** on a single page, the wrapping skin-specific class is coined by the name of the control, plus underscore ("_") plus SkinName, i.e. **.RadDock_Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "**RadDock_Default**" in **Dock.MyCustomSkin.css** to "**RadDock_MyCustomSkin**" as shown below:

	![dock skins thumb](images/RenameDockLight.png)

1. Add a new server declaration of **RadDock** on your page, and set **Skin="MyCustomSkin"** and **EnableEmbeddedSkins="false"**:

	__ASP.NET__

		<telerik:RadDock ID="RadDock1" runat="server"  EnableEmbeddedSkins="false" Skin="MyCustomSkin" />

1. Register **Dock.MyCustomSkin.css** in the head section of your web page. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

	__HTML__

		<link href="Skins/MyCustomSkin/Dock.MyCustomSkin.css" rel="stylesheet" type="text/css" />

1. Make sure the path to the files is correct; otherwise the skin will not apply;

1. To complete the customization, you will need to change the common sprite color according to your needs. Open **[TelerikControlsInstallationFolder]\Skins\Default\radActionsSprite.png** and edit it as required.

1. Reload the page, and if the steps 1-12 have been followed correctly, you will see RadDock running a custom Default skin set as an external resource.


## RadDock LightWeight Custom Skin Example

Below is shown how to modify the CSS in order not only to change some colors and background colors, but also some base layout settings such as font size, element height, border-radius etc.

````ASP.NET
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        div.RadDock_NewSkin {
            background-color: #f7cefa; /* Dock/Dock Content base background color */
            border-color: #450349; /* Dock border color */
            color: #4607fb; /* Dock text color, will be applied to Dock title text color also */
            font-family: "Trebuchet MS", "Lucida Grande", Sans-Serif; /* Change content font family */
            font-size: 16px; /* Change content font size */
            border-width: 3px; /* Change Dock border width */
        }

        div.RadDock_NewSkin .rdTitleWrapper {
            height: 25px; /* Change TitleBar height */
            border-bottom-color: #450349; /* sets color of the bottom border titlebar  */
            background-image: -webkit-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - webkit */
            background-image: -moz-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - firefox */
            background-image: -ms-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - IE10+ */
            background-image: -o-linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - Opera */
            background-image: linear-gradient(top, #840c83 0%, #a172a0 100%); /* CSS gradient for the title bar, applied from top to bottom - native CSS3 rule */
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#840c83', endColorstr='#a172a0',GradientType=0 ); /* Older IE */
        }

        div.RadDock_NewSkin .rdTitleWrapper  .rdTitle {
            color: #fff; /* Should be specified in order to be different than the Content text color */
            font-family: Verdana, serif; /* Change font family */
            font-size: 20px; /* Change font size */
            line-height: 22px; /* Change line-height to position the title in the middle if you have changed font size already */
        }

        /* Advanced Customization */
        div.RadDock_NewSkin.rdRoundedCorner {
            border-radius: 8px; /* Change border radius */
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="sm1" runat="server" />
    <telerik:RadDock ID="rd1" runat="server" Visible="True" Width="400" Height="300"
        RenderMode="Lightweight" Top="100" Left="20" Title="Dock Title" Skin="NewSkin"
        EnableRoundedCorners="true" EnableEmbeddedSkins="false">
        <Commands>
            <telerik:DockCloseCommand />
            <telerik:DockExpandCollapseCommand />
        </Commands>
        <ContentTemplate>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in enim nibh. Etiam laoreet eros sit amet felis cursus faucibus.
        </ContentTemplate>
    </telerik:RadDock>
    </form>
</body>
</html>
````

