var aKat = [];


/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERANTWORTUNG +++++++++++++++++++++++++++++++++++++++*/

aKat[0] = {
name:'Verantwortung', 
arrayBox:[
    
    { frage:"Verkehrsvorschriften besagen, dass zwei verantwortungsvolle Posten im Ruderboot besetzt sein müssen – und ein Ruderer kann beides zugleich sein:",
      allAnt:['Schlagmann und Steuermann','Bootsführer und Ruderwart','Schiffsführer und Bootsobmann','Steuermann und Rudergänger','Schiffsführer und Rudergänger','Bootsobmann und Steuermann'],
      antR:['Schiffsführer und Rudergänger','Bootsobmann und Steuermann']
    },

    { frage:"Im Auto ist der Hauptverantwortliche immer der Fahrer, der hinter dem Steuer sitzt, im Ruderboot immer",
      allAnt:["derjenige, der auf dem Steuerplatz sitzt","der Älteste an Bord","der Schlagmann","der Bugmann","der Bootsobmann"],
      antR:["der Bootsobmann"]
    },
    
    { frage:"Wenn der steuernde Ruderer ausnahmsweise keine Steuerberechtigung hat,",
      allAnt:["gibt der Bugmann alle Kommandos","wird der Steuernde vom Schlagmann ständig eingewiesen","gibt der Erfahrenste an Bord den Kurs an","wird der Steuernde vom Bootsobmann ständig eingewiesen"],
      antR:["wird der Steuernde vom Bootsobmann ständig eingewiesen"]
    },

    { frage:"Der Bootsobmann im Boot mit Steuersitz,",
      allAnt:["muss immer am Steuer sitzen","kann nicht zugleich Steuermann sein","kann, anstatt zu steuern, irgendeinem an Bord den Steuerplatz und damit die Verantwortung für Kurs, Manöver, Kommandos und alle Entscheidungen an Bord überlassen.","muss nicht steuern, wenn er einen Steuerberechtigten als „Rudergänger“ einsetzt"],
      antR:["muss nicht steuern, wenn er einen Steuerberechtigten als „Rudergänger“ einsetzt"]
    },
    
    { frage:"Der amtliche Nachweis über eine Ruderfahrt, in dem man auch den Verantwortlichen, die Mannschaft, die Strecke nachschlagen kann, ist",
      allAnt:["das Fahrtenbuch","das Fahrtenprogramm","die Ruderordnung"],
      antR:["das Fahrtenbuch"]
    },
    
    { frage:"Ein Steuermann, der auf dem Wasser einen Unfall verursacht, weil er nicht aufgepasst („geschlafen“) hat,",
      allAnt:["kann mit Bußgeld oder härter bestraft werden und muss womöglich Schadenersatz leisten","kann mit Bußgeld oder härter bestraft werden. Er und die Mannschaft müssen womöglich Schadenersatz leisten","kann nicht bestraft werden, muss aber womöglich Schadenersatz leisten","kann mit Bußgeld oder härter bestraft werden, braucht aber eingetretenen Schaden nicht zu ersetzen"],
      antR:["kann mit Bußgeld oder härter bestraft werden und muss womöglich Schadenersatz leisten"]
    },
    
    { frage:"Ein Bootsobmann, der Verkehrsregeln nicht beachtet, damit einen Unfall verursacht und einem fremden Sportboot und seinen Insassen Schaden zugefügt hat,",
      allAnt:["muss Schadenersatz leisten und kann dafür bestraft werden","muss entweder Schadenersatz leisten oder kann dafür bestraft werden, beides ist nicht möglich","muss nur dann Schadenersatz leisten, wenn er dafür bestraft worden ist","wird nur dann bestraft, wenn er keinen Schadenersatz leistet."],
     antR:["muss Schadenersatz leisten und kann dafür bestraft werden"]
    } 
    ]
};

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN BOOTE STEUERN UND FÜHREN +++++++++++++++++++++++++++++++++++++++*/

aKat[1] = {
name:'Boote steuern und führen', 
arrayBox:[
    
    { frage:"Bevor das Boot ablegt, überzeugt sich der Steuermann,",
                allAnt:['dass die Steuerleine nicht überkreuz liegt.','dass alle Dollen in Richtung Bug stehen und damit alle Skulls/Riemen richtig eingelegt sind.','dass alle Insassen warm genug angezogen sind.','dass das Fahrwasser direkt vorm Boot frei von Schiffen, Booten, Schwimmern, Treibholz ist.'],
                antR:['dass die Steuerleine nicht überkreuz liegt.','dass das Fahrwasser direkt vorm Boot frei von Schiffen, Booten, Schwimmern, Treibholz ist.']
		},

    { frage:"Die Schlaufe der Steuerleine hat der Steuermann",
                allAnt:["vor dem Bauch.","unter den Knien.","vor den Knien."],
                antR:["unter den Knien."]
		},
    
    { frage:"Flussfahrt stromab. Zum Anlegen am Steg vor einem Bootshaus",
                allAnt:["Bug in Stegrichtung steuern, halten, von der Strömung langsam an den Steg treiben lassen.","halten, wenden, gegen den Strom an den Steg rudern.","den Steg senkrecht ansteuern und kurz davor einseitig stoppen, so dass die Strömung das Boot an den Steg drückt."],
                antR:["halten, wenden, gegen den Strom an den Steg rudern."]
		},

    { frage:"Steg, an dem Strömung entlang zieht. Boot so einsetzen und an den Steg legen,",
                allAnt:["dass der Bug stromauf zeigt.","dass der Bug stromab zeigt."],
                antR:["dass der Bug stromauf zeigt."]
		},
    
    { frage:"Flussfahrt stromab. Es soll angelegt werden. Eine Uferböschung sieht von weitem brauchbar aus.",
                allAnt:["In Höhe dieser Stelle wenden und stromauf an der Böschung entlangfahren, dabei gefahrlose Anlegestelle erkunden. Etwas zurücktreiben und Anlegestelle von unterstrom anfahren.","Zum Ufer steuern, stromab langsam an der Böschung entlang treiben. Sobald gefahrlose Anlegestelle auftaucht, dorthin einseitig vorwärts rudern lassen."],
                antR:["In Höhe dieser Stelle wenden und stromauf an der Böschung entlangfahren, dabei gefahrlose Anlegestelle erkunden. Etwas zurücktreiben und Anlegestelle von unterstrom anfahren."]
		},
    
    { frage:"Auf einem unbekannten Fluss muss man rechnen mit",
                allAnt:["stärkerer Strömung in Innenkurven.","stärkerer Strömung in Außenkurven.","Untiefen in Innenkurven.","Untiefen in Außenkurven."],
                antR:["stärkerer Strömung in Außenkurven.","Untiefen in Innenkurven."]
		},
    
    { frage:"Auf einem Fluss muss man mit Gegenströmung rechnen",
                allAnt:["in Buchten zwischen Buhnen.","nach Innenkurven.","links und rechts vor Engstellen.","links und rechts hinter Engstellen."],
                antR:["in Buchten zwischen Buhnen.","links und rechts hinter Engstellen."]
		},
    
    { frage:"Biegt man von einem Fluss ab auf die Wasserfläche zwischen zwei Buhnen,",
                allAnt:["kann man von der Strömung gegen die stromauf gelegene Buhne gedrückt werden.","kann man von der Strömung gegen die stromab gelegene Buhne gedrückt werden."],
                antR:["kann man von der Strömung gegen die stromab gelegene Buhne gedrückt werden."]
		},

    { frage:"Fahrt auf fließendem Gewässer, das man nicht kennt. Für ausgelegte Skulls zu enge Brückenöffnung oder andere Engstelle voraus:",
                allAnt:["Nicht rudern. Langsam heran treiben. Mit einseitigem Rudern Bug auf die Durchfahrt ausrichten, dann Skulls lang nehmen lassen und durch die Engstelle treiben.","Bis zur Engstelle rudern und dabei Bug auf die Engstelle ausrichten. Kurz vor der Engstelle halten, stoppen, dann Skulls lang nehmen lassen und durch die Engstelle treiben.","Mit soviel oder wenig Kraft rudern lassen, dass das Boot bis zum Ende der Engstelle gesteuert werden kann und dabei Bug auf die Engstelle ausrichten. Kurz vor der Engstelle Skulls lang nehmen lassen und hindurchsteuern."],
                antR:["Mit soviel oder wenig Kraft rudern lassen, dass das Boot bis zum Ende der Engstelle gesteuert werden kann und dabei Bug auf die Engstelle ausrichten. Kurz vor der Engstelle Skulls lang nehmen lassen und hindurchsteuern."]
		},
    
    { frage:"Wenn ein Flussbett voraus durch zusammentretende Ufer, Bauwerke, schwimmende Geräte (z. B. Bagger) verengt wird,",
                allAnt:["lässt man halten und das Boot durch die Engstelle treiben.","lässt man mindestens soviel rudern, dass das Boot in der gesamten Engstelle gesteuert werden kann."],
                antR:["lässt man mindestens soviel rudern, dass das Boot in der gesamten Engstelle gesteuert werden kann."]
		},

    { frage:"Fahrt stromab. Um umzukehren und stromauf zu rudern,",
                allAnt:["so wenden, dass auf das Heck möglichst wenig, auf den Bug die stärkere Strömung drückt.","so wenden, dass auf den Bug möglichst wenig, auf das Heck die stärkere Strömung drückt."],
                antR:["so wenden, dass auf den Bug möglichst wenig, auf das Heck die stärkere Strömung drückt."]
		},

    { frage:"Man rudert stromauf im ruhigen Wasser am Ufer entlang und will nun stromab zurückfahren. Damit bei der Wende die Strömung ausgenutzt wird, bringt der Steuermann mit dem Steuer und/oder mit Ruderbefehlen",
                allAnt:["den Bug in die Strömung.","das Heck in die Strömung."],
                antR:["den Bug in die Strömung."]
		},
    
    { frage:"Fahrt am linken Ufer entlang stromauf. Rechts vom Boot ist dieses Ufer ziemlich nahe. Steuermann entdeckt im letzten Augenblick knapp überspülte Buhne vor dem Boot. Sein Kommando lautet:",
                allAnt:["Backbord – überziehen!","Ruder – halt! Backbord stoppen – stoppt!","Ruder – halt! Steuerbord stoppen – stoppt!", "Ruder – halt! Stoppen – stoppt!","Ruder – halt! Skulls (Riemen) – lang!","Ruder – halt! Wende über Steuerbord – los!","Ruder – halt! Eins und zwei fertig zum Aussteigen – steigt aus!"],
                antR:["Ruder – halt! Backbord stoppen – stoppt!","Ruder – halt! Stoppen – stoppt!"]
		},
    
    { frage:"Mit einem Doppelzweier in eine scharfe Rechtskurve eines schmalen Flüsschens hinein. Der Steuermann merkt gleich, dass er die Kurve allein mit Steuern nicht schaffen wird und dass die Strömung das Boot an die Böschung der Außenkurve drücken könnte. Er befiehlt:",
                allAnt:["Ruder – halt! Backbord Skulls – lang!","Ruder – halt! Steuerbord voraus – los!","Ruder – halt! Nummer zwei Steuerbord stoppen – stopp!", "Ruder – halt! Backbord stoppen – stoppt!"],
                antR:["Ruder – halt! Nummer zwei Steuerbord stoppen – stopp!"]
		},
    
    { frage:"Bei Schiffsverkehr,",
                allAnt:["hält man zwischen Schiff und flachem Ufer Abstand vom Ufer.","fährt man zwischen Schiff und flachem Ufer nahe am Ufer entlang."],
                antR:["hält man zwischen Schiff und flachem Ufer Abstand vom Ufer."]
		},
    
    { frage:"Bei Schiffsverkehr auf Schifffahrtsstraßen fährt man, wenn man die Wahl hat,",
                allAnt:["am besten zwischen Schiff und Mauer- oder Spundwand-Ufer.","am besten zwischen Schiff und flachem Ufer."],
                antR:["am besten zwischen Schiff und flachem Ufer."]
		},

    { frage:"Von fahrenden Motorschiffen hält man Abstand",
                allAnt:["wegen des Sogs, auch wenn man keinen Sog sieht.","wegen der Wellen, auch wenn man keine Wellen sieht."],
                antR:["wegen des Sogs, auch wenn man keinen Sog sieht."]
		},
    

    { frage:"Bei hohen Wellen durch ein Schiff",
                allAnt:["Wellen senkrecht ansteuern, Ruder halt.","Wellen senkrecht ansteuern, langsam weiterrudern.","Wellen spitz ansteuern, langsam weiterrudern.","Boot parallel zu den Wellen legen, Ruder halt.","Boot parallel zum Schiff legen, Ruder halt."],
                antR:["wegen des Sogs, auch wenn man keinen Sog sieht."]
		},

    { frage:"Bei Wind und Wellen",
                allAnt:["legt man am nächsten Ufer an, wenn die Wellen sich an den Auslegern brechen und dabei ins Boot schlagen können.","geht man die Wellen so an, dass sie nicht an den Ruderplätzen, sondern nur am Steuersitz ins Boot schwappen können.","ist das Boot, nachdem Wasser übernommen wurde und es deshalb tiefer lieft, weniger gefährdet, da es dem Wind weniger Angriffsfläche bietet.","legt man am nächsten Ufer an, wenn die Wellen Schaumkronen zeigen."],
                antR:["legt man am nächsten Ufer an, wenn die Wellen sich an den Auslegern brechen und dabei ins Boot schlagen können.","legt man am nächsten Ufer an, wenn die Wellen Schaumkronen zeigen."]
		},

    { frage:"Seen befährt man bei Wind, wenn die Wellen überhaupt Weiterfahren gestatten,",
                allAnt:["auf dem geradesten und kürzesten Weg.","im Bogen an dem Ufer entlang, von dem der Wind kommt.","im Bogen an dem Ufer entlang, auf das der Wind bläst."],
                antR:["im Bogen an dem Ufer entlang, von dem der Wind kommt."]
		},

    { frage:"Flussfahrt stromab. Treiben lassen in der Außenkurve ist ungefährlich,",
                allAnt:["wenn der Bug etwas mehr vom Außenkurven-Ufer weg als zu diesem Ufer hin zielt.","wenn der Bug etwas mehr zum Außenkurven-Ufer hin als von diesem Ufer weg zielt.","wenn das Boot quer zum Ufer treibt und der Bug auf das Außenufer zeigt."],
                antR:["wenn der Bug etwas mehr vom Außenkurven-Ufer weg als zu diesem Ufer hin zielt."]
		},

    { frage:"Wenn man bei Nebel voraus kaum noch richtig was erkennen kann oder das Ufer nicht ganz klar in Sicht ist,",
                allAnt:["zeigt man ein weißes, rundum sichtbares Licht.","rudert man ans Ufer und unterbricht die Fahrt.","gibt man mit Horn, Pfeife oder Stimme laufend Schallzeichen."],
                antR:["rudert man ans Ufer und unterbricht die Fahrt."]
		}
    ]
}

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN STAUSTUFEN +++++++++++++++++++++++++++++++++++++++*/

aKat[2] = {
name:'Staustufen', 
arrayBox:[
    
    { frage:"Bei der Bootsschleppe wird die Lore an der Kette ins Wasser gelassen. Mit dem Boot darauf wird sie nur dann herausgezogen,",
                allAnt:["wenn das Boot genau mittig zwischen Bug und Heck darauf liegt.","wenn die Bootsauflage der Lore so breit ist, dass das Boot nicht eingedrückt werden kann.","wenn mindestens vier Mannschaftsmitglieder zum Ziehen bereitstehen."],
                antR:["wenn die Bootsauflage der Lore so breit ist, dass das Boot nicht eingedrückt werden kann."]
		},

    { frage:"Eine 2,30 m breite Universal-Gasse befährt man mit der gesamten Mannschaft",
                allAnt:["in Gigs und Rennbooten.","nur in Gigs.","nur in 90 und 100 cm breiten Gigs.","nur in Seegigs und Barken."],
                antR:["nur in 90 und 100 cm breiten Gigs."]
		},

    { frage:"In eine 2,30 m breite Universal-Bootsgasse, die nicht ständig durchströmt ist, fährt man ein,",
                allAnt:["wenn man auf den Knopf gedrückt hat: Sofort wenn das Schütz sich öffnet und Wasser in die Gasse schießt.","wenn man auf den Knopf gedrückt hat: Unverzüglich sobald die Ampel auf Grün springt.","wenn man auf den Knopf gedrückt hat: Solange Wasser durch die Gasse rauscht, möglichst schnell hintereinander mit allen wartenden Booten."],
                antR:["wenn man auf den Knopf gedrückt hat: Unverzüglich sobald die Ampel auf Grün springt."]
		},

    { frage:"Mit einem Ruderboot kann die 2,30 m breite Universal-Bootsgasse befahren werden. Es besteht aber Gefahr,",
                allAnt:["wenn einer von der Mannschaft nicht ganz ruhig im Boot sitzt.","wenn jemand von der Mannschaft nach seinen Skulls/seinen Riemen greift.","wenn jemand von der Mannschaft seine Skulls/seinen Riemen loslässt."],
                antR:["wenn einer von der Mannschaft nicht ganz ruhig im Boot sitzt.","wenn jemand von der Mannschaft seine Skulls/seinen Riemen loslässt."]
		},

    { frage:"In der 2,30 m breiten Universal-Bootsgasse",
                allAnt:["bleibt das Boot nur dann ungefährdet in der Mitte, wenn der Steuermann ständig den Kurs korrigiert.","muss die Mannschaft ganz ruhig ausbalanciert sitzen.","muss die Mannschaft die ins Boot gelegten Skulls/Riemen festhalten, damit sie nicht rollen und das Boot damit aus der Balance bringen.","muss der Bugmann mit dem Kopf nach vorn gewendet den Kurs beobachten."],
                antR:["muss die Mannschaft ganz ruhig ausbalanciert sitzen."]
		},

 
    { frage:"Blau-weiße Tafel am Ufer<br><br><img class='bildF' src='img/blauweisseufer.png' alt='Blau weiß Gitter'>",
                allAnt:["Hinter dem Schild auf die Fähre achten: nicht vor der Fähre herfahren.","Hinter dem Schild auf die Fähre achten: nicht hinter der Fähre herfahren.","Nicht über das vor dem Wehr aufgestellte Schild hinausfahren.","Über das Schild hinaus fährt man äußerstenfalls bis zur rechteckigen rot-weiß-roten Tafel vor dem Wehr oder aber in einen Schleusenkanal hinein."],
                antR:["Über das Schild hinaus fährt man äußerstenfalls bis zur rechteckigen rot-weiß-roten Tafel vor dem Wehr oder aber in einen Schleusenkanal hinein."]
		},
      
      
     { frage:"Vor einer Schifffahrtsschleuse muss man warten",
                allAnt:["vor dem Abzweig des Schleusenkanals.","vor dem Schild „Schleusenbereich.","vor dem rotumrandeten Schild mit dem waagerechten schwarzen Balken.","vor dem rotumrandeten Schild mit dem senkrechten schwarzen Balken.","unmittelbar vor der Rot zeigenden Ampel."],
                antR:["vor dem rotumrandeten Schild mit dem waagerechten schwarzen Balken."]
		},
   
     { frage:"Schifffahrts-Schleuse. Wenn keine großen Schiffe sich der Schleuse nähern oder bereits warten, kann man einfahren,",
                allAnt:["wenn das Schleusentor aufgeht.","sobald das Schleusentor ganz geöffnet ist.","sobald die Schleusenampel auf Grün springt."],
                antR:["sobald die Schleusenampel auf Grün springt."]
		},

     { frage:"Nach der Einfahrt in die Schleuse muss",
                allAnt:["der senkrechte dicke gelbe Strich an manchen Schleusenwänden hinter dem Steuer des Bootes liegen.","darf man, wenn ein senkrechter dicker gelber Strich an einer der beiden Schleusenwände zu finden ist, mit dem Boot nicht an dieser Wand anlegen.","bindet man das Boot mit der Bugleine an Leitern oder Ringen oder Klampen an der Schleusenmauer an","hält man das Boot mit Paddelhaken an Leitern oder Ringen oder Klampen an der Schleusenmauer."],
                antR:["der senkrechte dicke gelbe Strich an manchen Schleusenwänden hinter dem Steuer des Bootes liegen.","hält man das Boot mit Paddelhaken an Leitern oder Ringen oder Klampen an der Schleusenmauer."]
		},

     { frage:"Nach der Einfahrt in die Schleuse",
                allAnt:["nimmt man Skulls/Riemen an der Mauerseite erst lang und nimmt sie dann ins Boot.","nimmt man Skulls/Riemen an der Wasserseite möglichst nicht lang.","drückt man das Boot ständig soweit von der Wand ab, dass Dollen nicht in Mauernischen geraten können.","sind alle ständig bereit, gegen den Strom des ein- oder auslaufenden Wassers zu rudern."],
                antR:["nimmt man Skulls/Riemen an der Wasserseite möglichst nicht lang.","drückt man das Boot ständig soweit von der Wand ab, dass Dollen nicht in Mauernischen geraten können."]
		},
     
     { frage:"In Schifffahrts-Schleusen darf man auf keinen Fall liegen",
                allAnt:["vor einem großen Schiff.","neben einem großen Schiff.","hinter einem großen Schiff."],
                antR:["vor einem großen Schiff.","neben einem großen Schiff."]
		},
   
     { frage:"Beim Abwärtsschleusen kann für Ruderboote gefährlich werden",
                allAnt:["das aus den Schleusenwänden spritzende Wasser.","das Verhaken von Dollenstiften in Leitern der Schleusenwand.","ein Absatz, der aus dem fallenden Wasser am Obertor auftaucht.","der Wasserdruck, der das Boot gegen die Schleusenmauer drückt."],
                antR:["das Verhaken von Dollenstiften in Leitern der Schleusenwand.","ein Absatz, der aus dem fallenden Wasser am Obertor auftaucht."]
		},

     { frage:"Beim Abwärtsschleusen kann für Ruderboote gefährlich werden",
                allAnt:["das Langnehmen der Skulls/Riemen auf beiden Seiten.","das Stromgefälle vom Obertor zum Untertor.","Schleusenkammer-Winddruck, der das Boot hin und her wirft.","wenn die Mannschaft nicht die Dollen an der Mauerseite beobachtet."],
                antR:["das Langnehmen der Skulls/Riemen auf beiden Seiten.","wenn die Mannschaft nicht die Dollen an der Mauerseite beobachtet."]
		},

     { frage:"Aus der Schleuse fährt man aus,",
                allAnt:["sobald die Schleusentore weit genug aufgegangen sind.","sobald die Schleusentore ganz geöffnet sind.","sobald die Ampel am Ausfahrttor von Rot auf Grün springt.","sobald der Schleusenmeister zur Ausfahrt auffordert."],
                antR:["sobald die Ampel am Ausfahrttor von Rot auf Grün springt.","sobald der Schleusenmeister zur Ausfahrt auffordert."]
		},

     { frage:"Hinter einem Motorschiff liegend fährt man aus der Schleuse aus,",
                allAnt:["sobald die Ampel am Ausfahrttor von Rot auf Grün springt.","sobald das Motorschiff angefahren ist.","sobald man hinter dem ausgefahrenen Motorschiff Sicherheitsabstand hat."],
                antR:["sobald man hinter dem ausgefahrenen Motorschiff Sicherheitsabstand hat."]
		},
     
     { frage:"Wenn man aus dem Untertor der Schleuse ausgefahren ist,",
                allAnt:["gleich rudern, damit das Boot gesteuert werden kann.","auf die Schleusen-Ampel Rot-Grün achten.","auf seitliche Strömung vom Wehr her achten.","auf seitliche Strömung von der Schleuse her achten."],
                antR:["gleich rudern, damit das Boot gesteuert werden kann.","auf seitliche Strömung vom Wehr her achten."]
		}
     
    ]
}

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - OBERKATEGORIE +++++++++++++++++++++++++++++++++++++++*/

aKat[3] = {
name:'Verkehrsregeln', 
arrayBox:[

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - UNTERKATEGORIE GRUNDREGEL * DER SCHIFFFAHRT AUSWEICHEN +++++++++++++++++++++++++++++++++++++++*/
        {
        name:'Grundregel + Der Schifffahrt ausweichen',
        arrayBox: [
                    { frage:"Im Straßenverkehr muss sich jeder so verhalten, dass kein anderer geschädigt, gefährdet oder mehr als nach den Umständen unvermeidbar behindert oder belästigt wird. Das gilt",
                        allAnt:["auch für alles, was sich auf dem Wasser bewegt.","auch auf dem Wasser, aber nicht im Verhältnis Schifffahrt/Sportboote, weil Sportboote keinerlei Rechte gegenüber der Berufsschifffahrt haben."],
                        antR:["auch für alles, was sich auf dem Wasser bewegt."]
                },

                    { frage:"Ruderboote",
                        allAnt:["machen der Berufsschifffahrt immer Platz.","fahren immer rechts an großen Schiffen vorbei.","haben gegenüber großen Schiffen nur Vorfahrt, wenn diese von links kommen.","haben gegenüber großen Schiffen nur Vorfahrt, wenn diese aus einer Einmündung von links kommen."],
                        antR:["machen der Berufsschifffahrt immer Platz."]
                },

                    { frage:"Große Schiffe (Berufsschifffahrt)",
                        allAnt:["weichen Ruderbooten nach Backbord aus.","weichen Ruderbooten nach Steuerbord aus.","ändern ihren Kurs wegen Ruderbooten nicht."],
                        antR:["ändern ihren Kurs wegen Ruderbooten nicht."]
                },

                    { frage:"Fahrt stromab auf einem nicht sehr breiten Fluss. Der Steuermann will eine voraus liegende Kurve ausfahren, da kommt am Ende der Kurve ein entgegenfahrendes Motorschiff in Sicht.",
                        allAnt:["Die Innenkurve ansteuern.","In der Mitte des Flusses fahren.","Die Außenkurve ansteuern."],
                        antR:["Die Innenkurve ansteuern."]
                },

                    { frage:"Auf einem Kanal kommt ein Motorschiff entgegen.",
                        allAnt:["Unbedingt rechts fahren.","Unbedingt Mitte fahren.","Unbedingt links fahren.","Rechts fahren, wenn das Schiff nicht genau dort entgegenkommt.","Links fahren, wenn das Schiff nicht genau dort entgegenkommt."],
                        antR:["Rechts fahren, wenn das Schiff nicht genau dort entgegenkommt."]
                },

                    { frage:"Fahrt in der Mitte eines Flusses stromab. Etwa 200 bis 300 m voraus legt eine Fähre langsam vom rechten Ufer ab.",
                        allAnt:["Boot nach rechts steuern, ggf. halten, hinter der Fähre herfahren.","Boot nach links steuern, ggf. schneller rudern, vor der Fähre herfahren.","Boot parallel zu den Wellen der Fähre legen und mit Innenhebel rauf-und-runter gegen die Wellen ankippen."],
                        antR:["Boot nach rechts steuern, ggf. halten, hinter der Fähre herfahren."]
                }
        ]
        },

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - UNTERKATEGORIE SCHALLZEICHEN +++++++++++++++++++++++++++++++++++++++*/    

        {
        name:'Schallzeichen',
        arrayBox: [
                    { frage:"Ruderboot fährt stromab. Voraus am linken Ufer liegt ein Personenschiff mit Bug stromauf am Anlieger und gibt Schallzeichen: tuuuuut – tut – tut !",
                        allAnt:["Halten, warten, notfalls wenden, bis das Schiff stromab davongezogen ist.","Halten, warten, notfalls wenden, dem entgegenkommenden Schiff den Kurs freimachen.","Näher ans links Ufer steuern, da das Schiff auf der rechten Stromhälfte entgegenkommen wird.","Näher ans rechte Ufer steuern, da das Schiff auf der linken Stromhälfte entgegenkommen wird."],
                        antR:["Halten, warten, notfalls wenden, bis das Schiff stromab davongezogen ist."]
                },

                    { frage:"Voraus eine Kurve, die man noch nicht einsehen kann. Von dort Schallzeichen eines Schiffes: tuuuuut – tuuuuut – tut!",
                        allAnt:["Aufpassen! Da können gleich zwei Schiffe entgegenkommen, von denen das eine das andere im Schlepp hat.","Aufpassen! Wenn man in die Kurve einfährt, liegt da womöglich ein wendendes Schiff gerade quer.","Aufpassen! Da können gleich zwei Schiffe nebeneinander entgegen kommen."],
                        antR:["Aufpassen! Da können gleich zwei Schiffe nebeneinander entgegen kommen."]
                },

                    { frage:"Ein Motorschiff, das entgegenkommt, tutet einmal lang: tuuuuut !",
                        allAnt:["Das Schiff will wenden. Besser erst mal halten und sehen, ob da für das Ruderboot Platz bleibt.","Das Schiff könnte das Ruderboot meinen, womöglich weil das Boot auf dem Kurs liegt, den das Schiff nehmen will.","Das Schiff ist manövrierunfähig. Entweder ganz weit ausweichen oder, wenn das nicht geht, halten, warten oder auch wenden."],
                        antR:["Das Schiff könnte das Ruderboot meinen, womöglich weil das Boot auf dem Kurs liegt, den das Schiff nehmen will."]
                },

                    { frage:"Man sieht kein Schiff, hört aber von rechts voraus typisches Schiffs-Tuten: dreimal lang, dann einmal kurz.",
                        allAnt:["Aufpassen! Da vorn will ein Schiff ein anderes überholen, womöglich kommen die gleich nebeneinander entgegen, wobei das schnellere an Steuerbord des anderen fährt.","Aufpassen! Da vorn will ein Schiff ein anderes überholen, womöglich kommen die gleich nebeneinander entgegen, wobei das schnellere an Backbord des anderen fährt.","Aufpassen! Da vorn kommt gleich ein Schiff aus einer Hafenausfahrt oder Mündung und fährt dann dem Ruderboot entgegen.","Aufpassen! Da vorn kommt gleich ein Schiff aus einer Hafenausfahrt oder Mündung und fährt dann in der Fahrtrichtung des Ruderbootes weiter.","Aufpassen! Da vorn will ein Schiff wenden und liegt gleich womöglich gerade quer."],
                        antR:["Aufpassen! Da vorn kommt gleich ein Schiff aus einer Hafenausfahrt oder Mündung und fährt dann in der Fahrtrichtung des Ruderbootes weiter."]
                }
        ]
        },

    /* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - UNTERKATEGORIE KLEINFAHRZEUGE MITEINANDER +++++++++++++++++++++++++++++++++++++++*/
    
        {
        name:'Kleinfahrzeuge miteinander',
        arrayBox: [
                { frage:"Der Steuermann im Ruderboot",
                        allAnt:["muss einem Boot unter Segel nach rechts ausweichen.","muss einem Boot unter Segel nach links ausweichen.","braucht einem Boot unter Segel nicht auszuweichen.","muss einem Sportmotorboot nach rechts ausweichen.","muss einem Sportmotorboot nach links ausweichen.","braucht einem Sportmotorboot nicht auszuweichen."],
                        antR:["muss einem Boot unter Segel nach rechts ausweichen.","braucht einem Sportmotorboot nicht auszuweichen."]
                },

                { frage:"Eine Motoryacht, ein Boot unter Segel und ein Ruderboot. Wer Vorfahrt vor wem hat, beschreibt die Regel:",
                        allAnt:["Motorkraft vor Windkraft vor Muskelkraft.",
                                "Motorkraft vor Muskelkraft vor Windkraft.",
                                "Windkraft vor Muskelkraft vor Motorkraft.",
                                "Windkraft vor Motorkraft vor Muskelkraft.",
                                "Muskelkraft vor Motorkraft vor Windkraft.",
                                "Muskelkraft vor Windkraft vor Motorkraft."],
                        antR:["Windkraft vor Muskelkraft vor Motorkraft."]
                }

        ]
        },

    /* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - UNTERKATEGORIE SCHIFFFAHRTSZEICHEN +++++++++++++++++++++++++++++++++++++++*/
    
        {
        name: 'Schifffahrtszeichen',
        arrayBox: [

                { frage:"Rot-weiß-rot – Dieses Verkehrszeichen sagt dem Steuermann:<br><br><img class='bildF' src='img/rotweissstreifen.png' alt='A'>",
                        allAnt:["Nicht weiterfahren.","Nur weiterfahren, wenn Gewässer dahinter bekannt.","Da für alle Fahrzeuge gesperrt, die mit Motor betrieben werden, dürfen Ruderboote weiterfahren."],
                        antR:["Nicht weiterfahren."]

                },
    
                { frage:"Rot-weiß-rot – Dieses Verkehrszeichen sagt dem Steuermann:<br><br><img class='bildF' src='img/rotkreisstreifen.png' alt='A'>",
                        allAnt:["Nicht weiterfahren.",
                                "Weiterfahren; wenn Gewässer dahinter nicht bekannt, aber mit erhöhter Aufmerksamkeit.",
                                "Nur Fahrzeuge mit Motor dürfen nicht weiterfahren."],
                        antR:["Weiterfahren; wenn Gewässer dahinter nicht bekannt, aber mit erhöhter Aufmerksamkeit.","Nur Fahrzeuge mit Motor dürfen nicht weiterfahren."]
                },
           
                { frage:"Schwarzer Balken im weißen Feld mit roter Umrandung sagt dem Steuermann: <img class='bildF' src='img/rotquadschwwaage.png' alt='A'>",
                        allAnt:[
                                "Vor dem Schild warten, bis Schleusung möglich.", 
                                "Achtung! (Warum, steht auf Zusatzschild.)", 
                                "Halt! Vorübergehende Sperre." 
                                ],
                        antR:["Vor dem Schild warten, bis Schleusung möglich."]
                },
            
                { frage:"Schwarzer Balken im weißen Feld mit roter Umrandung sagt dem Steuermann: <img class='bildF' src='img/rotquadschwsenk.png' alt='B'>",
                        allAnt:[
                                "Vor dem Schild warten, bis Schleusung möglich.", 
                                "Achtung! (Warum, steht auf Zusatzschild.)", 
                                "Halt! Vorübergehende Sperre." 
                                ],
                        antR:["Achtung! (Warum, steht auf Zusatzschild.)"]
                },
          

                { frage:"Ein Steuermann kennt seine Verkehrszeichen auch dann, wenn sie nicht mit Rot und Blau, sondern nur in Schwarz-Weiß erscheinen. Es gibt Verkehrszeichen, vor denen der Steuermann etwas tun muss: halten, wenden oder die Fahrtrichtung ändern. Es gibt Verkehrszeichen, hinter denen der Steuermann besonders aufpassen oder auch mit Gefahren-Situationen rechnen muss.Vor welchen Zeichen muss der Steuermann halten oder wenden oder die Fahrtrichtung ändern?",
                        allAnt:['<img class="bild" src="img/334aA.png" alt="A">',
                                '<img class="bild" src="img/334aB.png" alt="B">',
                                '<img class="bild" src="img/334aC.png" alt="C">', 
                                '<img class="bild" src="img/334aD.png" alt="D">', 
                                '<img class="bild" src="img/334aE.png" alt="E">', 
                                '<img class="bild" src="img/334aF.png" alt="F">', 
                                '<img class="bild" src="img/334aG.png" alt="G">', 
                                '<img class="bild" src="img/334aH.png" alt="H">', 
                                '<img class="bild" src="img/334aI.png" alt="I">' 
                               ],
                        antR:[
                              '<img class="bild" src="img/334aA.png" alt="A">',
                              '<img class="bild" src="img/334aE.png" alt="E">', 
                              '<img class="bild" src="img/334aF.png" alt="F">',
                              '<img class="bild" src="img/334aG.png" alt="G">',
                             ]
                },
  
                { frage:"Ein Steuermann kennt seine Verkehrszeichen auch dann, wenn sie nicht mit Rot und Blau, sondern nur in Schwarz-Weiß erscheinen. Es gibt Verkehrszeichen, vor denen der Steuermann etwas tun muss: halten, wenden oder die Fahrtrichtung ändern. Es gibt Verkehrszeichen, hinter denen der Steuermann besonders aufpassen oder auch mit Gefahren-Situationen rechnen muss.Hinter welchen Zeichen muss der Steuermann besonders aufpassen oder auch mit Gefahren-Situationen rechnen?",
                        allAnt:['<img class="bild" src="img/334aB.png" alt="A">',
                                '<img class="bild" src="img/334bB.png" alt="B">',
                                '<img class="bild" src="img/334bC.png" alt="C">', 
                                '<img class="bild" src="img/334aG.png" alt="D">', 
                                '<img class="bild" src="img/334bE.png" alt="E">', 
                                '<img class="bild" src="img/334bF.png" alt="F">', 
                                '<img class="bild" src="img/334aE.png" alt="G">', 
                                '<img class="bild" src="img/334aI.png" alt="H">', 
                                '<img class="bild" src="img/334aF.png" alt="I">' 
                               ],
                        antR:[
                              '<img class="bild" src="img/334aB.png" alt="A">',
                              '<img class="bild" src="img/334bB.png" alt="B">',
                              '<img class="bild" src="img/334bC.png" alt="C">', 
                              '<img class="bild" src="img/334bF.png" alt="F">',
                              '<img class="bild" src="img/334aI.png" alt="H">'  
                             ]
                },

                { frage:"Ein Steuermann kennt seine Verkehrszeichen auch dann, wenn sie nicht mit Rot und Blau, sondern nur in Schwarz-Weiß erscheinen. Es gibt Verkehrszeichen, hinter denen der Steuermann besonders aufpassen oder auch mit Gefahren-Situationen rechnen muss. Es gibt Verkehrszeichen, vor denen der Steuermann etwas tun muss: hatten, wenden oder die Fahrtrichtung ändern.Hinter welchen Zeichen muss der Steuermann besonders aufpassen oder auch mit Gefahren-Situationen rechnen?",
                        allAnt:['<img class="bild"      src="img/334aF.png" alt="A">',
                                '<img class="bild" src="img/334bF.png" alt="B">',
                                '<img class="bild" src="img/334aC.png" alt="C">', 
                                '<img class="bild" src="img/334aI.png" alt="D">', 
                                '<img class="bild" src="img/335aE.png" alt="E">', 
                                '<img class="bild" src="img/334bC.png" alt="F">', 
                                '<img class="bild" src="img/335aG.png" alt="G">', 
                                '<img class="bild" src="img/334aG.png" alt="H">', 
                                '<img class="bild" src="img/334aH.png" alt="I">' 
                               ],
                        antR:[
                              '<img class="bild" src="img/334bF.png" alt="B">',
                              '<img class="bild" src="img/334aC.png" alt="C">',
                              '<img class="bild" src="img/334aI.png" alt="D">', 
                              '<img class="bild" src="img/334bC.png" alt="F">', 
                              '<img class="bild" src="img/335aG.png" alt="G">',
                              '<img class="bild" src="img/334aH.png" alt="I">'  
                             ]
                },

            
                { frage:"Ein Steuermann kennt seine Verkehrszeichen auch dann, wenn sie nicht mit Rot und Blau, sondern nur in Schwarz-Weiß erscheinen. Es gibt Verkehrszeichen, hinter denen der Steuermann besonders aufpassen oder auch mit Gefahren-Situationen rechnen muss. Es gibt Verkehrszeichen, vor denen der Steuermann etwas tun muss: hatten, wenden oder die Fahrtrichtung ändern.Vor welchen Zeichen muss der Steuermann halten oder wenden oder die Fahrtrichtung ändern?",
                        allAnt:['<img class="bild" src="img/334bE.png" alt="A">',
                                '<img class="bild" src="img/334bC.png" alt="B">',
                                '<img class="bild" src="img/334aD.png" alt="C">', 
                                '<img class="bild" src="img/335bD.png" alt="D">', 
                                '<img class="bild" src="img/335bE.png" alt="E">', 
                                '<img class="bild" src="img/334aI.png" alt="F">', 
                                '<img class="bild" src="img/334aG.png" alt="G">', 
                                '<img class="bild" src="img/335bH.png" alt="H">', 
                                '<img class="bild" src="img/334aF.png" alt="I">' 
                               ],
                        antR:[
                              '<img class="bild" src="img/335bD.png" alt="D">', 
                              '<img class="bild" src="img/335bE.png" alt="E">', 
                              '<img class="bild" src="img/334aG.png" alt="G">', 
                              '<img class="bild" src="img/334aF.png" alt="I">' 
                             ]
                },
                
                
 
                { frage:"Blau-weiß – Dieses Schild am Ufer sagt dem Steuermann:<br><br><img class='bildF' src='img/336blauweiss.png' alt='Schild mit weißem Schiff auf blauem Grund'><br><br>",
                        allAnt:["Aufpassen auf Bagger oder anderes Arbeitsgerät. Nur an der Seite mit roter Flagge oder blau-weiß-blauer Tafel vorbeifahren.",
                                "Aufpassen auf Bagger oder anderes Arbeitsgerät. Nur an der Seite mit rot-weißer Flagge oder grün-weiß-grüner Tafel vorbeifahren.",
                                "Aufpassen auf Seilfähre. Wenn sie den Fluss quert, auf keinen Fall vorherfahren.", 
                                "Aufpassen auf Seilfähre. Wenn sie den Fluss quert, auf keinen Fall hinterherfahren.", 
                                "Aufpassen auf einen möglichen Querverkehr aus einem Hafen, einem Nebenarm oder einer Mündung."],
                        antR:[
                              "Aufpassen auf Seilfähre. Wenn sie den Fluss quert, auf keinen Fall vorherfahren."
                             ]
                }

        ]
        },

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - UNTERKATEGORIE BRÜCKEN +++++++++++++++++++++++++++++++++++++++*/    
    
        {
        name: 'Brücken',
        arrayBox: [
    
                { frage:"Zwei Brücken über einem Gewässer, das man nicht genau kennt. <br><br> Zeichen in Rot und Weiß <br> <img class='bildF' src='img/341a.png' alt='Durchfahrt3'> <br> Zeichen in Gelb <br> <img class='bildF' src='img/341b.png' alt='Durchfahrt4'> <br> Der Steuermann fährt durch die Brückenöffnungen",
                allAnt:["Abschnitte: <br> 1 + 2 + 3 + 4 + 5 + 6",
                        "Abschnitte: <br> 1 + 2 + 3 + 4 + 5",
                        "Abschnitte: <br> 1 + 2 + 3 + 6",
                        "Abschnitte: <br> 1 + 2 + 4 + 5",
                        "Abschnitte: <br> 1 + 2 + 6",
                        "Abschnitte: <br> 3 + 4 + 5 + 6",
                        "Abschnitte: <br> 3 + 4 + 5",
                        "Abschnitte: <br> 3 + 6"
                        ],
                antR:["Abschnitte: <br> 3 + 6"]
                                        
                },
        
                { frage:"Zwei Brücken über einem Gewässer, das man nicht genau kennt. <br><br> Zeichen in Gelb <br> <img class='bildF' src='img/342a.png' alt='Durchfahrt3'> <br> Zeichen in Rot und Weiß <br> <img class='bildF' src='img/342b.png' alt='Durchfahrt4'> <br> Der Steuermann fährt durch die Brückenöffnungen",
                allAnt:["Abschnitte: <br> 1 + 3 + 4 + 6",
                        "Abschnitte: <br> 1 + 3 + 5",
                        "Abschnitte: <br> 2 + 4 + 6",
                        "Abschnitte: <br> 2 + 5",
                        "Abschnitte: <br> 1 + 2 + 3 + 5",
                        "Abschnitte: <br> 1 + 2 + 3 + 4 + 6",
                        "Abschnitte: <br> 1 + 3 + 4 + 5 + 6",
                        "Abschnitte: <br> 1 + 2 + 3 + 4 + 5 + 6"
                        ],
                antR:["Abschnitte: <br> 2 + 5"]
                                        
                }
    
]
        },

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT PRÜFUNGSBOGEN VERKEHRSREGELN - UNTERKATEGORIE FAHRWASSERBEZEICHNUNG VORBEIFAHRTEN +++++++++++++++++++++++++++++++++++++++*/    
    
        {
        name: 'Fahrwasserbezeichnung, Vorbeifahrten',
        arrayBox: [
    
                { frage:"Auf einem Fluss arbeitet ein Bagger. Das Ruderboot fährt daran vorbei",
                allAnt:["auf der Seite, wo zwischen Bagger und Ufer mehr Platz ist.",
                        "auf der Seite, wo keine Ketten und Seile zu sehen sind.",
                        "auf der Seite, wo der Bagger eine rot-weiße Tafel zeigt.",
                        "auf der Seite, wo der Bagger eine rote Tafel zeigt.",
                        "auf der Seite, wo der Bagger eine blaue Tafel zeigt."
                        ],
                antR:["auf der Seite, wo der Bagger eine rot-weiße Tafel zeigt."]
                                        
		},
        
    
                { frage:"Auf einem Fluss liegt ein Bagger oder Fischereifahrzeug. Der Steuermann sieht links eine rote, rechts eine rot-weiße Tafel. <img class='bildF' src='img/352.png' alt='Schiff'>",
                allAnt:["Rechts vorbeifahren.",
                        "Links vorbeifahren.",
                        "Weiterfahrt beiderseits gesperrt.",
                        "Weiterfahrt beiderseits möglich."
                        ],
                antR:["Rechts vorbeifahren."]
                                        
		},
     
         
                { frage:"Auf dem Wasser ist ein gelber Schwimmkörper (wie eine Boje) zu sehen. Er sagt dem Steuermann:",
                allAnt:["Fahrwasserteilung. An der Gabelung kann man links oder rechts fahren.",
                        "Zeichen für den Anker eines Baggers oder eines anderen verankerten Gerätes. Davon Abstand halten.",
                        "Zeichen für Begrenzung ausgelegter Fischnetze. Davon Abstand halten.",
                        "Zeichen für linke Fahrwasserbegrenzung. Auf unbekanntem Gewässer rechts davon bleiben."
                        ],
                antR:["Zeichen für den Anker eines Baggers oder eines anderen verankerten Gerätes. Davon Abstand halten.","Zeichen für Begrenzung ausgelegter Fischnetze. Davon Abstand halten."]
                                        
		},       

                { frage:"Fahrt stromab auf einem unbekannten Gewässer. Rote Boje im Fluss.",
                allAnt:["Rechts vorbeifahren, bei Schiffsverkehr eventuell knapp links davon.",
                        "Links vorbeifahren, bei Schiffsverkehr eventuell knapp rechts davon.",
                        "Halten, Weiterfahrt verboten."
                        ],
                antR:["Links vorbeifahren, bei Schiffsverkehr eventuell knapp rechts davon."]
		}  
]
        }
    
]
}

/* ++++++++++++++++++++++++++++++++++ ABSCHNITT FRAGEN INDIVIDUELL MISCHEN +++++++++++++++++++++++++++++++++++++++*/


aKat[4] = {
name:'Kategorien mischen',
arrayBox:[],
namemix:[]
};


