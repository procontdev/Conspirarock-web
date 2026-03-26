@echo off
title Reiniciar ConspiraRock Web
cd /d E:\DESARROLLO\Conspirarock\Web
if exist .next rmdir /s /q .next
npm run dev
pause