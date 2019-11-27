## Objectifs

En une ligne : Programmer un clone de Call of Duty Black ops zombie avec Godot et C#

Je suis un début dans le monde du développement du jeu video et dans l'univers du modelage 3d , animation et graphisme.
Mon expérience est en programmtion étant programmeur de formation. Mais l'univers du jeu video, graphisme et art visuel
ma toujours grandement attiré depuis toujours et pour remettre les pendules à l'heure, je décide de me relancé dans le
développement d'un jeu vidéo. C'est en essayant , gossant et explorant qu'on se découvre et qu'on développe nos talents.

Donc ce que j'ai décidé de faire comme jeu est un pure clone au niveau du gameplay (pas trop de graphisme) du monde zombie
de Call of Duty Black Ops et d'écrire ce blog comme journal de développement pour une fois terminé avec mon expérience
gagné faire une série de video qui explique plus en détail le processus de développement et de conception.

### Mon expérience en programmation et jeux vidéo

Je suis programmeur depuis maintant 5 ans , j'ai tout récamment finit l'école. Je travail comme développeur full-stack
donc très loin du monde du jeux vidép mais dans ma formation scolaire nous avons comme projet final crée un jeu
avec Unreal Engine la classe au complet en équipe. C'était une expérience forte agréable de travail avec unreal engine
sur des ordinateurs flambant neuf de 3k\$ sur windows mais moins sur mon ordinateur de 10 ans sous linux que j'utilises chez moi,
je vais y revenir dans une section qui explique mon choix d'engine.

### Voici une liste des mécaniques

Après quelques parties j'ai ressortie la liste des mécanique à recrée dans le jeu pour qu'il soit comme le vrai jeu au niveau
du gameplay bien sur. Voici un bullet-points de ce qui a a faire. Je vais allez en détail sur les points quand je vais être
rendu à les programmer.

- Système de jeux
  - Split-screen local , jusqu'a 2 joueurs.
  - Lan local
  - Multiplayer avec des serveurs dédiées ( maybe not )

- Des zombies sans mercis qui veulent te tués
  - Ils frappent au corps-à-corps
  - Ils ont différent niveau de vitesse selon les rounds
  - Il y a différents types de zombie différent ( chien , crawler )
  - Ils peuvent crawler au sol s'ils sont touchés par un explosif

- Un système de round
  - Chaque round il y a de plus en plus de zombie , qui sont de plus en plus fort
  - Après certain nombre de round, les zombies débloquent des fonctionnalités comme courir.
  - Il y a un nombre infinie de round
  - Il y a selon les maps , des rounds spécial avec seulement un type de zombie ( round de chien )
  - Petit time-out entre les différents rounds
  - Un round se finit quand tous les zombies sont apparues et qui ont été massacré

- Des personnages principaux
  - On peut courir , sauté , accroupir ou rampé.
  - Nous n'avons pas de bar de vie , elle se regénère après un certain temps sans dommage reçu
  - On dispose d'un arme au corps à corps par défault et on peut la changé pour une meilleur arme.
  - Nous pouvons avoir jusqu'a deux armes et nous démarrons avec un pistolet de base.
  - Nous avons des projectiles ( deux slots pour deux types différent de grenade : de base et spécial (comme les singes))
  - Possibilité d'avoirs plusieurs boosts temporaire en même temps ( instakill et double points )
  - Possibilité d'être dans un état de presque mort au sol quand on joue en équipe où on se vide tranquillement de notre sang jusqu'à la mort.
  - Possibilité quand on joue en équipe de revivre nos collègues qui sont dans l'était décris dans le point précédent

- La classique mystery-box
  - Quand on paye , elle nous donnes une armes aléatoire.
  - Elle peut être à plusieurs endroits différents sur son socle.
  - Quand on paye , il y a une chance de tombé sur le teddy bear qui change la box de socle. ( Seulement possible s'il y a plusieurs socles dans la map )

- Les singes
  - Ils font partit des objects dans la box, se sont des grenades spécial qui attirent tout les zombies de la carte avant d'explosé.

- Une multitudes d'armes pour nous:
  - Des armes de type explosives.
  - Les armes de type explosives et le grenade peuvent faire du dégat au joueur qui l'utilisent s'ils sont dans la zone d'impact
  - Différent type de shooting style ( rafale , automatique , manuelle , etc ... )
  - Elles doivent rechargé et on un nombre maximum de balle qui peuvent être stocker en même temps.

- Des socles pour acheté les armes et les grenades
  - Ils sont attachés sur les murs
  - Une fois acheté remplace l'arme qu'on n'avait dans les mains sauf si nous avons seulement une arme dans notre possession
  - Quand l'arme est acheté on peut retourner pour racheté des munitions.
  - Si notre arme est améliorer le prix pour racheté des munitions augmente drastiquement

- Des bonus temporaire:
  - Quand on tue un zombie, il y a une chance qu'il drop un bonus temporaire qu'il faut ramassé en pillant dessus.
  - On en n'avoir plusieurs en même temps.
  - Double points: double nos gains monétaire
  - Insta kill: on tue les ennemies en un coup, peut importe l'arme utilisé
  - Réparer les fenêtres: répare toute les fenêtres de la map
  - Munition maximum: Nous redonne le maximum de munition possible pour nos armes.
  - Kaboom: tue tout les zombies présent sur la carte (ceux qui sont spawn)

- Des bonus permanent-ish
  - Des bonus permanent qui touche une statistique chaque.
  - Ils sont perdu quand on tombe au sol.
  - Les machines qui les vendent doivent avoir de l'électricité pour être activé

- Les cartes sont séparés en plusieurs sections
  - Les sections sauf elle de départ sont désactivés
  - Pour activé une section on doit payé la porte pour l'ouvrir se qui donne accès à la section.
  - Quand activé , les zombies peuvent spawner dans les zones proches de la zone et utilisé les fenêtres

- Dans les cartes optionnellement , il y a de l'electricité à activé pour utilisé les appareils électriques.

- Chaque round on regagne des grenades.

- On gagne des points qui sont notre argent pour acheté les différents trucs dans la map.
  - Quand on tir sur un zombie ( x2 si c'est un headshot ) ou un hit avec un truc explosif
  - Quand on répare une latte de fenêtre (nbr max par round)
  - Quand on tue un zombie
  - Quand on revit un de nos collègues

- Les fenêtres
  - Elles sont les portes d'entrée par lequelle les zombies traverses de leur zone de spawn vers la zone intérieur où sont les personnages.
  - Elles peuvent être réparé par un nombre X d'élément que les zombies doivent détruire avant de pouvoir traversé
  - Elles ne peuvent pas être traversé par les joueurs ( ils ne peuvent sortir de leur zone intérieur )
  
- Des pièges 
