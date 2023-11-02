---
title: Custom skins not applied or overridden by base Telerik stylesheets
description: The selectors in the Custom Skins generated from the Telerik ThemeBuilder are with the same specificity and get overridden when loaded in head tag.
type: troubleshooting
page_title: Custom Skins from Telerik ThemeBuilder get overridden and are not applied
slug: themebuilder-custom-skin-gets-overridden-and-not-applied
position: 
tags: 
ticketid: 1442457
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Render Mode</td>
			<td>Lightweight</td>
		</tr>
	</tbody>
</table>


## Description
The Skins generated from the Telerik ThemeBuilder are generated with the same selectors's specificity as the built-in base styles. Sometimes, depending on the skin and scenario, the base Telerik styles are overriding styles from the custom skins. 

The issue is observed in scenarios where the stylesheets are loaded in the `<head>`. That is because the base skins are loaded programmatically as the last children of the `<head>`, meaning the base stylesheets will be loaded after the custom skin files.

This is considered an issue with the skins themselves and will be fixed in upcoming versions of the controls. In the meantime one of the solutions below can be used.

## Solutions

### Load stylesheets in body

As the description explains, the reversed order is causing the issue so to ensure the proper order, you can load the skins in the `<body>` instead of the `<head>`.

### Use RadStyleSheetManager

The RadStyleSheetManager gives the ability to control the loading order of the stylesheets you pass. That means you can load the styles with a big OrderIndex and the custom skin files will be loaded after the base styles. 

````web.config
<configuration>
  <appSettings>
    <add key="Telerik.Web.UI.StyleSheetFolders" value="~/Skins" />
````

````ASP.NET
<telerik:RadStyleSheetManager runat="server">
    <StyleSheets>
        <telerik:StyleSheetReference Path="~/Skins/Button.MySkin.css" OrderIndex="9999" />
        <telerik:StyleSheetReference Path="~/Skins/Grid.MySkin" OrderIndex="9999" />
        <%-- Other custom skin files here --%>
    </StyleSheets>
</telerik:RadStyleSheetManager>
````

>note Keep in mind that in order to load stylesheets from the local system you need to set the `Telerik.Web.UI.StyleSheetFolders` setting in the web.config: [RadStyleSheetManager - Serving External Stylesheets](https://docs.telerik.com/devtools/aspnet-ajax/controls/stylesheetmanager/serving-external-style-sheets)




### Modify selectors in skin files

The [Telerik ThemeBuilder]({%slug theme-builder/overview%}) allows customizing skins for the Lightweight render mode of the Telerik UI for ASP.NET AJAX controls. 
Increasing the Selectors' specificity would prevent any base stylesheets from overriding it. 

*Example*: **.RadAutoCompleteBox_CustomSkin** selector to become **_.RadAutoCompleteBox_.RadAutoCompleteBox_CustomSkin**. 

Here is a code snippet of the application that programmatically increases the selector's specificity. The fully runnable WebForms WebSite can be [downloaded from here](files/IncreaseCustomSkinSelector.zip).

````ASP.NET
<asp:ScriptManager runat="server" />
<asp:Button runat="server" ID="Button1" Text="Increase selectors" OnClick="Button1_Click" AutoPostBack="true" />
<asp:TextBox ID="tbSkinName" runat="server"  placeholder="Enter SkinName here..."></asp:TextBox>
<asp:RequiredFieldValidator ForeColor="DarkRed" ErrorMessage="*Please enter skin name" ControlToValidate="tbSkinName" runat="server" />
<asp:Label runat="server" ID="Label1"></asp:Label>
````

````C#
public static string SkinName = "";

public static string SelectorStrenghEnhancer(Match match)
{
    var matchString = match.Value;
    var control = matchString.Substring(0, matchString.Length - ("_" + SkinName).Length);
    var finalString = control + matchString;
       
    return finalString;
}

protected void Button1_Click(object sender, EventArgs e)
{
    SkinName = tbSkinName.Text;

    var inputPath = Server.MapPath("~/Input");
    var outputPath = Server.MapPath("~/Output");

    var files = Directory.GetFiles(inputPath, "*.css");
    MatchEvaluator evaluator = new MatchEvaluator(SelectorStrenghEnhancer);

    foreach (var filePath in files)
    {
        string text = File.ReadAllText(filePath);
        var filename = Path.GetFileName(filePath);
        text = Regex.Replace(text, @"\.Rad.*?_"+ SkinName, evaluator, RegexOptions.IgnorePatternWhitespace);
        File.WriteAllText(Path.Combine(outputPath,filename), text);
    }

    Label1.Text = "Styles selectors increased successfully";
}
````


### Instructions to use the project 
  
* Place the custom skin .css files in *~/Input* folder of the project
  * Obtain the custom skins by following the steps in [ThemeBuilder/Create a Theme]({%slug theme-builder/create%}) article
* Open the project with Visual Studio and run it
* Set the name of the custom skin in the TextBox
* Press the button 
* Get the new .css files from the *~/Output* folder and apply them in your 
* [Apply the custom theme]({%slug theme-builder/download-and-apply%}#apply) in your project


## See Also

* [Telerik ThemeBuilder]({%slug theme-builder/overview%}) documentation
* [Telerik ThemeBuilder](https://demos.telerik.com/aspnet-ajax/themebuilder/) online 
