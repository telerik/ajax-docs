---
title: Button Settings
page_title: Button Settings | RadListBox for ASP.NET AJAX Documentation
description: Button Settings
slug: listbox/functionality/button-settings
tags: button,settings
published: True
position: 4
---

# Button Settings

You can control the way buttons are rendered using the **ButtonSettings** property. You can change the position of the buttons, align them horizontally and vertically, set their width, height and visibility.

## ButtonSettings properties

* **Position** - controls where the buttons will be placed relative to the listbox. Possible values are Bottom, Left, Right or Top.

````ASPNET
<telerik:radlistbox id="RadListBox1">     
   <ButtonSettings AreaHeight="30" Position="Bottom" HorizontalAlign="Center" />         
</telerik:radlistbox>
````

![Transfer buttons at the bottom](images/listbox_position_bottom.png)

* **HorizontalAlign** - sets the horizontal alignment of the buttons when their **position** is either Top or Bottom. Possible values are Center, Left and Right.

* **VerticalAlign** - sets the vertical alignment of the buttons when their **position** is either Left or Right. Possible values are: Bottom, Middle and Top.

* **AreaHeight** - sets the height of the buttons when their **position** is either Top or Bottom. Note that **AreaHeight** value plus the height of the listbox equals the **Height** property of the RadListBox.

* **AreaWidth** - sets the width of the buttons when their **position** is either Left or Right. Note that **AreaWidth** value plus the width of the listbox equals the **Width** property of the RadListBox.

* **RenderButtonText** - When set to True (default is False) the text of the buttons is shown as well. To change the text of the buttons please see the [Localization]({%slug listbox/accessibility-and-internationalization-/localization%}) article.

![Render button text](images/listbox_render_button_text.png)

* **ShowDelete** - when set to False the delete button will not be visible when **AllowDelete="True"**

* **ShowReorder -**when set to False the reorder buttons will not be visible when **AllowReorder="True"**

* **ReorderButtons -**enumeration which defines which reorder buttons will be displayed. Example: <ButtonSettings ReorderButtons="MoveToBottom,MoveDown">

* **ShowTransfer -**when set to False the transfer buttons (move left and move right) will not be visible when **AllowTransfer="True"**

* **ShowTransferAll -**when set to False the transfer all buttons will not be visible when **AllowTransfer="True"**

* **TransferButtons -**enumeration which defines which transfer buttons will be displayed. Example: <ButtonSettings TransferButtons="TransferAllFrom,TransferAllTo">

# See Also

 * [Online Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/buttons/defaultcs.aspx)

 * [Reorder]({%slug listbox/functionality/reorder%})

 * [Transfer]({%slug listbox/functionality/transfer%})

 * [Drag and Drop]({%slug listbox/functionality/drag-and-drop%})

 * [Localization]({%slug listbox/accessibility-and-internationalization-/localization%})
