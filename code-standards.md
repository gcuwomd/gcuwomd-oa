<!--
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-06 21:21:45
 * @LastEditTime: 2022-11-07 19:27:50
 * @FilePath: \gcuwomd-oa\code-standards.md
 * @Description: 
-->
# 网信委 OA 系统开发手册

## 启动
```shell
# 安装依赖
yarn

# 本地调试
yarn dev
```

## git 提交规范

- **feat：** 提交新功
- **fix：** 修复 bug
- **docs：** 修改了文档
- **style：** 调整代码格式，没有修改代码逻辑（例如修改空格，缩进，格式化等等）
- **refactor：** 代码重构，没有修复 bug 也没有新增功能，在不改变代码逻辑的情况下修改代码的编写方式
- **test：** 添加或修改代码测试
- **chore：** 杂项，例如修改.gitignore，新增依赖等等

每次提交代码只能选择上述选项的改动提交，对于一个文件有多种改动的，例如在一个文件中既修改了 bug 又新增了功能这种情况，应该在修改完 bug 后提交一次 fix，新增功能后再提交一次 feat

## 使用函数式编程

在定义函数时，使用以下格式定义

```ts
const postData = (params: formData): void => {
  // do something
};
```

不要使用以下格式定义函数

```ts
function postData(params: formData): void {
  // do something
}
```

## 代码注释

安装插件`koroFileHeader`  
在项目的`.vscode`文件夹下编辑 `settings.json`，添加以下配置：

```json
"fileheader.customMade": {
    "Author": "git config user.name",
    "LastEditors": "git config user.name",
    "Date": "Do not edit",
    "LastEditTime": "Do not edit",
    "FilePath": "Do not edit",
    "Description": ""
  },
  "fileheader.cursorMode": {
    "description": "",
    "param": "",
    "return": ""
  }
```

在声明函数后，在函数的上一行使用快捷键 `ctrl+win+t` 生成注释并填写完整，示例如下：

```ts
/**
 * @description: 提交xx表单数据
 * @param {formData} data xx表单数据
 * @return {AxiosResponse} 返回服务器响应数据
 */
const postData(data:formData):Promise<AxiosResponse>{
  return axios.post("xxx",data)
}
```

- `@description` 介绍函数的功能
- `@param` 说明函数有什么参数（可选）
- `@return` 说明函数返回什么数据（可选）

