---
title: Telerik.Web.UI.DataSourceSettings.DataSourceControlSettings
page_title: Telerik.Web.UI.DataSourceSettings.DataSourceControlSettings
description: Telerik.Web.UI.DataSourceSettings.DataSourceControlSettings
---

# Telerik.Web.UI.DataSourceSettings.DataSourceControlSettings

A class holding the settings for the server data source of the Telerik.Web.UI.RadClientDataSource .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.DataSourceSettings.DataSourceControlSettings

## Properties

###  AllowAutomaticDeletes `Boolean`

Gets or sets a value indicating whether the ClientDataSource should perform automatic deletes

###  AllowAutomaticInserts `Boolean`

Gets or sets a value indicating whether the ClientDataSource should perform automatic inserts

###  AllowAutomaticUpdates `Boolean`

Gets or sets a value indicating whether the ClientDataSource should perform automatic updates

###  DataFields `String[]`

Gets or sets an array of data fields that will be serialized
            from server to client for use in the clientDataSource control

###  DataKeyNames `String[]`

Gets or sets an array of data key names names that will be used to
            populate the DataKeyNames collection of the ProxyBound control

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control
            binds to, in cases where the data source contains more than one distinct list
            of data items.

###  DataModelID `String`

Gets or sets the ID of the data model.

###  DataSourceID `String`

Gets or set the server side data source control ID to which the  is bound

###  DeleteMethod `String`

Gets or sets the name of the method to call in order to delete data

###  InsertMethod `String`

Gets or sets the name of the method to call in order to insert data

###  SelectMethod `String`

Gets or sets the name of the method to call in order to retrieve data

###  UpdateMethod `String`

Gets or sets the name of the method to call in order to update data

