---
title: How to keep the original content formatting when doing Paste from Word in RadEditor
description: Check the troubleshooting tips in the Solution section below if you experience formatting-related issues when pasting from MS Word in RadEditor.
type: troubleshooting
page_title: How to keep the original format when doing Paste from Word in RadEditor
slug: editor-keep-original-formatting-paste-from-word
position: 
tags: 
ticketid: 1570284
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


## Description
Check the troubleshooting tips in the Solution section below if you experience formatting-related issues when pasting from MS Word in RadEditor.

## Solution
To answer this important question "How to let it keeps original format when doing paste from word?" let me explain exactly how the pasting works - RadEditor is a consumer of the browser's clipboard and depending on what content is provided by Word and clipboard, the content can be pasted as-is without modifications or modified by the RadEditor's StripFormattingOptions filter which sanitizes and cleans the specific MS Word formatting and tags such as mso- styles and other invalid HTML tags and attributes. You can find more detailed info at RadEditor and the Browser Clipboard.

What does the above mean for your scenario: If the clipboard does not provide the same content structure and formatting which is shown and available in your Word document, there is no way for the browser and the editor (or editable iframe/div element) to present (show) it in the same way in it.

What we can do to verify if this is a browser behavior or RadEditor StripFormattingOptions fault (for example the filter strips valid attributes which cause the different rendering in the editor) is to perform the following tests:

**Test 1** (with a simple editable iframe/div element - which are similar to the content area of RadEditor):

1. Go to http://dojo.telerik.com/@nlazarov/IFIPAR demo page and press the Run button
2. This will load an editable iframe and an editable div element in the right part of the page
3. Paste the copied Word content (table) in the editable iframe and/or div and see whether the table looks identical as in Word
   * If the table looks identical then this mean that the browser clipboard provided the whole table information as tags, styles and they are OK. this means that it is probably a RadEditor fault or configuration issue.
   * If the table does not look ok, then the clipboard does not provide all the table info from Word and there is nothing that can be done because the iframe/div are just entities and they do not have access to the Word file contents. This means that this is not a RadEditor problem.
 

**Test 2** (with disable Word stripping when pasting content with Ctrl+V in the content area of RadEditor):

1. Set the StripFormattingOptions="NoneSupressCleanMessage" to ensure that RadEditor will not strip anything on paste and does not show the prompt about MS Word content being pasted - this way the clipboard content will be pasted in it without modifications.
2. Paste the Word content with Ctrl+V (Paste button) and see if the table looks as expected when it is pasted with the Word formatting.

## See Also
* [Pasting Content Overview]({%slug editor/managing-content/pasting-content/overview%})
   
