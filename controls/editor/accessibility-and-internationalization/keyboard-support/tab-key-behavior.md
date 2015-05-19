---
title: Tab Key Behavior
page_title: Tab Key Behavior | RadEditor for ASP.NET AJAX Documentation
description: Tab Key Behavior
slug: editor/accessibility-and-internationalization/keyboard-support/tab-key-behavior
tags: tab,key,behavior
published: True
position: 2
---

# Tab Key Behavior

This help article describes the default behavior of the **tab key** in **RadEditor** and explains how to control it and obtain consistent behavior between browsers.

The Tab key behaves differently among different browsers in RadEditor (**Table 1**). This is so because the tabbing functionality relies on the browsers' internal commands by default.

>caption Table 1: RadEditor tab key behavior in different browsers according to the cursor position.


| Browser | Table | List | Div/Span/P |
| ------ | ------ | ------ | ------ |
|FireFox|Table cell navigation|HTML elements navigation|HTML elements navigation|
|Chrome|Table cell navigation|Inserts white-spaces within a span element|Inserts white-spaces within a span element|
|IE|Table cell navigation|Indents list element|Inserts four &nbsp; elements|

You can select the behavior of IE browser and apply it to the rest (**Example 1**).

>caption Example 1: Make the RadEditor tab key behavior from IE (**Table 1**) apply to all browsers.



````JavaScript
function OnClientLoad(editor, args) {
	var shortcutManager = editor.get_shortCutManager();
	if (shortcutManager.findShortCutByName("InsertTabMozilla")) {
		shortcutManager.removeShortCut("InsertTabMozilla");
		editor.addShortCut("InsertTab", "TAB");
	}
}
````
````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientLoad="OnClientLoad">
	<Content>
		<p>some paragraph</p>
		<ul>
			<li>item 1</li>
			<li>item 2</li>
			<li>item 3</li>
		</ul>
	</Content>
</telerik:RadEditor>
````


## See Also

 * [Overview]({%slug editor/accessibility-and-internationalization/keyboard-support/overview%})

 * [Disable Keyboard Shortcuts]({%slug editor/accessibility-and-internationalization/keyboard-support/disable-keyboard-shortcuts%})
