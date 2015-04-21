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



In complex scenarios, where master pages and user controls are utilized and more than one **RadPersistenceManager** is required in order to handle all the controls which state should be persisted, **RadPersistenceManagerProxy** should	be used in the context pages / user controls.

**RadPersistenceManagerProxy** offers a declarative (design-time) approach to configure **PersistenceSettings** in the context of a **NamingContainer**. This helper control copies the exact same **RadPersistenceManager** designer configuration.

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


To prevent this behavior you can set the **UniqueKey** property of the **RadPersistenceManagerProxy**, that will help you to distinguish both grids.

>

