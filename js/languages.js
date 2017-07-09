// Copyright (c) 2017 Matthew Brennan Jones <matthew.brennan.jones@gmail.com>
// This software is licensed under AGPL v3 or later
// http://github.com/workhorsy/comic_book_reader
"use strict";


const g_i18n_storage = {
	"A touch friendly HTML5 comic book reader that reads CBR, CBZ, CBT, and PDF files.": {
		"de" : "Ein berührungsfreier HTML5-Comic-Leser, der CBR-, CBZ-, CBT- und PDF-Dateien liest.",
		"es": "Un lector de cómics HTML5 amigable al tacto que lee CBR, CBZ, CBT y archivos PDF",
		"fr": "Un lecteur de bande dessinée HTML5 convivial qui lit les fichiers CBR, CBZ, CBT et PDF.",
		"ja": "CBR、CBZ、CBT、およびPDFファイルを読み取るタッチフレンドリーなHTML5コミックブックリーダーです。",
		"ru": "Удобный в обращении читатель комиксов HTML5, который читает файлы CBR, CBZ, CBT и PDF.",
		"zh": "一个触摸友好的HTML5漫画书阅读器，读取CBR，CBZ，CBT和PDF文件。",
	},
	"Allow right click": {
		"de" : "Klicken Sie mit der rechten Maustaste",
		"es": "Permitir clic derecho",
		"fr": "Autoriser le clic droit",
		"ja": "右クリックを許可する",
		"ru": "Разрешить правый щелчок",
		"zh": "允许右键单击",
	},
	"Archive contains no images.": {
		"de" : "Archiv enthält keine Bilder.",
		"es": "El archivo no contiene imágenes.",
		"fr": "Archive ne contient aucune image.",
		"ja": "アーカイブに画像がありません。",
		"ru": "Архив не содержит изображений.",
		"zh": "存档不包含图像。",
	},
	"Check for updates": {
		"de" : "Auf Updates prüfen",
		"es": "Buscar actualizaciones",
		"fr": "",
		"ja": "アップデートを確認",
		"ru": "Проверить наличие обновлений",
		"zh": "检查更新",
	},
	"Check for updates now": {
		"de" : "Überprüfen Sie jetzt auf Updates",
		"es": "Buscar actualizaciones ahora",
		"fr": "Vérifier les mises à jour",
		"ja": "今すぐ更新を確認する",
		"ru": "Проверить наличие обновлений",
		"zh": "现在检查更新",
	},
	"Clear all data": {
		"de" : "Löschen Sie alle Daten",
		"es": "Borrar todos los datos",
		"fr": "Effacer toutes les données",
		"ja": "すべてのデータを消去する",
		"ru": "Очистить все данные",
		"zh": "清除所有数据",
	},
	"Comic Book Reader": {
		"de" : "Comic-Leser",
		"es": "Lector de Cómic",
		"fr": "Lecteur de bande dessinée",
		"ja": "コミックブックリーダー",
		"ru": "Читатель комиксов",
		"zh": "漫画书阅读器",
	},
	"Done clearing all data": {
		"de" : "Löschen aller Daten",
		"es": "Hecho borrar todos los datos",
		"fr": "Terminé de supprimer toutes les données",
		"ja": "すべてのデータの消去を完了",
		"ru": "Выполнено очистка всех данных",
		"zh": "完成清除所有数据",
	},
	"Error": {
		"de" : "Fehler",
		"es": "Error",
		"fr": "Erreur",
		"ja": "エラー",
		"ru": "ошибка",
		"zh": "错误",
	},
	"Failed to open 'rar' archive.": {
		"de" : "Das 'rar'-Archiv konnte nicht geöffnet werden.",
		"es": "Error al abrir archivo 'rar'.",
		"fr": "Impossible d'ouvrir l'archive 'rar'.",
		"ja": "'rar'アーカイブを開けませんでした。",
		"ru": "Не удалось открыть архив «rar».",
		"zh": "无法打开“rar”存档。",
	},
	"Failed to open 'tar' archive.": {
		"de" : "Das 'tar'-Archiv konnte nicht geöffnet werden.",
		"es": "Error al abrir archivo 'tar'.",
		"fr": "Impossible d'ouvrir l'archive 'tar'.",
		"ja": "'tar'アーカイブを開けませんでした。",
		"ru": "Не удалось открыть архив «tar».",
		"zh": "无法打开“tar”存档。",
	},
	"Failed to open 'zip' archive.": {
		"de" : "Das 'zip'-Archiv konnte nicht geöffnet werden.",
		"es": "Error al abrir archivo 'zip'.",
		"fr": "Impossible d'ouvrir l'archive 'zip'.",
		"ja": "'zip'アーカイブを開けませんでした。",
		"ru": "Не удалось открыть архив «zip».",
		"zh": "无法打开“zip”存档。",
	},
	"Full Screen": {
		"de" : "Vollbild",
		"es": "Pantalla completa",
		"fr": "Plein écran",
		"ja": "全画面表示",
		"ru": "Полноэкранный",
		"zh": "全屏",
	},
	"Library": {
		"de" : "Bibliothek",
		"es": "Biblioteca",
		"fr": "Bibliothèque",
		"ja": "としょうかん",
		"ru": "Библиотека",
		"zh": "图书馆",
	},
	"Library is empty": {
		"de" : "Bibliothek ist leer",
		"es": "La biblioteca está vacía",
		"fr": "La bibliothèque est vide",
		"ja": "ライブラリが空です",
		"ru": "Библиотека пуста",
		"zh": "图书馆是空的",
	},
	"Loading": {
		"de" : "Laden",
		"es": "Cargando",
		"fr": "Chargement",
		"ja": "読み込み中",
		"ru": "загрузка",
		"zh": "载入中",
	},
	"None": {
		"de" : "Keiner",
		"es": "Ninguna",
		"fr": "Aucun",
		"ja": "なし",
		"ru": "Никто",
		"zh": "没有",
	},
	"of": {
		"de" : "von",
		"es": "de",
		"fr": "de",
		"ja": "の",
		"ru": "из",
		"zh": "的",
	},
	"Open comic file": {
		"de" : "Comic-Datei öffnen",
		"es": "Abrir archivo cómico",
		"fr": "Ouvrir un fichier comique",
		"ja": "コミックファイルを開く",
		"ru": "Открыть комический файл",
		"zh": "打开漫画档案",
	},
	"Settings": {
		"de" : "Einstellungen",
		"es": "Ajustes",
		"fr": "Paramètres",
		"ja": "設定",
		"ru": "настройки",
		"zh": "设置",
	},
	"Software Version:": {
		"de" : "Softwareversion:",
		"es": "Versión del software:",
		"fr": "Une version de logiciel:",
		"ja": "ソフトウェアバージョン：",
		"ru": "Версия ПО:",
		"zh": "软件版本：",
	},
	"Start": {
		"de" : "Anfang",
		"es": "Comienzo",
		"fr": "Début",
		"ja": "開始",
		"ru": "Начало",
		"zh": "开始",
	},
	"Storage used:": {
		"de" : "Verwendete Lagerung:",
		"es": "Almacenamiento utilizado:",
		"fr": "",
		"ja": "使用されたストレージ：",
		"ru": "Используемое хранилище:",
		"zh": "存储使用：",
	},
	"The archive type is unknown": {
		"de" : "Der Archivtyp ist unbekannt",
		"es": "El tipo de archivo es desconocido",
		"fr": "Stockage utilisé:",
		"ja": "アーカイブタイプが不明です",
		"ru": "Тип архива неизвестен",
		"zh": "存档类型未知",
	},
	"Total users online": {
		"de" : "Alle Benutzer online",
		"es": "Total de usuarios en línea",
		"fr": "Nombre total d'utilisateurs en ligne",
		"ja": "オンラインユーザー総数",
		"ru": "Всего пользователей онлайн",
		"zh": "在线用户总数",
	},
	"Use higher quality page previews": {
		"de" : "Verwenden Sie höherwertige Seitenvorschau",
		"es": "Utilizar previsualizaciones de páginas de mayor calidad",
		"fr": "Utilisez des aperçus de page de meilleure qualité",
		"ja": "より高品質のページプレビューを使用する",
		"ru": "Используйте более качественные предварительные просмотры страниц",
		"zh": "使用更高质量的页面预览",
	},
	"Use smoothing when resizing images": {
		"de" : "Verwenden Sie Glättung bei der Größenänderung von Bildern",
		"es": "Utilizar el suavizado al cambiar el tamaño de las imágenes",
		"fr": "Utiliser le lissage lors du redimensionnement des images",
		"ja": "画像のサイズを変更するときにスムージングを使用する",
		"ru": "Сглаживание при изменении размера изображений",
		"zh": "调整图像大小时使用平滑",
	},
	"Visit home page at github": {
		"de" : "Besuchen Sie die Homepage bei github",
		"es": "Visita la página de inicio en github",
		"fr": "Visiter la page d'accueil chez github",
		"ja": "githubでホームページをご覧ください",
		"ru": "Посетить домашнюю страницу github",
		"zh": "访问github主页",
	},
};

