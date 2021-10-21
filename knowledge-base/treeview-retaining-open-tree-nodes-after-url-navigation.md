---
title: Retaining open tree-nodes after URL navigation
description: Retaining open RadTreeView nodes after URL navigation. Check it now!
type: how-to
page_title: Retaining open tree-nodes after URL navigation
slug: treeview-retaining-open-tree-nodes-after-url-navigation
res_type: kb
---

 ## HOW-TO   
Retain open tree-nodes after URL navigation  
  
## SOLUTION  

While RadTreeView retains open tree nodes after postback, it does not perist its state after URL redirect navigation (this is actually typical for all ASP.NET controls). Note, however, that you can easily make the clicked node visible by setting its **Selected** property to **True** and expanding all the parent nodes up to the root of the tree to make it visible.  
  
Here's a common scenario - all nodes have unique **Value** properties (i.e 1,2,3...). They also have unique **Href** properties pointing to one page but with different id **Get** parameter, i.e ( "?Page.aspx&id=1", "?Page.aspx&id=2" ..)  
  
In the **Page\_Load** method of the page you can get the **id **attribute from the query string, find the node in the tree and mark it as selected and expand nodes up the tree, e.g.  
  
````C#
if (Request.QueryString["id"] != null)

{

      string id = Request.QueryString["id"];

      foreach (RadTreeNode node in RadTree1.GetAllNodes())

      {

            if (node.Value == id)

            {

                  node.ExpandParentNodes();

                  node.Selected = true;

            }

      }

}
````

   