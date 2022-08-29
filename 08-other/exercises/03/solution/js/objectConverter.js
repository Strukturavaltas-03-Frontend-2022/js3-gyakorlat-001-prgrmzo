// 3. Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
//    - `arrayToMap(array)`
//    - `arrayToSet(array)`
//    - `setToMap(set)`
//    - `setToArray(set)`
//    - `mapToArray(map)`
//    - `mapToSet(map)`

// A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át
//  az adatokat egy másikba.
// Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
const objectConverter = {
  arrayToMap(array) {
    const arrMap = new Map([]);
    array.forEach((value, i) => arrMap.set(i, value));
    return arrMap;
  },
  arrayToSet(array) {
    return new Set(array);
  },
  setToMap(set) {
    const setMap = new Map([]);
    Array.from(set).forEach((value, i) => setMap.set(i, value));
    return setMap;
  },
  setToArray(set) {
    return [...set]; // return Array.from(set)
  },
  mapToArray(map) {
    const mapArr = [];
    map.forEach((value) => {
      mapArr.push(value);
    });
    return mapArr;
  },
  mapToSet(map) {
    const mapSet = [];
    map.forEach((value) => mapSet.push(value));
    return new Set(mapSet);
  },
};

export default objectConverter;
