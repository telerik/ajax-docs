---
title: Disable Context Menu 
page_title: Disable Context Menu  | RadEditor for ASP.NET AJAX Documentation
description: Disable Context Menu 
slug: editor/functionality/context-menus/disable-context-menu-
tags: disable,context,menu,
published: True
position: 1
---

# Disable Context Menu 

In this help article you can learn how to disable the context menus of **RadEditor** by using either server-side or client-side approach.

## Server-side Approach

To disable **RadEditor** context menus: 

1. In the code-behind, get the **ContextMenu** item/s;
2. Set its/their `Enabled` property to `false`.

Alternatively, you can traverse the entire **ContextMenus** collection and disable all **ContextMenu** items.

>caption Example 1: Disable context menus by using the server-side `Enabled` property.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1">
</telerik:RadEditor>
````

````C#
RadEditor1.ContextMenus.FindByTagName("A").Enabled = false; 
RadEditor1.ContextMenus.FindByTagName("P").Enabled = false;
````
````VB
RadEditor1.ContextMenus.FindByTagName("A").Enabled = False
RadEditor1.ContextMenus.FindByTagName("P").Enabled = False
````

## Client-side Approach

In order to disable context menus through client-side script:

1. Handle the [OnClientLoad]({%slug editor/client-side-programming/events/onclientload%}) event;
2. Use the [ToolAdapter object]({%slug editor/client-side-programming/defaulttooladapter-object%}) and disable all context menus by calling the `enableContextMenus()` method with a boolean `false` parameter.

>tip If you have enabled [Track Changes]({%slug editor/functionality/track-changes-and-comments/track-changes%}) feature of **RadEditor**, use the client-side approach. 

>caption Example 2: Disable all context menus via clinet-side script.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
</telerik:RadEditor>

<script>
    function OnClientLoad(editor, args) {
        var toolAdapter = editor.get_toolAdapter();
        toolAdapter.enableContextMenus(false);
    }
</script>
````

## See Also

* [OnClientLoad event]({%slug editor/client-side-programming/events/onclientload%})

* [ToolAdapter object]({%slug editor/client-side-programming/defaulttooladapter-object%})

* [Track Changes]({%slug editor/functionality/track-changes-and-comments/track-changes%})
