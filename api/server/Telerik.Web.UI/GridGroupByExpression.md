---
title: Telerik.Web.UI.GridGroupByExpression
page_title: Telerik.Web.UI.GridGroupByExpression
description: Telerik.Web.UI.GridGroupByExpression
---

# Telerik.Web.UI.GridGroupByExpression

Expression similar to SQL's "Select Group By" clause that is used by
                GridTableViewto group items
                (P:Telerik.Web.UI.GridTableView.GroupByExpressions . Expressions can be defined by
                assigning P:Telerik.Web.UI.GridGroupByExpression.Expression Expressionproperty and/or managing the
                items in P:Telerik.Web.UI.GridGroupByExpression.SelectFields or
                P:Telerik.Web.UI.GridGroupByExpression.GroupByFields collections.

#### Remarks
If you use P:Telerik.Web.UI.GridGroupByExpression.Expression property to assign
                group by expression as string then the expression is parsed and
                P:Telerik.Web.UI.GridGroupByExpression.SelectFields and
                P:Telerik.Web.UI.GridGroupByExpression.GroupByFields are created. If the
                expression syntax is incorrect a Telerik.Web.UI.GridGroupByException would be
                thrown. You can use Telerik.Web.UI.GridGroupByField 's properties to set
                expression's fields appearance format strings, etc. See
                P:Telerik.Web.UI.GridGroupByExpression.Expression property for details about the expression syntax.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridGroupByExpression

## Properties

###  SelectFields `GridGroupByFieldList`

Gets a collection of SelectField objects (field names, aggregates etc.) that form
            the "Select" clause. Standing on the left side of the "Group By" clause.

###  GroupByFields `GridGroupByFieldList`

Gets a collection of  objects that form the grouping
                clause. Standing on the right side of the "Group By" clause

###  Expression `String`

String representation of the GroupBy expression.

#### Remarks
Expression syntax:fieldname[ alias]|aggregate(fieldname)[ alias][, ...] Group By fieldname[
                sort][, ...]fieldname: the name of any field from the
                        alias: alas string. This cannot contain blanks or other
                    reserved symbols like ',', '.' etc.aggregate: any of - min, max,
                        sum, count, last, first etc (the same
                        as in  enumeration )
                    sort: asc or desc - the sort order of
                    the grouped items

###  Index `Int32`

Gets the index of the expression if added in a

## Methods

###  Parse

Calls GridGroupByExpression(expression)

#### Returns

`Telerik.Web.UI.GridGroupByExpression` 

###  ToString

The same as the  property

#### Returns

`System.String` the string representation of the expression.

###  IsSame

Compares the current expression against the expression set as parameter and check
            if both expressions contain field with the same name.

#### Parameters

#### expression `Telerik.Web.UI.GridGroupByExpression`

expression to check against this expression

#### Returns

`System.Boolean` true if both expressions contain field with the same name,
            otherwise false.

###  ContainsSameGroupByField

Checks if the given expression contains same Group-By field as this one.

#### Remarks
Use this function to determine if two expressions seem to produce the same set of results

#### Parameters

#### expression `Telerik.Web.UI.GridGroupByExpression`

Expression to check

#### Returns

`System.Boolean` true if the expression already contains this GroupByField, otherwise
            false.

###  CopyFrom

Copies the current  from another .

#### Parameters

#### expression `Telerik.Web.UI.GridGroupByExpression`

The  to be coppied from.

#### Returns

`System.Void` 

