---
title: Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error
description: Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error. Check it now!
type: how-to
page_title: Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error
slug: window-cannot-unregister-updatepanel-with-id-updatepanelid-since-it-was-not-registered-with-the-scriptmanager-error
res_type: kb
---


>caption Problem: *Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager* error is thrown  
   
## Description

This error often arises in ASP.NET applications, particularly when integrating RadWindowManager and RadWindow with ContentTemplate, which includes an UpdatePanel. This problem isn't confined to Telerik's RadControls but can occur with standard ASP.NET controls as well. It's rooted in the way ASP.NET manages the page lifecycle, specifically how and when controls are registered with the ScriptManager.

The core of this issue lies in the control's [Lifecycle events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events). The UpdatePanel typically registers itself during the Init event. However, when a RadWindow is added to RadWindowManager, it gets moved to the manager's Controls collection during the CreateChildControls event, which occurs after the Init event. This mismatch in timing leads to the error.

## Solutions

1. Direct Declaration of RadWindow: Instead of declaring the RadWindow inside RadWindowManager, place it directly on the page. This ensures proper functioning without additional overhead.
1. Use RadAjaxManager: For Ajax operations, leveraging RadAjaxManager offers a more streamlined and error-free experience.

Additional Considerations:

1. Control Creation Timing: Always create dynamic controls in the Init or PreInit events. This ensures proper registration and management by the ScriptManager.
1. Avoid Nested AJAX Controls: Nesting AJAX controls can lead to complex and unpredictable behavior. It's crucial to have a clear hierarchy and understanding of AJAX controls. Review the guidelines on understanding AJAX controls: [Understanding AJAX controls](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/ajax-understanding-ajax-controls).
1. Dynamic Controls with AJAX: If adding controls dynamically, ensure they are within a container already managed by AJAX (like an UpdatePanel or RadAjaxPanel).
   Prefer asp:Panel Over PlaceHolders for AJAX: asp:Panel tends to be more stable for AJAX functionality compared to PlaceHolders.
1. Wrapping RadWindow Content in AJAX Panel: When using RadWindow with AJAX, encapsulate its content within a RadAjaxPanel or an UpdatePanel for proper AJAX operation.
1. Managing RadWindow and WindowManager: For AJAX compatibility, it's often more effective to manage RadWindows outside of the WindowManager.

Example Code:
````ASPX
<telerik:RadWindow runat="server">
    <ContentTemplate>
        <telerik:RadAjaxPanel runat="server">
            <!-- Your Controls Here -->
        </telerik:RadAjaxPanel>
    </ContentTemplate>
</telerik:RadWindow>
````

You can find more information for the error in the following resources:
- https://community-archive.progress.com/forums/00295/44330.html
- https://www.codeproject.com/Questions/393396/Cannot-unregister-UpdatePanel-with-ID
- https://stackoverflow.com/questions/8727658/cannot-unregister-updatepanel-with-id-xxx-since-it-was-not-registered-with-th

  
