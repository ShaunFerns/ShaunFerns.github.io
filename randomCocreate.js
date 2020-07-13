// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

varLength = 3
var entryContent = new Array(varLength)

ntryContent[0] = "<div align=\"center\"><img alt=\"People\" src=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/people-1.png\"  ><br><i>People</i> (<a href=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/people-1.png\" target=\"_blank\">Test People</a>)</div>"
entryContent[1] = "<div align=\"center\"><img alt=\"Planet\" src=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/planet-1.png\"  ><br><i>People</i> (<a href=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/planet-1.png\" target=\"_blank\">Test Planet</a>)</div>"
entryContent[2] = "<div align=\"center\"><img alt=\"Partner\" src=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/partnership-1.png\"  ><br><i>People</i> (<a href=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/partnership-1.png\" target=\"_blank\">Test partner</a>)</div>"


var randomNumber = Math.random()
randomNumber *= varLength
randomNumber = parseInt(randomNumber)
if(isNaN(randomNumber)) randomNumber = 0
else randomNumber %= varLength
selectedContent = entryContent[randomNumber]

document.write (selectedContent)
