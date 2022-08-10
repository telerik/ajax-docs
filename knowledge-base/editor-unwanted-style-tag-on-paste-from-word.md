---
title: Style tag appears on paste from MS Word in Firefox on a Mac
description: An unwanted style tag appears on paste from MS Word in Firefox on a Mac when StripFormattingOptions is set to MSWordRemoveAll and Css - RadEditor for ASP.NET AJAX
type: troubleshooting
page_title: Style tag appears on paste from MS Word in Firefox on a Mac
slug: editor-unwanted-style-tag-on-paste-from-word
position: 
tags: 
ticketid: 1575199
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Title
An unwanted style tag appears on paste from MS Word in Firefox on a Mac when StripFormattingOptions is set to MSWordRemoveAll and Css

## Description
We have a strange issue where when we copy and paste from Word to the Telerik Editor using Firefox on a Mac that the editor inserts a large `<style>` tag with a font face element inside.

## Solution
The solution is to perform fine filtering of the clipboard content and stripping based on a regular expression prior to pasting the content in RadEditor:

````ASPX
    <script type="text/javascript">
        function OnClientPasteHtml(sender, args) {
            var commandName = args.get_commandName();
            var value = args.get_value();

            if (commandName == "Paste") {
                value = value.replace(/<style((.|\\n|\\r)*?)<\/style>/gi, ""); //strip the style tag with a regular expression
                args.set_value(value);  //set the modified content in the editor
            }
        }
    </script>
    <telerik:RadEditor runat="server" StripFormattingOptions="MSWordRemoveAll,Css" OnClientPasteHtml="OnClientPasteHtml">
        <Content>
        </Content>
    </telerik:RadEditor>
````
   
   