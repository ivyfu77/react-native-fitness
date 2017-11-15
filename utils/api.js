import { AsyncStorage } from 'react-native';
import { CALENDAR_STORAGE_KEY } from './_calendar';

export function submitEntry ({ entry, key }) {
  //debugger;
  try {
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
      [key]: entry,
    }));
  } catch (error) {
    // Error saving data
    console.error(error);
  }
}

export function removeEntry (key) {
  //debugger;
  try {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      console.log(results);
      if (data) {
        data[key] = undefined;
        delete data[key];
        AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
      }
    })
  } catch (error) {
    // Error retrieving data
    console.error(error);
  }
}