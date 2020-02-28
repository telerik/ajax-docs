---
title: OnClientLoad
page_title: OnClientLoad | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientLoad
slug: fileexplorer/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 3
---

# OnClientLoad

The client-side **Load** event is raised when **RadFileExplorer** is initialized.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientLoad** property of the control.

The client-side **OnClientLoad** event handler receives one argument:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.


>caption Example 1: Handle the **RadFileExplorer**'s client-side **Load** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientLoad="onClientLoad">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images"/>
</telerik:RadFileExplorer>
<script>
    function onClientLoad(fileExplorer) {
        var selectedItem = fileExplorer.get_selectedItem();
        var name = selectedItem.get_name();
        var type = selectedItem.get_type() == "1" ? "folder" : "file";
        alert("The currently selected item is a " + type + " with name " + name );
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
