---
title: Updated Controls Appear on a New Line
page_title: Updated Controls Appear on a New Line
description: Check our Web Forms article about Updated Controls Appear on a New Line.
slug: ajaxmanager/troubleshooting/updated-controls-appear-on-a-new-line
previous_url: ajax/radajaxmanager/troubleshooting/updated-controls-appear-on-a-new-line
tags: radajaxmanager,new,line
published: True
position: 3
---

# Updated Controls Appear on a New Line


You may notice that controls render on a new line when added into the **RadAjaxManager** settings. This is because RadAjaxManager dynamically inserts **UpdatePanels** around the updated controls. The **UpdatePanel** is, by default, rendered as a `<div>`, which is a block-level HTML element and this causes the layout change.

RadAjaxManager exposes a property called **UpdatePanelsRenderMode**. You can use UpdatePanelsRenderMode to control the render mode of the dynamically inserted UpdatePanels. The UpdatePanelRenderMode property can be defined per updated control.

Both of the above properties could be set to either **Block** or **Inline**, which will determine whether the wrapping element will be displayed as a block or as an inline element.

When working with a RadAjaxManager, you can use the global UpdatePanelsRenderMode property to set the render mode for all generated UpdatePanels to inline or to block, or to set it explicitly for a particular UpdatedControl.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" UpdatePanelsRenderMode="Inline">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
                <telerik:AjaxUpdatedControl ControlID="Label1" UpdatePanelRenderMode="Inline" />
                <telerik:AjaxUpdatedControl ControlID="Label2" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
````

The **Inline** render mode will ensure the layout will not change when the AJAX settings are added. Otherwise, RadAjaxManager will persist the default UpdatePanel render mode.
