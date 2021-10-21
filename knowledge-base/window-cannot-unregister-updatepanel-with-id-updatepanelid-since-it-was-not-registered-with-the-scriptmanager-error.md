---
title: Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error
description: Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error. Check it now!
type: how-to
page_title: Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager error
slug: window-cannot-unregister-updatepanel-with-id-updatepanelid-since-it-was-not-registered-with-the-scriptmanager-error
res_type: kb
---


>caption Problem: *Cannot unregister UpdatePanel with ID 'UpdatePanelID' since it was not registered with the ScriptManager* error is thrown  
   
## Solution

The error mentioned above might occur in the scenario when there is a RadWindowManager and in its Windows collection is declared a RadWindow with ContentTemplate which contains an update panel. The problem is a general one and it can be reproduced with standard asp controls and without any RadControls as well. What actually happens is that when the RadWindow is added to the RadWindowManager it is actually moved in its Controls collection and this happens in the CreateChildControls event of the manager whileÂ the update panelÂ registers itself in the Init event which is earlier in the lifecycle. More information about this is available in the following blogpost:  
   
 [http://msmvps.com/blogs/luisabreu/archive/2006/11/16/adding-removing-updatepanels-dynamicaly-from-a-page.aspx](http://msmvps.com/blogs/luisabreu/archive/2006/11/16/adding-removing-updatepanels-dynamicaly-from-a-page.aspx)  
   

Since the resolution of the issue is to add the RadWindow in the PreInit event this cannot be fixed in the source code because it is to early to add the RadWindow there and will affectÂ the currentÂ functionality.  
   
In such setup we can suggest the following two simple solutions which fix the issue and will lead to the desired result:  
 
 1. You can declare a separate RadWindow directly on the page instead of in the RadWindowManager - it will function as expected and there is no limitation or additional load to use the control separately.
 
 1.  You can use RadAjaxManager for ajaxifying.   
   
 