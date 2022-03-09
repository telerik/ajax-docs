---
title: First Steps with ZIP
page_title: First Steps with ZIP Installation
description: "Get started with Telerik UI for ASP.NET AJAX and learn how to install the controls from a ZIP file, and then build and run a sample application."
slug: introduction/installation/installing-the-telerik-controls-from-zip-file
previous_url: installation/installing-the-telerik-controls-from-zip-file
tags: installing, telerik, controls, from, zip, file
published: True
position: 2
---

# First Steps by Installing with a ZIP File

The Telerik UI for ASP.NET AJAX library provides an option for installing its controls by downloading and executing the ZIP file, which contains the suite.  

The ZIP file is used to manually install, upgrade, or update the suite in your web application or website. To proceed with the ZIP installation, you need to be familiar with ASP.NET, IIS, setting permissions, and creating virtual folders. Commonly, the ZIP is installed directly in `inetpub/wwwroot`.

This tutorial describes how to get up and running with Telerik UI for ASP.NET AJAX by downloading and installing the controls from the ZIP file.

* First, you will install the Telerik UI for ASP.NET AJAX library from a ZIP file and run the demos.
* Next, you'll create your ASP.NET AJAX application and add the Editor control to it.
* Then, you will dive deeper by defining the HtmlChart control and binding it to sample data.
* Finally, you will add some styling to the controls.

>tip How about a free Telerik UI onboarding course? Learn how to take advantage of the [Telerik Virtual Classroom](https://learn.telerik.com/learn).

## Prerequisites

The following prerequisites are required for accomplishing the scenario in this tutorial. For more information on the third-party tooling versions supported by Telerik UI for ASP.NET AJAX, refer to the [list with system requirements](https://www.telerik.com/aspnet-ajax/tech-sheets/system-requirements).

1. [Install Visual Studio 2019 or later](https://visualstudio.microsoft.com/downloads/).

1. [Install .NET Framework 4.5 or later](https://dotnet.microsoft.com/en-us/download).

1. [Install ASP.NET AJAX](https://docs.microsoft.com/en-us/aspnet/web-forms/videos/aspnet-ajax/how-do-i-get-started-with-aspnet-ajax) on your development or production machine. ASP.NET AJAX is available in the .NET 4.x+ installations.

1. If a new user, [create a Telerik account](https://www.telerik.com/account/).

## Step 1: Install Telerik UI for ASP.NET AJAX

After successfully providing the prerequisites, you will install the suite from the ZIP file without IIS running:

1. Log into your [Telerik account](https://www.telerik.com/account/) and click **Downloads** from the top menu.

1. On the loaded [page](https://www.telerik.com/account/product-download?product=RCAJAX) choose from your purchased products or trial downloads Telerik® UI for ASP.NET AJAX, and click on it.

1. Download the **Manual installation** (`Telerik_UI_for_ASP.NET_AJAX_20xx_x_xxx_Dev.zip`) file and extract its content to a convenient location.

## Step 2: Upgrade an Existing Telerik UI for ASP.NET AJAX Project

The files from the ZIP installation are usually used for manual upgrading of an already existing Telerik UI for ASP.NET AJAX Project. The following steps ensure a safe upgrade:

1. Back up your project.

1. Delete the old `Telerik.Web.UI.*` references from the project and close it. As with any ASP.NET project, it is helpful to clear the ASP.NET Temporary files and the browser cache.

1. Open the **Bin** folder of your project in Windows Explorer and delete the old `Telerik.Web.UI.*` assemblies.

1. Copy the new assemblies from the `Bin45` folder in the UI for ASP.NET AJAX installation path and paste them to the `Bin` folder of your project.

  You can use the copy-and-replace method to upgrade any [other assemblies]({%slug introduction/installation/included-assemblies%}), localization files (`~/App_GlobalResources`), dialogs (ImageEditor, Editor), [TypeScript definitions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/typescript-definitions/add-typescript-definitions-for-the-telerik-ui-for-asp.net-ajax-suite%}), and so on.

1. Open the project in Visual Studio and add references to the Telerik assemblies.

1. Make sure you have all [necessary `web.config` registrations]({%slug general-information/web-config-settings-overview%}).

## Step 3: Add the Editor to Your Project

The Web Forms Site created through the Telerik project templates includes all basic references and registrations required by the Telerik UI for ASP.NET AJAX controls, including a [ScriptManager control]({%slug scriptmanager/overview%}), which is required by all AJAX controls. That's why you can add the [Editor](https://demos.telerik.com/aspnet-ajax/editor/examples/overview/defaultcs.aspx) to the page in a simple way as demonstrated in this step.

> Alternatively, you can add the Editor to your project by dragging it directly from the VS toolbox. For more information, refer to the article on [adding the Telerik controls to the Visual Studio toolbox]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/adding-the-telerik-controls-to-the-visual-studio-toolbox %}).

1. Open `Default.aspx` and declare `RadEditor` right after `RadScriptManager`:

   ```ASPX
   <telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>

   <telerik:RadEditor runat="server" ID="RadEditor1" </telerik:RadEditor>
   ```
1. Set the `RenderMode` and `Content` properties of the Editor:

   ```ASPX
   <telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>

   <telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight">
       <Content>             
           Congratulations! You have the Telerik UI for ASP.NET controls running in your project!         
       </Content>
   </telerik:RadEditor>
   ```

1. Run your page by pressing `F5`.

>caption Add the Editor to the page
![Add the Editor to the page](images/getting-started-editor.png)

## Step 4: Add the HtmlChart to Your Project

Let’s dive a little bit deeper in the configuration of the controls from the UI for ASP.NET AJAX suite. By following the steps below, you will create a data-bound [HtmlChart]({%slug htmlchart/overview%}). You will also add a handy tooltip that shows the values from a custom data field.

The sample uses a `DataTable`, but you can bind the HtmlChart to a [preferred data source type]({% slug htmlchart/data-binding/overview %}). The page already contains a [ScriptManager control](#add-radeditor-to-the-application), so you are ready to declare the HtmlChart right after the Editor control that you added in the previous step:

1. In `Default.aspx`, define an HtmlChart with `ID="RadHtmlChart1"`:

    ```ASPX
    <telerik:RadHtmlChart ID="RadHtmlChart1" runat="server">
    </telerik:RadHtmlChart>
    ```

1. Add a `ChartTitle` to the created HtmlChart:

    ```ASPX
    <telerik:RadHtmlChart ID="RadHtmlChart1" runat="server">
        <ChartTitle Text="Sales Log"></ChartTitle>
    </telerik:RadHtmlChart>
    ```

1. Add `ColumnSeries` to the `PlotArea.Series` collection of the control:

    ```ASPX
    <telerik:RadHtmlChart ID="RadHtmlChart1" runat="server">
        <ChartTitle Text="Sales Log"></ChartTitle>
        <PlotArea>
            <Series>
                <telerik:ColumnSeries Name="Clothes"></telerik:ColumnSeries>
            </Series>
        </PlotArea>
    </telerik:RadHtmlChart>
    ```

1. In the code-behind of the page, create a `GetData()` method. This method returns the sample data that you will bind to the chart:

    ````C#
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
    ````
    ````VB
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
    ````

1. Configure the data source of the chart to use the created sample data:

    ````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            RadHtmlChart1.DataSource = GetData();
        }
    }
    ````
    ````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        If Not IsPostBack Then
            RadHtmlChart1.DataSource = GetData()
        End If
    End Sub
    ````

1. Set the `colors` and `values` field names to the Series `DataFieldY` and `ColorField` properties:

    ```ASPX
    <telerik:RadHtmlChart ID="RadHtmlChart1" runat="server">
        <ChartTitle Text="Sales Log"></ChartTitle>
        <PlotArea>
            <Series>
                <telerik:ColumnSeries Name="Clothes" DataFieldY="values" ColorField="colors"></telerik:ColumnSeries>
            </Series>
        </PlotArea>
    </telerik:RadHtmlChart>
    ```

1. Set the `labels` field name to the `PlotArea.XAxis.DataLabelsField` value:

    ```ASPX
    <telerik:RadHtmlChart ID="RadHtmlChart1" runat="server">
        <ChartTitle Text="Sales Log"></ChartTitle>
        <PlotArea>
            <Series>
                <telerik:ColumnSeries Name="Clothes" DataFieldY="values" ColorField="colors"></telerik:ColumnSeries>
            </Series>
            <XAxis DataLabelsField="labels"></XAxis>
        </PlotArea>
    </telerik:RadHtmlChart>
    ```

1. Define a `TooltipsAppearance` nested tag in the series declaration. Then define a [custom Tooltip template]({% slug htmlchart/functionality/clienttemplate/overview %}) in it. All fields from the passed data source are available through the `dataItem` object of the template:

    ```ASPX
    <telerik:RadHtmlChart ID="RadHtmlChart1" runat="server">
        <ChartTitle Text="Sales Log"></ChartTitle>
        <PlotArea>
            <Series>
                <telerik:ColumnSeries Name="Clothes" DataFieldY="values" ColorField="colors">
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

1. Run the page by pressing `F5`. You are expected to see something similar to the following image:

>caption Bound HtmlChart with a custom Tooltip template
![Bound HtmlChart with a custom Tooltip template](images/getting-started-htmlchart.png)

## Step 5: Style the Controls

Telerik UI for ASP.NET AJAX provides more than [20 predefined skins]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-to-load-skins-from-external-assemblies %}) that allow you to change the look and feel of each component. To use the desired skin, set the skin name as the `Skin` property value of the control:

```ASPX
<telerik:RadEditor runat="server" ID="RadEditor2" Skin="Glow" RenderMode="Lightweight">
    <Content>             
        Congratulations! You have the Telerik UI for ASP.NET controls running in your project!     
    </Content>
</telerik:RadEditor>
```

>caption Apply the Glow skin to the Editor
![Apply Glow Skin to Editor](images/getting-started-editor-skin.png)

That was it! Now you are ready to dive more deeply into Telerik UI for ASP.NET AJAX and take full advantage of its slick functionalities!

## Next Steps

* [System Requirements](https://www.telerik.com/aspnet-ajax/tech-sheets/system-requirements)
* [Available Product Files for Download]({% slug installation/which-file-do-i-need-to-install %})
* [Included Assemblies]({% slug introduction/installation/included-assemblies %})
* [Adding Telerik ASP.NET AJAX Controls to a Page]({% slug getting-started/adding-the-telerik-controls-to-your-project %})
