# 호텔타임 2.0 웹뷰 HTML 

### 문서
[지라](https://confluence.abouthere.kr/pages/viewpage.action?pageId=726407182)

[제플린](zpl://project?pid=5d1d633794d7ed78bcacd6f8)

### CDN
CSS : https://static.goodchoice.kr/ht-webview/css/all.css

### vscode extension

- Live Sass Compiler
- Live Server
- auto-header

### Auto Header Option - setting.json에 추가
```js
"autoHeader": {
    "format": {
        "startWith": "/**",
        "middleWith": "*",
        "endWith": "*/",
        "headerPrefix": "@"
    },
    "header": {
        "Author": "Your name",
        "Create Time": {
            "type": "createTime",
            "format": "YYYY-MM-DD"
        },
        "Description": ""
    }
}
```

### 로컬개발 필수 설치 플러그인
```bash
npm i -g node-sass
npm i -g live-server
```