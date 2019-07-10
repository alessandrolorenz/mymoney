import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'

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
                    dispatch([ // só da pra passar um array pro dispatch pq ha um middleware
                        resetForm('billingCicleForm'),
                        getList(),
                        selectTab('tabList'),
                        showTabs('tabList', 'tabCreate')
                    ])
                })
                .catch(e => {
                    e.response.data.errors.forEach(error => toastr.error('Erro', error))
                })

        }

    
}