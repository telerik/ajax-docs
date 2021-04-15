---
title: Prevention of XSS attacks through DOM attributes
description: See how to prevent XSS in RadEditor using its StripDomEventAttributes filter.
type: troubleshooting
page_title: Prevention of XSS attacks through DOM attributes
slug: editor-prevention-of-xss-attacks-through-dom-attributes
res_type: kb
---

## Problem

Potential XSS attack through DOM attributes of specific elements.


## Description

Some DOM attributes allow parsing of their content and thus, JS code that can carry a XSS payload may be present in them. They are mostly event attributes like onerror, onclick, onmouseover, and so on. RadEditor provides a built-in filter that strips event-related attributes—the StripDomEventAttributes filter.

In some other cases, you may have complex content or highly specific elements/attributes that do not fall in this category that can also carry a malicious payload. To handle such cases, you need to implement some custom code (see examples below in the solutions section).

IMPORTANT: Content sanitization and attack prevention lies in the application scope. Depending on the application logic, some content may be allowed or removed. As such, the application developer must ensure safety of the user input, like with all data, and RadEditor may not be able to handle all scenarios and requirements. The following article treats this matter in more details: [Prevent Cross-site Scripting (XSS)](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss)).

## Solution

You need to create both a server-side and a client-side solutions to properly handle this case.

The server-side content sanitization takes care of the case when content was by the user and must execute before storing it, and should also be executed after retrieval of the content before rendering it to the browser. It is usually some form of Regex expression.

The client-side solution handles the case when the end user enters content in the editor. You can create a custom filter for it: https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/content-filters#implementing-a-custom-filter.

Below follow a few examples that you can use as a starting point for more detailed implementations.

* How to remove <embed> tags on the server:

	````C#
	//get content (from user input, or from data source
	string content = RadEditor1.Content;
	//remove <embed> tags
	content = Regex.Replace(content, "<(EMBED)([^>]*)/>", "", RegexOptions.IgnoreCase);
	content = Regex.Replace(content, "<(EMBED)([^>]*)>[\\s\\S]*?</(EMBED)([^>]*)>", "", RegexOptions.IgnoreCase);
	//use the content (e.g., render in the browser)
	RadEditor1.Content = content;
	````
* How to remove <embed> tags or at least their src attribute on the client:

	````ASP.NET
	<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
	</telerik:RadEditor>
	<script>
		function OnClientLoad(editor, args) {
			editor.get_filtersManager().add(new RemoveEmbedTags());
		}
		RemoveEmbedTags = function () {
			RemoveEmbedTags.initializeBase(this);
			this.set_isDom(true);
			this.set_enabled(true);
			this.set_name("Remove Embed Tags");
			this.set_description("Reduce the chance of XSS attacks if the user pastes untrusted content");
		}
		RemoveEmbedTags.prototype =
		{
			getHtmlContent: function (contentElement) {
				var embeds = contentElement.getElementsByTagName("EMBED");
				for (i = embeds.length - 1; i > -1; i--) {
					var embed = embeds[i];
	 
					//remove the src attribute
					embed.removeAttribute("src");
	 
					//or remove the entire <embed> element
					//embed.parentNode.removeChild(embed);
				}
	 
				return contentElement;
			},
			getDesignContent: function (contentElement) {
				var embeds = contentElement.getElementsByTagName("EMBED");
				for (i = 0; i < embeds.length; i++) {
					var embed = embeds[i];
	 
					//remove the src attribute
					embed.removeAttribute("src");
	 
					//or remove the entire <embed> element
					//embed.parentNode.removeChild(embed);
				}
				return contentElement;
			}
		}
		RemoveEmbedTags.registerClass('RemoveEmbedTags', Telerik.Web.UI.Editor.Filter);
	````

## See Also

* [Prevent Cross-site Scripting (XSS)](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss)?_ga=2.168221667.317000784.1618326771-650494500.1548082460)
* [Content Filters](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/content-filters?_ga=2.168221667.317000784.1618326771-650494500.1548082460)
* [Stripping client-side events from the HTML content of RadEditor](https://www.telerik.com/support/kb/aspnet-ajax/editor/details/stripping-client-side-events-from-the-html-content-of-radeditor)
* [MSDN: Building Secure ASP.NET Pages and Controls](https://msdn.microsoft.com/en-us/library/aa302426.aspx)


