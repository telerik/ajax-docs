---
title: Implementing a Code Syntax Highlight in HTML mode
description: Learn how to implement a code syntax highlighting in HTML mode of RadEditor for ASP.NET AJAX
type: how-to
page_title: Implementing a Code Syntax Highlight in HTML mode
slug: editor-code-syntax-highlighter-html-mode
position: 
tags: 
ticketid: 1563373
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
If you are curious to learn how to implement a code syntax highlighting in HTML mode of RadEditor, check out the Solution section below:

## Solution
The solution is based on a custom third-party syntax editor, which replaces the source mode textarea of RadEditor when switching to HTML mode inside the [OnClientModeChange event]({%slug editor/client-side-programming/events/onclientmodechange%}). Once you get back to Design mode, the content is taken from the custom editor and set into the content area of RadEditor.

````ASP.NET
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>RadEditor Page</title>
    <link href="codemirror-5.65.3/lib/codemirror.css" rel="stylesheet" />
    <script src="codemirror-5.65.3/lib/codemirror.js"></script>
    <script src="codemirror-5.65.3/mode/xml/xml.js"></script>
    <script src="codemirror-5.65.3/mode/javascript/javascript.js"></script>
    <script src="codemirror-5.65.3/mode/css/css.js"></script>
    <script src="codemirror-5.65.3/mode/htmlmixed/htmlmixed.js"></script>

    <style>
        div.CodeMirror {
            height: 248px;
        }
    </style>
</head>

<body>
    <header>
        <h1>RadEditor Page</h1>
    </header>
    <main>
        <form id="form1" runat="server">
            <asp:ScriptManager runat="server" />
            <script>
                function OnClientModeChange(editor, args) {
                    var mode = editor.get_mode();
                    var myTextarea = editor.get_textArea();

                    switch (mode) {
                        case 1:
                            var codemirrorDiv = $telerik.$(".CodeMirror.cm-s-default");
                            editor.set_html(codemirrorDiv[0].innerText);
                            codemirrorDiv.remove();
                            break;
                        case 2:
                            var editor = CodeMirror.fromTextArea(myTextarea, {
                                lineNumbers: false
                            });
                            break;
                    }

                }
            </script>
            <telerik:RadEditor runat="server" Skin="Default" OnClientModeChange="OnClientModeChange">
                <Content>

                        <html>
                              <!-- HTML comment -->
                              <head>
                                <title>Title</title>
                                <style>
                                    h1 {
                                        font-family: Arial;
                                        color: burlywood;
                                    }

                                    div {
                                        background: green;
                                    }

                                    body {
                                        max-width: 500px;
                                    }
                                </style>
                              </head>
                              <body>
                                <h1>HTML Content Example</h1>
                                <p>Line 1</p>
                              </body>
                            </html>
​
                </Content>
            </telerik:RadEditor>

        </form>
    </main>
</body>
</html>
````

You can download the source code of the sample website from [here](files/editor-syntaxhighlighterHTMLmode.zip).

## See Also
* [OnClientModeChange event]({%slug editor/client-side-programming/events/onclientmodechange%})
* [Code Mirror third party library](https://codemirror.net/)
* [Code Mirror MIT license](https://github.com/codemirror/CodeMirror/blob/master/LICENSE)

 