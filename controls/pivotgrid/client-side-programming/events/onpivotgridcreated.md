---
title: OnPivotGridCreated
page_title: OnPivotGridCreated | RadPivotGrid for ASP.NET AJAX Documentation
description: OnPivotGridCreated
slug: pivotgrid/client-side-programming/events/onpivotgridcreated
tags: onpivotgridcreated
published: True
position: 2
---

# OnPivotGridCreated



This event is fired when the RadPivotGrid client component is initialized.

## 


>caption  

|  **Fired by**  | RadPivotGrid |
| ------ | ------ |
| **Arguments** |none|
| **Can be canceled** |No|

Example:

````JavaScript
<script type="text/javascript">
	function pivotGridCreated(sender, eventArgs) {
		alert("Created pivot grid with id: " + sender.get_id());
	}
</script>
````


