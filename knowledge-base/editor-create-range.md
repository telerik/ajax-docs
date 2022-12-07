---
title: Create a range, delete the selection and paste the desired content over the selection
description: See how to create a range in RadEditor, delete programmatically the selection and replace it with your own content in RadEditor for ASP.NET AJAX
type: how-to
page_title: Alternative way to paste content with JavaScript in RadEditor
slug: editor-create-range
position: 
tags: 
ticketid: 1587670
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to replace the current document's selection with the desired HTML. The solution section shows how to create a text range in RadEditor, delete programmatically the selection and replace it with your own content in RadEditor for ASP.NET AJAX. This scenario is useful when you'd like not to use the built-in [pasteHtml method]({%slug editor/client-side-programming/methods/pastehtml%}).

## Solution
For iframe content area mode here is an example of how to create a range, delete the selection and insert new content:

````ASP.NET
        <telerik:RadEditor ID="RadEditor1" runat="server" ContentAreaMode="iframe">
            <Content>
                <div>
                   <p>My first paragraph!</p>
                   <p>My second paragraph!</p>
               </div>   
               <div>
                   <p>My third paragraph!</p>
                   <p>My fourth paragraph!</p>
               </div>  
            </Content>
        </telerik:RadEditor>
        <input type="button" name="Insert Span" value="Insert Span" onclick="InsertSpan();return false;" />
        <script type="text/javascript">
            function InsertSpan() {
                var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to the editor
                var range = editor.getSelection().getRange(true); // https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/selection/getrange
                range.deleteContents(); // https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents
                var node = range.createContextualFragment('<span style="color:red;">test</span>'); // https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment
                range.insertNode(node); // https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode
            }
        </script>
````

For div content area mode, here is how to create a range, delete the selected content and replace it:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" ContentAreaMode="div">
    <Content>
        <div>
            <p>My first paragraph!</p>
            <p>My second paragraph!</p>
        </div>   
        <div>
            <p>My third paragraph!</p>
            <p>My fourth paragraph!</p>
        </div>  
    </Content>
</telerik:RadEditor>
<input type="button" name="Insert Span" value="Insert Span" onclick="InsertSpan();return false;" />
<script type="text/javascript">
    function InsertSpan() {
        var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to the editor
        var range = window.document.getSelection().getRangeAt(0); // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
        range.deleteContents(); // https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents
        var node = range.createContextualFragment('<span style="color:red;">test</span>'); // https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment
        range.insertNode(node); // https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode
    }
</script>
````

You can find more information at:

* [JavaScript replace selection all browsers](https://stackoverflow.com/questions/5393922/javascript-replace-selection-all-browsers)
* [MDM Selection API](https://developer.mozilla.org/en-US/docs/Web/API/Selection)
   
   