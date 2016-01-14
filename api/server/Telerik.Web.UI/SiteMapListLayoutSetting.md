---
title: Telerik.Web.UI.SiteMapListLayoutSetting
page_title: Telerik.Web.UI.SiteMapListLayoutSetting
description: Telerik.Web.UI.SiteMapListLayoutSetting
---

# Telerik.Web.UI.SiteMapListLayoutSetting

This Class gets or sets the settings in the SiteMapListLayout.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.SiteMapListLayoutSetting

## Properties

###  AlignRows `Boolean`

Gets or sets the align rows.

###  RepeatColumns `Int32`

Gets or sets the number of columns to display on this level.

#### Remarks
Specifies the number of columns which are displayed for a given level. For example, 
            if it set to 3, the nodes in the level are displayed in three columns.

###  RepeatDirection `SiteMapRepeatDirection`

Gets or sets whether the columns are repeated vertically or horizontally

#### Remarks
When this property is set to Vertical, 
            nodes are displayed vertically in columns from top to bottom, 
            and then left to right, until all nodes are rendered.
            
            When this property is set to Horizontal,
            nodes are displayed horizontally in rows from left to right, 
            then top to bottom, until all nodes are rendered.

