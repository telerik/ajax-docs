---
title: Preserve the Editor content on browser back button
description: Configure the Telerik RadEditor component to preserve its contents if navigating away and back using the browser's back button.
type: how-to
page_title: Preserve the Editor content on browser back button - RadEditor
slug: editor-preserve-content-on-browser-back-button
tags: editor, preserve, content, browser, back, button
res_type: kb
previous_url: controls/editor/how-to/preserve-content-on-back-button
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>
                RadEditor for Telerik UI for ASP.NET AJAX
            </td>
        </tr>
    </tbody>
</table>

## Description

**RadEditor** of Telerik UI for ASP.NET AJAX does not preserve its contents when navigating back to the page using the browser's back button.

## Solution 

While browsers by default preserve the contents of `input` and `textarea` elements when navigating back to the page using the browser's back button, **RadEditor for ASP.NET AJAX** uses other elements, however, it can be configured additionally.

Wire up the [OnClientLoad]({%slug editor/client-side-programming/events/onclientload%}) event to the Editor which will be used to **Save** and **Restore** the contents automatically.

>note Can also be used with multiple Editors on the page.

>caption Example

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientLoad="OnClientLoad"></telerik:RadEditor>
<telerik:RadEditor ID="RadEditor2" runat="server" OnClientLoad="OnClientLoad"></telerik:RadEditor>
<telerik:RadEditor ID="RadEditor3" runat="server" OnClientLoad="OnClientLoad"></telerik:RadEditor>

<script>
	function OnClientLoad(editor, args) {
		// Attaching the beforeunload event to save the contents upon leaving the page
		addEventListener("beforeunload", (event) => {
			saveEditorContent(editor);
		});

		// Restore previous content if avaiable
		restoreEditorContent(editor);
	}

	/* Helper Functions */
	function saveEditorContent(editor) {
		editor.saveContent();
	}

	function restoreEditorContent(editor) {
		/* 
		* setTimeout with minimal amount of delay is required as the browsers will take a 
		* little longer to populated the input and textarea elements, and the Load event
		* triggers before that.
		*/
		setTimeout(function () {
			var storedContent = editor.get_contentHiddenTextareaValue();

			if (storedContent) {
				editor._initContentAreaHtml(storedContent, true);
				editor.set_initialContent(storedContent);
			}
		}, 10);
	}
</script>
````

### Alternative options to save the contents


**Option 1**: Saving the contents while typing.

Use the [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) event to save the contents while typing. While there are other key events that can be used, the `keyup` event is the recommended one.

````ASP.NET
<script>
	function OnClientLoad(editor, args) {
		editor.attachEventHandler("onkeyup", function (e) {
			saveEditorContent(editor);
		});
	}
</script>
````

**Option 2**: Saving the contents at specific time intervals.

Another option to save the contents automatically is by using the [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval) method.

````ASP.NET
<script>
	function OnClientLoad(editor, args) {
		setInterval(function () {
			saveEditorContent(editor);
		}, 5000);
	}
</script>
````
