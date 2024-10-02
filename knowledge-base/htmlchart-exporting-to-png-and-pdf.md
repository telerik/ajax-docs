---
title: Exporting to PNG and PDF
description: Learn to export RadHtmlChart to PNG and PDF
type: how-to
page_title: Exporting to PNG and PDF. | RadHtmlChart
slug: htmlchart-exporting-to-png-and-pdf
tags: htmlchart, group, datasource, htmlchart datasource
res_type: kb
---

## Environment 

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms HtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This article illustrates how to export the HtmlChart to PNG or PDF

## Solution

**Solution 1 based on RadClientExplortManager**

>Note: As of Q1 2015 you can export **RadHtmlChart** to PDF or Image on the client-side through the RadClientExportManager control. 

You can find an example in the [Export to PDF demo](https://demos.telerik.com/aspnet-ajax/client-export-manager/applicationscenarios/export-radhtmlchart/defaultcs.aspx?product=htmlchart). For Telerik UI for ASP.NET AJAX versions prior Q1 2015, you can export the chart on the server-side through a third party tool as illustrated below.

**Solution 2 based on a third-party tool named InkScape.**

The **RadHtmlChart** renders on the client via JavaScript which means that it is not directly available on the server to enable easy exporting like the RadChart does. Moreover, since SVG or VML is used browsers cannot save/export the image out of the box.

A possible solution is to use a third party software that can convert the SVG image to a more common user format such as PNG or PDF. This, however, requires that first the SVG rendering of the chart is transferred to the server. To do this in older browsers that do not support SVG we added a method that will return the SVG rendering of the RadHtmlChart (`getSVGString()`). It is available in the internal builds since 2012.2.801 and it will be in the official Q2 2012 SP2 release as well.

````ASP.NET
<asp:HiddenField runat="server" ID="svgHolder" />
<fieldset style="width: 500px;">
    <legend>Choose the desired format and click the button to receive the file</legend>
    <asp:RadioButtonList runat="server" ID="rbl_ExportFormat">
        <asp:ListItem Text="PNG" Value="png" Selected="true"></asp:ListItem>
        <asp:ListItem Text="PDF" Value="pdf"></asp:ListItem>
    </asp:RadioButtonList>
    <asp:Button ID="Button1" runat="server"  
        Text="Export the RadHtmlChart" 
        OnClick="Button1_Click" 
        OnClientClick="getSvgContent(this); return false;"/>
</fieldset>

<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="800" Height="500"
    Transitions="true">
    <Appearance>
        <FillStyle BackgroundColor="White" />
    </Appearance>
    <ChartTitle Text="Browser Usage for April 2012">
        <Appearance Align="Center" BackgroundColor="White" Position="Top" />
    </ChartTitle>
    <Legend>
        <Appearance BackgroundColor="White" Position="Right" Visible="true" />
    </Legend>
    <PlotArea>
        <Appearance>
            <FillStyle BackgroundColor="White" />
        </Appearance>
        <Series>
            <telerik:PieSeries StartAngle="90">
                <LabelsAppearance Position="OutsideEnd" DataFormatString="{0} %" />
                <TooltipsAppearance DataFormatString="{0} %" />
                <Items>
                    <telerik:SeriesItem BackgroundColor="#ff9900" Exploded="true" Name="Internet Explorer" YValue="18.3" />
                    <telerik:SeriesItem BackgroundColor="#cccccc" Exploded="false" Name="Firefox" YValue="35.8" />
                    <telerik:SeriesItem BackgroundColor="#999999" Exploded="false" Name="Chrome" YValue="38.3" />
                    <telerik:SeriesItem BackgroundColor="#666666" Exploded="false" Name="Safari" YValue="4.5" />
                    <telerik:SeriesItem BackgroundColor="#333333" Exploded="false" Name="Opera" YValue="2.3" />
                </Items>
            </telerik:PieSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

````JavaScript
function getSvgContent(sender) {
    var chartRendering = $find("<%=RadHtmlChart1.ClientID %>").getSVGString(); // Obtain an SVG version of the chart regardless of the browser
    $get("<%=svgHolder.ClientID %>").value = escape(chartRendering); // Store the SVG string in a hidden field and escape it so that the value can be posted to the server

    __doPostBack(sender.name, ""); // Initiate the postback from the button so that its server-side handler is executed
}
````

````C#
protected void Button1_Click(object sender, EventArgs e)
{
    HtmlChartExportSettings currentSettings = new HtmlChartExportSettings();  // Obtain the necessary settings for exporting the chart

    currentSettings.Height = (int)RadHtmlChart1.Height.Value;  // Set the height for the export settings
    currentSettings.Width = (int)RadHtmlChart1.Width.Value;    // Set the width for the export settings

    string svgText = HttpUtility.UrlDecode(svgHolder.Value, System.Text.Encoding.Default);  // Decode the SVG string saved from the client

    currentSettings.SvgFilePath = Server.MapPath("~/App_Data/temp.svg");  // Create a temporary SVG file that Inkscape will use
    System.IO.File.WriteAllText(currentSettings.SvgFilePath, svgText);   // Write the SVG text to the temporary SVG file

    currentSettings.Extension = rbl_ExportFormat.SelectedValue;   // Get the export format - png or pdf

    currentSettings.OutputFilePath = Server.MapPath("~/App_Data/exportedChart." + currentSettings.Extension);  // Set the output file Inkscape will use, hardcoded to use App_Data as a temporary folder

    currentSettings.ClientFileName = "exportedChart";  // Change the name of the file the user will receive here. Extension is automatically added

    HtmlChartExporter.ExportHtmlChart(currentSettings);  // Create the actual file

    byte[] fileForClient = HtmlChartExporter.ReadFile(currentSettings.OutputFilePath);  // Read the exported file to send it to the client
    Response.ContentType = HtmlChartExportSettings.ContentTypeList[currentSettings.Extension];
    Response.AddHeader("Content-Disposition", "attachment;filename=" + currentSettings.ClientFileName);
    Response.BinaryWrite(fileForClient);

    File.Delete(currentSettings.OutputFilePath);  // Delete the temporary files to avoid flooding the server
    File.Delete(currentSettings.SvgFilePath);
}
````

**HtmlChartExporter.cs**

````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;
using System.IO;

/// <summary>
/// Provides the core functionality for exporting the RadHtmlChart - SVG conversion and a helper method for sending the file to the client.
/// </summary>
public static class HtmlChartExporter
{
	/// <summary>
	/// Uses a third party library called Inkscape to create a file from the SVG representation of the RadHtmlChart (already saved as a file).
	/// </summary>
	/// <param name="settings">The current settings that are used on the page.</param>
	public static void ExportHtmlChart(HtmlChartExportSettings settings)
	{
		// The actual export takes place here
		// Full list of export options is available at
		// http://tavmjong.free.fr/INKSCAPE/MANUAL/html/CommandLine-Export.html
		Process inkscape = new Process();
		inkscape.StartInfo.FileName = HtmlChartExportSettings.InkscapePath;
		inkscape.StartInfo.Arguments =
		String.Format("--file \"{0}\" --export-{1} \"{2}\" --export-width {3} --export-height {4}",
						settings.SvgFilePath, settings.Extension, settings.OutputFilePath, settings.Width, settings.Height);
		inkscape.StartInfo.UseShellExecute = true;
		inkscape.Start();
		inkscape.WaitForExit();
	}

	/// <summary>
	/// Returns a byte[] array from the file so that it can be sent to the browser.
	/// </summary>
	/// <param name="filePath">the physical path to the file to read.</param>
	/// <returns>Returns a byte[] array</returns>
	public static byte[] ReadFile(string filePath)
	{
		byte[] buffer;
		FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);

		try
		{
			int length = (int)fileStream.Length;  // get file length
			buffer = new byte[length];            // create buffer
			int count;                            // actual number of bytes read
			int sum = 0;                          // total number of bytes read

			// read until Read method returns 0 (end of the stream has been reached)
			while ((count = fileStream.Read(buffer, sum, length - sum)) > 0)
				sum += count;  // sum is a buffer offset for next reading
		}
		finally
		{
			fileStream.Close();
		}
		return buffer;
	}
}
````

HtmlChartExportSettings.cs

````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// The settings needed for exporting the RadHtmlChart
/// </summary>
public class HtmlChartExportSettings
{
	private int _Height;
	private int _Width;
	private string _SvgFilePath;
	private string _OutputFilePath;
	private string _Extension;
	private string _ClientFileName;

	public HtmlChartExportSettings()
	{
		
	}

	/// <summary>
	/// The path to the Inkscape executable on the server.
	/// </summary>
	public const string InkscapePath = @"C:\Program Files (x86)\Inkscape\inkscape.exe";//the path to the Inkscape executable on your machine

	/// <summary>
	/// A list with the appropriate content-type values for the file formats.
	/// </summary>
	public static readonly Dictionary<string, string> ContentTypeList = new Dictionary<string, string>
		{
			{"png", "image/png"},
			{"pdf", "application/pdf"}
		};

	/// <summary>
	/// The height of the exported file, usually the height of the chart.
	/// </summary>
	public int Height
	{
		get { return _Height; }
		set { _Height = value; }
	}

	/// <summary>
	/// The width of the exported file, usually the width of the chart.
	/// </summary>
	public int Width
	{
		get { return _Width; }
		set { _Width = value; }
	}

	/// <summary>
	/// The path to the SVG file that will be passed to Inkscape.
	/// </summary>
	public string SvgFilePath
	{
		get { return _SvgFilePath; }
		set { _SvgFilePath = value; }
	}

	/// <summary>
	/// The paht to the file created by Inkscape that will be sent to the client.
	/// </summary>
	public string OutputFilePath
	{
		get { return _OutputFilePath; }
		set { _OutputFilePath = value; }
	}

	/// <summary>
	/// The format in which the chart will be exported.
	/// </summary>
	public string Extension
	{
		get { return _Extension; }
		set { _Extension = value; }
	}

	/// <summary>
	/// The file name the client will receive for the file.
	/// </summary>
	public string ClientFileName
	{
		get { return _ClientFileName; }
		set { _ClientFileName = value +"." + this.Extension; }
	}
}
````

The **InkScape** SVG editor is suitable for the task, because it is open source and is designed to handle SVG. You can download it from [here](http://inkscape.org/download/?lang=en).

Two simple sites are attached to the thread (one in C# and one in VB) that show an example of how this can work. For ease of use the options needed by InkScape are provided in a separate class (HtmlChartExportSettings) that is initialized in the code-behind of the page with the necessary settings that are obtained from the page itself.

A static class is used for the actual creation of the PNG/PDF file and for sending it to the client (HtmlChartExporter). Comments in the code itself provide more detailed explanations over each action.

[Download C# project](files/htmlchart-exporting-to-png-and-pdfC%23.zip) <br />
[Download VB project](files/htmlchart-exporting-to-png-and-pdfVB.zip)

 
  
   
