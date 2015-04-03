---
title: Load On Demand
page_title: Load On Demand | UI for ASP.NET AJAX Documentation
description: Load On Demand
slug: orgchart/functionality/load-on-demand
tags: load,on,demand
published: True
position: 0
---

# Load On Demand



## 

The __Load-On-Demand__ feature of RadOrgChart allows child __Nodes__ or __Groups__ to be loaded on the fly as parent nodes are expanded. This way on page load children of the collapsed Nodes or Groups will not be rendered and when a user expands a Node or Group its child elements will be loaded with callbacks.

__Properties:__

If you want to start using Load on Demand you should set the __"LoadOnDemand"__enum property of the RadOrgChart control to one of the following values:

1. __“None”__

* Default value

1. __“Nodes”__

* allows the user to load__Nodes__ on demand

* __EnableCollapsing__ property is automatically set to __true__

1. __“Groups”__

* allows the user to load__GroupItems__ on demand

* __EnableGroupCollapsing__ property is automatically set to__true__ (in SimpleBinding there are no Groups, so it is not applicable)

1. __“NodesAndGroups”__

* allows the user to load__Nodes__ and__GroupItems__ on demand

* __EnableCollapsing__ and__EnableGroupCollapsing__ properties are automatically set to true (in SimpleBinding there are no Groups, so only Nodes can be loaded)

__Binding:__

On the initial page load all__Nodes__ and__GroupItems__ of the RadOrgChart are bound. On every callback the RadOrgChart is rebound as well.
