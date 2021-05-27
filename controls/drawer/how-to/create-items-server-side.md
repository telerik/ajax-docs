---
title: Create Drawer items server-side
page_title: Create Drawer items server-side - RadDrawer
description: Check our Web Forms article about How to create RadDrawer items server-side.
slug: drawer/how-to/create-items-server-side
tags: how,to,items,server,server-side,raddrawer,drawer
published: True
position: 1
---

# Create Drawer items server-side

The Drawer renders its items client-side based on the [ItemsTemplate]({%slug drawer/functionality/templates %}#items-template). The code below shows how you can abstract the string formatting and just create custom objects which you can pass to the method and receive a fully functionaly `ItemsTemplate`:

````C#
public class MyDrawerItem
{
    public string Text { get; set; }
    public bool IsSelected { get; set; }
    public bool IsSeparator { get; set; }
}

public string itemTemplate = "<li data-role='drawer-item' {1}><span class='k-item-text'>{0}</span></li>";
public string selectedItemClass = "class='k-state-selected'";
public string separatorTemplate = "<li data-role='drawer-separator'></li>";

public string GetItems(IEnumerable<MyDrawerItem> items)
{
    StringBuilder str = new StringBuilder("<ul>");
    foreach (var item in items)
    {
        var itemContent = item.IsSeparator ? separatorTemplate :
            string.Format(itemTemplate, item.Text, item.IsSelected ? selectedItemClass : string.Empty);
        str.Append(itemContent);
    }
    str.Append("</ul>");
    return str.ToString();
}

protected void Page_Load(object sender, EventArgs e)
{

    var data = new List<MyDrawerItem>()
    {
        new MyDrawerItem(){ Text = "Item 1"},
        new MyDrawerItem(){ Text = "Item 2"},
        new MyDrawerItem(){ IsSeparator = true },
        new MyDrawerItem(){ Text = "Item 3", IsSelected=true},
        new MyDrawerItem(){ Text = "Item 4"},
        new MyDrawerItem(){ IsSeparator = true },
        new MyDrawerItem(){ Text = "Item 5"},
        new MyDrawerItem(){ Text = "Item 6"},
        new MyDrawerItem(){ Text = "Item 7"},
        new MyDrawerItem(){ IsSeparator = true },
        new MyDrawerItem(){ Text = "Item 8"},
        new MyDrawerItem(){ Text = "Item 9"},
        new MyDrawerItem(){ Text = "Item 10"},
    };

    RadDrawer1.ItemsTemplate = GetItems(data);
}
````


# See Also

* [RadDrawer templates]({%slug drawer/functionality/templates %})
 

 
