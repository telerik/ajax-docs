using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using Telerik.Web.UI;

public partial class DefaultCS : System.Web.UI.Page
{
	protected void Page_Init(object sender, EventArgs e)
	{
		string[] embeddedIcons = new string[] { "rbAdd", "rbRemove", "rbOk", "rbCancel", "rbUpload", "rbDownload", "rbPrevious", "rbNext", "rbOpen", "rbAttach",
"rbSave", "rbConfig", "rbPrint", "rbRefresh", "rbSearch", "rbHelp", "rbCart", "rbEdit", "rbRSS", "rbMail", "rbFB", "rbTwitter", "rbLinkedIn", "rbPinterest", 
"rbYouTube", "rbVimeo", "rbBehance", "rbDribble", "rbGooglePlus"};

		for (int i = 0; i < embeddedIcons.Length; i++)
		{
			string currIcon = embeddedIcons[i];

			HtmlTableRow row1 = new HtmlTableRow();

			//Add class name for icons:
			AddRowIconClassName(currIcon, table1, row1);

			//Add RadPushButton with icons, Default skin:
			AddRadPushButtonWithIcon("1" + i.ToString(), currIcon, "Silk", null, null, table1, row1);

			//Add RadPushButton with icons, Glow skin:
			AddRadPushButtonWithIcon("2" + i.ToString(), currIcon, "Glow", null, null, table1, row1);

		}
	}

	protected void AddRowIconClassName(string icon, HtmlTable table, HtmlTableRow row)
	{
		HtmlTableCell cell1 = new HtmlTableCell();
		cell1.InnerHtml = icon;
		row.Cells.Add(cell1);
		table.Rows.Add(row);
	}

	protected void AddRadPushButtonWithIcon(string ID, string IconName, string Skin, int? Height, int? Top, HtmlTable table, HtmlTableRow row)
	{
		HtmlTableCell cell = new HtmlTableCell();
		RadPushButton RadPushButton1 = new RadPushButton()
		{
			ID = "RadPushButton1" + ID,
			Text = IconName,
			Skin = Skin,
		};
		if (Height != null)
			RadPushButton1.Height = Unit.Pixel((int)Height);

		RadPushButton1.Icon.CssClass = IconName;
		if (Top != null)
			RadPushButton1.Icon.Top = Unit.Pixel((int)Top);

		cell.Controls.Add(RadPushButton1);
		row.Cells.Add(cell);
		table.Rows.Add(row);
	}
}