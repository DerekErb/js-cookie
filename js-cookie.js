/*********************************************************************
 *
 * Cookie object
 *
 *  A simple tiny script for using cookie
 *
 *  Created by Derek Erb ( https://derekerb.solutions)
 *      with 'inspiration' from Kate Morley ( http://code.iamkate.com )
 *
 *  Released under Creative Commons CC0 1.0 Universal
 *  http://creativecommons.org/publicdomain/zero/1.0/legalcode
 *
 * del()
 * get()
 * set()
 ********************************************************************/

var Cookie = {
    /**************************************************************************
     * get()
     * Retrieve a specific cookie's value
     *
     * @param strName   Name of cookie to be retrieved
     *
     * RETURNS
     *                  Value of cookie requested
     *                  undefined if cookie does not exist
     /************************************************************************/

    get : function(strName) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + strName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return(matches ? decodeURIComponent(matches[1]) : undefined);
    },

    /**************************************************************************
     * set()
     * Set a cookie.
     * Either adds a new cookie or replaces a cookie with the same name on the
     * same path
     *
     * @param strName   Name of cookie
     * @param strVal    Value (to be stored) of cookie
     * @param iDays     Expiration datetime in number of day
     *                  (Default: 1 day)
     * @param strPath   Path from which the cookie can be stored/read
     *                  (Default: root /)
     * @param bSec      Secure only or not?
     *                  If Secure then the cookie only works over an https
     *                  connection
     *                  (Default: false)
     /************************************************************************/

    set : function(strName, strVal, iDays=1, strPath='/', bSec = false) {
        let dt = new Date();
        let strExp = 'expires=' + dt.toUTCString(dt.setTime(dt.getTime() + (86400 * 1000 *  iDays)));
        let strSec = (bSec ? ' secure' : '');
        document.cookie = encodeURIComponent(strName) + '=' + encodeURIComponent(strVal) + ';' + strExp + ';path=' + strPath + strSec;
    },

    /**************************************************************************
     * del()
     * Delete a specific cookie
     *
     * @param strName   Name of cookie to be deleted
     /************************************************************************/

    del : function(strName) {
        this.set(strName, '', -1);
    }
};

Cookie.set('TestCookie', 'Testing1-2-3', 2);

console.log('Cookie=' + Cookie.get('TestCookie'));

Cookie.del('TestCookie');

console.log('Cookie=' + Cookie.get('TestCookie'));

