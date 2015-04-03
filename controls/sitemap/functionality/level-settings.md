---
title: Level Settings
page_title: Level Settings | UI for ASP.NET AJAX Documentation
description: Level Settings
slug: sitemap/functionality/level-settings
tags: level,settings
published: True
position: 1
---

# Level Settings



## 

__RadSiteMap__ provides a way to customize the behavior of the nodes at any level.

RadSiteMap support both __global__ level settings and __per level__ settings.

* __DefaultLevelSettings__ - applied globally to the nodes on all levels.

The following example shows how to show only the first three nodes in every level by utilizing the __MaximumNodes__ property:

````ASPNET
	    <telerik:RadSiteMap ID="RadSiteMap2" runat="server" DataSourceID="SiteMapDataSource">
	        <DefaultLevelSettings MaximumNodes="3">
	        </DefaultLevelSettings>
	    </telerik:RadSiteMap>
````



* __LevelSettings__ - applied to the nodes per level. It __overrides__ the DefaultLevelSettings.

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
