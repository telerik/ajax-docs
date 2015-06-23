---
title: Toolbar Configuration
page_title: Phone Layout Toolbar Configuration | RadEditor for ASP.NET AJAX Documentation
description: Toolbar Configuration
slug: editor/mobile-support/mobile-rendering/toolbar-configuration
tags: editor,support,mobile,rendering,toolbar,configuration
published: True
position: 4
---

# Toolbar Configuration

This article explains some basic configuration scenarios, that will enable you to rearrange the tools and tabs shown in **RadEditor**.

## Configuring Header Tools

The header tools can be controlled via the **HeaderTools** collection of **RadEditor**. This collection can contain plain built-in or custom tools, by adding them as **EditorHeaderTool** item. The header tools are extended with an additional **Position** property, that instructs the tool to be show either in the left or the right tool-group. If a position is not configured it will show in the left tool-group by default.   

>caption Figure 1: The output from the code examples in **Example 1**, **Example 2** and **Example 3**.

![](./images/rearranged-header-tools.png)

>caption Example 1: Rearranging header tools via markup.


````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Mobile" 
    Width="100%" Skin="Bootstrap"> 
    <HeaderTools>
        <telerik:EditorHeaderTool Name="Undo"/>
        <telerik:EditorHeaderTool Name="Redo"/>
        <telerik:EditorHeaderTool Name="MobileEdit" Position="Right"/>
        <telerik:EditorHeaderTool Name="ToggleScreenMode" Position="Right"/>
    </HeaderTools>
</telerik:RadEditor>
````

>caption Example 2: Rearranging header tools from the code behind.

````ASP.NET 
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Mobile" 
    Width="100%" Skin="Bootstrap"> 
</telerik:RadEditor>
````
````C#
RadEditor1.HeaderTools.Add(new EditorHeaderTool("Undo", EditorHeaderToolPosition.Left));
RadEditor1.HeaderTools.Add(new EditorHeaderTool("Redo", EditorHeaderToolPosition.Left));
RadEditor1.HeaderTools.Add(new EditorHeaderTool("MobileEdit", EditorHeaderToolPosition.Right));
RadEditor1.HeaderTools.Add(new EditorHeaderTool("ToggleScreenMode", EditorHeaderToolPosition.Right));
````
````VB
RadEditor1.HeaderTools.Add(New EditorHeaderTool("Undo", EditorHeaderToolPosition.Left))
RadEditor1.HeaderTools.Add(New EditorHeaderTool("Redo", EditorHeaderToolPosition.Left))
RadEditor1.HeaderTools.Add(New EditorHeaderTool("MobileEdit", EditorHeaderToolPosition.Right))
RadEditor1.HeaderTools.Add(New EditorHeaderTool("ToggleScreenMode", EditorHeaderToolPosition.Right))
````

>caption Example 2: Rearranging header tools from the ToolsFile.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Mobile" 
    Width="100%" Skin="Bootstrap" ToolsFile="ToolsFile.xml"> 
</telerik:RadEditor>
````
````XML
<root>
  <headertools>
    <tool name="Undo"/>
    <tool name="Redo"/>
    <tool name="MobileEdit" Position="Right"/>
    <tool name="ToggleScreenMode" Position="Right"/>
  </headertools>
  <tools>
    ...
  </tools>
</root>
````

## Configuring Tabs and Tools

The tabs in the **Toolzone** can be added in the **Tools** collection of **RadEditor**. adding **EditorToolGroup** items, which **Tools** collection contains **EditorTool** items. So far, it is the same as adding an ordinary [tool to the toolbar]({%slug editor/functionality/toolbars/buttons/add-standard-buttons%}).

## Configuring Contextual Tabs

## See Also




