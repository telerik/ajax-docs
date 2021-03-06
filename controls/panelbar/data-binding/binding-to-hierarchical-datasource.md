---
title: Binding to Hierarchical DataSource
page_title: Binding to Hierarchical DataSource - RadPanelBar
description: Check our Web Forms article about Binding to Hierarchical DataSource.
slug: panelbar/data-binding/binding-to-hierarchical-datasource
tags: binding,to,hierarchical,datasource
published: True
position: 4
---

# Binding to Hierarchical DataSource



Some data sources are inherently hierarchical. These include **SiteMapDataSource** and **XmlDataSource**. When data-bound to these types of data sources, **RadPanelBar** automatically creates the panel item hierarchy. There is no need to use the **DataFieldID** and **DataFieldParentID** properties.

## Binding to SiteMapDataSource

When binding to **SiteMapDataSource**, there is no need to set any properties to map fields from the data source to properties of the panel items. This is because site maps have a strictly defined structure.

The **SiteMapDataSource** control defines the structure of your Web site. You can have only one sitemap per site. By default the **SiteMapDataSource** control uses the default Site Navigation Provider. This provider lets you define the structure of your site, separating the real page structure of the site on one hand, and the UI presentation on the other.

The default site navigation provider is XML-based. It should stay in the root level of your project and should be named **web.sitemap**. Using the Site Navigation API provided in ASP.NET v2.0, you can write your own Site Navigation Provider and expose the navigation information from any back-end system, if needed.

## Setting the SiteMapDataSource control

Before adding the **SiteMapDataSource** control to your page, you need to add the Site Navigation Provider.

* In the Solution Explorer, choose **Add New Item**... In the templates dialog, select **Site Map**:![New SiteMap](images/panelbar_newsitemap.png)

* Click the Add button. Visual Studio generates the web.sitemap file with the initial code:

````XML
	    
<?xml version="1.0" encoding="utf-8" ?>
<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0" >
  <siteMapNode url="" title=""  description="">
      <siteMapNode url="" title=""  description="" />
      <siteMapNode url="" title=""  description="" />
  </siteMapNode>
</siteMap> 

````



* Populate the Web.sitemap file. Here is an example:

````XML

<?xml version="1.0" encoding= "utf-8" ?>
<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0" >
<siteMapNode url="https://www.telerik.com" title="Telerik" description="Telerik home page">
<siteMapNode url="https://www.telerik.com/radcontrols" title="Telerik RadControls for ASP.NET" description ="Telerik RadControls for ASP.NET" >
<siteMapNode url="https://www.telerik.com/radeditor" title="Telerik RadEditor" description="Telerik RadEditor control"/>
</siteMapNode>
<siteMapNode url="https://www.telerik.com/radnavigation" title="Telerik RadNavigation controls" description ="Telerik RadNavigation controls" />
</siteMapNode>
</siteMap>  

````

>caution The url must be unique for each node. Avoid using backslashes (`\`) for your URLs. Backslashes may cause problems with some browsers. Instead, we use the slash character (`/`).
>


* Drag a **SiteMapDataSource** instance from the Toolbox to your Web page.

* Set the **ShowStartingNode** property of the **SiteMapDataSource** component to **False**. This allows you to use multiple panel items at the root level.

## Binding the SiteMapDataSource to Telerik RadPanelBar

1. From the **RadPanelBar** property pane, set the **DataSourceID** to the **ID** of the **SiteMapDataSource** control.

2. Each **siteMapNode** has three attributes which are mapped automatically to the respective properties:
	* **url** - Maps to the **NavigateUrl** property. The path can be either relative (using the ~/), or absolute.
	* **title** - Maps to the **Text** property.
	* **description** - Maps to the **ToolTip** property.

3. To set additional properties or overwrite already populated fields, use the **ItemDataBound** event. The example below overwrites the **TooTip** property with the Text value of the item and sets the **Value** property to a concatenated string of [Text] + "_Value". 



````C#
	     
protected void RadPanelBar1_ItemDataBound( object sender, Telerik.Web.UI.RadPanelBarEventArgs e)
{ 
    e.Item.ToolTip = (string )DataBinder.Eval(e.Item.DataItem, "title"); 
    e.Item.Value = (string)DataBinder.Eval(e.Item.DataItem, "title") + "_Value";
}
				
````
````VB.NET
	
Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadPanelBarEventArgs)
    e.Item.ToolTip = CStr(DataBinder.Eval(e.Item.DataItem, "title"))
    e.Item.Value = CStr(DataBinder.Eval(e.Item.DataItem, "title")) + "_Value"
End Sub
	
````


## Binding to XmlDataSource

When binding to an **XmlDataSource**, **RadPanelBar** creates the panel item hierarchy automatically. However, unlike **SiteMapDataSource**, properties such as **Text** and **NavigateUrl** are **not** automatically populated.

Consider the following example:

* Add the following xml file in the App_Data folder:

````XML
<?xml version="1.0" encoding= "utf-8" ?>
<Items Text="">
<Item Text="European cities" Url="" >
  <Item Text="Sofia" Url="https://en.wikipedia.org/wiki/Sofia" />
  <Item Text="Berlin" Url="https://en.wikipedia.org/wiki/Berlin" />
  <Item Text="Paris" Url="https://en.wikipedia.org/wiki/Paris" />
</Item>
<Item Text="North American cities" Url="">
  <Item Text="Boston" Url="https://en.wikipedia.org/wiki/Boston" />
  <Item Text="San Francisco" Url="https://en.wikipedia.org/wiki/San_Francisco" />
  <Item Text="Seattle" Url="https://en.wikipedia.org/wiki/Seattle" />
  <Item Text="Toronto" Url="https://en.wikipedia.org/wiki/Toronto" />
</Item>
<Item Text="South American cities" Url="">
  <Item Text="Rio de Janeiro" Url="https://en.wikipedia.org/wiki/Rio_De_Janeiro" />
  <Item Text="Buenos Aires" Url="https://en.wikipedia.org/wiki/Buenos_aires" />
</Item>
<Item Text="Asian cities" Url="">
  <Item Text="Tokyo" Url="https://en.wikipedia.org/wiki/Tokyo" />
  <Item Text="Seul" Url="https://en.wikipedia.org/wiki/Seul" />
  <Item Text="Beijing" Url="https://en.wikipedia.org/wiki/Beijing" />
  <Item Text="Tehran" Url="https://en.wikipedia.org/wiki/Teheran" />
</Item>
<Item Text="African cities" Url="">
  <Item Text="Kano" Url="https://en.wikipedia.org/wiki/Kano" />
  <Item Text="Johannesburg" Url="https://en.wikipedia.org/wiki/Johannesburg" />
  <Item Text="BeninCity" Url="https://en.wikipedia.org/wiki/Benin" />
</Item>
</Items> 
</html>
````



1. Drag an instance of **XmlDataSource** onto your Web form and configure the control:

2. Set the Data file to the XML file you just added.

3. Set the XPath expression to "/Items/Item". This removes the starting node of the XML file so that you can have multiple root-level panel items.
	![XML Data Source](images/panelbar_configurexmlsource.png)

4. Set the **DataSourceID** of your RadPanelBar to the ID of the XmlDataSource or choose the XMLDataSource from the smart tag:![Set XML Data Source](images/panelbar_setxmldatasource.gif)

5. Map the **Text**, **Value** and **NavigateUrl** fields by setting the **DataTextField**, **DataValueField** and **DataNavigateUrlField** properties:![Configure Properties](images/panelbar_setxmldatasource1.png)

>note This example has no separate field for value, so it uses the Text field for the **Value** property, for illustrative purposes.
>


* As with the SiteMapDataSource example above, you can map additional properties using the [ItemDataBound event]({%slug panelbar/server-side-programming/itemdatabound%}): 



````C#
	     
protected void RadPanelBar1_ItemDataBound( object sender, Telerik.Web.UI.RadPanelBarEventArgs e)
{  
    if (e.Item.Level > 0)
        //set tooltip only for child items   
    {                 
        XmlElement element = (XmlElement)e.Item.DataItem;     
        e.Item.ToolTip = "Read more about " + element.Attributes["Text"].Value;   
    }
}
				
````
````VB.NET
	
Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadPanelBarEventArgs) Handles RadPanelBar1.ItemDataBound

    If e.Item.Level > 0 Then

        'set tooltip only for child items       
        Dim element As XmlElement = DirectCast(e.Item.DataItem, XmlElement)
        e.Item.ToolTip = "Read more about " + element.Attributes("Text").Value
    End If
End Sub
	
````


# See Also

 * [Data Binding Overview]({%slug panelbar/data-binding/overview%})

 * [Using DataBindings]({%slug panelbar/data-binding/using-databindings%})

 * [Binding to Table-Based DataSource]({%slug panelbar/data-binding/binding-to-table-based-datasource%})

 * [Binding to DataTable]({%slug panelbar/data-binding/binding-to-datatable%})

 * [Binding to Object-Based DataSources]({%slug panelbar/data-binding/binding-to-object-based-datasources%})
