# validation

typescriptでの入力バリデーションチェックです。


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

## メルアドチェック

「mail」属性で、メルアドが入力されたかのチェックが有効になります。  

ex.メルアドかをチェックします。

```html:sample
<input type="text" mail>
```

## 郵便番号チェック

「postalcode」属性で、郵便番号が入力されたかのチェックが有効になります。  

ex.郵便番号かをチェックします。

```html:sample
<input type="text" postalcode>
```
