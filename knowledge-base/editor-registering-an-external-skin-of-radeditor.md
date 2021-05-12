---
title: Registering an external skin of RadEditor
description: Registering an external skin of RadEditor. Check it now!
type: how-to
page_title: Registering an external skin of RadEditor
slug: registering-an-external-skin-of-radeditor
res_type: kb
---
 
## HOW-TO  
Register an external skin of RadEditor  
   
## DESCRIPTION
The solution below demonstrates how to disable the embedded RadEditor's skin and register the external Vista skin. It is useful in scenarios when for some reason the editor is unable to read its embedded skins or when the developer wants to modify the external skin and create a custom skin.  
   
## SOLUTION 
In order to register the external **Vista** skin of RadEditor, follow the steps below:
 
1. Set the **EnableEmbeddedSkins** property to **false**, thus the editor will not read its embedded in the Telerik.Web.UI.dll skin files.
2. Set the **Skin** property to "**Vista**"
3. Place the editor's **Skins** folder within the root of your web application - the Skins folder can be found in the RadControls for ASP.NET AJAX installation folder.
4. Add manually to the page's head tag the following CSS files:  
	````ASP.NET
	<link href="Skins/Window.css" rel="stylesheet" type="text/css" />   
	<link href="Skins/Editor.css" rel="stylesheet" type="text/css" />   
	<link href="Skins/Vista/Window.Vista.css" rel="stylesheet" type="text/css" />  
	<link href="Skins/Vista/Editor.Vista.css" rel="stylesheet" type="text/css" />
	```
    These skin files will import the stylesheet needed for the RadEditor rendering on the page. If you experience any problems with the toolbar appearance, copy the attached CommandSprite.gif to the Skins\Vista\Editor folder and overwrite the file with the same name in it.
5. In the Q2 2008 release we introduced a new editor's property named **DialogsCssFile** which is useful in scenarios when an external / custom skin is used. It allows you to include the external skin CSS in the editor dialogs.    Create a new CSS file in the /Skins/Vista folder named for example DialogCSS.css and put in it references to the following CSS files:
	````CSS
		@import url('../ToolBar.css');
		@import url('../FormDecorator.css');
		@import url('../TabStrip.css');
		@import url('../Editor.css');
		@import url('../TreeView.css');
		@import url('../Splitter.css');
		@import url('../Slider.css');
		@import url('../Upload.css');
		@import url('../Window.css');
		@import url('../Grid.css');
		@import url('../Widgets.css');
		@import url('../FileExplorer.css');
		@import url('../Menu.css');
		@import url('../MultiPage.css');
		@import url('../ImageEditor.css');
		@import url('../Dock.css');

		@import url("Ajax.Vista.css");
		@import url("ColorPicker.Vista.css");
		@import url("ComboBox.Vista.css");
		@import url("Editor.Vista.css");
		@import url("FormDecorator.Vista.css");
		@import url("Grid.Vista.css");
		@import url("Menu.Vista.css");
		@import url("Slider.Vista.css");
		@import url("Splitter.Vista.css");
		@import url("TabStrip.Vista.css");
		@import url("ToolBar.Vista.css");
		@import url("TreeView.Vista.css");
		@import url("Upload.Vista.css");
		@import url("Window.Vista.css");
		@import url("Widgets.Vista.css");
		@import url("FileExplorer.Vista.css");
		@import url("ImageEditor.Vista.css");
		@import url("Dock.Vista.css");
	````
6. Set the editor's **DialogsCssFile** property to point to the **DialogCSS.css** e.g.  DialogsCssFile="~/Skins/Vista/DialogCSS.css"


 


