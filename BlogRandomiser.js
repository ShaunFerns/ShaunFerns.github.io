// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

varLength = 4
var entryContent = new Array(varLength)

entryContent[0] = "http://b00102923.blogspot.com/"
entryContent[1] = "https://smithniamh27.blogspot.com/"
entryContent[2] = "https://cdmmultimedia.blogspot.com/"
entryContent[3] = "https://conorbrennan98.blogspot.com/"

var randomNumber = Math.random()
randomNumber *= varLength
randomNumber = parseInt(randomNumber)
if(isNaN(randomNumber)) randomNumber = 0
else randomNumber %= varLength
selectedContent = entryContent[randomNumber]

document.write (selectedContent)