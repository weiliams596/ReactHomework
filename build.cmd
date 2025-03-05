echo off

:: 切换到项目目录
cd Homeworkes

:: 运行构建命令
echo Running npm run build...
call npm run build
IF %ERRORLEVEL% NEQ 0 (
  echo Build failed!
  exit /b %ERRORLEVEL%
)

echo Running npm run deploy...
call npm run deploy
IF %ERRORLEVEL% NEQ 0 (
  echo Deploy failed!
  exit /b %ERRORLEVEL%
)

:: 打印完成消息
echo Build completed and files copied successfully!

echo Copying files to destination folder...
xcopy "dist\*" "../../ReactShower/" /E /I /Y
IF %ERRORLEVEL% NEQ 0 (
  echo File copy failed!
  exit /b %ERRORLEVEL%
)
echo Files copied successfully!

echo Submitting files to GitHub...

cd ../../ReactShower

echo Please enter your commit message:
set /p commitMessage=

git add .
git commit -m "%commitMessage%"
IF %ERRORLEVEL% NEQ 0 (
  echo Git commit failed!
  exit /b %ERRORLEVEL%
)

git merge --strategy-option theirs
IF %ERRORLEVEL% NEQ 0 (
  echo Git merge failed!
  exit /b %ERRORLEVEL%
)

git push
IF %ERRORLEVEL% NEQ 0 (
  echo Git push failed!
  exit /b %ERRORLEVEL%
)

echo Operation completed successfully!
pause
