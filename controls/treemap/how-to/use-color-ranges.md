---
title: Use Color Ranges
page_title: Use Color Ranges | RadTreeMap for ASP.NET AJAX Documentation
description: Use Color Ranges for items to have sibling and child items take different shades of the main color.
slug: treemap/how-to/use-color-ranges
tags: use,color,range,kendo,widget,sibing,shade
published: True
position: 0
---

# Use Color Ranges

To set a color for an item so that all its siblings take a different shade of it as its own color, you have three options:

* Use the underlying [Kendo TreeMap widget](https://docs.telerik.com/kendo-ui/controls/charts/treemap/overview) and define the colors in its [colors collection](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/treemap#configuration-colors).
* Add a field in your data source that contains the desired color for each item and point the `DataColor` property to it.
* Create a Kendo Theme with the desired ranges (see Example 1). Make sure that the theme name matches the Skin name of the RadTreeMap. 

>caption Example 1: Create a Kendo Theme with custom color ranges.

````ASP.NET
<telerik:RadTreeMap Skin="Metro" RenderMode="Lightweight" runat="server" ID="TreeMap1" Width="1000px" AlgorithmType="Squarified">
</telerik:RadTreeMap>
<script>
	; (function () {
		var kendo = window.kendo,
			dataviz = kendo.dataviz,
			deepExtend = kendo.deepExtend;

		var treeMapThemes = {};
		//theme name must be lowercase from the Skin property
		treeMapThemes["metro"] = {
			treeMap: {
				colors: [
						["#f89d26", "#7c5e33"],
						["#b8e54b", "#627b41"],
						["#52d5f6", "#397486"],
						["#ffd800", "#7f7623"],
						["#277db4", "#28516b"],
						["#01ae98", "#196560"],
						["#fffc00", "#7f8423"],
						["#f7742c", "#7b4e35"],
						["#9fcf2d", "#587235"],
						["#008bcb", "#195775"]
				]
			}
		};

		deepExtend(dataviz.ui, {
			themes: treeMapThemes
		});
	})();
</script>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		TreeMap1.DataFieldID = "ID";
		TreeMap1.DataFieldParentID = "ParentID";
		TreeMap1.DataTextField = "Name";
		TreeMap1.DataValueField = "Value";
		TreeMap1.DataSource = GetData();
		TreeMap1.DataBind();
	}
}

public DataTable GetData()
{
	DataTable table = new DataTable();
	table.Columns.Add("ID");
	table.Columns.Add("ParentID");
	table.Columns.Add("Name");
	table.Columns.Add("Value");

	table.Rows.Add(new String[] { "1", null, "TOP 20 Highest-Paid Athletes", "1" });
	table.Rows.Add(new String[] { "2", "1", "Soccer", "290.5" });
	table.Rows.Add(new String[] { "3", "2", "Cristiano Ronaldo", "80" });
	table.Rows.Add(new String[] { "4", "2", "Lionel Messi", "64.7" });
	table.Rows.Add(new String[] { "5", "2", "Zlatan Ibrahimovic", "40.4" });
	table.Rows.Add(new String[] { "6", "2", " Gareth Bale", "36.4" });
	table.Rows.Add(new String[] { "7", "2", "Radamel Falcao", "35.4" });
	table.Rows.Add(new String[] { "8", "2", "Neymar", "33.6" });

	table.Rows.Add(new String[] { "9", "1", "Basketball", "202.3" });
	table.Rows.Add(new String[] { "10", "9", "LeBron James", "72.3" });
	table.Rows.Add(new String[] { "11", "9", "Kobe Bryant", "61.5" });
	table.Rows.Add(new String[] { "12", "9", "Derrick Rose", "36.6" });
	table.Rows.Add(new String[] { "13", "9", "Kevin Durant", "31.9" });

	table.Rows.Add(new String[] { "14", "1", "Tennis", "133.8" });
	table.Rows.Add(new String[] { "15", "14", "Roger Federer", "56.2" });
	table.Rows.Add(new String[] { "16", "14", "Rafael Nadal", "44.5" });
	table.Rows.Add(new String[] { "17", "14", "Novak Djokovic", "33.1" });

	table.Rows.Add(new String[] { "18", "1", "Boxing", "146.8" });
	table.Rows.Add(new String[] { "19", "18", "Floyd Mayweather", "105" });
	table.Rows.Add(new String[] { "20", "18", "Manny Pacquiao", "41.8" });

	table.Rows.Add(new String[] { "21", "1", "Football", "76.8" });
	table.Rows.Add(new String[] { "22", "21", "Matt Ryan", "43.8" });
	table.Rows.Add(new String[] { "23", "21", "Matthew Stafford", "33" });

	table.Rows.Add(new String[] { "24", "1", "Golf", "84.4" });
	table.Rows.Add(new String[] { "25", "24", "Tiger Woods", "31.2" });
	table.Rows.Add(new String[] { "26", "24", "Phil Mickelson", "53.2" });

	table.Rows.Add(new String[] { "27", "1", "Racing", "32" });
	table.Rows.Add(new String[] { "28", "27", "Lewis Hamilton", "32" });

	return table;
}
````
````VB
Public Function GetData() As DataTable
	Dim table As New DataTable()
	table.Columns.Add("ID")
	table.Columns.Add("ParentID")
	table.Columns.Add("Name")
	table.Columns.Add("Value")


	table.Rows.Add(New [String]() {"1", Nothing, "TOP 20 Highest-Paid Athletes", "1"})
	table.Rows.Add(New [String]() {"2", "1", "Soccer", "290.5"})
	table.Rows.Add(New [String]() {"3", "2", "Cristiano Ronaldo", "80"})
	table.Rows.Add(New [String]() {"4", "2", "Lionel Messi", "64.7"})
	table.Rows.Add(New [String]() {"5", "2", "Zlatan Ibrahimovic", "40.4"})
	table.Rows.Add(New [String]() {"6", "2", " Gareth Bale", "36.4"})
	table.Rows.Add(New [String]() {"7", "2", "Radamel Falcao", "35.4"})
	table.Rows.Add(New [String]() {"8", "2", "Neymar", "33.6"})

	table.Rows.Add(New [String]() {"9", "1", "Basketball", "202.3"})
	table.Rows.Add(New [String]() {"10", "9", "LeBron James", "72.3"})
	table.Rows.Add(New [String]() {"11", "9", "Kobe Bryant", "61.5"})
	table.Rows.Add(New [String]() {"12", "9", "Derrick Rose", "36.6"})
	table.Rows.Add(New [String]() {"13", "9", "Kevin Durant", "31.9"})

	table.Rows.Add(New [String]() {"14", "1", "Tennis", "133.8"})
	table.Rows.Add(New [String]() {"15", "14", "Roger Federer", "56.2"})
	table.Rows.Add(New [String]() {"16", "14", "Rafael Nadal", "44.5"})
	table.Rows.Add(New [String]() {"17", "14", "Novak Djokovic", "33.1"})

	table.Rows.Add(New [String]() {"18", "1", "Boxing", "146.8"})
	table.Rows.Add(New [String]() {"19", "18", "Floyd Mayweather", "105"})
	table.Rows.Add(New [String]() {"20", "18", "Manny Pacquiao", "41.8"})

	table.Rows.Add(New [String]() {"21", "1", "Football", "76.8"})
	table.Rows.Add(New [String]() {"22", "21", "Matt Ryan", "43.8"})
	table.Rows.Add(New [String]() {"23", "21", "Matthew Stafford", "33"})

	table.Rows.Add(New [String]() {"24", "1", "Golf", "84.4"})
	table.Rows.Add(New [String]() {"25", "24", "Tiger Woods", "31.2"})
	table.Rows.Add(New [String]() {"26", "24", "Phil Mickelson", "53.2"})

	table.Rows.Add(New [String]() {"27", "1", "Racing", "32"})
	table.Rows.Add(New [String]() {"28", "27", "Lewis Hamilton", "32"})

	Return table
End Function

Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	If Not IsPostBack Then
		TreeMap1.DataFieldID = "ID"
		TreeMap1.DataFieldParentID = "ParentID"
		TreeMap1.DataTextField = "Name"
		TreeMap1.DataValueField = "Value"
		TreeMap1.DataSource = GetData()
		TreeMap1.DataBind()
	End If

End Sub
````

## See Also

* [Handling Colors in Kendo TreeMap](https://docs.telerik.com/kendo-ui/controls/charts/treemap/overview#colors)
* [Colors Exposed in RadTreeMap]({%slug treemap/functionality/colors%})

