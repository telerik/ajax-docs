---
title: Elements Structure
page_title: Phone Layout Elements Structure | RadEditor for ASP.NET AJAX Documentation
description: Mobile Rendering
slug: editor/mobile-support/mobile-rendering/elements-structure
tags: editor,support,mobile,rendering,structure
published: True
position: 1
---

# Phone Layout Elements Structure

The mobile rendering of the RadEditor offers a specific UI for phone devices to get a better usability. You can find 
the default elements structure of the mobile rendering in **Figure 1** and details on each element below it.

>caption Figure 1: Elements Structure of RadEditor with Phone-optimized Mobile rendering. 

![Mobile Editor Elements Structure](./images/mobile-editor-elements-structure.png)

* **Header Toolbar** - A basic toolbar, located on top of the editor. Can be customized.

	* **Undo / Redo** - Buttons for undo/redo content changes.
	
	* **Edit** - A button that opens/closes the ToolZone(Toolbar). You can use it to start/end formatting the selection or inserting HTML elements (e.g., hyperlinks, images, tables).
	
	* **Find & Replace** - Opens the Find & Replace dialog.
	
	* **Toggle Edit Mode** - A button that toggles between Design and HTML viewing modes.
	
	* **Toggle Full Screen Mode** - A button that turns off the full screen mode. You can press it when finished with the content editing.
	
* **Content Area** - The place which stores and displays the content to edit.

* **ToolZone(Toolbar)** - The main toolbar used for formatting the selection and inserting HTML elements (e.g., hyperlinks, images, tables).

	* **Tools Navigator**
	
		* **Tab Chooser** - Navigator to different predefined set of tools (e.g, **Home**, **Insert**, **Table**, **Link**, **Image**). The **Insert** option opens the [mobile dialogs]({%slug editor/mobile-support/mobile-rendering/dialogs%}). The **Table**, **Link**, **Image** options display the property dialogs for the corresponding HTML element.
		
		* **Hide Tools Arrow** - Closes the current ToolZone.
		
	* **DropDowns** - Various dropdowns for selecting predefined font names/sizes, CSS classes, paragraph styles, etc.
	
	* **Buttons** - Various buttons for list, indent/outdent, align, bold, italic, underline, etc.
	
	* **Color Pickers** - Mobile color pickers to control the foreground, background and border colors of HTML elements. You can modify the color pickers palette through the PhoneLayoutTools.xml file.

You can find the full description of all the tools from the toolbar in the [Toolbars Overview]({%slug editor/functionality/toolbars/overview%}) article. You can also customize the default toolbar of the mobile editor as per the [Phone Layout ToolBar Configuration]({%slug editor/mobile-support/mobile-rendering/toolbar-configuration%}) article.

## See Also

* [Phone Layout Overview]({%slug editor/mobile-support/mobile-rendering/overview%})
* [Phone Layout Dialogs]({%slug editor/mobile-support/mobile-rendering/dialogs%})
* [Phone Layout ToolBar Configuration]({%slug editor/mobile-support/mobile-rendering/toolbar-configuration%})
* [Toolbars Overview]({%slug editor/functionality/toolbars/overview%})