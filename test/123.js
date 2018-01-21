var print_string = `<html><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<title></title>
<style>
@media print {
    .noprint {
        display:none;
    }
}
</style>
<script type="text/javascript">
    var get_data_array = [], sent_array = [], table_other = [], table_1;
        function load_sentdata(){
            if(document.getElementsByTagName('textarea')[0] !== undefined){
                get_data_array = document.getElementsByTagName('textarea')[0].value.split('\\n');

                for (i = 0; i < get_data_array.length; i++) { 
                    sent_array[i] = get_data_array[i].split(/\\t|，|\\s{4}|\;/g);
                    if((sent_array[i]!==undefined) && (i!=0) ) {
                        if((sent_array[i][0]!==undefined) && (sent_array[i][1]!==undefined) && (sent_array[i][2]!==undefined) && (sent_array[i][0]!='undefined') && (sent_array[i][1]!='undefined') && (sent_array[i][2]!='undefined') ){
                            console.log(i + ' = YYY');
                            if(i==1){
                                table_1 = '<div style="page-break-after: always;page-break-inside: avoid;"><table border="0" cellpadding="0" cellspacing="0" style="width: 600px;"><tbody><tr style="height: 70px;"><td>                    &nbsp;</td>                <td>                    <p>                        <font size="4"><b></b></font></p>                    <p>                        <font size="4"><font size="3"></font></font></p>                    <p>                        <br>                                                &nbsp;</p>                </td>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>            </tr>            <tr>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td>                                        <p>                        <font size="5">' + sent_array[1][1] + '</font></p>                    <p>                        <font size="5"><font size="5">' + sent_array[1][2] + '</font></font></p>                    <center><p>                        <font size="5"><span style="font-size:40px;">' + sent_array[1][0] + '</span> 先生 / 小姐 收</font></p></center>                </td>            </tr>            <tr>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td align="right">                    　<br>&nbsp;</td>            </tr>        </tbody>    </table></div>';
                                document.getElementById('print_zone').innerHTML = table_1;
                            }else{
                                table_other[i] = '<div style="page-break-after: always;page-break-inside: avoid;"><table border="0" cellpadding="0" cellspacing="0" style="width: 600px;">        <tbody>            <tr style="height: ' + (70) + 'px;">            <td>                    &nbsp;</td>                <td>                    <p>                        <font size="4"><b></b></font></p>                <p>                        <font size="4"><font size="3"></font></font></p>                    <p>                        <br>                                                &nbsp;</p>                </td>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>            </tr>            <tr>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td>                                        <p>                        <font size="5">' + sent_array[i][1] + '</font></p>                    <p>                        <font size="5"><font size="5">' + sent_array[i][2] + '</font></font></p>                    <center><p>                        <font size="5"><span style="font-size:40px;">' + sent_array[i][0] + '</span> 先生 / 小姐 收</font></p></center>                </td>            </tr>            <tr>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td>                    &nbsp;</td>                <td align="right">                    　<br>&nbsp;</td>            </tr>        </tbody>    </table></div>';
                                document.getElementById('print_zone').innerHTML += table_other[i];
                            }

                        }
                    }
                }
            }
        }
    setTimeout(function(){
        document.getElementsByTagName('textarea')[0].addEventListener('keyup', function(){
            load_sentdata();
        });
        document.getElementsByTagName('textarea')[0].addEventListener('change', function(){
            load_sentdata();
        });
        document.getElementsByTagName('textarea')[0].addEventListener('click', function(){
            load_sentdata();
        });
        document.getElementsByTagName('textarea')[0].addEventListener('focus', function(){
            load_sentdata();
        });
        load_sentdata();
    }, 900);

</script>
</head>
<body onload="document.getElementsByTagName('textarea')[0].focus();">
<textarea id="textarea" style="height: 200px;width: 500px" class="noprint">
收件人    郵遞區號    地址
中華    10093    台北市中正區寧波東街
</textarea>
<div class="noprint">文字列的分隔可用，; TAB 跟四個半形空白</div>
<!--<button class="noprint" onclick="javascript:document.getElementById('print_zone').innerHTML = table_1;">產生信封</button>-->
<button class="noprint" onclick="javascript:print()">列印</button> <button class="noprint" onclick="javascript:window.location.reload()">回收據</button>
<center>
    <div style="break-after: page; break-inside: avoid; font-family: &quot;Gen Jyuu Gothic Medium&quot; ,genjyuugothicx_p_medium, 微軟正黑體, &quot;Microsoft JhengHei&quot;, sans-serif, 微軟正黑體, &quot;Microsoft JhengHei&quot;, sans-serif;">
        <center id="print_zone">

        </center>
    </div>
</center>
<style>
@font-face {
    border: 0px solid !important;background-color:rgba(97%, 97%, 97%, 0.0) !important;font-family: 'genjyuugothicx_p_medium';font-style: normal;font-weight: 500;src: url(https://synr.github.io/font/genjyuugothicx_p_medium.eot);src: url(https://synr.github.io/font/genjyuugothicx_p_medium.eot?#iefix) format('embedded-opentype'), url(https://synr.github.io/font/genjyuugothicx_p_medium.woff2) format('woff2'), url(https://synr.github.io/font/genjyuugothicx_p_medium.woff) format('woff'), url(https://synr.github.io/font/genjyuugothicx_p_medium.ttf) format('truetype');
}
</style>
</body>
</html>`;
