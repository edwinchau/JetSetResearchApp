import SaveData from "../app/resources/SaveData"
import * as FileSystem from 'expo-file-system';

jest.mock("../node_modules/expo-file-system/src/FileSystem");
const localTestingFile = "../__mock__/testing.txt"

describe('\nThis is test suits for SaveData.\n', ()=>{
  it("appendToFile() is tested.",async ()=>{
      FileSystem.documentDirectory = "../__mock__/";
      await SaveData.appendToFile("some text", localTestingFile);
      expect(FileSystem.getInfoAsync).toHaveBeenCalled();
      expect(FileSystem.readAsStringAsync).toHaveBeenCalled();
      expect(FileSystem.writeAsStringAsync).toHaveBeenCalled();
  });

  it("saveNewFile() is tested.", async () =>{
    await SaveData.saveNewFile("testing for saveNewFile()", localTestingFile);
    expect(FileSystem.getInfoAsync).toHaveBeenCalled();
    expect(FileSystem.writeAsStringAsync).toHaveBeenCalled();
  });

  it("delteFile() is tested.", async() =>{
    await SaveData.deleteFile("testing.txt");
    expect(FileSystem.getInfoAsync).toHaveBeenCalled();
    expect(FileSystem.deleteAsync).toHaveBeenCalled();
  });

  it("viewFile() is tested.", async ()=>{
    await SaveData.viewFile("testing.txt");
    expect(FileSystem.readAsStringAsync).toHaveBeenCalled();
  });

  it("displayAllFiles() is tested.", ()=>{
    SaveData.displayAllFiles();
    expect(FileSystem.readDirectoryAsync).toHaveBeenCalled();
  });

  it("saveSurveyResults() is tested.", async ()=>{
    SaveData.saveSurveyResults(localTestingFile, "some answers", "some questions");
    expect(FileSystem.readAsStringAsync).toHaveBeenCalled();
    expect(FileSystem.getInfoAsync).toHaveBeenCalled();
    expect(FileSystem.writeAsStringAsync).toHaveBeenCalled();
  });

  it("deleteAllFiles() is tested.", ()=>{
    SaveData.deleteAllFiles();
    expect(FileSystem.readDirectoryAsync).toHaveBeenCalled();
    expect(FileSystem.getInfoAsync).toHaveBeenCalled();
    expect(FileSystem.deleteAsync).toHaveBeenCalled();
  });

});
