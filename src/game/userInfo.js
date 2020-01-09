import {TOO_LESS, TOO_MUCH} from "./constants";

export default (number, expectedNumber) => {
    if (number > expectedNumber) {
        alert(TOO_MUCH)
    } else {
        alert(TOO_LESS)
    }
}