---
title: Create a Custom Skin
page_title: Create a Custom Skin - RadCheckBox
description: Check our Web Forms article about Create a Custom Skin.
slug: checkbox/appearance-and-styling/create-a-custom-skin
tags: create,a,custom,skin
published: True
position: 1
---

# Create a Custom Skin

Each of the controls included in the **Telerik® UI for ASP.NET AJAX** suite is styled with two CSS files that are loaded in a certain order. The first file – **[ControlName].css** , also called base stylesheet, contains CSS properties and values that are common for all skins, i.e., it is layout-specific, not skin-specific. These are CSS float, padding, margin, font-size, font-family, etc. In general, when creating a custom skin for a control, this file should not be edited unless the custom skin needs different sizes, padding and / or margins.

The second file represents the actual skin of the control, and its name consists of the control name plus the skin name, e.g.,  **Button.Default.css**. Upon creating a custom skin for the control, one should edit that particular file, as it contains skin-specific CSS properties and references to images, colors, borders and backgrounds.

## Create a RadCheckBox Skin from an Existing One

1) In your project, create a new directory named **Skins**;

2) In the **Skins** folder if you already have some custom skin, most probably you already have a folder named: **MyCustomSkin** – if you don’t – create one;

3) In the **Skins** folder, create a new folder named: **MyCustomSkinLite** - this is the place where your Lightweight custom skins CSS will be placed; 

4) Go to **[ControlsInstallationFolder]\Skins\DefaultLite** and copy **Button.Default.css** into your **MyCustomSkinLite** folder;

5) Go to **[TelerikControlsInstallationFolder]\Skins\Default** and copy the **Common** folder into your **MyCustomSkin** folder;

6) In your your **MyCustomSkinLite** folder, rename **Button.Default.css** to **Button.MyCustomSkin.css**;

7) When you are finished you should have the following folder structure in your project:

**Skins/MyCustomSkin/Common/** - containing several sprites;

**Skins/MyCustomSkinLite/Button.MyCustomSkin.css**.

8) In order to support multiple skins of **RadCheckBox** on a single page, the wrapping skin-specific class is created using the name of the control, plus underscore ("_") plus SkinName, i.e., **.RadButton_Default**, so in order to create a custom skin out of the Default skin, we should rename all occurrences of **"RadButton_Default"** in **Button.MyCustomSkin.css** to **"RadButton_MyCustomSkin"** as shown below:

![Rename Button Light](images/RenameButtonLight.png)

9) Add a new server declaration of **RadCheckBox** on your page and set **Skin="MyCustomSkin"** and **EnableEmbeddedSkins="false"**:

````ASPX
	<telerik:RadCheckBox runat="server" ID="RadCheckBox1" Skin="MyCustomSkin" EnableEmbeddedSkins="false" />
````

10) Register **Button.MyCustomSkin.css** in the head section of your web page. In order to have the CSS applied correctly, the base stylesheet should come first in the DOM:

````ASPX
	<link href="Skins/MyCustomSkinLite/Button.MyCustomSkin.css" rel="stylesheet" type="text/css" />
````

11) Make sure the path to the files is correct; otherwise the skin will not apply;

12) Reload the page, and if the steps 1-11 have been followed correctly, you will see **RadCheckBox** running a custom Default skin set as an external resource.

## Custom Skin Example

The example below shows how to modify the CSS in order not only to change some colors and background colors, but also some base layout settings such as font size, element height, border-radius, etc.

````ASP.NET
<!DOCTYPE html>

<html xmlns="https://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
	<title></title>
	<style>
		/* Checkbox normal state */
		html .RadButton_Default.rbCheckBox .rbIcon,
		html .RadButton_Default.rbCheckBox .rbText {
			color: #80078e;
		}

		/* Checkbox hovered state */
		html .RadButton_Default.rbCheckBox.rbHovered .rbIcon,
		html .RadButton_Default.rbCheckBox.rbHovered .rbText {
			color: #3a0470;
		}
	</style>
</head>
<body>
	<form id="form1" runat="server">
		<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
		<telerik:RadCheckBox runat="server" ID="RadCheckBox1" Text="Check here">
		</telerik:RadCheckBox>
	</form>
</body>
</html>
````

## See Also

 * [Render Modes]({%slug checkbox/mobile-support/render-modes%})
