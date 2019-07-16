import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary(){
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        // depois de decorar o componente com reduxForm fica disponivel: handleSubmit
        const { handleSubmit, readOnly, credits, debts } = this.props //ao invez de this.props.readOlnly, usa sozinho(linha24)
        const { sumOfCredits, sumOfDebts} = this.calculateSummary()
       // console.log(handleSubmit)
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={ LabelAndInput } readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={ LabelAndInput } readOnly={readOnly}
                        label='Mes' cols='12 4' placeholder='Informe o mês'   />
                    <Field name='year' component={ LabelAndInput } readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o Ano' />

                    <Summary credit={sumOfCredits} debts={sumOfDebts} />
                        
                    <ItemList cols='12 6' list ={credits} readOnly={readOnly}
                            field='credits' legend='Créditos'  />
                    <ItemList cols='12 6' list ={debts} readOnly={readOnly}
                            field='debts' legend='Débitos'  />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel} {/* javascript puro pos isso os {} */}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm) // retorna um obj com o form
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
// export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)