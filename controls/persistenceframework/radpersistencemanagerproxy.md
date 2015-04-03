---
title: RadPersistenceManagerProxy
page_title: RadPersistenceManagerProxy | UI for ASP.NET AJAX Documentation
description: RadPersistenceManagerProxy
slug: persistenceframework/radpersistencemanagerproxy
tags: radpersistencemanagerproxy
published: True
position: 4
---

# RadPersistenceManagerProxy



In complex scenarios, where master pages and user controls are utilized and more than one__RadPersistenceManager__ is required in order to handle all the controls whos state should be persisted, __RadPersistenceManagerProxy__ should	be used in the context pages / user controls.

__RadPersistenceManagerProxy__ offers a declarative (design-time)approach to configure PersistenceSettings in the context of a NamingContainer. This helper control copies the exact sameRadPersistenceManager designer configuratuion.

````ASPNET
			<telerik:RadPersistenceManagerProxy ID="RadPersistenceManagerProxy1" runat="server">
				<PersistenceSettings>
					<telerik:PersistenceSetting ControlID="RadListView1" />
					<telerik:PersistenceSetting ControlID="RadGrid1" />
					<telerik:PersistenceSetting ControlID="RadCalendar1" />
					<telerik:PersistenceSetting ControlID="RadCalendar2" />
				</PersistenceSettings>
			</telerik:RadPersistenceManagerProxy>
````



## 

In scenarios where persistence manager proxies are used there may be a case where two controlswith identical ID's to exist. An example for such a scenario could be, if you have a master page and two content pages and each content page contains a RadGrid with ID = "RadGrid1". The problem is that if you once save the settings for the grid on the first page and then load them on the other page, the settings will be applied to the second grid, regardless of the fact that the control is not the same.

To prevent this behaviour you can set __UniqueKey__ property to the__RadPersistenceManagerProxy__, that will help you to distinguish both grids.

>note The __UniqueKey__ value must be unique and should be set either to all proxies or to none of them.
>

