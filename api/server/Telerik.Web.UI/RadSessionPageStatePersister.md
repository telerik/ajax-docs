---
title: Telerik.Web.UI.RadSessionPageStatePersister
page_title: Telerik.Web.UI.RadSessionPageStatePersister
description: Telerik.Web.UI.RadSessionPageStatePersister
---

# Telerik.Web.UI.RadSessionPageStatePersister

A class based on System.Web.UI.SessionPageStatePersister that supports viewstate manipulation even if it is compressed.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.PageStatePersister
* System.Web.UI.SessionPageStatePersister
* Telerik.Web.UI.RadSessionPageStatePersister

## Methods

###  Load

Loads viewstate even if it is previously compressed.

#### Returns

`System.Void` 

###  Save

If needed compresses viewstate and saves it in session. Only viewstate greater than 8 KB is compressed.

#### Returns

`System.Void` 

