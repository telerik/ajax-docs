---
title: Overview
page_title: Design Time Overview | RadHtmlChart for ASP.NET AJAX Documentation
description: Overview
slug: htmlchart/design-time/overview
tags: overview
published: True
position: 0
---

# Design Time Overview

**RadHtmlChart** offers design-time support as of **Q2 2012 SP2**. The	advanced features are accessed through the **Smart Tag** of the control	by clicking on the [Open Configuration Wizard]({%slug htmlchart/design-time/configuration-wizard%}) link shown in **Figure 1** between the **Layout** and **Ajax Resources** sections.

As of Q2 2015 we have improved the smart tags of our controls by displaying the most popular control specific properties and adding links to their important online resources:

>caption Figure 1: The Smart Tag shown in the top right corner of the RadHtmlChart lets you do some quick RadHtmlChart tasks such as choose a data source, change the width and height, open the Configuration Wizard, add Ajax resources, choose a skin for your RadHtmlChart, or jump to the learning center.

![htmlchart-design-time-overview](images/htmlchart-design-time-overview.png)

The basic functionality is similar to what other Telerik controls offer, starting with data binding because **RadHtmlChart** is a [data-bound]({%slug htmlchart/data-binding/sqldatasource%}) control:

* choose and configure a data source
* modify layout properties
* add AJAX resources
* choose a skin
* check online learning resources

## Choose a Data Source for a RadHtmlChart

The Smart Tag of **RadHtmlChart** begins with the data source configuration (**Figure2**). You can either choose an already existing declarative data source from the list, or add a new one.

>caption Figure 2: You can use the Data Source Configuration Wizard to set a data source for a RadHtmlChart.

![htmlchart-design-time-create-datasource](images/htmlchart-design-time-create-datasource.png)

The second option (**Figure 3**) is to configure the data source, regardless of whether it was just added or already exists.This is done either through the chart's Smart Tag (the **Configure Data Source** option) or through the Smart Tag of the data source itself.

>caption Figure 3: Configure a data source in the design environment by clicking the RadHtmlChart Smart Tag and then select Configure Data Source.

![htmlchart-configure-datasource](images/htmlchart-configure-datasource.png)

## Change RadHtmlChart Height and Width

The Layout section of the Configuration Wizard lets you change the height and width of **RadHtmlChart**.

## Add Ajax Resources

You can add Ajax resources (**Figure 1**) to your **RadHtmlChart** by clicking the Smart Tag while in the design view.

* The **Add RadAjaxManager...** link adds a **RadAjaxManager** component to your webpage, so you can configure partial postbacks through a comfortable control.

* The **Replace ScriptManager with RadScriptManager** link replaces the default ScriptManager component that is used for AJAX-enabled websites with **RadScriptManager**. If there isn't a ScriptManager on the page this link will allow you to add one.

* The **AddRadStyleSheetManager** link adds a **RadStyleSheetManager** to your web page.

## Choose the Skin for Your RadHtmlChart

You can change the skin that your **RadHtmlChart** displays by clicking the Smart Tag and using the Configuration Wizard (**Figure 1**) to select from a list of skins. The **Skin** dropdown lists all available skins for the control so you can select one that matches the look and feel of the rest of the page. The skins are displayed via small images to give you a better idea of the color scheme they use.

## Use the RadHtmlChart Learning Center

**RadHtmlChart** provides a section of the Configuration Wizard that lets you jump to online examples and the code library. The last section of the Smart Tag (**Figure 1**) provides several links that let you navigate to these **RadHtmlChart** online resources. You can also search the Telerik web site for a given string.

## See Also

 * [SqlDataSource]({%slug htmlchart/data-binding/sqldatasource%})
 
 * [RadAjaxManager Overview]({%slug ajaxmanager/overview%})

 * [RadHtmlChart Data Binding to a SqlDataSource](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/database/defaultcs.aspx)
