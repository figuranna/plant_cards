# Beadandó
A Frontend Keretrendszerekre készült beadandó feladat az előírt feltételek alapján.

## App.jsx
Egyszerű fetch segítségével beolvassa a db.json nevű fájl tartalmát, majd a beolvasott adatokat átadja a Container nevű konténernek.

## Comps
### Card.jsx
- Külön div elemeket hoz létre minden növény számára, mely tartalmazza azok nevét, képét és a grayscale státuszukat.
  - Amennyiben a növény active tulajdonsága true, akkor automatikusan aktiválódik a grayscale effektus rajta.
- A handlechange nevű metódus figyeli a checkbox-on történő változásokat, amivel a grayscale effektust ki és be lehet kapcsolni.

### Container.jsx
- Az összes Card elem számára hoz létre egy div elemet. Itt tárolja a növények kártyáit.
- Ha kap adatot akkor meghívja a Card elem feltöltését.
- Ha nem kap adatot a konténer akkor értesíti arról a felhasználót.

![A weboldalról kép](https://github.com/figuranna/plant_cards/assets/101461379/c63a1057-84f6-4c97-84c1-441d94510b4c)
