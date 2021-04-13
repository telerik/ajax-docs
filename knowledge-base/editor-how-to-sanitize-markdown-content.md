---
title: How to sanitize Markdown content
description: See how to sanitize the imported Markdown content in RadEditor.
type: how-to
page_title: How to sanitize Markdown content
slug: editor-how-to-sanitize-markdown-content
res_type: kb
---

## Description

Sanitize Markdown import in RadEditor.

The goal is to avoid potential XSS attacks, for example, because you cannot trust the source your end users will have for their Markdown content.

## Solution

You need to:

* first and foremost, implement the desired level of content sanitization. The example attached below removes event attributes. You can use it and improve it to match your needs.
* execute the content sanitization before content is added to the editor
* with the built-in Markdown import, this is before calling set_html()
	````ASP.NET
	function importMarkdownAndSanitize() {
		//built-in Markdown import
		var converter = new Telerik.Web.UI.Editor.Markdown.Converter();
		var editor = $find("<%=RadEditor1.ClientID%>");
		var textBox = $get("<%=MarkdownTextBox1.ClientID%>");
		var rawHtml = converter.makeHtml(textBox.value);
	 
		//implement sanitization
		var sanitizedHtml = sanitizeContent(rawHtml);
	 
		//set the content in the editor
		editor.set_html(sanitizedHtml);
	}
	````
* with pasting content, this is the OnClientPasteHtml event 
	````ASP.NET
	function OnClientPasteHtml(sender, args) {
		//perform the same sanitization when pasting content (including from the PasteMarkdown dialog)
		args.set_value(sanitizeContent(args.get_value()));
	}
	````
## See Also

* [Live demo: Editor - Import and Export to Markdown](https://demos.telerik.com/aspnet-ajax/editor/examples/import-export/markdown-import-export/defaultcs.aspx)
* [Prevent Cross-site Scripting (XSS) in RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss))

