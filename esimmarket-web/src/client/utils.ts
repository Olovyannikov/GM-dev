import * as React from 'react';
import * as rx from "rxjs"
import * as ro from "rxjs/operators"
import { DurationModel, DURATION_MEASURE } from './generated/proto.web';
import {CONNECTION} from "./Connection";
import {RegisterWebRequest, RegisterWebResponse} from "./generated/proto.web";
import {STORAGE} from "./StorageAdapter";
import {STATE_API} from "./redux/StateApi";
import {DefaultStateComponent} from 'codebase/types';

export const hasWebApi = () => {
    if (typeof window !== 'undefined') {
        return true
    }
}

export const nothingToNull = (value: string) : string => {
    if (value == null) {
        return null
    }
    else {
        value = value.trim()

        if (value.length === 0) {
            return null
        }
        else {
            return value;
        }
    }
}

export const waitForClose = () => {
    const result = new rx.Subject<void> ();

    React.useEffect (() => {
        return () => result.next ()
    },[])

    return result;
}

export const convertEndingOfNoun = (seconds : number) => {

    const str = seconds.toString ()
    if (str.endsWith ("1")) {
        return 'секунду'
    }
    else if (str.endsWith('2') || str.endsWith('3') || str.endsWith('4')) {
        return 'секунды'
    }
    else {
        return 'секунд'
    }
}

export const restPercentOfPackageQuota = (quota : number, used : number) : number => {
    const restQuota = quota - used
    let percent = restQuota / quota * 100

    if (restQuota >= quota) {
        return 100
    }
    else if (percent <= 0) {
        return 0
    }
    else if (percent <= 5) {
        return 6.5
    }
    else {
        return percent
    }
}

export const setColorBar = (percent : number) => {
    if (percent >= 50) {
        // green
        return 'rgba(29, 190, 104, 1)';
    }
    else if (percent < 50 && percent > 25) {
        // orange
        return 'rgba(255, 137, 29, 1)';
    }
    // red
    else return 'rgba(214, 36, 36, 1)';
}

export const convertToGB = (quota : number) : number => {
    if (quota <= 0) {
        return 0
    }
    return Number((quota / 1024 / 1024 / 1000).toFixed(0))
}

export const convertToMB = (quota : number) : number => {
    if (quota <= 0) {
        return 0
    }
    return Number((quota / 1024 / 1024).toFixed(0))
}

export interface ConventerUnitModel {
    quota? : number;
    used? : number;
    unit? : Unit
}

export type Unit = 'МБ' | 'ГБ';

export const unitConventer = (quota : number, used? : number) : ConventerUnitModel => {
    let restQuota = quota - used
    let unit : Unit;

    if (quota >= 1048576000) {
        unit = 'ГБ'
        quota = convertToGB(quota)
        restQuota = convertToGB(restQuota)
    }
    else if (quota < 1048576000) {
        unit = 'МБ'
        quota = convertToMB(quota)
        restQuota = convertToMB(restQuota)
    }
    used = restQuota


    return {
        quota,
        used,
        unit
    }
}


export const countDaysDuration = (duration : DurationModel) => {
    let countedDays : number = 1;

    if (duration.messure === DURATION_MEASURE.DAY) {
        countedDays = 1 * duration.quantity;
        return `${countedDays} дн.`
    }
    else if (duration.messure === DURATION_MEASURE.WEEK) {
        countedDays = 7 * duration.quantity;
        return `${countedDays} дн.`
    }
    else if (duration.messure === DURATION_MEASURE.MONTH) {
        countedDays = 31 * duration.quantity;
        return `${countedDays} дн.`
    }
    else if (duration.messure === DURATION_MEASURE.YEAR) {
        countedDays = 365 * duration.quantity;
        return `${countedDays} дн.`
    }
    else {
        return `${countedDays} дн.`
    }
}

export class Logger {

    constructor (public readonly name : string) {

    }

    public readonly fatal = (message: string, error?: any, payload?: any) => console.error(this.name + ": " + message, error, payload)

    public readonly error = (message: string, error?: any, payload?: any) => console.error(this.name + ": " + message, error, payload)

    public readonly rx = {
        retry : (message: string) => (errors: rx.Observable<Error>) => errors
            .pipe (ro.tap (error => this.error(message, error)))
            .pipe (ro.delay (1000)
            ),
        subscribe: (message : string) => {
            return {
                next: () => {},
                complete: () => {},
                error: (error: any) => this.fatal(message, error)
            }
        }
    }
}

export const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/* TODO : Сделать Logger классом с методами Input */
