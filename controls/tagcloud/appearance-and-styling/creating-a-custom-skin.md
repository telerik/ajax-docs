---
title: Creating a Custom Skin
page_title: Creating a Custom Skin | RadTagCloud for ASP.NET AJAX Documentation
description: Creating a Custom Skin
slug: tagcloud/appearance-and-styling/creating-a-custom-skin
tags: creating,a,custom,skin
published: True
position: 1
---

# Creating a Custom Skin



Each of the controls included in the Telerik UI for ASP.NET AJAX suite is styled with two CSS files that are loaded in a certain order. The first one - **ControlName.css** (also called base stylesheet), contains CSS properties and values that are common for all skins, i.e it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In the general case, when creating a custom skin for a control this file should not be edited, unless the custom skin needs different sizes, padding or margins.

The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, i.e - **TagCloud.Default.css**. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties, and references to images, colors, borders and backgrounds.

## Creating a Custom Skin for RadTagCloud for ASP.NET AJAX from an Existing One

In order to explain better the CSS classes of **RadTagCloud**, we will use both **TagCloud.css** and **TagCloud.SkinName.css** as external resources. We will modify an existing skin of **RadTagCloud**. Follow these steps to register an external skin for RadTagCloud for ASP.NET AJAX before editing any CSS:

1. In your project, create a new directory named **Skins**

1. In the skins folder create a new directory **MyCustomSkin**.

1. Go to **~/[TelerikControlsInstallationFolder]/Skins** and copy **TagCloud.css** in your **Skins** folder

1. Go to **~/[TelerikControlsInstallationFolder]/Skins/Default** and copy **TagCloud.Default.css** in your Skins folder.

1. Rename **TagCloud.Default.css** to **TagCloud.MyCustomSkin.css** and the folder **Default** to **MyCustomSkin**.

1. When you are finished you should have: **Skins/TagCloud.css**, **Skins/MyCustomSkin/** and **TagCloud.MyCustomSkin**.

1. In order to support multiple skins of RadTagCloud on a single page, the wrapping skin-specific class is coined by the name of the control, **RadTagCloud** plus underscore ("_") plus SkinName, i.e . **RadTagCloud _Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of "Default" in TagCloud.MyCustomSkin.css to "MyCustomSkin" as shown below:

	![Renaming Classes](images/tagcloudclassrenaming.gif)

1. Put a new server declaration of RadTagCloud on your page, and set **Skin="MyCustomSkin"**, **EnableEmbeddedSkins="false"** and **EnableEmbeddedBasestylesheet="false"**:

	**ASPNET**
	
		<telerik:RadTagCloud>
			Id="RadTagCloud1" runat="server" Skin="MyCustomSkin" EnableEmbeddedSkins="false"
			EnableEmbeddedBasestylesheet="false"</telerik:RadTagCloud>

1. Register **TagCloud.css** and **TagCloud.MyCustomSkin.css** in the <head>...</head> section of your web page. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:**Important:** Make sure the path to the files is correct, otherwise the skin will not apply.

	**HTML**
	
		<link rel="stylesheet" type="text/css" href="Skins/TagCloud.css"></link>
		<link rel="stylesheet" type="text/css" href="Skins/MyCustomSkin/TagCloud.MyCustomSkin.css">
		</link>

1. Reload the page, and if the steps 1-9 have been followed correctly, you will see a **RadTagCloud** running a custom **MyCustomSkin** skin set as an external resource.


