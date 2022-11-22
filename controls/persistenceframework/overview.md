---
title: Overview
page_title: RadPersistenceFramework Overview
description: Check our Web Forms article about Overview.
slug: persistenceframework/overview
tags: overview
published: True
position: 0
---

# WebForms PersistenceFramework Overview

Telerik Persistence Framework provides the ability to preserve and restore the state of Telerik® UI for ASP.NET AJAX, which gives your end users the freedom to arrange and use your app in a way most convenient to them. The framework mainly saves and loads settings of the Telerik controls which are UI configurable, e.g. expanded, checked and selected state of **RadTreeView**.You can see this in action in our [online demos](https://demos.telerik.com/aspnet-ajax/persistence-framework/examples/overview/defaultcs.aspx).

The core functionality is presented by **RadPersisterManager** and **RadPersisterManagerProxy** – there should be only one instance of **RadPersistenceManager** and the proxies are defined on the content pages or user controls to persists the state of the controls on them. **RadPersistenceManager** enables you to save and load custom key-value settings.

#### Key features:
* Long-term persistence of Telerik controls' UI-modifiable state
* Persistence of custom key-value settings
* Ability to implement own storage and serialization providers

By default control settings are stored in the `~/App_Data` folder in a file for each unique state—the file name is the value of the `StorageProviderKey` property.


## See Also

 * [Online Demos](https://demos.telerik.com/aspnet-ajax/persistence-framework/examples/overview/defaultcs.aspx)
 
 * [ASP.NET AJAX Persistence Framework](https://www.telerik.com/products/aspnet-ajax/persistence-framework.aspx)
