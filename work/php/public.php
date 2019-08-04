<?php
    header("content-type:text/html;charset=utf8");

    $db_hostName = 'localhost';
    $db_userName = 'root';
    $db_pwd = 'root';
    $db_name = 'h5-1906';
    $connect = new mysqli($db_hostName,$db_userName,$db_pwd,$db_name);
    if($connect -> connect_error){
        die("数据库连接失败".$connect -> connect_error);
    }
    $connect -> query('set names utf8');
?>