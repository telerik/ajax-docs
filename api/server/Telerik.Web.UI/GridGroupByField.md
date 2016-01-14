---
title: Telerik.Web.UI.GridGroupByField
page_title: Telerik.Web.UI.GridGroupByField
description: Telerik.Web.UI.GridGroupByField
---

# Telerik.Web.UI.GridGroupByField

Field which is part of each P:Telerik.Web.UI.GridGroupByExpression.SelectFields and P:Telerik.Web.UI.GridGroupByExpression.GroupByFields collection

#### Remarks
Some of the GridGroupByField properties are meaningful only when present under
                specific collection - P:Telerik.Web.UI.GridGroupByExpression.SelectFields or
                P:Telerik.Web.UI.GridGroupByExpression.GroupByFields

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridGroupByField

## Properties

###  Aggregate `GridAggregateFunction`

Gets or sets aggregate function (from 
                enumeration values) that will be applied on the grouped data.

#### Remarks
Meaningful only for fields in the
                 collection.

###  FieldAlias `String`

Gets or sets a value representing a friendly name for the field used for forming
            the group by expression. This name will be displayed in each group header when grouping
            by the respective field.

#### Remarks
Use this property for setting the field text that will be displayed in the
                    GridGroupHeaderItem. If this property is not set, the value of
                     property will be used. Note that this property has
                    a meaning only for GridGroupByField part of the SelectFields of
                    GridGroupByExpression.
                This property is useful in cases when:you want to change the value displayed in group header (different than
                    the default DataField column value)
                    orgroup by a template column and Telerik RadGrid cannot get the
                    header text for that column.

###  FieldName `String`

Gets or sets a string that represents the DataField column
            property that will be used to form the GroupByExpression.

#### Remarks
Unless you have specified a FieldAlias, the value of this
            property will be used when Telerik RadGrid constructs the text for
            GridGroupHeaderItem. FieldName has a meaning both for
            SelectFields and GroupByFields of
            GroupByExpression.

###  FormatString `String`

Gets or sets the string that will be used to format the GridGroupByField part of
                the  collection.

#### Remarks
Meaningful only for fields in the
                     collection.
                When rendering RadGrid is using this expression to format field's value. It
                is mandatory that {0} parameter is specified in the string - it will be replaced
                with field's runtime value.

###  HeaderText `String`

Gets or sets the expression that will be displayed in the
                .

#### Remarks
Meaningful only for fields in the
                 collection. When rendering
                RadGrid will override the FieldAlias value with the
                HeaderText specified.

###  HeaderValueSeparator `String`

Gets or sets the string that separates header text from value text as the
                field is rendered in the GroupHeaderItems.

#### Remarks
Meaningful only for fields in the
                 collection.

###  SortOrder `GridSortOrder`

Gets or sets the value representing how the data will be sorted. Acceptable values
                are the values of  enumeration except for None
                (Ascending, Descending).

#### Remarks
Meaningful only for fields in the
                 collection. 'None' value is
                not supported because it can not determine uniquely the order in which the groups
                will be displayed.

## Methods

###  CopyFrom

Inherited but not used

#### Returns

`System.Void` 

###  GetFormatString

Method which gets the FormatString value from GridGroupByField
                part of the  collection

#### Remarks
Meaningful only for GridGroupByFields from the
                 collection

#### Returns

`System.String` String containing the FormatString value

###  GetHeaderText

Method which gets the HeaderText value from GridGroupByField part
                of the  collection

#### Remarks
Meaningful only for GridGroupByFields from the
                 collection

#### Returns

`System.String` String containing the HeaderText value

###  SetAggregate

Method setting the aggregate function applied for a
                GridGroupByField which is part of the
                 collection.

#### Remarks
Meaningful only for GridGroupByFields from the
                 collection

#### Returns

`System.Void` N/A

###  SetSortOrder

Method setting the sort order applied for a GridGroupByField which
                is part of the  collection.

#### Remarks
Meaningful only for GridGroupByFields from the
                 collection

#### Returns

`System.Void` N/A

###  ToString

Method that retrieves a System.String that indicates the current
            object

#### Returns

`System.String` The string format of the object.

###  Validate

Inherited but not used

#### Returns

`System.Void` 

