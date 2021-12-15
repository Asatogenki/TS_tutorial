import { v4 as uuidv4 } from "uuid";
import { User } from "./User";

const user = new User("安里", "元希", 22); // 名前と年齢は適当に

const contentsElem = document.getElementById("contents");
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

// HTMLエレメントを取得 キャストすることで、入力補完が効く
const saibanButton = document.getElementById("saiban") as HTMLButtonElement;
const uuidSpan = document.getElementById("uuid") as HTMLSpanElement;
// ボタンのクリックイベントを追加
saibanButton.onclick = (e) => {
  uuidSpan.innerText = uuidv4();
};
