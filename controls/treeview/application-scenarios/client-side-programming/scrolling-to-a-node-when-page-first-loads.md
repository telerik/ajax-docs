---
title: Scrolling to a Node When Page First Loads
page_title: Scrolling to a Node When Page First Loads | RadTreeView for ASP.NET AJAX Documentation
description: Scrolling to a Node When Page First Loads
slug: treeview/application-scenarios/client-side-programming/scrolling-to-a-node-when-page-first-loads
tags: scrolling,to,a,node,when,page,first,loads
published: True
position: 1
---

# Scrolling to a Node When Page First Loads



## 

To scroll a node into view when the page first loads:

1. Get the client-side instance of the [RadTreeView object]({%slug treeview/client-side-programming/objects/radtreeview%}).

1. Get the selected node by using the **get_selectedNode()** client-side function of the **RadTreeView** class.

1. Make the selected node visible by using **scrollIntoView()** function of the **RadTreeNode** class.

1. Set the Height of the **RadTreeView** to make the **scrollIntoView()** method work.

>tip In the code below we are using the pageLoad() function. This is a native ASP.NET AJAX function that is automatically fired once all ASP.NET AJAX controls (including RadControls for ASP.NET AJAX) are loaded on the page. More information on the subject is available [here](http://www.asp.net/ajax/documentation/live/overview/AJAXClientEvents.aspx).
>




````ASPNET
<body>
    <form id="form2" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server" />
    <div>

        <script type="text/javascript" language="javascript">
            function pageLoad() {
                var tree = $find("<%= RadTreeView1.ClientID %>");
                var selectedNode = tree.get_selectedNode()
                if (selectedNode != null) {
                    window.setTimeout(function() { selectedNode.scrollIntoView(); }, 200);
                }
            }
        </script>

        <telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" Width="150" Height="200">
            <Nodes>
                . . . other nodes
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Selected Node"
                    Selected="true">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeView>
    </div>
    </form>
</body>
````



# See Also

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
