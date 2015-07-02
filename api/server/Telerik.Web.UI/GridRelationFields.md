---
title: Telerik.Web.UI.GridRelationFields
page_title: Telerik.Web.UI.GridRelationFields
description: Telerik.Web.UI.GridRelationFields
---

# Telerik.Web.UI.GridRelationFields

corresponding fields from a master-detail relation

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridRelationFields

## Properties

###  MasterKeyField `String`

Gets or sets the key field which will be used for a relation between the  and the parent table.
            The key field should refer to parent  DataField which you want to use as relation.
            The MasterKeyField in the GridRelationFields should match the primary key of the parent table in the corresponding relation.

###  DetailKeyField `String`

Gets or sets the key field which will be used for a relation between the  and the parent table.
            The key field should refer to current  DataField which you want to use as relation.
            The DetailKeyField in the GridRelationFields should match the foreign key of the child table in the corresponding relation.

