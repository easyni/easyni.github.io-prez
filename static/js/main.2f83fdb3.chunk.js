(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,n){e.exports=n(864)},241:function(e,t,n){},264:function(e,t,n){var r={"./Binary_Property/ASCII.js":265,"./Binary_Property/ASCII_Hex_Digit.js":266,"./Binary_Property/Alphabetic.js":267,"./Binary_Property/Any.js":268,"./Binary_Property/Assigned.js":269,"./Binary_Property/Bidi_Control.js":270,"./Binary_Property/Bidi_Mirrored.js":271,"./Binary_Property/Case_Ignorable.js":272,"./Binary_Property/Cased.js":273,"./Binary_Property/Changes_When_Casefolded.js":274,"./Binary_Property/Changes_When_Casemapped.js":275,"./Binary_Property/Changes_When_Lowercased.js":276,"./Binary_Property/Changes_When_NFKC_Casefolded.js":277,"./Binary_Property/Changes_When_Titlecased.js":278,"./Binary_Property/Changes_When_Uppercased.js":279,"./Binary_Property/Dash.js":280,"./Binary_Property/Default_Ignorable_Code_Point.js":281,"./Binary_Property/Deprecated.js":282,"./Binary_Property/Diacritic.js":283,"./Binary_Property/Emoji.js":284,"./Binary_Property/Emoji_Component.js":285,"./Binary_Property/Emoji_Modifier.js":286,"./Binary_Property/Emoji_Modifier_Base.js":287,"./Binary_Property/Emoji_Presentation.js":288,"./Binary_Property/Extended_Pictographic.js":289,"./Binary_Property/Extender.js":290,"./Binary_Property/Grapheme_Base.js":291,"./Binary_Property/Grapheme_Extend.js":292,"./Binary_Property/Hex_Digit.js":293,"./Binary_Property/IDS_Binary_Operator.js":294,"./Binary_Property/IDS_Trinary_Operator.js":295,"./Binary_Property/ID_Continue.js":296,"./Binary_Property/ID_Start.js":297,"./Binary_Property/Ideographic.js":298,"./Binary_Property/Join_Control.js":299,"./Binary_Property/Logical_Order_Exception.js":300,"./Binary_Property/Lowercase.js":301,"./Binary_Property/Math.js":302,"./Binary_Property/Noncharacter_Code_Point.js":303,"./Binary_Property/Pattern_Syntax.js":304,"./Binary_Property/Pattern_White_Space.js":305,"./Binary_Property/Quotation_Mark.js":306,"./Binary_Property/Radical.js":307,"./Binary_Property/Regional_Indicator.js":308,"./Binary_Property/Sentence_Terminal.js":309,"./Binary_Property/Soft_Dotted.js":310,"./Binary_Property/Terminal_Punctuation.js":311,"./Binary_Property/Unified_Ideograph.js":312,"./Binary_Property/Uppercase.js":313,"./Binary_Property/Variation_Selector.js":314,"./Binary_Property/White_Space.js":315,"./Binary_Property/XID_Continue.js":316,"./Binary_Property/XID_Start.js":317,"./General_Category/Cased_Letter.js":318,"./General_Category/Close_Punctuation.js":319,"./General_Category/Connector_Punctuation.js":320,"./General_Category/Control.js":321,"./General_Category/Currency_Symbol.js":322,"./General_Category/Dash_Punctuation.js":323,"./General_Category/Decimal_Number.js":324,"./General_Category/Enclosing_Mark.js":325,"./General_Category/Final_Punctuation.js":326,"./General_Category/Format.js":327,"./General_Category/Initial_Punctuation.js":328,"./General_Category/Letter.js":329,"./General_Category/Letter_Number.js":330,"./General_Category/Line_Separator.js":331,"./General_Category/Lowercase_Letter.js":332,"./General_Category/Mark.js":333,"./General_Category/Math_Symbol.js":334,"./General_Category/Modifier_Letter.js":335,"./General_Category/Modifier_Symbol.js":336,"./General_Category/Nonspacing_Mark.js":337,"./General_Category/Number.js":338,"./General_Category/Open_Punctuation.js":339,"./General_Category/Other.js":340,"./General_Category/Other_Letter.js":341,"./General_Category/Other_Number.js":342,"./General_Category/Other_Punctuation.js":343,"./General_Category/Other_Symbol.js":344,"./General_Category/Paragraph_Separator.js":345,"./General_Category/Private_Use.js":346,"./General_Category/Punctuation.js":347,"./General_Category/Separator.js":348,"./General_Category/Space_Separator.js":349,"./General_Category/Spacing_Mark.js":350,"./General_Category/Surrogate.js":351,"./General_Category/Symbol.js":352,"./General_Category/Titlecase_Letter.js":353,"./General_Category/Unassigned.js":354,"./General_Category/Uppercase_Letter.js":355,"./Script/Adlam.js":356,"./Script/Ahom.js":357,"./Script/Anatolian_Hieroglyphs.js":358,"./Script/Arabic.js":359,"./Script/Armenian.js":360,"./Script/Avestan.js":361,"./Script/Balinese.js":362,"./Script/Bamum.js":363,"./Script/Bassa_Vah.js":364,"./Script/Batak.js":365,"./Script/Bengali.js":366,"./Script/Bhaiksuki.js":367,"./Script/Bopomofo.js":368,"./Script/Brahmi.js":369,"./Script/Braille.js":370,"./Script/Buginese.js":371,"./Script/Buhid.js":372,"./Script/Canadian_Aboriginal.js":373,"./Script/Carian.js":374,"./Script/Caucasian_Albanian.js":375,"./Script/Chakma.js":376,"./Script/Cham.js":377,"./Script/Cherokee.js":378,"./Script/Common.js":379,"./Script/Coptic.js":380,"./Script/Cuneiform.js":381,"./Script/Cypriot.js":382,"./Script/Cyrillic.js":383,"./Script/Deseret.js":384,"./Script/Devanagari.js":385,"./Script/Dogra.js":386,"./Script/Duployan.js":387,"./Script/Egyptian_Hieroglyphs.js":388,"./Script/Elbasan.js":389,"./Script/Ethiopic.js":390,"./Script/Georgian.js":391,"./Script/Glagolitic.js":392,"./Script/Gothic.js":393,"./Script/Grantha.js":394,"./Script/Greek.js":395,"./Script/Gujarati.js":396,"./Script/Gunjala_Gondi.js":397,"./Script/Gurmukhi.js":398,"./Script/Han.js":399,"./Script/Hangul.js":400,"./Script/Hanifi_Rohingya.js":401,"./Script/Hanunoo.js":402,"./Script/Hatran.js":403,"./Script/Hebrew.js":404,"./Script/Hiragana.js":405,"./Script/Imperial_Aramaic.js":406,"./Script/Inherited.js":407,"./Script/Inscriptional_Pahlavi.js":408,"./Script/Inscriptional_Parthian.js":409,"./Script/Javanese.js":410,"./Script/Kaithi.js":411,"./Script/Kannada.js":412,"./Script/Katakana.js":413,"./Script/Kayah_Li.js":414,"./Script/Kharoshthi.js":415,"./Script/Khmer.js":416,"./Script/Khojki.js":417,"./Script/Khudawadi.js":418,"./Script/Lao.js":419,"./Script/Latin.js":420,"./Script/Lepcha.js":421,"./Script/Limbu.js":422,"./Script/Linear_A.js":423,"./Script/Linear_B.js":424,"./Script/Lisu.js":425,"./Script/Lycian.js":426,"./Script/Lydian.js":427,"./Script/Mahajani.js":428,"./Script/Makasar.js":429,"./Script/Malayalam.js":430,"./Script/Mandaic.js":431,"./Script/Manichaean.js":432,"./Script/Marchen.js":433,"./Script/Masaram_Gondi.js":434,"./Script/Medefaidrin.js":435,"./Script/Meetei_Mayek.js":436,"./Script/Mende_Kikakui.js":437,"./Script/Meroitic_Cursive.js":438,"./Script/Meroitic_Hieroglyphs.js":439,"./Script/Miao.js":440,"./Script/Modi.js":441,"./Script/Mongolian.js":442,"./Script/Mro.js":443,"./Script/Multani.js":444,"./Script/Myanmar.js":445,"./Script/Nabataean.js":446,"./Script/New_Tai_Lue.js":447,"./Script/Newa.js":448,"./Script/Nko.js":449,"./Script/Nushu.js":450,"./Script/Ogham.js":451,"./Script/Ol_Chiki.js":452,"./Script/Old_Hungarian.js":453,"./Script/Old_Italic.js":454,"./Script/Old_North_Arabian.js":455,"./Script/Old_Permic.js":456,"./Script/Old_Persian.js":457,"./Script/Old_Sogdian.js":458,"./Script/Old_South_Arabian.js":459,"./Script/Old_Turkic.js":460,"./Script/Oriya.js":461,"./Script/Osage.js":462,"./Script/Osmanya.js":463,"./Script/Pahawh_Hmong.js":464,"./Script/Palmyrene.js":465,"./Script/Pau_Cin_Hau.js":466,"./Script/Phags_Pa.js":467,"./Script/Phoenician.js":468,"./Script/Psalter_Pahlavi.js":469,"./Script/Rejang.js":470,"./Script/Runic.js":471,"./Script/Samaritan.js":472,"./Script/Saurashtra.js":473,"./Script/Sharada.js":474,"./Script/Shavian.js":475,"./Script/Siddham.js":476,"./Script/SignWriting.js":477,"./Script/Sinhala.js":478,"./Script/Sogdian.js":479,"./Script/Sora_Sompeng.js":480,"./Script/Soyombo.js":481,"./Script/Sundanese.js":482,"./Script/Syloti_Nagri.js":483,"./Script/Syriac.js":484,"./Script/Tagalog.js":485,"./Script/Tagbanwa.js":486,"./Script/Tai_Le.js":487,"./Script/Tai_Tham.js":488,"./Script/Tai_Viet.js":489,"./Script/Takri.js":490,"./Script/Tamil.js":491,"./Script/Tangut.js":492,"./Script/Telugu.js":493,"./Script/Thaana.js":494,"./Script/Thai.js":495,"./Script/Tibetan.js":496,"./Script/Tifinagh.js":497,"./Script/Tirhuta.js":498,"./Script/Ugaritic.js":499,"./Script/Vai.js":500,"./Script/Warang_Citi.js":501,"./Script/Yi.js":502,"./Script/Zanabazar_Square.js":503,"./Script_Extensions/Adlam.js":504,"./Script_Extensions/Ahom.js":505,"./Script_Extensions/Anatolian_Hieroglyphs.js":506,"./Script_Extensions/Arabic.js":507,"./Script_Extensions/Armenian.js":508,"./Script_Extensions/Avestan.js":509,"./Script_Extensions/Balinese.js":510,"./Script_Extensions/Bamum.js":511,"./Script_Extensions/Bassa_Vah.js":512,"./Script_Extensions/Batak.js":513,"./Script_Extensions/Bengali.js":514,"./Script_Extensions/Bhaiksuki.js":515,"./Script_Extensions/Bopomofo.js":516,"./Script_Extensions/Brahmi.js":517,"./Script_Extensions/Braille.js":518,"./Script_Extensions/Buginese.js":519,"./Script_Extensions/Buhid.js":520,"./Script_Extensions/Canadian_Aboriginal.js":521,"./Script_Extensions/Carian.js":522,"./Script_Extensions/Caucasian_Albanian.js":523,"./Script_Extensions/Chakma.js":524,"./Script_Extensions/Cham.js":525,"./Script_Extensions/Cherokee.js":526,"./Script_Extensions/Common.js":527,"./Script_Extensions/Coptic.js":528,"./Script_Extensions/Cuneiform.js":529,"./Script_Extensions/Cypriot.js":530,"./Script_Extensions/Cyrillic.js":531,"./Script_Extensions/Deseret.js":532,"./Script_Extensions/Devanagari.js":533,"./Script_Extensions/Dogra.js":534,"./Script_Extensions/Duployan.js":535,"./Script_Extensions/Egyptian_Hieroglyphs.js":536,"./Script_Extensions/Elbasan.js":537,"./Script_Extensions/Ethiopic.js":538,"./Script_Extensions/Georgian.js":539,"./Script_Extensions/Glagolitic.js":540,"./Script_Extensions/Gothic.js":541,"./Script_Extensions/Grantha.js":542,"./Script_Extensions/Greek.js":543,"./Script_Extensions/Gujarati.js":544,"./Script_Extensions/Gunjala_Gondi.js":545,"./Script_Extensions/Gurmukhi.js":546,"./Script_Extensions/Han.js":547,"./Script_Extensions/Hangul.js":548,"./Script_Extensions/Hanifi_Rohingya.js":549,"./Script_Extensions/Hanunoo.js":550,"./Script_Extensions/Hatran.js":551,"./Script_Extensions/Hebrew.js":552,"./Script_Extensions/Hiragana.js":553,"./Script_Extensions/Imperial_Aramaic.js":554,"./Script_Extensions/Inherited.js":555,"./Script_Extensions/Inscriptional_Pahlavi.js":556,"./Script_Extensions/Inscriptional_Parthian.js":557,"./Script_Extensions/Javanese.js":558,"./Script_Extensions/Kaithi.js":559,"./Script_Extensions/Kannada.js":560,"./Script_Extensions/Katakana.js":561,"./Script_Extensions/Kayah_Li.js":562,"./Script_Extensions/Kharoshthi.js":563,"./Script_Extensions/Khmer.js":564,"./Script_Extensions/Khojki.js":565,"./Script_Extensions/Khudawadi.js":566,"./Script_Extensions/Lao.js":567,"./Script_Extensions/Latin.js":568,"./Script_Extensions/Lepcha.js":569,"./Script_Extensions/Limbu.js":570,"./Script_Extensions/Linear_A.js":571,"./Script_Extensions/Linear_B.js":572,"./Script_Extensions/Lisu.js":573,"./Script_Extensions/Lycian.js":574,"./Script_Extensions/Lydian.js":575,"./Script_Extensions/Mahajani.js":576,"./Script_Extensions/Makasar.js":577,"./Script_Extensions/Malayalam.js":578,"./Script_Extensions/Mandaic.js":579,"./Script_Extensions/Manichaean.js":580,"./Script_Extensions/Marchen.js":581,"./Script_Extensions/Masaram_Gondi.js":582,"./Script_Extensions/Medefaidrin.js":583,"./Script_Extensions/Meetei_Mayek.js":584,"./Script_Extensions/Mende_Kikakui.js":585,"./Script_Extensions/Meroitic_Cursive.js":586,"./Script_Extensions/Meroitic_Hieroglyphs.js":587,"./Script_Extensions/Miao.js":588,"./Script_Extensions/Modi.js":589,"./Script_Extensions/Mongolian.js":590,"./Script_Extensions/Mro.js":591,"./Script_Extensions/Multani.js":592,"./Script_Extensions/Myanmar.js":593,"./Script_Extensions/Nabataean.js":594,"./Script_Extensions/New_Tai_Lue.js":595,"./Script_Extensions/Newa.js":596,"./Script_Extensions/Nko.js":597,"./Script_Extensions/Nushu.js":598,"./Script_Extensions/Ogham.js":599,"./Script_Extensions/Ol_Chiki.js":600,"./Script_Extensions/Old_Hungarian.js":601,"./Script_Extensions/Old_Italic.js":602,"./Script_Extensions/Old_North_Arabian.js":603,"./Script_Extensions/Old_Permic.js":604,"./Script_Extensions/Old_Persian.js":605,"./Script_Extensions/Old_Sogdian.js":606,"./Script_Extensions/Old_South_Arabian.js":607,"./Script_Extensions/Old_Turkic.js":608,"./Script_Extensions/Oriya.js":609,"./Script_Extensions/Osage.js":610,"./Script_Extensions/Osmanya.js":611,"./Script_Extensions/Pahawh_Hmong.js":612,"./Script_Extensions/Palmyrene.js":613,"./Script_Extensions/Pau_Cin_Hau.js":614,"./Script_Extensions/Phags_Pa.js":615,"./Script_Extensions/Phoenician.js":616,"./Script_Extensions/Psalter_Pahlavi.js":617,"./Script_Extensions/Rejang.js":618,"./Script_Extensions/Runic.js":619,"./Script_Extensions/Samaritan.js":620,"./Script_Extensions/Saurashtra.js":621,"./Script_Extensions/Sharada.js":622,"./Script_Extensions/Shavian.js":623,"./Script_Extensions/Siddham.js":624,"./Script_Extensions/SignWriting.js":625,"./Script_Extensions/Sinhala.js":626,"./Script_Extensions/Sogdian.js":627,"./Script_Extensions/Sora_Sompeng.js":628,"./Script_Extensions/Soyombo.js":629,"./Script_Extensions/Sundanese.js":630,"./Script_Extensions/Syloti_Nagri.js":631,"./Script_Extensions/Syriac.js":632,"./Script_Extensions/Tagalog.js":633,"./Script_Extensions/Tagbanwa.js":634,"./Script_Extensions/Tai_Le.js":635,"./Script_Extensions/Tai_Tham.js":636,"./Script_Extensions/Tai_Viet.js":637,"./Script_Extensions/Takri.js":638,"./Script_Extensions/Tamil.js":639,"./Script_Extensions/Tangut.js":640,"./Script_Extensions/Telugu.js":641,"./Script_Extensions/Thaana.js":642,"./Script_Extensions/Thai.js":643,"./Script_Extensions/Tibetan.js":644,"./Script_Extensions/Tifinagh.js":645,"./Script_Extensions/Tirhuta.js":646,"./Script_Extensions/Ugaritic.js":647,"./Script_Extensions/Vai.js":648,"./Script_Extensions/Warang_Citi.js":649,"./Script_Extensions/Yi.js":650,"./Script_Extensions/Zanabazar_Square.js":651,"./index.js":652,"./unicode-version.js":653};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=264},864:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(32),s=n.n(i),o=(n(241),n(210)),c=n(211),l=n(233),p=n(212),j=n(234),_=n(871),S=n(223),u=n.n(S),y=n(872),m=n(869),E=n(870),x=n(12),d=n(13);function h(){var e=Object(x.a)(["\n    display: inline-block;\n    padding: 20px;\n"]);return h=function(){return e},e}var g=Object(d.a)(m.a)(h()),b="#ffffff";function C(){var e=Object(x.a)(["\n    color: ",";\n    text-decoration: underline;\n    font-weight: 400;\n"]);return C=function(){return e},e}function f(){var e=Object(x.a)(["\n    color: ",";\n    font-weight: bold;\n    padding-bottom: 1em;\n    line-height: 1.2em;\n\n    &::before {\n        content: '\u2022';\n        color: ",";\n        display: inline-block;\n        width: 1em;\n        margin-left: -1em;\n    }\n"]);return f=function(){return e},e}function k(){var e=Object(x.a)(["\n   list-style: none; \n   text-align: left;\n"]);return k=function(){return e},e}function P(){var e=Object(x.a)(["\n    font-weight: bold;\n    color: ",";\n"]);return P=function(){return e},e}var B=d.a.span(P(),"#f5b341"),w=d.a.ol(k()),G=d.a.li(f(),"#4dacad","#f5b341"),O=d.a.a(C(),"#aa2e86");function v(){var e=Object(x.a)(["\n    background: url('assets/images/title1.jpg');\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    background-size: cover;\n"]);return v=function(){return e},e}var M=Object(d.a)(g)(v()),T=[a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(M,{textSize:150,textColor:"primary",textFont:"secondary"},"components library")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:"primary",textFont:"secondary"},"Base information"),a.a.createElement(E.a,{margin:"10px 0 0",textColor:"primary",textSize:48,textAlign:"center"},a.a.createElement("p",null,"Library template")),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:24,textAlign:"left"},a.a.createElement("p",null,a.a.createElement(B,null,"Repository:")," ",a.a.createElement(O,{target:"blank",href:"https://gitlab.wynd.eu/direction-technique/front/components-library"},"https://gitlab.wynd.eu/direction-technique/front/components-library"))))],A=n(873);function L(){var e=Object(x.a)(["\n    background: url('assets/images/title2.jpg');\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    background-size: cover;\n"]);return L=function(){return e},e}var z=Object(d.a)(g)(L()),I=[a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(z,{textSize:150,textFont:"secondary"},"Concept"),a.a.createElement(m.a,{textSize:60,textColor:b,textFont:"secondary"},"what, why, when")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"what")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Library"),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:30,textAlign:"left"},a.a.createElement("p",null,"Shared and ",a.a.createElement(B,null,"packaged")," code for ",a.a.createElement(B,null,"others")," developers."),a.a.createElement("p",null,"We usually use ",a.a.createElement(B,null,"npm")," to install these packages."),a.a.createElement("p",null,"It consists of a command line client and an online database public or private, called the ",a.a.createElement(B,null,"npm registry.")),a.a.createElement("p",null,"Our is private and it's ",a.a.createElement(O,{target:"blank",href:"https://nexus.wynd.eu/repository/npm/"},"https://nexus.wynd.eu/repository/npm/"),"."))),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Package.json"),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:30,textAlign:"left"},a.a.createElement("p",null,"All the library definition is made in ",a.a.createElement(B,null,"package.json"),"."),a.a.createElement("p",null,"This files will read by ",a.a.createElement(B,null,"npm")," to understand what it should expose to your ",a.a.createElement(B,null,"library consumers"),"."))),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Package.json"),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:30,textAlign:"left"},a.a.createElement("p",null,"You need to know ",a.a.createElement(B,null,"3 important things")," about that"),a.a.createElement("p",null,"The ",a.a.createElement(B,null,"name")," key that define tag to call for import your library"),a.a.createElement("p",null,"The ",a.a.createElement(B,null,"main")," key that define the entry point of your ",a.a.createElement(B,null,"compiled")," library."),a.a.createElement("p",null,"The ",a.a.createElement(B,null,"dependencies"),", ",a.a.createElement(B,null,"peerDependencies")," and ",a.a.createElement(B,null,"devDependencies")," keys."))),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Package.json"),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:30,textAlign:"left"},a.a.createElement("p",null,"The ",a.a.createElement(B,null,"dependencies"),", ",a.a.createElement(B,null,"peerDependencies")," and ",a.a.createElement(B,null,"devDependencies")," keys."),a.a.createElement("p",null,"first one is packages you need for make work your library and that will be hosted in ",a.a.createElement(B,null,"your library nodes_modules"),"."),a.a.createElement("p",null,"second one is the same except they will not hosted in your library nodes_modules but shared with all ",a.a.createElement(B,null,"other node_modules"),"."),a.a.createElement("p",null,"third one is the libraries that will not installed by ",a.a.createElement(B,null,"library consumers"),". They're only useful for contributors that will build the library."))),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Expose components"),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:28,textAlign:"left"},"The entry point is just an exposition of all of your components"),a.a.createElement(A.a,{textSize:22,lang:"jsx",source:"\n            // components-library/src/index.ts\n            export * from './components';\n        "}),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:28,textAlign:"left"},"At different level use accessor to expose all folder children."),a.a.createElement(A.a,{textSize:22,lang:"jsx",source:"\n            // components-library/src/components/index.ts\n            export * from './Example';\n            export * from './Icons';\n        "}),a.a.createElement(E.a,{margin:"30px 0 0",textColor:"#4dacad",textSize:28,textAlign:"left"},a.a.createElement(B,null,"\u26a0\ufe0f Note this")," : The compile process will take all index file to make a granular export of each components.")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"why")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"3 reasons"),a.a.createElement(w,null,a.a.createElement(G,null,"Easy working share ",a.a.createElement(B,null,"through all your tribes"),"."),a.a.createElement(G,null,"Capitalize on each ",a.a.createElement(B,null,"developers works"),"."),a.a.createElement(G,null,"Create a ",a.a.createElement(B,null,"UI kit")," ready to use for faster development full documented by ",a.a.createElement(B,null,"storybook")," and ",a.a.createElement(B,null,"tsdoc"),"."))),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"when")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(E.a,{textSize:30,textColor:b,textAlign:"left"},a.a.createElement("p",null,"Every time you have generic components with ",a.a.createElement(B,null,"Internal logic"),", or ",a.a.createElement(B,null,"Internal states")),a.a.createElement("p",null,"But ",a.a.createElement(B,null,"no side effect"))),a.a.createElement(w,null,a.a.createElement(G,null,"Functional Components"),a.a.createElement(G,null,"Hook"),a.a.createElement(G,null,"Class Components"),a.a.createElement(G,null,"...")))];function D(){var e=Object(x.a)(["\n    background: url('assets/images/title3.jpg');\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n    background-size: cover;\n"]);return D=function(){return e},e}var H=Object(d.a)(g)(D()),F=[a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(H,{textSize:150,textFont:"secondary"},"Library"),a.a.createElement(m.a,{textSize:60,textColor:b,textFont:"secondary"},"Create, Usage, Contributing, Processes")),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Create your own Library"),a.a.createElement(E.a,{margin:"30px 0 0",textSize:28,textAlign:"left"},a.a.createElement(w,null,a.a.createElement(G,null,"Just fork this repository: ",a.a.createElement(O,{target:"blank",href:"https://gitlab.wynd.eu/direction-technique/front/components-library"},"https://gitlab.wynd.eu/direction-technique/front/components-library")),a.a.createElement(G,null,"Break the fork link on your own repository"),a.a.createElement(G,null,"Start to work \ud83d\ude42"),a.a.createElement(G,null,"If you want to exploit the auto deployment on ",a.a.createElement(B,null,"gitlab page")," create an repository dedicate to this and follow the process describe on the ",a.a.createElement(O,{target:"blank",href:"https://gitlab.wynd.eu/direction-technique/front/components-library#gitlab-ci"},"ReadMe"),".")))),a.a.createElement(y.a,{transition:["fade"],bgColor:"#251129"},a.a.createElement(m.a,{textSize:100,textColor:b,textFont:"secondary"},"Create your own Library"),a.a.createElement(E.a,{margin:"30px 0 0",textSize:28,textAlign:"left"},a.a.createElement(w,null,a.a.createElement(G,null,"Just fork this repository: ",a.a.createElement(O,{target:"blank",href:"https://gitlab.wynd.eu/direction-technique/front/components-library"},"https://gitlab.wynd.eu/direction-technique/front/components-library")),a.a.createElement(G,null,"Break the fork link on your own repository"),a.a.createElement(G,null,"Start to work \ud83d\ude42"),a.a.createElement(G,null,"If you want to exploit the auto deployment on gitlab page create an repository dedicate to this and follow the process describe on the ",a.a.createElement(O,{target:"blank",href:"https://gitlab.wynd.eu/direction-technique/front/components-library#gitlab-ci"},"ReadMe"),"."))))];n(687);var N=u()({primary:"white",secondary:"#1F2022",tertiary:"#03A9FC",quartenary:"#00c379"},{primary:"Ubuntu",secondary:"Lobster"}),K=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(_.a,{transition:["zoom","slide"],transitionDuration:500,theme:N},T,I,F)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,2,1]]]);
//# sourceMappingURL=main.2f83fdb3.chunk.js.map