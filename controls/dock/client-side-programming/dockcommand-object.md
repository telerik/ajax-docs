---
title: DockCommand Object
page_title: DockCommand Object | RadDock for ASP.NET AJAX Documentation
description: DockCommand Object
slug: dock/client-side-programming/dockcommand-object
tags: dockcommand,object
published: True
position: 3
---

# DockCommand Object




The following table lists the most important methods of the client-side **DockCommand** object:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_radDock** |none|[RadDock]({%slug dock/client-side-programming/raddock-object%})|Returns the **RadDock** object to which this command belongs.|
| **get_text** |none|string|Returns the string that appears in the tool tip for this command.|
| **set_text** |string|none|Sets the string that appears in the tool tip for this command.|
| **get_name** |none|string|Returns the name of this command.|
| **set_name** |string|none|Sets the name of this command.|
| **get_element** |none|HTML element|Returns the DOM element for the command as it appears in the parent **RadDock** control's title bar.|

# See Also

 * [Overview]({%slug dock/client-side-programming/overview%})

 * [RadDock Object]({%slug dock/client-side-programming/raddock-object%})

 * [OnClientCommand]({%slug dock/client-side-programming/events/onclientcommand%})
