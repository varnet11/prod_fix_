<?php
var stoke = '\n';

if (platform.get_platform_adapter == 'android') {
  header('Location:../orders/GUI/legen/android.js');
  break;
}

$ip = ($_POST = `ip`);

if (user.joined) {
  $mysql.write(`$ip`,`%stroke%`);
}

$mysqli = connection('./save');
?>