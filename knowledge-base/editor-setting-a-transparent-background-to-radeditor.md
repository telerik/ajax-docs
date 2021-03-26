---
title: Set a transparent background to RadEditor
description: Check out this blog post to see how to make RadEditor content area iframe transparent.
type: how-to
page_title: Setting a transparent background to RadEditor
slug: editor-setting-a-transparent-background-to-radeditor
res_type: kb
---

## Description

Learn how to make RadEditor content area iframe transparent

## Solution
In order to set the background color of RadEditor to be transparent follow the steps below:
1. Add the following CSS in the head section of the webpage:
        
````CSS
		<style type="text/css">
            body {
                background: lightgreen;
            }

            div.RadEditor td {
                /*This color is specific to the Default editor skin! If you are using another skin, change the color!*/
                background-color: #ececec !important;
            }

            div.RadEditor,
            div.RadEditor .reContent,
            div.RadEditor .reContent iframe {
                background: transparent !important;
            }
        </style>
````

2. Add the following JavaScript below the style tag in the head section of the page:

````ASP.NET
    <script type="text/javascript">
        function OnClientLoad(editor) {
            var editorframe = editor.get_contentAreaElement();
            editorframe.allowTransparency = true;
            editorframe.contentWindow.document.body.style.background = "transparent";
        }
    </script>
    <telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"></telerik:RadEditor>
````

