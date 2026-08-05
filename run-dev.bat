@echo off
cd /d "%~dp0"
echo ========================================================
echo  Starting Pakshal Agencys Development Server from Root
echo ========================================================
echo.
echo Starting backend server...
start cmd /k "npm run server"
echo Starting frontend server...
npm run dev
pause
