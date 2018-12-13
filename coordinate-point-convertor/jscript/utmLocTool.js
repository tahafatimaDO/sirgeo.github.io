/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

window.resizeTo(710,820);
           
function startUp() 
{    
  if (document.utmLocTool.submitbutton.value == "plss")
  {    
    document.utmLocTool.radinpt[0].checked=true;        
  }               
  if (document.utmLocTool.submitbutton.value == "spcs27")
  {    
    document.utmLocTool.radinpt[1].checked=true;         
  }
  if (document.utmLocTool.submitbutton.value == "spcs83")
  {    
    document.utmLocTool.radinpt[2].checked=true;         
  }
  if (document.utmLocTool.submitbutton.value == "dms")
  {    
    document.utmLocTool.radinpt[3].checked=true;        
  }
  if (document.utmLocTool.submitbutton.value == "utm27")
  {    
    document.utmLocTool.radinpt[4].checked=true;         
  }
  updateScreen();
}
           
function updateScreen()
{
  if (document.utmLocTool.radinpt[0].checked == true)  // PLSS
  {
    document.utmLocTool.submitbutton.value = "plss";
    document.utmLocTool.q64.disabled=false;
    document.utmLocTool.q16.disabled=false;
    document.utmLocTool.q4.disabled=false;
    document.utmLocTool.sec.disabled=false;
    document.utmLocTool.tws.disabled=false;
    document.utmLocTool.rng.disabled=false;
    document.utmLocTool.q64.focus();                 
                                   
    document.utmLocTool.spcs27X.disabled=true;
    document.utmLocTool.spcs27Y.disabled=true;
    document.utmLocTool.cs_sp27.disabled=true;
    document.utmLocTool.spcs27X.value="0";
    document.utmLocTool.spcs27Y.value="0";
    document.utmLocTool.cs_sp27.value="";                 
                                   
    document.utmLocTool.spcs83X.disabled=true;
    document.utmLocTool.spcs83Y.disabled=true;
    document.utmLocTool.cs_sp83.disabled=true;
    document.utmLocTool.spcs83X.value="0";
    document.utmLocTool.spcs83Y.value="0";
    document.utmLocTool.cs_sp83.value="";  
    
    document.utmLocTool.londeg.disabled=true;
    document.utmLocTool.lonmin.disabled=true;
    document.utmLocTool.lonsec.disabled=true;
    document.utmLocTool.latdeg.disabled=true;
    document.utmLocTool.latmin.disabled=true;
    document.utmLocTool.latsec.disabled=true;
    document.utmLocTool.londeg.value="0";
    document.utmLocTool.lonmin.value="0";
    document.utmLocTool.lonsec.value="0";
    document.utmLocTool.latdeg.value="0";
    document.utmLocTool.latmin.value="0";
    document.utmLocTool.latsec.value="0";                 
                 
    document.utmLocTool.utm27e.disabled=true;
    document.utmLocTool.utm27n.disabled=true;
    document.utmLocTool.cs_utm27.disabled=true;
    document.utmLocTool.utm27e.value="0";
    document.utmLocTool.utm27n.value="0";
    document.utmLocTool.cs_utm27.value=""; 
  }    

  if (document.utmLocTool.radinpt[1].checked == true)  // NAD27-SPCS
  {
    document.utmLocTool.submitbutton.value = "spcs27";      
    document.utmLocTool.q4.disabled=true;
    document.utmLocTool.q16.disabled=true;
    document.utmLocTool.q64.disabled=true;
    document.utmLocTool.sec.disabled=true;
    document.utmLocTool.tws.disabled=true;
    document.utmLocTool.rng.disabled=true;
    document.utmLocTool.q4.value="";
    document.utmLocTool.q16.value="";
    document.utmLocTool.q64.value="";
    document.utmLocTool.sec.value="";
    document.utmLocTool.tws.value="";
    document.utmLocTool.rng.value="";                 
                                  
    document.utmLocTool.spcs27X.disabled=false;
    document.utmLocTool.spcs27Y.disabled=false;
    document.utmLocTool.cs_sp27.disabled=false;
    document.utmLocTool.spcs27X.focus();                 
                                   
    document.utmLocTool.spcs83X.disabled=true;
    document.utmLocTool.spcs83Y.disabled=true;
    document.utmLocTool.cs_sp83.disabled=true;
    document.utmLocTool.spcs83X.value="0";
    document.utmLocTool.spcs83Y.value="0";
    document.utmLocTool.cs_sp83.value="";  
                     
    document.utmLocTool.londeg.disabled=true;
    document.utmLocTool.lonmin.disabled=true;
    document.utmLocTool.lonsec.disabled=true;
    document.utmLocTool.latdeg.disabled=true;
    document.utmLocTool.latmin.disabled=true;
    document.utmLocTool.latsec.disabled=true;
    document.utmLocTool.londeg.value="0";
    document.utmLocTool.lonmin.value="0";
    document.utmLocTool.lonsec.value="0";
    document.utmLocTool.latdeg.value="0";
    document.utmLocTool.latmin.value="0";
    document.utmLocTool.latsec.value="0";                               
                 
    document.utmLocTool.utm27e.disabled=true;
    document.utmLocTool.utm27n.disabled=true;
    document.utmLocTool.cs_utm27.disabled=true;
    document.utmLocTool.utm27e.value="0";
    document.utmLocTool.utm27n.value="0";
    document.utmLocTool.cs_utm27.value="";                                  
  }    


  if (document.utmLocTool.radinpt[2].checked == true)  // NAD83-SPCS
  {
    document.utmLocTool.submitbutton.value = "spcs83";       
    document.utmLocTool.q4.disabled=true;
    document.utmLocTool.q16.disabled=true;
    document.utmLocTool.q64.disabled=true;
    document.utmLocTool.sec.disabled=true;
    document.utmLocTool.tws.disabled=true;
    document.utmLocTool.rng.disabled=true;
    document.utmLocTool.q4.value="";
    document.utmLocTool.q16.value="";
    document.utmLocTool.q64.value="";
    document.utmLocTool.sec.value="";
    document.utmLocTool.tws.value="";
    document.utmLocTool.rng.value="";                 
                                   
    document.utmLocTool.spcs27X.disabled=true;
    document.utmLocTool.spcs27Y.disabled=true;
    document.utmLocTool.cs_sp27.disabled=true;
    document.utmLocTool.spcs27X.value="0";
    document.utmLocTool.spcs27Y.value="0";
    document.utmLocTool.cs_sp27.value="";                 
                                                                     
    document.utmLocTool.spcs83X.disabled=false;
    document.utmLocTool.spcs83Y.disabled=false;
    document.utmLocTool.cs_sp83.disabled=false;
    document.utmLocTool.spcs83X.focus();                 
                 
    document.utmLocTool.londeg.disabled=true;
    document.utmLocTool.lonmin.disabled=true;
    document.utmLocTool.lonsec.disabled=true;
    document.utmLocTool.latdeg.disabled=true;
    document.utmLocTool.latmin.disabled=true;
    document.utmLocTool.latsec.disabled=true;
    document.utmLocTool.londeg.value="0";
    document.utmLocTool.lonmin.value="0";
    document.utmLocTool.lonsec.value="0";
    document.utmLocTool.latdeg.value="0";
    document.utmLocTool.latmin.value="0";
    document.utmLocTool.latsec.value="0";                               
                 
    document.utmLocTool.utm27e.disabled=true;
    document.utmLocTool.utm27n.disabled=true;
    document.utmLocTool.cs_utm27.disabled=true;
    document.utmLocTool.utm27e.value="0";
    document.utmLocTool.utm27n.value="0";
    document.utmLocTool.cs_utm27.value="";                                  
  }    
  
  if (document.utmLocTool.radinpt[3].checked == true)  // DMS
  {
    document.utmLocTool.submitbutton.value = "dms";        
    document.utmLocTool.q4.disabled=true;
    document.utmLocTool.q16.disabled=true;
    document.utmLocTool.q64.disabled=true;
    document.utmLocTool.sec.disabled=true;
    document.utmLocTool.tws.disabled=true;
    document.utmLocTool.rng.disabled=true;
    document.utmLocTool.q4.value="";
    document.utmLocTool.q16.value="";
    document.utmLocTool.q64.value="";
    document.utmLocTool.sec.value="";
    document.utmLocTool.tws.value="";
    document.utmLocTool.rng.value="";                                  
                                  
    document.utmLocTool.spcs27X.disabled=true;
    document.utmLocTool.spcs27Y.disabled=true;
    document.utmLocTool.cs_sp27.disabled=true;
    document.utmLocTool.spcs27X.value="0";
    document.utmLocTool.spcs27Y.value="0";
    document.utmLocTool.cs_sp27.value="";                            
                                  
    document.utmLocTool.spcs83X.disabled=true;
    document.utmLocTool.spcs83Y.disabled=true;
    document.utmLocTool.cs_sp83.disabled=true;
    document.utmLocTool.spcs83X.value="0";
    document.utmLocTool.spcs83Y.value="0";
    document.utmLocTool.cs_sp83.value="";                            
                                  
    document.utmLocTool.londeg.disabled=false;
    document.utmLocTool.lonmin.disabled=false;
    document.utmLocTool.lonsec.disabled=false;
    document.utmLocTool.latdeg.disabled=false;
    document.utmLocTool.latmin.disabled=false;
    document.utmLocTool.latsec.disabled=false;
    document.utmLocTool.londeg.focus();                                  

    document.utmLocTool.utm27e.disabled=true;
    document.utmLocTool.utm27n.disabled=true;
    document.utmLocTool.cs_utm27.disabled=true;
    document.utmLocTool.utm27e.value="0";
    document.utmLocTool.utm27n.value="0";
    document.utmLocTool.cs_utm27.value="";                                  
  }    
               
  if (document.utmLocTool.radinpt[4].checked == true)  // NAD27-UTM               
  {
    document.utmLocTool.submitbutton.value = "utm27";        
    document.utmLocTool.q4.disabled=true;
    document.utmLocTool.q16.disabled=true;
    document.utmLocTool.q64.disabled=true;
    document.utmLocTool.sec.disabled=true;
    document.utmLocTool.tws.disabled=true;
    document.utmLocTool.rng.disabled=true;
    document.utmLocTool.q4.value="";
    document.utmLocTool.q16.value="";
    document.utmLocTool.q64.value="";
    document.utmLocTool.sec.value="";
    document.utmLocTool.tws.value="";
    document.utmLocTool.rng.value="";                                  
                                  
    document.utmLocTool.spcs27X.disabled=true;
    document.utmLocTool.spcs27Y.disabled=true;
    document.utmLocTool.cs_sp27.disabled=true;
    document.utmLocTool.spcs27X.value="0";
    document.utmLocTool.spcs27Y.value="0";
    document.utmLocTool.cs_sp27.value="";                            
                                  
    document.utmLocTool.spcs83X.disabled=true;
    document.utmLocTool.spcs83Y.disabled=true;
    document.utmLocTool.cs_sp83.disabled=true;
    document.utmLocTool.spcs83X.value="0";
    document.utmLocTool.spcs83Y.value="0";
    document.utmLocTool.cs_sp83.value="";                            
                                  
    document.utmLocTool.londeg.disabled=true;
    document.utmLocTool.lonmin.disabled=true;
    document.utmLocTool.lonsec.disabled=true;
    document.utmLocTool.latdeg.disabled=true;
    document.utmLocTool.latmin.disabled=true;
    document.utmLocTool.latsec.disabled=true;
    document.utmLocTool.londeg.value="0";
    document.utmLocTool.lonmin.value="0";
    document.utmLocTool.lonsec.value="0";
    document.utmLocTool.latdeg.value="0";
    document.utmLocTool.latmin.value="0";
    document.utmLocTool.latsec.value="0";                               
                 
    document.utmLocTool.utm27e.disabled=false;
    document.utmLocTool.utm27n.disabled=false;
    document.utmLocTool.cs_utm27.disabled=false;
    document.utmLocTool.utm27e.focus();                                  
  }

}

function resetNAD83()
{
    if ( document.utmLocTool.type.value == "display" )
    {    
      document.getElementById("xDisplay").innerHTML='<p>&nbsp;0.0<\/p>';  // NAD83-UTM Display
      document.getElementById("yDisplay").innerHTML='<p>&nbsp;0.0<\/p>';
    }
    if ( document.utmLocTool.type.value == "error" )
    {    
      document.getElementById("errDisplay").innerHTML='<p><\/p>';   // NAD83-UTM Error    
    }
    
    
}
           
function validateData() 
{
  document.utmLocTool.q64.value = document.utmLocTool.q64.value.replace(/ /g,"");         
  document.utmLocTool.q16.value = document.utmLocTool.q16.value.replace(/ /g,"");         
  document.utmLocTool.q4.value = document.utmLocTool.q4.value.replace(/ /g,"");         
  document.utmLocTool.tws.value = document.utmLocTool.tws.value.replace(/ /g,"");
  document.utmLocTool.rng.value = document.utmLocTool.rng.value.replace(/ /g,"");
  document.utmLocTool.sec.value = document.utmLocTool.sec.value.replace(/ /g,"");
  document.utmLocTool.spcs27X.value = document.utmLocTool.spcs27X.value.replace(/ /g,"");
  document.utmLocTool.spcs27Y.value = document.utmLocTool.spcs27Y.value.replace(/ /g,"");
  document.utmLocTool.cs_sp27.value = document.utmLocTool.cs_sp27.value.replace(/ /g,"");
  document.utmLocTool.spcs83X.value = document.utmLocTool.spcs83X.value.replace(/ /g,"");
  document.utmLocTool.spcs83Y.value = document.utmLocTool.spcs83Y.value.replace(/ /g,"");
  document.utmLocTool.cs_sp83.value = document.utmLocTool.cs_sp83.value.replace(/ /g,"");
  document.utmLocTool.latdeg.value = document.utmLocTool.latdeg.value.replace(/ /g,"");
  document.utmLocTool.latmin.value = document.utmLocTool.latmin.value.replace(/ /g,"");
  document.utmLocTool.latsec.value = document.utmLocTool.latsec.value.replace(/ /g,"");
  document.utmLocTool.londeg.value = document.utmLocTool.londeg.value.replace(/ /g,"");
  document.utmLocTool.lonmin.value = document.utmLocTool.lonmin.value.replace(/ /g,"");
  document.utmLocTool.lonsec.value = document.utmLocTool.lonsec.value.replace(/ /g,"");
  document.utmLocTool.utm27e.value = document.utmLocTool.utm27e.value.replace(/ /g,"");
  document.utmLocTool.utm27n.value = document.utmLocTool.utm27n.value.replace(/ /g,"");
  document.utmLocTool.cs_utm27.value = document.utmLocTool.cs_utm27.value.replace(/ /g,"");
    
  result       = "Success";
  testtr       = document.utmLocTool.tws.value + document.utmLocTool.rng.value + document.utmLocTool.sec.value +
                 document.utmLocTool.q64.value + document.utmLocTool.q16.value + document.utmLocTool.q4.value;
  testspcs27xy = document.utmLocTool.spcs27X.value + document.utmLocTool.spcs27Y.value + document.utmLocTool.cs_sp27.value;
  testspcs83xy = document.utmLocTool.spcs83X.value + document.utmLocTool.spcs83Y.value + document.utmLocTool.cs_sp83.value;
  testll       = document.utmLocTool.latdeg.value + document.utmLocTool.latmin.value + document.utmLocTool.latsec.value +
                 document.utmLocTool.londeg.value + document.utmLocTool.lonmin.value + document.utmLocTool.lonsec.value;
  testutm27xy  = document.utmLocTool.utm27e.value + document.utmLocTool.utm27n.value + document.utmLocTool.cs_utm27.value;     
  
  
//             General Edit
  if ( testtr       == "" && 
       testspcs27xy == "00" && 
       testspcs83xy == "00" &&        
       testll       == "000000" && 
       testutm27xy  == "00" )  
  {
    startUp();      
    alert("Please Enter Selection Criteria.");      
    result = "Fail";  
    return;
  }	

//   PLSS Edits
  if ( testtr != "" ) 
  { 
    if ( document.utmLocTool.q64.value != "" ) 
    {
      if ( document.utmLocTool.q16.value == "")
      {           
        resetNAD83();
        document.utmLocTool.q16.focus();  
        alert("Must enter a value for Q16 when Q64 value is present.");
        result = "Fail";  
        return;
      }
      
      if ( document.utmLocTool.q4.value == "")
      {           
        resetNAD83();
        document.utmLocTool.q4.focus();  
        alert("Must enter a value for Q4 when Q16 and Q64 values are present.");
        result = "Fail";  
        return;
      }
    }
    
    if ( document.utmLocTool.q16.value != "" ) 
    {
      if ( document.utmLocTool.q4.value == "")
      {           
        resetNAD83();
        document.utmLocTool.q4.focus();  
        alert("Must enter a value for Q4 when Q16 value is present.");
        result = "Fail";  
        return;
      }      
    }
    
    if ( document.utmLocTool.sec.value == "" ) 
    {
      resetNAD83();
      document.utmLocTool.sec.focus();
      alert("Must enter a value for Section.");
      result = "Fail";  
      return;
    }      
    
    if ( document.utmLocTool.tws.value == "" ) 
    {
      resetNAD83();  
      document.utmLocTool.tws.focus();       
      alert("Must enter a value for Township.");
      result = "Fail";  
      return;
    }
  
    if ( document.utmLocTool.rng.value == "" ) 
    {
      resetNAD83();
      document.utmLocTool.rng.focus();  
      alert("Must enter a value for Range.");
      result = "Fail";  
      return;
    }
  } // end PLSS edits
  
//   start NAD27-SPCS X/Y Edits  
  if ( testspcs27xy != "00" )  
  {        
    if ( document.utmLocTool.spcs27X.value == "0" ) 
    {
      resetNAD83();  
      document.utmLocTool.spcs27X.focus(); 
      alert("Must enter a value for NAD27-SPCS  X.");
      result = "Fail"; 
      return;
    } 
  
    if ( document.utmLocTool.spcs27Y.value == "0" ) 
    {
      resetNAD83();   
      document.utmLocTool.spcs27Y.focus();           
      alert("Must enter a value for NAD27-SPCS  Y.");
      result = "Fail";
      return;
    }    
    
    if ( document.utmLocTool.cs_sp27.value == "" ) 
    {
      resetNAD83();  
      document.utmLocTool.cs_sp27.focus();        
      alert("Must select a value for NAD27 State Plane Coordinate System.");
      result = "Fail";  
      return;
    }
// 
// An 'enum' data structure was used in the 'utmLocTool.jsp' to format the
// SPCS drop-down menu.  Enums are similar to 'hash maps' ==> (key, value) pairs.  
// An 'enum' starts with a value of 1.  For the coordinate systems
// to 'coordinate' with 'enums', they must also start with a value of 1.                       
   
    if  ( document.utmLocTool.cs_sp27.value == "1" )  // start "NAD_1927_SP_FT_NM_East" edits
    {    
      if ( document.utmLocTool.spcs27X.value.valueOf() < sp27eastxmin || 
           document.utmLocTool.spcs27X.value.valueOf() > sp27eastxmax )
      {
        resetNAD83();
        alert("X must be between " + sp27eastxmin + " and " + sp27eastxmax + ".");        
        document.utmLocTool.spcs27X.focus();        
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.spcs27Y.value.valueOf() < sp27eastymin || 
           document.utmLocTool.spcs27Y.value.valueOf() > sp27eastymax )
      {
        resetNAD83();
        alert("Y must be between " + sp27eastymin + " and " + sp27eastymax + ".");        
        document.utmLocTool.spcs27Y.focus();         
        result = "Fail"; 
        return;
      }
    } // end "NAD_1927_SP_FT_NM_East" edits
    
    if  ( document.utmLocTool.cs_sp27.value == "2" )  // start "NAD_1927_SP_FT_NM_Central" edits    
    {    
      if ( document.utmLocTool.spcs27X.value.valueOf() < sp27cntrxmin || 
           document.utmLocTool.spcs27X.value.valueOf() > sp27cntrxmax )
      {
        resetNAD83(); 
        alert("X must be between " + sp27cntrxmin + " and " + sp27cntrxmax + ".");        
        document.utmLocTool.spcs27X.focus();        
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.spcs27Y.value.valueOf() < sp27cntrymin || 
           document.utmLocTool.spcs27Y.value.valueOf() > sp27cntrymax ) 
      {
        resetNAD83();  
        document.utmLocTool.spcs27Y.focus();            
        alert("Y must be between " + sp27cntrymin + " and " + sp27cntrymax + ".");
        result = "Fail"; 
        return;
      }
    } // end "NAD_1927_SP_FT_NM_Central" edits    
    
    if  ( document.utmLocTool.cs_sp27.value == "3" )  // start "NAD_1927_SP_FT_NM_West" edits        
    {    
      if ( document.utmLocTool.spcs27X.value.valueOf() < sp27westxmin || 
           document.utmLocTool.spcs27X.value.valueOf() > sp27westxmax )
      {
        resetNAD83(); 
        document.utmLocTool.spcs27X.focus();        
        alert("X must be between " + sp27westxmin + " and " + sp27westxmax + ".");
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.spcs27Y.value.valueOf() < sp27westymin || 
           document.utmLocTool.spcs27Y.value.valueOf() > sp27westymax ) 
      {
        resetNAD83();
        document.utmLocTool.spcs27Y.focus();                
        alert("Y must be between " + sp27westymin + " and " + sp27westymax + ".");
        result = "Fail"; 
        return;
      }
    } // end "NAD_1927_SP_FT_NM_West" edits        
  
  } // end NAD27-SPCS X/Y edits
 
//   start NAD83-SPCS X/Y Edits
  if ( testspcs83xy != "00" ) 
  {        
    if ( document.utmLocTool.spcs83X.value == "0" ) 
    {
      resetNAD83();  
      document.utmLocTool.spcs83X.focus(); 
      alert("Must enter a value for NAD83-SPCS X.");
      result = "Fail"; 
      return;
    } 
  
    if ( document.utmLocTool.spcs83Y.value == "0" ) 
    {
      resetNAD83();   
      document.utmLocTool.spcs83Y.focus();           
      alert("Must enter a value for NAD83-SPCS Y.");
      result = "Fail";
      return;
    }    
    
    if ( document.utmLocTool.cs_sp83.value == "" ) 
    {
      resetNAD83();  
      document.utmLocTool.cs_sp83.focus();        
      alert("Must select a value for NAD83 State Plane Coordinate System.");
      result = "Fail";  
      return;
    }
// 
// An 'enum' data structure was used in the 'utmLocTool.jsp' to format the
// SPCS drop-down menu.  Enums are similar to 'hash maps' ==> (key, value) pairs.  
// An 'enum' starts with a value of 1.  For the coordinate systems
// to 'coordinate' with 'enums', they must also start with a value of 1.                       
   
    if  ( document.utmLocTool.cs_sp83.value == "1" )  // start "NAD_1983_SP_FT_NM_East" edits
    {    
      if ( document.utmLocTool.spcs83X.value.valueOf() < sp83eastxmin || 
           document.utmLocTool.spcs83X.value.valueOf() > sp83eastxmax )
      {
        resetNAD83();
        alert("X must be between " + sp83eastxmin + " and " + sp83eastxmax + ".");        
        document.utmLocTool.spcs83X.focus();        
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.spcs83Y.value.valueOf() < sp83eastymin || 
           document.utmLocTool.spcs83Y.value.valueOf() > sp83eastymax ) 
      {
        resetNAD83();
        alert("Y must be between " + sp83eastymin + " and " + sp83eastymax + ".");        
        document.utmLocTool.spcs83Y.focus();         
        result = "Fail"; 
        return;
      }
    } // end "NAD_1983_SP_FT_NM_East" edits
    
    if  ( document.utmLocTool.cs_sp83.value == "2" )  // start "NAD_1983_SP_FT_NM_Central" edits    
    {    
      if ( document.utmLocTool.spcs83X.value.valueOf() < sp83cntrxmin || 
           document.utmLocTool.spcs83X.value.valueOf() > sp83cntrxmax )
      {
        resetNAD83(); 
        alert("X must be between " + sp83cntrxmin + " and " + sp83cntrxmax + ".");        
        document.utmLocTool.spcs83X.focus();        
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.spcs83Y.value.valueOf() < sp83cntrymin || 
           document.utmLocTool.spcs83Y.value.valueOf() > sp83cntrymax ) 
      {
        resetNAD83();  
        document.utmLocTool.spcs83Y.focus();            
        alert("Y must be between " + sp83cntrymin + " and " + sp83cntrymax + ".");
        result = "Fail"; 
        return;
      }
    } // end "NAD_1983_SP_FT_NM_Central" edits    
    
    if  ( document.utmLocTool.cs_sp83.value == "3" )  // start "NAD_1983_SP_FT_NM_West" edits        
    {    
      if ( document.utmLocTool.spcs83X.value.valueOf() < sp83westxmin || 
           document.utmLocTool.spcs83X.value.valueOf() > sp83westxmax ) 
      {
        resetNAD83(); 
        document.utmLocTool.spcs83X.focus();        
        alert("X must be between " + sp83westxmin + " and " + sp83westxmax + ".");
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.spcs83Y.value.valueOf() < sp83westymin || 
           document.utmLocTool.spcs83Y.value.valueOf() > sp83westymax ) 
      {
        resetNAD83();
        document.utmLocTool.spcs83Y.focus();                
        alert("Y must be between " + sp83westymin + " and " + sp83westymax + ".");
        result = "Fail"; 
        return;
      }
    } // end "NAD_1983_SP_FT_NM_West" edits        
  
  } // end NAD83-SPCS X/Y edits

//   start Lon/Lat Edits
  if ( testll != "000000" ) 
  {  
    if (  document.utmLocTool.londeg.value.valueOf() < londmin || 
          document.utmLocTool.londeg.value.valueOf() > londmax ) 
    {
      resetNAD83();  
      document.utmLocTool.londeg.focus();      
      alert("Longitude degree must be between " + londmin + " and " + londmax + ".");
      result = "Fail"; 
      return;
    }

        if ( document.utmLocTool.lonmin.value.valueOf() > max59 || 
             document.utmLocTool.lonmin.value.valueOf() < min00 ) 
    {
      resetNAD83(); 
      document.utmLocTool.lonmin.focus();       
      alert("Longitude minutes must be between " + min00 + " and " + max59 + ".");
      result = "Fail";  
      return;
    }

    if ( document.utmLocTool.lonsec.value.valueOf() > max59 || 
         document.utmLocTool.lonsec.value.valueOf() < min00 ) 
    {
      resetNAD83();   
      document.utmLocTool.lonsec.focus();        
      alert("Longitude seconds must be between " + min00 + " and " + max59 + ".");
      result = "Fail";  
      return;
    }
  
    if ( document.utmLocTool.latdeg.value.valueOf() < latdmin || 
         document.utmLocTool.latdeg.value.valueOf() > latdmax )
    {
      resetNAD83();   
      document.utmLocTool.latdeg.focus();      
      alert("Latitude degree must be between " + latdmin + " and " + latdmax + ".");
      result = "Fail"; 
      return;
    }
    
        if ( document.utmLocTool.latmin.value.valueOf() > max59 || 
             document.utmLocTool.latmin.value.valueOf() < min00 ) 
    {
      resetNAD83();  
      document.utmLocTool.latmin.focus();        
      alert("Latitude minutes must be between " + min00 + " and " + max59 + ".");
      result = "Fail";  
      return;
    }

        if ( document.utmLocTool.latsec.value.valueOf() > max59 || 
             document.utmLocTool.latsec.value.valueOf() < min00 ) 
    {
      resetNAD83();
      document.utmLocTool.latsec.focus();        
      alert("Latitude seconds must be between " + min00 + " and " + max59 + ".");
      result = "Fail";  
      return;
    }
  }  // end Lon/Lat edits  
               
//   start NAD27-UTM X/Y Edits
  if ( testutm27xy != "00" )
  { 
    if ( document.utmLocTool.utm27e.value == "0" ) 
    {
      resetNAD83(); 
      document.utmLocTool.utm27e.focus();      
      alert("Must enter a value for NAD27-UTM X.");
      result = "Fail"; 
      return;
    } 

    if ( document.utmLocTool.utm27n.value == "0" ) 
    {
      resetNAD83(); 
      document.utmLocTool.utm27n.focus();      
      alert("Must enter a value for NAD27-UTM Y.");
      result = "Fail"; 
      return;
    } 
   
    if ( document.utmLocTool.cs_utm27.value == "" ) 
    {
      resetNAD83();
      document.utmLocTool.cs_utm27.focus();        
      alert("Must select a value for NAD27 UTM Coordinate System.");
      result = "Fail";  
      return;
    }

    if ( document.utmLocTool.cs_utm27.value == "1" )  // start "NAD_1927_UTM_Zone_12N" edits
    {    
      if ( document.utmLocTool.utm27e.value.valueOf() < utm2712xmin || 
           document.utmLocTool.utm27e.value.valueOf() > utm2712xmax )
      {
        resetNAD83();  
        document.utmLocTool.utm27e.focus();        
        alert("X must be between " + utm2712xmin + " and " + utm2712xmax + ".");
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.utm27n.value.valueOf() < utm2712ymin || 
           document.utmLocTool.utm27n.value.valueOf() > utm2712ymax ) 
      {
        resetNAD83();   
        document.utmLocTool.utm27n.focus();            
        alert("Y must be between " + utm2712ymin + " and " + utm2712ymax + ".");
        result = "Fail"; 
        return;
      }
    } // end "NAD_1927_UTM_Zone_12N" edits
    
    if ( document.utmLocTool.cs_utm27.value == "2" )  // start "NAD_1927_UTM_Zone_13N" edits    
    {    
      if ( document.utmLocTool.utm27e.value.valueOf() < utm2713xmin || 
           document.utmLocTool.utm27e.value.valueOf() > utm2713xmax )
      {
        resetNAD83();
        document.utmLocTool.utm27e.focus();        
        alert("X must be between " + utm2713xmin + " and " + utm2713xmax + ".");
        result = "Fail"; 
        return;
      }
 
      if ( document.utmLocTool.utm27n.value.valueOf() < utm2713ymin || 
           document.utmLocTool.utm27n.value.valueOf() > utm2713ymax )
      {
        resetNAD83();  
        document.utmLocTool.utm27n.focus();           
        alert("Y must be between " + utm2713ymin + " and " + utm2713ymax + ".");
        result = "Fail";
        return;
      }
    } // end "NAD_1927_UTM_Zone_13N" edits    
  } // end NAD27-UTM X/Y edits
    
//   Successful entry - time to convert to NAD83-UTM.               
  if ( result == "Success" )
  {
    if ( testtr != "")
    {
      document.utmLocTool.submitbutton.value="plss";
    } 
    else if ( testspcs27xy != "00" )
         {
           document.utmLocTool.submitbutton.value="spcs27";
         }  
         else if ( testspcs83xy != "00" )
              {
                 document.utmLocTool.submitbutton.value="spcs83";
              }           
              else if ( testll != "000000")
                   {
                     document.utmLocTool.submitbutton.value="dms";
                   }  
                   
                   else if ( testutm27xy != "00")
                        {
                          document.utmLocTool.submitbutton.value="utm27";
                        }

                   document.forms[0].submit(); 
  }                 
}      // end function validateData()
