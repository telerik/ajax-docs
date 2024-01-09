---
title: Storing Large Amounts of Data in RadTreeView Node Attributes
description: Learn about the considerations and implications of storing large amounts of data in the Node.Value property or custom attributes of a RadTreeView node in RadTreeView for ASP.NET AJAX.
type: how-to
page_title: Storing Large Amounts of Data in RadTreeView Node Attributes | RadTreeView for ASP.NET AJAX | Telerik
slug: treeview-storing-large-amounts-of-data-node-attributes
tags: radtreeview, asp.net ajax, node value, custom attributes, large data, performance
res_type: kb
---

## Environment
| Product | Version |
|---------|---------|
| RadTreeView for ASP.NET AJAX | all |

## Description
I want to know how many characters can be stored in the `Node.Value` property or one of the custom attributes of a RadTreeView node in RadTreeView for ASP.NET AJAX.

## Solution
In RadTreeView for ASP.NET AJAX, the `Node.Value` property and custom attributes of a node do not have a predefined limit on the number of characters they can store. Instead, the limit is generally determined by the available memory and the overall performance considerations of your application.

However, there are some practical considerations to keep in mind:

1. **Browser Performance**: If your RadTreeView has a very large number of nodes or if the nodes have very large values, it could impact the performance in the browser. This includes slower rendering and increased memory usage.
2. **Data Transfer**: Large amounts of data in the tree nodes can increase the size of the page and the ViewState (if ViewState is not disabled), leading to longer load times.
3. **Server Performance**: The server also needs to handle this data, both when generating the page and when processing postbacks. Large amounts of data can impact server performance and memory usage.
4. **Database Considerations**: If you're storing these values in a database, the limits of the database field types will also apply.

In summary, while there is no hard-coded limit, it is important to consider the implications of storing large amounts of data in the `Node.Value` property or custom attributes in terms of performance and usability. If you find yourself needing to store very large amounts of data in a node, it might be worth re-evaluating the design or considering alternative approaches, such as loading data on demand.

For more information, you can refer to the [Load On Demand](https://docs.telerik.com/devtools/aspnet-ajax/controls/treeview/load-on-demand/overview) documentation.

## See Also
- [RadTreeView for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/treeview/overview)
