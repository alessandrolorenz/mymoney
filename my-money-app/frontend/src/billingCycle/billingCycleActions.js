import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}] }

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values) {
          return submit(values, 'post')
}


export function update(values){
        return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => { //Nao retorna a action e sim a funcao dispatch
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp =>{
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init()
                    
                //     [ // só da pra passar um array pro dispatch pq ha um middleware - quem vai ler o array sera o reduxMulti
                //     resetForm('billingCicleForm'),
                //     getList(),
                //     selectTab('tabList'),
                //     showTabs('tabList', 'tabCreate')
                // ]
                )
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }  


}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}


export function init(){
    return [//multi
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)

    ]
}