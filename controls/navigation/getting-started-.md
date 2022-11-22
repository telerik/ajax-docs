---
title: Getting Started 
page_title: Getting Started - RadNavigation
description: Check our Web Forms article about Getting Started.
slug: navigation/getting-started-
tags: getting,started,
published: True
position: 1
---

# Getting Started with the Telerik WebForms Navigation


## 

The following tutorial demonstrates how you can add **RadNavigation** bound to SqlDataSource control with three steps. The end result will be similar to **Figure 1**:
>caption Figure 1: RadNavigation bound to SqlDataSourcecontrol

![navigation-gettingstarted](images/navigation-gettingstarted.png "navigation-gettingstarted")

1. Add a **ScriptManager** control on a Web Form.

1. Add a **RadNavigation** control on the Web Form:**Example 1**: Basic declaration of a **RadNavigation** control:

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager2" runat="server"></telerik:RadScriptManager>
<telerik:RadNavigation runat="server" ID="RadNavigation1"></telerik:RadNavigation>
````

1. Use the SmartTag of the **RadNavigation** to assign SqlDataSource:![navigation-gettingstarted 1](images/navigation-gettingstarted1.png)

1. Use the Data Source Configuration Wizard to assign the DataSource and the preferable fields:![navigation-gettingstarted 2](images/navigation-gettingstarted2.png)

1. Assign the fields from the DataSource to the corresponding properties of the RadNavigation:![navigation-gettingstarted 3](images/navigation-gettingstarted3.png)
