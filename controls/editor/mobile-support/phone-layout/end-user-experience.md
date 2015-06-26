---
title: End User Experience
page_title: Phone Layout End User Experience | RadEditor for ASP.NET AJAX Documentation
description: End User Experience
slug: editor/mobile-support/phone-layout/end-user-experience
tags: editor,support,mobile,rendering,end, user, experience, phone, layout
published: True
position: 3
---

# Phone Layout End User Experience

This article shows some basic examples how the end user can interact with the phone-optimized RadEditor control:

* [Start Editing](#start-editing)

* [Using the Tools](#using-the-tools)

* [Using Tabs and Contextual Tabs](#using-tabs-and-contextual-tabs)

* [Toggling HTML Mode](#toggling-html-mode)

* [Using Built-in Mobile Dialogs](#using-built-in-mobile-dialogs)
	* [Common Elements](#common-elements)
	* [Hyperlink Manager](#hyperlink-manager)
	* [File Browser Dialogs](#file-browser-dialogs)
	* [Insert Table](#insert-table)
	* [Find and Replace](#find-and-replace)

 

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

To change the current tab, the user should press the **Tab Chooser** button (![](./images/html-mode-button.png)). As shown in **Figure 5**, a pop-up with all available tabs will be shown. Tapping on one of them, will load the corresponding tools from this tab into the **ToolZone**.

>caption Figure 5: Changing the Tab.

![](./images/end-user-experience/changing-tab-1.png)![](./images/end-user-experience/changing-tab-2.png)


Additionally, tabs can be configured to be shown only when a certain element is selected. This can be controlled via the **Context** property of the **EditorToolGroup** items. You can read more about that in the [Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%}) article.

In **Figure 6**, you can see how selecting an `<img>` element in the content and opening the **ToolZone**, automatically shows the built-in **Image** tab.


>caption Figure 6: Working with contextual tabs.

![](./images/end-user-experience/contextual-tab.png)

## Toggling HTML Mode

The user can edit the content as HTML by switching to HTML mode. This is done by tapping  the **Toggle HTML** button (![](./images/html-mode-button.png)) from the header tools. This will show the content's HTML. Once user is done, tapping the same button will switch the mode back to Design. 

>caption Figure 7: Toggling HTML mode.

![](./images/end-user-experience/html-mode.png)

## Using Built-in Mobile Dialogs

With the creation of the phone-optimized **RadEditor**, built-in dialogs also have been also re-designed in order to expose a more user-friendly UI under phone devices. You can learn more details about how to configure the built-in dialogs in the [Mobile Dialogs]({%slug editor/mobile-support/phone-layout/dialogs%}) article.

>caption Figure 8: Built-in Mobile Dialogs (Insert Table, Insert Image, Insert Link, Find and Replace). 

![](./images/AJAX_RadEditor_Adaptive_Dialogs.png)

### Common Elements

All built-in dialogs have **OK**/**Insert** and **Cancel** buttons that are used to perform the dialog's action and to cancel operation. With the mobile-optimized dialogs, these buttons are placed at the top toolbar of the dialog. 

>caption Figure 9: OK and Cancel buttons of the mobile-optimized built-in dialogs.  

![](./images/end-user-experience/dialogs-header-tools.png)

### Hyperlink Manager

* **Url** (text input)—the URL of the link to be inserted.
* **Link Text** (text input)—the text of the link.
* **Target** (select input)—the target attribute of the link. 

### File Browser Dialogs

* ![](./images/end-user-experience/upload-button.png) **Upload**—opens an UI for the user to upload a file *(available if __UploadPaths__ property is configured)
 
* ![](./images/end-user-experience/delete-button.png) **Delete**—deletes the selected file *(available if __DeletePaths__ property is configured)*.
 
* ![](./images/end-user-experience/list-button.png) **List View**—toggles the view mode to **List**.

* ![](./images/end-user-experience/thumb-button.png) **Thumbnail View**—toggles the view mode to **Thumbnails**.

### Insert Table

* ![](./images/end-user-experience/spin-button.png) **Increase/Decrease** (spin buttons)—enables the user to increase or decrease the value in the numeric text-box.

* **Columns** (numeric text-box)—sets the number of the table's columns. 
  
* **Rows** (numeric text-box)— sets the number of the table's rows.
 
* **Cell Padding** (numeric text-box)—adds a padding to the table's cells. 
 
* **Cell Spacing** (numeric text-box)—adds spacing between the table's cells.

### Find and Replace 

* **Find** and **Find and Replace** (radio buttons)—Toggles between the two modes.
* **Match Case** (check-box)—Defines whether to match the case.  

## See Also

* [Getting Started]({%slug editor/mobile-support/phone-layout/getting-started%})
* [Elements Structure]({%slug editor/mobile-support/phone-layout/elements-structure%})
* [Toolbar Configuration]({%slug editor/mobile-support/phone-layout/toolbar-configuration%})
* [Mobile Dialogs]({%slug editor/mobile-support/phone-layout/dialogs%})

<style>
img{
	vertical-align: middle;
}
</style>