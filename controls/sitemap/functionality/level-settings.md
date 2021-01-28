---
title: Level Settings
page_title: Level Settings - RadSiteMap
description: Check our Web Forms article about Level Settings.
slug: sitemap/functionality/level-settings
tags: level,settings
published: True
position: 1
---

# Level Settings

## 

**RadSiteMap** provides a way to customize the behavior of the nodes at any level.

RadSiteMap support both **global** level settings and **per level** settings.

* **DefaultLevelSettings** - applied globally to the nodes on all levels.

The following example shows how to show only the first three nodes in every level by utilizing the **MaximumNodes** property:

````ASPNET
<telerik:RadSiteMap ID="RadSiteMap2" runat="server" DataSourceID="SiteMapDataSource">
    <DefaultLevelSettings MaximumNodes="3">
    </DefaultLevelSettings>
</telerik:RadSiteMap>
````

* **LevelSettings** - applied to the nodes per level. It **overrides** the DefaultLevelSettings.

The following example shows how the LevelSettings override the MaximumNodes value of the first (zero) level:

````ASPNET
<telerik:RadSiteMap ID="RadSiteMap2" runat="server" DataSourceID="SiteMapDataSource">
    <DefaultLevelSettings MaximumNodes="3">
    </DefaultLevelSettings>
    <LevelSettings>
        <telerik:SiteMapLevelSetting Level="0" MaximumNodes="4">
        </telerik:SiteMapLevelSetting>
    </LevelSettings>
</telerik:RadSiteMap>
````

Here the default setting for MaximumNode = 3 is applied to all levels except level 0 which is overridden by the level settings.
