---
title: Collapse All Nodes on Losing Focus
page_title: Collapse All Nodes on Losing Focus | RadTreeView for ASP.NET AJAX Documentation
description: Collapse All Nodes on Losing Focus
slug: treeview/application-scenarios/client-side-programming/collapse-all-nodes-on-losing-focus
tags: collapse,all,nodes,on,losing,focus
published: True
position: 13
---

# Collapse All Nodes on Losing Focus



## 

In some cases it might be more convenient for the end user if **TreeView** Nodes automatically collapse when the user sets the focus on different control on the page.

**Example:**

1. Invoke a custom script in the **onload** attribute of the **<body>** tag on the page which holds the **TreeView**. The script should obtain the **TreeView** div object on the client and relate a client function for Nodes collapsing to its **onblur** event.

1. Collapse the expanded Nodes in the **TreeView** using the **collapse()** function from the Client API of the control.

````ASPNET
<body ms_positioning="GridLayout" onload="ProceedRequest()">
    ...

    <script language="javascript">
   function ProceedRequest()
   {
       var treeDiv = document.getElementById("<%= RadTreeView1.ClientID %>");
       treeDiv.onblur = function (){ CollapseAllNodes(); };
   }
   
   function CollapseAllNodes()
   {
       var tree = $find("<%= RadTreeView1.ClientID %>");
       var allNodes = tree.get_allNodes();
       var index;
       for (index = 0; index < allNodes.length; index++)
       {
           var node = allNodes[index];
           if(node.get_expanded())
           {
               node.collapse();
           }
       }
   }
    </script>

    ...
</body>
````



>note The **RadTreeView** control should has its **TabIndex** property set so that the **onblur** event of its **div** element fires.
>

