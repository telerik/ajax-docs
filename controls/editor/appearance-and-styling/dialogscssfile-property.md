---
title: DialogsCssFile Property
page_title: DialogsCssFile Property | UI for ASP.NET AJAX Documentation
description: DialogsCssFile Property
slug: editor/appearance-and-styling/dialogscssfile-property
tags: dialogscssfile,property
published: True
position: 1
---

# DialogsCssFile Property



## 

In the Q2 2008 release we have introduced a new editor property named __DialogCssProperty__ which is useful in scenarios when a custom skin is used. It allows you to include your custom skin CSS in the editor dialogs. Please, review bellow how to achieve the desired behavior:

1. Set the __EnableEmbeddedSkins__ property to __false__

1. Place the editor's __Skins__ folder within your web application - the __Skins__ folder can be found in the controls' installation folder of the Telerik UI for ASP.NET AJAX suite.

1. Choose the desired skin and set the editor's __Skin__ property to point to it e.g. *Skin = "Default" *

1. Add manually to the page's head the following CSS files:

````XML
	        <link href="Skins/<CurrentSkin>/Window.<CurrentSkin>.css" rel="stylesheet" type="text/css" /> 
	        <link href="Skins/<CurrentSkin>/Editor.<CurrentSkin>.css" rel="stylesheet" type="text/css" /> 
````



1. Create new CSS file e.g. __DialogCSS.css__and put in it references to the following CSS files which will style the different Telerik controls in the editor dialogs:

````XML
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



>caution Since __2014 Q1__ version the FormDecorator is set to[LightWeight Render Mode](c255bd0b-1e73-4b27-a82d-38a23e24e062).Due to that the __ *@import url("FormDecorator.<CurrentSkin>.css");* __ line should be replaced with the	one valid for the FormDecoratorLite - __ *@import url('../<CurrentSkin>Lite/FormDecorator.<CurrentSkin>.css');* __ .
>


1. Set the editor's __DialogsCssFile__property to point to the __DialogCSS__.css e.g. *DialogsCssFile="~/Skins/Default/DialogCSS.css" *
