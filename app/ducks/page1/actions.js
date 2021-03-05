import * as at from './constants';

export const moneyCourceRequest = () => ({
    type: at.MONEY_COURCE_REQUEST,
})

export const moneyCourceSuccess = (obj) => ({
    type: at.MONEY_COURCE_SUCCESS,
    obj,
})

export const moneyCourceFailure = (error) => ({
    type: at.MONEY_COURCE_FAILURE,
    error,
})