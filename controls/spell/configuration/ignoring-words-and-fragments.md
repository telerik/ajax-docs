---
title: Ignoring Words and Fragments
page_title: Ignoring Words and Fragments - RadSpell
description: Check our Web Forms article about Ignoring Words and Fragments.
slug: spell/configuration/ignoring-words-and-fragments
tags: ignoring,words,and,fragments
published: True
position: 1
---

# Ignoring Words and Fragments

RadSpell can be configured to ignore certain words or text fragments by setting the **WordIgnoreOptions** and **FragmentIgnoreOptions** properties:

**WordIgnoreOptions**

* **None**: no words will be ignored when spellchecking

* **UPPERCASE**: specifies to ignore words in CAPITALS (e.g. 'UNESCO')

* **WordsWithCapitalLetters**: specifies to ignore words in Capitals (e.g. 'Washington')

* **RepeatedWords**: specifies to not consider repeating words as errors (e.g. 'very very')

* **WordsWithNumbers**: specifies to ignore words containing numbers (e.g. 'l8r')

**FragmentIgnoreOptions**

* **None**: no fragments will be ignored when spellchecking

* **FileNames**: specifies to ignore filenames when spellchecking (e.g. 'C:\Temp\Document.doc')

* **Urls**: specifies to ignore Urls when spellchecking (e.g. 'https://docs.telerik.com/devtools/aspnet-ajax/controls/spell/overview')

* **EmailAddresses**: specifies to ignore Email addresses when spellchecking ([sales@telerik.com](mailto:sales@telerik.com))

* **All**: specifies to ignore all fragments above when spellchecking

## Example

The example below demonstrates how to set multiple **WordIgnoreOptions** and multiple **FragmentIgnoreOptions**

````ASP.NET
<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
<telerik:RadSpell
   ID="RadSpell1"
   runat="server"
   ControlToCheck="TextBox1"            
   WordIgnoreOptions="UPPERCASE,RepeatedWords"
   FragmentIgnoreOptions="EmailAddresses,Urls"
/> 
````

````C#
using System;
using Telerik.Web.UI;
namespace RadSpel003
{
   public partial class _Default : System.Web.UI.Page
   {
	   protected void Page_Load(object sender, EventArgs e)
	   {
		   RadSpell1.WordIgnoreOptions = WordIgnoreOptions.UPPERCASE | WordIgnoreOptions.RepeatedWords;
		   RadSpell1.FragmentIgnoreOptions = FragmentIgnoreOptions.EmailAddresses | FragmentIgnoreOptions.Urls;
	   }
   }
} 	
````
````VB
Imports System
Imports Telerik.Web.UI
namespace RadSpel003
	Partial Public Class _Default
		Inherits System.Web.UI.Page
		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
			RadSpell1.WordIgnoreOptions = WordIgnoreOptions.UPPERCASE Or WordIgnoreOptions.RepeatedWords
			RadSpell1.FragmentIgnoreOptions = FragmentIgnoreOptions.EmailAddresses Or FragmentIgnoreOptions.Urls
		End Sub
	End Class
End Namespace
````

