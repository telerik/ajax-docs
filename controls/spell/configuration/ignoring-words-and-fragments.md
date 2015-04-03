---
title: Ignoring Words and Fragments
page_title: Ignoring Words and Fragments | UI for ASP.NET AJAX Documentation
description: Ignoring Words and Fragments
slug: spell/configuration/ignoring-words-and-fragments
tags: ignoring,words,and,fragments
published: True
position: 1
---

# Ignoring Words and Fragments



RadSpell can be configured to ignore certain words or text fragments by setting the __WordIgnoreOptions__ and __FragmentIgnoreOptions__ properties:

__WordIgnoreOptions__

* __None__: no words will be ignored when spellchecking

* __UPPERCASE__: specifies to ignore words in CAPITALS (e.g. 'UNESCO')

* __WordsWithCapitalLetters__: specifies to ignore words in Capitals (e.g. 'Washington')

* __RepeatedWords__: specifies to not consider repeating words as errors (e.g. 'very very')

* __WordsWithNumbers__: specifies to ignore words containing numbers (e.g. 'l8r')

__FragmentIgnoreOptions__

* __None__: no fragments will be ignored when spellchecking

* __FileNames__: specifies to ignore filenames when spellchecking (e.g. 'C:\Temp\Document.doc')

* __Urls__: specifies to ignore Urls when spellchecking (e.g. 'http://www.telerik.com/Telerik RadSpell')

* __EmailAddresses__: specifies to ignore Email addresses when spellchecking ([support@telerik.com](mailto:support@telerik.com))

* __All__: specifies to ignore all fragments above when spellchecking

## Example

The example below demonstrates how to set multiple __WordIgnoreOptions__ and multiple __FragmentIgnoreOptions__

````ASPNET
	<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
	<telerik:RadSpell
	   ID="RadSpell1"
	   runat="server"
	   ControlToCheck="TextBox1"            
	   WordIgnoreOptions="UPPERCASE,RepeatedWords"
	   FragmentIgnoreOptions="EmailAddresses,Urls"
	/> 
````



>tabbedCode

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



````VB.NET
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


>end
