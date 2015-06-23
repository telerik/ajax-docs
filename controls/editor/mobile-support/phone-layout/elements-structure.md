---
title: Elements Structure
page_title: Phone Layout Elements Structure | RadEditor for ASP.NET AJAX Documentation
description: Mobile Rendering
slug: editor/mobile-support/phone-layout/elements-structure
tags: editor,support,mobile,rendering,structure
published: True
position: 2
---

# Elements Structure

This article shows the default elements structure of a **RadEditor** with **Phone Layout** rendering in **Figure 1** and offers details on the phone-specific elements below the figure.

>caption **Figure 1**: Elements Structure of RadEditor with Phone-optimized Mobile rendering. 

![Mobile Editor Elements Structure Edit Content Button](./images/mobile-editor-elements-structure-edit-button.png) ![Mobile Editor Elements Structure](./images/mobile-editor-elements-structure.png)

* **Header Toolbar** - a basic toolbar, located on top of the editor.

	* **Edit Content** - a button that lets you start editing the content.
	
	* **Toggle ToolZone** - a button that opens/closes the ToolZone (Toolbar). You can use it to start/end formatting the selection or inserting HTML elements (e.g., hyperlinks, images, tables).
	
	* **Toggle HTML Mode** - a button that toggles between Design and HTML viewing modes.
	
	* **Exit Full Screen** - a button that turns off the full screen mode. You can press it when finished with the content editing.
	
* **Content Area** - the place which stores and displays the content to edit.

* **ToolZone (Toolbar)** - the main toolbar used for formatting the selection and inserting HTML elements (e.g., hyperlinks, images, tables).

	* **Tools Navigator**
	
		* **Tab Chooser** - lets you navigate to different predefined set of tools (e.g., **Home**, **Insert**, **Table**, **Link**, **Image**). The **Insert** option (**Figure 2**) opens a list with the [mobile dialogs]({%slug editor/mobile-support/phone-layout/dialogs%}). The **Table**, **Link**, **Image** options open mobile dialogs to configure attributes for the corresponding HTML element.
		
			>caption **Figure 2**: Navigation to the mobile Insert Dialogs of RadEditor with Phone Layout.
			
			![Mobile Editor Insert Dialogs](./images/AJAX_RadEditor_Adaptive_InsertMode_2in1.png)
		
		* **Hide Tools Arrow** - closes the current ToolZone and navigates to the previous tab.
		
	* **DropDowns** - various dropdowns for selecting predefined font names/sizes, CSS classes, paragraph styles, etc.
	
	* **Buttons** - various buttons for creating lists, indent/outdent, align, bold, italic, underline, etc.
	
	* **Color Pickers** - mobile color pickers to control the foreground, background and border colors of HTML elements.

You can find the full description of all the tools from the toolbar in the [Toolbars Overview]({%slug editor/functionality/toolbars/overview%}) article. You can also customize the default toolbar of the mobile editor as shown in the [Phone Layout Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}) article.

## See Also

* [Phone Layout Overview]({%slug editor/mobile-support/phone-layout/overview%})
* [Phone Layout Dialogs]({%slug editor/mobile-support/phone-layout/dialogs%})
* [Phone Layout ToolBar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%})
* [Toolbars Overview]({%slug editor/functionality/toolbars/overview%})