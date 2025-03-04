@echo off
:: 切换到项目目录
cd test-app %~dp0

:: 运行构建命令
npm run build

:: 复制构建输出到指定目录
set SOURCE_DIR=%~dp0dist
set TARGET_DIR= ../../React-Homework-Build/$date%time:~0,2%-%date%time:~3,2%-%date%time:~6,2%

xcopy %SOURCE_DIR% %TARGET_DIR% /E /H /C /I

:: 打印完成消息
echo Build completed and files copied successfully!
pause
