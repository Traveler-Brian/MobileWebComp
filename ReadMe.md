# 關於
### 部署
本網站為參賽作品，已部署於 [Netlify](https://disc-sme.netlify.app) 。
### 可用功能
- [X] 利用 `localStorage` 進行資料存儲
- [x] 查看預存以及用戶 `上載`(儲存至 `localStorage`) 的中小企資料 (包含圖片)
- [x] 使用 `canvas` 將圖片進行壓縮
- [x] 使用 `系統API` 獲取經緯度，使用 `GoogleMap API` 進行地圖顯示。
- [x] 使用 `系統API` 實現原生分享功能。
- [x] 使用列表形式顯示儲存於 `localStorage` 的資料。
- [x] 使用第三方組建實現文字壓縮、搜尋以及部分動畫效果。

### 中小企資料上載
用戶可以進行中小企名稱、地址、備註等信息的填寫，以及使用系統相機功能進行照片的拍攝。資料的儲存方法分為幾個步驟：
1. 使用 `Canvas` 壓縮圖片並轉為 `base64` 進行儲存以及預覽
2. 把所有資料打包成一個完整的 `object` 然後準備儲存到 `localStorage` 既存資料末尾。`[{},{},{既存資料},{新資料}]`如不存在既存資料將直接儲存。
3. 抽出既存資料，加入新資料並打包成完整 `array` 。
4. 使用第三方組建進行整體轉碼以及壓縮。
5. 返回狀態信息 (**成功** 或者 **失敗**)

### 第三方組建
1. FuzzySet `模糊搜尋組建，用於在 所有「發現」 的搜尋欄中搜尋中小企並給出最近似結果。`
2. Aos `動畫組建，用於實現部分動畫效果。`
3. JQuery `實用組建`
4. Lity `彈出(PopUp)組建，用於實現彈出效果以及功能。`
5. Lz-String `文本壓縮組建，用於整體壓縮文本以節省 localStorage 用量。`
6. W3.css `美化組建，可能涉及少量使用。`
7. Google Font `字體組建，用於實現各平台字體統一。`
8. Animate CSS `動畫組建，目前已棄用，使用 Aos 代替。`

> 儲存於 `img/` 下以及於 `inner.js` 中以 `base64` 格式存在的圖片檔案均來自於網路。

### 螢幕截圖
<details><summary>展開①</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/0.PNG?raw=true)

</details>
<details><summary>展開②</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/1.PNG?raw=true)

</details>
<details><summary>展開③</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/2.PNG?raw=true)

</details>
<details><summary>展開④</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/3.PNG?raw=true)

</details>
<details><summary>展開⑤</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/4.PNG?raw=true)

</details>

<details><summary>展開⑥</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/5.PNG?raw=true)

</details>

<details><summary>展開⑦</summary>

![image](https://github.com/Traveler-Brian/MobileWebComp/blob/master/screenshots/6.PNG?raw=true)

</details>

### 螢幕錄影
按以下下面縮圖進入YouTube觀看。


[![image](https://img.youtube.com/vi/A3jWGTysKAU/0.jpg)](https://www.youtube.com/watch?v=A3jWGTysKAU)
