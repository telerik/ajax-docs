---
title: Filtering Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listview/fuctionality/filtering/overview
tags: overview
published: True
position: 0
---

# Filtering Overview



## 

RadListView for ASP.NET AJAX features integrated filtering capabilities. Filtering is achieved through the definition of filter expressions which should consequently be added to the __FilterExpressions__ collection of the control.

Each filter function has a corresponding type that should be used for the construction of the filter expression. If, for example, a filter expression with a *GreaterThan* logical operator is to be defined, the *RadListViewGreaterThanFilterExpression* type is there to help you build the expression. The same goes for all the other filter operators (functions).

## Building filter expressions

The filter expressions can be added to RadListView's FilterExpressions collection in several ways:

* Creating instances of the new filter expressions and adding them to the __FilterExpressions__ collection.

	
              RadListView1.FilterExpressions.Add( new RadListViewGreaterThanFilterExpression<DateTime>("ShippedDate"){CurrentValue
              = DateTime.Parse("7/10/1996")} ); RadListView1.FilterExpressions.Add( new RadListViewEqualToFilterExpression<int>("OrderID"){CurrentValue
              = 42} );
            



* Using the __fluent expression builder__ object which can be used to build the expressions in a more stream-lined manner. With this approach you need to remember to call the Build() method upon the expression once it is declared.

	
              RadListView1.FilterExpressions.BuildExpression() .GreaterThan("ShippedDate",
              DateTime.Parse("7/10/1996")) .Or().EqualTo("OrderID", 42).Build();
            



* The last and most consise way is provided by an overload of the FilterExpressions collection BuildExpression method which takes in as an argument an Action delegate.

	
              RadListView1.FilterExpressions.BuildExpression(expression => expression .GreaterThan("ShippedDate",
              DateTime.Parse("7/10/1996")) .Or().EqualTo("OrderID", 42) ) );
            



More information on the APIs used for these ways of filtering and some code samples can be found [here]({%slug listview/fuctionality/filtering/operating-with-radlistview-filterexpressions-manually%}).

## Grouping the filter expressions

One of RadListView's most powerful filtering features is the easy way to tie several filter expressions into one group and treat it as a single expression that can participate in further logcial operations. Again a dedicated type is provided out-of-the-box to help you in this regard - the __RadListViewGroupFilterExpression__. It can be used in all of the above ways to construct filter expressions and add them to the __FilterExpressions__ collection of the RadListView control. The sample filter expressions above can be extended with the group feature as follows:

	
          RadListView1.FilterExpressions .BuildExpression(expression => expression .GreaterThan("ShippedDate",
          DateTime.Parse("7/10/1996")) .Or().EqualTo("OrderID", 42) .And().Group(group =>
          group.IsNotEmpty("ShipCountry") .And().Contains("ShipCountry", "G") ) );
        



Again further information can be found [here]({%slug listview/fuctionality/filtering/operating-with-radlistview-filterexpressions-manually%}).

## Filtering with RadFilter

The above functionalities can also be achieved without manually building the filter expression. __RadFilter__ control which provides UI and back-end for building complex filtering criteria. In most cases it is enough to assign the ID of RadListView to the __FilteredControlID__ property of the RadFilter and you are ready to go. This is demonstrated in the following online demo:

[ListView / Filtering with RadFilter](http://demos.telerik.com/aspnet-ajax/filter/examples/firstlook/defaultcs.aspx?product=listview)

For more custom scenarios (like applying expressions on custom actions, building expressions through the filter APIs, etc.) the __FireApplyCommand(__) method along with the __OnApplyExpressions__ event are used. RadFilter has a query provider written to produce filter queries specifically for the RadListView control - __RadFilterListViewQueryProvider__. You can use it to extract the built custom expression and assign it to RadListView. You can see a code sample on using the provider in the following help article:

[RadListView Filtering with RadFilter](http://www.telerik.com/help/aspnet-ajax/filter-listview-filtering.html)
