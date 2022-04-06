---
title: Numbered Bullet list is not updating size while changing the size of text in RadEditor
description: I am using Telerik RadEditor for ASP.NET AJAX and facing an issue in bulleted number list font size. The bulleted numbers font size is not changing while change the font of size of text
type: troubleshooting
page_title: RadEditor Numbered Bullet list is not changing Size
slug: editor-bullet-list-size-not-changed
position: 
tags: 
ticketid: 1560555
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
We are facing some issues while adding list items in RadEditor, if the default size is changed it changes the size of the text in the list item but it does not change the size of the numbers representing each list item.

```ASPNET
<ol>
    <li><span style="font-size: 32px">line 1</span></li>
    <li><span style="font-size: 32px">line 2</span></li>
    <li><span style="font-size: 32px">line 3</span></li>
</ol>
````


## Solution
This is the default browser behavior of the document.execCommand("FontSize") command to update only the ordered lists text without the shape (glyphs). This behavior can be observed in the following video I recorded for you  [Apply Font Size with execCommand to editable div element](http://youtu.be/JfJdmNq-OKg?hd=1) as well as in the competitors' HTML editors too.

The demo demonstrated in the video can be found at [Editable IFRAME|DIV](http://dojo.telerik.com/@nlazarov/IFIPAR).  

If you want to fine-tune the Fonts or RealFontSizes commands of RadEditor so that the font-size is applied to the list itself you can use the JS based solution provided below



 
````ASP.NET
<script type="text/javascript">
    function OnClientCommandExecuting(editor, args) {
        //The command name
        var commandName = args.get_commandName();
 
        if (commandName == "RealFontSize" || commandName == "FontSize") {
            var selElem = editor.getSelectedElement(); //get the selected element
 
            var parentElem = selElem.parentNode;
 
            if (selElem.tagName == "LI" || selElem.tagName == "UL" || selElem.tagName == "OL") {
                if ($telerik.isIE7 || $telerik.isIE8) {
                    selElem.parentNode.style.fontSize = args.get_value();
                }
                else selElem.style.fontSize = args.get_value();
            }
            args.set_cancel(true);
        }
    }
</script>
<telerik:RadEditor ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting" runat="server">
    <Content>
        <ol>
            <li>Line 1</li>
            <li>Line 2</li>
            <li>Line 3</li>
        </ol>
    </Content>
</telerik:RadEditor>
````

You can find more detail in the Telerik AJAX forums:
* [Rad Editor - Numbered Bullet list is not changing Size](https://www.telerik.com/forums/rad-editor---numbered-bullet-list-is-not-changing-size)
* [RadEditor not honoring the font size for <li>](https://www.telerik.com/forums/radeditor-not-honoring-the-font-size-for-li)
  
 
