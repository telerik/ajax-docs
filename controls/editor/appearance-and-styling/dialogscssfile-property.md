---
title: DialogsCssFile Property
page_title: DialogsCssFile Property | RadEditor for ASP.NET AJAX Documentation
description: DialogsCssFile Property
slug: editor/appearance-and-styling/dialogscssfile-property
tags: dialogscssfile,property
published: True
position: 1
---

# DialogsCssFile Property

In the Q2 2008 release we have introduced a new editor property named **DialogCssProperty** which is useful in scenarios when a custom skin is used. It allows you to include your custom skin CSS in the editor dialogs. Please, review bellow how to achieve the desired behavior:

1. Set the **EnableEmbeddedSkins** property to **false**

1. Place the editor's **Skins** folder within your web application - the **Skins** folder can be found in the controls' installation folder of the Telerik® UI for ASP.NET Ajax suite.

1. Choose the desired skin and set the editor's **Skin** property to point to it e.g. `Skin = "Default"`

1. Add manually to the page's head the following CSS files:

	**ASP.NET**

		<link href="Skins/<CurrentSkin>/Window.<CurrentSkin>.css" rel="stylesheet" type="text/css" /> 
		<link href="Skins/<CurrentSkin>/Editor.<CurrentSkin>.css" rel="stylesheet" type="text/css" /> 

1. Create new CSS file e.g. **DialogCSS.css** and put in it references to the following CSS files which will style the different Telerik controls in the editor dialogs:

	**CSS**
	
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


	>caution Since **2014 Q1** version the FormDecorator is set to [LightWeight Render Mode]({%slug formdecorator/mobile-support/render-modes%}). Due to that the `@import url("FormDecorator.<CurrentSkin>.css");` line should be replaced with the	one valid for the FormDecoratorLite - `@import url('../<CurrentSkin>Lite/FormDecorator.<CurrentSkin>.css');`.

1. Set the editor's **DialogsCssFile**property to point to the **DialogCSS.css** e.g. `DialogsCssFile="~/Skins/Default/DialogCSS.css"`
