---
title: Ajax-enable a Scenario through RadAjaxManager and RadAjaxLoadingPanel
page_title: Ajax-enable a Scenario through RadAjaxManager and RadAjaxLoadingPanel | UI for ASP.NET AJAX Documentation
description: Ajax-enable a Scenario through RadAjaxManager and RadAjaxLoadingPanel
slug: ajax/getting-started/ajax-enable-a-scenario-through-radajaxmanager-and-radajaxloadingpanel
tags: ajax-enable,a,scenario,through,radajaxmanager,and,radajaxloadingpanel
published: True
position: 2
---

# Ajax-enable a Scenario through RadAjaxManager and RadAjaxLoadingPanel



## 

This page walks through the basic steps required to AJAX-enable an application using __RadAjaxManager__ and __AjaxLoadingPanel__. You can add a __RadAjaxManager__ control to any web application that requires the replacement of ordinary post backs with AJAX requests. AJAX-enabling a web application using __RadAjaxManager__ is a completely codeless process. You can use an __AjaxLoadingPanel__ enhance the user experience. __AjaxLoadingPanel__supports image templates, which your application can display as progress indicators whenever a callback request is performed, i.e., when the page is loading.

1. To add a __RadAjaxManager__ to a web page that you are modifying in design view in Visual Studio, drag it from the Telerik toolbox (__Figure 1__) to the design surface.
>caption Figure 1: Dragging a RadAjaxManager from the Telerik toolbox to the design surface.

![AjaxManager Toolbox](images/RadAjaxManagerToolBox.png)

1. Next, drag and drop a __RadAjaxLoadingPanel__ control from the Telerik toolbox to the design surface (__Figure 2__).
>caption Figure 2: Drag an RadAjaxLoadingPanel from the Telerik toolbox to the design surface.

![](images/RadAjaxLoadingPanelToolBox.png)

1. To AJAX-enable the individual controls on the page, click on the box in the top right corner to open the Smart Tag and configure __RadAjaxManager__ through the “__Open Ajax Settings Configuration Wizard__“ link of the Smart Tag (__Figure 3__). This step is completely codeless, requiring only design-time configuration of the necessary relations between the __RadAjaxManager__ and the other controls:
>caption Figure 3: Click the link, Open Ajax Settings Configuration Wizard, to open the RadAjaxManager Configuration Wizard.

![AjaxManager Tasks](images/AjaxManagerTasks.jpg)

1. Now you should see the RadAjaxManager Configuration Wizard (__Figure 4__). On the left-hand side are controls that will initiate AJAX requests. In the center of the configuration wizard are controls that will be updated via AJAX. You can include and exclude items from these lists via the checkboxes to the left of each control name.
>caption Figure 4: The left and center parts of the RadAjaxManager Configuration Wizard let you set which controls initiate AJAX requests and which controls will be updated via AJAX.

![LoadingPanel Setting](images/SetTheLoadingPanelID.png)

1. You can display a loading panel for each control that will be updated via the __RadAjaxManager__. Set the __LoadingPanelID__ property to the ID(__Figure 5__) of an existing __RadAjaxLoadingPanel__ control:
>caption Figure 5: Set the LoadingPanelID to the ID of the RadAjaxLoadingPanel you just added.

![LoadingPanel Setting](images/SetTheLoadingPanelID.png)

1. __Figure 6__ shows how the AJAX-enabled application looks at run-time. With the help of the __RadAjaxManager__, the normalpost back is replaced by a callback. The loading panel displays in the currently updating control:![](images/HowTheAjaxApplicationWorks.png)

# See Also

 * [What is AJAX?]({%slug ajax/getting-started/what-is-ajax?%})[](251A6C11-CA84-419B-A65C-3A3329FB1FDD)[](700D89B9-A5C9-4281-8651-3CEB407C3648)

 * [RadAjax Advantages]({%slug ajax/getting-started/radajax-advantages%})
