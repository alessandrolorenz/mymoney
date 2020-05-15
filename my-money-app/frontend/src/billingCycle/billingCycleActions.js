import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'

const INITIAL_VALUE = {};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values) {
        return dispatch => {
            axios.post(`${BASE_URL}/billingCycles/`, values)
                .then(resp =>{
                    toastr.success('Sucesso', 'Operação realizada com sucesso')
                    dispatch(init())
                })
                .catch(e => {
                    e.response.data.errors.forEach(error => toastr.error('Erro', error))
                })
        }
    
}

export function showUpdate(billingCycle) {
    console.log(billingCycle);
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    console.log('teste')
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('bilingCycleForm', INITIAL_VALUE)
    ]
}