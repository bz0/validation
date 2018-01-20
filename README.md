# validation

typescriptでの入力バリデーションチェックです。

![フォーム](https://imgur.com/a/qM7Q2 "サンプル")


## 使い方

typescriptでの使い方です。  

```
import { validation } from "./validation"

const v = new validation();
const button = document.getElementById("regist");
button.onclick = v.check;
```

## 未入力チェック

「required」属性を追加することで未入力チェックが有効になります。  

```html:sample
<input type="text" required>
```

## 文字数下限チェック

「data-minlength」属性で、○文字以上が入力されたかのチェックが有効になります。  
  
ex.4文字以上かをチェックします

```html:sample
<input type="text" data-minlength="4">
```

## 文字数上限チェック

「data-maxlength」属性で、○文字以下が入力されたかのチェックが有効になります。  

ex.10文字以下かをチェックします。

```html:sample
<input type="text" data-maxlength="10">
```
