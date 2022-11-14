---
title: DialogsCssFile Property
page_title: DialogsCssFile Property - RadEditor
description: Check our Web Forms article about DialogsCssFile Property.
slug: editor/appearance-and-styling/dialogscssfile-property
tags: dialogscssfile,property
published: True
position: 1
---

# DialogsCssFile Property

The **DialogCssProperty** property is useful in scenarios when a custom skin is used or you just want to import your own CSS file to customize the appearance of the iframe-based dialogs. It allows you to include your custom skin CSS in the editor dialogs. Follow the steps to see how you can set it:

1. Place the editor's **Skins** folder within your web application - the **Skins** folder can be found in the controls' installation folder of the Telerik® UI for ASP.NET AJAX suite.
 
2. Set the **EnableEmbeddedSkins** property to **false**.
	
 ````ASP.NET
<telerik:RadEditor RenderMode="Lightweight"
	runat="server" ID="RadEditor1"
	Skin="Default"
	EnableEmbeddedSkins="false"
	DialogsCssFile="~/Skin/DialogCSS.css">
</telerik:RadEditor>
````

3. Choose the desired skin and set the editor's **Skin** property to point to it e.g. `Skin = "Default"`

4. Add manually to the page's head the following CSS files:

 ````ASP.NET
<link href="Skins/<CurrentSkin>/Window.<CurrentSkin>.css" rel="stylesheet" type="text/css" /> 
<link href="Skins/<CurrentSkin>/Editor.<CurrentSkin>.css" rel="stylesheet" type="text/css" /> 
````

5. Create new CSS file e.g. **DialogCSS.css** and put in it references to the following CSS files which will style the different Telerik controls in the editor dialogs:

 ````CSS
@import url("Ajax.<CurrentSkin>.css");
@import url("ColorPicker.<CurrentSkin>.css");
@import url("FormDecorator.<CurrentSkin>.css");
@import url("Grid.<CurrentSkin>.css");
@import url("Input.<CurrentSkin>.css");
@import url("PanelBar.<CurrentSkin>.css");
@import url("Rotator.<CurrentSkin>.css");
@import url("Slider.<CurrentSkin>.css");
@import url("Splitter.<CurrentSkin>.css");
@import url("TabStrip.<CurrentSkin>.css");
@import url("ToolBar.<CurrentSkin>.css");
@import url("TreeView.<CurrentSkin>.css");
@import url("Upload.<CurrentSkin>.css");
@import url("Widgets.<CurrentSkin>.css");
@import url("Window.<CurrentSkin>.css");
@import url("ComboBox.<CurrentSkin>.css");
@import url("Button.<CurrentSkin>.css");
@import url("Editor.<CurrentSkin>.css");
@import url("ListBox.<CurrentSkin>.css");
````

6. Set the editor's **DialogsCssFile**property to point to the **DialogCSS.css** e.g. `DialogsCssFile="~/Skins/Default/DialogCSS.css"`

For more information check the following article: [Registering an external skin of RadEditor]({%slug registering-an-external-skin-of-radeditor%}).
   
      