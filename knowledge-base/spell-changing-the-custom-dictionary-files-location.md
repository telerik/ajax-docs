---
title: Changing the custom dictionary files location
description: Changing the custom dictionary files location. Check it now!
type: how-to
page_title: Changing the custom dictionary files location
slug: spell-changing-the-custom-dictionary-files-location
res_type: kb
---


## HOW-TO
 Change the custom dictionary files location  
   
## SOLUTION  
Approach 1: Change the default dictionary location and move the custom dictionaries out of the web application folder. 
 
````ASPX
<telerik:RadSpell ID="RadSpell1" runat="server" DictionaryPath="/common/RadSpell" ... />  
````
    
 In this case, the /common/RadSpell/ folder can be mapped to a different directory outside of the main web application. As long as the path in **DictionaryPath** can be mapped to a physical location, the spell check will work.  
   
 Approach 2: Implement a **custom dictionary provider**. Here is what needs to be done:  
   
 1. Create a class that implements the **ICustomDictionarySource** interface. Here is an example:  
      ````C#
      public class myType : Telerik.Web.UI.Dictionaries.ICustomDictionarySource 
      { 

         #region ICustomDictionarySource Members 
         string _dictionaryPath; 
         public string DictionaryPath 
         { 
            get 
            { 
                  return _dictionaryPath; 
            } 
            set 
            { 
                  _dictionaryPath = value; 
            } 
         } 
      
         string _language; 
         public string Language 
         { 
            get 
            { 
                  return _language; 
            } 
            set 
            { 
                  _language = value; 
            } 
         } 
      
         string _customAppendix; 
         public string CustomAppendix 
         { 
            get 
            { 
                  return _customAppendix; 
            } 
            set 
            { 
                  _customAppendix = value; 
            } 
         } 
      
         public string ReadWord() 
         { 
            //return a string containing a word from the custom dictionary 
            //return null when there are no more words in the custom dictionary 
            return null; 
         } 
      
         public void AddWord(string word) 
         { 
            //implement custom code to add the word in your custom dictionary 
         } 

         #endregion 
      } 
      ````
      The **ReadWord** function is called from the spell code as many times as you return a string. When you return null, the spell assumes there are no more words in the custom dictionary.  
      The AddWord function is called if the user chooses to add a new word to the custom dictionary.  
 2. Set the **CustomDictionarySourceTypeName **in the SpellCheckSettings to the full type name of your custom provider. For example **CustomDictionarySourceTypeName**="myType, App\_Code"  

  