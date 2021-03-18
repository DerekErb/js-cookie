var Cookie = {
    get : function(strName) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + strName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return(matches ? decodeURIComponent(matches[1]) : undefined);
    },
    set : function(strName, strVal, iDays=1, strPath='/', bSec = false) {
        let dt = new Date();
        let strExp = 'expires=' + dt.toUTCString(dt.setTime(dt.getTime() + (86400 * 1000 *  iDays)));
        let strSec = (bSec ? ' secure' : '');
        document.cookie = encodeURIComponent(strName) + '=' + encodeURIComponent(strVal) + ';' + strExp + ';path=' + strPath + strSec;
    },
};
