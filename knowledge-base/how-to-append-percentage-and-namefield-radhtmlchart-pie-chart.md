---
title: Appending Percentage and NameField to Pie Chart Items in RadHtmlChart for ASP.NET AJAX
description: Learn how to append percentage values and name fields to each item in a RadHtmlChart Pie Chart dynamically using C# codebehind.
type: how-to
page_title: How to Dynamically Append Percentage and NameField to RadHtmlChart Pie Chart Items Using C#
slug: how-to-append-percentage-and-namefield-radhtmlchart-pie-chart
tags: radhtmlchart, asp.net ajax, pie chart, codebehind, c#, clienttemplate, data binding
res_type: kb
ticketid: 1677029
---

## Description

When working with the [RadHtmlChart for ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview), you might want to dynamically append percentage values and name fields to each item in a Pie Chart directly from the codebehind using C#. This knowledge base article also answers the following questions:

- How to use ClientTemplate in RadHtmlChart PieSeries with C#?
- How to dynamically set colors for Pie Chart items in RadHtmlChart?
- How to bind data to RadHtmlChart PieSeries using codebehind in ASP.NET AJAX?

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadHtmlChart for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Solution

To append percentage values and name fields to each item in a RadHtmlChart Pie Chart, and optionally set item colors dynamically from the codebehind, you can follow these steps:

### Approach 1: Use a Dictionary for Color Mapping

This approach allows you to map `DAYPART` values to their corresponding colors without modifying the database. A calculated `COLOR` column is added dynamically to the `DataTable`, which is then used to set the slice colors.

**ASPX.CS:**

```ASPX
        <telerik:RadHtmlChart runat="server" ID="DayPartsPieChart" Height="400px" Width="500px"
            Legend-Appearance-Position="Right"
            BorderColor="Black" BorderStyle="Solid" BorderWidth="2px"
            Transitions="true">
            <Appearance FillStyle-BackgroundColor="White"></Appearance>
            <PlotArea>
                <Series>
                    <telerik:PieSeries>
                    </telerik:PieSeries>
                </Series>
            </PlotArea>
            <Legend>
                <Appearance Visible="false" />
            </Legend>
        </telerik:RadHtmlChart>
```

```csharp
    protected void Page_Init(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            LoadDayPartsPieChart();
        }
    }

    public void LoadDayPartsPieChart()
    {
        // Define and populate the data source
        DataTable table = new DataTable();
        table.Columns.Add("DAYPART", typeof(string));
        table.Columns.Add("PCT", typeof(decimal));

        table.Rows.Add("EM", 18.5m);
        table.Rows.Add("DT", 18.6m);
        table.Rows.Add("PT", 3.0m);
        table.Rows.Add("LN", 37.1m);
        table.Rows.Add("LE", 11.4m);
        table.Rows.Add("EF", 11.4m);

        // Define a dictionary for DAYPART-to-color mapping
        Dictionary<string, string> colorMapping = new Dictionary<string, string>
    {
        { "EM", "Purple" },
        { "DT", "Orange" },
        { "PT", "Green" },
        { "LN", "Blue" },
        { "LE", "Red" },
        { "EF", "Yellow" }
    };

        // Add a calculated COLOR column dynamically
        table.Columns.Add("COLOR", typeof(string));
        foreach (DataRow row in table.Rows)
        {
            string dayPart = row["DAYPART"].ToString();
            if (colorMapping.ContainsKey(dayPart))
            {
                row["COLOR"] = colorMapping[dayPart];
            }
        }

        // Clear existing series
        DayPartsPieChart.PlotArea.Series.Clear();

        // Create a new PieSeries
        Telerik.Web.UI.PieSeries pieSeries = new Telerik.Web.UI.PieSeries
        {
            DataFieldY = "PCT",        // Bind PCT values to the pie slices
            NameField = "DAYPART",     // Bind DAYPART names to labels
            ColorField = "COLOR",      // Bind dynamically calculated COLOR field
            LabelsAppearance =
        {
            Position = Telerik.Web.UI.HtmlChart.PieAndDonutLabelsPosition.OutsideEnd,
            Visible = true,
            ClientTemplate = "#= dataItem.PCT # % \\n #= dataItem.DAYPART #"
        },
            TooltipsAppearance =
        {
            ClientTemplate = "#= dataItem.PCT # : \\n #= dataItem.DAYPART #"
        },
            VisibleInLegend = false
        };

        // Add the PieSeries to the chart
        DayPartsPieChart.PlotArea.Series.Add(pieSeries);

        // Bind the chart to the data source
        DayPartsPieChart.DataSource = table;
        DayPartsPieChart.DataBind();

        // Optionally update the chart title
        DayPartsPieChart.ChartTitle.Text = "Airings by Daypart";
    }
```

### Approach 2: Use the ColorField Property

If your data source already includes a `COLOR` column, you can directly bind it to the `ColorField` property of the `PieSeries` to dynamically set the item colors.

**ASPX.CS:**

```csharp
// Similar to Approach 1, but ensure your DataTable includes a COLOR column
    protected void Page_Init(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            LoadDayPartsPieChart();
        }
    }

    public void LoadDayPartsPieChart()
    {
        // Define and populate the data source
        DataTable table = new DataTable();
        table.Columns.Add("DAYPART", typeof(string));
        table.Columns.Add("PCT", typeof(decimal));
        table.Columns.Add("COLOR", typeof(string)); // Add a COLOR column to the data source

        table.Rows.Add("EM", 18.5m, "Purple");
        table.Rows.Add("DT", 18.6m, "Orange");
        table.Rows.Add("PT", 3.0m, "Green");
        table.Rows.Add("LN", 37.1m, "Blue");
        table.Rows.Add("LE", 11.4m, "Red");
        table.Rows.Add("EF", 11.4m, "Yellow");

        // Clear existing series
        DayPartsPieChart.PlotArea.Series.Clear();

        // Create a new PieSeries
        Telerik.Web.UI.PieSeries pieSeries = new Telerik.Web.UI.PieSeries
        {
            DataFieldY = "PCT",        // Bind PCT values to the pie slices
            NameField = "DAYPART",     // Bind DAYPART names to labels
            ColorField = "COLOR",      // Bind COLOR column to dynamically set colors
            LabelsAppearance =
        {
            Position = Telerik.Web.UI.HtmlChart.PieAndDonutLabelsPosition.OutsideEnd,
            Visible = true,
            ClientTemplate = "#= dataItem.PCT # % \\n #= dataItem.DAYPART #"
        },
            TooltipsAppearance =
        {
            ClientTemplate = "#= dataItem.PCT # : \\n #= dataItem.DAYPART #"
        },
            VisibleInLegend = false
        };

        // Add the PieSeries to the chart
        DayPartsPieChart.PlotArea.Series.Add(pieSeries);

        // Bind the chart to the data source
        DayPartsPieChart.DataSource = table;
        DayPartsPieChart.DataBind();

        // Optionally update the chart title
        DayPartsPieChart.ChartTitle.Text = "Airings by Daypart";
    }
```

Both approaches allow for dynamically appending percentage values and name fields to each Pie Chart item and setting their colors from the codebehind. 

## See Also

- [RadHtmlChart Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
- [PieSeries - Telerik UI for ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/chart-types/pie-chart)
- [RadHtmlChart ClientTemplate](https://www.telerik.com/products/aspnet-ajax/documentation/controls/htmlchart/functionality/clienttemplate/overview)
