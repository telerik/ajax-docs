---
title: Smart Tag
page_title: Smart Tag | RadSiteMap for ASP.NET AJAX Documentation
description: Smart Tag
slug: sitemap/design-time/radsitemapdatasource/smart-tag
tags: smart,tag
published: True
position: 0
---

# Smart Tag



The **RadSiteMapDataSource** Smart Tag allows easy access to frequently needed tasks. You can display the Smart Tag by right clicking on a **RadSiteMapDataSource** control in the design window, and choosing **Show Smart Tag**. The Smart Tag looks like the following:

![RadSiteMapDataSource Smart Tag](images/sitemap_smds_smarttag.png)

## Create a new SiteMap

Clicking on the "**Create a New SiteMap**" link will open the SiteMap Editor.

![SiteMap Editor](images/sitemap_smds_sitemapeditor.png)



The SiteMap Editor lets you add, rearrange, drag, configure, and delete sitemap items. These actions are initiated using the vertical tool bar at the right of the editor, or the buttons between the two treeview areas. Direct drag-and-drop operations are also supported.

The following table describes the controls in the tool bar:


>caption  

| Button | Function |
| ------ | ------ |
|![RadSiteMapDataSource Add Node](images/sitemap_smds_addnode.png)|Adds a root node to the treeview in the next available position. Root nodes are the top-level nodes (treeview nodes with no parent item).|
|![RadSiteMapDataSource Add Sibling Node](images/sitemap_smds_addsiblingnode.png)|Adds a sibling to the selected node.|
|![RadSiteMap Add a Child Node](images/sitemap_smds_addchildnode.png)|Adds a child node to the currently selected node. The child can belong to either a root node or another child node.|
|![RadSiteMapDataSource Delete the Selected Node](images/sitemap_smds_deletenode.png)|Deletes the selected node.|
|![RadSiteMap Sibling of Parent](images/sitemap_smds_siblingofparent.png)|Makes the selected node a sibling of its parent.|
|![RadSiteMapDataSource Child of Preceding Sibling](images/sitemap_smds_childofprecedingsibling.png)|Makes the selected node a child of its preceding sibling node.|
|![RadSiteMapDataSource Moves a Node Up](images/sitemap_smds_moveup.png)|Moves the selected node up amongst its siblings.|
|![RadSiteMapDataSource moves a Node Down](images/sitemap_smds_movedown.png)|Moves the selected node down amongst its siblings.|
|![RadSiteMapDataSource Deletes All Nodes](images/sitemap_smds_deleteall.png)|Clears all sitemap node.|
|![RadSiteMapDataSource Get Site Structure](images/sitemap_smds_getsitestructure.png)|Moves the entire site's structure to the sitemap.|
|![RadSiteMapDataSource Use Selected Node](images/sitemap_smds_useselectednode.png)|Moves the selected node to be used in the sitemap.|

The SiteMap Editor allows you to also set the Description, Title, and Url properties of the selected node through the **SiteMap Node Properties** box at the bottom:

![RadSiteMapDataSource Node Properties](images/sitemap_smds_sitemapnodepreperties.png)

Finally, at the bottom left corner is the "Export To Sitemap" button which allows you to save your sitemap in **Sitemap protocol** format that can be used by google and other such robots.

![RadSiteMapDataSource Export to Sitemap](images/sitemap_smds_exporttositemapbutton.png)

## Edit SiteMap

Clicking on the "**Edit SiteMap**" link of the smart tag dialog will also open the SiteMap Editor. However, the difference in the editor in this case will be that the Sitemap treeview on the right will be already populated with the structure of the file specified by the **SiteMapFile** property.
