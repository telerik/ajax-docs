---
title: Nested Context Menus
page_title: Nested Context Menus  | RadEditor for ASP.NET AJAX Documentation
description: Nested Context Menus
slug: editor/functionality/context-menus/nested-context-menus
tags: disable,context,menu, nested, right, click
published: True
position: 1
---

# Nested Context Menus

In this help article you can see how you can configure **RadEditor** with nested context menus.

The capability to nest the context menus in **RadEditor** is available as of **R2 2016** and it is supported only for [Lightweight rendering]({%slug editor/mobile-support/render-modes%}).

>caption Figure 1: RadEditor with configured nested context menus from Example 1.

![](images/nested-context-menus.png)

>caption Example 1: Configuring nested context menus.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight" Skin="Silk">  
    <Content>
       <p>Some text in a paragraph.</p>
    </Content>
    <ContextMenus>
        <telerik:EditorContextMenu TagName="P">
            <telerik:EditorContextMenuTool Name="Formatting" IconCssClass="reBold">
                <Tools>
                    <telerik:EditorTool Name="Bold" />
                    <telerik:EditorTool Name="Italic" />
                    <telerik:EditorTool Name="Underline" />
                </Tools>
            </telerik:EditorContextMenuTool>
            <telerik:EditorContextMenuTool Name="Pasting" IconCssClass="rePaste">
                <Tools>
                    <telerik:EditorTool Name="Cut" />
                    <telerik:EditorTool Name="Copy" />
                    <telerik:EditorTool Name="Paste" />
                </Tools>
            </telerik:EditorContextMenuTool>
        </telerik:EditorContextMenu>
    </ContextMenus>
</telerik:RadEditor>
```` 

## See Also

* [Context Menus Overview]({%slug editor/functionality/context-menus/overview%})
* [Render Modes]({%slug editor/mobile-support/render-modes%})