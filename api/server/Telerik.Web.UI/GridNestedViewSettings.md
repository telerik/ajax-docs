---
title: Telerik.Web.UI.GridNestedViewSettings
page_title: Telerik.Web.UI.GridNestedViewSettings
description: Telerik.Web.UI.GridNestedViewSettings
---

# Telerik.Web.UI.GridNestedViewSettings

Class holding settings in order to setup a P:Telerik.Web.UI.GridTableView.NestedViewTemplate settings.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridNestedViewSettings

## Properties

###  DataSourceID `String`

Gets or sets the DataSourceID of the nested view template.

###  ParentTableRelation `GridTableViewRelation`

Each entry in this collection consists of a relation key names. These key names have to be also populated in each GridTableView
            DataKeyNames array. When these properties are specified correctly,  will be able to determine the child records of
            each GridTableView when the control builds the hierarchy, without handling the DetailTableDataBind event. 
            You need to define the ParentTableRelations/DataKeyNames for the MasterTableView/GridTableViews according to the database relations 
            conventions.And here are the exact conventions:
            the primary key column name for each table in the grid source (used for master/detail table population) should be added to the 
            DataKeyNames collection of the respective master/detail table
            - The MasterKeyField in the GridRelationFields should match the primary key of the parent table in the corresponding relatio
            - The DetailKeyField in the GridRelationFields should match the foreign key of the child table in the corresponding relation

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

