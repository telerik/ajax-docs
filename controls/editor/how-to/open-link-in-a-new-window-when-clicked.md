---
title: Open Link in a New Window When Clicked
page_title: Open Link in a New Window When Clicked - RadEditor
description: Check our Web Forms article about Open Link in a New Window When Clicked.
slug: editor/how-to/open-link-in-a-new-window-when-clicked
tags: open,link,in,a,new,window,when,clicked
published: True
position: 6
---

# Open Link in a New Window When Clicked

The code below demonstrates how to iterate RadEditor document links when the editor is loaded. The code sets the link target attribute to so that the link is opened in a new window when clicked. You can use this approach to modify the attributes and events of all HTML elements in the editor content area. This example opens the editor in **Preview EditorMode** so that clicking the links will have the expected behavior.

![](images/editor-handlingcontent002.png)

````JavaScript
function OnClientLoad(sender, args) {
    var editorDocument = sender.get_document();
    var allLinks = editorDocument.getElementsByTagName("A");

    for (var i = 0; i < allLinks.length; i++) {
        var link = allLinks[i];

        link.setAttribute("target", "#");
        link.setAttribute("onclick", "");
    }
}
````

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientLoad="OnClientLoad" EditModes="Preview">
    <Content>       
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">YouTube</a>
        <br />
        <a href="https://www.telerik.com/">Telerik</a>
    </Content>
</telerik:RadEditor>
````


