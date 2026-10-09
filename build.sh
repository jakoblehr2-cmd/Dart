#!/bin/sh
# Baut aus src/page.html + src/app.js die eigenständige index.html und das Artifact-Fragment dist/artifact.html
set -e
cd "$(dirname "$0")"
mkdir -p dist
{ sed '/<script src="app.js"><\/script>/,$d' src/page.html; printf '<script>\n'; cat src/app.js; printf '</script>\n'; } > dist/artifact.html
{ printf '<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  sed -n '1,/^<\/style>/p' dist/artifact.html; printf '</head>\n<body>\n'; sed '1,/^<\/style>/d' dist/artifact.html; printf '</body>\n</html>\n'; } > index.html
