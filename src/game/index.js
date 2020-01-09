import NUMBER_TO_FIND from "./random";
import getNumber from './input'
import success from './success'
import userInfo from './userInfo'
import counter from './counter'

export default () => {
    let num = getNumber();
    let numberOfShoots = counter(0);
    while (num !== NUMBER_TO_FIND) {
        userInfo(num, NUMBER_TO_FIND);
        num = getNumber();
        numberOfShoots = counter(numberOfShoots)
    }
    success(numberOfShoots);
}