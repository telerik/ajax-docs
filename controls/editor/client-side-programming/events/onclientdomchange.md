---
title: OnClientDomChange
page_title: OnClientDomChange | UI for ASP.NET AJAX Documentation
description: OnClientDomChange
slug: editor/client-side-programming/events/onclientdomchange
tags: onclientdomchange
published: True
position: 5
---

# OnClientDomChange



## 



The __OnClientDomChange__ event is useful in scenarios where the developer wants to customize the linkobject returned by the Hyperlink, Document Manager and Insert Link dialog before it is getting inserted in the content area.For example the developer can apply or remove styles, attributes and/or append other HTML elements to the returned by the dialog link.




>caption  

|  __function OnClientDomChange(editor, args)__  |  |  |
| ------ | ------ | ------ |
| __editor__ | __object__ |Returns a reference to RadEditor client object|
| __args__ | __object__ |Returns the needed information about the event|


>caption  

|  __args parameter methods__  |  |
| ------ | ------ |
| __args.get_commandName()__ |Returns the command name|
| __args.get_value()__ |Returns the value of the executed tool|
| __args.get_cancel(true)__ |Currently the event cannot be canceled|

The __OnClientDomChange__ client event allows you to customize the default behavior of:

* __Hyperlink manager__ - Check whether the inserted link has a title attribute and if not, ask the user to specify a Tooltip, because it is an accessibility issue

* __Insert Link__ - the links inserted by this dialog are customized and have double underline

* __Document Manager__ - An icon is added before the link when it points to an MS Word document.

Tools supporting the OnClientDomChange event:

* DocumentManager

* LinkManager

* InsertLink

__Example:__The code below demonstrates how to check whether the inserted link through the Link Manager has a "__title__" attribute set and if it doesn't then urge the user to enter a __title__ via the browser's prompt dialog:

````ASPNET
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



# See Also

 * [OnClientDomChange Live Example](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/OnClientDomChange/DefaultCS.aspx)
