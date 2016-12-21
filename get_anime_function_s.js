function get_anime(ad=''){
    var output_string = "       case \"" + document.title.replace(/(.*)\[.*/gi,"$1") + "\":\n           \/\/reg.ReplaceAllString(text, \"$2\")\n            switch reg.ReplaceAllString(text, \"$4\") {\n";
    var num = ( ( (ad=='') || (ad==0) )   ?   1  : 0  );
    for (var i = 0; i < document.getElementsByTagName('a').length; i++) {
        if(document.getElementsByTagName('a')[i].href.indexOf('ani.gamer.com.tw\/animeVideo') != -1){
            if(num>0){
                        output_string += "          case \"" + num + "\":\n" + "                print_string = anime_say + \"" + document.getElementsByTagName('a')[i].href + "\"\n";
            }
            num++;
        }
    }
    output_string += "          default:\n          }";
    console.log(output_string)
    //return output_string;
}

get_anime(0);//get_anime(); //沒廣告的時候
get_anime(1); //有廣告的時候