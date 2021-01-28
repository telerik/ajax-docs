---
title: Attaching blur event handler to RadEditor ContentArea  
description: Instructions how to attach blur event handler to RadEditor ContentArea.
type: how-to
page_title: Attaching blur event handler to RadEditor ContentArea - RadEditor
slug: attaching-blur-event-handler-to-radeditor-contentarea
ticketid: 1460940
res_type: kb
---

## Description

How to attach the blur event listener to the RadEditor's ContentArea

## Solution

Depending on the value set for the ContentAreaMode property, there are two different approaches

`ContentAreaMode="Iframe"`

````ASPX
    <script type="text/javascript">
        function InlineEditor_OnClientLoad(editor, args) {
            var element = editor.get_contentArea();
            $telerik.addExternalHandler(element, "blur", function (e) {
                alert("RadEditor loosed focus");
            });
        }
    </script>

    <telerik:RadEditor   
	    id="editText" 
	    Runat="server"
        ContentAreaMode="Iframe"
	    OnClientLoad="InlineEditor_OnClientLoad"           
	    >            
    </telerik:RadEditor>
````

`ContentAreaMode="Div"`

````ASPX
<script type="text/javascript">
    function InlineEditor_OnClientLoad(editor, args) {
        editor.attachEventHandler("blur", function (e) {
            alert("Blur fired");
        });
    }
</script>

<telerik:RadEditor   
	id="editText" 
	Runat="server"
    ContentAreaMode="Div"
	OnClientLoad="InlineEditor_OnClientLoad"          
	>            
</telerik:RadEditor>
````

## See Also

- [attachEventHandler](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/attacheventhandler)

