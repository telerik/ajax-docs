---
title: Change RadEditor ContentAreaCssFile on client side
description: See how to change the RadEditor ContentAreaCssFile on the client by updating the href of the content area CSS file
type: troubleshooting
page_title: Change RadEditor ContentAreaCssFile on the client
slug: editor-change-content-area-css-file-on-the-client
position: 
tags: 
ticketid: 1568829
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
See how to change the RadEditor ContentAreaCssFile on the client by updating the href attribute of the iframe content area CSS file

## Solution
Here is the implementation:

````ASP.NET
   <script type="text/javascript">
        function OnClientLoad(editor) {
            setTimeout(function () {
                var head = editor.get_document().getElementsByTagName("HEAD")[0];
                $telerik.$(head).find("#RADEDITORSTYLESHEET0").attr("href", "EditorContentAreaNew.css");
            }, 200);
        }
    </script>
    <telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad" ContentAreaCssFile="EditorContentArea.css">
        <Content>
            <div class="myClass">sample content</div>
        </Content>
    </telerik:RadEditor>
````
   
   