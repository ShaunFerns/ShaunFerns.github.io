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

entryContent[0] = "<img src=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/people-2.png\" "
entryContent[1] = "<img src=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/planet-2.png\" "
entryContent[2] = "<img src=\"https://cdmonline.ie/cocreate/wp-content/uploads/sites/8/2020/07/partnership-2.png\" "

var randomNumber = Math.random()
randomNumber *= varLength
randomNumber = parseInt(randomNumber)
if(isNaN(randomNumber)) randomNumber = 0
else randomNumber %= varLength
selectedContent = entryContent[randomNumber]

document.write (selectedContent)
