<?php
$HOSTNAME='localhost';
$USERNAME='root';
$PASSWORD='';
$DATABASE='sing-in';
$con=mysqli_connect($HOSTNAME,$USERNAME,$PASSWORD,$DATABASE);
if(con){
    echo" connection sucess";

}
else{
    die(mysqli_error($con));
}
?>
