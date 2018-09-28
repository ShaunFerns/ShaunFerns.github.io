// ************************************************************************************
// ** This file has been created with the Rotating Content Tool by Amesbury Web.     **
// ** For more information, visit us on the web:                                     **
// **                                                                                **
// **     Rotating Content Tool   -- http://rotatecontent.com/                       **
// **     Company: Amesbury Web   -- http://amesburyweb.com/                         **
// **     Author:  Randy Hoyt     -- http://randyhoyt.com/                           **
// **                                                                                **
// ************************************************************************************

varLength = 58
var entryContent = new Array(varLength)

entryContent[0] = "https://annananieva.blogspot.com/"
entryContent[1] = "https://aidanbyrnesblog.blogspot.com/ "
entryContent[2] = "http://nowthisismyblog1.blogspot.com "
entryContent[3] = "http://dillonsmultimedia.blogspot.com/"
entryContent[4] = "https://fridayknightgames.blogspot.com/ "
entryContent[5] = "https://ryanfarrellcdm.blogspot.com/ "
entryContent[6] = "https://www.nicolegoodmanmultimediadevelopment.blogspot.com "
entryContent[7] = "http://johnhartigan1198.blogspot.com "
entryContent[8] = "https://krislexic.blogspot.com/ "
entryContent[9] = "http://esmeemacp.blogspot.com "
entryContent[10] = "http://ianmaher.blogspot.com "
entryContent[11] = "http://rachelmenton.blogspot.com"
entryContent[12] = "https://certainlyross.blogspot.com/"
entryContent[13] = "https://reynsmedia.blogspot.com/"
entryContent[14] = "http://sahacdmblog.blogspot.com"
entryContent[15] = "https://cdmmultimedia.blogspot.com/"
entryContent[16] = "needs to do it"
entryContent[17] = "missing"
entryContent[18] = "missing"
entryContent[19] = "https://conorbrennan98.blogspot.com/"
entryContent[20] = "https://b00100903.blogspot.com"
entryContent[21] = "https://chriscarneyofficial.blogspot.com/"
entryContent[22] = "https://melissacdm.blogspot.com"
entryContent[23] = "http://clarkeschats.blogspot.com"
entryContent[24] = "https://ciarandowling.blogspot.com/"
entryContent[25] = "http://b00102923.blogspot.com/"
entryContent[26] = "https://www.blogger.com/blogger.g?blogID=914124689796055677#allposts"
entryContent[27] = "http://siobhan70.blogspot.com"
entryContent[28] = "http://anthonymcel.blogspot.com"
entryContent[29] = "http://eoinor.blogspot.com"
entryContent[30] = "missing"
entryContent[31] = "http://valeriereilly.blogspot.com"
entryContent[32] = "https://smithniamh27.blogspot.com/"
entryContent[33] = "http://thesingularmedia.blogspot.com/"
entryContent[34] = "https://b00103251.blogspot.com"
entryContent[35] = "https://b00080381.blogspot.com/"
entryContent[36] = "missing"
entryContent[37] = "missing"
entryContent[38] = "https://emmaloubyrne.blogspot.com"
entryContent[39] = "https://robsblog1997.blogspot.com/"
entryContent[40] = "http://corbahydrates.blogspot.com"
entryContent[41] = "https://jamiesmm.blogspot.com/"
entryContent[42] = "https://shanedgame.blogspot.com/"
entryContent[43] = "https://nateeli98.blogspot.com"
entryContent[44] = "http://evagarrettblogs.blogspot.com"
entryContent[45] = "https://marcingrabicki.blogspot.com"
entryContent[46] = "http://multimediadevblog.blogspot.com"
entryContent[47] = "http://rainbowhairwrites.blogspot.com"
entryContent[48] = "https://chloelennonodonoghue.blogspot.com"
entryContent[49] = "http://liapinas.blogspot.com"
entryContent[50] = "https://hannahmcgl.blogspot.com"
entryContent[51] = "http://robynmulhall3.blogspot.com"
entryContent[52] = "http://b00107033daniblog.blogspot.com/"
entryContent[53] = "https://veerachaipitakpoolsin.blogspot.com"
entryContent[54] = "missing"
entryContent[55] = "http://b00093564.blogspot.com"
entryContent[56] = "missing"
entryContent[57] = "missing"

var randomNumber = Math.random()
randomNumber *= varLength
randomNumber = parseInt(randomNumber)
if(isNaN(randomNumber)) randomNumber = 0
else randomNumber %= varLength
selectedContent = entryContent[randomNumber]

document.write (selectedContent)