---
title: OnClientPasteHtml
page_title: OnClientPasteHtml | RadEditor for ASP.NET AJAX Documentation
description: OnClientPasteHtml
slug: editor/client-side-programming/events/onclientpastehtml
tags: onclientpastehtml
published: True
position: 7
---

# OnClientPasteHtml

The **OnClientPasteHtml** event is useful in scenarios where the developers need to examine or modify the HTML to be pasted by an editor tool before it is inserted in the editor content area.


|  **function OnClientPasteHtml(editor, args)**  |  |  |
| ------ | ------ | ------ |
| **editor** | **object** |Returns a reference to RadEditor client object|
| **args** | **object** |Returns the needed information about the event|


|  **args parameter methods**  |  |
| ------ | ------ |
| **args.get_commandName()** |Returns the command name|
| **args.get_value()** |Returns the value of the executed tool|
| **args.set_value()** |Sets the new content to be pasted in RadEditor|
| **args.get_cancel(true)** |Cancels the command execution|

Some common cases where the event can be used are:

* Check whether user specified **alt** attribute for an image

* Make modifications to a table being inserted (e.g. set a specific classname, etc)

* Examine or modify a link before it is inserted

The event allows the developer to cancel the event as well - then no content will be inserted. Many of the editor tools and dialogs use the pasteHtml method to perform their action - here is a complete list:

**Tools**

-------

FormatStripper (when selection exists)

InsertTableInsertTab (in IE)

InsertSnippet

InsertFormElement

InsertGroupbox

InsertDate

InsertTime

InsertSymbol

InsertHorizontalRule

InsertCustomLink

**Dialogs**

-------

ImageManager

FlashManager

MediaManager

TemplateManager

TableWizard

SetCellProperties

FormatCodeBlock

>caption Example: The code below demonstrates how to check whether the inserted image through the Image manager has an "**alt**" attribute set and if it doesn't then urge the user to enter an "**alt**" attribute name:

````ASP.NET
<script type="text/javascript">
	function OnClientPasteHtml(sender, args)
	{
		var commandName = args.get_commandName();
		var value = args.get_value();
		if (commandName == "ImageManager")
		{
			//See if an img has an alt tag set
			var div = document.createElement("DIV");
			//Do not use div.innerHTML as in IE this would cause the image's src or the link's href to be converted to absolute path.
			//This is a severe IE quirk.
			Telerik.Web.UI.Editor.Utils.setElementInnerHtml(div, value);
			//Now check if there is alt attribute
			var img = div.firstChild;
			if (!img.alt)
			{
				var alt = prompt("No alt tag specified. Please specify an alt attribute for the image", "");
				img.setAttribute("alt", alt);
				//Set new content to be pasted into the editor
				args.set_value(div.innerHTML);
			}
		}
	}
</script>
<telerik:RadEditor runat="server"
OnClientPasteHtml="OnClientPasteHtml"
ImageManager-ViewPaths="~/"
ID="RadEditor1">
</telerik:RadEditor> 
````

>note Safari and Chrome do not offer **onpaste** event and for that reason the **OnClientPasteHtml** event of RadEditor is not fired in these browsers when the paste command (Ctrl+V) is executed.


## See Also

 * [OnClientPasteHtml Live Example](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/OnClientPasteHtml/DefaultCS.aspx)
