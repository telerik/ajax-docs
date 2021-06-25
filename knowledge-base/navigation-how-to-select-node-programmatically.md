---
title: How to select RadNavigation node programmatically
description: How to select RadNavigation node programmatically. Check it now!
type: how-to
page_title: How to select RadNavigation node programmatically
slug: navigation-how-to-select-node-programmatically
res_type: kb
---

## How to

Expand a node in RadNavigation recursively.

You can use this approach to pre-select a node in the hierarchy, for example, when the control loads or when another event occurs.

## Solution

You need to use the client-side API of the [navigation control]({%slug navigation/client-side-programming/objects/radnavigation-object%})and of the [node]({%slug navigation/client-side-programming/objects/navigationnode-object%}) to collect all its parents, so you can traverse and expand them. You must also add a check whether the node is in the hamburger menu to ensure it will be expanded as well (this can be done with a DOM traversal). Then, an interval with the length of the expand animation is needed to expand all nodes.

Here is an example with detailed comments, and a second example below shows how you can trigger this logic on a certain event, like the click of the hamburger menu:

````ASPX
<telerik:RadNavigation runat="server" ID="RadNavigation4" DataSourceID="ObjectDataSource1" DataTextField="Text"
    DataFieldID="ID" DataFieldParentID="ParentID" EnableRoundedCorners="true"
    EnableShadows="true" EnableTextHTMLEncoding="true" RenderMode="Lightweight" OnClientLoad="OnClientLoad">
</telerik:RadNavigation>
<script>
    function OnClientLoad(sender, args) {
        sender.set_minWidth(2000);//makes sure only the hamburger menu is used on most screens. This is not required, just showcases a use case
 
        setTimeout(function () {
            var nodeText = "BBC";//choose the text of the node you want to expand to
            nodesToExpand.unshift(nodeText);//add the desired node at the end of the array so it can get selected at the end
            collectNodesToExpand(nodeText, sender);//a sample node text is hardcoded here as an example
        }, 0);//a timeout is needed for the calculations from set_minWidth() to take place and for the other code on the page to initialize
    }
 
    var nodesToExpand = [];
    var interval = null;
 
    function collectNodesToExpand(nodeText, navigation) {
        var node = navigation.findNodeByText(nodeText);
        if (node) {
            var parent = node.get_parent();
            if (parent === navigation) {
                //once the navigation is reached, we have the full list of nodes we need to expand, so we can start expanding them
                reverseExpandNodes(navigation);
            }
            else if (Telerik.Web.UI.NavigationNode.isInstanceOfType(parent)) {
                nodesToExpand.unshift(parent.get_text());
                //check if the node is in the hamburger menu by traversing the DOM, if so, expand the hamburger menu
                if ($telerik.$(node.get_element()).parents(".rnvMorePopup").length > 0) {
                    navigation.expandMenuButton();
                }
                //continue collecting nodes recursively to travel up the node hierarchy, ultimately reaching the navigation
                collectNodesToExpand(parent.get_text(), navigation);
            }
        }
    }
 
    function reverseExpandNodes(navigation) {
        interval = setInterval(function () {
            //loop the node hierarchy starting from the topmost node
            var node = navigation.findNodeByText(nodesToExpand.shift());
            if (nodesToExpand.length == 0) {
                node.set_selected(true);//select the last node to provide visual cue (instead of expand)
                //when nodes end, stop the loop
                clearInterval(interval);
                return;
            }
            //expand the node
            node.expand();
        }, navigation.get_expandAnimation().get_duration());//an interval with the duration of the animation is used because callbacks or promises are not available out-of-the-box
    }
</script>
<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetSiteData"
    TypeName="SiteDataItem"></asp:ObjectDataSource>
````

How to expand node on a particular event in your code. This example hooks to the click (mousedown) of the hamurger menu so that it expands to a certain node only when the user expands all nodes:

````JavaScript
function OnClientLoad(sender, args) {
    sender.set_minWidth(2000);//makes sure only the hamburger menu is used on most screens. This is not required, just showcases a use case
    $telerik.$(sender.get_element()).on("mousedown", ".rnvMore", function () { //hook to the hamburger menu click
        setTimeout(function () {
            var nodeText = "BBC";//choose the text of the node you want to expand to
            nodesToExpand.unshift(nodeText);//add the desired node at the end of the array so it can get selected at the end
            collectNodesToExpand(nodeText, sender);//a sample node text is hardcoded here as an example
        }, sender.get_expandAnimation().get_duration());
    });
}
````

and some sample data for the Object Data Source

````C#
public class SiteDataItem
{
    private string _text;
    private string _url;
    private int _id;
    private int? _parentId;
 
    public string Text
    {
        get
        {
            return _text;
        }
        set
        {
            _text = value;
        }
    }
 
    public string Url
    {
        get
        {
            return _url;
        }
        set
        {
            _url = value;
        }
    }
    public int ID
    {
        get
        {
            return _id;
        }
        set
        {
            _id = value;
        }
    }
    public int? ParentID
    {
        get
        {
            return _parentId;
        }
        set
        {
            _parentId = value;
        }
    }
    public SiteDataItem(int id, int? parentId, string text, string url)
    {
        _id = id;
        _parentId = parentId;
        _text = text;
        _url = url;
    }
 
    public static List<SiteDataItem> GetSiteData()
    {
        List<SiteDataItem> siteData = new List<SiteDataItem>();
        siteData.Add(new SiteDataItem(1, null, "All Sites", ""));
        siteData.Add(new SiteDataItem(10, null, "Some Long Node Name", ""));
        siteData.Add(new SiteDataItem(11, 10, "Another Very Long Name", ""));
        siteData.Add(new SiteDataItem(12, 11, "Third Long Name", ""));
        siteData.Add(new SiteDataItem(2, 1, "Search Engines", ""));
        siteData.Add(new SiteDataItem(3, 1, "News Sites", ""));
        siteData.Add(new SiteDataItem(4, 2, "Yahoo", "http://www.yahoo.com"));
        siteData.Add(new SiteDataItem(5, 2, "MSN", "http://www.msn.com"));
        siteData.Add(new SiteDataItem(6, 2, "Google", "http://www.google.com"));
        siteData.Add(new SiteDataItem(7, 3, "CNN", "http://www.cnn.com"));
        siteData.Add(new SiteDataItem(8, 3, "BBC", "http://www.bbc.co.uk"));
        siteData.Add(new SiteDataItem(9, 3, "FOX", "http://www.foxnews.com"));
        return siteData;
    }
}
````
 
 