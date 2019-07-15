import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render(){
        // depois de decorar o componente com reduxForm fica disponivel: handleSubmit
        const { handleSubmit, readOnly } = this.props
       // console.log(handleSubmit)
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={ labelAndInput } readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={ labelAndInput } readOnly={readOnly}
                        label='Mes' cols='12 4' placeholder='Informe o mês'   />
                    <Field name='year' component={ labelAndInput } readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o Ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm) // retorna um obj com o form
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)
// export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)