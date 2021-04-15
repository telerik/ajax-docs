---
title: Change Ribbonbar tabs of RadEditor toolbar on mouse hover
description: See how to change Ribbonbar tabs of RadEditor toolbar on mouse hover.
type: how-to
page_title: Change Ribbonbar tabs of RadEditor toolbar on mouse hover
slug: editor-change-ribbonbar-tabs-of-radeditor-toolbar-on-mouse-hover
res_type: kb
---

## How-To

Change Ribbonbar tabs of RadEditor toolbar on mouse hover

## Solution

The current behavior is that the groups of tools under each tab are displayed after a click on the tab. This default behavior could be customized to happen when hovered on a tab with the mouse (onmouseover) with the following code:

````ASP.NET
<script>
    function OnClientLoad(editor, args) {     
        $telerik.$(editor.get_element()).find(".rrbTabs").on("mouseover", ".rrbItem", function (e) { e.target.parentElement.click(); });
    }
</script>
<telerik:RadEditor ID="RadEditor1" runat="server" RenderMode="Lightweight" ToolbarMode="RibbonBar" OnClientLoad="OnClientLoad"></telerik:RadEditor>
````

