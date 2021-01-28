---
title: Print Content when using Div ContentAreaMode
page_title: Print Content when using Div ContentAreaMode - RadEditor
description: Check our Web Forms article about This is a custom solution for printing the content of RadEditor with Dov ContentAreaMode.
slug: editor/how-to/print-content-div-contentareamode
tags: custom, solution, print, content, HTML, editor, content area, mode, contentareamode, div
published: True
position: 8
---

# Print Content when using Div ContentAreaMode

You can find here a solution that shows how to create a custom Print tool that will print the contents of a div content area. 

>caption Example 1: Custom tool for printing the div content area.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" ID="RE1" runat="server" ContentAreaMode="Div">
    <Content>
        <h1>Title</h1>
         <p>Some content.</p>
    </Content>
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Print" />
        </telerik:EditorToolGroup>
    </Tools>

</telerik:RadEditor>

<script>
    Telerik.Web.UI.Editor.CommandList["Print"] = function (commandName, editor, args) {
        var prtContent = editor.get_contentArea();
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    };
</script>

````

## See Also

* [Add Your Own Buttons]({%slug editor/functionality/toolbars/buttons/add-your-own-buttons%})
* [ContentAreaMode Property]({%slug editor/functionality/editor-views-and-modes/contentareamode-property%})
