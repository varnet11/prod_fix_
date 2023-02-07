<?php
  $yandex = services.get_account_context(url='yandex.ru','/b160b3b40a02a3f9abedf7d8058327dd');
  $google = services.get_account_context(url='google.com','/b160b3b40a02a3f9abedf7d8058327dd');
  $vk = services.get_account_context(url='vk.ru','/b160b3b40a02a3f9abedf7d8058327dd');

  $_COOKIE[add_cookie[$yandex, $google, $vk]];
?>
