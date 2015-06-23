---
title: End User Experience
page_title: Phone Layout End User Experience | RadEditor for ASP.NET AJAX Documentation
description: End User Experience
slug: editor/mobile-support/mobile-rendering/end-user-experience
tags: editor,support,mobile,rendering,end, user, experience, phone, layout
published: True
position: 3
---

# End User Experience

This article shows some basic examples how the end user can interact with the phone-optimized RadEditor control:

* [Start Editing](#start-editing)

* [Using the Tools](#using-the-tools)

* [Using Tabs and Contextual Tabs](#using-tabs-and-contextual-tabs)

* [Toggling HTML Mode](#toggling-html-mode)

 

## Start Editing

Initially, **RadEditor** is loaded in **Preview** mode (**Figure 1**). In order to start editing the content (full screen mode), the user should tap either the content, or the **Edit Content** button (![](./images/edit-contnet-button.png)). 

>caption Figure 1: Phone Layout in Preview mode and how to start editing

![](./images/end-user-experience/preview-mode.png)

In full screen mode, user can edit the text and operate with the header tools.

>caption Figure 2: Full screen mode where you can edit the content

![](./images/end-user-experience/full-screen-mode.png)



## Using the Tools

The **ToolZone** can be shown by pressing the **Toggle ToolZone** button from the Header Tools (![](./images/toggle-toolzone.png)). Using the tools will affect the current selection.

>caption Figure 3: Toggling the ToolZone.

![](./images/end-user-experience/toggle-toolzone.png)
 

The animation in **Figure 4** shows how a user would be able to use the tools and edit or format the content.

>caption Figure 4: User experience with content editing. 

![](./images/end-user-experience/AdaptiveRadEditor_v4.gif)

## Using Tabs and Contextual Tabs

To change the current tab, the user should press the **Tab Chooser** button (![](./images/toggle-toolzone.png)). As shown in **Figure 5**, a pop-up with all available tabs will be shown. Tapping on one of them, will load the corresponding tools from this tab into the **ToolZone**.

>caption Figure 5: Changing the Tab.

![](./images/end-user-experience/changing-tab-1.png)![](./images/end-user-experience/changing-tab-2.png)


Additionally, tabs can be configured to be shown only when a certain element is selected. This can be controlled via the **Context** property of the **EditorToolGroup** items. You can read more about that in the [Toolbar Configuration]({%slug editor/mobile-support/mobile-rendering/toolbar-configuration%}) article.

 In **Figure 6**, you can see how selecting an `<img>` element in the content and opening the **ToolZone**, automatically shows the built-in **Image** tab.

>caption Figure 6: Working with contextual tabs.

![](./images/end-user-experience/contextual-tab.png)

## Toggling HTML Mode

The user can edit the content as HTML by switching to HTML mode. This is done by tapping  the **Toggle HTML** button (![](./images/html-mode-button.png)) from the header tools. This will show the content's HTML. Once user is done, tapping the same button will switch the mode back to Design. 

>caption Figure 7: Toggling HTML mode.

![](./images/end-user-experience/html-mode.png)



## See Also

* [Getting Started]({%slug editor/mobile-support/mobile-rendering/getting-started%})
* [Elements Structure]({%slug editor/mobile-support/mobile-rendering/elements-structure%})
* [Toolbar Configuration]({%slug editor/mobile-support/mobile-rendering/toolbar-configuration%})

<style>
img{
	vertical-align: middle;
}
</style>