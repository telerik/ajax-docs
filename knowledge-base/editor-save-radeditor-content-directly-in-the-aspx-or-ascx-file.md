---
title: Save RadEditor content directly in the ASPX or ASCX file containing the editor
description: See how to save RadEditor content directly inside its Content tags
type: how-to
page_title: Save RadEditor content directly in the ASPX or ASCX file containing the editor
slug: editor-save-radeditor-content-directly-in-the-aspx-or-ascx-file
res_type: kb
---

## Description

The code example below demonstrates how to save content directly in the ASPX or ASCX file containing RadEditor for ASP.NET AJAX. This feature can greatly simplify development in many practical scenarios such as when you have pages with more static content (welcome messages, FAQ, company information, contacts and many more) that can be equipped with an editor, without the need to be connected to a database.

## Solution
The content will be saved inside the Content inner tags of RadEditor so please remember to add the content tag to the editor declaration in the ASPX file so it can be correctly updated.

In order for RadEditor to save content directly to the control files, you have to give full permissions to the ASPNET / Network Service user for the folders and files in which the editor resides.


````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
    <Content>
        Please remember to add the content tag to the editor declaration in the ASPX file so it can be correctly updated
    </Content>
</telerik:RadEditor>
<asp:Button ID="btnSubmit" Text="Submit" runat="server" OnClick="btnSubmit_Click" />
````

````C#
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Web.UI;


public partial class _Default : System.Web.UI.Page
{
    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        //To update the page with the editor,
        //call this function and pass a reference to the RadEditor control
        SaveInCurrentFile(RadEditor1);
    }


    private bool _contentUpdated = false;
    private string _editorContent = string.Empty;

    private string EditorMatchEvaluator(Match m)
    {
        _contentUpdated = true;
        string newContent = m.Groups[1].Value + _editorContent + "</content>";
        return newContent;
    }

    private void SaveInCurrentFile(RadEditor editor)
    {
        try
        {
            //read file
            string physicalFileName = MapPathSecure(this.AppRelativeVirtualPath);
            FileStream fs = new FileStream(physicalFileName, FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite);
            StreamReader sr = new StreamReader(fs);
            string pageContent = sr.ReadToEnd();

            //update content
            _contentUpdated = false;
            _editorContent = editor.Content;
            MatchEvaluator mEvaluator = new MatchEvaluator(EditorMatchEvaluator);
            pageContent = Regex.Replace(pageContent, "(<(\\w+):RadEditor[^>]+?ID\\s*=\\s*['\"]?" + editor.ID + "['\"]?[^>]*>[\\s\\S]*?<content>)[\\s\\S]*?</content>", mEvaluator, RegexOptions.IgnoreCase | RegexOptions.Compiled);

            //update file
            if (_contentUpdated)
            {
                fs.Seek(0, SeekOrigin.Begin);
                StreamWriter sw = new StreamWriter(fs, Encoding.UTF8);
                sw.BaseStream.SetLength(0);
                sw.Write(pageContent);
                sw.Flush();
                sw.Close();
            }
            else
            {
                sr.Close();
            }
        }
        catch (Exception)
        {
            //"The File Encoding you have provided is not supported!"
            //"Refresh the screen and try again!"
            //"Another process or user is using the resource (ascx/aspx file) you are trying to update."
            //"Check if the ASPNET user (IIS5) / NETWORK SERVICE account (IIS6) has write privileges for this file."
        }
    }
}
````


