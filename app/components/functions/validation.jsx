import { alert } from "@functions/alertmessage"; 

export const phonenovalidate = (e) => {
    if (e.currentTarget.value) {
        if (!/^[6-9]\d{9}$/.test(e.currentTarget.value)) {
            e.currentTarget.value = "";
            alert("Please enter a valid mobile number");
            return false;
        }
    }
};

export function checknumberonly(e) {
    var arr = [46, 8, 9, 27, 13, 37, 38, 39, 40];
    if (
        arr.indexOf(e.keyCode) === -1 &&
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
    ) {
        e.preventDefault();
    }
}

export function checknumbersanddecimals(e) {
    var arr = [46, 8, 9, 27, 13, 37, 38, 39, 40,110,190];
    if (
        arr.indexOf(e.keyCode) === -1 &&
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
    ) {
        e.preventDefault();
    }
}

export const emailvalidate = (e) => {
    if (e.currentTarget.value) {
        if (!/\S+@\S+\.\S+/.test(e.currentTarget.value)) {
            e.currentTarget.value = "";
            alert("Please enter a valid email address");
            return false;
        }
    }
};

export const accordemailvalidate = (e) => {
    if (e.currentTarget.value) {
        if (!/\S+@\S+\.\S+/.test(e.currentTarget.value)) {
            e.currentTarget.value = "";
            alert("Please enter a valid email address");
            return false;
        }else if(!(e?.currentTarget?.value?.toLowerCase().endsWith('@accordfintech.com'))){
            e.currentTarget.value = "";
            alert("Please use company email for password reset");
            return false;
        }else{
            return true;
        }
    }
};


export const panno_validn = (e) => {
    const pan = e.currentTarget.value;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (pan && !panPattern.test(pan)) {
        e.currentTarget.value = '';
        alert('Invalid PAN Number! Please re-enter.');
        return false;
    }
    return true;
};

export const checkAlphabetOnly = (e) => {
    const charCode = e.which || e.keyCode;

    // Allowed keys: alphabetic characters (A-Z, a-z), space (32), dot (46 is used for delete so we use 190 for dot), backspace (8), enter (13), delete (46), tab (9)
    if (
        (charCode >= 65 && charCode <= 90) || // A-Z
        (charCode >= 97 && charCode <= 122) || // a-z
        charCode === 32 || // Space
        //charCode === 190 || // Dot (.)
        charCode === 8 || // Backspace
        charCode === 13 || // Enter
        charCode === 46 || // Delete
        charCode === 9 || // Tab
        (charCode >= 37 && charCode <= 40) // Arrow keys
    ) {
        if (e.location === 3) { // Numpad keys
            e.preventDefault();
            return false;
        }
        return true;
    } else {
        e.preventDefault();
        return false;
    }
};


export const serverPhoneValidate = (val) => {
    if (val) {
        if (!/^[6-9]\d{9}$/.test(val)) {
            return false;
        }else{
            return true;
        }
    }
};


export const serverEmailvalidate = (val) => {
    if (val) {
        if (!/\S+@\S+\.\S+/.test(val)) {
            return false;
        }
        else{
            return true;
        }
    }
};