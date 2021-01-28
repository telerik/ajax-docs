---
title: Toolbars and Menus
page_title: Toolbars and Menus - RadEditor
description: Check our Web Forms article about Toolbars and Menus.
slug: editor/getting-started/toolbars-and-menus
tags: toolbars,and,menus
published: True
position: 4
---

# Toolbars and Menus

1. **Toolbars -** You can fully customize the UI of RadEditor using its Tools collection. The collection contains the tools that are placed on the toolbar. You can arrange tools in **Groups** and **ToolStrips**:

1. **Groups** are the RadEditor's abstraction for Toolbars. Groups usually contain tools with similar or related functionality. You can find more information about toolbars in the following article: [Introduction to Toolbars]({%slug editor/functionality/toolbars/overview%}).

1. **ToolStrips** are special tools that contain other tools. ToolsStrips are extremely useful for reducing toolbar clutter. A common use of toolstrip is the PasteStrip tool, which combines the Paste tools, such as Paste, PasteFromWord, PastePlainText, etc. You can find more information about the toolstrips in the following article: [How to create a ToolStrip]({%slug editor/functionality/toolbars/dropdowns/custom-toolstrip%}).

1. **Context sensitive buttons** - some of the buttons on the Telerik RadEditor toolbars will change their state in real time to reflect the actual state of the cursor selection (i.e. bold, justification, etc.) Some buttons will be enabled if certain action can be performed with the current cursor selection (e.g. Unlink is enabled only if you have selected a hyperlink, Redo is not available if you haven't undone any action first). You can find more information how to add buttons to the toolbars [here]({%slug editor/functionality/toolbars/buttons/add-standard-buttons%}) and [here]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%}).

1. **Advanced Tools** - RadEditor takes the user experience even closer to desktop word processors, thanks to its advanced tools:

1. Multilevel **Undo/Redo** feature with action trails. They allow you to see the past actions and undo/redo one or more of them at once, just like in Microsoft Word

1. **InsertTable** dropdown - allows to select the number of rows and columns you would like to create and insert at the cursor position in the editor's content area.

1. **ApplyCssClass** dropdown- allows to apply predefined styles to the selected text.

1. **CustomLinks** dropdown - allows to create a preset hyperlink on the selected text, number or image.

1. **FormatStripper** - removes Word®, custom or all formatting from the selected or the whole text

1. **RealFontSize** - allows to change the font size of the selected text in pixels or in points.

1. **ForeColor**/**BackColor** tools with color pickers - allows to apply the desired background and foreground colors to a selection.

1. **Context menus**- RadEditor for ASP.NET AJAX provides context menus, which can be customized depending on the currently selected HTML element, e.g. you could have different context menus for IMG elements and TABLE elements. The context menus are available for Gecko-based browsers as well. You can also disable the context menus for certain elements (e.g. for tables).
	
	![Context Menu](images/editor-contextmenu.png)

1. **Keyboard support** - All UI elements of RadEditor for ASP.NET AJAX are fully accessible from the keyboard. This includes shortcuts to directly activate the tools on the toolbar and keyboard navigation within the toolbars:

1. Use **F10** to move the focus on the toolbars

1. Use the arrows or **Tab** / **Ctrl+Tab** to navigate through the tools

1. When the focus is on a dropdown, use the **Up** and **Down** arrows to select an item

1. Press **Enter** to activate the selected button or dropdown item

## See Also

 * [Manage Content]({%slug editor/getting-started/manage-content%})

 * [Standards Compliance and Browser Support]({%slug editor/getting-started/standards-compliance-and-browser-support%})
