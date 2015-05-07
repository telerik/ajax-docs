---
title: Design Time
page_title: Design Time | UI for ASP.NET AJAX Documentation
description: Design Time
slug: ajax/design-time
tags: design,time
published: True
position: 3
---

# Design Time



Display **Smart Tags** by right clicking the control and choosing **Show Smart Tag** from the context menu, or clicking the small rightward-pointing arrow located in the upper right corner of the control.

The Smart Tags for [RadAjaxPanel]({%slug ajax/radajaxpanel/overview%}) and [RadAjaxManager]({%slug ajax/radajaxmanager/overview%}) are nearly identical. The RadAjaxManager Smart Tag differs from the RadAjaxPanel version in that it has aConfigure Ajax Manager link and a "Choose DefaultLoadingPanelID" drop down list instead of "Choose LoadingPanelID". RadAjaxPanel also has a **Add RadAjaxManager** option.

## RadAjaxPanel
>caption 

![AjaxPanel Tasks](images/AjaxPanelTasks.png)

## General Features

* **Enable AJAX** : When this item is checked, all requests for controls within the RadAjaxPanel are handled via AJAX. If not checked, requests are handled in the legacy postback manner.

* **Enable AJAX History** : When checked, browser history is enabled even when using AJAX. The forward and back buttons of the browser work as expected in a standard postback web site.

* **Enable update of Page <head> element** : If this option is checked, the Page <Head> element can be modified during AJAX updates.

* **Choose LoadingPanelID** : Select a [LoadingPanel]({%slug ajax/radajaxpanel/overview%}) instance from the drop down list to display during AJAX updates.

>caution The Enable AJAX History feature currently works for Internet Explorer only.
>


## Ajax Resources

* **Add RadAjaxManager...** :Adds a RadAjaxManager component to the form.

* **Replace ScriptManager with RadScriptManager** : Replaces the Microsoft Script Extensions ScriptManager with RadScriptManager. RadScriptManager provides enhanced capabilities for handling web resources and combining scripts for better performance.

* **Add RadStyleSheetManager:** Adds a RadStyleSheetManager to the web page. RadStyleSheetManager provides enhanced capabilities for handling web resources and combining stylesheets for better performance.

## Learning Center

* Links navigate you directly to examples, help, and code library.

* You can also search the Telerik web site for a given string.

* You can navigate directly to the [Telerik Support Center](http://www.telerik.com/support/home.aspx).

## RadAjaxManager


>caption 

![AjaxManager Tasks](images/AjaxManagerTasks.jpg)



**Configure Ajax Manager:** Displays theRadAjaxManager Property Builder.

## General Features

* **Enable AJAX** : When this item is checked, all requests for controls managed by the [RadAjaxManager]({%slug ajax/radajaxmanager/overview%}) are handled via AJAX. If not checked, requests are handled in the legacy postback manner.

* **Enable AJAX History** : When checked, browser history is enabled even when using AJAX. The forward and back buttons of the browser work as expected in a standard postback web site.

* **Enable update of Page <head> element** : If this option is checked, the Page <Head> element can be modified during AJAX updates.

* **Choose DefaultLoadingPanelID** : Select a [LoadingPanel]({%slug ajax/radajaxpanel/overview%}) instance from the drop down list to display during AJAX updates.

>caution The Enable AJAX History feature currently works for Internet Explorer only.
>


## Ajax Resources

* **Add RadAjaxManager...** :Adds a RadAjaxManager component to the form.

* **Replace ScriptManager with RadScriptManager** : Replaces the Microsoft Script Extensions ScriptManager with RadScriptManager. RadScriptManager provides enhanced capabilities for handling web resources and combining scripts for better performance.

* **Add RadStyleSheetManager:** Adds a RadStyleSheetManager to the web page. RadStyleSheetManager provides enhanced capabilities for handling web resources and combining stylesheets for better performance.

## Learning Center

* Links navigate you directly to examples, help, and code library.

* You can also search the Telerik web site for a given string.

* You can navigate directly to the [Telerik Support Center](http://www.telerik.com/support/home.aspx).

## RadAjaxManagerProxy


>caption 

![RadAjaxManagerProxy Tasks](images/RadAjaxmanagerProxyTasks.png)



**Configure Ajax Manager:** Displays the RadAjaxManager Property Builder.

## RadAjaxLoadingPanel


>caption 

![RadAjaxLoadingPanel Tasks](images/RadLoadingPanelTasks.png)



## General Features

* **Is Sticky** : If this option is checked, the panel will appear where you have placed it on your webform. If the option is not checked, the loading panel will appear in the place of controls being updated. The option is unchecked by default.

* **Initial Delay Time** : Specifies the delay in milliseconds, after which the loading panel will be shown.

* **Min Display Time:** Specifies the minimum time in milliseconds that the loading panel will be shown.

* **Transparency:** Is a value from 0 to 100 that indicates the transparency of the loading panel. A value of 0 will make the loading panel completely opaque and larger values will display the loading panel progressively more transparent.
