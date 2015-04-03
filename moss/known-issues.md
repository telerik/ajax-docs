---
title: Known Issues
page_title: Known Issues | UI for ASP.NET AJAX Documentation
description: Known Issues
slug: moss/known-issues
tags: known,issues
published: True
position: 3
---

# Known Issues



This article describes known issues with integrating the Telerik controls in SharePoint (all versions). Telerik does not (yet) have solutions for these issues. This article will feature a common scenario with editing Web Parts inside __RadEditor__ for SharePoint.

## Web Parts Cannot Be Edited in RadEditor for SharePoint

__RadEditor__ for SharePoint does not support editing Web Parts in its content. There are two scenarios, in which you can encounter this limitation:

* When you __insert a Web Part in the standard field for editing__ the content of a SharePoint page and __later__ enable thefeature __Use RadEditor to edit HTML fields__. The Web Part will be missing from the content of __RadEditor__ for SharePoint when you edit the page again.

* When you insert a Web Part in an already enabled __Use RadEditor to edit HTML fields__, the Web Part will not be displayedin the edited SharePoint page and it will not be added in the saved page.

Both cases are described in more detail in the following sections.

### Enabling the feature "Use RadEditor to edit HTML fields" when you already added a Web Part on the page via the default editor breaks the Web Part

The following steps describe the most common example for this case:

1. You insert a Web Part in the text area for editing the content of the SharePoint page as shown in __Figure 1__.
>caption Figure 1: Adding a Web Part from the ribbon bar of the SharePoint site.

![add-web-part-from-ribbon-bar](images/add-web-part-from-ribbon-bar.png)

1. You can see a visual representation of the added Web Part in the Page Content text area of the edited page. __Figure 2__ shows the Media Web Part of SharePointin the Page Content text area.
>caption Figure 2: Visualization of the inserted Web Part in the Page Content text area.

![web-part-in-content-of-standard-editor](images/web-part-in-content-of-standard-editor.png)

1. After you save the SharePoint page, the Web Part will be included in the page and it will be functional.

1. You enable the feature __Use RadEditor to edit HMTL fields__, as described in the article [Using RadEditor in Web Content Management scenario]({%slug moss/sharepoint-2013/radeditor-web-part/installation-and-deployment/web-content-management-scenario%}).

1. When you start editing the page where you added the Web Part, you will see a __RadEditor__ for SharePoint in the place of the standard Page Content text area. The Web Part in the content of the editor will be missing in a fashion similar to __Figure 3__.
>caption Figure 3: The Web Part no longer appears when the RadEditor to edit HTML fields feature is enabled.

![web-part-in-content-of-radeditor](images/web-part-in-content-of-radeditor.png)

1. If you save the page, the Web Part will still be there, however if you edit the content of the page via the __RadEditor__ for SharePoint, the Web Part will disappear.

### Web Parts cannot be edited in a page that has the feature "Use RadEditor to edit HTML fields" already enabled

The most common case when this limitation is hit is when you have already activated the __RadEditor__ for Web Content Management scenario and you want to add a Web Part inside.

1. You would use the ribbon bar from __Figure 1__ or the __Insert Web Part__ command of __RadEditor__ for SharePoint for adding Web Parts while editing the Web Part page that is displayedin __Figure 4__.
>caption Figure 4: RadEditor’s command for inserting Web Parts.

![add-web-part-from-radeditor-command](images/add-web-part-from-radeditor-command.png)

1. When you select and add the Web Part for editing, it does not show in the content area of __RadEditor__ for SharePoint, similar to __Figure 3__.

1. If you save the changes in the content, the Web Part will not be included the page.

# See Also

 * [Using RadEditor in Web Content Management scenario]({%slug moss/sharepoint-2013/radeditor-web-part/installation-and-deployment/web-content-management-scenario%})

 * [Using the RadEditor WebPart]({%slug moss/sharepoint-2013/radeditor-web-part/installation-and-deployment/getting-started%})
