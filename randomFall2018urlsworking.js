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

entryContent[0] = "<a href=\"https://annananieva.blogspot.com/\">Anna's Blog"
entryContent[1] = "<a href=\"https://aidanbyrnesblog.blogspot.com/ \">Aidan's Blog"
entryContent[2] = "<a href=\"http://nowthisismyblog1.blogspot.com \">Leah's Blog"
entryContent[3] = "<a href=\"http://dillonsmultimedia.blogspot.com/\">Dillion's Blog"
entryContent[4] = "<a href=\"https://fridayknightgames.blogspot.com/ \">Darragh's Blog"
entryContent[5] = "<a href=\"https://ryanfarrellcdm.blogspot.com/ \">Ryan's Blog"
entryContent[6] = "<a href=\"https://www.nicolegoodmanmultimediadevelopment.blogspot.com \">Nicole's Blog"
entryContent[7] = "<a href=\"http://johnhartigan1198.blogspot.com \">John's Blog"
entryContent[8] = "<a href=\"https://krislexic.blogspot.com/ \">Krzystof's Blog"
entryContent[9] = "<a href=\"http://esmeemacp.blogspot.com \">Esmee's Blog"
entryContent[10] = "<a href=\"http://ianmaher.blogspot.com \">Ian's Blog"
entryContent[11] = "<a href=\"http://rachelmenton.blogspot.com\">Rachel's Blog"
entryContent[12] = "<a href=\"https://certainlyross.blogspot.com/\">Ross's Blog"
entryContent[13] = "<a href=\"https://reynsmedia.blogspot.com/\">James's Blog"
entryContent[14] = "<a href=\"http://sahacdmblog.blogspot.com\">Saha's Blog"
entryContent[15] = "<a href=\"https://cdmmultimedia.blogspot.com/\">Chloe's Blog"
entryContent[16] = "needs to do it"
entryContent[17] = "missing"
entryContent[18] = "missing"
entryContent[19] = "<a href=\"https://conorbrennan98.blogspot.com/\">Conor's Blog"
entryContent[20] = "<a href=\"https://b00100903.blogspot.com\">Leah's Blog"
entryContent[21] = "<a href=\"https://chriscarneyofficial.blogspot.com/\">Chris's Blog"
entryContent[22] = "<a href=\"https://melissacdm.blogspot.com\">Mellisa's Blog"
entryContent[23] = "<a href=\"http://clarkeschats.blogspot.com\">Ellen's Blog"
entryContent[24] = "<a href=\"https://ciarandowling.blogspot.com/\">Ciran's Blog"
entryContent[25] = "<a href=\"http://b00102923.blogspot.com/\">Hollie's Blog"
entryContent[26] = "<a href=\"https://dayvjones24.blogspot.com\">David's Blog"
entryContent[27] = "<a href=\"http://siobhan70.blogspot.com\">Siobhan's Blog"
entryContent[28] = "<a href=\"http://anthonymcel.blogspot.com\">Anthony's Blog"
entryContent[29] = "<a href=\"http://eoinor.blogspot.com\">Eoin's Blog"
entryContent[30] = "missing"
entryContent[31] = "<a href=\"http://valeriereilly.blogspot.com\">Valerie's Blog"
entryContent[32] = "<a href=\"https://smithniamh27.blogspot.com\">Niamh's Blog"
entryContent[33] = "<a href=\"http://thesingularmedia.blogspot.com\">Shane's Blog"
entryContent[34] = "<a href=\"https://b00103251.blogspot.com\">Nhu's Blog"
entryContent[35] = "<a href=\"https://b00080381.blogspot.com\">Brendan's Blog"
entryContent[36] = "<a href=\"https://okwthcalm.blogspot.com\">Trevor's Blog</a>"
entryContent[37] = "missing"
entryContent[38] = "<a href=\"https://emmaloubyrne.blogspot.com\">Emma's Blog"
entryContent[39] = "<a href=\"https://robsblog1997.blogspot.com/\">Robert's Blog"
entryContent[40] = "<a href=\"http://corbahydrates.blogspot.com\">Adam's Blog"
entryContent[41] = "<a href=\"https://jamiesmm.blogspot.com/\">Jamie's Blog"
entryContent[42] = "<a href=\"https://shanedgame.blogspot.com/\">Shane's Blog"
entryContent[43] = "<a href=\"https://nateeli98.blogspot.com\">Nathan's Blog"
entryContent[44] = "<a href=\"http://evagarrettblogs.blogspot.com\">Eva's Blog"
entryContent[45] = "<a href=\"https://marcingrabicki.blogspot.com\">Marcin's Blog"
entryContent[46] = "<a href=\"http://multimediadevblog.blogspot.com\">Isabel's Blog"
entryContent[47] = "<a href=\"http://rainbowhairwrites.blogspot.com\">Adriana's Blog"
entryContent[48] = "<a href=\"https://chloelennonodonoghue.blogspot.com\">Chloe's Blog"
entryContent[49] = "<a href=\"http://liapinas.blogspot.com\">Andrej's Blog"
entryContent[50] = "<a href=\"https://hannahmcgl.blogspot.com\">Hannah's Blog"
entryContent[51] = "<a href=\"http://robynmulhall3.blogspot.com\">Robyn's Blog"
entryContent[52] = "<a href=\"http://b00107033daniblog.blogspot.com/\">Dani's Blog"
entryContent[53] = "<a href=\"https://veerachaipitakpoolsin.blogspot.com\">Veerachai's Blog"
entryContent[54] = "<a href=\"https://b00101961multimedia.blogspot.com\">Stephannie's Blog</a>"
entryContent[55] = "<a href=\"http://b00093564.blogspot.com\">Aisling's Blog</a>"
entryContent[56] = "<a href=\"http://witnessedlife.blogspot.com\">Witness's Blog</a>"
entryContent[57] = "<a href=\"https://shaneconsidine.blogspot.com\">Shane's Blog</a>"

var randomNumber = Math.random()
randomNumber *= varLength
randomNumber = parseInt(randomNumber)
if(isNaN(randomNumber)) randomNumber = 0
else randomNumber %= varLength
selectedContent = entryContent[randomNumber]

document.write (selectedContent)
