---
title: OnClientDomChange
page_title: OnClientDomChange | RadEditor for ASP.NET AJAX Documentation
description: OnClientDomChange
slug: editor/client-side-programming/events/onclientdomchange
tags: onclientdomchange
published: True
position: 5
---

# OnClientDomChange

The **OnClientDomChange** event is useful in scenarios where the developer wants to customize the link object returned by the Hyperlink, Document Manager and Insert Link dialog before it is getting inserted in the content area.For example the developer can apply or remove styles, attributes and/or append other HTML elements to the returned by the dialog link.

|  **function OnClientDomChange(editor, args)**  |  |  |
| ------ | ------ | ------ |
| **editor** | **object** |Returns a reference to RadEditor client object|
| **args** | **object** |Returns the needed information about the event|


|  **args parameter methods**  |  |
| ------ | ------ |
| **args.get_commandName()** |Returns the command name|
| **args.get_value()** |Returns the value of the executed tool|
| **args.get_cancel(true)** |Currently the event cannot be canceled|

The **OnClientDomChange** client event allows you to customize the default behavior of:

* **Hyperlink manager** - Check whether the inserted link has a title attribute and if not, ask the user to specify a Tooltip, because it is an accessibility issue

* **Insert Link** - the links inserted by this dialog are customized and have double underline

* **Document Manager** - An icon is added before the link when it points to an MS Word document.

Tools supporting the OnClientDomChange event:

* DocumentManager

* LinkManager

* InsertLink

>caption Example: The code below demonstrates how to check whether the inserted link through the Link Manager has a "**title**" attribute set and if it doesn't then urge the user to enter a **title** via the browser's prompt dialog:

````ASP.NET
<script type="text/javascript">
	function OnClientDomChange(editor, args) {

		var commandName = args.get_commandName();
		var value = args.get_value();

		if (commandName == "LinkManager") {
			var link = value;
			//See if the inserted link has a title attribute and if not prompt the user to set
			if (!link.title) {
				var titleAttribute = prompt("No tooltip specified. Please specify a title attribute for the link", "");
				link.setAttribute("title", titleAttribute);
			}
		}
	}
</script>
<telerik:RadEditor runat="server" OnClientDomChange="OnClientDomChange" ID="RadEditor1"></telerik:RadRditor>
</telerik:RadEditor>
````



## See Also

 * [OnClientDomChange Live Example](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/OnClientDomChange/DefaultCS.aspx)
