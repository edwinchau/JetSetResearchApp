import SaveData from "../app/resources/SaveData/SaveData"
import * as FileSystem from 'expo-file-system';

var promiseHolder = 0;

describe('\nsaveNewFile() is tested.\n', ()=>{
  it("A file is going to be created.",async ()=>{
      await FileSystem.writeAsStringAsync("cao","test.txt");
      promiseHolder = await FileSystem.getInfoAsync("test.txt");
      gan = await FileSystem.readAsStringAsync("test.txt");
      console.log(promiseHolder)
      console.log(gan)
  });
});

// describe('\nappendToFile() is tested.\n', ()=>{
//   it("File is found, read, and appended.",async ()=>{
//     const filename = "testing.txt";
//     const result = await SaveData.appendToFile("append this to file", FileSystem.documentDirectory + filename);
//     expect(result).toBe(false);
//   });
//
//   it("File is found but there is no permission to read",async ()=>{
//     const result = await SaveData.appendToFile("hello from Wednesday",'noReadPermission');
//     expect(result).toBe(false);
//   });
//
//   it("File does not exist", async ()=>{
//     const result = await SaveData.appendToFile("unexisted file.",'unexisted');
//     expect(result).toBe(false);
//   });
// });
