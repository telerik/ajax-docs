---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: listbox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

## 

**RadListBox** fully supports keyboard navigation - selecting items, checking items and deleting items. Make sure the **TabIndex** property is set beforehand.

````ASPNET
<telerik:radlistbox runat="server" id="RadListBox1" selectionmode="Multiple" tabindex="1"
	accesskey="y" height="200px" allowdelete="true">
			<ButtonSettings ShowDelete="false" />
			<Items>
				<telerik:RadListBoxItem Text="Amsterdam" />
				<telerik:RadListBoxItem Text="Barcelona" />
				<telerik:RadListBoxItem Text="Bonn" />
				<telerik:RadListBoxItem Text="Boston" />
				<telerik:RadListBoxItem Text="Brussels" />
				<telerik:RadListBoxItem Text="Dallas" />
				<telerik:RadListBoxItem Text="Denver" />
				<telerik:RadListBoxItem Text="Dublin" />
				<telerik:RadListBoxItem Text="Liverpool" />
				<telerik:RadListBoxItem Text="London" />
			</Items>
 </telerik:radlistbox>
````

* **Tab** to activate RadListBox

* Use **SHIFT** and the arrow keys to select multiple items

* Use **CTRL** and the arrow keys to move the active item

* Press **SPACE** to select only the active item.

* Hold **CTRL** and press **SPACE** to add the active item to the selection.

* Press **DEL** to delete the selected items (if **AllowDelete** is set to **true**).


# See Also

 * [Keyboard Support Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/keyboardsupport/defaultcs.aspx)
