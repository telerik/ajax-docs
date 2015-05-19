---
title: Load On Demand
page_title: Load On Demand | RadOrgChart for ASP.NET AJAX Documentation
description: Load On Demand
slug: orgchart/functionality/load-on-demand
tags: load,on,demand
published: True
position: 0
---

# Load On Demand



## 

The **Load-On-Demand** feature of RadOrgChart allows child **Nodes** or **Groups** to be loaded on the fly as parent nodes are expanded. This way on page load children of the collapsed Nodes or Groups will not be rendered and when a user expands a Node or Group its child elements will be loaded with callbacks.

**Properties:**

If you want to start using Load on Demand you should set the **"LoadOnDemand"** enum property of the RadOrgChart control to one of the following values:

1. **“None”**
	* Default value

2. **“Nodes”**
	* allows the user to load **Nodes** on demand
	* **EnableCollapsing** property is automatically set to **true**

3. **“Groups”**
	* allows the user to load **GroupItems** on demand
	* **EnableGroupCollapsing** property is automatically set to **true** (in SimpleBinding there are no Groups, so it is not applicable)

4. **“NodesAndGroups”**
	* allows the user to load **Nodes** and **GroupItems** on demand
	* **EnableCollapsing** and **EnableGroupCollapsing** properties are automatically set to true (in SimpleBinding there are no Groups, so only Nodes can be loaded)

**Binding:**

On the initial page load all **Nodes** and **GroupItems** of the RadOrgChart are bound. On every callback the RadOrgChart is rebound as well.
