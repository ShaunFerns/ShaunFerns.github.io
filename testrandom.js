// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

varLength = 2
var entryContent = new Array(varLength)

entryContent[0] = "<img src=\"https://sd-discovery.org/resources/Pictures/cropped-gamedesign-bg.jpg\" alt=\"games\" height=\"200\" width=\"200\">"
entryContent[1] = "<img src=\"https://i.ytimg.com/vi/TOQTZ6N_eVg/maxresdefault.jpg\" alt=\"games\" height=\"200\" width=\"200\""

var randomNumber = Math.random()
randomNumber *= varLength
randomNumber = parseInt(randomNumber)
if(isNaN(randomNumber)) randomNumber = 0
else randomNumber %= varLength
selectedContent = entryContent[randomNumber]

document.write (selectedContent)
