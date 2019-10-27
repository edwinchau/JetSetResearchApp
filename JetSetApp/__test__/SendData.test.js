import SendData from "../app/resources/SendData"
import * as MailComposer from 'expo-mail-composer';
import * as FileSystem from 'expo-file-system';

jest.mock("../node_modules/expo-file-system/src/FileSystem");
jest.mock("../node_modules/expo-mail-composer/src/MailComposer");

const p = "../__fakeFiles__";

describe("This is test suits for SendData", ()=> {
  it("sendDataEmail() is tested.", async ()=>{
    await SendData.sendDataEmail();
    expect(FileSystem.readDirectoryAsync).toHaveBeenCalled();
    expect(FileSystem.readAsStringAsync).toHaveBeenCalled();
    expect(MailComposer.composeAsync).toHaveBeenCalled();
  })
});
