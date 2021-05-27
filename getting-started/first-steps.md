---
title: First Steps
page_title: First Steps with UI for ASP.NET AJAX
description: "A step-by-step tutorial teaching how to use the Telerik UI controls for ASP.NET AJAX in Web Forms applications."
slug: getting-started/first-steps
tags: get,started,first,steps
published: True
position: 1
---

# First Steps with UI for ASP.NET AJAX

In this article, we demonstrate the steps to create a Web Forms application that uses Telerik UI for ASP.NET AJAX components. You will download the Telerik components, create a project, and add the [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) and [RadHtmlChart](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview) controls. As RadHtmlChart requires data binding to show its full potential, you will learn how to bind the Telerik UI controls to sample data. 

## Download the Controls

The most convenient way to get the Telerik UI for ASP.NET AJAX controls on your development machine is to download the installer file. The download steps are different when you [download the free trial version](#download-the-free-trial-version) and when you [download the commercially licensed version](#download-the-Commercially-Licensed-Version): 


### Download the Free Trial Version

The trial version of the Telerik UI for ASP.NET AJAX controls provides the same functionality as the commercially licensed version, but it displays a [copyright message](https://docs.telerik.com/devtools/aspnet-ajax/licensing/trial-license-limitations#trial-copyright-messages) on the page that uses the controls. To download the free trial: 

1. Navigate to [Telerik UI for ASP.NET AJAX](https://www.telerik.com/products/aspnet-ajax) and select **Download Free Trial**. 

1. If you aren’t logged in, log in with your Telerik account. 

>tip If you don’t have a Telerik account yet, you can create one for free.

1. Download the installer to your development machine. 

    
### Download the Commercially Licensed Version

If you have already purchased a commercial license, you can download the installer from your Telerik account: 

1. Navigate to your [Telerik account](https://www.telerik.com/account/), select the **DOWNLOADS** tab, and then select **Progress® Telerik® UI for ASP.NET AJAX**. 

1. Select **Latest public version**. 

>caption Download the Commercially Licensed Version
![Download the Commercially Licensed Version](images/getting-started-download-msi.png)


## Install Telerik UI for ASP.NET AJAX 

Run the downloaded file and follow the on-screen instructions to install the controls. For step-by-step instructions, see [Installing the Telerik Controls from MSI File](https://docs.telerik.com/devtools/aspnet-ajax/installation/installing-the-telerik-controls-from-msi-file). 

In this tutorial, we recommend using the MSI to get the Telerik controls, but there are various other ways. See [Which File Do I Need to Install](https://docs.telerik.com/devtools/aspnet-ajax/installation/which-file-do-i-need-to-install) for a list with all distribution methods.  


## Create a New Project

The **Telerik UI for ASP.NET AJAX suite** is integrated with our **Telerik ASP.NET AJAX Visual Studio Extensions**, which allow you to create a pre-configured Telerik UI for ASP.NET AJAX project quickly after the controls are installed. You can use the Create New Project Wizard like follows: 

1. Open Visual Studio 

1. Open the ""New Project" dialog ( from the top menu select *File -> New -> Project*) 

1. In the Search box type **Telerik** 

>tip If the **Telerik** option is no available make sure to install the [Telerik ASP.NET AJAX VSX Extension](https://marketplace.visualstudio.com/items?itemName=TelerikInc.TelerikASPNETAJAXVSExtensions) from the VS marketplace. 

1. Select the preferred project type click the Next button. For the next samples we will create a project of type **Telerik Web Forms Site**.

1. Chose a name and location for the new project. 

1. In the opened **Create New Project Wizard** choose to create a Blank project. 

1. Click the **Finish** button. 

1. Continue with the next section from this tutorial or see the [Adding the Telerik Controls to Your Project](https://docs.telerik.com/devtools/aspnet-ajax/general-information/adding-the-telerik-controls-to-your-project) help article.

>caption Create a new project
![Create a new project](images/getting-started-project-wizard.gif)

Detailed version of the steps above in the [Create Project](https://docs.telerik.com/devtools/aspnet-ajax/general-information/integration-with-visual-studio/visual-studio-extensions/creation-and-configuration-wizard) help article.  


## Add RadEditor to the Application

The Web Forms Site created through the Create New Project Wizard in the section above creates all basic references and registrations required by the Telerik UI for ASP.NET AJAX controls. You can add a Telerik control on the page with two simple steps: 

1. Add a **ScriptManager** control on a Web Form page. 

```ASPX
<telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>
```

1. Add a **[RadEditor](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx)** control to the page, and set the desired [properties](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/server-side-programming/overview), like ID, RenderMode, Content, etc.: 

```ASPX
<telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>

<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight">
    <Content>             
        Congratulations! You have the Telerik UI for ASP.NET controls running in your project!         
    </Content>
</telerik:RadEditor>
```

1. **Run the page** in the browser by pressing F5. You should see something like this: 

>caption Add RadEditor to a page
![Add RadEditor to a page](images/getting-started-editor.png)

>tip You can also drag a control directly from the VS Toolbox. If you do not see the controls in the toolbox, examine the Adding the [Telerik Controls to the Visual Studio Toolbox](https://docs.telerik.com/devtools/aspnet-ajax/general-information/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox) article. 


## Add RadHtmlChart to the Project

Let’s dive a little bit deeper in the configuration of the controls from the UI for ASP.NET AJAX suite. Following the steps below you will be able to create a bound RadHtmlChart, using the values from a custom data field into a custom tooltip template. We will use a simple DataTable for this sample, but you can bind RadHtmlChart to the [preferred data source type](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/data-binding/overview). 

1. Add a **ScriptManager** control on a Web Form page. 

```ASPX
<telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>
```

1. Define a **RadHtmlChart** with `ID="RadHtmlChart1"`

```ASPX
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server"> 
</telerik:RadHtmlChart>
```

1. Add a `ChartTitle` to the created **RadHtmlChart**

```ASPX
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server"> 
    <ChartTitle Text="Sales Log"></ChartTitle> 
</telerik:RadHtmlChart>
```

1. Add a `ColumnSeries` to the `PlotArea.Series` collection of the control: 
```ASPX
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server"> 
    <ChartTitle Text="Sales Log"></ChartTitle> 
    <PlotArea> 
        <Series> 
            <telerik:ColumnSeries Name=" Cloth?s"></telerik:ColumnSeries> 
        </Series> 
    </PlotArea> 
</telerik:RadHtmlChart>
```

1. In the code-behind of the page create a `GetData()` method, returning the data that will be bound to the chart: 

```C#
private DataTable GetData() 
    { 
        DataTable dt = new DataTable(); 

        dt.Columns.Add("labels"); 
        dt.Columns.Add("values"); 
        dt.Columns.Add("colors"); 
        dt.Columns.Add("description"); 
        
        dt.Rows.Add("Week 1", 3, "#99C794", " 1 blouse and 2 trousers"); 
        dt.Rows.Add("Week 2", 10, "#5FB3B3", "7 blouses and 3 skirts"); 
        dt.Rows.Add("Week 3", 7, "#FAC863", "7 skirts"); 
        dt.Rows.Add("Week 4", 12, "#6699CC", "5 blouses, 5 trousers and 2 skirts"); 

        return dt; 
    }
```
```VB
Private Function GetData() As DataTable 
    Dim dt As DataTable = New DataTable() 

    dt.Columns.Add("labels") 
    dt.Columns.Add("values") 
    dt.Columns.Add("colors") 
    dt.Columns.Add("description") 
    
    dt.Rows.Add("Week 1", 3, "#99C794", " 1 blouse and 2 trousers") 
    dt.Rows.Add("Week 2", 10, "#5FB3B3", "7 blouses and 3 skirts") 
    dt.Rows.Add("Week 3", 7, "#FAC863", "7 skirts") 
    dt.Rows.Add("Week 4", 12, "#6699CC", "5 blouses, 5 trousers and 2 skirts") 

    Return dt 
End Function
```

1. Configure the data source of the chart with the created sample data: 

```C#
protected void Page_Load(object sender, EventArgs e) 
{ 
    if (!IsPostBac1k) 
    { 
        RadHtmlChart1.DataSource = GetData(); 
    } 
}
```
```VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load 
    If Not IsPostBack Then 
        RadHtmlChart1.DataSource = GetData() 
    End If 
End Sub
```

1. Set the **colors** and **values** field names to the Series `DataFieldY` and `ColorField` proeprties: 

```ASPX
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server"> 
    <ChartTitle Text="Sales Log"></ChartTitle> 
    <PlotArea> 
        <Series> 
            <telerik:ColumnSeries Name="Cloth?s" DataFieldY="values" ColorField="colors"></telerik:ColumnSeries> 
        </Series> 
    </PlotArea> 
</telerik:RadHtmlChart>
```

1. Set the **labels** field name to the `PlotArea.XAxis.DataLabelsField` value

```ASPX
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server"> 
    <ChartTitle Text="Sales Log"></ChartTitle> 
    <PlotArea> 
        <Series> 
            <telerik:ColumnSeries Name="Cloth?s" DataFieldY="values" ColorField="colors"></telerik:ColumnSeries> 
        </Series> 
        <XAxis DataLabelsField="labels"></XAxis> 
    </PlotArea> 
</telerik:RadHtmlChart>
```

1. Define a `TooltipsAppearance` nested tag in the series declaration and define a custom Tooltip template in it. All fields from the passed datasource are available through the `dataItem` object of the template. 

```ASPX
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server"> 
    <ChartTitle Text="Sales Log"></ChartTitle> 
    <PlotArea> 
        <Series> 
            <telerik:ColumnSeries Name="Cloth?s" DataFieldY="values" ColorField="colors"> 
                <TooltipsAppearance> 
                    <ClientTemplate> 
                        There are #=dataItem.description# sold in #=category# 
                    </ClientTemplate> 
                </TooltipsAppearance> 
            </telerik:ColumnSeries> 
        </Series> 
        <XAxis DataLabelsField="labels"></XAxis> 
    </PlotArea> 
</telerik:RadHtmlChart>
```

1. **Run the page** in the browser by pressing F5. You should see something like this: 

>caption Bound RadHtmlChart with custom Tooltip template
![Bound RadHtmlChart with custom Tooltip template](images/getting-started-htmlchart.png)


## Apply New Skin to the Controls

Each control from the UI for ASP.NET AJAX has more than [20 predefined skins](https://docs.telerik.com/devtools/aspnet-ajax/general-information/controlling-visual-appearance/how-skins-work#built-in-skins). Setting the desired skin name as a value of the `Skin` property of a control will allow you to change its whole look and feel: 

```ASPX
<telerik:RadEditor runat="server" ID="RadEditor1" Skin="Glow" RenderMode="Lightweight">
    <Content>             
        Congratulations! You have the Telerik UI for ASP.NET controls running in your project!     
    </Content> 
</telerik:RadEditor>
```

>caption Apply Glow Skin to RadEditor
![Apply Glow Skin to RadEditor](images/getting-started-editor.png)

## Resources

* [Github – download MyFirstTelerikSite project ](https://github.com/telerik/aspnet-sdk/tree/master/Common/MyFirstTelerikSite)

* [Adding the Telerik Controls to Your Project](https://docs.telerik.com/devtools/aspnet-ajax/general-information/adding-the-telerik-controls-to-your-project)  

* [Change Control Appearance ](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/change-control-appearance)



