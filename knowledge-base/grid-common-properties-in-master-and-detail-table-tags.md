---
title: Common properties in RadGrid, MasterTable and DetailTable tags
description: Common properties in RadGrid, MasterTable and DetailTable tags
type: how-to
page_title: Common properties in RadGrid, MasterTable and DetailTable tags - RadGrid
slug: grid-common-properties-in-master-and-detail-table-tags
res_type: kb
---


## DESCRIPTION

There are some properties that exist in RadGrid, MasterTable and GridTableView (DetailTable) tags. Which one to use and when?

## SOLUTION

The principle is this – the **RadGrid** tag is the common place to set properties which are inherited by inner levels. If a property with the same exists in multiple levels, the property from the innermost level is in effect.

For instance, with a hierarchy and paging enabled:

1. **RadGrid** tag is setting **PageSize = “7”**, all inner tables will now have **PageSize 7**.

2. We change the **MasterTableView** tag to set **PageSize = “5”**, the main table level now shows 5 records, while inner tables remain with 7

3. **GridTableView** has now **PageSize = “3”**. The table corresponding to this level will show 3 records per page, while main level will show 5 and any other level: 7.
 
