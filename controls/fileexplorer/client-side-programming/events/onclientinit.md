---
title: OnClientInit
page_title: OnClientInit | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientInit
slug: fileexplorer/client-side-programming/events/onclientinit
tags: onclientinit
published: True
position: 2
---

# OnClientInit

The client-side **Init** event is raised just before the **RadFileExplorer** client-side object is initialized.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientInit** property of the control.

The client-side **OnClientInit** event handler receives one argument:

1. Sender—the [RadFileExplorer object](http://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

>caption Example 1: Handle the **RadFileExplorer**'s client-side **Init** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientInit="onClientInit">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images"/>
</telerik:RadFileExplorer>
<script>
    function onClientInit(fileExplorer) {
        var foldersPane = fileExplorer.get_treePane();
        foldersPane.set_width(400);
    }
</script>
````

## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
